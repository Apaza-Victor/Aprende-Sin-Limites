// ============================================================================
// verificar-contenido.cjs
// Lint del contenido de assets/js/cursos-data.js.
//
// Al escribir volumenes grandes de texto en un archivo de datos es facil que
// se cuajen fragmentos de otro idioma, codigos o palabras sueltas. Eso no lo
// detecta ni node --check ni el verificador de enlaces: el HTML sale valido y
// el texto solo se ve raro. Este script lo caza antes de generar.
//
// El archivo se carga con vm y se revisan SOLO los valores de texto, nunca el
// codigo: asi los nombres de iconos (bi-chat-square-text), la indentacion y
// los simbolos matematicos (pi, raiz, grados) no dan falsos positivos.
// ============================================================================
const fs = require("fs");
const path = require("path");
const { cargar } = require("./cargar-datos.cjs");
// Las marcas de los bloques ricos tienen su propio linter: viven aparte porque
// son instrucciones, no prosa, y revisarlas aqui mezclaria las dos reglas.
const { revisarMarcas, paraLintear, nuevosUsos, CAMPOS } = require("./verificar-marcas.cjs");

const usos = nuevosUsos();

const RUTA = path.join(require("./raiz.cjs").RAIZ, "assets", "js", "cursos-data.js");
const codigo = fs.readFileSync(RUTA, "utf8");

// Se revisa el contenido YA FUSIONADO (estructura + contenido/*.js), que es
// exactamente lo que se genera. Asi el linter no aprueba un curso que sigue
// corto porque su texto profundo esta en contenido/ y no en cursos-data.js.
const cargado = cargar();
const CURSOS = cargado.cursos;
const fusion = cargado.resumen;

if (fusion.avisos.length) {
  console.log("AVISOS DE FUSION:");
  fusion.avisos.forEach((a) => console.log("  " + a));
  console.log("");
}

const problemas = [];
const MAX_MUESTRAS = 12;
let muestras = 0;
function anotar(tipo, detalle) {
  problemas.push(tipo + " | " + detalle);
  if (muestras < MAX_MUESTRAS) problemas.push("    -> " + detalle);
  muestras++;
}

// ---------------------------------------------------------------------------
// 1. Alfabetos que no tienen nada que ver en un curso en espanol.
//    Los simbolos griegos (pi, lambda, sigma) se usan en matematicas y son
//    legítimos, asi que se permiten; los alfabetos CJK, cirilico, arabe,
//    hebreo y devanagari no.
// ---------------------------------------------------------------------------
const alfabetos = {
  "chino/japones/coreano": /[\u3000-\u9FFF\uAC00-\uD7AF]/g,
  cirilico: /[\u0400-\u04FF]/g,
  "arabe/hebreo": /[\u0600-\u06FF]/g,
  devanagari: /[\u0900-\u097F]/g,
  "tai/lam": /[\u0E00-\u0E7F]/g,
};

// ---------------------------------------------------------------------------
// 2. Palabras inglesas que delatan un fragmento pegado por error.
//    Se comparan en minuscula y con limites de palabra.
// ---------------------------------------------------------------------------
const ingles = [
  "the", "and", "with", "that", "this", "from", "your", "you", "for", "not",
  "have", "they", "which", "there", "their", "would", "about", "when",
  "what", "mistake", "wrong", "right", "answer", "example", "step", "note",
  "line", "class", "type", "value", "result", "number", "student", "teacher",
  "book", "page", "click", "link", "text", "word", "letter", "under", "over",
  "after", "before", "first", "second", "make", "take", "give", "very",
  "much", "more", "most", "some", "any", "learn", "learning", "lesson",
  "chapter", "topic", "read", "write", "test", "quiz", "score", "homework",
  "hmm", "unknowable", "algebraic", "basic", "follow", "check", "table",
  "math", "maths", "worksheet", "angle", "triangle",
  // Segundas tanda: palabras que aparecieron pegadas al traducir o reescribir.
  // "study experiencia", "reparto por Slots", "dos o tres variations".
  "study", "slot", "slots", "variation", "variations", "level", "content",
  "review", "power", "online", "mean", "chapter", "topic", "method",
  // Tercera tanda: los que aparecieron al redactar Química. Son palabras
  // inglesas que en español se escriben distinto, asi que no dan falso positivo.
  "knowing", "missing", "priorities", "arranged", "conservation", "neither",
  "unsuccessful", "hydrocarbons", "hydrogen", "oxygen", "nitrogen", "carbon",
  "helium", "sodium", "calcium", "water", "translate", "flavors", "cooking",
  "emotion", "colors", "solid", "liquid", "practical", "arrangement",
];

// "has" se salta a proposito: es ingles, pero tambien la forma de "haber" que
// aparece legitimamente en español ("si has despejado mal", "cuando has
// terminado"). Preferimos un falso negativo a bloquear texto correcto.

// ---------------------------------------------------------------------------
// 3. Rarezas de un texto pegado a mano: basura, palabras pegadas, coletillas.
// ---------------------------------------------------------------------------
const rarezas = [
  { re: /[A-Za-z]{2,}\d+[A-Za-z]{4,}/, que: "letras y cifras pegadas sin separacion" },
  { re: /(\b\w{2,}\b)(?:\s+\1\b){1,}/, que: "misma palabra repetida de forma sospechosa" },
  { re: /[a-záéíóúñ]{1}[A-Z][a-z]{2,}[a-záéíóúñ]*(?=\s|$)/, que: "minuscula pegada a mayuscula dentro de una palabra" },
  { re: /%%[A-Z_]+%%/, que: "token %%...%% sin sustituir" },
  { re: /\b[a-z]{2,}[A-Z][a-z]{2,}\b/, que: "palabra mixta camelCase que no deberia existir en espanol" },
];

// ---------------------------------------------------------------------------
// 4. Palabras pegadas: dos palabras del español que se escribieron juntas al
//    pegar un parrafo. "peorrelación", "evalúaargumentación", "herméticamente".
//    No hay forma de detectarlas por regla general sin diccionario, asi que
//    se listan los casos reales que han aparecido. Cada entrada es [pegado,
//    como debe escribirse]; el linter avisa con la forma buena incluida.
// ---------------------------------------------------------------------------
const pegados = [
  ["peorrelación", "peor relación"],
  ["mejorrelación", "mejor relación"],
  ["evalúaargumentación", "evalúa la argumentación"],
  ["herméticamente", "hermética"],
  ["rápidamenteque", "rápidamente que"],
  ["sinembargo", "sin embargo"],
  ["porqueló", "por lo que"],
  ["máso", "más o"],
];

const MIN = { objetivo: 70, teoria: 750, ejemplo: 200, consejo: 110 };

function revisarTexto(etiqueta, texto) {
  if (typeof texto !== "string" || !texto) return;

  // Sin break: un mismo campo puede traer dos alfabetos distintos (por ejemplo
  // CJK y arabe). Con break el segundo se escondia y la revision pasaba limpia.
  for (const nombre in alfabetos) {
    const m = texto.match(alfabetos[nombre]);
    if (m) {
      anotar("alfabeto", etiqueta + " -> caracteres de " + nombre + ": " + [...new Set(m)].join(" "));
    }
  }

  const plano = texto.toLowerCase();
  for (const palabra of ingles) {
    // Limites de palabra hechos a mano: \b de JavaScript no cuenta las
    // vocales acentuadas como caracter de palabra, asi que \bmuch\b disparaba
    // dentro de "muchisimo". El rango a-z A-Z a-z con tilde cubre la
    // ortografia espanola (a con tilde, enye, dieresis, cedilla...).
    const re = new RegExp("(?<![a-záàäâãéèëêíìïîóòöôõúùüûñç])" + palabra + "(?![a-záàäâãéèëêíìïîóòöôõúùüûñç])");
    if (re.test(plano)) {
      anotar("ingles", etiqueta + " -> posible palabra en ingles: " + palabra + "   en: " + texto.slice(0, 90).replace(/\n/g, " "));
      break;
    }
  }

  for (const r of rarezas) {
    const m = texto.match(r.re);
    if (m) {
      const i = texto.indexOf(m[0]);
      anotar("rareza", etiqueta + " -> " + r.que + ": " + JSON.stringify(m[0].slice(0, 40)) +
        (i >= 0 ? "   contexto: ..." + JSON.stringify(texto.slice(Math.max(0, i - 35), i + 35).replace(/\n/g, "\\n")) : ""));
      break;
    }
  }

  for (const p of pegados) {
    if (texto.indexOf(p[0]) >= 0) {
      anotar("pegado", etiqueta + " -> \"" + p[0] + "\" debe escribirse \"" + p[1] + "\"");
      break;
    }
  }
}

// --- recorrido --------------------------------------------------------------
const flojas = [];
const flojasPorCurso = {};
let nLecciones = 0;
let nModulos = 0;
const sumas = { objetivo: 0, teoria: 0, ejemplo: 0, consejo: 0 };

for (const slug in CURSOS) {
  const curso = CURSOS[slug];
  revisarTexto("curso " + slug + " (titulo)", curso.titulo);
  revisarTexto("curso " + slug + " (descripcion)", curso.descripcion);

  for (const mod of curso.modulos) {
    nModulos++;
    revisarTexto(slug + " / modulo: " + mod.titulo, mod.titulo);
    for (const lecc of mod.lecciones) {
      nLecciones++;
      const floja = [];
      for (const campo of CAMPOS) {
        const valor = lecc[campo];
        const etiqueta = slug + " / " + lecc.titulo + " (" + campo + ")";
        revisarMarcas(etiqueta, valor, anotar, usos);
        // La prosa se revisa sin las marcas: ver paraLintear().
        revisarTexto(etiqueta, paraLintear(valor));
        const largo = typeof valor === "string" ? valor.length : 0;
        sumas[campo] += largo;
        if (largo < MIN[campo]) floja.push(campo + "=" + largo);
      }
      if (floja.length) {
        flojas.push(slug + " / " + mod.titulo.split("·").pop().trim() + " / " + lecc.titulo + "  ->  " + floja.join(", "));
        flojasPorCurso[slug] = (flojasPorCurso[slug] || 0) + 1;
      }
    }
  }
}

// --- informe ----------------------------------------------------------------
console.log("Estructura: assets/js/cursos-data.js  (" + Math.round(codigo.length / 1024) + " KB)");
console.log("Contenido profundo: " + fusion.archivos + " archivos en contenido/  (" + fusion.campos + " campos aplicados, " + fusion.nuevas + " entradas nuevas)");
console.log("Cursos: " + Object.keys(CURSOS).length + "   Modulos: " + nModulos + "   Lecciones: " + nLecciones);
for (const campo of CAMPOS) {
  const media = nLecciones ? Math.round(sumas[campo] / nLecciones) : 0;
  console.log("  promedio " + (campo + "     ").slice(0, 9) + ": " + String(media).padStart(5) + " chars   (minimo " + MIN[campo] + ")");
}
console.log("");
console.log("Bloques ricos:  formulas " + usos.formula +
  "   tablas " + usos.tabla +
  "   codigo " + usos.codigo +
  "   ejercicios " + usos.ejercicio +
  "   autoevaluaciones " + usos.autoeval +
  "   terminos de glosario " + usos.glosario);
console.log("");

if (problemas.length) {
  console.log("PROBLEMAS DE TEXTO: " + problemas.length);
  problemas.forEach((p) => console.log("  " + p));
  console.log("");
}

if (flojas.length) {
  console.log("LECCIONES POR DEBAJO DEL MINIMO: " + flojas.length + " de " + nLecciones);
  Object.keys(flojasPorCurso).forEach((c) => console.log("   " + String(flojasPorCurso[c]).padStart(3) + "  " + c));
  console.log("");
  flojas.slice(0, 10).forEach((f) => console.log("  " + f));
  if (flojas.length > 10) console.log("  ... y " + (flojas.length - 10) + " mas");
  console.log("");
}

if (problemas.length === 0 && flojas.length === 0) {
  console.log("CONTENIDO CORRECTO: sin texto corrupto y todas las lecciones con profundidad.");
} else if (problemas.length > 0) {
  console.log("HAY QUE CORREGIR EL TEXTO antes de publicar.");
  process.exitCode = 1;
} else {
  console.log("Texto sin corrupcion. Quedan " + flojas.length + " lecciones cortas por ampliar.");
}
