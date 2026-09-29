// ============================================================================
// raiz.cjs
// La unica fuente de verdad de donde esta el proyecto.
//
// Los generadores y los verificadores viven en herramientas/, pero leen y
// escriben archivos de la raiz (index.html, cursos/, secciones/, plantillas/,
// contenido/, assets/). Por eso usan esta constante en vez de __dirname: si
// __dirname, cada uno escribiria donde le pareciese y acabariamos con el sitio
// regenerado dentro de herramientas/.
//
// Un unico sitio que cambiar si un dia el proyecto se anida mas.
// ============================================================================
const path = require("path");

// Un nivel arriba: esta carpeta esta dentro de la raiz del proyecto.
const RAIZ = path.resolve(__dirname, "..");

module.exports = { RAIZ };
