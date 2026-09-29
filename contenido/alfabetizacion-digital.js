CONTENIDO["alfabetizacion-digital"] = {
  modulos: [
    // ---------------------------------------------------------------------
    // Módulo 1 · La computadora y tus archivos
    // ---------------------------------------------------------------------
    {
      titulo: "Módulo 1 · La computadora y tus archivos",
      lecciones: [
        {
          titulo: "Hardware, software y el sistema de archivos",
          objetivo: "Distinguir hardware de software, identificar los componentes de una computadora y explicar cómo se organizan los archivos.",
          teoria:
            "**Hardware** es lo que se toca: pantalla, teclado, disco, memoria. **Software** es lo que se ejecuta: el sistema operativo y los programas.\n" +
            "\n" +
            "## Las dos memorias\n" +
            "\n" +
            "| Memoria | Qué guarda | Qué pasa al apagar |\n" +
            "|---|---|---|\n" +
            "| RAM | lo que estás usando ahora | se borra |\n" +
            "| Disco duro o SSD | programas y archivos | se conserva |\n" +
            "\n" +
            "Cuando abres un archivo de 40 páginas, una parte queda en el disco y otra se carga en la RAM para poder trabajar sobre ella. Al cerrar, la RAM se libera.\n" +
            "\n" +
            "## El sistema operativo\n" +
            "\n" +
            "Es el programa que administra el equipo: decide qué programa usa la memoria, traduce tus acciones en instrucciones y organiza los archivos.\n" +
            "\n" +
            "| Sistema | Uso habitual |\n" +
            "|---|---|\n" +
            "| Windows | computadoras personales y de la escuela |\n" +
            "| macOS | equipos Apple |\n" +
            "| Linux | servidores, programación e investigación |\n" +
            "\n" +
            "## Carpetas y rutas\n" +
            "\n" +
            "La información se organiza en **carpetas** dentro de otras carpetas, y cada archivo tiene una **extensión** que indica su tipo.\n" +
            "\n" +
            "| Extensión | Tipo de archivo |\n" +
            "|---|---|\n" +
            "| .docx | documento de texto |\n" +
            "| .xlsx | hoja de cálculo |\n" +
            "| .pptx | presentación |\n" +
            "| .pdf | documento fijo, no se edita |\n" +
            "| .jpg, .png | imágenes |\n" +
            "| .mp3, .mp4 | sonido y video |\n" +
            "\n" +
            "Una **ruta** es la dirección completa de un archivo, por ejemplo `Documentos/Curso/Tarea1.docx`.\n" +
            "\n" +
            "glosario:Hardware :: Parte física del equipo.\n" +
            "glosario:Software :: Programas que se ejecutan en el equipo.\n" +
            "glosario:Sistema operativo :: Programa que administra la memoria, los archivos y los programas.\n" +
            "glosario:RAM :: Memoria de acceso rápido, volátil y temporal.\n" +
            "glosario:Archivo :: Documento con datos que el equipo puede guardar y recuperar.\n" +
            "glosario:Ruta :: Dirección que indica dónde está un archivo dentro de las carpetas.",
          ejemplo:
            "El archivo `EnsayoFinal.docx` pesa 3 MB y no se abre. ¿Por qué puede ser?\n" +
            "\n" +
            "## Causa 1: extensión equivocada\n" +
            "\n" +
            "Si el archivo se llama `.docx` pero en realidad es una imagen renombrada, el programa no sabrá interpretarlo. Se comprueba en las propiedades del archivo.\n" +
            "\n" +
            "## Causa 2: está corrupto\n" +
            "\n" +
            "Una descarga interrumpida deja el archivo incompleto. Se ve porque pesa mucho menos de lo que debería.\n" +
            "\n" +
            "## Causa 3: no tiene permiso de lectura\n" +
            "\n" +
            "Un archivo copiado de otro equipo puede quedar bloqueado.\n" +
            "\n" +
            "## Causa 4: el programa no está instalado\n" +
            "\n" +
            "Un `.xlsx` necesita un programa compatible; sin él solo se ve como archivo desconocido.\n" +
            "\n" +
            "> La primera pregunta ante un archivo que no abre no es «¿está dañado?», sino «¿qué tipo de archivo dice ser y con qué lo estoy abriendo?». Casi siempre la respuesta está ahí.\n" +
            "\n" +
            "!! Revisa un archivo\n" +
            "- ¿Qué extensión usarías para un video curto?\n" +
            "- ¿Qué pasa con un archivo que solo copiaste de un USB y ya no se abre?\n" +
            ">> Para video, `.mp4`. El archivo copiado puede venir con atributos de solo lectura o con el bloqueo de archivos de Origin: se resuelve desbloqueando las propiedades del archivo y marcando «desbloquear».",
          consejo: "Antes de guardar cualquier trabajo, crea una carpeta con el nombre del curso y la fecha. Empezar bien evita el la mayor parte de los archivos perdidos.",
        },
        {
          titulo: "Nombres de archivo, carpetas y respaldos",
          objetivo: "Aplicar una convención de nombres ordenada y conocer las tres reglas del respaldo 3-2-1.",
          teoria:
            "Un archivo llamado `documento final final2.docx` no sirve de nada dentro de tres meses. La clave está en un **nombre que se entienda sin abrirlo**.\n" +
            "\n" +
            "## Un buen nombre tiene\n" +
            "\n" +
            "1. **Autor o área**: `matematicas`.\n" +
            "2. **Descripción corta**: `algebra-cuadratica`.\n" +
            "3. **Fecha**: `2026-03-14`.\n" +
            "4. **Versión**: `v1`, `v2`.\n" +
            "\n" +
            "Un nombre completo podría ser:\n" +
            "\n" +
            "```\n" +
            "matematica_algebra-cuadratica_2026-03-14_v2.docx\n" +
            "```\n" +
            "\n" +
            "## La regla 3-2-1 de respaldo\n" +
            "\n" +
            "| Número | Significado |\n" +
            "|---|---|\n" +
            "| 3 | tres copias del archivo |\n" +
            "| 2 | en dos medios distintos |\n" +
            "| 1 | una copia fuera del equipo |\n" +
            "\n" +
            "Un disco duro puede fallar. Si tu único respaldo está en el mismo equipo, no es un respaldo: es una segunda copia con la misma probabilidad de perderse.\n" +
            "\n" +
            "glosario:Carpeta :: Contenedor que organiza archivos dentro de otras carpetas.\n" +
            "glosario:Respaldo :: Copia de la información guardada en otro lugar.\n" +
            "glosario:Regla 3-2-1 :: Tres copias, en dos medios, una fuera del equipo.\n" +
            "glosario:Nube :: Almacenamiento en línea que permite recuperar archivos desde cualquier equipo.\n" +
            "glosario:Sincronización :: Copia automática que mantiene el archivo igual en dos lugares.",
          ejemplo:
            "Tu tesis se llama `tesis.docx` y está en el escritorio. Explica qué falla.\n" +
            "\n" +
            "## Problemas\n" +
            "\n" +
            "- No sabes qué versión es la buena.\n" +
            "- No hay fecha, así que no sabes cuándo se hizo.\n" +
            "- Si el escritorio se borra, se perdió.\n" +
            "- No hay copia en ningún otro lugar.\n" +
            "\n" +
            "## Cómo debería quedar\n" +
            "\n" +
            "```\n" +
            "tesis_perú-2026_capitulo-3_2026-05-02_v4.docx\n" +
            "```\n" +
            "\n" +
            "Dentro de una carpeta con este nombre:\n" +
            "\n" +
            "```\n" +
            "perú-2026/tesis/capitulos/\n" +
            "```\n" +
            "\n" +
            "Y con el respaldo:\n" +
            "\n" +
            "- Copia 1: el archivo original en la computadora.\n" +
            "- Copia 2: la carpeta sincronizada en la nube del curso.\n" +
            "- Copia 3: una memoria USB que conectas una vez al mes.\n" +
            "\n" +
            "!! Organiza un respaldo\n" +
            "- ¿Dónde pondrías los trabajos de un semestre completo?\n" +
            "- ¿Cada cuánto revisarías que la copia externa funciona?\n" +
            ">> En una carpeta por año y por materia, con nombres consistentes. Revisaría la copia externa cada mes, porque un respaldo que nunca se abre puede estar corrupto sin que nadie se entere.",
          consejo: "Ponle fecha a todo lo que entregues, no solo versión. La fecha ordena sola los archivos y evita tener que adivinar cuál era el último.",
        },
        {
          titulo: "Contraseñas, seguridad y privacidad",
          objetivo: "Crear contraseñas seguras, reconocer intentos de engaño y aplicar medidas básicas de protección del equipo.",
          teoria:
            "La mayoría de los robos de cuentas no usan tecnología complicada: usan **ingeniería social**, es decir, convencerte de que entregues lo que pides.\n" +
            "\n" +
            "## Anatomía de una contraseña segura\n" +
            "\n" +
            "| Regla | Por qué |\n" +
            "|---|---|\n" +
            "| Mínimo 12 caracteres | las cortas se prueban en segundos |\n" +
            "| Mayúsculas, minúsculas, números y símbolos | multiplica las combinaciones |\n" +
            "| Sin datos personales | tu nombre se adivina |\n" +
            "| Una distinta para cada sitio | una filtración no abre todas las cuentas |\n" +
            "| Un gestor de contraseñas | solo recuerdas una |\n" +
            "\n" +
            "Una frase larga es más segura que una palabra corta con símbolos:\n" +
            "\n" +
            "- `perro` con símbolos: muchas menos combinaciones, fácil de romper.\n" +
            "- `el_perro_verde_dormia_en_el_sofá`: mucho más larga y más difícil.\n" +
            "\n" +
            "## Señales de un engaño\n" +
            "\n" +
            "- Urgencia: «tu cuenta se bloqueará hoy».\n" +
            "- Dirección rara: el dominio no es el de la empresa.\n" +
            "- Petición de datos que nunca se piden: clave, pin, código de un mensaje.\n" +
            "- Enlace que no coincide con lo que dice el texto.\n" +
            "\n" +
            "glosario:Contraseña :: Secreto que abre el acceso a una cuenta.\n" +
            "glosario:Ingeniería social :: Manipulación para que una persona entregue información.\n" +
            "glosario:Phishing :: Intento de obtener datos mediante un mensaje falso.\n" +
            "glosario:Verificación en dos pasos :: Código adicional además de la contraseña.\n" +
            "glosario:Antivirus :: Programa que detecta y elimina programas dañinos.",
          ejemplo:
            "Recibes este mensaje: «Estimado usuario: su cuenta bancaria será suspendida en 24 horas. Ingrese a www.banco-seguro-verificacion.com para actualizar sus datos». ¿Qué haces?\n" +
            "\n" +
            "## Las tres señales de alarma\n" +
            "\n" +
            "1. **Urgencia**: un banco nunca amenaza con suspender cuentas en 24 horas.\n" +
            "2. **Dirección sospechosa**: un banco real no pondría «verificacion» en el dominio.\n" +
            "3. **Petición de datos**: ninguna página legítima pide clave por mensaje.\n" +
            "\n" +
            "## Qué hacer\n" +
            "\n" +
            "- No hacer clic en el enlace.\n" +
            "- Entrar a la cuenta escribiendo tú mismo la dirección en el navegador.\n" +
            "- Avisar al banco por el canal oficial.\n" +
            "- Cambiar la contraseña si ya se introducción.\n" +
            "\n" +
            "> La regla de oro: si un mensaje te pide prisa y datos, es falso. Un sitio serio puede esperar diez minutos más que tú.\n" +
            "\n" +
            "!! Detecta el engaño\n" +
            "- «Ganaste un premio. Ingresa tu número de tarjeta para el envío». ¿Es real?\n" +
            "- Un compañero pide tu contraseña para «completar un trabajo». ¿Se la das?\n" +
            ">> Lo del premio es phishing clásico: nadie regala nada. La contraseña no se comparte nunca con nadie, ni con un compañero de confianza: las cuentas se pueden usar cosas a tu nombre.",
          consejo: "Activa la verificación en dos pasos en el correo primero. Si alguien entra a tu correo, puede restablecer todas tus otras cuentas; el segundo paso evita la mayoría de esos ataques.",
        },
      ],
    },
    // ---------------------------------------------------------------------
    // Módulo 2 · Documentos y hojas de cálculo
    // ---------------------------------------------------------------------
    {
      titulo: "Módulo 2 · Documentos y hojas de cálculo",
      lecciones: [
        {
          titulo: "Procesador de textos: estructura y formato",
          objetivo: "Aplicar estilos, sangrías, listas y tablas para producir documentos claros y homogéneos.",
          teoria:
            "Un buen documento no depende de escribir más, sino de **estructurar** lo escrito. Las herramientas existen para eso.\n" +
            "\n" +
            "## Los estilos son la base\n" +
            "\n" +
            "| Estilo | Para qué sirve |\n" +
            "|---|---|\n" +
            "| Título | nombre del documento |\n" +
            "| Subtítulo 1 | secciones grandes |\n" +
            "| Subtítulo 2 | apartados dentro de una sección |\n" +
            "| Texto normal | párrafos |\n" +
            "| Cita | frases de otros autores |\n" +
            "\n" +
            "Si cambias el estilo de un título, cambian **todos** los títulos de ese estilo. Por eso se usan estilos y no formato manual.\n" +
            "\n" +
            "## Párrafos con forma profesional\n" +
            "\n" +
            "- **Alineación**: justificada para bloques largos, izquierda para texto con listas o enlaces.\n" +
            "- **Interlineado**: 1.5 o doble en trabajos que se leen en pantalla.\n" +
            "- **Sangría**: primera línea o de bloque, nunca las dos.\n" +
            "- **Espacio** entre párrafos, en vez de varios retornos.\n" +
            "\n" +
            "## Listas y tablas\n" +
            "\n" +
            "Una lista con viñetas enumera cosas sin orden; una lista numerada marca un orden o una secuencia. La tabla es lo mejor para comparar.\n" +
            "\n" +
            "```\n" +
            "Ctrl+B        negrita\n" +
            "Ctrl+I        cursiva\n" +
            "Ctrl+U        subrayado\n" +
            "Ctrl+S        guardar\n" +
            "```\n" +
            "\n" +
            "!! Antes de entregar, revisa\n" +
            "- ¿Todos los títulos usan estilos y no texto normal?\n" +
            "- ¿Las tablas tienen encabezado y se leen en fila?\n" +
            "- ¿Guardaste en el formato que pidió el profesor?\n" +
            ">> Cambia los títulos con formato manual por estilos, revisa que cada tabla tenga fila de encabezado y confirma si la entrega es en PDF o en el formato editable.",
          ejemplo:
            "Un trabajo de 12 páginas usa Arial 12 en todos los títulos, algunos en cursiva y otros en negrita, y cada párrafo tiene seis espacios al final.\n" +
            "\n" +
            "## Problemas\n" +
            "\n" +
            "- Los títulos no se ven como títulos: el lector no distingue la estructura.\n" +
            "- Los espacios finales generan páginas en blanco al imprimir.\n" +
            "- Si mañana hay que poner un título de más, hay que repetir el formato a mano.\n" +
            "\n" +
            "## Cómo se corrige\n" +
            "\n" +
            "1. Se aplica Título al nombre del trabajo.\n" +
            "2. Se aplica Subtítulo 1 a las cuatro secciones y Subtítulo 2 a los apartados.\n" +
            "3. Se deja Texto normal para los párrafos, con interlineado 1.5.\n" +
            "4. Se quitan los espacios finales con buscar y reemplazar: cinco espacios, reemplazados por nada.\n" +
            "5. Se guarda como PDF para la entrega.\n" +
            "\n" +
            "> El resultado no es un documento más lindo, es un documento que se puede corregir en segundos.",
          consejo: "Usa estilos aunque parezca más lento: corregir cinco títulos de un trabajo largo se hace de un clic, y el documento queda coherente aunque lo edite otra persona.",
        },
        {
          titulo: "Buscar, reemplazar y corregir en lote",
          objetivo: "Usar buscar y reemplazar con criterio,Dominar los comodines y comprobar el resultado de una sustitución masiva.",
          teoria:
            "Corregir a mano un error que aparece 40 veces es una pérdida de tiempo. **Buscar y reemplazar** lo resuelve de una vez, pero hay que usarlo con cabeza.\n" +
            "\n" +
            "figura:buscar-reemplazar | Buscar el error, elegir «reemplazar todo» y revisar el resultado\n" +
            "\n" +
            "## Casos normales\n" +
            "\n" +
            "| Se busca | Se reemplaza por | Resultado |\n" +
            "|---|---|---|\n" +
            "| `2025` | `2026` | actualiza el año |\n" +
            "| `Sr.` | `Señor` | completa la abreviatura |\n" +
            "| doble espacio | un espacio | limpia el texto |\n" +
            "\n" +
            "## Comodines\n" +
            "\n" +
            "Los comodines permiten buscar patrones, no palabras exactas.\n" +
            "\n" +
            "| Comodín | Qué representa |\n" +
            "|---|---|\n" +
            "| `?` | un solo carácter cualquiera |\n" +
            "| `*` | cualquier cantidad de caracteres |\n" +
            "| `[0-9]` | un dígito del 0 al 9 |\n" +
            "\n" +
            "Un ejemplo típico: `SR*.` encuentra abreviaturas de señor con cualquier número de letras detrás.\n" +
            "\n" +
            "## Reglas para no romper nada\n" +
            "\n" +
            "1. Primero **buscar**, después reemplazar: se ven las coincidencias resaltadas.\n" +
            "2. Probar el **reemplazar uno** y revisar el resultado.\n" +
            "3. Solo después usar **reemplazar todo**.\n" +
            "4. Guardar antes de empezar, por si hay que deshacer.\n" +
            "\n" +
            "!! Cuidado con los reemplazos\n" +
            "- ¿Qué pasa si buscas `a` y lo reemplazas por `e` en un texto?\n" +
            "- ¿Por qué conviene buscar con mayúsculas activadas?\n" +
            ">> Si cambias una letra común, destrozas medio documento. Y buscar con mayúsculas activadas distingue `Perú` de `peru`, así no tocas palabras que solo se parecen.",
          ejemplo:
            "Un informe de 20 páginas repite «el informe» donde debería decir «el informe».\n" +
            "\n" +
            "## Solución simple\n" +
            "\n" +
            "1. Buscar: `el informe`.\n" +
            "2. Reemplazar por: `el informe`.\n" +
            "3. Reemplazar todo.\n" +
            "\n" +
            "## Solución con comodín\n" +
            "\n" +
            "Cuando el error está en un sufijo variable, como `el informe!`, `el informe?` o `el informe!`:\n" +
            "\n" +
            "1. Buscar: `el informe?`.\n" +
            "2. Reemplazar por: `el informe`.\n" +
            "3. Reemplazar todo.\n" +
            "\n" +
            "## Verificación\n" +
            "\n" +
            "Después del cambio se busca de nuevo el texto problemático. Si no aparece ninguna coincidencia, la operación quedó bien. Y como se guardó antes de empezar, se puede deshacer con un solo atajo si algo salió mal.\n" +
            "\n" +
            "> El objetivo de la herramienta no es ahorrarte el tecleo, es evitar el error humano de cambiar un carácter de más en un documento largo.",
          consejo: "Cuando el error sea un espacio, dos o tres espacios seguidos, o un punto y coma donde iba una coma, el comodín no hace falta: basta con activar la opción de caracteres especiales.",
        },
        {
          titulo: "Hojas de cálculo: fórmulas y referencias",
          objetivo: "Escribir fórmulas con referencias relativas y absolutas, y usar SUMAR, PROMEDIO y funciones básicas para analizar datos.",
          teoria:
            "Una hoja de cálculo es una calculadora con memoria. La diferencia está en que las fórmulas se repiten solas.\n" +
            "\n" +
            "figura:hoja-calculo-referencia | Referencias relativas (A1) y absolutas ($A$1) en la misma fórmula\n" +
            "\n" +
            "## La estructura de una fórmula\n" +
            "\n" +
            "Toda fórmula empieza con **=**. Después van la función, el rango y los argumentos separados por punto y coma o coma.\n" +
            "\n" +
            "```\n" +
            "=SUMAR(A1:A10)\n" +
            "=PROMEDIO(B2:B6)\n" +
            "=SI(C1>=60;\"aprueba\";\"reprobó\")\n" +
            "```\n" +
            "\n" +
            "| Función | Qué hace |\n" +
            "|---|---|\n" +
            "| SUMA | suma un rango |\n" +
            "| PROMEDIO | calcula la media aritmética |\n" +
            "| CONTAR | cuenta celdas con números |\n" +
            "| MÁXIMO, MÍNIMO | mayor y menor valor |\n" +
            "| SI | decide según una condición |\n" +
            "\n" +
            "## Referencias relativas y absolutas\n" +
            "\n" +
            "| Referencia | Al copiar la fórmula hacia abajo |\n" +
            "|---|---|\n" +
            "| `A1` | cambia: pasa a `A2`, `A3` |\n" +
            "| `$A$1` | no cambia: sigue siendo `$A$1` |\n" +
            "| `$A1` | la columna queda fija, la fila cambia |\n" +
            "| `A$1` | la fila queda fija, la columna cambia |\n" +
            "\n" +
            "El signo **$** es la clave. Con `$` se fija una coordenada.\n" +
            "\n" +
            "glosario:Hoja de cálculo :: Programa para organizar datos en filas y columnas.\n" +
            "glosario:Fórmula :: Expresión que empieza con = y calcula un resultado.\n" +
            "glosario:Rango :: Rectángulo de celdas, como `B2:B15`.\n" +
            "glosario:Referencia relativa :: Dirección que cambia al copiar la fórmula.\n" +
            "glosario:Referencia absoluta :: Dirección con $ que no cambia al copiar.\n" +
            "glosario:Fila :: Línea horizontal de la hoja.\n" +
            "glosario:Columna :: Línea vertical de la hoja.\n" +
            "\n" +
            "!! Crea una fórmula\n" +
            "- ¿Cómo sumarías las celdas de `C2` a `C11`?\n" +
            "- ¿Qué se necesita para que la celda `B1` no cambie al arrastrar?\n" +
            ">> `=SUMA(C2:C11)`. Para fijar `B1` se escribe `$B$1`; con un solo `$` en `$B1` se fija la columna pero la fila seguiría cambiando.",
          ejemplo:
            "Una lista de 20 estudiantes tiene sus notas en `B2:B21`, y en `B22` se calcula el promedio.\n" +
            "\n" +
            "## Fórmula del promedio\n" +
            "\n" +
            "```\n" +
            "=PROMEDIO(B2:B21)\n" +
            "```\n" +
            "\n" +
            "Al copiarla a `C22` pasa a `=PROMEDIO(C2:C21)`: la referencia es relativa y se ajusta a la columna nueva.\n" +
            "\n" +
            "## Fijar el número de aprobados\n" +
            "\n" +
            "Supongamos que el total de alumno es 20 y está en `E1`. Para multiplicar cada nota por ese total sin que la referencia cambie:\n" +
            "\n" +
            "```\n" +
            "=B2*$E$1\n" +
            "```\n" +
            "\n" +
            "Al copiar a `B3` queda `=B3*$E$1`: el total sigue apuntando a `E1` porque el signo **$** lo protege.\n" +
            "\n" +
            "## Un resumen completo\n" +
            "\n" +
            "| Celda | Fórmula | Resultado |\n" +
            "|---|---|---|\n" +
            "| B22 | `=PROMEDIO(B2:B21)` | media de las 20 notas |\n" +
            "| C1 | `=MAX(B2:B21)` | mejor nota |\n" +
            "| C2 | `=MIN(B2:B21)` | peor nota |\n" +
            "| C3 | `=CONTAR(B2:B21)` | cuántos datos hay |\n" +
            "\n" +
            "> La diferencia entre un usuario que pelea con la hoja y otro que resuelve en cinco minutos está en decidir usar `$`. Cada vez que copies una fórmula, pregúntate si el dato debe moverse o permanecer fijo.",
          consejo: "Para ver el resultado de una fórmula sin tocarla, selecciona la celda y lee la barra de fórmulas; ahí aparece exactamente lo que escribiste.",
        },
      ],
    },
    // ---------------------------------------------------------------------
    // Módulo 3 · Internet, fuentes y trabajo en la nube
    // ---------------------------------------------------------------------
    {
      titulo: "Módulo 3 · Internet, fuentes y trabajo en la nube",
      lecciones: [
        {
          titulo: "Buscar en internet sin perder tiempo",
          objetivo: "Construir consultas de búsqueda mediante operadores, filtrar resultados y evaluar la relevancia de una página.",
          teoria:
            "Buscar «celular botones no devuelve lo que uno quiere. La diferencia entre una búsqueda útil y una frustrada está en el **operador**.\n" +
            "\n" +
            "## Operadores que cambian todo\n" +
            "\n" +
            "| Operador | Qué hace | Ejemplo |\n" +
            "|---|---|---|\n" +
            "| comillas | frase exacta | `\"cambio climático\"` |\n" +
            "| menos | excluye términos | `flores -cactus` |\n" +
            "| site | busca dentro de un dominio | `site:gob.pe origami` |\n" +
            "| filetype | filtra por tipo de archivo | `filetype:pdf` |\n" +
            "| OR | cualquiera de las dos palabras | `perro OR cachorro` |\n" +
            "\n" +
            "## Cómo se lee un resultado\n" +
            "\n" +
            "| Parte | Qué significa |\n" +
            "|---|---|\n" +
            "| Título | el nombre de la página |\n" +
            "| URL | quién publica y en qué dominio |\n" +
            "| Descripción | el fragmento que el buscador muestra |\n" +
            "\n" +
            "Un título recargado con muchos términos puede ser publicidad, no información.\n" +
            "\n" +
            "## Ordena los resultados\n" +
            "\n" +
            "1. Pon la frase exacta entre comillas.\n" +
            "2. Añade un término que quite la ambigüedad.\n" +
            "3. Usa el menos para descartar lo que no quieres.\n" +
            "4. Filtra por fecha si buscas información reciente.\n" +
            "5. Si la búsqueda oficial no funciona, cambia de estrategia.\n" +
            "\n" +
            "glosario:Buscador :: Programa que encuentra páginas a partir de una consulta.\n" +
            "glosario:Consulta :: Texto que se escribe para buscar información.\n" +
            "glosario:Operador :: Símbolo que modifica el significado de una búsqueda.\n" +
            "glosario:Palabra clave :: Término que define el tema buscado.\n" +
            "glosario:Cache :: Copia temporal que guarda el buscador de una página.",
          ejemplo:
            "Necesitas un gráfico de la erosión interna del suelo, para un trabajo escolar.\n" +
            "\n" +
            "## Consulta inicial, fallida\n" +
            "\n" +
            "```\n" +
            "erosion suelo\n" +
            "```\n" +
            "\n" +
            "Devuelve páginas de venta de Tierra y un artículo de 2004 con datos que ya no sirven.\n" +
            "\n" +
            "## Consulta mejorada\n" +
            "\n" +
            "```\n" +
            "\"erosión del suelo\" -venta -comprar 2015..2026\n" +
            "```\n" +
            "\n" +
            "Ahora aparecen documentos de organismos oficiales y de la última década.\n" +
            "\n" +
            "## Si el resultado oficial no aparece\n" +
            "\n" +
            "Se añade `site:` con el dominio del organismo y se busca el nombre exacto del informe. Si tampoco aparece, es probable que el documento ya no exista, y eso vale como respuesta: en un trabajo se puede citar «no se encontró información oficial actualizada».\n" +
            "\n" +
            "> Una búsqueda no es una consulta: es una estrategia. Si el primer resultado no sirve, el problema casi nunca es el buscador, es la consulta.\n" +
            "\n" +
            "!! Mejora una búsqueda\n" +
            "- ¿Cómo buscarías un resumen del libro «El principito»?\n" +
            "- ¿Cómo excluirías páginas de venta de Shoes?\n" +
            ">> Con `\"El principito\" resumen`, y con `zapatos -comprar -venta -precio`.",
          consejo: "Cuando dices un término en dos palabras, búscalo también en plural y sin acentos. Mucha información usa el singular y el buscador no siempre lo resuelve solo.",
        },
        {
          titulo: "Fuentes confiables y citas",
          objetivo: "Distinguir fuentes académicas, institucionales y comerciales, y citar fuentes en el formato solicitado.",
          teoria:
            "Cualquier página puede publicarse. Eso no significa que cualquier página sirva para un trabajo académico.\n" +
            "\n" +
            "## Tipos de fuente\n" +
            "\n" +
            "| Tipo | Ejemplo | Fiabilidad |\n" +
            "|---|---|---|\n" +
            "| Académica | artículo de revista científica | muy alta |\n" +
            "| Institucional | gobierno, universidad, organismo | alta |\n" +
            "| Newsroom | periódico con authorship | media-alta |\n" +
            "| Comercial | blog, tienda, red social | baja |\n" +
            "| Enciclopedias | Wikipedia, enciclopedias libres | media, sirve para orientarse |\n" +
            "\n" +
            "Una enciclopedia es un **punto de partida**: sirve para saber qué buscar, pero hay que seguir con la fuente original que ella menciona.\n" +
            "\n" +
            "## Los cinco criterios\n" +
            "\n" +
            "1. **Autoría**: hay un nombre real y datos de contacto.\n" +
            "2. **Fecha**: se indica cuándo se publicó y se actualizó.\n" +
            "3. **Respaldo**: cites fuentes propias.\n" +
            "4. **Corrección**: el margen de error está declarado.\n" +
            "5. **Propósito**: informa, no vende ni persuade.\n" +
            "\n" +
            "glosario:Cita :: Referencia que identifica la fuente usada.\n" +
            "glosario:APA :: Norma de citación usada en ciencias sociales y educación.\n" +
            "glosario:Fuente primaria :: Documento original del autor o del organismo.\n" +
            "glosario:Fuente secundaria :: Texto que resume o analiza una fuente primaria.\n" +
            "glosario:Fiabilidad :: Grado en que una fuente puede sostenerse.",
          ejemplo:
            "Un trabajo sobre el agua potable cita un blog que dice «el 90 por ciento del agua de Lima está contaminada».\n" +
            "\n" +
            "## Los problemas del blog\n" +
            "\n" +
            "- No indica quién lo escribió.\n" +
            "- No dice de dónde salió el 90 por ciento.\n" +
            "- No tiene fecha de actualización.\n" +
            "\n" +
            "## Cómo Improve el trabajo\n" +
            "\n" +
            "1. Se busca el dato en la fuente original: el informe del organismo de agua o el estudio académico que lo midió.\n" +
            "2. Se cita ese informe, no el blog.\n" +
            "3. Si el blog resulta ser la única fuente, se menciona como tal y se anota la limitación.\n" +
            "\n" +
            "> La diferencia entre copiar una idea e investigarla está en si puedes señalar de dónde salió cada dato.",
          consejo: "Un buen truco para citar mejor es escribir primero el dato y después buscar su origen. Si no lo encuentras, probablemente no deberías afirmarlo con seguridad: en un trabajo académico, conviene decirlo como hipótesis.",
        },
        {
          titulo: "Correo electrónico y trabajo en la nube",
          objetivo: "Redactar correos claros, adjuntar archivos correctamente y trabajar de forma colaborativa en documentos compartidos.",
          teoria:
            "El correo y la nube son herramientas de coordinación. Casi todos los problemas con ellas son de comunicación, no de tecnología.\n" +
            "\n" +
            "## Correo: la estructura importa\n" +
            "\n" +
            "```\n" +
            "Asunto: Tarea 3 — resultados y dudas\n" +
            "\n" +
            "Hola, Lucía:\n" +
            "\n" +
            "Adjunto la tarea 3 con las correcciones que me pediste.\n" +
            "Tengo una duda con el punto 2: ¿usamos la fórmula del módulo 2?\n" +
            "\n" +
            "Gracias,\n" +
            "Ana\n" +
            "```\n" +
            "\n" +
            "| Campo | Recomendación |\n" +
            "|---|---|\n" +
            "| Asunto | específico, con el nombre del tema |\n" +
            "| Saludo | nombre de la persona |\n" +
            "| Cuerpo | una idea por párrafo, con contexto |\n" +
            "| Cierre | agradecimiento y firma |\n" +
            "\n" +
            "## La etiqueta de adjuntar\n" +
            "\n" +
            "Antes de darle enviar, se comprueba que el archivo está adjunto. Es el error más frecuente: un correo bien escrito, sin el archivo que prometía.\n" +
            "\n" +
            "| Plataforma | Qué permite |\n" +
            "|---|---|\n" +
            "| Google Drive | documentos y carpetas compartidos |\n" +
            "| Microsoft 365 | integrado con el correo institucional |\n" +
            "| Carpeta institucional del centro | archivos del propio centro de estudios |\n" +
            "\n" +
            "## Colaborar sin pisarse\n" +
            "\n" +
            "| Regla | Motivo |\n" +
            "|---|---|\n" +
            "| un archivo por responsable | dos personas editando el mismo texto se borran |\n" +
            "| escribir en comentarios, no reescribir todo | deja el hilo de cambios |\n" +
            "| subir la versión nueva con fecha | saber cuál es la buena |\n" +
            "| revisar permisos | un enlace público puede ser un riesgo |\n" +
            "\n" +
            "!! Cuidar un correo\n" +
            "- ¿Qué pones en el asunto de una consulta de tarea?\n" +
            "- ¿Por qué conviene avisar antes de editar un documento compartido?\n" +
            ">> El nombre del curso, la tarea y la duda concreta. Y avisar evita que dos personas trabajen sobre el mismo párrafo y una sobrescriba el trabajo de la otra.",
          ejemplo:
            "Ana envía a su profesora un correo que dice «Hola, buenos días, te mando lo que me pediste» y adjunta `trabajo_final.docx`, un archivo que se llama así desde hace cuatro versiones.\n" +
            "\n" +
            "## Problema 1: el asunto\n" +
            "\n" +
            "El asunto dice «Re: consulta». Cuando la profesora busque esa tarea dentro de seis meses, no la encontrará.\n" +
            "\n" +
            "**Asunto corregido:** `Historia — Tarea 2: fuentes del siglo XIX`.\n" +
            "\n" +
            "## Problema 2: el cuerpo\n" +
            "\n" +
            "El mensaje no dice qué archivo es ni qué cambios tiene. La profesora tiene que abrirlo para enterarse.\n" +
            "\n" +
            "**Mensaje corregido:**\n" +
            "\n" +
            "```\n" +
            "Asunto: Historia — Tarea 2: fuentes del siglo XIX\n" +
            "\n" +
            "Hola, profesora Ramírez:\n" +
            "\n" +
            "Adjunto la Tarea 2 con las cinco fuentes que pedía, más una\n" +
            "sexta sobre el periodo de 1870. Cambié el formato a APA.\n" +
            "\n" +
            "Una duda: ¿mantengo la cita de la fuente en notas al pie?\n" +
            "\n" +
            "Gracias,\n" +
            "Ana\n" +
            "```\n" +
            "\n" +
            "## Problema 3: el archivo\n" +
            "\n" +
            "Antes de darle enviar, se abre el archivo y se revisa la fecha de modificación. `trabajo_final.docx` era de hace tres días; el bueno era `tarea2_historia_v3.docx`.\n" +
            "\n" +
            "> Un correo bien estructurado ahorra una ida y vuelta: la otra persona entiende qué recibe y para qué, sin necesidad de preguntar.",
          consejo: "Si el correo lleva a una reunión o a un entregable, el asunto debe permitir encontrarlo con una búsqueda dentro de seis meses. Pon el nombre del curso y el número de tarea.",
        },
        {
          titulo: "Herramientas de IA: límites y uso responsable",
          objetivo: "Usar herramientas de IA con criterio, verificando siempre la información y declarando su uso.",
          teoria:
            "Una herramienta de IA **genera texto, no verdad**. Puede inventar datos, fuentes y citas que parecen perfectas.\n" +
            "\n" +
            "## Tres límites\n" +
            "\n" +
            "1. **No verifica nada**: una respuesta fluida no significa que sea cierta.\n" +
            "2. **No sustituye la fuente**: citar a la IA como si fuera una fuente no es válido en casi ningún trabajo académico.\n" +
            "3. **No piensa por ti**: si no entiendes lo que escribió, no lo entregues.\n" +
            "\n" +
            "## Uso responsable\n" +
            "\n" +
            "| Se puede | No se debe |\n" +
            "|---|---|\n" +
            "| pedir explicaciones de un concepto | entregar texto generado tal cual |\n" +
            "| comparar definiciones y verificar después | inventar datos y citarlos |\n" +
            "| usar como borrador para reescribir | presentarlo como trabajo propio sin declararlo |\n" +
            "| pedir ideas para practicar | pedir que resuelva una evaluación |\n" +
            "\n" +
            "## La verificación en tres pasos\n" +
            "\n" +
            "1. ¿El dato aparece en una fuente real que puedas abrir?\n" +
            "2. ¿La cita existe y coincide con lo que dice?\n" +
            "3. ¿El dato es vigente para el contexto de tu trabajo?\n" +
            "\n" +
            "glosario:IA generativa :: Programa que produce texto a partir de instrucciones.\n" +
            "glosario:Verificación :: Comprobar que un dato es cierto en su fuente.\n" +
            "glosario:Plagio :: Presentar como propio un trabajo ajeno.\n" +
            "glosario:Declaración de uso :: Mención de que se empleó una herramienta de IA.\n" +
            "\n" +
            "!! Criterio con la IA\n" +
            "- ¿Serviría de ayuda pedirle un resumen de un libro que aún no has leído?\n" +
            "- ¿Se puede citar a una IA como fuente en un trabajo de historia?\n" +
            ">> De resumen, no mucho: te quitaría la lectura y después no podrías explicar el libro. Y no, la IA no es una fuente válida: hay que citar el libro.",
          ejemplo:
            "Un estudiante entrega un trabajo sobre la Revolución Industrial. La primera página está escrita con una herramienta de IA, y el texto menciona «un estudio de Smith y Annals (1998)» que no existe.\n" +
            "\n" +
            "## Los tres problemas\n" +
            "\n" +
            "1. **La fuente no existe**: ni el autor ni la revista son reales. Ese estudio no se puede abrir ni verificar.\n" +
            "2. **No hay declaración de uso**: el trabajo se presenta como propio, y en muchos centros eso es motivo de calificación baja.\n" +
            "3. **El autor no puede defenderlo**: si le preguntan por ese dato en la exposición, no sabe de dónde salió.\n" +
            "\n" +
            "## Cómo se corrige\n" +
            "\n" +
            "- Se elimina la cita inventada.\n" +
            "- Se busca el dato real: para el crecimiento de la población urbana en Manchester existen censos y series de la época, que sí se pueden citar.\n" +
            "- Se reescribe ese apartado con las palabras del estudiante, entendiendo lo que dice.\n" +
            "- Se declara el uso de la herramienta al final del trabajo, según pida el centro.\n" +
            "\n" +
            "## La misma herramienta, uso legítimo\n" +
            "\n" +
            "Sí sirve para pedir una explicación más sencilla de la diferencia entre trabajo artesanal y manufactura, o para comparar tres definiciones de industrialización y después comprobar cuál es la correcta.\n" +
            "\n" +
            "> La IA sirve para entender mejor, no para que el trabajo parezca hecho por otro. El criterio se reduce a una pregunta: ¿puedes explicar y defender cada dato que entregas?",
          consejo: "Regla práctica: si no puedes explicar de dónde salió cada dato de tu entrega, no lo entregues. La IA sirve para entender mejor, no para que el trabajo parezca hecho por otro.",
        },
      ],
    },
  ],
};
