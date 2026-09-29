// ============================================================================
// generar-secciones.cjs
// Crea la carpeta secciones/ con una pagina completa por cada seccion del
// header (cursos, metodo, recursos, faq). La seccion se EXTRAE del index.html
// y se envuelve en una pagina autonome, de modo que no duplicamos el
// contenido a mano: el index.html sigue siendo la fuente unica.
// NO usa template literals ni ${} ; todo con concatenacion.
// ============================================================================
const fs = require("fs");
const path = require("path");

const { RAIZ } = require("./raiz.cjs");

const INDEX = path.join(RAIZ, "index.html");
const DIR_SECCIONES = path.join(RAIZ, "secciones");

// Definicion de las secciones: id, archivo, <title>, <meta description> y el
// nombre que aparece como link activo en el navbar.
const SECCIONES = [
  {
    id: "cursos",
    archivo: "cursos.html",
    nav: "Cursos",
    titulo: "Cursos — Aprende Sin Límites",
    descripcion:
      "Catálogo completo de los 11 cursos de Aprende Sin Límites: 50 módulos y 242 lecciones de Matemática, Física, Química, Biología, Alfabetización Digital, Historia, Ciencia, Tecnología y Ambiente, Razonamiento, Comunicación y Admisión universitaria.",
  },
  {
    id: "metodo",
    archivo: "metodo.html",
    nav: "Método",
    titulo: "Método de estudio — Aprende Sin Límites",
    descripcion:
      "Cómo estudiar con esta guía: rutas por módulos, objetivos por lección, ejemplos resueltos y seguimiento de progreso para prepararte sin límites.",
  },
  {
    id: "tablas",
    archivo: "tablas.html",
    nav: "Tablas",
    titulo: "Tablas y fórmulas — Aprende Sin Límites",
    descripcion:
      "Consulta rápida: tabla periódica interactiva con buscador, fórmulas de álgebra, geometría, trigonometría, física y química, constantes y prefijos del SI.",
    soloNavbar: true,
    generador: "generar-tablas.cjs",
  },
  {
    id: "calculadora",
    archivo: "calculadora.html",
    nav: "Calculadora",
    titulo: "Calculadora científica — Aprende Sin Límites",
    descripcion:
      "Calculadora científica gratuita: suma, potencias, raíces, logaritmos, trigonometría, porcentajes y memoria de los últimos resultados. Funciona sin conexión y con el teclado.",
    soloNavbar: true,
    generador: "generar-calculadora.cjs",
  },
  {
    id: "recursos",
    archivo: "recursos.html",
    nav: "Recursos",
    titulo: "Recursos gratuitos — Aprende Sin Límites",
    descripcion:
      "Recursos externos gratuitos para practicar y ampliar cada tema: simulacros, videos educativos, calculadoras y bancos de preguntas.",
  },
  {
    id: "faq",
    archivo: "faq.html",
    nav: "Preguntas",
    titulo: "Preguntas frecuentes — Aprende Sin Límites",
    descripcion:
      "Respuestas a las dudas más comunes: por dónde empezar, cómo se guarda tu progreso y cuántas horas debes estudiar al día.",
  },
];

/* ---------------------------------------------------------------------------
   Script de arranque del tema.

   Va en el <head> de TODAS las paginas y hace una sola cosa: poner
   data-tema en <html> antes de que se pinte nada. Sin el, el navegador parte
   del tema por defecto (oscuro), pinta el fondo, y cuando ui.js lee el tema
   guardado lo cambia: la pagina aparece oscura un instante y luego salta a
   claro. Ese parpadeo se ve aunque dure 50 ms, y se nota justo en la barra de
   direcciones, que es lo primero que mira el usuario al cambiar de pagina.

   Va aqui, y no dentro de ui.js, porque ui.js se carga al final del <body>:
   para entonces el fondo ya esta pintado.

   Es codigo plano a proposito: no usa ni arrow functions ni template literals,
   para que quede igual en el HTML generado y en las plantillas escritas a mano.
   --------------------------------------------------------------------------- */
const SCRIPT_TEMA = [
  "<script>",
  "/* Aplica el tema guardado ANTES de que se pinte el fondo, para que la pagina",
  "   no aparezca un instante en el tema contrario. La clave es la misma que usa",
  "   ui.js; si alguna vez cambia, hay que cambiarla en los dos sitios. */",
  "(function () {",
  "  var t;",
  "  try {",
  "    t = localStorage.getItem(\"asl-tema\");",
  "  } catch (e) {",
  "    t = null;",
  "  }",
  "  if (t !== \"claro\" && t !== \"oscuro\") {",
  "    /* Sin eleccion previa se sigue al sistema; si no se puede preguntar,",
  "       se usa el oscuro, que es el tema por defecto del sitio. */",
  "    t = (window.matchMedia && window.matchMedia(\"(prefers-color-scheme: light)\").matches)",
  "      ? \"claro\"",
  "      : \"oscuro\";",
  "  }",
  "  document.documentElement.setAttribute(\"data-tema\", t);",
  "})();",
  "</script>",
].join("\n");


// ---------------------------------------------------------------------------
// Extrae <section id="X"> ... </section> emparejando el cierre correcto
// ---------------------------------------------------------------------------
function extraerSeccion(html, id) {
  const apertura = '<section id="' + id + '"';
  const i = html.indexOf(apertura);
  if (i < 0) throw new Error("No se encontro la seccion #" + id);

  let pos = i;
  let nivel = 0;
  const reApertura = /<section\b/g;
  const reCierre = /<\/section>/g;

  while (pos < html.length) {
    reApertura.lastIndex = pos;
    reCierre.lastIndex = pos;
    const a = reApertura.exec(html);
    const c = reCierre.exec(html);
    if (!c) throw new Error("Seccion #" + id + " sin cierre");

    if (a && a.index < c.index) {
      nivel++;
      pos = a.index + 1;
    } else {
      nivel--;
      if (nivel === 0) return html.slice(i, c.index + "</section>".length);
      pos = c.index + 1;
    }
  }
  throw new Error("Seccion #" + id + " sin cierre");
}

// ---------------------------------------------------------------------------
// Reescribe rutas relativas: la seccion vivia en la raiz, ahora vive un nivel
// mas abajo (secciones/), asi que todo lo que apunta a la raiz sube un "..".
// Los anchors internos (#algo) y las URLs absolutas se dejan intactos.
// Es idempotente: un href que ya empieza por "../" no se toca dos veces.
// ---------------------------------------------------------------------------
const PREFIJOS_RAIZ = ["cursos/", "assets/", "secciones/"];

function ajustarRutas(bloque) {
  let out = bloque;
  PREFIJOS_RAIZ.forEach(function (p) {
    ["href=\"" + p, "src=\"" + p].forEach(function (attr) {
      // no(prefix) evita convertir un "../cursos/" que ya esta arriba
      const re = new RegExp(attr, "g");
      out = out.replace(re, attr.replace('"', '"../'));
    });
  });
  // index.html -> ../index.html (respeta lo que ya tenga "../" delante)
  out = out.replace(/href="(?!(\.\.\/|\/|#|https?:|mailto:))index\.html/g, 'href="../index.html');
  return out;
}

// ---------------------------------------------------------------------------
// Navbar: los enlaces van a las paginas de secciones (independientes). La
// marca siempre a la raiz. "REL" permite reutilizarlo desde cursos/<slug>/...
// ---------------------------------------------------------------------------
function navbar(activo, rel) {
  const prefijo = rel || "../";
  const items = SECCIONES.map(function (s) {
    const act = s.id === activo ? ' active' : "";
    const aria = s.id === activo ? ' aria-current="page"' : "";
    return (
      '<li class="nav-item"><a class="nav-link' + act + '"' + aria +
      ' href="' + prefijo + 'secciones/' + s.archivo + '">' + s.nav + "</a></li>"
    );
  }).join("\n          ");
  return (
    '<nav class="navbar navbar-expand-lg nav-guia sticky-top">\n' +
    '    <div class="container">\n' +
    '      <a class="navbar-brand marca d-flex align-items-center gap-2" href="' + prefijo + 'index.html">\n' +
    '        <i class="bi bi-stars fs-5"></i> Aprende Sin Límites\n' +
    "      </a>\n" +
    '      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navSeccion"\n' +
    '        aria-controls="navSeccion" aria-expanded="false" aria-label="Abrir menú">\n' +
    '        <span class="navbar-toggler-icon"></span>\n' +
    "      </button>\n" +
    '      <div class="collapse navbar-collapse" id="navSeccion">\n' +
    '        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-2">\n' +
    "          " + items + "\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </nav>"
  );
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
function footer(prefijo) {
  const enlaces = SECCIONES.map(function (s) {
    return (
      '<a class="me-3" href="' + prefijo + "secciones/" + s.archivo + '">' + s.nav + "</a>"
    );
  }).join("\n          ");
  return (
    '<footer class="footer-guia">\n' +
    '    <div class="container">\n' +
    '      <div class="row gy-4 align-items-center">\n' +
    '        <div class="col-md-6">\n' +
    '          <div class="marca d-flex align-items-center gap-2 mb-2">\n' +
    '            <i class="bi bi-stars"></i> Aprende Sin Límites\n' +
    "          </div>\n" +
    '          <p class="mb-0">Guía abierta para preparar tus áreas académicas con libertad y método.</p>\n' +
    "        </div>\n" +
    '        <div class="col-md-6 text-md-end">\n' +
    "          " + enlaces + "\n" +
    "        </div>\n" +
    '        <div class="col-12 text-center mt-4 pt-3 border-top border-secondary-subtle">\n' +
    '          <small>© <span id="anioAuto"></span> Aprende Sin Límites · Hecho con dedicación para tu futuro.</small>\n' +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </footer>"
  );
}

// ---------------------------------------------------------------------------
// Miga de pan: Inicio / <seccion>. Las demas paginas del sitio ya la llevan.
// Se inserta justo despues del <section ...> de apertura, respetando la
// indentacion de la linea siguiente (el contenedor puede ser
// "container" o "container contenedor-suave").
// ---------------------------------------------------------------------------
function miga(sec, sangria) {
  const p = sangria === undefined ? "    " : sangria;
  return (
    p + '<nav class="miga mb-4" aria-label="breadcrumb">\n' +
    p + '  <a href="../index.html"><i class="bi bi-house-door"></i> Inicio</a>\n' +
    p + '  <span class="mx-2 opacity-50">/</span>\n' +
    p + "  <span>" + sec.nav + "</span>\n" +
    p + "</nav>\n"
  );
}

// ---------------------------------------------------------------------------
// Page wrapper completo
// ---------------------------------------------------------------------------
function pagina(sec, bloque) {
  const conMiga = bloque.replace(
    /(<section[^>]*>)(\r?\n)([ \t]*)/,
    function (_, tag, nl, sangria) {
      return tag + nl + miga(sec, sangria) + sangria;
    }
  );
  return (
    "<!DOCTYPE html>\n" +
    '<html lang="es">\n' +
    "<head>\n" +
    '  <meta charset="UTF-8" />\n' +
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n' +
    "  <title>" + sec.titulo + "</title>\n" +
    '  <meta name="description" content="' + sec.descripcion + '" />\n' +
    "  " + SCRIPT_TEMA + "\n" +
    '  <link rel="preconnect" href="https://fonts.googleapis.com" />\n' +
    '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n' +
    '  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />\n' +
    '  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />\n' +
    '  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet" />\n' +
    '  <link href="../assets/css/estilos.css" rel="stylesheet" />\n' +
    "</head>\n" +
    '<body data-curso="matematica">\n' +
    "\n" +
    "  " + navbar(sec.id, "../") + "\n" +
    "\n" +
    "  <main>\n" +
    conMiga +
    "\n" +
    "  </main>\n" +
    "\n" +
    "  " + footer("../") + "\n" +
    "\n" +
    "  " + '<!-- si el JS no corre, .reveal no debe quedarse invisible -->' + "\n" +
    '  <noscript><style>.reveal { opacity: 1 !important; transform: none !important; }</style></noscript>' + "\n" +
    "\n" +
    '  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>\n' +
    '  <script src="../assets/js/ui.js"></script>\n' +
    '  <script src="../assets/js/principal.js"></script>\n' +
    "</body>\n" +
    "</html>\n"
  );
}

// ---------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------
function main() {
  const html = fs.readFileSync(INDEX, "utf8");
  if (!fs.existsSync(DIR_SECCIONES)) fs.mkdirSync(DIR_SECCIONES, { recursive: true });

  SECCIONES.forEach(function (sec) {
    // "tablas" y "calculadora" las escriben otros generadores (no salen de una
    // seccion del index), pero ya aparecen en el navbar y en el footer.
    if (sec.soloNavbar) {
      console.log("  " + sec.archivo + "  (se genera con " + (sec.generador || "otro generador") + ")");
      return;
    }
    const crudo = extraerSeccion(html, sec.id);
    const bloque = ajustarRutas(crudo);
    const destino = path.join(DIR_SECCIONES, sec.archivo);
    fs.writeFileSync(destino, pagina(sec, bloque), "utf8");
    console.log("  " + sec.archivo + "  (" + crudo.length + " chars)");
  });

  console.log("Secciones generadas: " + SECCIONES.length + " en secciones/");
}

// generar-tablas.cjs y generar-calculadora.cjs reutilizan navbar(), footer(),
// pagina(), SECCIONES y SCRIPT_TEMA de aqui.
module.exports = {
  SECCIONES,
  SCRIPT_TEMA,
  navbar,
  footer,
  pagina,
  extraerSeccion,
  ajustarRutas,
  main,
};

if (require.main === module) main();
