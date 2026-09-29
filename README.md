# Aprende Sin Límites

Sitio educativo estático, en español, con material de refuerzo para cursos de
preparación: matemáticas, física, química, biología, historia, comunicación,
razonamiento verbal y matemático, alfabetización digital, ciencias
naturales y admisión universitaria.

No hay build, ni framework, ni paso de compilación: son HTML, CSS y JavaScript
vanilla que se abren directamente en el navegador. Las únicas dependencias son
tres CDNs (Bootstrap, Bootstrap Icons y la tipografía Poppins).

- **11 cursos** · **50 módulos** · **242 lecciones**
- **310 páginas** HTML generadas
- **66 figuras** SVG dibujadas a mano
- Tema claro y oscuro que recuerda tu elección
- Calculadora científica con historial, sin conexión

## Ver el sitio

Como no hay compilación, se abre el archivo directamente:

```
index.html
```

O, si prefieres servirlo por HTTP (recomendado, para que las rutas relativas
funcionen igual que en producción):

```bash
python -m http.server 8000
# luego: http://localhost:8000
```

## Estructura

```
index.html              Portada
assets/
  css/estilos.css       Hoja de estilos: tokens de color, tema, componentes
  js/                   Comportamiento del sitio
  img/figuras/          66 figuras SVG
contenido/              Contenido profundo, un archivo por curso (lecciones, teoría, ejercicios)
cursos/                 HTML generado: 11 cursos, sus módulos y sus lecciones
plantillas/             Las tres plantillas de las que se generan los HTML
secciones/              HTML generado: cursos, método, tablas, calculadora, recursos, FAQ
herramientas/           Generadores y verificadores (Node.js, sin dependencias)
```

### La idea

El contenido se escribe una sola vez, en `contenido/`, y de ahí sale todo:

```
contenido/matematica.js
        │
        │  cargar-datos.cjs          fusiona estructura + contenido
        ▼
assets/js/cursos-data.js
        │
        │  generar-estructura.cjs    aplica las plantillas
        ▼
cursos/matematica/modulo-1-.../01-....html
```

Si quieres **cambiar una lección**, edita `contenido/<curso>.js` y vuelve a
generar. Si solo quieres **retocar el texto exacto de una página**, puedes
editar el HTML generado, pero el cambio se perderá la próxima vez que se
genere.

## Herramientas

Todo vive en `herramientas/` y se ejecuta con Node.js (probado con v24). No
hacen falta dependencias: no hay `package.json` ni `node_modules`.

### Generar el sitio

```bash
node herramientas/cargar-datos.cjs           # fusiona contenido/ en cursos-data.js
node herramientas/generar-estructura.cjs     # cursos, módulos y lecciones
node herramientas/generar-secciones.cjs      # secciones que salen del index
node herramientas/generar-tablas.cjs         # tabla de fórmulas
node herramientas/generar-calculadora.cjs    # página de la calculadora
```

Orden recomendado: los cinco, en ese orden. Son idempotentes: ejecutarlos dos
veces seguidas produce exactamente los mismos archivos.

### Verificar que nada se rompió

```bash
node herramientas/verificar-sintaxis.cjs     # todos los scripts compilan
node herramientas/verificar-enlaces.cjs      # ningún href relativo roto
node herramientas/verificar-marcas.cjs       # las fórmulas LaTeX están bien formadas
node herramientas/verificar-figuras.cjs      # las figuras existen y son válidas
node herramientas/verificar-contenido.cjs    # sin texto corrupto ni lecciones vacías
```

Los cinco tienen que salir en verde antes de publicar. Comprueban, entre otras
cosas, que las 6 965 rutas internas apunten a archivos que existen y que las
398 fórmulas del sitio solo usen comandos que el generador sabe dibujar.

`verificar-marcas.cjs` también admite un archivo suelto, para depurar una
lección concreta sin revalidar todo:

```bash
node herramientas/verificar-marcas.cjs contenido/matematica.js
```

## Cómo está hecho

**Estilos.** Una sola hoja de CSS con variables para el color y el texto, y
reglas que se recolorean solas con `:root[data-tema="claro"]`. No hay un tema
duplicado en dos sitios.

**Tema.** Un `<script>` pequeño en el `<head>` lee la elección guardada en
`localStorage` y la aplica antes de que se pinte el fondo, así que la página no
parpadea nunca. Si no hay elección previa, sigue a la preferencia del sistema.
`assets/js/ui.js` es quien dibuja el botón de cambio.

**Calculadora.** `assets/js/calculadora.js` trae su propio tokenizador e
intérprete de expresiones. No usa `eval()` ni `new Function()`. Entiende
`2^10`, `5!`, `200 + 10%`, `sin(30)`, `2pi`, `(1+2)(3+4)`, logaritmos y
factoriales, avisa de los errores en castellano y funciona en grados o radianes.

**Contenido.** Cada lección tiene objetivo, teoría, ejemplo y consejo, y hay
comprobaciones automáticas de que no se queden vacías ni demasiado cortas.

**Iconos y tipografía.** Bootstrap Icons y Poppins, por CDN. El resto es todo
propio.

## Licencia

Material educativo de uso libre. Si reúses el contenido o el código, cítalo
como tal.
