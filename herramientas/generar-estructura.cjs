// ============================================================================
// generar-estructura.cjs
// Genera la estructura estatica de lecciones a partir de los datos y las
// plantillas. NO usa template literals ni `` ni ${} ; todo se arma con
// concatenacion y reemplazo de tokens %%TOKEN%%. Asi el archivo nunca se
// corrompe al escribirse.
// ============================================================================
const fs = require("fs");
const path = require("path");
const { cargar } = require("./cargar-datos.cjs");
const { SCRIPT_TEMA } = require("./generar-secciones.cjs");
const { RAIZ } = require("./raiz.cjs");

const DIR_PLANTILLAS = path.join(RAIZ, "plantillas");
const DIR_CURSOS = path.join(RAIZ, "cursos");

function normaliza(s) {
  return String(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+$/g, "")
    .replace(/^-+/g, "");
}

function tituloArchivo(titulo, idx) {
  const n = String(idx + 1);
  return n.padStart(2, "0") + "-" + normaliza(titulo) + ".html";
}

// ---------------------------------------------------------------------------
// Formateo del cuerpo de las lecciones.
//
// El archivo de datos guarda el contenido en texto plano con marcas ligeras,
// porque un objeto de datos en JS no puede traer saltos de linea sin ensuciar
// el archivo. Aqui se escapa TODO el texto y despues se traducen esas marcas a
// HTML semantico:
//
//   linea suelta        -> <p>
//   "- texto"           -> <ul><li>
//   "1. texto"          -> <ol><li>
//   "## texto"          -> <h4>
//   "> texto"           -> aviso destacado
//   "figura:nombre"     -> dibujo de assets/img/figuras/nombre.svg
//   "figura:nombre | pie" -> idem, con pie de foto
//   "**texto**"         -> <strong>
//   "$$ ... $$"         -> bloque de formula (frac, sqrt, ^, _, simbolos)
//   "| a | b |"         -> tabla; la 2a linea con guiones es el separador
//   "```lenguaje"       -> bloque de codigo, cierra con ```
//   "!! Titulo"         -> bloque de ejercicios; "- item" y ">> respuesta"
//   "?? Titulo"         -> autoevaluacion; "- pregunta :: respuesta"
//   "glosario:t :: d"   -> entrada de glosario
//
// Escapar primero es lo que mantiene la seguridad: el archivo de datos nunca
// llega a inyectar HTML en la pagina.
// ---------------------------------------------------------------------------
function escapar(txt) {
  return String(txt == null ? "" : txt)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function enLinea(txt) {
  return escapar(txt).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

// Igual que enLinea, pero ademas entiende las formulas "$$ ... $$". Se usa en
// las respuestas de los ejercicios y de la autoevaluacion, que se pintan
// dentro de un <p> y por eso no pueden receber el <div class="formula"> de
// formatear: aqui la formula se envuelve en un <span> que se queda en linea.
function enLineaRica(txt) {
  const bruto = String(txt == null ? "" : txt);
  if (bruto.indexOf("$$") < 0) return enLinea(bruto);
  const partes = bruto.split("$$");
  let html = "";
  for (let i = 0; i < partes.length; i++) {
    if (i % 2 === 0) {
      html += enLinea(partes[i]);
    } else {
      html += '<span class="formula formula-linea">' + procesaFormula(partes[i]) + "</span>";
    }
  }
  return html;
}

// ---------------------------------------------------------------------------
// Formulas
//
// Se escriben con una mini-lengua de barra invertida para no depender de
// KaTeX ni de MathML: asi el sitio sigue siendo HTML plano y las formulas se
// ven bien aunque el visitante no tenga JavaScript.
//
//   $$ E = m \cdot c^2 $$          formula centrada
//   $$ \frac{a}{b} $$              fraccion
//   $$ \sqrt{x^2 + y^2} $$         raiz
//   $$ v_0 + a \cdot t $$          subindice
//   $$ \Delta H \le 0 $$           simbolos con nombre
//
// Cada parte se escapa antes de convertirse en HTML, asi que una formula no
// puede inyectar etiquetas. Lo que no se reconoce se muestra tal cual, que es
// preferible a tragarselo en silencio.
// ---------------------------------------------------------------------------
const SIMBOLOS = {
  times: "×", cdot: "·", div: "÷", pm: "±", mp: "∓",
  le: "≤", ge: "≥", ne: "≠", approx: "≈", equiv: "≡",
  infty: "∞", pi: "π", theta: "θ", alpha: "α", beta: "β",
  lambda: "λ", mu: "μ", rho: "ρ", sigma: "σ", omega: "ω",
  Delta: "Δ", delta: "δ", Sigma: "Σ", sum: "∑", prod: "∏",
  int: "∫", partial: "∂", nabla: "∇", sqrt: "√",
  rightarrow: "→", Rightarrow: "⇒", leftrightarrow: "↔", to: "→",
  in: "∈", cup: "∪", cap: "∩", forall: "∀", exists: "∃",
  degree: "°", prime: "′", therefore: "∴", angle: "∠", perp: "⊥",
  parallel: "∥", land: "∧", lor: "∨", neg: "¬",
  // relaciones que faltan a menudo al redactar
  implies: "⇒", iff: "⇔", approx2: "≈", subset: "⊂", subseteq: "⊆",
  emptyset: "∅", propto: "∝", ldots: "…", cdots: "⋯", dots: "…",
  // unidades corriente
  ohm: "Ω", mu: "µ", deg: "°",
  // rayas simples: se atienden con llaves en procesarAcento()
  bar: "|",
  // alias frecuentes: se escribe \neq tan a menudo como \ne que conviene
  // aceptarlo, y lo mismo con las desigualdades largas
  neq: "≠", leq: "≤", geq: "≥", lnot: "¬",
  // probabilidad condicional y distribuciones: la barra de "dado que" y el
  // "distribuido como" se dibujan con estos dos
  mid: "∣", sim: "∼", ll: "≪", gg: "≫", 
  // grados, rendimiento y letras griegas que faltaban
  circ: "°", eta: "η", phi: "φ", gamma: "γ", tau: "τ", psi: "ψ",
  chi: "χ", epsilon: "ε", varphi: "φ", vartheta: "ϑ", ell: "ℓ",
  // utilidades de notacion cientifica
  oplus: "⊕", ominus: "⊖", odot: "⊙", ast: "∗", star: "⋆",
  aleph: "ℵ", hbar: "ℏ", surd: "√", degree2: "°",
};

// Los conjuntos de letras (R, Q, Z, N) se escriben con \mathbb{R}. No basta con
// cambiar el nombre del comando: hay que cerrar las llaves y poner la letra en
// redonda, que es como se escribe de verdad un conjunto.
const CONJUNTOS = {
  mathbb: { clase: "conj", letras: "RQDZNCIN" },
  mathcal: { clase: "conj", letras: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  mathfrak: { clase: "conj", letras: "CDHILMNRTVZ" },
};

// Comandos que no dibujan nada: solo separan. "\\quad" separa un poco mas que
// un espacio normal, "\\," es un espacio fino pegado a la coma anterior.
const ESPACIOS = {
  quad: "  ", qquad: "     ", ldots: "…", cdots: "⋯", dots: "…",
  ",": "", ";": "", ":": "", "!": "",
  // "\big" y familia solo agrupan con un tamaño mayor: el motor es de una
  // sola línea, así que se ignoran en lugar de imprimirse.
  big: "", Big: "", bigg: "", Bigg: "", bigl: "", Bigl: "", biggl: "", Biggl: "", bigr: "",
  middle: "",
};


const FUNCIONES = ["sin", "cos", "tan", "sec", "csc", "cot", "log", "ln", "exp", "lim", "sen", "tg", "ctg", "max", "min"];

// Comandos que solo envuelven texto plano. Se usan para poner unidades o
// palabras dentro de la formula ("\text{metros}", "\text{si}"), y el texto va
// en redonda porque leerlo en cursiva confunde con un simbolo.
const TEXTO_MATH = ["text", "mathrm", "textrm", "mathbf", "mathit", "operatorname"];

// Devuelve el contenido de la llave que abre en i, y el indice siguiente a su
// cierre. null si no hay llave o si nunca se cierra.
function tomaLlaves(s, i) {
  if (s[i] !== "{") return null;
  let nivel = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === "{") nivel++;
    else if (s[j] === "}") {
      nivel--;
      if (nivel === 0) return { cuerpo: s.slice(i + 1, j), fin: j + 1 };
    }
  }
  return null;
}

// Un acento se dibuja con dos caracteres: el simbolo y la raya que va encima.
// Con una sola fuente de texto la raya queda pegada al simbolo, y con dos
// caracteres de plano se coloca mejor que con CSS positioning.
const RAYAS = { overline: "‾", hat: "ˆ", vec: "⃗", tilde: "˜", dot: "˙", ddot: "¨" };

function procesarAcento(tipo, cuerpo) {
  if (cuerpo.length === 1) {
    return '<span class="acento"><span class="acento-raya">' + RAYAS[tipo] + "</span>" + escapar(cuerpo) + "</span>";
  }
  // Varias letras o cifras: la raya se estira arriba del grupo.
  if (tipo === "overline") {
    return '<span class="acento"><span class="acento-linea"></span>' + escapar(cuerpo) + "</span>";
  }
  return '<span class="acento"><span class="acento-raya">' + RAYAS[tipo] + "</span>" + escapar(cuerpo) + "</span>";
}

function procesaFormula(s) {
  let salida = "";
  let i = 0;
  while (i < s.length) {
    const ch = s[i];

    if (ch === "\\" && i + 1 < s.length) {
      const m = s.slice(i + 1).match(/^[a-zA-Z]+/);
      const nombre = m ? m[0] : s[i + 1];
      const largo = 1 + nombre.length;
      const arg = i + largo;

      // "\{" y "\}" son llaves literales. Como la barra se come el comando
      // entero, sin esta comprobacion la rama de llaves sueltas de mas abajo
      // nunca llega a verlas y cada llave salia como <span class="cmd">.
      if (nombre === "{" || nombre === "}") {
        salida += nombre;
        i += largo;
        continue;
      }

      if (nombre === "frac") {
        const a = s[arg] === "{" ? tomaLlaves(s, arg) : null;
        const b = a && s[a.fin] === "{" ? tomaLlaves(s, a.fin) : null;
        if (a && b) {
          salida +=
            '<span class="frac"><span class="frac-n">' + procesaFormula(a.cuerpo) +
            '</span><span class="frac-d">' + procesaFormula(b.cuerpo) + "</span></span>";
          i = b.fin;
          continue;
        }
      }
      if (nombre === "sqrt") {
        const a = s[arg] === "{" ? tomaLlaves(s, arg) : null;
        if (a) {
          salida +=
            '<span class="raiz"><span class="r-signo">√</span><span class="radicando">' +
            procesaFormula(a.cuerpo) + "</span></span>";
          i = a.fin;
          continue;
        }
        salida += "√";
        i += largo;
        continue;
      }
      if (Object.prototype.hasOwnProperty.call(SIMBOLOS, nombre)) {
        salida += SIMBOLOS[nombre];
        i += largo;
        continue;
      }
      // "\quad", "\qquad" y "\," son solo espacio: se sueltan como texto para
      // que el comando no aparezca escrito en la pagina.
      if (ESPACIOS[nombre] !== undefined) {
        salida += ESPACIOS[nombre];
        i += largo;
        continue;
      }
      // Los acentos se apoyan en lo que viene detrás, normalmente entre
      // llaves: \overline{3}, \hat{y}. Se coloca la raya delante y se avanza
      // hasta cerrar la llave.
      if (Object.prototype.hasOwnProperty.call(RAYAS, nombre)) {
        const a = s[arg] === "{" ? tomaLlaves(s, arg) : null;
        if (a) {
          salida += procesarAcento(nombre, a.cuerpo);
          i = a.fin;
          continue;
        }
      }
      // \mathbb{R} y familia: la letra del conjunto va entre llaves.
      if (Object.prototype.hasOwnProperty.call(CONJUNTOS, nombre)) {
        const cj = CONJUNTOS[nombre];
        const a = s[arg] === "{" ? tomaLlaves(s, arg) : null;
        if (a) {
          salida += '<span class="' + cj.clase + '">' + escapar(a.cuerpo) + "</span>";
          i = a.fin;
          continue;
        }
      }
      if (FUNCIONES.indexOf(nombre) >= 0) {
        salida += '<span class="fn">' + nombre + "</span>";
        i += largo;
        continue;
      }
      // \text{...} y compañía: se usa para unidades y palabras dentro de la
      // formula ("\text{metros}", "\text{si}"). Se saca el texto tal cual.
      if (TEXTO_MATH.indexOf(nombre) >= 0) {
        const a = s[arg] === "{" ? tomaLlaves(s, arg) : null;
        if (a) {
          salida += "<span class=\"fn-txt\">" + escapar(a.cuerpo) + "</span>";
          i = a.fin;
          continue;
        }
      }
      salida += '<span class="cmd">' + escapar(nombre) + "</span>";
      i += largo;
      continue;
    }

    if (ch === "<" || ch === ">") {
      salida += ch === "<" ? "&lt;" : "&gt;";
      i++;
      continue;
    }
    // Las llaves sueltas se dibujan: "\mathbb{R}-\{2\}" se lee como R menos el
    // conjunto {2}, y sin ellas el conjunto que se resta no se distingue.
    if (ch === "{" || ch === "}") {
      salida += ch;
      i++;
      continue;
    }
    if (ch === " ") {
      salida += " ";
      i++;
      continue;
    }

    // El subindice de "S_\infty" no cabe en el atajo de una letra: se procesa
    // el grupo entero. Se limita a los CARACTERES hasta el siguiente limite
    // (operador, cierre o fin) para no tragarse el resto de la formula.
    if (ch === "_" && s[i + 1] === "\\") {
      let f = i + 2;
      while (f < s.length && /[a-zA-Z]/.test(s[f])) f++;
      const grupo = s.slice(i + 1, f);
      if (grupo) {
        salida += "<sub>" + procesaFormula(grupo) + "</sub>";
        i = f;
        continue;
      }
    }

    if ((ch === "^" || ch === "_") && s[i + 1] === "{") {
      const a = tomaLlaves(s, i + 1);
      if (a) {
        const etq = ch === "^" ? "sup" : "sub";
        salida += "<" + etq + ">" + procesaFormula(a.cuerpo) + "</" + etq + ">";
        i = a.fin;
        continue;
      }
    }
    if ((ch === "^" || ch === "_") && i + 1 < s.length) {
      const etq = ch === "^" ? "sup" : "sub";
      salida += "<" + etq + ">" + escapar(s[i + 1]) + "</" + etq + ">";
      i += 2;
      continue;
    }

    salida += escapar(ch);
    i++;
  }
  return salida;
}

function bloqueFormula(interior) {
  return '<div class="formula">' + procesaFormula(interior.trim()) + "</div>";
}

// ---------------------------------------------------------------------------
// Tablas
//
// Se escriben en el formato habitual de Markdown:
//
//   | Magnitud | Simbolo | Unidad |
//   |----------|---------|--------|
//   | Longitud | L       | m      |
//
// La segunda linea con guiones es el separador y marca el inicio de la
// cabecera. Se exige que exista: sin ella una fila que empieza por | podria
// ser solo texto con barras.
// ---------------------------------------------------------------------------
function esSeparador(linea) {
  return /^\|[\s:|-]+\|?\s*$/.test(linea) && linea.indexOf("-") >= 0;
}

// En una celda si se pueden anadir formulas: el separador "|---|" ya se ha
// consumido al detectar la tabla, asi que un "$$" suelto dentro de la celda no
// puede confundirse con el cierre de un bloque. Por eso las tablas van antes
// que las formulas.
function celdas(linea) {
  const crudos = linea.trim().replace(/^\|/, "").replace(/\|$/, "").split("|");
  return crudos.map(function (c) {
    return enCelda(c.trim());
  });
}

// Pinta el contenido de una celda, que puede mezclar formulas y texto.
//
// El <div class="formula"> no vale aqui: un div dentro de un td rompe la tabla,
// asi que cada formula se envuelve en un <span>, que si es legal en linea.
//
// La celda puede traer texto ademas de la formula ("$$f(x)$$$$ de indice par").
// Antes se quitaba el "$$" de apertura y el "$$" final a ciegas, de modo que el
// cierre del medio llegaba a procesaFormula y se veia escrito en la pagina. Ahora
// la celda se parte por "$$" y cada trozo se pinta por su cuenta.
function enCelda(t) {
  return enLineaRica(t);
}

function tablaHtml(lineas) {
  const cabeza = celdas(lineas[0]);
  // lineas[0] es la cabecera; el separador ya se consumio al detectar la tabla
  const cuerpo = lineas.slice(1);
  let html = '<div class="tabla-wrap"><table class="tabla-datos"><thead><tr>';
  cabeza.forEach(function (c) {
    html += "<th>" + c + "</th>";
  });
  html += "</tr></thead><tbody>";
  if (!cuerpo.length) {
    html +=
      '<tr><td colspan="' + cabeza.length + '" class="col-mut">Sin datos.</td></tr>';
  }
  cuerpo.forEach(function (fila) {
    const cs = celdas(fila);
    html += "<tr>";
    for (let i = 0; i < cabeza.length; i++) {
      html += "<td>" + (cs[i] || "") + "</td>";
    }
    html += "</tr>";
  });
  html += "</tbody></table></div>";
  return html;
}

// ---------------------------------------------------------------------------
// Figuras
//
// El archivo de datos escribe solo esto:
//     figura:triangulo-rectangulo
//     figura:teorema-tales | Relación entre los segmentos proporcionales
// El generador lee assets/img/figuras/<nombre>.svg y mete el dibujo dentro de
// la pagina. Al ir incrustado, el SVG se pinta con los colores del tema y
// escala con el ancho disponible, sin pedir un archivo extra al navegador.
//
// El nombre y el pie si se escapan: vienen del archivo de datos.
// ---------------------------------------------------------------------------
const DIR_FIGURAS = path.join(RAIZ, "assets", "img", "figuras");
const cacheFiguras = new Map();

function leerFigura(nombre) {
  if (cacheFiguras.has(nombre)) return cacheFiguras.get(nombre);
  let datos = null;
  try {
    const svg = fs.readFileSync(path.join(DIR_FIGURAS, nombre + ".svg"), "utf8");
    const vista = svg.match(/viewBox="([^"]+)"/);
    const interior = svg
      .replace(/^[\s\S]*?<svg[^>]*>/, "")
      .replace(/<\/svg>\s*$/, "")
      .trim();
    if (vista && interior) datos = { vista: vista[1], interior: interior };
  } catch (e) {
    datos = null;
  }
  cacheFiguras.set(nombre, datos);
  return datos;
}

function figura(nombre, pie) {
  const datos = leerFigura(nombre);
  if (!datos) {
    // No se rompe la pagina: se avisa en la salida y se deja una nota visible.
    return (
      '<div class="lecc-nota lecc-figura-falta">Falta la figura <strong>' +
      escapar(nombre) +
      "</strong> en assets/img/figuras.</div>"
    );
  }
  const pieHtml = pie
    ? '<figcaption class="fig-titulo">' + escapar(pie) + "</figcaption>"
    : "";
  return (
    '<figure class="lecc-figura">' +
    '<svg viewBox="' + datos.vista + '" role="img" aria-label="' +
    escapar(pie || nombre) + '">' + datos.interior + "</svg>" + pieHtml + "</figure>"
  );
}

// ---------------------------------------------------------------------------
// Bloques con items: ejercicios (!!) y autoevaluacion (??)
//
//   !! Practica estos tres casos
//   - enunciado del ejercicio
//   - otro enunciado
//   >> Pista: empieza despejando la incógnita.
//
//   ?? Comprueba lo que entendiste
//   - ¿Qué pasa si el lado es 0? :: la razon se hace indefinida
//
// El bloque termina en cuanto aparece una linea que ya no forma parte de el
// (un titulo, una figura, otra lista o un parrafo suelto), de modo que no hace
// falta ningun marcador de cierre.
// ---------------------------------------------------------------------------
function abreBloque(marca) {
  return marca === "!!" ? "ejercicio" : "autoeval";
}

function bloqueEjercicio(titulo, items, respuestas) {
  let html = '<div class="lecc-ejercicio"><h4 class="lecc-ejercicio-titulo">';
  html += '<i class="bi bi-pencil-square"></i> ' + enLineaRica(titulo);
  html += "</h4>";
  if (items.length) {
    html += '<ol class="lecc-ol">';
    items.forEach(function (t) {
      html += "<li>" + enLineaRica(t) + "</li>";
    });
    html += "</ol>";
  }
  if (respuestas.length) {
    html += '<details class="lecc-respuesta"><summary>Ver respuesta</summary>';
    respuestas.forEach(function (r) {
      html += "<p>" + enLineaRica(r) + "</p>";
    });
    html += "</details>";
  }
  html += "</div>";
  return html;
}

function bloqueAutoeval(titulo, items) {
  let html = '<div class="lecc-autoeval"><h4 class="lecc-ejercicio-titulo">';
  html += '<i class="bi bi-check2-square"></i> ' + enLineaRica(titulo);
  html += "</h4><ul class=\"lecc-ul\">";
  items.forEach(function (par) {
    const i = par.indexOf("::");
    const pregunta = (i < 0 ? par : par.slice(0, i)).trim();
    const resp = i < 0 ? "" : par.slice(i + 2).trim();
    html +=
      '<li><details class="lecc-check-item"><summary>' + enLineaRica(pregunta) +
      '</summary><div class="lecc-check-body"><p>' + enLineaRica(resp) + "</p></div></details></li>";
  });
  html += "</ul></div>";
  return html;
}

function formatear(txt) {
  const bruto = String(txt == null ? "" : txt).replace(/\r\n/g, "\n");
  if (!bruto.trim()) return "";

  const lineas = bruto.split("\n");
  const salida = [];
  let lista = null;
  let glosario = null;

  const cerrarLista = () => {
    if (lista) {
      salida.push("</" + lista + ">");
      lista = null;
    }
  };
  const cerrarGlosario = () => {
    if (glosario) {
      salida.push("</dl>");
      glosario = null;
    }
  };
  const cerrarTodo = () => {
    cerrarLista();
    cerrarGlosario();
  };

  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i].trim();

    if (!linea) {
      cerrarTodo();
      continue;
    }

    // --- codigo: ``` abre y ``` cierra -------------------------------
    if (linea.indexOf("```") === 0) {
      cerrarTodo();
      const lenguaje = linea.slice(3).trim();
      const cuerpo = [];
      i++;
      while (i < lineas.length && lineas[i].trim().indexOf("```") !== 0) {
        cuerpo.push(lineas[i]);
        i++;
      }
      let html = '<div class="lecc-codigo">';
      if (lenguaje) {
        html += '<div class="lecc-codigo-lengua">' + enLinea(lenguaje) + "</div>";
      }
      html += "<pre><code>";
      cuerpo.forEach(function (l) {
        html += escapar(l) + "\n";
      });
      html += "</code></pre></div>";
      salida.push(html);
      continue;
    }

    // --- tabla: necesita una linea separadora con guiones -------------
    // Va ANTES que la comprobacion de "$$" porque una celda puede traer una
    // formula y aqui el "$$" todavia no significa un bloque de formula.
    // Una tabla solo tiene cabecera si la SIGUIENTE linea es un separador
    // "|---|---|". Un "| a | b |" suelto es texto corriente, no una tabla.
    // Nota: una celda puede traer texto detras de su formula ("$$x$$ es la
    // abscisa"), asi que la tabla se busca por el separador y no por empezar
    // por "|". Por eso esta comprobacion va antes que la de las formulas.
    if (esSeparador(lineas[i + 1] ? lineas[i + 1].trim() : "")) {
      cerrarTodo();
      const filas = [linea];
      i += 2;
      while (i < lineas.length && lineas[i].trim().charAt(0) === "|") {
        filas.push(lineas[i].trim());
        i++;
      }
      i--;
      salida.push(tablaHtml(filas));
      continue;
    }

    // --- ejercicios y autoevaluacion ---------------------------------
    if (linea.indexOf("!! ") === 0 || linea.indexOf("?? ") === 0) {
      cerrarTodo();
      const marca = linea.slice(0, 2);
      const titulo = linea.slice(3).trim();
      const items = [];
      const respuestas = [];
      i++;
      while (i < lineas.length) {
        const l = lineas[i].trim();
        if (!l) {
          // una linea en blanco solo corta si lo que viene ya no es del bloque
          const sig = i + 1 < lineas.length ? lineas[i + 1].trim() : "";
          if (sig.indexOf("- ") !== 0 && sig.indexOf(">> ") !== 0) break;
          i++;
          continue;
        }
        if (l.indexOf(">> ") === 0) {
          respuestas.push(l.slice(3).trim());
          i++;
          continue;
        }
        if (l.indexOf("- ") === 0) {
          items.push(l.slice(2).trim());
          i++;
          continue;
        }
        if (/^\d+[.)]\s/.test(l)) {
          items.push(l.replace(/^\d+[.)]\s/, ""));
          i++;
          continue;
        }
        break;
      }
      i--;
      salida.push(
        abreBloque(marca) === "ejercicio"
          ? bloqueEjercicio(titulo, items, respuestas)
          : bloqueAutoeval(titulo, items)
      );
      continue;
    }

    // --- formula: $$ una linea o varias -------------------------------
    if (linea.indexOf("$$") === 0) {
      cerrarTodo();
      let resto = linea.slice(2);
      if (resto.indexOf("$$") >= 0) {
        salida.push(bloqueFormula(resto.slice(0, resto.indexOf("$$"))));
        continue;
      }
      const cuerpo = [resto];
      i++;
      while (i < lineas.length && lineas[i].trim().indexOf("$$") < 0) {
        cuerpo.push(lineas[i].trim());
        i++;
      }
      if (i < lineas.length) {
        const ultima = lineas[i].trim().slice(2);
        if (ultima) cuerpo.push(ultima);
      }
      salida.push(bloqueFormula(cuerpo.join(" ")));
      continue;
    }

    // --- glosario ------------------------------------------------------
    if (linea.indexOf("glosario:") === 0) {
      if (!glosario) {
        salida.push('<dl class="lecc-glosario">');
        glosario = true;
      }
      // "glosario:" son 9 caracteres, el noveno es los dos puntos
      const resto = linea.slice(9).trim();
      const k = resto.indexOf("::");
      const term = (k < 0 ? resto : resto.slice(0, k)).trim();
      const def = k < 0 ? "" : resto.slice(k + 2).trim();
      salida.push("<dt>" + enLinea(term) + "</dt><dd>" + enLineaRica(def) + "</dd>");
      continue;
    }

    // --- marcas que ya existian ----------------------------------------
    if (linea.indexOf("## ") === 0) {
      cerrarTodo();
      salida.push('<h4 class="lecc-h4">' + enLinea(linea.slice(3)) + "</h4>");
    } else if (linea.indexOf("- ") === 0) {
      cerrarGlosario();
      if (lista !== "ul") {
        cerrarLista();
        salida.push('<ul class="lecc-ul">');
        lista = "ul";
      }
      salida.push("<li>" + enLineaRica(linea.slice(2)) + "</li>");
    } else if (/^\d+[.)]\s/.test(linea)) {
      cerrarGlosario();
      if (lista !== "ol") {
        cerrarLista();
        salida.push('<ol class="lecc-ol">');
        lista = "ol";
      }
      salida.push("<li>" + enLineaRica(linea.replace(/^\d+[.)]\s/, "")) + "</li>");
    } else if (linea.indexOf("figura:") === 0) {
      cerrarTodo();
      const pf = linea.slice(7).split("|");
      salida.push(figura(pf[0].trim(), (pf[1] || "").trim()));
    } else if (linea.indexOf("> ") === 0) {
      cerrarTodo();
      salida.push('<div class="lecc-nota">' + enLineaRica(linea.slice(2)) + "</div>");
    } else {
      cerrarTodo();
      salida.push("<p>" + enLineaRica(linea) + "</p>");
    }
  }

  cerrarTodo();
  return salida.join("");
}

// recorta el prefijo "Modulo N · " / "Módulo N · " de un titulo de modulo,
// para no repetir el numero en la card (alla ya va el kicker)
function tituloModuloCorto(titulo) {
  return String(titulo)
    .replace(/^\s*M[oó]dulo\s+\d+\s*[·.\-–:]\s*/i, "")
    .trim();
}

// los modulos del dato no traen icono propio: se rotan estos para que cada
// card se distinga de un vistazo
const ICONOS_MODULO = [
  "collection",
  "map",
  "layers",
  "compass",
  "diagram-3",
  "lightning-charge",
  "globe-americas",
  "book",
];

// ---------------------------------------------------------------------------
// Generadores de bloques HTML que las plantillas esperan
// ---------------------------------------------------------------------------

// plantilla-curso.html %%MODULOS%% -> acordeon de modulos con enlaces
function bloquesModulosCurso(curso, slugCurso) {
  const partes = [];
  curso.modulos.forEach(function (mod, mi) {
    const modSlug = normaliza(mod.titulo);
    const href = modSlug + "/index.html";
    // mini-fichas de lecciones dentro de la card del modulo
    const fichas = mod.lecciones.map(function (lecc, li) {
      const clave = slugCurso + "-" + mi + "-" + li;
      return (
        '<li class="minificha">' +
        '<a class="minificha-link" data-clave="' + clave + '" ' +
        'href="' + modSlug + "/" + tituloArchivo(lecc.titulo, li) + '">' +
        '<span class="minificha-num">' + (li + 1) + "</span>" +
        '<span class="minificha-txt">' + lecc.titulo + "</span>" +
        '<i class="bi bi-check-circle-fill minificha-ok"></i>' +
        '<i class="bi bi-arrow-right ms-auto minificha-go"></i>' +
        "</a>" +
        "</li>"
      );
    }).join("");
    partes.push(
      '<div class="col-12 col-xl-6">' +
        '<article class="tarjeta mod-card h-100 reveal">' +
        '<div class="mod-card-cab d-flex align-items-start gap-3">' +
        '<div class="mod-card-ico flex-shrink-0"><i class="bi bi-' + (mod.icono || ICONOS_MODULO[mi % ICONOS_MODULO.length]) + '"></i></div>' +
        "<div>" +
        '<span class="mod-card-kicker">Módulo ' + (mi + 1) + "</span>" +
        '<h5 class="mod-card-titulo mb-0">' + tituloModuloCorto(mod.titulo) + "</h5>" +
        '<div class="col-mut small mt-1">' +
        '<i class="bi bi-journal-text"></i> ' + mod.lecciones.length + " lecciones" +
        "</div>" +
        "</div>" +
        "</div>" +
        '<ul class="lista-minifichas mt-3 mb-3">' + fichas + "</ul>" +
        '<a class="btn btn-sm btn-cta w-100 mt-auto" href="' + href + '">' +
        'Ver lecciónes del módulo <i class="bi bi-arrow-right"></i></a>' +
        "</article>" +
        "</div>"
    );
  });
  return partes.join("\n");
}

// plantilla-curso.html %%RUTA%% -> items de ruta de estudio (el <ol> ya lo trae
// la plantilla, aqui solo los <li>)
function rutaEstudio(curso) {
  const r = curso.ruta || [];
  const partes = r.map(function (p, i) {
    return '<li class="reveal"><span class="paso-num">' + (i + 1) + '</span><span class="paso-txt">' + p + "</span></li>";
  });
  return partes.join("");
}

// plantilla-curso.html %%AREAS%% -> chips de areas
function areasCurso(curso) {
  const a = curso.areas || [];
  const partes = a.map(function (x) {
    return '<span class="chip d-inline-block">' + x + "</span>";
  });
  return partes.join("");
}

// plantilla-curso.html %%CLAVES%% -> array JSON de claves (para barra)
function clavesJSON(CURSOS_data, slugCurso) {
  const curso = CURSOS_data[slugCurso];
  const claves = [];
  curso.modulos.forEach(function (mod, mi) {
    mod.lecciones.forEach(function (_, li) {
      claves.push(slugCurso + "-" + mi + "-" + li);
    });
  });
  return JSON.stringify(claves);
}

// claves de un unico modulo (barra de progreso de la pagina de modulo)
function clavesModulo(curso, slugCurso, mi) {
  const claves = [];
  const mod = curso.modulos[mi];
  mod.lecciones.forEach(function (_, li) {
    claves.push(slugCurso + "-" + mi + "-" + li);
  });
  return JSON.stringify(claves);
}

// plantilla-curso.html %%RECURSOS%% -> lista de recursos
function recursosCurso(curso) {
  const r = curso.recursos || [];
  const partes = r.map(function (rec) {
    // normaliza URLs: si no trae esquema, se asume https
    let url = rec.url || "#";
    // solo es enlace si parece un dominio real: sin espacios y con un punto
    const pareceUrl = /^[^\s]+\.[a-z]{2,}(\/[^\s]*)?$/i.test(url);
    if (url !== "#" && pareceUrl && !/^[a-z]+:/i.test(url)) url = "https://" + url;
    const esUrl = /^https?:\/\/[^\s]+\.[a-z]{2,}/i.test(url);
    return (
      '<li class="d-flex gap-2 mb-2">' +
      '<i class="bi bi-' + (esUrl ? "box-arrow-up-right" : "info-circle") + '" style="color:var(--acento);"></i>' +
      "<div>" +
      (esUrl
        ? '<a href="' + url + '" target="_blank" rel="noopener">' + (rec.titulo || "Recurso") + "</a>"
       : "<span>" + (rec.titulo || "Recurso") + "</span>") +
      (rec.desc ? '<div class="col-mut small">' + rec.desc + "</div>" : "") +
      "</div></li>"
    );
  });
  return partes.join("");
}

// ---- plantilla-modulo.html %%LISTA_LECCIONES%% -> cards de lecciones ----
// Cada card ofrece dos acciones: entrar a la leccion (el boton principal) y
// marcar la leccion como completada (la casilla compacta de al lado). El
// titulo sigue siendo enlace, pero sin stretched-link: con el boton dentro de
// la card, dos zonas clicables superpuestas dan errores al pulsarlas.
function leccionesModulo(curso, mod, mi, slugCurso) {
  const filas = mod.lecciones.map(function (lecc, li) {
    const clave = slugCurso + "-" + mi + "-" + li;
    const id = "ck" + slugCurso + mi + li;
    const href = tituloArchivo(lecc.titulo, li);
    return (
      '<div class="col-12 col-md-6">' +
        '<article class="tarjeta lecc-card h-100 reveal">' +
        '<div class="d-flex align-items-start gap-3">' +
        '<span class="lecc-num flex-shrink-0">' + (li + 1) + "</span>" +
        "<div>" +
        '<h5 class="lecc-titulo mb-1">' +
        '<a href="' + href + '">' + lecc.titulo + "</a>" +
        "</h5>" +
        (lecc.objetivo
          ? '<p class="col-mut small lecc-obj mb-0">' + lecc.objetivo + "</p>"
         : "") +
        "</div>" +
        "</div>" +
        '<div class="lecc-pie mt-auto">' +
        '<a class="btn btn-sm btn-cta lecc-entrar" href="' + href + '">' +
        'Ver lección <i class="bi bi-arrow-right"></i></a>' +
        '<div class="form-check lecc-check m-0">' +
        '<input class="form-check-input checkbox-leccion" type="checkbox" id="' + id + '" ' +
        'data-clave="' + clave + '" title="Marcar como completada">' +
        '<label class="form-check-label visually-hidden" for="' + id + '">Marcar como completada</label>' +
        "</div>" +
        "</div>" +
        "</article>" +
        "</div>"
    );
  });
  return filas.join("\n");
}

// %%LECCIONES%% en plantilla-modulo es el CONTADOR "0 / N" via barra; pero el
// token %%LECCIONES%% tambien aparece como texto "N lecciones". Mejor:
// reemplazamos %%CLAVES%% (JSON) y %%LECCIONES%% (numero) con valores reales.

// plantilla-modulo.html %%FOOTER%% -> pie + scripts de progreso (las paginas de
// modulo no traen pie inline, a diferencia de curso/leccion)
function pieModulo(curso) {
  return (
    '<footer class="footer-guia">\n' +
    '  <div class="container">\n' +
    '    <div class="row gy-4 align-items-center">\n' +
    '      <div class="col-md-6">\n' +
    '        <div class="marca d-flex align-items-center gap-2 mb-2"><i class="bi bi-stars"></i> Aprende Sin Límites</div>\n' +
    '        <p class="mb-0">Guía abierta para preparar tus áreas académicas con libertad y método.</p>\n' +
    '      </div>\n' +
      '      <div class="col-md-6 text-md-end">\n' +
      '        <a class="me-3" href="../index.html">Volver a ' + curso.titulo + '</a>\n' +
      '        <a class="me-3" href="../../../index.html">Inicio</a>\n' +
      '        <a class="me-3" href="../../../secciones/tablas.html">Tablas</a>\n' +
      '        <a class="me-3" href="../../../secciones/calculadora.html">Calculadora</a>\n' +
      '        <a class="me-3" href="../../../secciones/recursos.html">Recursos</a>\n' +
      '        <a href="../../../secciones/faq.html">Preguntas</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</footer>'
  );
}
// plantilla-modulo.html %%RUTA%% -> enlaces rapidos a los modulos del curso
function rutaModulos(curso, mi) {
  const partes = curso.modulos.map(function (m, i) {
    const act = i === mi ? ' active' : '';
    return (
      '<a class="paso' + act + '" href="../' + normaliza(m.titulo) + '/index.html">' +
      '<span class="paso-num">' + (i + 1) + "</span>" +
      '<span class="paso-txt">' + m.titulo + "</span>" +
      '<i class="bi bi-chevron-right ms-auto paso-go"></i>' +
      "</a>"
    );
  });
  return partes.join("\n");
}

// ---------------------------------------------------------------------------
// Rellenar una plantilla (reemplazo de todos los %%TOKEN%% presentes)
// ---------------------------------------------------------------------------
function rellenar(plantilla, valores) {
  let out = plantilla;
  const tokens = Object.keys(valores);
  tokens.forEach(function (tk) {
    out = out.split("%%" + tk + "%%").join(valores[tk]);
  });
  return out;
}

// ---------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------
function main() {
  const cargado = cargar();
  const CURSOS_data = cargado.cursos;
  const fusion = cargado.resumen;
  if (fusion.avisos.length) {
    console.log("AVISOS DE CONTENIDO:");
    fusion.avisos.forEach((a) => console.log("  " + a));
  }

  // El script de arranque del tema va en el <head> de las tres plantillas, en
  // el token %%SCRIPT_TEMA%%. Se inyecta desde aqui, una sola vez, en vez de
  // escribir el mismo <script> tres veces en el HTML: si hay que tocar la
  // clave de localStorage o la forma de detectar el tema del sistema, se toca
  // un sitio y no tres.
  function conScriptTema(tpl) {
    return tpl.split("%%SCRIPT_TEMA%%").join(SCRIPT_TEMA);
  }

  const tplCurso = conScriptTema(fs.readFileSync(path.join(DIR_PLANTILLAS, "plantilla-curso.html"), "utf8"));
  const tplModulo = conScriptTema(fs.readFileSync(path.join(DIR_PLANTILLAS, "plantilla-modulo.html"), "utf8"));
  const tplLeccion = conScriptTema(fs.readFileSync(path.join(DIR_PLANTILLAS, "plantilla-leccion.html"), "utf8"));

  const slugs = Object.keys(CURSOS_data);
  let contArchivos = 0;

  slugs.forEach(function (slugCurso) {
    const curso = CURSOS_data[slugCurso];
    const dirCurso = path.join(DIR_CURSOS, slugCurso, "");
    if (!fs.existsSync(dirCurso)) fs.mkdirSync(dirCurso, { recursive: true });

    // Flatten total de lecciones del curso
    let totalLecciones = 0;
    curso.modulos.forEach(function (m) { totalLecciones += m.lecciones.length; });

    // ---- pagina de CURSO (indice): cursos/<slug>/index.html -> raiz ../.. ----
    const htmlCurso = rellenar(tplCurso, {
      REL: "../..",
      SLUG: slugCurso,
      CURSO: curso.titulo,
      ICONO: curso.icono || "collection",
      DESCRIPCION: curso.descripcion || "",
      AREAS: areasCurso(curso),
      MODULOS: bloquesModulosCurso(curso, slugCurso),
      RUTA: rutaEstudio(curso),
      RECURSOS: recursosCurso(curso),
      CLAVES: clavesJSON(CURSOS_data, slugCurso),
      TOTAL: String(totalLecciones),
    });
    fs.writeFileSync(path.join(dirCurso, "index.html"), htmlCurso, "utf8");
    contArchivos++;

    // ------- por MODULO -------
    curso.modulos.forEach(function (mod, mi) {
      const modSlug = normaliza(mod.titulo);
      const dirMod = path.join(dirCurso, modSlug);
      if (!fs.existsSync(dirMod)) fs.mkdirSync(dirMod, { recursive: true });

      // ---- pagina de MODULO: cursos/<slug>/<mod>/index.html -> raiz ../../.. ----
      const htmlModulo = rellenar(tplModulo, {
        REL: "../../..",
        SLUG: slugCurso,
        CURSO: curso.titulo,
        TITULO: mod.titulo,
        DESCRIPCION: (mod.descripcion || curso.descripcion || ""),
        LECCIONES: String(mod.lecciones.length),
        CLAVES: clavesModulo(curso, slugCurso, mi),
        CLAVE_MODULO: slugCurso + "-" + mi,
        ICONO_MOD: String(mod.icono || ICONOS_MODULO[mi % ICONOS_MODULO.length]),
        RUTA: rutaModulos(curso, mi),
        FOOTER: pieModulo(curso),
        LISTA_LECCIONES: leccionesModulo(curso, mod, mi, slugCurso),
      });
      fs.writeFileSync(path.join(dirMod, "index.html"), htmlModulo, "utf8");
      contArchivos++;

      // ------- por LECCION -------
      // navegacion: claves planas del curso para saber anterior/siguiente
      const plana = [];
      curso.modulos.forEach(function (m2, mi2) {
        m2.lecciones.forEach(function (l2, li2) { plana.push({ mi2: mi2, li2: li2 }); });
      });
      mod.lecciones.forEach(function (lecc, li) {
        const pos = plana.findIndex(function (p) { return p.mi2 === mi && p.li2 === li; });
        const ant = pos > 0 ? plana[pos - 1] : null;
        const sig = pos >= 0 && pos < plana.length - 1 ? plana[pos + 1] : null;

        // La pagina de leccion vive en cursos/<curso>/<modulo>/, por lo que:
        // - si el destino esta en el MISMO modulo -> solo el nombre de archivo
        // - si esta en OTRO modulo -> "../<modslug>/<archivo>"
        // - si no existe destino -> "index.html" (indice del modulo)
        function rutaDesde(vecino) {
          if (!vecino) return "index.html";
          const archivo = tituloArchivo(
            curso.modulos[vecino.mi2].lecciones[vecino.li2].titulo,
            vecino.li2
          );
          if (vecino.mi2 === mi) return archivo;
          return "../" + normaliza(curso.modulos[vecino.mi2].titulo) + "/" + archivo;
        }
        const rutaAnt = rutaDesde(ant);
        const rutaSig = rutaDesde(sig);

        const htmlLeccion = rellenar(tplLeccion, {
        REL: "../../..",
        SLUG: slugCurso,
        CLAVE: slugCurso + "-" + mi + "-" + li,
          CURSO: curso.titulo,
          MODULO: mod.titulo,
          TITULO: lecc.titulo,
          OBJETIVO: lecc.objetivo || "",
          TEORIA: formatear(lecc.teoria),
          EJEMPLO: formatear(lecc.ejemplo),
          CONSEJO: formatear(lecc.consejo),
          ICONO: lecc.icono || curso.icono || "journal-text",
          RUTA_CURSO: "../index.html",
          RUTA_MODULO: "index.html",
          RUTA_ANTERIOR: rutaAnt.replace(/\\/g, "/"),
          RUTA_SIGUIENTE: rutaSig.replace(/\\/g, "/"),
        });
        const archivoLeccion = tituloArchivo(lecc.titulo, li);
        fs.writeFileSync(path.join(dirMod, archivoLeccion), htmlLeccion, "utf8");
        contArchivos++;
      });
    });
  });

  console.log(
    "Contenido: " +
      fusion.campos +
      " campos aplicados desde contenido/ (" +
      fusion.archivos +
      " archivos), " +
      fusion.nuevas +
      " entradas nuevas."
  );
  console.log("Estructura generada: " + contArchivos + " archivos en " + slugs.length + " cursos.");
}

// Se ejecuta solo al lanzarlo directamente. Los verificadores lo importan para
// reutilizar SIMBOLOS y formatear sin que se genere nada por el camino.
if (require.main === module) main();

module.exports = { SIMBOLOS, FUNCIONES, TEXTO_MATH, CONJUNTOS, ESPACIOS, RAYAS, formatear, procesaFormula, main };
