// ============================================================================
// generar-calculadora.cjs
// Escribe secciones/calculadora.html.
//
// A diferencia de las demas secciones, esta no sale de un <section> del
// index.html: la pagina se arma aqui con una cadena. El index tiene su propio
// hero y no tiene sentido duplicarlo aqui.
//
// El archivo se escribe siempre entero (no se parchea), asi que se puede
// cambiar la maqueta sin miedo a que queden restos de la version anterior.
//
// NO usa template literals ni ${} ; todo con concatenacion.
// ============================================================================
const fs = require("fs");
const path = require("path");

const { SECCIONES, pagina } = require("./generar-secciones.cjs");

const { RAIZ } = require("./raiz.cjs");

const DIR_SECCIONES = path.join(RAIZ, "secciones");

const SEC = SECCIONES.filter(function (s) {
  return s.id === "calculadora";
})[0];

if (!SEC) throw new Error("La seccion 'calculadora' no esta en SECCIONES de generar-secciones.cjs");

// ---------------------------------------------------------------------------
// Una tecla del teclado.
//
// Se declara con datos (que pone, que inserta, de que tipo es) y no escribiendo
// el <button> a mano en cada sitio. Asi las 40 teclas del teclado scientifico se
// leen como una tabla y anadir una nueva es copiar una linea, no dos.
//
//   rotulo   lo que se ve
//   inserta  lo que va al campo (null = es un boton de accion)
//   tipo     familia de color: num, op, fn, ctrl, igual
//   titulo   texto para el tooltip y para lectores de pantalla
// ---------------------------------------------------------------------------
const cientificas = [
  { rotulo: "sin", inserta: "sin()", tipo: "fn", titulo: "Seno" },
  { rotulo: "cos", inserta: "cos()", tipo: "fn", titulo: "Coseno" },
  { rotulo: "tan", inserta: "tan()", tipo: "fn", titulo: "Tangente" },
  { rotulo: "ln", inserta: "ln()", tipo: "fn", titulo: "Logaritmo natural" },
  { rotulo: "log", inserta: "log()", tipo: "fn", titulo: "Logaritmo decimal" },
  { rotulo: "√", inserta: "√()", tipo: "fn", titulo: "Raíz cuadrada" },
  { rotulo: "xʸ", inserta: "^", tipo: "fn", titulo: "Potencia" },
  { rotulo: "1/x", inserta: "1/", tipo: "fn", titulo: "Inverso" },
  { rotulo: "n!", inserta: "!", tipo: "fn", titulo: "Factorial" },
  { rotulo: "π", inserta: "pi", tipo: "fn", titulo: "Pi" },
  { rotulo: "x²", inserta: "^2", tipo: "fn", titulo: "Al cuadrado" },
  { rotulo: "±", inserta: "(0-", tipo: "fn", titulo: "Cambiar el signo" },
];

const basicas = [
  { rotulo: "7", inserta: "7", tipo: "num" },
  { rotulo: "8", inserta: "8", tipo: "num" },
  { rotulo: "9", inserta: "9", tipo: "num" },
  { rotulo: "÷", inserta: "/", tipo: "op", titulo: "Dividir" },

  { rotulo: "4", inserta: "4", tipo: "num" },
  { rotulo: "5", inserta: "5", tipo: "num" },
  { rotulo: "6", inserta: "6", tipo: "num" },
  { rotulo: "×", inserta: "*", tipo: "op", titulo: "Multiplicar" },

  { rotulo: "1", inserta: "1", tipo: "num" },
  { rotulo: "2", inserta: "2", tipo: "num" },
  { rotulo: "3", inserta: "3", tipo: "num" },
  { rotulo: "−", inserta: "-", tipo: "op", titulo: "Restar" },

  { rotulo: "0", inserta: "0", tipo: "num" },
  { rotulo: ",", inserta: ",", tipo: "num", titulo: "Coma decimal" },
  { rotulo: "%", inserta: "%", tipo: "op", titulo: "Porcentaje" },
  { rotulo: "+", inserta: "+", tipo: "op", titulo: "Sumar" },

  { rotulo: "C", tipo: "ctrl", accion: "limpiar", titulo: "Borrar todo" },
  { rotulo: "(", inserta: "(", tipo: "ctrl", titulo: "Abrir paréntesis" },
  { rotulo: ")", inserta: ")", tipo: "ctrl", titulo: "Cerrar paréntesis" },
  { rotulo: "⌫", tipo: "ctrl", accion: "borrar", titulo: "Borrar lo último" },

  { rotulo: "=", tipo: "igual", accion: "igualar", titulo: "Calcular", ancho: 2 },
];

function tecla(t) {
  const clases = ["calc-tecla", "calc-tecla-" + t.tipo];
  if (t.ancho) clases.push("calc-ancho-2");

  const attrs = [];
  if (t.inserta !== undefined && t.inserta !== null) {
    // El valor va en data-insertar, no en el texto del boton: asi el caracter
    // que se inserta y el que se ve pueden ser distintos (raiz, coma, signo).
    attrs.push('data-insertar="' + escapar(t.inserta) + '"');
  }
  if (t.accion) attrs.push('data-accion="' + t.accion + '"');
  if (t.titulo) {
    attrs.push('aria-label="' + escapar(t.titulo) + '"');
    attrs.push('title="' + escapar(t.titulo) + '"');
  }

  return (
    '<button type="button" class="' + clases.join(" ") + '" ' + attrs.join(" ") + ">" +
    escapar(t.rotulo) +
    "</button>"
  );
}

function escapar(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function teclado(lista) {
  return lista.map(tecla).join("\n            ");
}

// ---------------------------------------------------------------------------
// El <section> de la pagina
// ---------------------------------------------------------------------------
function cuerpo() {
  return (
    '<section class="seccion">\n' +
    '  <div class="container">\n' +
    '    <div class="row g-4">\n' +
    '      <div class="col-lg-8">\n' +
    '        <span class="etiqueta">Herramienta</span>\n' +
    '        <h1 class="titulo-seccion mt-1">Calculadora científica</h1>\n' +
    '        <p class="col-mut mb-4">\n' +
    '          Para resolver cuentas de los cursos sin salir de la página: potencias, raíces,\n' +
    '          logaritmos, trigonometría en grados, porcentajes y factoriales. Funciona con el\n' +
    '          teclado, sin conexión y sin instalar nada. Los resultados se quedan a la vista\n' +
    '          en el historial para poder volver a ellos.\n' +
    "        </p>\n" +
    "\n" +
    '        <div class="calc">\n' +
    '          <div class="calc-panel">\n' +
    "            " + pantalla() + "\n" +
    '            <div class="calc-grupo">\n' +
    '              <span class="calc-etiqueta" id="etqCientificas">Científicas</span>\n' +
    '              <div class="calc-teclas" role="group" aria-labelledby="etqCientificas">\n' +
    "            " + teclado(cientificas) + "\n" +
    "              </div>\n" +
    "            </div>\n" +
    '            <div class="calc-grupo">\n' +
    '              <span class="calc-etiqueta" id="etqBasicas">Básicas</span>\n' +
    '              <div class="calc-teclas" role="group" aria-labelledby="etqBasicas">\n' +
    "            " + teclado(basicas) + "\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    '          <div class="calc-panel">\n' +
    '            <div class="d-flex align-items-center justify-content-between mb-2">\n' +
    '              <span class="calc-etiqueta mb-0">Historial</span>\n' +
    '              <button type="button" class="calc-mini d-none" id="calcLimpiarHistorial">Limpiar</button>\n' +
    "            </div>\n" +
    '            <ul class="calc-historial" id="calcHistorial"></ul>\n' +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    '        <div class="card-panel mt-4">\n' +
    '          <h2 class="panel-titulo"><i class="bi bi-keyboard"></i> Atajos de teclado</h2>\n' +
    '          <div class="row">\n' +
    '            <div class="col-sm-6">\n' +
    '              <dl class="calc-atajos">\n' +
    "                " + atajo("0-9", "Escribe cifras") + "\n" +
    "                " + atajo("+ - * /", "Escribe el signo, o su versión con × ÷ −") + "\n" +
    "                " + atajo("^", "Potencia: 2^10") + "\n" +
    "                " + atajo("!", "Factorial: 5!") + "\n" +
    "                " + atajo("Enter", "Calcula y guarda en el historial") + "\n" +
    "              </dl>\n" +
    "            </div>\n" +
    '            <div class="col-sm-6">\n' +
    '              <dl class="calc-atajos">\n' +
    "                " + atajo("Backspace", "Borra el último carácter") + "\n" +
    "                " + atajo("Esc", "Borra todo") + "\n" +
    "                " + atajo("sin cos tan", "Los paréntesis se ponen solos: escribe sin() y el cursor queda dentro") + "\n" +
    "                " + atajo(", o .", "Las dos formas de coma decimal valen") + "\n" +
    "              </dl>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    '      <div class="col-lg-4">\n' +
    '        <div class="card-panel">\n' +
    '          <h2 class="panel-titulo"><i class="bi bi-lightbulb"></i> Ejemplos</h2>\n' +
    '          <p class="text-muted-2 mb-2">Pulsa uno para cargarlo en la calculadora:</p>\n' +
    '          <ul class="calc-ejemplos">\n' +
    listaEjemplos() +
    "\n          </ul>\n" +
    "        </div>\n" +
    "\n" +
    '        <div class="card-panel mt-4">\n' +
    '          <h2 class="panel-titulo"><i class="bi bi-info-circle"></i> Cómo leer la ayuda</h2>\n' +
    "          <ul class=\"lista-checks\">\n" +
    '            <li><i class="bi bi-check-circle"></i>Los ángulos se toman en <strong>grados</strong>; con el botón de arriba se cambia a radianes.</li>\n' +
    '            <li><i class="bi bi-check-circle"></i>El <strong>porcentaje es relativo</strong>: 200 + 10% son 220, no 200,1.</li>\n' +
    '            <li><i class="bi bi-check-circle"></i>Puedes multiplicar sin signo: <strong>2pi</strong>, <strong>(1+2)(3+4)</strong> o <strong>2sin(30)</strong>.</li>\n' +
    '            <li><i class="bi bi-check-circle"></i>El factorial solo admite enteros de <strong>0 a 170</strong>.</li>\n' +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    '    <p class="mt-5 mb-0 text-center">\n' +
    '      <a class="btn btn-ghost btn-sm" href="../secciones/tablas.html">\n' +
    '        <i class="bi bi-table me-1"></i> Ver tablas y fórmulas\n' +
    "      </a>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</section>"
  );
}

function atajo(tecla, descripcion) {
  return (
    "<dt><span class=\"calc-kbd\">" + escapar(tecla) + "</span></dt>\n" +
    "                <dd>" + escapar(descripcion) + "</dd>"
  );
}

// Cada ejemplo es un boton, no un enlace: no lleva a ninguna pagina, carga el
// texto en la calculadora. Con el JS apagado se lee como una linea de texto
// normal, porque el resultado ya esta escrito en el HTML.
function listaEjemplos() {
  return EJEMPLOS.map(function (e) {
    return (
      "            " +
      '<li><button type="button" class="calc-ejemplo" data-ejemplo="' + escapar(e.expr) + '">' +
      '<span class="calc-ejemplo-expr">' + escapar(e.expr) + "</span>" +
      '<span class="calc-ejemplo-val">= ' + escapar(e.valor) + "</span>" +
      "</button></li>"
    );
  }).join("\n");
}

/* Cada ejemplo lleva su resultado ya resuelto, porque asi la pagina sigue
   siendo util con el JavaScript apagado: se lee igual, y solo pierde el
  behavior de un clic. El guion de la calculadora usa coma decimal, asi que
   estos textos van con coma. */
const EJEMPLOS = [
  { expr: "3,5 × (2 + √9)", valor: "17,5" },
  { expr: "200 + 15%", valor: "230" },
  { expr: "5!", valor: "120" },
  { expr: "sin(30)", valor: "0,5" },
  { expr: "2^10", valor: "1024" },
  { expr: "log(1000)", valor: "3" },
];

const ejemplos = EJEMPLOS;

// La pantalla: el campo donde se escribe y la linea de resultado.
function pantalla() {
  return (
    '            <div class="calc-pantalla">\n' +
    '              <label class="calc-etiqueta" for="calcExpr">Expresión</label>\n' +
    '              <input id="calcExpr" class="calc-expresion" type="text" inputmode="text"\n' +
    '                autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"\n' +
    '                placeholder="Escribe o pulsa los botones…" aria-describedby="calcError" />\n' +
    '              <div class="calc-resultado" id="calcResultado" aria-live="polite">0</div>\n' +
    '              <p class="calc-error mb-0" id="calcError" role="status"></p>\n' +
    '              <div class="d-flex align-items-center justify-content-between mt-2">\n' +
    '                <span class="calc-etiqueta mb-0">Ángulos</span>\n' +
    '                <button type="button" class="calc-mini" id="calcAngulos"\n' +
    '                  aria-label="Unidades angulares: grados. Pulsa para cambiar.">Grados</button>\n' +
    "              </div>\n" +
    "            </div>"
  );
}

// ---------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------
function main() {
  if (!fs.existsSync(DIR_SECCIONES)) fs.mkdirSync(DIR_SECCIONES, { recursive: true });

  let html = pagina(SEC, cuerpo());

  // La pagina necesita su propio script ademas de los comunes que pagina()
  // ya coloca. Se inserta antes de ui.js para que quede en el mismo sitio que
  // en el resto de paginas.
  const ancla = '  <script src="../assets/js/ui.js"></script>';
  if (html.indexOf(ancla) < 0) throw new Error("No se encontro el punto de insercion de los scripts");
  html = html.split(ancla).join('  <script src="../assets/js/calculadora.js"></script>\n' + ancla);

  // Los ejemplos del lateral los rellena calculadora.js al vuelo, porque el
  // resultado depende de si los grados estan activados. Aqui solo se comprueba
  // que los botones que el script busca existen en la pagina.
  const NECESARIOS = [
    'id="calcExpr"',
    'id="calcResultado"',
    'id="calcError"',
    'id="calcHistorial"',
    'id="calcLimpiarHistorial"',
    'id="calcAngulos"',
  ];
  NECESARIOS.forEach(function (m) {
    if (html.indexOf(m) < 0) throw new Error("Falta " + m + " en la pagina de la calculadora");
  });
  if (html.indexOf("class=\"calc-tecla") < 0) throw new Error("La calculadora salio sin teclas");

  const destino = path.join(DIR_SECCIONES, SEC.archivo);
  fs.writeFileSync(destino, html, "utf8");
  console.log("  " + SEC.archivo + "  (" + html.length + " chars, " + (cientificas.length + basicas.length) + " teclas)");
}

if (require.main === module) main();

module.exports = { cuerpo, pantalla, tecla, teclado,cientificas, basicas, ejemplos };
