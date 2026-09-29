// Verifica que todos los href internos (relativos) existan en disco.
// Recorre TODO el sitio: index.html, la carpeta cursos/ y la carpeta secciones/.
// Tambien comprueba que cada id usado en un href con ancla exista en el destino.
const fs = require("fs");
const path = require("path");

const raiz = require("./raiz.cjs").RAIZ;
const DIRS = ["cursos", "secciones"];

function recorrer(dir) {
  const salida = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) salida.push(...recorrer(p));
    else if (e.name.endsWith(".html")) salida.push(p);
  }
  return salida;
}

const archivos = [
  path.join(raiz, "index.html"),
  ...recorrer(path.join(raiz, "cursos")),
  ...recorrer(path.join(raiz, "secciones")),
].filter((f) => fs.existsSync(f));

const rotos = [];
let totalEnlaces = 0;

for (const archivo of archivos) {
  const html = fs.readFileSync(archivo, "utf8");
  const dir = path.dirname(archivo);
  const hrefs = html.match(/href="([^"]+)"/g) || [];
  for (const h of hrefs) {
    const limpio = h.replace(/^href="|"$/g, "");
    if (/^(https?:|mailto:|#|data:)/.test(limpio)) continue;
    totalEnlaces++;
    const [ruta, ancla] = limpio.split("#");
    const base = ruta.split("?")[0];
    const abs = base ? path.resolve(dir, base) : archivo;
    if (!fs.existsSync(abs)) {
      rotos.push({
        desde: path.relative(raiz, archivo).replace(/\\/g, "/"),
        href: limpio,
        motivo: "archivo inexistente",
      });
      continue;
    }
    // el archivo existe: si lleva ancla, el id debe existir tambien
    if (ancla && abs.endsWith(".html")) {
      const destino = fs.readFileSync(abs, "utf8");
      if (destino.indexOf('id="' + ancla + '"') < 0) {
        rotos.push({
          desde: path.relative(raiz, archivo).replace(/\\/g, "/"),
          href: limpio,
          motivo: "ancha #" + ancla + " no existe en el destino",
        });
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Guarda de regresion: .reveal arranca con opacity:0 y solo se hace visible si
// algun JS añade .reveal-visible. Si una pagina tiene elementos .reveal pero no
// carga ui.js, su contenido queda INVISIBLE sin error visible en consola.
// Ademas comprueba que los src locales referenciados existan en disco.
// ---------------------------------------------------------------------------
const avisos = [];
const faltantes = [];

for (const archivo of archivos) {
  const html = fs.readFileSync(archivo, "utf8");
  const rel = path.relative(raiz, archivo).replace(/\\/g, "/");
  const dir = path.dirname(archivo);

  const hayReveal = /class="[^"]*\breveal\b/.test(html);
  const cargaUi = /src="[^"]*assets\/js\/ui\.js"/.test(html);
  if (hayReveal && !cargaUi) avisos.push(rel + "  ->  usa .reveal pero no carga ui.js (contenido invisible)");

  // src locales (css/js) deben existir
  const srcs = html.match(/src="([^"]+)"/g) || [];
  for (const s of srcs) {
    const limpio = s.replace(/^src="|"$/g, "");
    if (/^(https?:|data:|\/\/)/.test(limpio)) continue;
    const abs = path.resolve(dir, limpio.split("?")[0]);
    if (!fs.existsSync(abs)) faltantes.push(rel + "  ->  " + limpio);
  }
}

console.log("Archivos HTML revisados: " + archivos.length);
console.log("Enlaces internos comprobados: " + totalEnlaces);
if (rotos.length === 0) {
  console.log("OK: ningun enlace roto.");
} else {
  console.log("ENLACES ROTOS: " + rotos.length);
  rotos.slice(0, 40).forEach((r) => console.log("  " + r.desde + "  ->  " + r.href + "   [" + r.motivo + "]"));
  if (rotos.length > 40) console.log("  ... y " + (rotos.length - 40) + " mas");
}

if (faltantes.length) {
  console.log("ARCHIVOS LOCALES INEXISTENTES (src): " + faltantes.length);
  faltantes.slice(0, 20).forEach((f) => console.log("  " + f));
}
if (avisos.length) {
  console.log("AVISOS: " + avisos.length);
  avisos.slice(0, 20).forEach((a) => console.log("  " + a));
}

if (rotos.length === 0 && faltantes.length === 0 && avisos.length === 0) {
  console.log("TODO CORRECTO: enlaces, recursos y visibilidad de .reveal.");
}
