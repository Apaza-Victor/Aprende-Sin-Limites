// ============================================================================
// verificar-marcas.cjs
// Lint de las marcas que producen los bloques ricos de las lecciones.
// Ver la seccion "Marcas disponibles" de generar-estructura.cjs:
//
//   $$ formula $$          -> <div class="formula">
//   | a | b | + |---|---| -> <table class="tabla-datos">
//   ```codigo```           -> <div class="lecc-codigo">
//   !! Practica            -> <div class="lecc-ejercicio">    (>> respuesta)
//   ?? Comprueba           -> <div class="lecc-autoeval">     (- p :: r)
//   glosario:term :: def   -> <dl class="lecc-glosario">
//
// Estas marcas son instrucciones, no prosa, asi que no pueden pasar por el
// linter de texto de verificar-contenido.cjs (este los invoca). Aqui se
// comprueba lo que el generador daria por hecho: que los delimitadores cierran,
// que las tablas cuadran y que no se escapa ningun comando desconocido.
//
// Uso (desde la raiz del proyecto):
//   node herramientas/verificar-marcas.cjs            revisa todo el contenido fusionado
//   node herramientas/verificar-marcas.cjs <archivo>  revisa un .js suelto
// ============================================================================
const path = require("path");
const { cargar } = require("./cargar-datos.cjs");
// Se importa la tabla de simbolos real en vez de copiarla aqui: si el generador
// aprende un comando nuevo, este verificador lo acepta sin editar dos sitios.
const { SIMBOLOS, CONJUNTOS, RAYAS } = require("./generar-estructura.cjs");
const { RAIZ } = require("./raiz.cjs");

// Todo comando LaTeX que generar-estructura.cjs sabe dibujar. Si una formula
// trae uno que no esta aqui, el generador no lo entendera y lo soltara tal cual
// en la pagina; esto avisa antes de que llegue a imprimirse.
const COMANDOS_ACEPTADOS = new Set([
  // estructurales: se procesan como bloques anidados
  "frac", "sqrt",
  // envuelven texto plano
  "text", "mathrm", "textrm", "mathbf", "mathit", "operatorname",
  // funciones
  "sin", "cos", "tan", "sec", "csc", "cot", "log", "ln", "exp", "lim",
  "sen", "tg", "ctg", "max", "min",
  // delimitadores que el generador ignora
  "left", "right", "displaystyle",
  // probabilidad condicional y distribuciones
  "mid", "sim",
  "circ", "eta", "phi", "gamma", "tau", "psi", "chi", "epsilon", "varepsilon",
  "varphi", "vartheta", "ell", "oplus", "ominus", "odot", "ast", "star",
  "aleph", "hbar", "degree2",
  // relleno y espaciado
  "quad", "qquad", "ldots", "cdots", ",", ";", ":", "!",
  // acentos: se dibujan apoyandose en lo que viene entre llaves
  "overline", "hat", "vec", "tilde", "dot", "ddot", "bar", "acute", "grave", "breve", "check",
  // delimitadores de tamaño: no dibujan nada, solo agrupan
  "big", "Big", "bigg", "Bigg", "bigl", "Bigl", "biggl", "Biggl", "middle", "bigl", "bigr",
].concat(Object.keys(SIMBOLOS), Object.keys(CONJUNTOS), Object.keys(RAYAS)));

const CAMPOS = ["objetivo", "teoria", "ejemplo", "consejo"];

function nuevosUsos() {
  return { formula: 0, tabla: 0, codigo: 0, ejercicio: 0, autoeval: 0, glosario: 0 };
}

// Cuenta apariciones de un delimitador sin que la linea lo parta.
const cuantos = (t, marca) => t.split(marca).length - 1;

// El linter de prosa (ingles, rarezas, palabras pegadas) tiene que ver el texto
// SIN las marcas, por dos motivos:
//
//  - Los comandos LaTeX se leen como palabras inglesas. "\text" es "text" y
//    "\rightarrow" es "right": las dos estan en la lista de palabras prohibidas,
//    asi que cualquier formula con unidades haria fallar la publicacion.
//  - El codigo es codigo. "let value = 1" es correcto en un bloque de ejemplo y
//    "value" esta en la lista de ingles.
//
// Se quitan los comandos de envoltura pero se conserva lo que llevan dentro
// ("\text{metros}" deja "metros"), que si es prosa y si conviene revisar.
function paraLintear(texto) {
  return String(texto == null ? "" : texto)
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/```[\s\S]*$/g, " ")
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$\$[\s\S]*$/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/\\(?:text|mathrm|textrm|mathbf|mathit|operatorname|left|right|displaystyle|quad|qquad|,|;|:|!)\b/g, "");
}

// Revisa un campo de texto. `anotar(tipo, detalle)` recibe los avisos y
// `usos` se incrementa con el recuento de cada tipo de bloque.
function revisarMarcas(etiqueta, texto, anotar, usos) {
  if (typeof texto !== "string" || !texto) return;

  // --- formulas: los "$$" van en pareja -------------------------------------
  const nDolar = cuantos(texto, "$$");
  if (nDolar % 2 !== 0) {
    anotar("formula", etiqueta + " -> cantidad impar de \"$$\": " + nDolar + " (falta cerrar la formula)");
  }
  if (nDolar) usos.formula += Math.floor(nDolar / 2);

  // Un "$" que no forma pareja no es matematica: es texto. Suele pasar cuando
  // alguien corrige un $$ con String.replace, porque ahi "$$" en el texto de
  // reemplazo significa un solo "$" y los delimitadores se pierden. El
  // generador lo convertiria en codigo en linea y la formula no se veria.
  //
  // Ojo con los signos de moneda: "cuestan $8" es espanol correcto y no se
  // avisa. Solo se avisa si el "$" suelto esta al lado de matematica de verdad
  // (una barra invertida, un exponente, un subindice) o si la linea ya traia
  // un bloque $$ y el "$" sobrante esta pegado a el.
  const MARCADOR_MATH = /[\\^_]|frac|sqrt|cdot|times|infty|mathbb|log_|\\le|\\ge/;
  for (const linea of texto.split("\n")) {
    const sinPares = linea.replace(/\$\$/g, "");
    const sueltos = sinPares.match(/\$/g);
    if (!sueltos) continue;
    const hayBloque = linea.indexOf("$$") >= 0;
    const hayMatematica = MARCADOR_MATH.test(linea);
    if (hayBloque || hayMatematica) {
      anotar("formula", etiqueta + " -> " + sueltos.length + " carácter(es) \"$\" sin pareja: " +
        JSON.stringify(linea.trim().slice(0, 60)) + "   (usa $$ para toda formula)");
    }
  }

  for (const bloque of texto.match(/\$\$([\s\S]*?)\$\$/g) || []) {
    for (const c of bloque.match(/\\([a-zA-Z]+)/g) || []) {
      const nombre = c.slice(1);
      if (!COMANDOS_ACEPTADOS.has(nombre)) {
        anotar("formula", etiqueta + " -> comando LaTeX desconocido: \\" + nombre +
          "   (en la pagina saldaria literally)");
      }
    }
    // Nota: "<" y ">" ya no se avisan. El generador los escapa a entidades, asi
    // que "a < b" se ve bien y no rompen el HTML. Solo queda comprobar que el
    // delimitador $$ en si no este sin escapar dentro de la formula.
  }

  // --- codigo: las lineas de ``` van en pareja -----------------------------
  const nCodigo = cuantos(texto, "```");
  if (nCodigo % 2 !== 0) {
    anotar("codigo", etiqueta + " -> cantidad impar de \"```\": " + nCodigo + " (falta cerrar el bloque)");
  }
  if (nCodigo) usos.codigo += Math.floor(nCodigo / 2);

  // --- tablas markdown -----------------------------------------------------
  const lineas = texto.split("\n");
  for (let i = 0; i < lineas.length; i++) {
    const l = lineas[i].trim();
    if (l.charAt(0) !== "|") continue;
    // Una tabla arranca con cabecera + separador "|---|---|".
    if (!/^\|[\s:|-]*-[\s:|-]*\|$/.test((lineas[i + 1] || "").trim())) continue;
    usos.tabla++;
    const columnas = l.split("|").length - 2;
    for (let j = i + 2; j < lineas.length && lineas[j].trim().charAt(0) === "|"; j++) {
      const fila = lineas[j].trim();
      const n = fila.split("|").length - 2;
      if (n !== columnas) {
        anotar("tabla", etiqueta + " -> fila de " + n + " columnas con cabecera de " + columnas +
          ": " + JSON.stringify(fila.slice(0, 50)));
      }
    }
  }

  // Fila de tabla sin cabecera encima. El separador "|---|" abre la tabla y todas
  // las filas siguientes tienen que seguir en "|". Si una frase se cuela en
  // medio, el generador cierra la tabla ahi y las filas que vienen despues se
  // muestran como texto corriente, con las barras a la vista.
  let ultimoSeparador = -5;
  for (let i = 0; i < lineas.length; i++) {
    const l = lineas[i].trim();
    if (/^\|[\s:|-]*-[\s:|-]*\|$/.test(l)) { ultimoSeparador = i; continue; }
    // La cabecera de la tabla es la fila que tiene el separador justo debajo,
    // asi que no cuenta como huérfana.
    if (/^\|[\s:|-]*-[\s:|-]*\|$/.test((lineas[i + 1] || "").trim())) continue;
    if (l.charAt(0) === "|" && i > ultimoSeparador + 1 && lineas[i - 1].trim().charAt(0) !== "|") {
      anotar("tabla", etiqueta + " -> fila de tabla huérfana en la línea " + (i + 1) +
        ": " + JSON.stringify(l.slice(0, 50)) + "   (falta la cabecera con su separador encima)");
    }
  }

  // --- ejercicios y autoevaluacion ----------------------------------------
  for (const marca of ["!!", "??"]) {
    const esMarca = (l) => l.indexOf(marca + " ") === 0;
    const encontrados = lineas.filter(esMarca);
    if (encontrados.length) {
      usos[marca === "!!" ? "ejercicio" : "autoeval"] += encontrados.length;
    }
  }
  for (const m of texto.match(/^[!?][!?][ \t]*$/gm) || []) {
    anotar("ejercicio", etiqueta + " -> marca de titulo sin texto: " + JSON.stringify(m));
  }
  for (const m of texto.match(/^>>[ \t]*$/gm) || []) {
    anotar("ejercicio", etiqueta + " -> linea \">>\" de solucion sin texto");
  }
  // En autoevaluacion cada pregunta necesita su ":: respuesta", o el clic del
  // alumno no revela nada y el boton parece roto.
  for (const bloque of texto.split(/^\?\?[ \t].*$/m).slice(1)) {
    const corte = bloque.search(/^[!?][!?][ \t]|^\$\$\s*$|^\|---/m);
    const cuerpo = corte >= 0 ? bloque.slice(0, corte) : bloque;
    for (const p of cuerpo.split("\n")) {
      if (p.trim().indexOf("- ") !== 0) continue;
      if (p.indexOf("::") < 0) {
        anotar("ejercicio", etiqueta + " -> pregunta de autoevaluacion sin \":: respuesta\": " +
          JSON.stringify(p.trim().slice(0, 55)));
      }
    }
  }

  // --- glosario ------------------------------------------------------------
  for (const l of texto.split("\n")) {
    if (l.trim().indexOf("glosario:") !== 0) continue;
    usos.glosario++;
    if (l.indexOf("::") < 0) {
      anotar("glosario", etiqueta + " -> entrada sin \":: definicion\": " + JSON.stringify(l.trim().slice(0, 55)));
    }
  }
}

module.exports = { revisarMarcas, paraLintear, nuevosUsos, COMANDOS_ACEPTADOS, CAMPOS };

// --- uso directo -------------------------------------------------------------
if (require.main === module) {
  const problemas = [];
  // revisarMarcas ya devuelve un mensaje autonomo (con su contexto y su
  // fichero), asi que aqui no se anade una linea de muestra: solo se listan.
  const anotar = (tipo, detalle) => problemas.push(tipo + " | " + detalle);

  const destino = process.argv[2];
  if (destino) {
    // Un archivo suelto con la misma forma que contenido/*.js (CONTENIDO[slug]).
    // Se ancla a la raiz del proyecto para que el argumento sea el mismo tanto
    // si se ejecuta desde la raiz como desde herramientas/.
    const vm = require("vm");
    const sandbox = { console, CONTENIDO: {} };
    const ruta = path.resolve(RAIZ, destino);
    vm.createContext(sandbox);
    vm.runInContext(require("fs").readFileSync(ruta, "utf8"), sandbox, { filename: ruta });
    const usos = nuevosUsos();
    for (const slug in sandbox.CONTENIDO) {
      const modulos = sandbox.CONTENIDO[slug].modulos || [];
      modulos.forEach((mod) => (mod.lecciones || []).forEach((lecc) => {
        for (const campo of CAMPOS) {
          revisarMarcas(destino + " / " + lecc.titulo + " (" + campo + ")", lecc[campo], anotar, usos);
        }
      }));
    }
    console.log("Bloques ricos:  formulas " + usos.formula +
      "   tablas " + usos.tabla +
      "   codigo " + usos.codigo +
      "   ejercicios " + usos.ejercicio +
      "   autoevaluaciones " + usos.autoeval +
      "   terminos de glosario " + usos.glosario);
    console.log("");
  } else {
    const usos = nuevosUsos();
    const { cursos } = cargar();
    for (const slug in cursos) {
      for (const mod of cursos[slug].modulos) {
        for (const lecc of mod.lecciones) {
          for (const campo of CAMPOS) {
            revisarMarcas(slug + " / " + lecc.titulo + " (" + campo + ")", lecc[campo], anotar, usos);
          }
        }
      }
    }
    console.log("Bloques ricos:  formulas " + usos.formula +
      "   tablas " + usos.tabla +
      "   codigo " + usos.codigo +
      "   ejercicios " + usos.ejercicio +
      "   autoevaluaciones " + usos.autoeval +
      "   terminos de glosario " + usos.glosario);
    console.log("");
  }

  if (problemas.length) {
    console.log("MARCAS: " + problemas.length + " avisos");
    problemas.forEach((p) => console.log("  " + p));
    process.exitCode = 1;
  } else {
    console.log("MARCAS CORRECTAS: todos los bloques cierran y son comandos que el generador entiende.");
  }
}
