/* ============================================================================
   calculadora.js — calculadora científica de secciones/calculadora.html

   El motor NO es un <input type="text"> con un "calcular" que le pase la cadena
   a eval() o a new Function(). Evaluar lo que escribe una persona es ejecutar
   código suyo: un texto como "alert(1)" o "fetch(...)" se ejecutaría de verdad.
   Aquí la expresión se parte en piezas (tokeniza) y se interpreta con un
   analizador propio, así que lo único que puede hacer es calcular. De paso se
   pueden dar mensajes de error en castellano, que es justo lo que un alumno
   necesita para saber que le falta un paréntesis.

   Qué acepta:
     números        12   3,5   .5   2e3
     operadores     + - * / ^      (^ es potencia, asociativa a la derecha)
     paréntesis     ( )
     porcentaje     200 + 10%  ->  220      (no 200,1: el porcentaje es
                                              relativo al término anterior)
     factorial      5!
     funciónes      sin cos tan asin acos atan sinh cosh tanh
                    ln log sqrt abs exp
     constantes     pi  e
     multiplicación implícita   2pi   (1+2)(3+4)   2sin(30)

   Las trigonométricas trabajan en GRADOS, que es lo que se usa en las
   lecciones del sitio, y hay un botón para pasar a radianes.

   El texto de la expresión vive en un <input> de verdad: se puede escribir con
   el teclado y los botones insertan en la posición del cursor. Así el teclado
   funcióna sin ningún manejador extra por tecla.
   ============================================================================ */
(function () {
  "use strict";

  var expr = document.getElementById("calcExpr");
  var salida = document.getElementById("calcResultado");
  var lineaError = document.getElementById("calcError");
  var historial = document.getElementById("calcHistorial");
  var btnHistorial = document.getElementById("calcLimpiarHistorial");
  var btnAngulos = document.getElementById("calcAngulos");

  // Esta página es la única que carga este archivo, pero si alguien lo
  // incluyera en otra que no tenga la calculadora, no debe romperla.
  if (!expr || !salida || !lineaError || !historial) return;

  var MAX_HISTORIAL = 12;
  var operaciones = [];
  var grados = true;

  /* ==========================================================================
     1. Errores
     ========================================================================== */
  function falla(mensaje) {
    throw new Error(mensaje);
  }

  function exigePositivo(x, nombre) {
    if (!(x > 0)) {
      falla("El " + nombre + " necesita un número mayor que cero (escribiste " + fmt(x) + ").");
    }
  }

  function exigeEntreMenosYUno(x, nombre) {
    if (x < -1 || x > 1) {
      falla("A " + nombre + " hay que darle un número entre -1 y 1.");
    }
  }

  /* ==========================================================================
     2. Unidades angulares
     ========================================================================== */
  function aRadianes(x) {
    return grados ? (x * Math.PI) / 180 : x;
  }
  function aGrados(x) {
    return grados ? (x * 180) / Math.PI : x;
  }

  /* ==========================================================================
     3. Funciones y constantes
     ========================================================================== */
  var FUNCIONES = {
    sin: function (x) { return Math.sin(aRadianes(x)); },
    cos: function (x) { return Math.cos(aRadianes(x)); },
    tan: function (x) { return Math.tan(aRadianes(x)); },
    asin: function (x) { exigeEntreMenosYUno(x, "asin"); return aGrados(Math.asin(x)); },
    acos: function (x) { exigeEntreMenosYUno(x, "acos"); return aGrados(Math.acos(x)); },
    atan: function (x) { return aGrados(Math.atan(x)); },
    sinh: function (x) { return Math.sinh(x); },
    cosh: function (x) { return Math.cosh(x); },
    tanh: function (x) { return Math.tanh(x); },
    ln: function (x) { exigePositivo(x, "logaritmo natural (ln)"); return Math.log(x); },
    log: function (x) { exigePositivo(x, "logaritmo decimal (log)"); return Math.log10(x); },
    sqrt: function (x) {
      if (x < 0) falla("No hay raíz real de un número negativo.");
      return Math.sqrt(x);
    },
    abs: function (x) { return Math.abs(x); },
    exp: function (x) { return Math.exp(x); },
  };

  var CONSTANTES = { pi: Math.PI, e: Math.E };

  /* ==========================================================================
     4. Escribir números

     Se limpian dos cosas antes de mostrarlos: los decimales que sobran por
     error de coma flotante (0,1 + 0,2 no es 0,30000000000000004) y la coma
     decimal, que en un sitio en españoll se escribe con ",".
     ========================================================================== */
  function fmt(n) {
    if (typeof n !== "number" || isNaN(n)) return "indefinido";
    if (n === Infinity) return "infinito";
    if (n === -Infinity) return "-infinito";

    var texto;
    if (Number.isInteger(n) && Math.abs(n) < 1e15) {
      texto = String(n);
    } else {
      // 12 cifras significativas: suficientes para un cálculo de este tamaño
      // y no tantas que llenen la pantalla de ruido.
      texto = String(Number(n.toPrecision(12)));
    }
    var partes = texto.split("e");
    if (partes.length === 2) {
      return partes[0].replace(".", ",") + "e" + String(Number(partes[1]));
    }
    return texto.replace(".", ",");
  }

  /* ==========================================================================
     5. Tokenizador: partir el texto en piezas

     Cada pieza guarda en "esp" si delante suyo había un espacio. No es
     información inútil: es lo que separa "2pi" (dos pi) de "1 2" (dos números
     pegados por error), y como el tokenizador se come los espacios, hay que
     acordarse de ellos antes de tirarlos.
     ========================================================================== */
  function tokeniza(texto) {
    // Se aceptan los signos que se teclean de verdad (x, /, -) además de los
    // que se leen bien (x, /, -) y se normalizan a los de la máquina.
    var t = texto
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/[−–—]/g, "-")
      .replace(/√/g, "sqrt")
      .replace(/,/g, ".");

    var piezas = [];
    var i = 0;
    var esp = false;

    while (i < t.length) {
      var c = t.charAt(i);

      if (c === " " || c === "\t") { i++; esp = true; continue; }

      // Numero (incluye el 2e3 de la notación cientifica)
      if ((c >= "0" && c <= "9") || c === ".") {
        var num = /^[0-9]*\.?[0-9]+(?:[eE][+-]?[0-9]+)?/.exec(t.slice(i));
        if (!num) falla("No se puede leer el número que empieza por \u00ab" + c + "\u00bb.");
        piezas.push({ t: "num", v: parseFloat(num[0]), esp: esp });
        i += num[0].length;
        esp = false;
        continue;
      }

      // Signos y paréntesis
      if (c === "(" || c === ")" || c === "!" || c === "%") {
        piezas.push({
          t: c === "(" ? "abre" : c === ")" ? "cierra" : c === "!" ? "fact" : "pct",
          esp: esp,
        });
        i++;
        esp = false;
        continue;
      }
      if ("+-*/^".indexOf(c) >= 0) {
        piezas.push({ t: "op", v: c, esp: esp });
        i++;
        esp = false;
        continue;
      }

      // Palabra: función o constante
      if (/[a-zA-Z]/.test(c)) {
        var pal = /^[a-zA-Z]+/.exec(t.slice(i));
        var nombre = pal[0].toLowerCase();
        if (Object.prototype.hasOwnProperty.call(FUNCIONES, nombre)) {
          piezas.push({ t: "fn", v: nombre, esp: esp });
        } else if (Object.prototype.hasOwnProperty.call(CONSTANTES, nombre)) {
          piezas.push({ t: "num", v: CONSTANTES[nombre], esp: esp });
        } else {
          falla("No conozco la función «" + nombre + "».");
        }
        i += pal[0].length;
        esp = false;
        continue;
      }

      falla("No entiendo el carácter \u00ab" + c + "\u00bb.");
    }

    return piezas;
  }

  /* ==========================================================================
     6. Interpretador

     Cada nivel devuelve { v: valor, pct: true|false }, donde pct avisa de que
     lo que se acaba de leer llevaba un "%" detrás. El porcentaje es relativo
     al término de la izquierda: 200 + 10% son 220, no 200,1.

     El orden de las funciónes es el de las precedencias:
       expresión  + -
       termino    * /
       unario     signo +
       potencia   ^
       postfijo   ! %
       primario   números, constantes, funciónes y paréntesis
     ========================================================================== */
  function interpreta(piezas) {
    var p = 0;

    function mira() { return piezas[p]; }
    function cierra() {
      var t = piezas[p];
      if (t && t.t === "cierra") { p++; return true; }
      return false;
    }

    function binaria(a, op, b) {
      if (op === "/") {
        if (b.v === 0) falla("No se puede dividir entre cero.");
        return { v: a.v / b.v, pct: false };
      }
      if (op === "*") {
        return { v: a.v * b.v, pct: false };
      }
      if (b.pct) {
        // b.v ya es el porcentaje en decimales (10% -> 0,1).
        if (op === "+") return { v: a.v + a.v * b.v, pct: false };
        return { v: a.v - a.v * b.v, pct: false };
      }
      if (op === "+") return { v: a.v + b.v, pct: false };
      return { v: a.v - b.v, pct: false };
    }

    function expresión() {
      var izq = termino();
      for (;;) {
        var t = mira();
        if (!t || t.t !== "op" || (t.v !== "+" && t.v !== "-")) return izq;
        p++;
        izq = binaria(izq, t.v, termino());
      }
    }

    function termino() {
      var izq = unario();
      for (;;) {
        var t = mira();
        if (t && t.t === "op" && (t.v === "*" || t.v === "/")) {
          p++;
          izq = binaria(izq, t.v, unario());
          continue;
        }
        // Multiplicación implícita: 2pi, (1+2)(3+4), 2sin(30). Con funciones
        // y paréntesis siempre; con otro número solo si iban pegados, sin
        // espacio. Esa diferencia es la que hace que "2pi" valga y que un "1 2"
        // que se haya quedado pegado por error avise en vez de devolver 2 en
        // silencio.
        if (t && (t.t === "fn" || t.t === "abre" || (t.t === "num" && !t.esp))) {
          izq = { v: izq.v * unario().v, pct: false };
          continue;
        }
        return izq;
      }
    }

    function unario() {
      var t = mira();
      if (t && t.t === "op" && (t.v === "-" || t.v === "+")) {
        p++;
        var v = unario().v;
        return { v: t.v === "-" ? -v : v, pct: false };
      }
      return potencia();
    }

    function potencia() {
      var base = postfijo();
      var t = mira();
      if (t && t.t === "op" && t.v === "^") {
        p++;
        // A la derecha, y pasando por unario, para que 2^-3 y 2^3^2 valgan.
        var ex = unario();
        if (base.v < 0 && !Number.isInteger(ex.v)) {
          falla("Un número negativo solo admite potencias enteras.");
        }
        return { v: Math.pow(base.v, ex.v), pct: false };
      }
      return base;
    }

    function postfijo() {
      var v = primario();
      for (;;) {
        var t = mira();
        if (t && t.t === "fact") { p++; v = { v: factorial(v.v), pct: false }; continue; }
        if (t && t.t === "pct") { p++; v = { v: v.v / 100, pct: true }; continue; }
        return v;
      }
    }

    function primario() {
      var t = mira();
      if (!t) falla("La expresión está incompleta.");

      if (t.t === "num") { p++; return { v: t.v, pct: false }; }

      if (t.t === "fn") {
        p++;
        if (!mira() || mira().t !== "abre") {
          falla("La función \u00ab" + t.v + "\u00bb necesita paréntesis: escribe " + t.v + "(...).");
        }
        p++;
        var argumento = expresión();
        if (!cierra()) falla("Falta cerrar el paréntesis de \u00ab" + t.v + "\u00bb.");
        return { v: FUNCIONES[t.v](argumento.v), pct: false };
      }

      if (t.t === "abre") {
        p++;
        var dentro = expresión();
        if (!cierra()) falla("Falta cerrar un paréntesis.");
        return { v: dentro.v, pct: false };
      }

      if (t.t === "cierra") falla("Hay un paréntesis que cierra sin abrir.");
      if (t.t === "op") falla("Falta un número antes del signo \u00ab" + t.v + "\u00bb.");
      if (t.t === "pct") falla("El porcentaje necesita un número delante.");
      if (t.t === "fact") falla("El factorial necesita un número delante.");

      falla("La expresión está incompleta.");
    }

    function factorial(n) {
      if (!Number.isInteger(n) || n < 0) {
        falla("El factorial solo acepta enteros de 0 a 170.");
      }
      if (n > 170) return Infinity;
      var r = 1;
      for (var i = 2; i <= n; i++) r *= i;
      return r;
    }

    var resultado = expresión();

    if (p < piezas.length) {
      var sobra = piezas[p];
      if (sobra.t === "num") {
        falla("Sobran números: separa las operaciones con un signo (+, -, x o /).");
      }
      if (sobra.t === "cierra") falla("Hay un paréntesis que cierra sin abrir.");
      if (sobra.t === "fn") falla("Falta el signo de operación antes de \u00ab" + sobra.v + "\u00bb.");
      if (sobra.t === "abre") falla("Un paréntesis que abre no puede ir al final.");
      falla("La expresión está incompleta.");
    }

    return resultado.v;
  }

  function calcula(texto) {
    return interpreta(tokeniza(texto));
  }

  /* ==========================================================================
     7. Pintar la pantalla y el historial
     ========================================================================== */
  function pinta() {
    var texto = expr.value;
    if (!texto.trim()) {
      salida.textContent = "0";
      lineaError.textContent = "";
      return;
    }
    try {
      salida.textContent = fmt(calcula(texto));
      lineaError.textContent = "";
    } catch (e) {
      // Con la expresión a medias ("2+") es normal que todavia no se pueda
      // calcular: el error se escribe para poder corregirlo, no para asustar.
      salida.textContent = "";
      lineaError.textContent = e.message;
    }
  }

  function historialVacio() {
    var li = document.createElement("li");
    li.className = "calc-vacio";
    li.textContent = "Todavía no hay operaciones. Pulsa = para guardar la primera.";
    historial.appendChild(li);
  }

  function pintaHistorial() {
    historial.textContent = "";
    if (btnHistorial) btnHistorial.classList.toggle("d-none", operaciones.length === 0);
    if (!operaciones.length) {
      historialVacio();
      return;
    }
    operaciones.forEach(function (op) {
      var li = document.createElement("li");
      var boton = document.createElement("button");
      boton.type = "button";
      boton.className = "calc-hist-item";
      boton.setAttribute("aria-label", "Volver a cargar la operación " + op.expr);

      var exprTxt = document.createElement("span");
      exprTxt.className = "calc-hist-expr";
      exprTxt.textContent = op.expr;

      var valorTxt = document.createElement("span");
      valorTxt.className = "calc-hist-val";
      valorTxt.textContent = "= " + fmt(op.valor);

      boton.appendChild(exprTxt);
      boton.appendChild(valorTxt);
      boton.addEventListener("click", function () {
        expr.value = op.expr;
        expr.focus();
        expr.setSelectionRange(op.expr.length, op.expr.length);
        pinta();
      });

      li.appendChild(boton);
      historial.appendChild(li);
    });
  }

  /* ==========================================================================
     8. Acciones
     ========================================================================== */

  /* Inserta texto donde esté el cursor. Si lo que se inserta es una función
     con paréntesis, el cursor se queda dentro: escribir "sin()" y tener que
     mover el cursor a mano es lo que hace que estas calculadoras molesten. */
  function inserta(texto) {
    var v = expr.value;
    var ini = expr.selectionStart === null ? v.length : expr.selectionStart;
    var fin = expr.selectionEnd === null ? ini : expr.selectionEnd;

    // "2" + botón e  ->  "2*e". Sin esto, "2e" se leería como dos números
    // sueltos y el mensaje de error desconcertaría.
    if (texto === "e" && ini > 0 && /[0-9)]/.test(v.charAt(ini - 1))) {
      texto = "*e";
    }

    expr.value = v.slice(0, ini) + texto + v.slice(fin);
    var pos = ini + texto.length;
    if (texto.charAt(texto.length - 1) === ")") pos -= 1;

    expr.focus();
    try {
      expr.setSelectionRange(pos, pos);
    } catch (e) {
      // Algunos navegadores viejos no dejan mover el cursor en un input: el
      // texto se inserta igual, solo que el cursor se queda al final.
    }
    expr.scrollLeft = expr.scrollWidth;
    pinta();
  }

  function borra() {
    var ini = expr.selectionStart === null ? expr.value.length : expr.selectionStart;
    var fin = expr.selectionEnd === null ? ini : expr.selectionEnd;
    if (ini !== fin) {
      expr.value = expr.value.slice(0, ini) + expr.value.slice(fin);
    } else if (ini > 0) {
      expr.value = expr.value.slice(0, ini - 1) + expr.value.slice(ini);
      ini -= 1;
    }
    expr.focus();
    try {
      expr.setSelectionRange(ini, ini);
    } catch (e) { /* ver inserta() */ }
    pinta();
  }

  function limpia() {
    expr.value = "";
    expr.focus();
    pinta();
  }

  /* Calcula, guarda en el historial y deja el campo libre para lo siguiente. */
  function iguala() {
    var texto = expr.value.trim();
    if (!texto) return;

    var valor;
    try {
      valor = calcula(texto);
    } catch (e) {
      // El mensaje ya está escrito por pinta().
      expr.focus();
      return;
    }

    operaciones.unshift({ expr: texto, valor: valor });
    if (operaciones.length > MAX_HISTORIAL) operaciones.length = MAX_HISTORIAL;

    expr.value = "";
    salida.textContent = fmt(valor);
    lineaError.textContent = "";
    pintaHistorial();
    expr.focus();
  }

  /* ==========================================================================
     9. Eventos
     ========================================================================== */
  expr.addEventListener("input", pinta);

  expr.addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      iguala();
    } else if (ev.key === "Escape") {
      ev.preventDefault();
      limpia();
    }
  });

  // Escape también funcióna con el foco en un botón de la calculadora, para no
  // tener que volver a clicar dentro del campo.
  document.addEventListener("keydown", function (ev) {
    if (ev.key !== "Escape" || document.activeElement === expr) return;
    limpia();
  });

  var botones = document.querySelectorAll(".calc-tecla");
  Array.prototype.forEach.call(botones, function (boton) {
    boton.addEventListener("click", function () {
      var insertar = boton.getAttribute("data-insertar");
      if (insertar !== null) {
        inserta(insertar);
        return;
      }
      var accion = boton.getAttribute("data-accion");
      if (accion === "igualar") iguala();
      else if (accion === "borrar") borra();
      else if (accion === "limpiar") limpia();
    });
  });

  if (btnHistorial) {
    btnHistorial.addEventListener("click", function () {
      operaciones = [];
      pintaHistorial();
      expr.focus();
    });
  }

  if (btnAngulos) {
    btnAngulos.addEventListener("click", function () {
      grados = !grados;
      btnAngulos.textContent = grados ? "Grados" : "Radianes";
      btnAngulos.setAttribute(
        "aria-label",
        "Unidades angulares: " + (grados ? "grados" : "radianes") + ". Pulsa para cambiar."
      );
      pinta();
    });
  }

  /* Los ejemplos del lateral de la pagina. Se cargan con el mismo inserta()
     que las teclas, para que un signo suelto quede pegado al numero anterior si
     el usuario ya habia escrito algo. */
  var ejemplos = document.querySelectorAll(".calc-ejemplo");
  Array.prototype.forEach.call(ejemplos, function (boton) {
    boton.addEventListener("click", function () {
      inserta(boton.getAttribute("data-ejemplo"));
    });
  });

  pinta();
  pintaHistorial();
})();
