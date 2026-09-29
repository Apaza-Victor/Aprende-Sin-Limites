// ============================================================================
// verificar-figuras.cjs
// Revisa dos cosas de las figuras:
//   1. que cada .svg de assets/img/figuras sea XML valido y tenga viewBox;
//   2. que todo "figura:nombre" que aparece en contenido/ exista en disco.
// Una figura inexistente no rompe la pagina, pero deja un hueco visible, asi
// que conviene enterarse antes de publicar.
// NO usa template literals ni ${} ; todo con concatenacion.
// ============================================================================
const fs = require("fs");
const path = require("path");

const { RAIZ } = require("./raiz.cjs");

const DIR_FIGURAS = path.join(RAIZ, "assets", "img", "figuras");
const DIR_CONTENIDO = path.join(RAIZ, "contenido");

function archivosDe(dir, ext) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => path.extname(f) === ext)
    .map((f) => path.join(dir, f));
}

// Valida el XML sin depender de una libreria externa: apila las etiquetas y
// comprueba que se cierren en orden y que viewBox este presente.
// Cuenta como coordenada solo lo que de verdad lo es dentro de un "d".
// En un arco (A rx ry rot laf sf x y) los dos ultimos valores son las
// coordenadas; la rotacion y los banderas no, y contarlos como tales
// produciria falsos positivos.
const PARAMS = {
  m: ["x", "y"], l: ["x", "y"], t: ["x", "y"],
  h: ["x"], v: ["y"],
  c: ["x", "y", "x", "y", "x", "y"],
  s: ["x", "y", "x", "y"], q: ["x", "y", "x", "y"],
  a: ["rx", "ry", "rot", "laf", "sf", "x", "y"],
  z: [],
};

function coordenadasDePath(d) {
  const sale = [];
  const re = /([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)/g;
  let m;
  while ((m = re.exec(d)) !== null) {
    const cmd = m[1].toLowerCase();
    const tipos = PARAMS[cmd];
    if (!tipos) continue;
    const nums = (m[2].match(/-?\d*\.?\d+(e-?\d+)?/gi) || []).map(Number);
    if (nums.length % tipos.length !== 0) continue;
    for (let i = 0; i < nums.length; i += tipos.length) {
      tipos.forEach((tipo, k) => {
        if (tipo === "x") sale.push({ v: nums[i + k], eje: "x" });
        if (tipo === "y") sale.push({ v: nums[i + k], eje: "y" });
      });
    }
  }
  return sale;
}

function revisarSvg(archivo) {
  const problemas = [];
  const texto = fs.readFileSync(archivo, "utf8");
  const nombre = path.basename(archivo);

  if (!/viewBox="[^"]+"/.test(texto)) problemas.push(nombre + ": falta el viewBox");
  if (texto.indexOf("<svg") < 0) problemas.push(nombre + ": no abre <svg>");
  if (texto.indexOf("</svg>") < 0) problemas.push(nombre + ": no cierra </svg>");
  if (/<svg[^>]*>[\s\S]*<\/svg>/.test(texto) === false) {
    problemas.push(nombre + ": el svg esta vacio");
  }

  const pila = [];
  const re = /<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>/g;
  let m;
  while ((m = re.exec(texto)) !== null) {
    const cierra = m[1] === "/";
    const etiqueta = m[2];
    const auto = m[4] === "/";
    if (etiqueta === "svg") continue;
    if (cierra) {
      const tope = pila.pop();
      if (tope !== etiqueta) {
        problemas.push(nombre + ": </" + etiqueta + "> cierra un <" + (tope || "nada") + ">");
        break;
      }
    } else if (!auto) {
      pila.push(etiqueta);
    }
  }
  if (pila.length) problemas.push(nombre + ": quedan abiertas " + pila.join(", "));

  // Atributos que existen de verdad: un typo deja el texto centrado a la izquierda.
  const conocidos = ["x", "y", "cx", "cy", "r", "rx", "ry", "points", "d", "x1", "y1", "x2", "y2",
    "transform", "font-size", "text-anchor", "class", "fill", "stroke", "opacity", "viewBox",
    "stroke-width", "stroke-dasharray", "xmlns", "font-weight", "font-family", "width", "height",
    "stroke-linecap", "stroke-linejoin", "id", "version", "preserveAspectRatio", "font-style",
    "letter-spacing", "dominant-baseline", "vector-effect", "fill-rule", "clip-rule",
    // Cabezas de flecha: <marker> y los atributos que usa.
    "markerWidth", "markerHeight", "refX", "refY", "orient", "markerUnits", "overflow",
    "marker-start", "marker-mid", "marker-end"];
  const reAtr = /\s([a-zA-Z-]+)=/g;
  let a;
  while ((a = reAtr.exec(texto)) !== null) {
    if (conocidos.indexOf(a[1]) < 0) {
      problemas.push(nombre + ": atributo desconocido " + a[1]);
    }
  }

  // Coordenadas dentro del lienzo. Un numero fuera de rango o un NaN deja el
  // dibujo en blanco sin avisar, que es justo lo que no se quiere ver.
  const coords = [];
  const vista = texto.match(/viewBox="([-\d.\s]+)"/);
  if (vista) {
    const caja = vista[1].trim().split(/\s+/).map(Number);
    if (caja.length !== 4 || caja.some((n) => !isFinite(n))) {
      problemas.push(nombre + ": viewBox invalido");
    } else {
      const [x0, y0, ancho, alto] = caja;
      const maxX = x0 + ancho;
      const maxY = y0 + alto;
      const margen = 4;

      const rePunto = /points="([^"]+)"/g;
      let m;
      while ((m = rePunto.exec(texto)) !== null) {
        m[1].trim().split(/\s+/).forEach((par) => {
          const n = par.split(",");
          coords.push({ v: Number(n[0]), eje: "x", donde: "points" });
          if (n.length > 1) coords.push({ v: Number(n[1]), eje: "y", donde: "points" });
        });
      }
      const reD = /\sd="([^"]+)"/g;
      while ((m = reD.exec(texto)) !== null) {
        coordenadasDePath(m[1]).forEach((c) => coords.push({ v: c.v, eje: c.eje, donde: "d" }));
      }
      // circle/ellipse: cx cy rx ry
      const reEl = /<(circle|ellipse)\b[^>]*>/g;
      while ((m = reEl.exec(texto)) !== null) {
        const et = m[0];
        ["cx", "cy"].forEach((k) => {
          const r = new RegExp(k + '="(-?[\\d.]+)"');
          const f = et.match(r);
          if (f) coords.push({ v: Number(f[1]), eje: k === "cx" ? "x" : "y", donde: m[1] });
        });
      }
      // text x y
      const reT = /<text\b[^>]*>/g;
      while ((m = reT.exec(texto)) !== null) {
        const et = m[0];
        ["x", "y"].forEach((k) => {
          const f = et.match(new RegExp(" " + k + '="(-?[\\d.]+)"'));
          if (f) coords.push({ v: Number(f[1]), eje: k, donde: "text" });
        });
      }

      coords.forEach((c) => {
        if (!isFinite(c.v)) {
          problemas.push(nombre + ": coordenada no numerica en " + c.donde);
        } else if (c.eje === "x" && (c.v < x0 - margen || c.v > maxX + margen)) {
          problemas.push(nombre + ": X fuera del lienzo en " + c.donde + ": " + c.v);
        } else if (c.eje === "y" && (c.v < y0 - margen || c.v > maxY + margen)) {
          problemas.push(nombre + ": Y fuera del lienzo en " + c.donde + ": " + c.v);
        }
      });
    }
  }
  return problemas;
}

function principal() {
  const svgs = archivosDe(DIR_FIGURAS, ".svg");
  const nombres = new Set(svgs.map((f) => path.basename(f, ".svg")));
  const problemas = [];

  svgs.forEach((f) => {
    revisarSvg(f).forEach((p) => problemas.push(p));
  });
  console.log("Figuras en disco: " + svgs.length);

  // Referencias desde los archivos de contenido
  const usados = new Map();
  archivosDe(DIR_CONTENIDO, ".js").forEach((f) => {
    const texto = fs.readFileSync(f, "utf8");
    const re = /figura:([a-z0-9-]+)/g;
    let m;
    while ((m = re.exec(texto)) !== null) {
      const ref = m[1];
      if (!usados.has(ref)) usados.set(ref, []);
      usados.get(ref).push(path.basename(f));
    }
  });

  usados.forEach((archivos, ref) => {
    if (!nombres.has(ref)) {
      problemas.push(
        "contenido/ usa \"" + ref + "\" (" + archivos.join(", ") + ") pero no existe el .svg"
      );
    }
  });
  console.log("Figuras usadas desde contenido/: " + usados.size);

  const sinUso = [...nombres].filter((n) => !usados.has(n));
  if (sinUso.length) console.log("Figuras todavia sin usar: " + sinUso.join(", "));

  if (problemas.length) {
    console.log("Problemas: " + problemas.length);
    problemas.forEach((p) => console.log("  " + p));
    process.exitCode = 1;
    return;
  }
  console.log("OK: figuras validas y sin referencias rotas.");
}

principal();
