/* ============================================================================
   ui.js — efectos de interfaz compartidos por TODAS las paginas del sitio.

   Contiene la animacion de entrada (.reveal -> .reveal-visible), el year
   automatico de #anioAuto, el boton fijo para volver arriba y el selector de
   tema claro/oscuro. Vive aparte de principal.js a proposito: las 303 paginas
   de cursos/ se generan con una plantilla que no carga principal.js
   (principal.js solo aporta el filtro de buscador y el progreso del index), y
   sin este archivo sus tarjetas .reveal se quedaban con opacity: 0 para
   siempre. Anyadirlo aqui lo resuelve para todos a la vez, y el boton de subir
   y el de tema aparecen en las 312 paginas del sitio sin repetir el mismo
   HTML en cada plantilla.
   ============================================================================ */

/* La misma clave la lee un <script> diminuto en el <head> de cada pagina (ver
   SCRIPT_TEMA en generar-secciones.cjs). Si las dos disagree, la pagina pinta
   con un tema y luego salta al otro: el parpadeo justo antes de leer nada. */
var CLAVE_TEMA = "asl-tema";

/* Que tema usar. Prioridad: lo que eligio el usuario; si nunca eligio, lo que
   pida el sistema operativo. Sin esto, alguien con el movil en claro tendria
   que pulsar el boton en cada pagina. */
function temaPreferido() {
  var guardado = null;
  try {
    guardado = localStorage.getItem(CLAVE_TEMA);
  } catch (e) {
    // localStorage bloqueado (modo privado sin permisos, iframe de otro
    // origen): el sitio sigue funcionando, solo sin preferencia guardada.
  }
  if (guardado === "claro" || guardado === "oscuro") return guardado;
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "claro";
  }
  return "oscuro";
}

function temaActual() {
  return document.documentElement.getAttribute("data-tema") || temaPreferido();
}

/* Pinta el tema. El atributo va en <html>, no en <body>: el CSS lo selecciona
   con :root[data-tema="claro"], y asi las variables estan disponibles antes de
   que se aplique estilo a nada. */
function aplicarTema(tema) {
  document.documentElement.setAttribute("data-tema", tema);
}

/* Selector de tema. El boton se crea desde aqui y no desde las plantillas por
   el mismo motivo que el boton de subir: ui.js es el unico archivo que cargan
   todas las paginas, asi que el boton no hay que repetirlo en seis sitios.

   Va antes del .navbar-toggler, no dentro del menu desplegable: asi se ve
   tambien en movil sin tener que abrir el menu primero. */
function inicializarTema() {
  var nav = document.querySelector(".nav-guia .container");
  if (!nav || document.getElementById("btnTema")) return;

  var boton = document.createElement("button");
  boton.type = "button";
  boton.id = "btnTema";
  boton.className = "btn-tema";
  boton.innerHTML = '<i class="bi" aria-hidden="true"></i>';

  // El icono dice a donde lleva el boton, no donde esta: en modo oscuro se ve
  // el sol (pasar a claro) y en claro la luna (pasar a oscuro). El texto es
  // solo para lectores de pantalla, por eso aria-label y no un <span> visible.
  function pintarBoton() {
    var oscuro = temaActual() !== "claro";
    boton.querySelector("i").className = "bi " + (oscuro ? "bi-sun-fill" : "bi-moon-stars-fill");
    boton.setAttribute("aria-label", oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    boton.title = oscuro ? "Modo claro" : "Modo oscuro";
    boton.setAttribute("aria-pressed", oscuro ? "false" : "true");
  }

  boton.addEventListener("click", function () {
    var nuevo = temaActual() === "claro" ? "oscuro" : "claro";
    aplicarTema(nuevo);
    try {
      localStorage.setItem(CLAVE_TEMA, nuevo);
    } catch (e) {
      // Sin persistencia el tema igual cambia en esta pagina; al recargar
      // vuelve al del sistema. Preferible a dejar el boton sin funcionar.
    }
    pintarBoton();
  });

  var toggler = nav.querySelector(".navbar-toggler");
  if (toggler) nav.insertBefore(boton, toggler);
  else nav.appendChild(boton);

  pintarBoton();

  // Si el usuario nunca ha elegido, el tema sigue al sistema: cambiar el modo
  // del sistema mientras esta abierta la pagina debe notarse. Con eleccion
  // propia ya no se mueve, porque ahi manda lo que el usuario pulso.
  if (window.matchMedia) {
    var sistema = window.matchMedia("(prefers-color-scheme: light)");
    var alCambiar = function () {
      var guardado = null;
      try {
        guardado = localStorage.getItem(CLAVE_TEMA);
      } catch (e) { /* sin acceso: se trata como sin eleccion */ }
      if (guardado === "claro" || guardado === "oscuro") return;
      aplicarTema(sistema.matches ? "claro" : "oscuro");
      pintarBoton();
    };
    if (sistema.addEventListener) sistema.addEventListener("change", alCambiar);
    else if (sistema.addListener) sistema.addListener(alCambiar);
  }
}

/* Marca como visibles los .reveal cuando entran en pantalla. */
function inicializarAnimaciones() {
  var elementos = document.querySelectorAll(".reveal");

  // sin IntersectionObserver (navegador antiguo o JS parcial) mostramos todo
  if (!("IntersectionObserver" in window)) {
    elementos.forEach(function (el) {
      el.classList.add("reveal-visible");
    });
    return;
  }

  var observador = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("reveal-visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.05 }
  );

  elementos.forEach(function (el) {
    observador.observe(el);
  });
}

/* Rellena <span id="anioAuto"> con el anio actual. */
function anioAutomatico() {
  var anio = document.getElementById("anioAuto");
  if (anio) anio.textContent = new Date().getFullYear();
}

/* Boton fijo para volver arriba. Se crea desde aqui, y no desde las
   plantillas, porque ui.js es el unico archivo que cargan TODAS las paginas
   del sitio: asi el boton aparece en el index, en las secciones y en las 303
   paginas de cursos sin repetir el mismo HTML en seis sitios. */
function inicializarBotonSubir() {
  if (!document.body || document.getElementById("btnSubir")) return;

  var boton = document.createElement("button");
  boton.type = "button";
  boton.id = "btnSubir";
  boton.className = "btn-subir";
  boton.setAttribute("aria-label", "Volver al inicio de la pagina");
  boton.title = "Volver arriba";
  boton.innerHTML = '<i class="bi bi-arrow-up" aria-hidden="true"></i>';
  document.body.appendChild(boton);

  // Un rAF por evento de scroll: sin esto se repinta el boton en cada pixel.
  var pedir = window.requestAnimationFrame || function (fn) { return setTimeout(fn, 16); };
  var pendiente = false;

  function pintar() {
    pendiente = false;
    // A 400px todavia no hace falta el boton; mas abajo, molesta al leer.
    var abajo = (window.pageYOffset || 0) > 400;
    boton.classList.toggle("visivel", abajo && (!observador || !piesEnVista.size));
  }

  window.addEventListener("scroll", function () {
    if (pendiente) return;
    pendiente = true;
    pedir(pintar);
  }, { passive: true });

  // Cuando ya se ve el final de la pagina el boton sobra, y ademas tapa el
  // "Siguiente" del pie de la leccion en pantallas angostas: se esconde.
  var observador = null;
  var piesEnVista = new Set();
  if ("IntersectionObserver" in window) {
    observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) piesEnVista.add(entrada.target);
          else piesEnVista.delete(entrada.target);
        });
        pintar();
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    var pies = document.querySelectorAll(".articulo-pie, .footer-guia");
    for (var i = 0; i < pies.length; i++) observador.observe(pies[i]);
  }

  pintar();

  boton.addEventListener("click", function () {
    var suave = window.matchMedia("(prefers-reduced-motion: reduce)");
    window.scrollTo({ top: 0, behavior: suave.matches ? "auto" : "smooth" });
    // El foco se quedaria en un boton que ahora esta al final de la pagina:
    // se devuelve a la cabecera para seguir navigating con el teclado.
    var marca = document.querySelector(".navbar-brand");
    if (marca) marca.focus({ preventScroll: true });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  inicializarAnimaciones();
  anioAutomatico();
  inicializarBotonSubir();
  inicializarTema();
});
