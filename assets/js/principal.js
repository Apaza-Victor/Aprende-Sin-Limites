document.addEventListener("DOMContentLoaded", () => {
  /* ================================================================
     Inicio (index.html) · Filtro de cursos
  ================================================================ */
  const buscador = document.getElementById("buscadorCursos");
  const tarjetas = document.querySelectorAll(".curso-card");
  if (buscador && tarjetas.length) {
    buscador.addEventListener("input", () => {
      const q = buscador.value.trim().toLowerCase();
      tarjetas.forEach((card) => {
        const texto = card.dataset.busqueda || card.textContent.toLowerCase();
        card.closest(".col").style.display = !q || texto.includes(q) ? "" : "none";
      });
    });
  }

  inicializarProgreso();
  inicializarAnimaciones();
  anioAutomatico();
});


/* ================================================================
   Progreso — versión estática (páginas sin animador de contenidos)
=============================================================== */
function inicializarProgreso() {
  const claves = () =>
    Array.from(document.querySelectorAll(".checkbox-leccion")).map(
      (cb) => cb.dataset.clave
    );
  const contador = document.getElementById("contadorLecciones");
  const actualizar = () => {
    const hechas = document.querySelectorAll(".checkbox-leccion:checked").length;
    const total = document.querySelectorAll(".checkbox-leccion").length;
    if (contador) contador.textContent = `${hechas} / ${total}`;
    const barra = document.getElementById("barraProgreso");
    if (barra && total > 0) {
      barra.style.width = `${Math.round((hechas / total) * 100)}%`;
      barra.setAttribute("aria-valuenow", Math.round((hechas / total) * 100));
    }
  };
  const almacen = localStorage.getItem("asl-progreso");
  if (almacen) {
    try {
      const estados = JSON.parse(almacen);
      document.querySelectorAll(".checkbox-leccion").forEach((cb) => {
        cb.checked = !!estados[cb.dataset.clave];
      });
    } catch (e) {
      localStorage.removeItem("asl-progreso");
    }
  }
  document.querySelectorAll(".checkbox-leccion").forEach((cb) => {
    cb.addEventListener("change", () => {
      const estados = {};
      document
        .querySelectorAll(".checkbox-leccion")
        .forEach((c) => (estados[c.dataset.clave] = c.checked));
      localStorage.setItem("asl-progreso", JSON.stringify(estados));
      actualizar();
    });
  });
  actualizar();
}

/* ================================================================
   La animacion .reveal y el anio automatico viven ahora en ui.js,
   que se carga antes que este archivo en todas las paginas. Aqui se
   mantienen las llamadas para no cambiar el flujo de arranque.
   ================================================================ */
