// ============================================================================
// cargar-datos.cjs
// Unico punto donde se lee la fuente de datos del sitio.
//
//   assets/js/cursos-data.js   estructura: cursos, areas, titulos de modulo,
//                              recursos y el esqueleto de las lecciones
//   contenido/*.js             contenido profundo de cada leccion, que pisa o
//                              amplia la estructura anterior
//
// La fusion es por posicion: en contenido/matematica.js, modulos[0] es el
// primer modulo de matematica y lecciones[3] es su cuarta leccion. Si el
// archivo de contenido trae mas modulos o mas lecciones de los que hay en la
// estructura, se anaden como nuevos, y en ese caso necesitan traer titulo.
//
// Separar las dos cosas tiene una razon practical: contenido/*.js se reescribe
// entero cada vez que se mejora un curso, mientras que la estructura casi nunca
// cambia. Asi un curso se trabaja sin tocar los demas y sin depender de
// localizar un bloque de texto exacto dentro de un archivo de 130 KB.
//
// Lo usan tanto generar-estructura.cjs como verificar-contenido.cjs, para que
// ambos vean exactamente el mismo contenido final.
// ============================================================================
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const { RAIZ } = require("./raiz.cjs");

const RUTA_DATOS = path.join(RAIZ, "assets", "js", "cursos-data.js");
const DIR_CONTENIDO = path.join(RAIZ, "contenido");
const CAMPOS = ["objetivo", "teoria", "ejemplo", "consejo"];

function leerEstructura() {
  const codigo = fs.readFileSync(RUTA_DATOS, "utf8");
  const sandbox = { CURSOS: null };
  vm.createContext(sandbox);
  vm.runInContext(codigo + "\nthis.CURSOS=CURSOS;", sandbox);
  return sandbox.CURSOS;
}

function aplicarContenido(cursos) {
  const resumen = { archivos: 0, campos: 0, nuevas: 0, avisos: [] };
  if (!fs.existsSync(DIR_CONTENIDO)) return resumen;

  const sandbox = { CONTENIDO: {} };
  vm.createContext(sandbox);

  const archivos = fs
    .readdirSync(DIR_CONTENIDO)
    .filter((f) => f.endsWith(".js") && !f.startsWith("_"))
    .sort();

  for (const archivo of archivos) {
    vm.runInContext(fs.readFileSync(path.join(DIR_CONTENIDO, archivo), "utf8"), sandbox, {
      filename: archivo,
    });
    resumen.archivos++;
  }

  for (const slug in sandbox.CONTENIDO) {
    const curso = cursos[slug];
    if (!curso) {
      resumen.avisos.push("el curso " + slug + " no existe en cursos-data.js (contenido ignorado)");
      continue;
    }
    const modulos = sandbox.CONTENIDO[slug].modulos || [];

    modulos.forEach((mod, mi) => {
      if (mi >= curso.modulos.length) {
        if (!mod.titulo) {
          resumen.avisos.push(slug + " modulo " + (mi + 1) + ": es nuevo y no trae titulo");
          return;
        }
        curso.modulos.push({ titulo: mod.titulo, lecciones: [] });
        resumen.nuevas++;
      }
      const destino = curso.modulos[mi];

      (mod.lecciones || []).forEach((lec, li) => {
        if (li >= destino.lecciones.length) {
          if (!lec.titulo) {
            resumen.avisos.push(
              slug + " / " + destino.titulo + " leccion " + (li + 1) + ": es nueva y no trae titulo"
            );
            return;
          }
          destino.lecciones.push({ titulo: lec.titulo });
          resumen.nuevas++;
        }
        const alvo = destino.lecciones[li];
        for (const campo of CAMPOS) {
          if (typeof lec[campo] === "string" && lec[campo].length) {
            alvo[campo] = lec[campo];
            resumen.campos++;
          }
        }
      });
    });
  }
  return resumen;
}

// Devuelve los cursos ya con todo el contenido aplicado.
function cargar() {
  const cursos = leerEstructura();
  const resumen = aplicarContenido(cursos);
  return { cursos: cursos, resumen: resumen };
}

module.exports = { cargar: cargar, CAMPOS: CAMPOS, RUTA_DATOS: RUTA_DATOS, DIR_CONTENIDO: DIR_CONTENIDO };
