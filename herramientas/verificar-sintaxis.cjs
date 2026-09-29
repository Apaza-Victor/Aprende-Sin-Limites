// ============================================================================
// verificar-sintaxis.cjs
// Revisa que todos los .js y .cjs del proyecto parseen. Una comilla de mas o
// de menos deja una pagina entera en blanco sin que se note en el HTML, asi
// que conviene(at) pasarlo antes de dar por buena cualquier pagina nueva.
// NO usa template literals ni ${} ; todo con concatenacion.
// ============================================================================
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const { RAIZ } = require("./raiz.cjs");
const EXT = [".js", ".cjs"];
const OMITIR = new Set(["node_modules", ".git", ".opencode"]);

function recorrer(dir, salida) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (entrada) {
    if (OMITIR.has(entrada.name)) return;
    const completo = path.join(dir, entrada.name);
    if (entrada.isDirectory()) recorrer(completo, salida);
    else if (EXT.indexOf(path.extname(entrada.name)) >= 0) salida.push(completo);
  });
  return salida;
}

function principal() {
  const archivos = recorrer(RAIZ, []);
  const errores = [];

  archivos.forEach(function (archivo) {
    const fuente = fs.readFileSync(archivo, "utf8");
    try {
      // vm.Script solo compila: no ejecuta nada del archivo.
      new vm.Script(fuente, { filename: archivo });
    } catch (e) {
      const relativo = path.relative(RAIZ, archivo);
      errores.push("  " + relativo + ": " + e.message);
    }
  });

  console.log("Archivos revisados: " + archivos.length);
  if (errores.length) {
    console.log("Problemas de sintaxis: " + errores.length);
    errores.forEach(function (e) {
      console.log(e);
    });
    process.exitCode = 1;
    return;
  }
  console.log("OK: todos los scripts compilan.");
}

principal();
