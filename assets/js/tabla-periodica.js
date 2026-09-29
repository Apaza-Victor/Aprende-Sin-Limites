/* ============================================================================
   tabla-periodica.js
   Pinta la tabla periodica de secciones/tablas.html a partir de los datos de
   elementos.js, y agrega busqueda por nombre o simbolo.

   Depende de: elementos.js (ELEMENTOS, CATEGORIAS_ELEMENTO) y de bootstrap.
   ========================================================================== */
(function () {
  "use strict";

  function elementos() {
    // ELEMENTOS viene como un texto plano: registros separados por ";" y
    // campos separados por ";" tambien. Se agrupan de 7 en 7.
    var campos = String(ELEMENTOS).split(";");
    var lista = [];
    for (var i = 0; i < campos.length; i += 7) {
      var p = campos.slice(i, i + 7);
      if (p.length !== 7) continue;
      lista.push({
        z: +p[0],
        simbolo: p[1],
        nombre: p[2],
        masa: p[3],
        categoria: p[4],
        grupo: +p[5],
        periodo: +p[6],
      });
    }
    return lista;
  }

  // Las familias se colocan aparte (dos filas bajo el bloque principal), como
  // en cualquier tabla periodica impresa. La clave del indice es
  // "periodo-grupo", porque el número atómico no coincide con la casilla.
  function indexarBloque(lista) {
    var mapa = {};
    lista.forEach(function (e) {
      if (e.categoria === "lantano" || e.categoria === "actino") return;
      mapa[e.periodo + "-" + e.grupo] = e;
    });
    return mapa;
  }

  function celda(e) {
    var cat = CATEGORIAS_ELEMENTO[e.categoria] || { clase: "", nombre: "" };
    return (
      '<button type="button" class="elem ' +
      cat.clase +
      '" data-z="' +
      e.z +
      '" title="' +
      e.nombre +
      " · Z=" +
      e.z +
      ' · "' +
      cat.nombre +
      '"><span class="elem-z">' +
      e.z +
      '</span><span class="elem-sim">' +
      e.simbolo +
      '</span><span class="elem-masa">' +
      e.masa +
      "</span></button>"
    );
  }

  function pintar() {
    var lista = elementos();
    var mapa = indexarBloque(lista);
    var contenedor = document.getElementById("tablaPeriodica");
    if (!contenedor) return;

    // Bloque principal: 7 periodos x 18 grupos.
    var html = "";
    for (var fila = 1; fila <= 7; fila++) {
      for (var col = 1; col <= 18; col++) {
        var encontrado = mapa[fila + "-" + col];
        html += encontrado
          ? "<div class='elem-slot'>" + celda(encontrado) + "</div>"
          : "<div class='elem-slot vacio'></div>";
      }
    }
    contenedor.innerHTML = html;

    // Familias: lantanidos y actínidos debajo, con 15 casillas cada una.
    var extras = document.getElementById("tablaFamilias");
    if (extras) {
      var lant = lista.filter(function (e) {
        return e.categoria === "lantano";
      });
      var act = lista.filter(function (e) {
        return e.categoria === "actino";
      });
      var f = "";
      f += '<div class="familia"><div class="familia-tit">Lantánidos</div><div class="familia-fila">';
      lant.forEach(function (e) {
        f += "<div class='elem-slot'>" + celda(e) + "</div>";
      });
      f += '</div><div class="familia-hueco"></div><div class="familia">';
      f += '<div class="familia-tit">Actínidos</div><div class="familia-fila">';
      act.forEach(function (e) {
        f += "<div class='elem-slot'>" + celda(e) + "</div>";
      });
      f += "</div></div></div>";
      extras.innerHTML = f;
    }

    // Leyenda
    var leyenda = document.getElementById("leyendaPeriodica");
    if (leyenda) {
      var l = "";
      for (var cat in CATEGORIAS_ELEMENTO) {
        l +=
          '<span class="leyenda-item"><i class="' +
          CATEGORIAS_ELEMENTO[cat].clase +
          '"></i>' +
          CATEGORIAS_ELEMENTO[cat].nombre +
          "</span>";
      }
      leyenda.innerHTML = l;
    }

    eventos(lista);
  }

  // ---- Detalle del elemento + búsqueda -------------------------------------
  function eventos(lista) {
    var panel = document.getElementById("detalleElemento");
    var buscador = document.getElementById("buscarElemento");

    function detalle(e) {
      if (!panel) return;
      var cat = CATEGORIAS_ELEMENTO[e.categoria] || { nombre: "", clase: "" };
      var familia = e.categoria === "lantano" ? "Lantánido" : e.categoria === "actino" ? "Actínido" : "";
      panel.innerHTML =
        '<div class="det-cab ' +
        cat.clase +
        '"><span class="det-sim">' +
        e.simbolo +
        "</span></div>" +
        '<div class="det-cuerpo">' +
        "<h5>" +
        e.nombre +
        "</h5>" +
        '<dl class="det-datos">' +
        "<dt>Número atómico</dt><dd>" +
        e.z +
        "</dd>" +
        "<dt>Masa atómica</dt><dd>" +
        e.masa +
        " u</dd>" +
        "<dt>Grupo</dt><dd>" +
        (e.grupo ? e.grupo : "—") +
        "</dd>" +
        "<dt>Período</dt><dd>" +
        e.periodo +
        "</dd>" +
        "<dt>Familia</dt><dd>" +
        (familia || cat.nombre) +
        "</dd>" +
        "</dl></div>";
    }

    function marcar(elegidos) {
      document.querySelectorAll("#tablaPeriodica .elem, #tablaFamilias .elem").forEach(function (b) {
        b.classList.toggle("resaltado", elegidos.indexOf(+b.dataset.z) >= 0);
      });
    }

    document.addEventListener("click", function (ev) {
      var boton = ev.target.closest(".elem");
      if (!boton) return;
      var z = +boton.dataset.z;
      var e = lista.filter(function (x) {
        return x.z === z;
      })[0];
      detalle(e);
      marcar([z]);
    });

    if (buscador) {
      buscador.addEventListener("input", function () {
        var q = buscador.value.trim().toLowerCase();
        var encontrados = [];
        if (q.length) {
          encontrados = lista
            .filter(function (e) {
              return (
                e.nombre.toLowerCase().indexOf(q) >= 0 ||
                e.simbolo.toLowerCase() === q ||
                String(e.z) === q
              );
            })
            .map(function (e) {
              return e.z;
            });
        }
        marcar(encontrados);
        var aviso = document.getElementById("avisoBusqueda");
        if (aviso) {
          aviso.textContent = q
            ? encontrados.length + " elemento(s) encontrado(s)"
            : "Escribe un nombre o un símbolo, por ejemplo: oro, Fe, o 26.";
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", pintar);
  } else {
    pintar();
  }
})();
