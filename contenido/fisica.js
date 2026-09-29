// ============================================================================
// contenido/fisica.js
//
// Estos archivos PROFUNDIZAN la estructura de assets/js/cursos-data.js. La
// union es por posicion: modulos[0] es el primer modulo del curso y
// lecciones[3] es su cuarta leccion. Si aqui hay mas modulos o mas lecciones
// de las que existen, se anaden como nuevas y necesitan traer titulo.
// ============================================================================

CONTENIDO["fisica"] = {
  modulos: [
    {
      titulo: "Módulo 1 · Movimiento y cinemática",
      lecciones: [
        {
          teoria:
            "Una magnitud es todo lo que se puede medir, y un problema de física empieza siempre por una pregunta incómoda: ¿se puede medir esto con un número solamente, o hace falta también una dirección? De esa respuesta dependen dos familias que se usan todo el curso.\n" +
            "## Escalar y vectorial\n" +
            "- **Escalar**: se describe con un número y una unidad. La masa, el tiempo, la temperatura, la energía, la rapidez. La distancia recorrida es escalar aunque el trayecto sea curvo, porque solo cuenta cuánto se avanzó.\n" +
            "- **Vectorial**: necesita magnitud, dirección y sentido. El desplazamiento, la velocidad, la aceleración, la fuerza, el peso.\n" +
            "- La diferencia práctica: si alguien camina 100 metros hacia el norte y regresa, recorrió 200 metros de distancia, pero su desplazamiento es cero. Dos números que cuentan cosas distintas, y confundirlos es el error más común del primer módulo.\n" +
            "## El vector y sus operaciones\n" +
            "Un vector se escribe con los componentes de su eje, y se puede sumar componente por componente, como cualquier par de números. Eso permite sumar fuerzas sin dibujar nada: dos fuerzas de (3 N, 4 N) y (−3 N, 2 N) dan (0 N, 6 N).\n" +
            "- **Módulo**: la longitud del vector, que es su cantidad. Se calcula con el teorema de Pitágoras: raíz de la suma de los cuadrados.\n" +
            "- **Dirección y sentido**: la dirección es el valor del ángulo sobre una referencia; el sentido distingue un norte de un sur. \"30 grados\" no está completo si no se dice hacia dónde.\n" +
            "## El Sistema Internacional\n" +
            "Trabajar con unidades mezcladas es la causa número uno de resultados absurdos. El SI tiene siete magnitudes base, y de ellas salen todas las demás mediante combinaciones:\n" +
            "- Longitud: metro (m).\n" +
            "- Masa: kilogramo (kg).\n" +
            "- Tiempo: segundo (s).\n" +
            "- Corriente eléctrica: amperio (A).\n" +
            "- Temperatura: kelvin (K).\n" +
            "- Cantidad de sustancia: mol (mol).\n" +
            "- Intensidad luminosa: candela (cd).\n" +
            "Las derivadas se construyen con productos y cocientes: la velocidad es longitud entre tiempo, la fuerza es masa por aceleración, el trabajo es fuerza por distancia. Entender esto hace que las fórmulas no se memoricen, porque se deducen.\n" +
            "## El análisis dimensional como comprobación\n" +
            "Si has despejado mal y la unidad final no tiene sentido físico, casi siempre el error está en la fórmula, no en la cuenta. Ejemplo: si te da que una velocidad se mide en newtons, el resultado es imposible y hay que volver atrás. Este control de unidades es más rápido que rehacer la cuenta, y por eso conviene hacerlo siempre, incluso cuando el número \"parece\" bien.\n",
          ejemplo:
            "Un estudiante recorre 300 metros al norte, luego 400 metros al este y finalmente 120 metros al sur. ¿Cuál es su distancia total y su desplazamiento, y cuánto vale la rapidez media si tardó 92 segundos?\n" +
            "## Método 1: separar distancia y desplazamiento\n" +
            "- Primero: la distancia es la suma de los tres tramos, 300 + 400 + 120 = 820 metros. Es un escalar, se suman sin más.\n" +
            "- Segundo: para el desplazamiento elijo el norte como eje positivo vertical y el este como positivo horizontal. El desplazamiento vertical es 300 − 120 = 180 metros hacia el norte, y el horizontal es 400 metros hacia el este.\n" +
            "- Tercero: el módulo del desplazamiento es raíz de 180² + 400² = raíz de 32400 + 160000 = raíz de 192400, que da unos 438,6 metros.\n" +
            "- La dirección la obtengo del ángulo, tangente inversa de 180 sobre 400, unos 24,2 grados al norte del este.\n" +
            "## Método 2: dibujar el vector primero\n" +
            "- Cuarto: hago un croquis a escala, con 300 hacia arriba, 400 a la derecha y 120 hacia abajo. El camino es un triángulo rectángulo de catetos 180 y 400.\n" +
            "- Quinto: la hipotenusa es 438,6 metros y coincide exactamente con el método anterior. Que dos caminos distintos lleguen al mismo número confirma que la operación estaba bien planteada.\n" +
            "## Método 3: calcular la rapidez\n" +
            "- Sexto: la rapidez media es distancia entre tiempo, 820 metros entre 92 segundos, unos 8,9 metros por segundo, unos 32 kilómetros por hora.\n" +
            "- La velocidad media, en cambio, es 438,6 entre 92, unos 4,8 metros por segundo. Son distintas, y esa diferencia es justamente el contenido del ejemplo.\n" +
            "> El resultado importante no es 438,6 sino que hay dos cifras legítimas para la pregunta y cada una tiene su nombre. Saber cuál se pide es la mitad del problema.\n",
          consejo:
            "Escribe en la primera línea del ejercicio si lo que piden es distancia o desplazamiento, y luego qué unidad corresponde. El 90 % de los errores de cinemática vienen de responder bien con la magnitud equivocada.",
        },
        {
          objetivo:
            "Resolver problemas de velocidad constante usando d = v·t y saber cuándo aplicar cada una, con el criterio de elección explícito.",
          teoria:
            "El movimiento rectilíneo uniforme es el caso más simple y el mejor para exponer un error de razonamiento muy común: creer que una fórmula describe un caso particular cuando en realidad resume una regularidad.\n" +
            "## Qué significa \"uniforme\"\n" +
            "MRU significa dos cosas a la vez, y basta con que se entienda una sola cosa para que la definición se entienda:\n" +
            "- **Rectilíneo**: la trayectoria es una línea recta. No hay giros ni curvas.\n" +
            "- **Uniforme**: la rapidez no cambia. La aceleración es cero en todo el trayecto.\n" +
            "De la segunda se deduce lo primero: si la velocidad es constante y la trayectoria es recta, la posición crece linealmente con el tiempo. Un reloj y una cinta métrica bastan para medirlo, y por eso es el movimiento que se puede verificar con un experimento sencillo.\n" +
            "## La fórmula y su lectura\n" +
            "La relación es d = v · t, donde d es la distancia recorrida, v la rapidez y t el tiempo. Pero la fórmula no es una receta, es una proporción: d está en la misma razón con t que con v. De ahí salen todas las variantes:\n" +
            "- v = d / t, para hallar la rapidez.\n" +
            "- t = d / v, para hallar el tiempo.\n" +
            "Si dos de las tres cantidades se conocen, la tercera queda determinada. Ese es el criterio para saber si un problema está bien planteado, y muchos enunciados de examen no dan más que eso.\n" +
            "## Movimiento con dos tramos\n" +
            "Un caso muy frecuente es el de ir y volver, o el de cambiar de velocidad en un punto. Ahí la fórmula única se queda corta y hay que dividir el trayecto:\n" +
            "- Tramo 1 con v1 durante t1: d1 = v1 · t1.\n" +
            "- Tramo 2 con v2 durante t2: d2 = v2 · t2.\n" +
            "- La distancia total es d1 + d2, y el tiempo total es t1 + t2.\n" +
            "El error clásico es aplicar v · t con la velocidad final sobre el tiempo total. Funciona solo si la velocidad no cambió.\n" +
            "## Rapidez media\n" +
            "La rapidez media no es la promedio de las rapideces de cada tramo, salvo que ambos tramos duren lo mismo. La definición correcta divide la distancia total entre el tiempo total, que es un promedio ponderado por el tiempo. Si recorres 10 km en 1 hora y 20 km en 3 horas, tu rapidez media no es (10+20)/2, es 30/4 = 7,5 km/h. Notar la diferencia evita creer que un tramo rápido \"arrastra\" el promedio más allá de lo posible.\n",
          ejemplo:
            "Un camión recorre 120 km con rapidez constante de 60 km/h durante las primeras 2 horas, y luego 90 km con una rapidez constante de 45 km/h. ¿Cuánto tarda cada tramo, cuál es la distancia total, cuánto tiempo empuja el total y cuál es la rapidez media?\n" +
            "## Método 1: despejar el tiempo de cada tramo\n" +
            "- Primero: en el tramo 1, t = d / v = 120 km entre 60 km/h = 2 horas. Cuadra con lo que dice el enunciado, lo cual confirma que la velocidad de ese tramo era de 60 km/h.\n" +
            "- Segundo: en el tramo 2, t = 90 km entre 45 km/h = 2 horas también.\n" +
            "- Tercero: los dos tramos duraron lo mismo, 4 horas en total, y la distancia total es 210 km.\n" +
            "## Método 2: comprobar la rapidez media como promedio simple\n" +
            "- Cuarto: como ambos tramos duraron 2 horas cada uno, el promedio simple de las velocidades sí es válido: (60 + 45) entre 2 = 52,5 km/h.\n" +
            "- Quinto: verifico con la definición estricta, distancia total entre tiempo total: 210 km entre 4 h = 52,5 km/h. Coincide, porque los pesos son iguales.\n" +
            "## Método 3: usar el caso contrario para entender por qué importa\n" +
            "- Sexto: si en cambio recorre 10 km en 1 hora y 20 km en 3 horas, el promedio simple daría 15 km/h, pero el resultado real es 30 km entre 4 horas, 7,5 km/h.\n" +
            "- Séptimo: la diferencia es enorme. En ese caso el tramo lento pesa más porque dura más tiempo, y el promedio se acerca a él.\n" +
            "> El resultado 52,5 aparece por dos caminos distintos y eso lo convierte en confiable. La lección no es el número, es saber cuándo el promedio simple es lícito y cuándo es un error.\n",
          consejo:
            "Nunca sumes velocidades de tramos distintos. Suma distancias y suma tiempos por separado, y divide al final. Es la regla que evita el error más común del tema.",
        },
        {
          objetivo:
            "Aplicar las fórmulas de aceleración constante eligiendo la versión de la fórmula que corresponde a los datos dados.",
          teoria:
            "El MRUV es el movimiento con aceleración constante, y es la base de casi toda la cinemática que se usa después: la caída libre, el tiro parabólico y el movimiento de un vehículo que acelera son el mismo modelo visto desde ángulos distintos.\n" +
            "## Qué es la aceleración\n" +
            "La aceleración es el cambio de velocidad por unidad de tiempo. Es una magnitud vectorial y se mide en m/s². Leer esa unidad como \"metros por segundo, cada segundo\" es lo que hace que el concepto entre: no es que la velocidad cambie, es que cambia cada segundo.\n" +
            "- Si la velocidad pasa de 0 a 20 m/s en 4 s, la aceleración es 5 m/s².\n" +
            "- Si la velocidad es constante, la aceleración es cero, y se vuelve a MRU.\n" +
            "- Si la aceleración es constante pero distinta de cero, la velocidad varía de forma uniforme, y las fórmulas de posición se simplifican.\n" +
            "## Las cinco fórmulas y cómo elegir una\n" +
            "El problema real no es saber las fórmulas, es elegir cuál usar. Se eligen según lo que te den y lo que pidan:\n" +
            "- **v = v0 + a·t**: conocida la aceleración y el tiempo.\n" +
            "- **x = v0·t + a·t²/2**: conocida la aceleración y el tiempo.\n" +
            "- **v² = v0² + 2·a·x**: conocida la aceleración y la distancia. Es la que resuelve el tiempo bala, porque la distancia se conoce y el tiempo no.\n" +
            "- **x = ((v0 + v)/2)·t**: conocida la velocidad media. Se reconoce porque las velocidades aparecen como las dos de los extremos.\n" +
            "- **x = v·t − a·t²/2**: cuando el objeto se lanza hacia atrás o se invierte el sentido, y v es la velocidad final.\n" +
            "Un truco para elegir sin memorizar: escribe qué tres datos tienes y busca la fórmula que los contenga. Si solo te dan distancia y velocidad final sin tiempo, casi siempre es v² = v0² + 2ax.\n" +
            "## El signo es la dirección\n" +
            "La aceleración puede ser positiva o negativa según el sistema de referencia, y el signo no indica \"bueno\" o \"malo\", indica dirección. Un auto que frena hacia adelante tiene aceleración negativa si el norte es positivo. Lo que importa es que el signo debe ser coherente en las cinco fórmulas: si cambias el origen, cambias los signos de todos los datos, no solo de uno.\n" +
            "## Movimiento hacia arriba y retorno\n" +
            "Cuando se lanza un objeto hacia arriba, la velocidad se hace cero en el punto más alto, y la aceleración sigue siendo la misma, 9,8 m/s² hacia abajo. Esa es la parte que más se confunde: en el vértice la velocidad es cero, pero la aceleración no. Si la aceleración fuera cero ahí, el objeto se quedaría suspendido, lo cual es imposible.\n",
          ejemplo:
            "Una pelota se lanza verticalmente hacia arriba a 29,4 m/s desde el suelo. ¿Qué altura máxima alcanza, cuánto tarda en llegar al punto más alto y cuánto tarda en volver al suelo? Tómese g = 9,8 m/s².\n" +
            "## Método 1: elegir la fórmula que elimina el tiempo\n" +
            "- Primero: en el punto más alto la velocidad es cero, y la distancia que busca es la altura, así que la fórmula adecuada es v² = v0² + 2·a·x.\n" +
            "- Segundo: sustituyo y despejo la altura, x = (0 − 29,4²) entre 2·(−9,8) = menos 864,36 entre menos 19,6, que da 44,1 metros.\n" +
            "- Tercero: la altura máxima es 44,1 metros. El signo negativo de la aceleración se compensó con el signo menos de la resta, y el resultado es positivo, como debe ser.\n" +
            "## Método 2: calcular el tiempo y luego la altura\n" +
            "- Cuarto: con v = v0 + a·t llego antes al tiempo, t = (0 − 29,4) entre (−9,8) = 3 segundos.\n" +
            "- Quinto: con x = v0·t + a·t²/2, la altura es 29,4 · 3 menos 9,8 · 9 entre 2 = 88,2 menos 44,1 = 44,1 metros. El mismo resultado por otro camino.\n" +
            "## Método 3: exploit la simetría del tiro\n" +
            "- Sexto: el tiempo de subida es 3 segundos, y el de bajada es el mismo por simetría, 3 segundos, así que el vuelo completo dura 6 segundos.\n" +
            "- Séptimo: compruebo la altura con la fórmula del punto 1 invertida, 4,9 por el cuadrado de 3 = 44,1 metros. Tres métodos, una sola respuesta.\n" +
            "> Un detalle que conviene retener: los 44,1 metros se pueden calcular como la mitad de 9,8 por 3 al cuadrado. Esa forma corta, 4,9t², aparece en todos los problemas de caída libre y ahorra tiempo en un examen.\n",
          consejo:
            "Antes de operar, escribe hacia dónde es positivo tu eje. Si el resultado te da una altura negativa, casi siempre el error es de signo y no de aritmética: revisa solo eso primero.",
        },
        {
          teoria:
            "La caída libre es MRUV con un valor de aceleración fijo: 9,8 m/s² cerca de la superficie terrestre, dirigido siempre hacia el abajo. Todo lo demás se deduce de ahí, y esa es la fuerza del tema.\n" +
            "## Qué significa \"libre\"\n" +
            "\"Libre\" no quiere decir \"sin gravedad\", sino \"sin fuerzas de fricción\". La única fuerza que actúa es el peso, y por eso la aceleración es la misma para todos los objetos, sin importar su masa, su material o su forma. Una hoja de papel y una pelota caen igual si se lanzan en el vacío.\n" +
            "- En el aire real, la resistencia es una fuerza hacia arriba que crece con la velocidad, y por eso los objetos livianos caen más lento.\n" +
            "- En la Luna, la aceleración es 1,62 m/s², cerca de una sexta parte, y todo cae más lento allí.\n" +
            "- La aceleración 9,8 m/s² es una aproximación; el valor real de 9,81 apenas cambia los resultados.\n" +
            "## Las dos familias de fórmulas\n" +
            "Con el origen en el punto de lanzamiento y el eje positivo hacia arriba, todo objeto que se suelta desde el reposo cumple x = −4,9t² y v = −9,8t. Si se lanza hacia abajo con velocidad inicial, se suman los términos de velocidad inicial: x = −v0·t − 4,9t².\n" +
            "Esa es la ventaja de la forma normalizada: un solo conjunto de números, sin signo menos escondido.\n" +
            "## Lo que se puede leer en un resultado\n" +
            "La fórmula x = −4,9t² tiene una consecuencia útil: la altura es siempre un cuadrado, y los tiempos para el mismo recorrido guardan proporción con la raíz. Si un cuerpo cae 20 metros, y otro 80 metros en el mismo planeta, el segundo tarda el doble, porque 80 es cuatro veces 20 y la raíz de 4 es 2. Esa relación resuelve varios ítems de opción múltiple sin calcular fracciones.\n" +
            "## Distinción con la fuerza de gravedad\n" +
            "La aceleración de la gravedad, g, es una propiedad del lugar, no del objeto. El peso, en cambio, es la fuerza que la Tierra ejerce sobre ese cuerpo, y vale m · g. Confundir los dos lleva a la conclusión falsa de que un objeto pesado cae más rápido: el doble de masa también tiene el doble de peso, y la aceleración se cancela.\n",
          ejemplo:
            "Se deja caer una piedra desde el borde de un acantilado de 62 metros. ¿Cuánto tarda en llegar al suelo y con qué rapidez llega? Use g = 9,8 m/s².\n" +
            "## Método 1: hallar primero el tiempo\n" +
            "- Primero: el objeto parte del reposo, así que la altura es la mitad de g por el cuadrado del tiempo, y de ahí t = raíz de dos h sobre g.\n" +
            "- Segundo: sustituyo, raíz de dos por 62 entre 9,8, es decir raíz de 124 entre 9,8 = raíz de 12,65, unos 3,56 segundos.\n" +
            "- Tercero: la rapidez con la que llega es 9,8 por 3,56, unos 34,9 m/s, unos 126 km/h.\n" +
            "## Método 2: usar la fórmula de velocidad al final\n" +
            "- Cuarto: desde el reposo, v² = 2gh, y v es la raíz de 2 · 9,8 · 62 = raíz de 1215,2, unos 34,86 m/s.\n" +
            "- Quinto: calcule el tiempo dividiendo esa rapidez entre 9,8, 34,86 entre 9,8 = 3,56 segundos. Recupero el tiempo sin haber usado la raíz antes.\n" +
            "## Método 3: verificar con el argumento de la raíz\n" +
            "- Sexto: si la piedra se soltara desde 248 metros, cuatro veces más alto, el tiempo debería ser el doble, unos 7,11 segundos. Comprobado: raíz de 2 · 248 entre 9,8 = raíz de 50,6 = 7,11.\n" +
            "> El truco de las raíces es el atajo más rentable del módulo. Si las opciones de respuesta ofrecen funciones de raíz cuadrada de la altura, ya sabes cuál es correcta antes de calcular nada.\n",
          consejo:
            "Cuando el enunciado diga \"se suelta\" o \"se deja caer\", parte de cero la velocidad inicial y elige la forma más corta: 4,9t². Si dice \"se lanza\", no apliques esa fórmula.",
        },
        {
          objetivo:
            "Calcular rapidez angular, lineal y aceleración centrípeta comprobando unidades y verificando el resultado con un segundo camino de cálculo.",
          teoria:
            "El movimiento circular uniforme es MRU visto con una diferencia: la rapidez no cambia, pero la dirección de la velocidad cambia en cada instante. De esa diferencia sale todo el contenido, incluida la aceleración.\n" +
            "## La idea que organiza el tema\n" +
            "En MRU el vector velocidad es constante en los tres sentidos, y por eso no hay aceleración. En movimiento circular la rapidez es constante pero el vector velocidad gira, así que la aceleración existe aunque la rapidez no varíe. Un término importante: la rapidez angular describe el giro, y no debe confundirse con la rapidez lineal.\n" +
            "- ω, rapidez angular, mide cuánto gira por segundo. Se expresa en rad/s o en vueltas por segundo. Una vuelta completa son 2π radianes, unos 6,28 rad.\n" +
            "- v, rapidez lineal, mide cuánto recorre el objeto por segundo, en m/s. Es el tamaño de la trayectoria por unidad de tiempo.\n" +
            "- La relación entre ambas es v = ω · r, donde r es el radio.\n" +
            "## Frecuencia y periodo\n" +
            "La frecuencia f indica vueltas por segundo, y el periodo T indica segundos por vuelta. Son recíprocos: f = 1/T. Son la manera más natural de describir un giro para un motor o una rueda, porque dependen solo de la máquina y no del punto donde se mida la velocidad.\n" +
            "La ecuación completa del movimiento circular es ω = 2π/T = 2πf, y de ella salen todas: por ejemplo v = 2πr/T.\n" +
            "## La aceleración centrípeta\n" +
            "La aceleración que cambia la dirección de la velocidad apunta siempre hacia el centro de la trayectoria, por eso se llama centrípeta. Su módulo es a = v²/r = ω² · r, y tiene dos formas que conviene reconocer:\n" +
            "- v² sobre r: usar cuando conoces la rapidez lineal.\n" +
            "- ω² por r: usar cuando conoces el giro, que es el caso típico de una rueda.\n" +
            "Nótese que la aceleración centrípeta no es una fuerza, es el efecto de la fuerza neta. La fuerza es la causa, y se llama fuerza centrípeta, y apunta en la misma dirección.\n" +
            "## Puntos que se confunden\n" +
            "- El período no depende del radio: una rueda de radios distintos con el mismo número de vueltas por segundo tiene el mismo periodo.\n" +
            "- La rapidez lineal sí depende del radio: un punto en la orilla recorre más que uno cerca del eje.\n" +
            "- En el ecuador de una moneda y en el centro, la ω es idéntica y la v es cero en el centro.\n",
          ejemplo:
            "Una rueda de radio 0,4 m gira a 90 vueltas por minuto. ¿Cuál es su periodo, su rapidez angular, la rapidez lineal de un punto de la orilla y la aceleración centrípeta en ese punto?\n" +
            "## Método 1: pasar a segundos\n" +
            "- Primero: 90 vueltas por minuto son 90/60 = 1,5 vueltas por segundo. La frecuencia f es 1,5 Hz.\n" +
            "- Segundo: el periodo es el inverso, T = 1/1,5 = 0,667 s por vuelta.\n" +
            "- Tercero: la rapidez angular es 2πf = 2 · 3,1416 · 1,5 = 9,42 rad/s.\n" +
            "## Método 2: rapidez lineal y aceleración por la vía corta\n" +
            "- Cuarto: la rapidez lineal en la orilla es ω · r = 9,42 · 0,4 = 3,77 m/s.\n" +
            "- Quinto: la aceleración centrípeta es v²/r, es decir 3,77² entre 0,4 = 14,2 entre 0,4 = 35,5 m/s².\n" +
            "## Método 3: comprobar con la fórmula del radio\n" +
            "- Sexto: recalculo la aceleración con ω² · r = 9,42² · 0,4 = 88,8 · 0,4 = 35,5 m/s². Mismo valor.\n" +
            "- Séptimo: sentido de magnitudes. Un giro de 1,5 vueltas por segundo es rápido, así que 35,5 m/s² es razonable para un punto a 40 centímetros del eje.\n" +
            "> El dato que resume el ejercicio es que ω no depende del radio y v sí. Cualquier pregunta que mezcle ambos se resuelve separando qué se pide y qué se conoce.\n",
          consejo:
            "Cuando el enunciado dé vueltas por minuto, div entre 60 antes de usar 2π. Es el error más común del tema y se detecta enseguida porque el resultado final no tiene sentido físico.",
        }
      ],
    },
    {
      titulo: "Módulo 2 · Fuerzas y dinámica",
      lecciones: [
        {
          objetivo:
            "Interpretar inercia, masa, aceleración y acción-reacción y saber cuándo aplicar cada una, con el criterio de elección explícito.",
          teoria:
            "Las tres leyes de Newton son el esqueleto de toda la dinámica, y lo que las hace útiles es que dicen cómo pasar de una situación descrita a palabras a una lista de fuerzas que se pueden sumar.\n" +
            "## Primera ley: la inercia\n" +
            "Un cuerpo permanece en reposo o en movimiento rectilíneo uniforme salvo que actúe sobre él una fuerza neta. La inercia es la tendencia a conservar el estado, y depende de la masa: un bloque de madera sobre un trineo se mueve más difícil de detener que una hoja de papel, porque su masa es mayor.\n" +
            "Lo importante es la palabra \"neta\". Si dos fuerzas de igual magnitud en sentidos opuestos actúan sobre un cuerpo, este no se mueve, y desde el punto de vista de la primera ley la fuerza neta es cero.\n" +
            "## Segunda ley: la que más se usa\n" +
            "La fuerza neta sobre un cuerpo de masa m produce una aceleración inversamente proporcional a la masa: F neta = m · a. Esta ley es bidireccional y ahí está su potencia:\n" +
            "- Si conoces la fuerza y la masa, calculas la aceleración.\n" +
            "- Si conoces la aceleración y la masa, calculas la fuerza.\n" +
            "- Si conoces la fuerza y la aceleración, calculas la masa.\n" +
            "Fíjate en el orden inverso: a = F/m y F = m · a son la misma igualdad leída al revés. Un error frecuente es dividir donde hay que multiplicar, y el resultado es una aceleración demasiado pequeña.\n" +
            "Cuando la fuerza varía en el tiempo, la segunda ley se escribe F neta = m · dv/dt. En un examen eso se lee como: la pendiente de la gráfica velocidad-tiempo multiplicada por la masa es la fuerza.\n" +
            "## Tercera ley: acción y reacción\n" +
            "A toda acción corresponde una reacción de igual magnitud, sentido contrario y que actúa sobre un cuerpo distinto. La palabra decisiva es \"distinto\": la fuerza que yo empujo hacia la pared no frena mi avance, porque la reacción acts sobre la pared, no sobre mí.\n" +
            "- Empujo la pared: la pared me empuja a mí, con la misma fuerza.\n" +
            "- Un cohete no funciona porque el aire lo empuja, sino porque expulsa gases hacia atrás y el gas empuja el cohete hacia adelante.\n" +
            "- Por eso dos personas con igual masa intercambian aceleraciones simétricas al empujarse, y la suma de sus fuerzas sobre cada una no es cero: son fuerzas sobre cuerpos distintos.\n" +
            "## El diagrama de cuerpo libre\n" +
            "Es la herramienta que más resultados garantiza. Consiste en dibujar el cuerpo solo, y dibujar sobre él todas las fuerzas que actúan:\n" +
            "- Las tres que nunca se olvidan: peso hacia abajo, normal hacia arriba y la fuerza que el enunciado menciona.\n" +
            "- Las fuerzas que se olvidan: fricción, tensión de una cuerda, empuje del agua, resistencia del aire. Si el enunciado las nombra o el contexto las exige, entran.\n" +
            "- Se dibujan vectores con longitud proporcional a la magnitud, y solo entonces se eligen ejes y se escriben ecuaciones.\n" +
            "Un cuerpo libre bien dibujado hace que la segunda ley sea mecánica, porque la única dificultad real del tema es acertar la lista de fuerzas.\n",
          ejemplo:
            "Un bloque de 5 kg se empuja horizontalmente con una fuerza constante de 30 N sobre una superficie horizontal. La fricción tiene un valor de 10 N. ¿Cuál es la aceleración del bloque y con qué rapidez se mueve a los 4 segundos si parte del reposo?\n" +
            "## Método 1: dibujar y sumar fuerzas\n" +
            "- Primero: hago el diagrama de cuerpo libre. El peso, 5 · 9,8 = 49 N, hacia abajo, y la normal de 49 N hacia arriba se anulan porque no hay movimiento vertical.\n" +
            "- Segundo: horizontalmente solo hay dos fuerzas, los 30 N del empuje hacia la derecha y los 10 N de fricción hacia la izquierda. La fuerza neta es 30 − 10 = 20 N en el sentido del empuje.\n" +
            "- Tercero: por la segunda ley, la aceleración es F neta entre m = 20 entre 5 = 4 m/s², hacia la derecha.\n" +
            "## Método 2: ir directo a la ecuación por ejes\n" +
            "- Cuarto: en el eje horizontal, m · a = F aplicada − F fricción, o sea 5a = 30 − 10 = 20, de donde a = 4 m/s².\n" +
            "- Quinto: en el eje vertical, m · a vale cero porque no hay aceleración vertical: 0 = 49 − 49. Escribir la ecuación vertical aunque no lo pidas es un buen control de coherencia.\n" +
            "## Método 3: comprobar con la velocidad\n" +
            "- Sexto: como parte del reposo, la rapidez a los 4 s es a · t = 4 · 4 = 16 m/s, unos 57,6 km/h.\n" +
            "- Séptimo: observo la coherencia. Si la fricción fuera de 30 N, la fuerza neta sería cero y el bloque nunca se movería, que es justo lo que predice el criterio de equilibrio de la primera ley.\n" +
            "> El resultado que hay que retener no es 4 m/s² sino la lista de fuerzas. Cambia el empuje a 10 N y el bloque no se mueve; cambia la masa a 10 kg y la aceleración baja a 2 m/s². La lista explica ambos casos.\n",
          consejo:
            "Nunca sumes fuerzas de cuerpos distintos. Las 30 N y las 10 N de fricción actúan sobre el bloque y se suman entre sí; la reacción de la superficie es un par distinto y no entra en esa suma.",
        },
        {
          objetivo:
            "Usar la segunda ley de Newton para resolver gráficos y tablas y saber cuándo aplicar cada una, con el criterio de elección explícito.",
          teoria:
            "La segunda ley de Newton ya se conoce. Lo que añade esta lección es la habilidad de pasarla a otros formatos, sobre todo gráficas y tablas, que es como aparecen en casi todos los exámenes.\n" +
            "## La misma igualdad en tres formatos\n" +
            "F neta = m · a admite tres lecturas equivalentes, y elegir la correcta es el 90 % del problema:\n" +
            "- Con la fuerza conocida y la masa conocida, se despeja la aceleración.\n" +
            "- Con la aceleración conocida y la masa conocida, se despeja la fuerza.\n" +
            "- Con la fuerza conocida y la aceleración conocida, se despeja la masa.\n" +
            "La masa nunca cambia en el problema. Eso significa que, para un mismo cuerpo, la fuerza y la aceleración son proporcionales: si la fuerza se duplica, la aceleración se duplica. Si la aceleración se triplica, la fuerza se triplica, y no hay ninguna operación intermedia.\n" +
            "## Lectura de una gráfica de fuerza contra tiempo\n" +
            "La fuerza no es constante en la mayoría de los ejercicios. Cuando la fuerza varía:\n" +
            "- La aceleración en cada instante es a(t) = F(t)/m.\n" +
            "- La velocidad es el área bajo la curva de aceleración contra tiempo, sumada a la velocidad inicial.\n" +
            "- Si la fuerza se grafica contra distancia, el trabajo es el área bajo esa curva.\n" +
            "El error clásico es dividir el eje de la fuerza en segmentos y promediar sin pensar. Promediar la fuerza sirve solo si la fuerza varía linealmente con el tiempo, y en ese caso la aceleración promedio es correcta. Si la curva es una hipérbola o tiene escalones, promediar es incorrecto y hay que integrar por partes.\n" +
            "## Lectura de una tabla\n" +
            "Cuando el enunciado trae una tabla, hay que buscar el instante, no la fila entera. En una tabla de fuerza contra tiempo, la aceleración de cada intervalo es el cambio de velocidad dividido por el intervalo, no la velocidad misma. Y si la velocidad se mantiene constante en un tramo, la fuerza neta en ese tramo es cero, aunque la fricción siga existiendo: lo que la equilibra es la normal, no una fuerza horizontal.\n" +
            "## La pendiente y el área\n" +
            "Dos ideas que resuelven la mitad de los ítems de gráficas:\n" +
            "- En la gráfica v contra t, la pendiente es la aceleración y el área es el desplazamiento.\n" +
            "- En la gráfica a contra t, el área es el cambio de velocidad, y en la gráfica F contra t, el área es el impulso.\n" +
            "Recordar cuál es pendiente y cuál es área evita confundir el 60 % de los errores de estos ejercicios, porque ambos se calculan \"dividiendo\" pero dan magnitudes distintas.\n",
          ejemplo:
            "Un cuerpo de 4 kg parte del reposo. Durante los primeros 3 s recibe una fuerza constante de 16 N. Luego la fuerza cae a 0 durante 2 s, y en el segundo 5 a 10 N. ¿Cuál es la velocidad al final de cada tramo y cuál es la velocidad a los 10 segundos?\n" +
            "## Método 1: tramo por tramo con la segunda ley\n" +
            "- Primero: en el tramo 1, a = 16/4 = 4 m/s², y partiendo del reposo la velocidad a los 3 s es 4 · 3 = 12 m/s.\n" +
            "- Segundo: en el tramo 2 la fuerza neta es cero, así que la aceleración es cero y la velocidad se mantiene en 12 m/s los 2 s siguientes. En este tramo el cuerpo solo tiene fricción y normal, que se anulan.\n" +
            "- Tercero: en el tramo 3, a = 10/4 = 2,5 m/s², y durante 5 s suma 2,5 · 5 = 12,5 m/s.\n" +
            "- Cuarto: la velocidad final es 12 + 12,5 = 24,5 m/s.\n" +
            "## Método 2: integrar el área bajo la curva\n" +
            "- Quinto: dibujo F contra t. El área es un rectángulo de 3 s por 16 N, 48 N·s, más otro rectángulo de 5 s por 10 N, 50 N·s. El tramo con fuerza cero no aporta área.\n" +
            "- Sexto: la suma es 98 N·s, que es el impulso total. Por el teorema impulso-momento, el cambio de velocidad es 98 entre 4 = 24,5 m/s.\n" +
            "- Séptimo: como partía del reposo, la velocidad final es la misma que su cambio, 24,5 m/s.\n" +
            "## Método 3: verificar la coherencia de cada tramo\n" +
            "- Octavo: comparo los dos métodos en el segundo 5. El método 1 da 12 m/s, y el método 2 con el rectángulo inicial da 48 entre 4 = 12 m/s. Coinciden.\n" +
            "- Noveno: hago una comprobación de magnitudes. Si la fuerza hubiera sido de 8 N en el tramo 1, la velocidad sería la mitad, y eso se ve solo con mirar la proporción.\n" +
            "> El insight es que los dos métodos no son alternativas: el primero sirve para ver el detalle de cada tramo y el segundo para comprobar el total en un solo paso. Con gráfica en el examen, conviene aplicar siempre los dos.\n",
          consejo:
            "En una gráfica de fuerza contra tiempo no promedies la fuerza salvo que la dependencia sea lineal. Dibuja las áreas: es más lento, pero es el único procedimiento que nunca falla.",
        },
        {
          objetivo:
            "Calcular el rozamiento estático y cinético entre superficies comprobando unidades y verificando el resultado con un segundo camino de cálculo.",
          teoria:
            "La fricción es la única fuerza de este módulo que se opone al movimiento y que se calcula con una fórmula propia. Entenderla bien evita el error más caro de la dinámica.\n" +
            "## Dos tipos y dos fórmulas\n" +
            "- **Fricción estática**: la que impide que el cuerpo empiece a deslizarse. Se ajusta a lo necesario hasta su valor máximo, y por eso su fórmula lleva un \"menor o igual\": f estático ≤ μ estático · N.\n" +
            "- **Fricción cinética**: la que actúa una vez que el cuerpo ya se desliza. Es constante e independiente de la velocidad, y vale f cinético = μ cinético · N.\n" +
            "El coeficiente de fricción no tiene unidades y es una propiedad de los dos materiales en contacto, no del objeto. Acero sobre hielo tiene menos fricción que madera sobre madera, y por eso las tablas no traen el valor.\n" +
            "## La normal es la clave\n" +
            "Ambas fórmulas usan la fuerza normal, y ese es el punto donde se concentran los errores. En una superficie horizontal, la normal es igual al peso. En un plano inclinado, no: es el peso multiplicado por el coseno del ángulo. En un empujón horizontal contra una pared, la normal es la fuerza del empuje. En cada caso hay que dibujar el diagrama y preguntarse qué empuja hacia la superficie.\n" +
            "Que la fricción sea proporcional a la normal explica un hecho cotidiano: un comprimido sin tapa resbala y con tapa se mantiene firme, y nada cambió en el material.\n" +
            "## La condición de movimiento\n" +
            "El error clásico es aplicar directamente μ · N. Ese valor es el máximo, y solo se alcanza en el instante en que el cuerpo empieza a deslizar. Para saber si un cuerpo se mueve o se queda quieto:\n" +
            "- Calcula la fuerza aplicada y compárala con el máximo estático, μe · N.\n" +
            "- Si la fuerza aplicada es menor o igual, el cuerpo no se mueve y la fricción real es igual a la aplicada.\n" +
            "- Si lo supera, el cuerpo se mueve y la fricción real pasa a ser μc · N, que suele ser menor. Ese descenso brusco, de estático a cinético, es la razón de las caídas repentinas de objetos que estaban quietos sobre una superficie inclinada.\n" +
            "## Rozamiento en el giro y en las poleas\n" +
            "Cuando un cuerpo gira alrededor de un punto o de un eje, aparece también la fricción radial, que se opone al giro y es proporcional a la velocidad angular. Aparece en discos, en poleas y en los músculos del brazo. La misma idea de \"se opone al movimiento relativo\" se conserva, y reconocerlo evita tratarlo como un caso aparte.\n",
          ejemplo:
            "Un bloque de 3 kg descansa sobre una mesa horizontal. Se le aplica una fuerza horizontal de 8 N. El coeficiente de fricción estático es 0,4 y el cinético es 0,3. ¿Se mueve? Si se mueve, ¿con qué aceleración y qué fuerza de fricción actúa realmente? Use g = 9,8 m/s².\n" +
            "## Método 1: comprobar si supera el máximo estático\n" +
            "- Primero: la normal en una mesa horizontal es igual al peso, N = 3 · 9,8 = 29,4 N.\n" +
            "- Segundo: la fricción estática máxima es 0,4 · 29,4 = 11,76 N. Como la fuerza aplicada es 8 N, que es menor, el bloque no se mueve.\n" +
            "- Tercero: la fricción real vale exactamente 8 N hacia la izquierda, porque debe equilibrar al empuje. No vale 11,76 N, y esa es la clave del ejercicio.\n" +
            "## Método 2: el caso contrario para ver el cambio\n" +
            "- Cuarto: si la fuerza fuera 14 N, superaría los 11,76 N, el bloque empezaría a deslizarse y la fricción pasaría a ser cinética: 0,3 · 29,4 = 8,82 N.\n" +
            "- Quinto: entonces la fuerza neta sería 14 − 8,82 = 5,18 N, y la aceleración 5,18 entre 3 = 1,73 m/s².\n" +
            "## Método 3: verificar la coherencia\n" +
            "- Sexto: obsérvese que la aceleración de 1,73 m/s² se obtiene con una fuerza aplicada de 14 N pero no de 8 N. El mismo empuje, en un caso, no mueve nada y en el otro acelera, y la única diferencia es el valor de μ.\n" +
            "- Séptimo: si μc fuera igual a μe, no habría esa discontinuidad y el movimiento empezaría sin tirón. La diferencia entre los dos coeficientes explica por qué los objetos se sueltan de golpe.\n" +
            "> El resultado a retener es que la fricción estática es variable y la cinética es fija. Aplicar μN a un cuerpo parado produce un número correcto con un significado físico equivocado.\n",
          consejo:
            "Primero decide si el cuerpo se mueve o no, y solo después elige entre μe y μc. Calcular la fricción sin responder antes a esa pregunta es el error que más puntos cuesta en exámenes de dinámica.",
        },
        {
          objetivo:
            "Descomponer el peso en componentes paralela y perpendicular al plano. Practicarás el paso a paso y el control de errores más frecuentes.",
          teoria:
            "El plano inclinado es el laboratorio ideal para practicing descomposición de vectores, porque obliga a separar el peso en dos direcciones que no coinciden con las de la tabla. Entender esa separación resuelve al mismo tiempo dinámica y equilibrio.\n" +
            "## Por qué se descompone\n" +
            "El peso mg sigue siendo vertical hacia abajo, eso no cambia. Lo que cambia es que ahora hay una superficie de apoyo que se opone, y por eso el peso tiene dos efectos distintos:\n" +
            "- Componente perpendicular al plano, mg·cos θ, que la superficie debe counteract con la normal. Si el objeto está en reposo, N = mg·cos θ.\n" +
            "- Componente paralela al plano, mg·sen θ, que tiende a hacerlo deslizar hacia abajo.\n" +
            "La normal no es mg salvo en el plano horizontal. Ese es el error que más se repite: usar N = mg en un plano inclinado y obtener una aceleración falsa.\n" +
            "## Si desliza o no\n" +
            "Con el eje paralelo al plano y sin fricción, la ecuación es m·a = mg·sen θ, de donde a = g·sen θ, independientemente de la masa. Esa independencia de la masa es el resultado más importante del tema, y es lo que permite afirmar que todos los cuerpos deslizan igual en un plano inclinado sin fricción.\n" +
            "- Si a = g·sen θ es mayor que la fricción disponible, el cuerpo desliza.\n" +
            "- Con fricción, la condición de equilibrio es mg·sen θ ≤ μe · N = μe · mg·cos θ, es decir tan θ ≤ μe.\n" +
            "## La conclusión que hay que saber\n" +
            "El ángulo crítico, aquel en que el cuerpo empieza a moverse, cumple tan θ = μe. Y como la tangente crece más rápido que la tangente lineal, ese ángulo suele ser pequeño: con μe = 0,5, el cuerpo empieza a deslizar a unos 26,6 grados. Por eso una caja con fricción alto resiste bastante inclinación, y una superficie encerada resbaladiza no.\n" +
            "Ese mismo razonamiento explica por qué un coche baja una pendiente en neutral con el motor apagado, y por qué un camión pesado necesita una pendiente larga para detenerse.\n" +
            "figura:vector-descomposicion | El peso se descompone en dos componentes sobre el plano\n",
          ejemplo:
            "Una caja de 12 kg está sobre un plano inclinado de 30°. El coeficiente de fricción cinético es 0,2. ¿Qué fuerza normal actúa, cuál es la componente del peso a lo largo del plano y con qué aceleración desciende? Use g = 9,8 m/s².\n" +
            "## Método 1: dibujar el diagrama de cuerpo libre\n" +
            "- Primero: el peso es 12 · 9,8 = 117,6 N, vertical hacia abajo. Lo separo en dos componentes con el ángulo de 30°.\n" +
            "- Segundo: la componente paralela es mg·sen 30° = 117,6 · 0,5 = 58,8 N, y la perpendicular es mg·cos 30° = 117,6 · 0,866 = 101,8 N.\n" +
            "- Tercero: como la caja desliza, la normal vale la componente perpendicular, N = 101,8 N, no 117,6 N.\n" +
            "## Método 2: aplicar la segunda ley en el eje del plano\n" +
            "- Cuarto: la fricción cinética es 0,2 · 101,8 = 20,4 N, en sentido contrario al descenso.\n" +
            "- Quinto: la fuerza neta paralela es 58,8 − 20,4 = 38,4 N, y la aceleración es 38,4 entre 12 = 3,2 m/s².\n" +
            "## Método 3: comprobar que la masa se cancela\n" +
            "- Sexto: rehago la aceleración sin usar la masa. Con a = g·sen θ = 9,8 · 0,5 = 4,9 m/s², y descontando la fricción como fracción de la normal, a = g·sen θ − μg·cos θ = 4,9 − 0,2 · 9,8 · 0,866 = 4,9 − 1,70 = 3,2 m/s².\n" +
            "- Séptimo: el resultado no contiene la masa, y eso confirma la independencia. Si en el paso 1 hubiera puesto N = mg, la aceleración me habría dado 2,4 m/s², visibly distinto.\n" +
            "> El dato que vale la pena guardar es el ángulo crítico, tan θ = μ. Con los números del ejercicio, está en 11,3 grados, muy por debajo de los 30 grados del enunciado, y por eso la caja desliza.\n",
          consejo:
            "En un plano inclinado, la normal nunca es igual al peso salvo que el ángulo sea cero. Dibuja el diagrama y busca siempre la componente perpendicular antes de escribir cualquier fórmula de fricción.",
        },
        {
          objetivo:
            "Aplicar la fuerza que mantiene el movimiento circular eligiendo la versión de la fórmula que corresponde a los datos dados.",
          teoria:
            "La fuerza centrípeta es el caso donde la segunda ley de Newton se aplica con una aceleración que apunta siempre al centro. Entender por qué aparece es la clave, porque evita tratarla como un tipo de fuerza misterioso.\n" +
            "## No es una fuerza nueva\n" +
            "La fuerza centrípeta es el nombre que se le da a la fuerza neta cuando el resultado es una aceleración dirigida hacia el centro. No aparece en el diagrama de cuerpo libre de un cuerpo en movimiento circular uniforme, porque la única fuerza real es la que produce el giro.\n" +
            "- En un objeto atado a una cuerda y describiendo un círculo horizontal, la fuerza real es la tensión de la cuerda, y por eso debe apuntar hacia el centro.\n" +
            "- En un auto en una curva, la fuerza real es la fricción lateral entre neumáticos y asfalto, y su dirección es hacia el interior de la curva.\n" +
            "- En un satélite, la fuerza real es la gravedad, que apunta al centro de la Tierra, y por eso los satélites caen alrededor en lugar de caer al suelo.\n" +
            "- En la órbita, la velocidad apunta tangente a la trayectoria, y la aceleración apunta al centro. Si desapareciera la gravedad, el satélite saldría en línea recta con la velocidad que tenía. Eso es lo que es una órbita: caída continua alrededor de la Tierra.\n" +
            "## Las dos formas de la fórmula\n" +
            "Con la rapidez lineal v y el radio r, la aceleración centrípeta es v²/r. Con la rapidez angular ω, es ω² · r. Ambas son la misma ley, y se eligen según el dato que brinde el enunciado.\n" +
            "La fuerza que la produce es F = m · a, o sea m·v²/r o m·ω²·r. Nótese que la aceleración aumenta con el radio si se mantiene ω, y disminuye con el radio si se mantiene v. Esa diferencia explica por qué las curvas de radio grande son más cómodas a velocidad moderada, y por qué un autódromo con radios amplios permite curvas más rápidas.\n" +
            "##-banked curves? Better: Tres casos que se preguntan\n" +
            "- **Radio pequeño y misma velocidad**: la aceleración es enorme y la fuerza necesaria también. Es el caso peligroso.\n" +
            "- **Misma velocidad y radio grande**: la fuerza baja a la cuarta parte si el radio se duplica, porque a = v²/r. ese dato conviene memorizarlo.\n" +
            "- **Periódico dado**: se usa a = 4π²r/T², y aparece en los problemas de satellites y de rotación de la Tierra.\n",
          ejemplo:
            "Un coche recorre una curva circular de radio 80 m a 12 m/s. ¿Cuál es su aceleración centrípeta, qué fuerza lateral exerts sobre un auto de 1300 kg, y qué radio necesitaría para reducir esa aceleración a la mitad a la misma rapidez?\n" +
            "## Método 1: aceleración y fuerza con la vía de la rapidez\n" +
            "- Primero: la aceleración centrípeta es v²/r = 12²/80 = 144/80 = 1,8 m/s².\n" +
            "- Segundo: la fuerza lateral que exerts es m·a = 1300 · 1,8 = 2340 N, y es la fricción entre neumáticos y asfalto, dirigida hacia el centro de la curva.\n" +
            "## Método 2: rehacerlo con la rapidez angular\n" +
            "- Tercero: la rapidez angular es ω = v/r = 12/80 = 0,15 rad/s.\n" +
            "- Cuarto: con la segunda forma, a = ω² · r = 0,0225 · 80 = 1,8 m/s². La misma aceleración por el otro camino.\n" +
            "## Método 3: buscar el radio que reduce la aceleración\n" +
            "- Quinto: quiero la mitad de 1,8, o sea 0,9 m/s², con la misma rapidez de 12 m/s.\n" +
            "- Sexto: de v²/r = 0,9 despejo r = 144/0,9 = 160 m. El radio debe duplicarse, y tiene sentido: reducir a la mitad la aceleración exige duplicar el radio.\n" +
            "> El resultado útil es la proporción, no el 1,8. Duplicar el radio divide por cuatro la fuerza lateral, y eso explica por qué las autopistas tienen radios tan amplios en sus curvas.\n",
          consejo:
            "Si el enunciado da el periodo y el radio, usa directamente a = 4π²r/T². Si da la rapidez lineal, v²/r es más rápida y evita pasos intermedios.",
        }
      ],
    },
    {
      titulo: "Módulo 3 · Estática y equilibrio",
      lecciones: [
        {
          objetivo:
            "Calcular el giro producido por una fuerza con M = F·d comprobando unidades y verificando el resultado con un segundo camino de cálculo.",
          teoria:
            "El momento de una fuerza, o torque, mide la capacidad de una fuerza para girar un cuerpo alrededor de un punto. Es la idea que separa la dinámica de la estática, porque mientras la segunda ley controla el movimiento, el momento controla el giro.\n" +
            "## La definición y su lectura\n" +
            "M = F · d, donde d es la distancia perpendicular entre la línea de acción de la fuerza y el eje de giro. La palabra \"perpendicular\" es la clave: solo la componente de la fuerza que apunta hacia el eje produce giro. Si empujas un palo de manera paralela a él, no lo giras aunque la fuerza sea enorme.\n" +
            "Eso se expresa con la fórmula completa, M = F · d · sen θ, donde θ es el ángulo entre el vector fuerza y el brazo de palanca. Tres casos a memorizar:\n" +
            "- La fuerza perpendicular al brazo, θ igual a 90 grados, da el momento máximo, M = F · d.\n" +
            "- La fuerza paralela al brazo, θ igual a 0 grados, no produce giro.\n" +
            "- Una fuerza a 45 grados produce un momento igual a F · d · 0,707.\n" +
            "## Sentido y signo\n" +
            "El momento tiene sentido horario o antihorario, y en el cálculo con signo se toma positivo en un sentido y negativo en el otro. Es lo que permite decir que un cuerpo está en equilibrio de rotación cuando el momento total es cero. En el sistema de referencia más usado, se toma positivo antihorario.\n" +
            "## El momento no depende del punto\n" +
            "Un detalle que se explora en los ejercicios de este módulo: el momento de una fuerza cambia si se mueve el punto de referencia, aunque la misma fuerza siga idéntica. Por eso el momento no es una propiedad de la fuerza, sino de la fuerza en relación con un eje. En cambio, la fuerza neta sí es la misma desde cualquier punto.\n" +
            "Ejemplo para entenderlo: una fuerza de 10 N aplicada a 2 m del pivote da 20 N·m. Si se aplica a 4 m, da 40 N·m, con la misma fuerza. Lo que cambia no es la fuerza, sino la distancia al eje.\n" +
            "## Potencia y momento\n" +
            "La potencia mecánica es la rapidez con que se realiza trabajo, y P = W/t. Pero cuando se trata de rotación, la potencia se escribe P = M · ω, con el momento y la rapidez angular. Esa igualdad tiene una lectura útil: para entregar la misma potencia manteniendo una carga en rotación, basta con reducir el momento y aumentar la velocidad angular. Por eso un motor que da un par grande a baja velocidad no es necesariamente más potente.\n",
          ejemplo:
            "Una puerta de 1,1 m de ancho y 20 kg se abre empujando en el borde con una fuerza de 30 N en ángulo de 60 grados respecto de la hoja. ¿Qué momento se aplica en la bisagra y cuál es el mínimo valor de fuerza que produce el mismo momento si el empuje es perpendicular?\n" +
            "## Método 1: usar la fórmula completa\n" +
            "- Primero: el momento es F · d · sen θ = 30 · 1,1 · sen 60 grados.\n" +
            "- Segundo: sen 60 vale 0,866, así que M = 30 · 1,1 · 0,866 = 28,6 N·m, en sentido antihorario si se empuja hacia fuera.\n" +
            "- Tercero: obsérvese que el momento es menor que 33 N·m, que sería el valor con un empuje perpendicular, porque parte de la fuerza se pierde en comprimir la puerta contra el marco.\n" +
            "## Método 2: descomponer la fuerza primero\n" +
            "- Cuarto: solo la componente perpendicular a la hoja produce giro. Esa componente es 30 · sen 60 = 26 N.\n" +
            "- Quinto: el momento es esa componente por el brazo, 26 · 1,1 = 28,6 N·m. El resultado coincide exactamente con el método anterior.\n" +
            "## Método 3: hallar la fuerza mínima\n" +
            "- Sexto: para el mismo momento con empuje perpendicular, la fórmula se reduce a M = F · d, porque el seno de 90 vale 1.\n" +
            "- Séptimo: despejando, F = 28,6 entre 1,1 = 26 N. Coincide con la componente del método 2, y tiene sentido: la fuerza mínima es justamente la componente útil.\n" +
            "> El resultado que hay que retener es que el momento nunca supera F · d. Si en un ejercicio aparece un momento mayor que el producto de la fuerza por la distancia, el error está en el seno, no en la cuenta.\n",
          consejo:
            "Busca siempre la distancia perpendicular, no la distancia a lo largo del brazo. Medir mal la perpendicular es el error que más aparece en este tema y cambia el resultado por un factor del seno del ángulo.",
        },
        {
          objetivo:
            "Aplicar las condiciones de equilibrio de traslación y rotación eligiendo la versión de la fórmula que corresponde a los datos dados.",
          teoria:
            "Un cuerpo está en equilibrio cuando no acelera, ni en traslación ni en rotación. Eso son dos condiciones independientes, y confundirlas es el error más común del módulo.\n" +
            "## Las dos condiciones\n" +
            "- **Equilibrio de traslación**: la fuerza neta es cero. Todos los objetos en reposo sobre una mesa lo cumplen, aunque estén a punto de caerse si se retira la mesa.\n" +
            "- **Equilibrio de rotación**: el momento total alrededor de cualquier eje es cero. Es la que se olvida: un objeto puede estar quieto y aun así girar, y un objeto puede no girar y estar acelerando.\n" +
            "La diferencia entre ambos se ve en un ejemplo: un libro apoyado vertical contra una pared no se mueve y por tanto está en equilibrio de traslación, pero si el ángulo es pequeño tenderá a caer, lo cual indica que el momento de la gravedad alrededor de la base no está equilibrado por ninguna otra fuerza. La segunda condición es la que detecta ese peligro.\n" +
            "## Cómo se plantea\n" +
            "El procedimiento tiene cuatro pasos que conviene repetir siempre:\n" +
            "1. Dibujar el diagrama de cuerpo libre con todas las fuerzas.\n" +
            "2. Elegir ejes y origen, y declarar positivo cada eje.\n" +
            "3. Escribir la ecuación de fuerzas por eje: la suma en cada eje vale cero.\n" +
            "4. Escribir la ecuación de momentos alrededor de un punto, tomando el signo del giro.\n" +
            "Un detalle que ahorra mucho tiempo: los momentos de las fuerzas cuya línea de acción pasa por el punto elegido son cero, porque su brazo es cero. Por eso se elige como origen el punto donde se cruzan las fuerzas conocidas, normalmente el punto de apoyo o de suspensión.\n" +
            "## Casos de una fuerza\n" +
            "- **Equilibrio de una fuerza**: una sola fuerza no puede estar en equilibrio, porque su momento alrededor de su propio punto de aplicación es cero pero su fuerza neta no lo es. Todo equilibrio requiere al menos dos fuerzas.\n" +
            "- **Equilibrio de dos fuerzas**: solo es posible si son iguales, opuestas y colineales, como un colgado de una cuerda o un peso sobre una superficie horizontal sin fricción. Si no son colineales, generan un par y el cuerpo gira.\n" +
            "- **Equilibrio de tres fuerzas**: si tres fuerzas no concurrentes están en equilibrio, sus líneas de acción deben cortarse en un mismo punto. Esa es la condición del teorema de las tres fuerzas, útil cuando hay que encontrar una fuerza o una distancia desconocida.\n",
          ejemplo:
            "Una escalera de 4 m de largo y masa de 20 kg se apoya contra una pared vertical. Su base está a 3 m de la pared y su parte superior a 2,5 m de altura. ¿Cuál es la fuerza de la pared sobre la escalera y cuál es el ángulo con el suelo? Use g = 9,8 m/s².\n" +
            "## Método 1: geometría y equilibrio de traslación\n" +
            "- Primero: la altura de la pared y la base forman un triángulo rectángulo de catetos 3 y 2,5, con hipotenusa 4. La longitud encaja con la escalera.\n" +
            "- Segundo: el peso es 20 · 9,8 = 196 N, aplicado en el punto medio de la escalera, a 2 m de la base.\n" +
            "- Tercero: la base no se mueve, así que la normal del suelo vale 196 N. La única fuerza horizontal es la reacción de la pared, y por tanto la normal del suelo la equilibra por completo.\n" +
            "## Método 2: equilibrio de rotación alrededor de la base\n" +
            "- Cuarto: tomo momentos con origen en la base, donde el momento de la normal del suelo es cero.\n" +
            "- Quinto: el peso produce un momento de 196 · 2 = 392 N·m, que intenta tumbar la escalera.\n" +
            "- Sexto: la reacción de la pared, perpendicular a la pared y horizontal, tiene un brazo igual a la altura, 2,5 m. Su momento es F · 2,5, y debe igualar 392.\n" +
            "- Séptimo: de ahí F = 392 entre 2,5 = 156,8 N.\n" +
            "## Método 3: el ángulo y una comprobación\n" +
            "- Octavo: el ángulo con el suelo es el arcosen de 2,5 entre 4 = 38,7 grados, y el arco de la tg de 3/2,5 confirma los 50,2 grados complementarios.\n" +
            "- Noveno: compruebo que la normal del suelo es exactamente 196 N, porque la reacción de la pared es horizontal y no tiene componente vertical.\n" +
            "> El dato útil es que la normal del suelo iguala al peso solo porque la otra fuerza es horizontal. Si la pared estuviera inclinada, habría que descomponer y la normal ya no valdría 196 N.\n",
          consejo:
            "Toma los momentos alrededor del punto de apoyo, no de un punto cualquiera. Ahí se anulan los momentos desconocidos y te quedas con una sola ecuación en lugar de tres.",
        },
        {
          objetivo:
            "Usar la ley de la palanca para amplificar fuerzas y saber cuándo aplicar cada una, con el criterio de elección explícito.",
          teoria:
            "Las máquinas simples no quitan trabajo: lo transforman. Todo el módulo se puede resumir en una frase, y esa frase es la que resuelve cualquier ejercicio del tema.\n" +
            "## La idea central\n" +
            "En cualquier máquina simple se cumple trabajo de entrada igual a trabajo de salida. Si multiplicas la fuerza por el recorrido que haces, obtienes la fuerza multiplicada por el recorrido que la máquina impone. La diferencia está en el recorrido y en la fuerza, nunca en el trabajo.\n" +
            "La otra mitad de la idea es que la fuerza grande implica recorrido corto. En una palanca que multiplica la fuerza por diez, el punto de aplicación se mueve la décima parte. Esa es la razón por la que una rampa larga permite subir una carga pesada con poco esfuerzo.\n" +
            "## Catálogo de las seis máquinas simples\n" +
            "1. **Palanca**: barra rígida que gira sobre un fulcro. Tres clases según dónde esté el fulcro, la fuerza y la carga.\n" +
            "2. **Rueda y eje**: la rueda grande da ventaja por recorrido, y el eje pequeño gana fuerza.\n" +
            "3. **Polea fija**: cambia solo la dirección de la fuerza. La ventaja mecánica es 1, y por eso no ahorra esfuerzo, solo posición.\n" +
            "4. **Polea móvil**: una de las poleas se mueve con la carga. La ventaja mecánica es 2, porque la carga se reparte entre dos tramos de cuerda.\n" +
            "5. **Cuña**: convierte fuerza en presión, es la idea detrás del cuchillo y del clavo.\n" +
            "6. **Tornillo**: una cuña enrollada. Multiplica la fuerza por la longitud del recorrido, y por eso aprieta tanto.\n" +
            "## La palanca en detalle\n" +
            "En una palanca se cumple F · d fuerza = P · d peso, donde las dos distancias se miden desde el fulcro. De ahí sale la ventaja mecánica, que es la razón entre el brazo de la fuerza y el brazo de la carga.\n" +
            "- **Palanca de primer género**: fulcro entre la fuerza y la carga, como las tijeras. Es la de mayor ventaja mecánica.\n" +
            "- **Palanca de segundo género**: carga entre el fulcro y la fuerza, como el carretillo. Siempre tiene ventaja mayor que 1.\n" +
            "- **Palanca de tercer género**: fuerza entre el fulcro y la carga, como las pinzas de depilar. Su ventaja es menor que 1, y a cambio da mayor velocidad y precisión.\n" +
            "Que la ventaja sea menor que 1 no es un defecto: significa que se gana en velocidad y no en fuerza, que es exactamente lo que necesita una pinza de uñas.\n",
          ejemplo:
            "Una barra homogenous de 2 m se apoya en un fulcro situado a 0,5 m del extremo izquierdo. En el extremo derecho se coloca una carga de 40 kg y en el extremo izquierdo se aplica la fuerza. ¿Qué fuerza se necesita y cuál es la ventaja mecánica?\n" +
            "## Método 1: medir los brazos\n" +
            "- Primero: el fulcro está a 0,5 m del extremo izquierdo, de modo que la distancia hasta el extremo derecho es 2 − 0,5 = 1,5 m.\n" +
            "- Segundo: el brazo de la carga es 1,5 m y el brazo de la fuerza es 0,5 m. Es una palanca de primer género, porque el fulcro está entre los dos puntos.\n" +
            "- Tercero: el peso de la carga es 40 · 9,8 = 392 N.\n" +
            "## Método 2: aplicar el equilibrio de momentos\n" +
            "- Cuarto: el momento de la fuerza debe igualar el momento del peso: F · 0,5 = 392 · 1,5.\n" +
            "- Quinto: de ahí F · 0,5 = 588, de donde F = 1176 N.\n" +
            "- Sexto: la ventaja mecánica es 1176/392 = 3, y también se obtiene directo como 1,5/0,5.\n" +
            "## Método 3: verificar con el trabajo\n" +
            "- Séptimo: si la fuerza baja 1 m, el peso sube 0,5 m, porque el recorrido se invierte con la misma proporción.\n" +
            "- Octavo: el trabajo por los dos lados es el mismo, 1176 N · 1 m = 1176 J y 392 N · 3 m = 1176 J. Ninguna máquina simple crea trabajo.\n" +
            "- Noveno: la cuenta de trabajo confirma la razón inversa de recorridos.\n" +
            "> La ventaja mecánica de 3 significa que la fuerza se triplica y el recorrido se reduce a la tercera parte. Si un ejercicio pide esfuerzo total y no solo fuerza, ese es el dato que falta.\n",
          consejo:
            "Antes de hacer números, identifica dónde está el fulcro y mide los dos brazos desde ahí. Casi todos los errores de palancas son errores de distancia mal medida.",
        },
        {
          objetivo:
            "Encontrar el punto donde se concentra el peso de un cuerpo con un método que se pueda repetir y comprobar.",
          teoria:
            "El centro de gravedad es el punto donde se puede imaginar concentrada toda la masa de un cuerpo para analizar su equilibrio. Es una idealización útil, y su posición explica por qué las cosas se vuelcan o no.\n" +
            "## Definición y cálculo\n" +
            "En un cuerpo uniforme, el centro de gravedad coincide con el centro geométrico: el centro de un rectángulo está a la mitad de cada lado, y el de un disco está en el centro. Cuando el cuerpo no es uniforme, hay que calcularlo, y el método es siempre el mismo:\n" +
            "1. Se descompone el cuerpo en piezas simples de masa conocida.\n" +
            "2. Se ubica el centro de gravedad de cada pieza.\n" +
            "3. Se calcula el promedio ponderado: la posición total es la suma de las posiciones por sus masas, dividida entre la suma de las masas.\n" +
            "Ese promedio ponderado explica por qué un tanque lleno y uno vacío tienen el mismo centro, mientras que un auto cargado lleva el suyo más abajo, cerca del eje trasero, que es donde se soporta la carga.\n" +
            "## Altura y pendulum\n" +
            "La altura del centro de gravedad es lo que realmente importa para la estabilidad, no solo su posición horizontal. Un objeto con la base ancha y el centro bajo es difícil de tumbar, mientras que uno con la base estrecha y el centro alto se vuelca con facilidad.\n" +
            "Un objeto con la base ancha y el centro bajo es difícil de tumbar, mientras que uno con la base estrecha y el centro alto se vuelca con facilidad.\n" +
            "Las personas ensanchan las piernas cuando cargan peso precisamente por eso: ensanchan la base de sustentación.\n" +
            "## Aplicación: suspendiendo un cuerpo\n" +
            "Un cuerpo colgado de un solo punto queda en equilibrio cuando el centro de gravedad queda exactamente por debajo del punto de suspensión. Si no, gira hasta que lo alcanza. Esa es la razón por la que un colgado con el gancho torcido se endereza solo: el peso lo hace girar.\n" +
            "Para encontrar el centro de gravedad de una lámina irregular, se cuelga en dos puntos distintos y se traza la vertical desde cada suspensión. La intersección de esas dos rectas es el centro.\n",
          ejemplo:
            "Una barra de 3 m tiene una masa de 8 kg en el extremo izquierdo, 12 kg a 1,2 m del mismo extremo y ninguna más. ¿Dónde está el centro de gravedad y qué pasa si se apoya la barra en un punto único a 1,8 m del extremo izquierdo?\n" +
            "## Método 1: promedio ponderado\n" +
            "- Primero: tomo el extremo izquierdo como origen y como cero la coordenada.\n" +
            "- Segundo: la suma de las masas es 8 + 12 = 20 kg.\n" +
            "- Tercero: la suma de los momentos es 8 · 0 + 12 · 1,2 = 14,4 kg·m.\n" +
            "- Cuarto: el centro de gravedad está en 14,4 entre 20 = 0,72 m del extremo izquierdo.\n" +
            "## Método 2: por reducción de masas\n" +
            "- Quinto: tomo los 20 kg como una masa única en el punto medio, que está a 6 entre 20 = 0,3 m. Esa es una masa equivalente a dos de 10 kg.\n" +
            "- Sexto: la barra de 2 m aporta 8 kg repartidos uniformemente, con su centro en 1 m. Su momento es 8 · 1 = 8 kg·m, y con la masa reducida el total queda en 0,72 m. Coincide con el método anterior.\n" +
            "## Método 3: el apoyo de un solo punto\n" +
            "- Séptimo: el apoyo está a 1,8 m, es decir a la derecha del centro de gravedad, que se encuentra en 0,72 m.\n" +
            "- Octavo: el peso produce un momento que hace girar la barra hacia la derecha, y como el centro de gravedad queda a la derecha del apoyo, la barra cae por ese lado.\n" +
            "- Noveno: para que la barra quedara en equilibrio con ese apoyo, el centro de gravedad tendría que estar exactamente sobre los 1,8 m, y eso exigiría mover la carga de 12 kg hacia la derecha.\n" +
            "> El resultado clave es que la barra no es simétrica, y por eso un apoyo en el punto medio tampoco serviría: el centro de gravedad quedaría a la izquierda de los 1,5 m y la barra caería hacia ese lado.\n",
          consejo:
            "Siempre que encuentres el centro de gravedad, compara su posición con el punto de apoyo. Si no coinciden, el cuerpo gira. Esa comparación resuelve la mayor parte de los problemas de equilibrio.",
        },
        {
          objetivo:
            "Determinar cuándo un cuerpo se vuelca o permanece estable. Practicarás el paso a paso y el control de errores más frecuentes.",
          teoria:
            "Un cuerpo es estable si al inclinarlo ligeramente vuelve a su posición, y es inestable si al inclinarlo se sigue cayendo. Lo que decide es una sola comparación entre el peso y el punto de apoyo.\n" +
            "## La condición de estabilidad\n" +
            "Toma el centro de gravedad del cuerpo y deja caer una vertical desde él hasta el suelo. Compárala con la base de sustentación:\n" +
            "- Si la vertical cae dentro de la base, el cuerpo es estable. El peso produce un momento que lo devuelve, porque su línea de acción cae del lado correcto del apoyo.\n" +
            "- Si la vertical cae en el borde exacto de la base, el cuerpo está en equilibrio indiferente, y basta un empujón mínimo para tumbarlo.\n" +
            "- Si la vertical cae fuera de la base, el cuerpo es inestable y se vuelca.\n" +
            "Este criterio vale para cualquier orientación, y es la razón de que una botella con base ancha sea difícil de tumbar y de que una caja apoyada en un solo canto vuelca en cuanto se inclina, porque la vertical sale de la base de inmediato.\n" +
            "## Factores que aumentan la estabilidad\n" +
            "- **Base más ancha**: amplía el intervalo en el que la vertical sigue cayendo dentro.\n" +
            "- **Centro de gravedad más bajo**: acerca la vertical al suelo y reduce la inclinación necesaria para perder estabilidad.\n" +
            "- **Peso mayor**: no cambia la posición de la vertical, pero aumenta el momento que hay que vencer para inclinarlo. Por eso un contenedor vacío es más fácil de tumbar que uno lleno, aunque ambos caigan de la misma manera.\n" +
            "- **Colocarse hacia el lado opuesto al que se quiere inclinar**: una persona que carga una bolsa se inclina hacia el lado contrario para no perder equilibrio.\n" +
            "## El caso del vehículo\n" +
            "Un auto vuelca cuando la fuerza centrípeta en una curva supera la capacidad de apoyo de los neumáticos, y eso ocurre cuando la velocidad es alta o el radio es pequeño. \n",
          ejemplo:
            "Una caja de 40 cm de base y 60 cm de altura se inclina poco a poco. ¿Cuál es el ángulo máximo de inclinación sin que se vuelque, y qué pasaría si su masa se redujera a la mitad?\n" +
            "## Método 1: geometría del punto de vuelque\n" +
            "- Primero: mientras la caja no se desliza, el centro de gravedad está en el centro de la base, a 30 cm de altura.\n" +
            "- Segundo: la caja se vuelca cuando la vertical desde el centro de gravedad pasa por el borde de la base. Eso ocurre cuando la tangente del ángulo de inclinación es base entre altura.\n" +
            "- Tercero: la tangente del ángulo es 40 entre 60 = 0,667, y el arco de la tangente da unos 33,7 grados.\n" +
            "## Método 2: comprobar con el equilibrio de momentos\n" +
            "- Cuarto: en el instante crítico, el peso y la reacción de apoyo están sobre la misma vertical, la que pasa por el borde. Cualquier inclinación adicional hace que el momento del peso sea mayor y el de apoyo ya no pueda compensarlo.\n" +
            "- Quinto: la línea de acción del peso cae exactamente sobre el canto, y en ese instante el cuerpo está en equilibrio indiferente.\n" +
            "## Método 3: el efecto de la masa\n" +
            "- Sexto: si la caja estuviera vacía, la geometría no cambiaría: la base sigue midiendo 40 cm y la altura 60, así que el ángulo crítico sigue siendo 33,7 grados.\n" +
            "- Séptimo: la diferencia no está en si se vuelca, sino en la energía necesaria para hacerlo. Con menor masa, hace falta menos impulso, y por eso una caja vacía se tumba con un empujón más leve.\n" +
            "- Octavo: obsérvese que la masa no aparece en la fórmula del ángulo, y por eso el resultado es válido para cualquier contenido.\n" +
            "> El resultado que hay que guardar es que la estabilidad depende de la forma y no del peso. Cambiar la masa no cambia el ángulo de vuelque, pero sí la fuerza necesaria para provocarlo.\n",
          consejo:
            "Antes de cualquier cálculo, traza la vertical desde el centro de gravedad hasta el suelo. Si cae fuera de la base, el cuerpo se vuelca y no hay nada que calcular.",
        }
      ],
    },
    {
      titulo: "Módulo 4 · Energía y ondas",
      lecciones: [
        {
          objetivo:
            "Calcular trabajo (W = F·d·cos θ) y potencia (P = W/t) comprobando unidades y verificando el resultado con un segundo camino de cálculo.",
          teoria:
            "El trabajo mide la transferencia de energía que ocurre cuando una fuerza actúa mientras algo se desplaza. Es la primera vez que una fórmula de física conecta fuerza, distancia y energía, y esa conexión organiza todo el módulo.\n" +
            "## La definición y sus tres condiciones\n" +
            "W = F · d · cos θ, donde θ es el ángulo entre la fuerza y el desplazamiento. Las tres palabras que hay que leer en esa fórmula son:\n" +
            "- **Fuerza**: si vale cero, no hay trabajo, por muy grande que sea el desplazamiento.\n" +
            "- **Desplazamiento**: si vale cero, tampoco hay trabajo. Por eso un empuje vertical contra el suelo no mueve la caja y no hace trabajo.\n" +
            "- **Coseno del ángulo**: separa el caso útil del inútil. Coseno de 0 grados vale 1, y el trabajo es máximo; coseno de 90 grados vale cero, y el empuje es enteramente perpendicular; por encima de 90 grados el coseno es negativo, y el trabajo es negativo.\n" +
            "## Trabajo positivo, negativo y nulo\n" +
            "- **Positivo**: la fuerza tiene componente en el sentido del movimiento. Acelera al cuerpo, y la energía cinética aumenta. Ejemplo: empujar una bicicleta hacia adelante mientras rueda.\n" +
            "- **Negativo**: la fuerza se opone al movimiento. Frena al cuerpo, y la energía cinética disminuye. Ejemplo: los frenos, o la fricción.\n" +
            "- **Nulo**: la fuerza es perpendicular al movimiento, o no hay desplazamiento. Ejemplo: el peso de un bloque que se desliza horizontalmente.\n" +
            "Ese signo es la clave conceptual del curso: la energía no se crea ni se destruye, se transfiere. Un cuerpo que frena pierde energía cinética, y esa energía aparece en otro lado, casi siempre como calor.\n" +
            "## La potencia es la rapidez del trabajo\n" +
            "La potencia mide cuánto trabajo se hace por unidad de tiempo: P = W/t. Se expresa en vatios, y 1 vatio es 1 joule por segundo. La fórmula admite una lectura menos conocida, P = F · v, que se obtiene sustituyendo d = v · t, y que tiene una lectura interesante: si la fuerza y la rapidez se mantienen, la potencia es la misma. Un motor que entrega la misma potencia puede dar un par grande a baja velocidad o un par pequeño a alta velocidad.\n" +
            "Y esa es la razón de las transmisiones de un automóvil: bajan la velocidad para entregar un par mucho mayor en las subidas.\n" +
            "## Trabajo y energía\n" +
            "La utilidad del trabajo es que conecta con la energía cinética. El teorema trabajo-energía dice que el trabajo neto sobre un cuerpo es igual al cambio de su energía cinética:\n" +
            "- Trabajo total positivo, energía cinética aumenta.\n" +
            "- Trabajo total negativo, energía cinética disminuye.\n" +
            "- Trabajo total cero, la rapidez no cambia.\n" +
            "Esa igualdad es la que permite resolver problemas sin usar la segunda ley, y suele ser el camino más corto cuando el enunciado da velocidades y busca una distancia.\n",
          ejemplo:
            "Una persona empuja un escritorio de 40 kg a lo largo de 6 m del suelo con una fuerza de 200 N en la misma dirección del movimiento. La fricción es de 50 N. ¿Qué trabajo realiza la persona, cuál es el trabajo de la fricción y cuánto increase la energía cinética del escritorio?\n" +
            "## Método 1: el trabajo de cada fuerza por separado\n" +
            "- Primero: la persona empuja en el sentido del movimiento, así que el ángulo es 0 grados y el coseno vale 1. Su trabajo es 200 · 6 = 1200 J.\n" +
            "- Segundo: la fricción se opone al movimiento, de modo que su ángulo es 180 grados y su coseno vale menos uno. Su trabajo es 50 · 6 con el signo cambiado, es decir menos 300 J.\n" +
            "- Tercero: la gravedad y la normal no aportan trabajo, porque son perpendiculares al desplazamiento horizontal.\n" +
            "## Método 2: el trabajo neto\n" +
            "- Cuarto: el trabajo neto es la diferencia, 1200 menos 300 = 900 J.\n" +
            "- Quinto: por el teorema trabajo-energía, ese trabajo neto es igual al cambio de la energía cinética. El escritorio gana 900 J de energía cinética.\n" +
            "## Método 3: comprobarlo con la segunda ley\n" +
            "- Sexto: la fuerza neta es 200 − 50 = 150 N, y la aceleración es 150 entre 40 = 3,75 m/s².\n" +
            "- Séptimo: partiendo del reposo, la energía cinética final es un medio de m por v al cuadrado, y como v = a · t, el resultado coincide con los 900 J del método anterior.\n" +
            "- Octavo: la comprobación confirma que la suma de trabajos por fuerza da el mismo resultado que la fuerza neta aplicada al camino completo.\n" +
            "> El resultado a retener es que el trabajo de la fricción siempre resta. Declarar el signo de la fricción al principio evita el error más común: reportar 1500 J en lugar de 900 J.\n",
          consejo:
            "Antes de multiplicar, decide si la fuerza ayuda o estorba y anótalo. El signo del trabajo se decide con esa palabra, y no al final cuando ya hiciste la cuenta.",
        },
        {
          objetivo:
            "Distinguir y calcular las energías de movimiento y posición y saber cuándo aplicar cada una, con el criterio de elección explícito.",
          teoria:
            "La energía cinética y la potencial son las dos formas más básicas de guardar energía. Saber cuál se aplica y cómo se calcula resuelve la mitad de los problemas de física sin necesidad de introducir fuerzas.\"\n" +
            "## La energía cinética\n" +
            "E_c = ½ · m · v². La lectura importante es que depende del cuadrado de la velocidad, y por eso duplicar la masa no tiene el mismo efecto que duplicar la rapidez.\n" +
            "- Doble de masa, misma rapidez: la energía se duplica.\n" +
            "- Misma masa, doble de rapidez: la energía se cuadruplica.\n" +
            "- Cuadruplicar la rapidez multiplica por 16 la energía.\n" +
            "Esa desproporción explica por qué un accidente a 120 km/h libera muchísima más energía que uno a 60 km/h, y por eso los límites de velocidad no son arbitrarios.\n" +
            "## La energía potencial gravitatoria\n" +
            "E_p = m · g · h, donde h es la altura respecto de un nivel de referencia. La referencia es arbitraria y solo importa que se use en todos los términos del mismo problema: la energía potencial no tiene valor absoluto, tiene diferencia.\n" +
            "- Si el cuerpo sube, h aumenta y la energía potencial también.\n" +
            "- Si el cuerpo baja, h disminuye y la energía potencial se convierte en cinética.\n" +
            "El término g · h tiene unidades de energía por kilogramo, y por eso a veces conviene agruparlo: E_p = m · (g · h). Esa forma abre la puerta a entenderla como una masa multiplicada por una energía específica.\n" +
            "## Sumar o intercambiar\n" +
            "En un sistema sin fricción, la energía cinética y la potencial se intercambian sin perderse: E_c + E_p se mantiene constante. Ese es el principio de conservación de la energía, y la lección siguiente lo aplica.\n" +
            "- Si un cuerpo cae, la potencial baja y la cinética sube por la misma cantidad.\n" +
            "- Si un cuerpo sube con el motor apagado, la cinética baja y la potencial sube.\n" +
            "- Si sube con el motor encendido, la energía externa hace el trabajo y la suma aumenta.\n",
          ejemplo:
            "Una pelota de 0,5 kg se lanza hacia arriba a 20 m/s desde el suelo. ¿Qué altura máxima alcanza, cuál es su energía cinética inicial y cuánto vale su energía potencial en el punto más alto? Use g = 9,8 m/s².\n" +
            "## Método 1: por el teorema trabajo-energía\n" +
            "- Primero: en el punto más alto la rapidez es cero, de modo que toda la energía cinética inicial se convirtió en potencial.\n" +
            "- Segundo: la energía cinética inicial es un medio de 0,5 por 20 al cuadrado = 100 J.\n" +
            "- Tercero: igualo 100 J a m · g · h, es decir 100 = 0,5 · 9,8 · h, de donde h = 100 entre 4,9 = 20,4 metros.\n" +
            "## Método 2: por la cinemática\n" +
            "- Cuarto: con v al cuadrado = 0 menos 2 · 9,8 · h, despejo h = 400 entre 19,6 = 20,4 metros. El mismo valor por un camino que no usa energía.\n" +
            "- Quinto: en el punto más alto la energía cinética es cero y la potencial vale 0,5 · 9,8 · 20,4 = 100 J. La energía no se perdió, se mudó de sitio.\n" +
            "## Método 3: verificar el intercambio continuo\n" +
            "- Sexto: a mitad de camino, unos 10,2 m, la energía potencial es 50 J y la cinética también es 50 J. El reparto es exactamente a la mitad, lo cual confirma la simetría del tiro vertical.\n" +
            "- Séptimo: obsérvese que la masa desaparece al despejar la altura, y por eso el punto más alto no depende de la masa. Un resultado útil para resolver rápido.\n" +
            "> El dato que hay que guardar es que la altura máxima no depende de la masa. Se obtiene dividiendo la rapidez al cuadrado entre 2g, y eso resuelve el 90 % de los ítems de tiro vertical en tres operaciones.\n",
          consejo:
            "Fija siempre la referencia de altura antes de empezar, y úsala en todos los términos. Si mezclas niveles, las alturas se restan mal y el error no se ve hasta el final.",
        },
        {
          teoria:
            "El principio de conservación de la energía dice que en un sistema aislado la energía total no se crea ni se destruye, solo se transforma. Es la ley más útil de la física, porque permite resolver problemas donde las fuerzas son difíciles de conocer.\n" +
            "## El enunciado y sus condiciones\n" +
            "- **Energía mecánica**: la suma de energía cinética y potencial, E_m = E_c + E_p. Se conserva si solo actúan fuerzas conservativas, es decir la gravedad y los resortes, y no hay fricción.\n" +
            "- **Energía total**: incluye además la térmica, la química y la eléctrica. Siempre se conserva, porque el calor no desaparece: se convierte en energía térmica.\n" +
            "La distinción importa. Un cuerpo que cae por un plano inclinado con rozamiento pierde energía mecánica, y esa diferencia aparece como calor. La cuenta no falla: lo que se pierde en un término aparece en otro.\n" +
            "## El balance de energía\n" +
            "Cuando sí hay fuerzas externas, la energía mecánica cambia por el trabajo de esas fuerzas. La forma general es:\n" +
            "E_m final − E_m inicial = W externo\n" +
            "Si además hay fricción, ese trabajo se resta y se contabiliza como energía térmica disipada. Esa ecuación con signo resuelve cualquier problema del módulo y evita tener que dibujar fuerzas.\n" +
            "## Cuándo usar energía y cuándo usar fuerzas\n" +
            "- Si el enunciado da alturas y velocidades, y busca otra velocidad o altura, energía es más rápido.\n" +
            "- Si el enunciado da fuerzas y fricciones, y busca una aceleración o un tiempo, la segunda ley es más directa.\n" +
            "- Si mezclan ambos datos, se puede llegar por las dos rutas y comparar, que es la mejor forma de verificar.\n" +
            "Un detalle práctico: la conservación de la energía no requiere conocer la masa en muchos casos, porque la masa se cancela al dividir. Eso acorta el cálculo y reduce la posibilidad de errores de unidades.\n",
          ejemplo:
            "Un bloque de 2 kg está en reposo a 5 m de altura sobre el suelo. Se suelta y llega al suelo con 8 m/s de rapidez. ¿Qué porcentaje de su energía mecánica se perdió y a qué se debió? Use g = 9,8 m/s².\n" +
            "## Método 1: comparar la energía antes y después\n" +
            "- Primero: la energía mecánica inicial es solo potencial, 2 · 9,8 · 5 = 98 J.\n" +
            "- Segundo: la energía mecánica final es solo cinética, un medio de 2 · 64 = 64 J.\n" +
            "- Tercero: la diferencia es 98 − 64 = 34 J, y el porcentaje perdido es 34 entre 98, es decir un 34,7 %.\n" +
            "## Método 2: identificar qué fuerza hizo ese trabajo\n" +
            "- Cuarto: el trabajo de la fricción sobre el bloque es negativo y explica toda la diferencia. La energía disipada de 34 J es la que levanta la temperatura del bloque y del suelo.\n" +
            "- Quinto: obsérvese que la gravedad sí hizo trabajo, y sin embargo la energía mecánica se redujo, porque la fricción hizo más trabajo negativo que el positivo de la gravedad.\n" +
            "- Sexto: la altura perdida fue de 34 entre 19,6 = 1,73 m equivalentes. Es decir, el bloque llegó al suelo como si hubiera caído desde 3,27 m en vez de 5 m.\n" +
            "## Método 3: verificar que la energía total sí se conserva\n" +
            "- Séptimo: energía total inicial, 98 J. Final, 64 J mecánicos más 34 J térmicos. La suma sigue siendo 98 J, y por eso el principio no se rompió: la energía cambió de forma.\n" +
            "- Octavo: esa es la diferencia entre decir que se perdió energía y decir que se convirtió en calor. La primera frase es falsa.\n" +
            "> El resultado a retener es que el 34,7 % no desapareció: está en el calor. Ningún proceso físico destruye energía, y esa es la razón de que el principio sea una ley y no una aproximación.\n",
          consejo:
            "Cuando un problema con fricción dé resultados que no cuadran, no corrijas el enunciado: revisa si estás contando la energía térmica. Suele faltar ese término.",
        },
        {
          objetivo:
            "Relacionar longitud de onda, frecuencia y velocidad de una onda. Practicarás el paso a paso y el control de errores más frecuentes.",
          teoria:
            "Una onda transporta energía sin transportar materia. Entender esa frase y las tres cantidades que la describen es todo el contenido del tema.\n" +
            "## Las tres magnitudes que definen una onda\n" +
            "- **Longitud de onda** (λ): la distancia entre dos puntos consecutivos que están en la misma fase, es decir dos crestas o dos valles. Se mide en metros.\n" +
            "- **Frecuencia** (f): cuántos ciclos pasan por un punto en un segundo. Se mide en hercios, y 1 Hz es un ciclo por segundo.\n" +
            "- **Amplitud**: la altura máxima respecto de la posición de equilibrio. No aparece en la relación de propagación, pero sí determina la energía que transporta la onda.\n" +
            "La relación que las conecta es v = λ · f, y se lee con naturalidad: la rapidez es el número de ciclos que pasan por segundo multiplicado por la distancia entre ciclos.\n" +
            "## Ondas transversales y longitudinales\n" +
            "- **Transversal**: la vibración es perpendicular a la propagación. Una cuerda que se agita, la luz, las olas. crestas y valles.\n" +
            "- **Longitudinal**: la vibración es paralela a la propagación. El sonido en el aire, un resorte que se comprime, un pistón. Las zonas donde el medio se juntas se llaman de compresión y donde se separa, de rareza.\n" +
            "La diferencia visible es que en la onda transversal se ve la forma de onda, y en la longitudinal no: lo que se ve son las variaciones de densidad.\n" +
            "## Efecto Doppler\n" +
            "Cuando el emisor y el receptor se mueven uno respecto del otro, la frecuencia recibida cambia:\n" +
            "- Fuente acercándose o receptor acercándose: la frecuencia aumenta y el tono suena más agudo.\n" +
            "- Fuente alejándose o receptor alejándose: la frecuencia disminuye y el tono suena más grave.\n" +
            "Ese fenómeno se usa para medir la velocidad de un vehículo con un radar, y para saber que una ambulancia se acerca sin verla. La explicación es que la fuente comprime o estira las ondas que emite, igual que cuando se aplastan los círculos de una piedra en un estanque.\n",
          ejemplo:
            "Una fuente de sonido de 440 Hz emite hacia un observador. Si la fuente se mueve a 30 m/s hacia el observador en aire donde v suona a 340 m/s, ¿qué frecuencia recibe el observador? Y si en cambio se mueve alejándose a la misma rapidez, ¿qué frecuencia recibe?\n" +
            "## Método 1: aplicar la fórmula del efecto Doppler\n" +
            "- Primero: la fórmula es f' = f · (v ± u) entre v, donde u es la rapidez de la fuente y el signo va más si se acerca y menos si se aleja.\n" +
            "- Segundo: acercándose, f' = 440 · (340 + 30) entre 340 = 440 · 370/340 = 440 · 1,088 = 478,8 Hz.\n" +
            "- Tercero: el tono suena más agudo, como corresponde a una fuente que se aproxima.\n" +
            "## Método 2: razonar con la longitud de onda\n" +
            "- Cuarto: si la fuente se acerca, emite crestas más juntas. La nueva longitud de onda es la original menos el avance en un periodo: 340/440 − 30/440 = 0,705 metros.\n" +
            "- Quinto: la frecuencia que recibe el observador es la rapidez del sonido dividida por esa nueva longitud, 340 entre 0,705 = 482 Hz. Coincide con el método anterior, y la diferencia pequeña se debe al redondeo intermedio.\n" +
            "## Método 3: el caso alejándose\n" +
            "- Sexto: alejándose, el signo cambia y f' = 440 · 310/340 = 401 Hz, que es más grave que la original.\n" +
            "- Séptimo: obsérvese la asimetría. Acercarse a 30 y alejarse a 30 no devuelve la frecuencia original, y esa asimetría es característica del efecto Doppler.\n" +
            "> El resultado a retener es la dirección del cambio: acercarse eleva el tono, alejarse lo baja. Y el truco conceptual es que la fuente comprime las ondas cuando se acerca y las estira cuando se aleja.\n",
          consejo:
            "Antes de operar, decide si la fuente se acerca o se aleja. El signo es el único punto donde se puede fallar, y el resto es aritmética directa.",
        },
        {
          objetivo:
            "Comparar la propagación del sonido y la luz en distintos medios y saber cuándo aplicar cada una, con el criterio de elección explícito.",
          teoria:
            "El sonido y la luz se propagan como ondas, pero sus comportamientos son tan distintos que se usan para explicar la diferencia entre medio material y vacío. Ese contraste es el corazón de la lección.\n" +
            "## El sonido necesita un medio\n" +
            "El sonido es una onda mecánica: para propagarse necesita partículas que viban, y eso implica un medio material. En el aire viaja porque las moléculas se empujan unas a otras y transmiten la perturbación. En el agua es más rápido que en el aire, y en el sólido todavía más rápido, porque las partículas están más unidas y la perturbación se transmite con menos demora.\n" +
            "- Aire, unos 340 m/s.\n" +
            "- Agua, unos 1500 m/s.\n" +
            "- Acero, unos 5000 m/s.\n" +
            "En el vacío no hay sonido, y por eso los astronautas en el espacio no se oyen entre sí a menos que usen un sistema de intercomunicación por radio.\n" +
            "## La luz no necesita medio\n" +
            "La luz es una onda electromagnética, y un campo eléctrico y uno magnético que se propagan juntos sin ningún soporte material. Por eso cruza el vacío a 300 000 km/s, la rapidez más alta conocida.\n" +
            "- Cambia de rapidez al entrar en un medio, porque las partículas interactúan con el campo. Por eso la luz se desvía al pasar del aire al agua o al vidrio.\n" +
            "- La luz visible va de unos 400 a 700 nanómetros de longitud de onda, y la frecuencia entonces es de 4,3 a 7,5 · 10¹⁴ hercios.\n" +
            "- Al bajar al agua, la frecuencia no cambia, pero la longitud de onda disminuye. Eso tiene una consecuencia útil: el color no cambia al entrar en el agua, porque el color es la frecuencia, y la frecuencia se conserva en el cambio de medio.\n" +
            "## La dispersión\n" +
            "Cuando un haz de luz blanca atraviesa un prisma, cada color se desvía de forma distinta. La explicación está en la fórmula v = λ · f: si la rapidez depende del medio, y en un medio determinado la rapidez depende un poco de la frecuencia, entonces cada color viaja a una rapidez levemente distinta. El resultado es el arcoíris, y es también la razón de que la aurora boreal y el cielo rojo del atardecer tengan colores.\"\n" +
            "Esa última observación conecta la lección con algo que el estudiante ve todos los días, y suele ser la pregunta de examen.\n",
          ejemplo:
            "Un rayo de luz de longitud de onda 600 nm entra desde el aire al agua. La rapidez de la luz en el aire es 3 · 10⁸ m/s y en el agua 2,25 · 10⁸ m/s. ¿Cuál es la frecuencia de la luz en cada medio, su longitud de onda en el agua y por qué no cambia de color?\n" +
            "## Método 1: frecuencia con el aire\n" +
            "- Primero: la frecuencia es la rapidez entre la longitud de onda, 3 · 10⁸ entre 600 · 10⁻⁹, unos 5 · 10¹⁴ Hz.\n" +
            "- Segundo: la frecuencia no depende del medio, así que en el agua sigue siendo 5 · 10¹⁴ Hz. Ese es el dato clave del ejercicio.\n" +
            "## Método 2: longitud de onda en el agua\n" +
            "- Tercero: en el agua, la rapidez cae a 2,25 · 10⁸ m/s, y con la misma frecuencia la longitud de onda se reduce en la misma proporción, 600 · 0,75 = 450 nm.\n" +
            "- Cuarto: compruebo con v = λ · f, 2,25 · 10⁸ entre 450 · 10⁻⁹ = 5 · 10¹⁴ Hz. La frecuencia se mantiene, y la cuenta cuadra.\n" +
            "## Método 3: el color y el arcoíris\n" +
            "- Quinto: la longitud de onda de 600 nm corresponde al naranja, y sigue siendo naranja en el agua porque el color depende de la frecuencia, que no se alteró.\n" +
            "- Sexto: en cambio, si la luz blanca atraviesa un prisma, cada frecuencia se separa porque la rapidez en el vidrio depende ligeramente de la frecuencia. Ahí sí cambian las longitudes de onda de cada color, y por eso se ve el espectro.\n" +
            "> El resultado a retener es la relación de qué se conserva. La frecuencia nunca cambia al pasar de un medio a otro, y la longitud de onda sí. Olvidar eso es lo que hace creer que el color se altera al entrar en el agua.\n",
          consejo:
            "Recuerda qué se conserva: la frecuencia se mantiene y la rapidez y la longitud de onda cambian. Si un ejercicio dice que el color cambia al refractar, tiene un error.",
        }
      ],
    },
    // ---------------------------------------------------------------------
    // Módulo 5 · Óptica y ondas electromagnéticas
    // ---------------------------------------------------------------------
    {
      titulo: "Módulo 5 · Óptica y ondas electromagnéticas",
      lecciones: [
        {
          titulo: "Naturaleza de la luz y propagación rectilínea",
          objetivo: "Describir cómo se propaga la luz, explicar la sombra y el eclipses, y aplicar las leyes de la geometría óptica.",
          teoria:
            "La luz es una **radiación electromagnética** que se propaga por el vacío y por los medios transparentes a una velocidad mucho mayor que la del sonido. Una de sus propiedades clave es que **viaja en línea recta** en un medio homogéneo, y de ahí se deduce todo lo demás de este módulo.\n" +
            "\n" +
            "## Sombra y eclipses\n" +
            "\n" +
            "Si un cuerpo opaco se interpone entre la fuente luminosa y un punto, ese punto queda en la **sombra**: la luz no llega. Cuando el cuerpo tapa solo una parte de la fuente, se ve la **penumbra**, una zona con luz parcial.\n" +
            "\n" +
            "$$ I = \\frac{d^2}{4} $$\n" +
            "\n" +
            "La fórmula de **[iluminancia] de un foco puntual** dice que la luz que llega a una superficie cae con el cuadrado de la distancia. Si duplicas la distancia, la iluminancia se reduce a la cuarta parte. Por eso una lámpara da mucha más luz de cerca que de lejos.\n" +
            "\n" +
            "## Dos leyes que Lucía siempre necesitó\n" +
            "\n" +
            "- **Reflexión**: el ángulo de incidencia es igual al ángulo de reflexión, y ambos miden desde la normal (la perpendicular a la superficie), no desde la superficie. Confundir esos dos ángulos es el error más común del tema.\n" +
            "- **Refracción**: al cambiar de medio, el rayo se desvía. La **ley de Snell** relaciona los ángulos con las velocidades.\n" +
            "\n" +
            "$$ n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 $$\n" +
            "\n" +
            "## Por qué la luz se curva en el agua\n" +
            "\n" +
            "Cuando la luz pasa del aire al agua pasa de ir rápido a ir más despacio, y el rayo se inclina **hacia la normal**. Al salir del agua hacia el aire ocurre lo contrario y se aleja de la normal, por eso desde dentro de una piscina el fondo parece estar más cerca.\n" +
            "\n" +
            "> Un rayo que pasa del agua al aire nunca se desvía hacia la normal: al salir siempre se aleja, y por eso las cosas vistas a través de una vaso de agua parecen más grandes de lo que son.",
          ejemplo:
            "Un foco se sitúa a 4 m de una pared. ¿Qué iluminancia recibe la pared?\n" +
            "\n" +
            "## Aplicamos la fórmula\n" +
            "\n" +
            "$$I = \\frac{d^2}{4} = \\frac{4^2}{4} = \\frac{16}{4} = 4$$\n" +
            "\n" +
            "## Con más distancia para comparar\n" +
            "\n" +
            "A 8 m: $$I = \\frac{8^2}{4} = \\frac{64}{4} = 16$$\n" +
            "\n" +
            "## La comprobación que importa\n" +
            "\n" +
            "Pasar de 4 a 8 m es **duplicar** la distancia, y la iluminancia pasa de 4 a 16: se ha **cuadruplicado**, no se ha duplicado. Eso confirma que la ley es del cuadrado de la distancia.\n" +
            "\n" +
            "> Si el enunciado pidiera el punto donde la iluminancia cae a la mitad, despejando: $$d = \\sqrt{4I}$$.",
          consejo: "Mide siempre los ángulos de la ley de Snell desde la **normal**, no desde la superficie. Un rayo que se acerca mucho a la normal se ve casi vertical, y mar personas cuentan el ángulo desde el suelo y obtienen 20° en lugar de 70°."
        },
        {
          titulo: "Reflexión, espejos planos y esféricos",
          objetivo: "Construir la imagen en un espejo, aplicar las ecuaciones de posição y tamaño, y distinguir entre imagen real y virtual.",
          teoria:
            "En un **espejo plano** la imagen es virtual, del mismo tamaño y simétrica respecto al espejo. La única peculiaridad es que el， se invierte: si alzada la mano derecha, la imagen levanta la izquierda.\n" +
            "\n" +
            "## Espejo esférico: la ecuación fundamental\n" +
            "\n" +
            "Un espejo con curvatura tiene un **foco** F y un **centro de curvatura** C, y para una distancia focal f se cumple:\n" +
            "\n" +
            "$$ \\frac{1}{s} + \\frac{1}{s'} = \\frac{1}{f} $$\n" +
            "\n" +
            "El **tamaño** de la imagen se obtiene del aumento:\n" +
            "\n" +
            "$$ m = -\\frac{s'}{s} = -\\frac{y'}{y} $$\n" +
            "\n" +
            "## Tres reglas de signo que hay que aplicar en orden\n" +
            "\n" +
            "1. Las distancias de objeto e imagen son **positivas** si están en el lado de donde llega la luz (delante del espejo) y **negativas** detrás del espejo, para imágenes virtuales.\n" +
            "2. En un espejo **convexe**, la distancia focal es **negativa**; en uno **cóncavo**, positiva.\n" +
            "3. Un aumento **negativo** indica imagen **invertida**; positivo, imagen **derecha**.\n" +
            "\n" +
            "| Tipo de espejo | Condición | Resultado |\n" +
            "|---|---|---|\n" +
            "| Cóncavo | el objeto está fuera del foco | imagen real e invertida |\n" +
            "| Cóncavo | el objeto está entre el foco y el espejo | imagen virtual y derecha |\n" +
            "| Plano | siempre | imagen virtual, derecha y del mismo tamaño |\n" +
            "| Convexe | siempre | imagen virtual, derecha y más pequeña |\n" +
            "\n" +
            "> El **centro de curvatura** es la imagen que da un espejo cóncavo de cualquier objeto colocado sobre él mismo. Por eso colocarse en C y Mirarse da una imagen de tamaño natural e invertida.",
          ejemplo:
            "Un objeto de 5 cm está a 30 cm de un espejo cóncavo de distancia focal 15 cm. Halla la distancia y el tamaño de la imagen.\n" +
            "\n" +
            "## Posición de la imagen\n" +
            "\n" +
            "$$ \\frac{1}{30} + \\frac{1}{s'} = \\frac{1}{15} \\implies \\frac{1}{s'} = \\frac{2 - 1}{30} = \\frac{1}{30} \\implies s' = 30\\text{ cm} $$\n" +
            "\n" +
            "La imagen se forma a 30 cm, justo en el centro de curvatura.\n" +
            "\n" +
            "## Tamaño y orientación\n" +
            "\n" +
            "$$ m = -\\frac{30}{30} = -1 $$\n" +
            "\n" +
            "El aumento es **-1**: la imagen es **real, invertida** y del mismo tamaño, 5 cm.\n" +
            "\n" +
            "## Comprobación con la geometría\n" +
            "\n" +
            "El objeto está a 30 cm y f = 15 cm, es decir a 2f. La tabla de casos predice imagen real e invertida, y además sitúa la imagen en C, que es justo donde ha caído.\n" +
            "\n" +
            "> Un aumento de +1 sería imagen virtual, y aquí es imposible: un espejo cóncavo solo da imagen virtual si el objeto está entre el foco y el espejo.",
          consejo: "Cuando el resultado te parezca raro, comprueba primero la **posición del objeto respecto al foco** y solo después las cuentas. La geometría del espejo predice el resultado, y si no cuadra es que un signo está mal puesto."
        },
        {
          titulo: "Lentes y óptica geométrica",
          objetivo: "Aplicar la ecuación de las lentes finas y el aumento lateral para determinar imagen, tamaño ycasos de uso.",
          teoria:
            "Una **lente convergente** (convexa) concentra los rayos que llegan paralelos en su foco. Una **lente divergente** (cóncava) los separa como si vinieran de un foco virtual.\n" +
            "\n" +
            "## La ecuación de la lente fina\n" +
            "\n" +
            "Es la misma que en el espejo, con la diferencia del signo de la distancia focal:\n" +
            "\n" +
            "$$ \\frac{1}{s} + \\frac{1}{s'} = \\frac{1}{f} $$\n" +
            "\n" +
            "- En una lente **convergente**, f es **positiva**.\n" +
            "- En una lente **divergente**, f es **negativa**.\n" +
            "\n" +
            "## Aumento lateral\n" +
            "\n" +
            "$$ m = -\\frac{s'}{s} = -\\frac{y'}{y} $$\n" +
            "\n" +
            "Un aumento **negativo** significa imagen **invertida** y real (formada de verdad en algún punto); uno **positivo**, imagen **virtual** y derecha, que es el caso típico de la lupa.\n" +
            "\n" +
            "## Casos típicos de la lente convergente\n" +
            "\n" +
            "| Posición del objeto | Imagen |\n" +
            "|---|---|\n" +
            "| Más allá de 2f | real, invertida, menor, entre f y 2f |\n" +
            "| Exactamente en 2f | real, invertida, del mismo tamaño |\n" +
            "| Entre f y 2f | real, invertida, mayor, más allá de 2f |\n" +
            "| Exactamente en f | no se forma: los rayos salen paralelos |\n" +
            "| Entre el foco y la lente | virtual, derecha, mayor (lupa) |\n" +
            "\n" +
            "## La lupa y el ojo humano\n" +
            "\n" +
            "El ojo es un sistema de lentes equivalente a una lente convergente de unos 2 cm de distancia focal. La lupa se pone a menos de f para que la imagen virtual sea grande y el ojo solo tenga que enfocarla.\n" +
            "\n" +
            "> Si colocas un objeto exactamente en el foco de una lente convergente, los rayos emergen **paralelos** y no hay imagen en ninguna parte. Es el caso que más confunde en exámenes.",
          ejemplo:
            "Una lente convergente de 20 cm de distancia focal tiene un objeto de 3 cm a 50 cm. Halla la imagen.\n" +
            "\n" +
            "## Posición\n" +
            "\n" +
            "$$ \\frac{1}{50} + \\frac{1}{s'} = \\frac{1}{20} \\implies \\frac{1}{s'} = \\frac{1}{20} - \\frac{1}{50} = \\frac{5-2}{100} = \\frac{3}{100}$$\n" +
            "\n" +
            "$$ s' = \\frac{100}{3} \\approx 33.3\\text{ cm}$$\n" +
            "\n" +
            "## Tamaño\n" +
            "\n" +
            "$$ m = -\\frac{33.3}{50} \\approx -0.667, \\qquad y' = 0.667 \\times 3 \\approx 2.0\\text{ cm}$$\n" +
            "\n" +
            "## Interpretación\n" +
            "\n" +
            "El aumento es negativo y su valor absoluto menor que 1: la imagen es **real, invertida y reducida**, a 33,3 cm detrás de la lente.\n" +
            "\n" +
            "> ¿Está dentro de f y 2f? f = 20, 2f = 40, y s' = 33,3: sí, exactamente lo que dice la tabla para un objeto más allá de 2f (aquí 50 > 40).",
          consejo: "Dibuja el **eje óptico** y marca F, 2F y el objeto antes de operar. La posición relativa se lee de un vistazo y confirma después el resultado. Además, fíjate siempre en el signo del aumento: es lo que separa una foto real de la imagen de una lupa."
        },
        {
          titulo: "Ondas: amplitud, longitud de onda y sonido",
          objetivo: "Distinguir las características de una onda, relacionarlas con la velocidad y calcular longitudes de onda y frecuencias.",
          teoria:
            "Una **onda** transporta energía sin transportar materia. Las dos características que la describen son la **amplitud** (altura máxima, que relaciona con la intensidad) y la **longitud de onda** (distancia entre crestas, que relaciona con la frecuencia y el tono).\n" +
            "\n" +
            "## La relación fundamental\n" +
            "\n" +
            "$$v = \\lambda f$$\n" +
            "\n" +
            "donde v es la velocidad de propagación, f la frecuencia y lambda la longitud de onda. Esta única ecuación resuelve casi todos los problemas del tema.\n" +
            "\n" +
            "## Ondas sonoras\n" +
            "\n" +
            "El sonido es una onda **mecánica**: necesita un medio material para viajar y **no se propaga en el vacío**. En el aire viaja a unos 340 m/s.\n" +
            "\n" +
            "- La **altura** del sonido depende de la **frecuencia**: más frecuencia, tono más agudo.\n" +
            "- El **volumen** depende de la **amplitud**: más amplitud, sonido más fuerte.\n" +
            "\n" +
            "$$ f = \\frac{v}{\\lambda}, \\qquad \\lambda = \\frac{v}{f}, \\qquad T = \\frac{1}{f} $$\n" +
            "\n" +
            "## Fenómeno del Doppler\n" +
            "\n" +
            "Si la fuente se acerca, la longitud de onda se **acorta** en el caso del observador y el tono sube; si se aleja, se alarga y el tono baja. Es el mismo efecto que hace que una ambulancia cambie de sonido al pasar.\n" +
            "\n" +
            "$$ f' = f \\frac{v}{v \\pm v_s} $$\n" +
            "\n" +
            "> El efecto Doppler también funciona con la luz, y es la base de las medidas de velocidad de una estrella: si su espectro se desplaza, se está alejando, y si se desplaza al revés, se acerca.",
          ejemplo:
            "Una frecuencia de 440 Hz en el aire (v = 340 m/s) ¿qué longitud de onda tiene?\n" +
            "\n" +
            "## Despejamos de la relación fundamental\n" +
            "\n" +
            "$$ \\lambda = \\frac{v}{f} = \\frac{340}{440} = 0.773\\text{ m}$$\n" +
            "\n" +
            "El periodo es:\n" +
            "\n" +
            "$$ T = \\frac{1}{f} = \\frac{1}{440} = 0.00227\\text{ s}$$\n" +
            "\n" +
            "## Comprobación dimensional\n" +
            "\n" +
            "$$ f \\cdot \\lambda = 440 \\times 0.773 \\approx 340\\text{ m/s}$$\n" +
            "\n" +
            "Coincide con la velocidad del sonido en el aire.\n" +
            "\n" +
            "> Si la misma frecuencia sonara en el agua (v = 1500 m/s), la longitud de onda sería 3.4 m: **el tono es el mismo pero la onda es mucho más larga**, porque el medio es más rápido.",
          consejo: "Un error típico es mezclar frecuencia con longitud de onda. Recuerda: **frecuencia es lo que llega a tu oído** (el tono), y la longitud de onda depende del medio. Cambiar de aire a agua no cambia el tono, pero sí la lambda."
        },
        {
          titulo: "Espectro electromagnético y aplicaciones",
          objetivo: "Ordenar las radiaciones del espectro por longitud de onda y frecuencia, y relacionarlas con su uso y sus efectos.",
          teoria:
            "El **espectro electromagnético** es la familia de todas las ondas electromagnéticas, ordenadas por frecuencia. Todas viajan a la **misma velocidad en el vacío**, c = 300 000 km/s, así que la frecuencia y la longitud de onda son inversamente proporcionales.\n" +
            "\n" +
            "## De menor a mayor frecuencia\n" +
            "\n" +
            "| Radiación | Longitud de onda | Aplicación o efecto |\n" +
            "|---|---|---|\n" +
            "| Ondas de radio | más de 1 m | radio, TV, wi-fi |\n" +
            "| Microondas | 1 mm a 1 m | microondas, radar, móvil |\n" +
            "| Infrarrojo | 1 µm a 1 mm | mando a distancia, calor |\n" +
            "| Luz visible | 400 a 700 nm | lo que vemos los ojos |\n" +
            "| Ultravioleta | 10 a 400 nm | esterilizar, bronceado |\n" +
            "| Rayos X | 0,01 a 10 nm | radiografías |\n" +
            "| Rayos gamma | menos de 0,01 nm | medicina nuclear |\n" +
            "\n" +
            "## El ojo humano\n" +
            "\n" +
            "Nuestro ojo solo detecta **una** franja estrecha: la luz visible. Todo lo demás es invisible, pero sigue siendo radiación electromagnética de la misma naturaleza.\n" +
            "\n" +
            "## Dosis y seguridad\n" +
            "\n" +
            "Un fotón de rayos gamma lleva mucha más energía que uno de luz visible porque su frecuencia es mucho mayor. Eso es lo que hace que los rayos gamma sean dañinos: la energía se deposita en un punto pequeño.\n" +
            "\n" +
            "> La radiación infrarroja es la que sale de un mando a distancia, y es luz visible lejana. Los MPL de onda corta (luz azul y violeta) tienen frecuencia más alta y más energía por fotón, y por eso cansan más la vista a igual brillo.",
          ejemplo:
            "Una emisora de FM emite a 100 MHz. Calcula su longitud de onda y dime en qué parte del espectro está.\n" +
            "\n" +
            "## Longitud de onda\n" +
            "\n" +
            "$$ f = 100\\text{ MHz} = 10^8\\text{ Hz}, \\qquad \\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8}{10^8} = 3\\text{ m}$$\n" +
            "\n" +
            "## Ubicación en el espectro\n" +
            "\n" +
            "Con lambda = 3 m, está en la zona de **ondas de radio**, muy por debajo de la banda de FM, que va de 88 a 108 MHz.\n" +
            "\n" +
            "## Comparación con otra emisión\n" +
            "\n" +
            "Una señal de móvil a 900 MHz tendría $$\\lambda = \\frac{3 \\times 10^8}{9 \\times 10^8} = 0.33\\text{ m}$$, es decir un metro treinta, y ya entra en **microondas**.\n" +
            "\n" +
            "> Mismo tipo de radiación, distinta banda: por eso las antenas de radio tienen tan pocos metros y las de móvil se miden en centímetros.",
          consejo: "Cuando compares dos radiaciones, fija siempre qué se mantiene constante. En el vacío la velocidad es la misma, así que mayor frecuencia significa menor longitud de onda. En un medio material la velocidad cambia, pero la frecuencia **nunca** cambia: eso es lo que define la fuente."
        },
      ],
    },
    // ---------------------------------------------------------------------
    // Módulo 6 · Termodinámica
    // ---------------------------------------------------------------------
    {
      titulo: "Módulo 6 · Termodinámica",
      lecciones: [
        {
          titulo: "Temperatura y calor: qué se mide y cómo se transmite",
          objetivo: "Diferenciar temperatura de calor, leer escalas y describir los tres mecanismos de transmisión del calor.",
          teoria:
            "La **temperatura** mide el estado de agitación de las partículas: es intensive, quiere decir que no depende de cuánta sustancia haya. El **calor** es energía que se transfiere entre dos cuerpos a distinta temperatura, y es extensive: depende de la masa.\n" +
            "\n" +
            "## Escalas y conversiones\n" +
            "\n" +
            "| Escala | Cero | Punto fijo notable |\n" +
            "|---|---|---|\n" +
            "| Celsius | hielo en agua | 100 °C al hervir |\n" +
            "| Fahrenheit | 32 °F | 212 °F al hervir |\n" +
            "| Kelvin | cero absoluto | 0 K, imposible de alcanzar |\n" +
            "\n" +
            "La conversión más usada es:\n" +
            "\n" +
            "$$ T_K = T_{^\\circ C} + 273.15 $$\n" +
            "\n" +
            "El cero absoluto es $$-273.15\\ ^\\circ C$$, y por eso en el laboratorio se dice que una mezcla se enfría hasta ese punto: es el límite físico, no una meta práctica.\n" +
            "\n" +
            "figura:maquina-termica | La temperatura se lee en un termómetro; el calor es el flujo entre sistemas\n" +
            "\n" +
            "## Los tres caminos del calor\n" +
            "\n" +
            "| Mecanismo | Cómo viaja | Necesita material | Ejemplo |\n" +
            "|---|---|---|---|\n" +
            "| Conducción | por contacto entre partículas | sí | mango de una olla caliente |\n" +
            "| Convección | con el movimiento del fluido | sí | agua hirviendo en una olla |\n" +
            "| Radiación | por ondas electromagnéticas | no | calor del sol, lámpara incandescente |\n" +
            "\n" +
            "La radiación es la única que funciona en el vacío. Por eso el calor del Sol llega a la Tierra sin que ningún material los una, y por eso la ventana de cristal deja pasar la luz y frena parte del calor.\n" +
            "\n" +
            "glosario:Temperatura :: Medida de la agitación de las partículas; no depende de la cantidad de sustancia.\n" +
            "glosario:Calor :: Energía que se transfiere entre cuerpos a distinta temperatura.\n" +
            "glosario:Conducción :: Transmisión del calor por contacto, sin movimiento de la materia.\n" +
            "glosario:Convección :: Transmisión del calor por el movimiento del fluido.\n" +
            "glosario:Radiación :: Transmisión del calor por ondas electromagnéticas, sin medio material.\n" +
            "glosario:Grado Kelvin :: Unidad del SI de temperatura; su cero es el cero absoluto.",
          ejemplo:
            "Un bloque de 2 kg de aluminio a 80 °C se pone en contacto con 3 kg de agua a 20 °C. ¿Cuál es la temperatura final?\n" +
            "\n" +
            "## Datos\n" +
            "\n" +
            "$$ c_{al} = 900 \\ \\text{J/(kg·°C)}, \\qquad c_{agua} = 4200 \\ \\text{J/(kg·°C)} $$\n" +
            "\n" +
            "## Planteo: el calor que deja el uno es el que entra en el otro\n" +
            "\n" +
            "$$ m_{al} c_{al} (80 - T) = m_{agua} c_{agua} (T - 20) $$\n" +
            "\n" +
            "$$ 1800 (80 - T) = 12600 (T - 20) $$\n" +
            "\n" +
            "## Despejamos\n" +
            "\n" +
            "$$ 144000 - 1800T = 12600T - 252000 $$\n" +
            "\n" +
            "$$ 396000 = 14400T \\implies T = 27.5\\ ^\\circ C $$\n" +
            "\n" +
            "## Comprobación de sentido\n" +
            "\n" +
            "La final está cerca de los 20 °C y no cerca de los 80 °C. Tiene sentido: el agua tiene una capacidad calorífica mucho mayor, así que absorbe mucho calor sin calentarse casi.\n" +
            "\n" +
            "!! Comprueba el resultado\n" +
            "- Si los dos cuerpos fueran de la misma sustancia y la misma masa, ¿qué temperatura final habría?\n" +
            "- ¿Por qué el agua se enfría más despacio que el aceite en un radiador?\n" +
            ">> Habría una temperatura final de 50 °C, la media de las dos. El agua se enfría más despacio porque para bajar un grado necesita sacar mucho más energía: su capacidad calorífica por kilo es unas cuatro veces mayor que la del aceite.",
          consejo: "En cualquier problema de intercambio de calor, escribe primero la igualdad «lo que pierde uno es lo que gana el otro» antes de sustituir números. Si te queda un signo raro, el error está en esa ecuación, no en la aritmética."
        },
        {
          titulo: "Primera ley de la termodinámica y trabajo",
          objetivo: "Aplicar la conservación de la energía en gases: relacionar calor, trabajo y variación de energía interna.",
          teoria:
            "La **primera ley** dice que la energía no se crea ni se destruye, solo se transforma:\n" +
            "\n" +
            "$$ Q = \\Delta U + W $$\n" +
            "\n" +
            "- $$Q$$ es el calor que entra en el sistema.\n" +
            "- $$\\Delta U$$ es el cambio de energía interna.\n" +
            "- $$W$$ es el trabajo que el sistema hace sobre el entorno.\n" +
            "\n" +
            "El signo importa y es la fuente de casi todos los errores:\n" +
            "\n" +
            "| Proceso | Q | W | Qué pasa |\n" +
            "|---|---|---|---|\n" +
            "| Calentar un gas que se expande | + | + | las dos compiten |\n" +
            "| Calentar un gas a volumen constante | + | 0 | todo va a energía interna |\n" +
            "| Comprimir un gas adiabaticamente | 0 | negativo | sube la temperatura |\n" +
            "\n" +
            "A volumen constante no hay expansión, así que $$W = 0$$ y todo el calor se queda dentro: por eso $$Q = \\Delta U$$.\n" +
            "\n" +
            "## Trabajo de expansión\n" +
            "\n" +
            "Si un gas pasa de volumen $$V_1$$ a $$V_2$$ contra una presión externa constante $$P_{ext}$$, el trabajo es:\n" +
            "\n" +
            "$$ W = P_{ext}(V_2 - V_1) $$\n" +
            "\n" +
            "figura:maquina-termica | En el motor térmico, el calorexpandido produce trabajo y empuja el pistón\n" +
            "\n" +
            "> Si el gas se expande, hace trabajo sobre el pistón y $$W > 0$$. Si lo comprimes, el pistón trabaja contra el gas y $$W < 0$$: la energía entra, no sale.\n" +
            "\n" +
            "glosario:Sistema :: La porción de materia que se estudia; el resto es el entorno.\n" +
            "glosario:Primera ley :: Conservación de la energía en sus tres formas: calor, trabajo e energía interna.\n" +
            "glosario:Energía interna :: Suma de la energía microscópica de las moléculas, ligada a la temperatura.\n" +
            "glosario:Trabajo mecánico :: Energía transferida cuando una fuerza actúa durante un desplazamiento.\n" +
            "glosario:Expansión adiabática :: Expansión sin intercambio de calor; el gas se enfría.",
          ejemplo:
            "Un gas ideal recibe 600 J de calor y se expande y realiza 200 J de trabajo. ¿Cuánto cambió su energía interna?\n" +
            "\n" +
            "## Sustituimos en la primera ley\n" +
            "\n" +
            "$$ \\Delta U = Q - W = 600 - 200 = 400\\ \\text{J} $$\n" +
            "\n" +
            "La energía interna aumentó 400 J. Y tiene sentido: de los 600 J que entraron, 200 J se fueron en trabajo y 400 J se quedaron dentro.\n" +
            "\n" +
            "## El caso contrario\n" +
            "\n" +
            "Si el mismo gas cediera 600 J y hiciera 200 J de trabajo:\n" +
            "\n" +
            "$$ \\Delta U = -600 - 200 = -800\\ \\text{J} $$\n" +
            "\n" +
            "El signo de W no cambió: hacer trabajo siempre resta energía interna, esté el gas ganando o perdiendo calor.\n" +
            "\n" +
            "!! Decide el signo\n" +
            "- Un gas se calienta y se comprime a la vez. ¿Puede su temperatura no subir?\n" +
            "- Un gas se expande libremente en el vacío. ¿Qué trabajo hace?\n" +
            ">> Sí: si el trabajo de compresión es mayor que el calor recibido, la energía interna baja y el gas se enfría. En la expansión al vacío no hay presión externa, así que $$W = 0$$ y todo el calor se convierte en energía interna.",
          consejo: "Dibuja el sistema como una caja con flechas: el calor entra por un lado, el trabajo sale por otro. Cuando dudes del signo, pregúntate si la energía entra o sale de la caja; la flecha lo decide."
        },
        {
          titulo: "Segunda ley, entropía y máquinas térmicas",
          objetivo: "Explicar por qué el calor no fluye de frío a caliente, calcular el rendimiento de una máquina térmica y aplicar la entropía.",
          teoria:
            "La **segunda ley** se encarga de la dirección de los procesos:\n" +
            "\n" +
            "> Es imposible transferir calor de un cuerpo frío a uno caliente sin gastar trabajo.\n" +
            "\n" +
            "## Máquinas térmicas\n" +
            "\n" +
            "Una máquina térmica recibe calor de una **fuente caliente**, usa parte para producir **trabajo** y descarga el resto en un **sumidero frío**.\n" +
            "\n" +
            "$$ \\eta = \\frac{W}{Q_h} = 1 - \\frac{Q_c}{Q_h} $$\n" +
            "\n" +
            "El rendimiento siempre es menor que 1. La parte que se descarga al sumidero no se desperdicia: es lo que permite que el motor siga funcionando en ciclos.\n" +
            "\n" +
            "## Rendimiento de Carnot\n" +
            "\n" +
            "El máximo teórico lo da la temperatura de las dos fuentes:\n" +
            "\n" +
            "$$ \\eta_{max} = 1 - \\frac{T_c}{T_h} $$\n" +
            "\n" +
            "figura:maquina-termica | La máquina usa el calor de la fuente caliente, entrega trabajo y descarga el sobrante\n" +
            "\n" +
            "Las temperaturas van en **kelvin**, no en grados. Una máquina entre 500 K y 300 K rinde como máximo el 40 por ciento, aunque sea perfecta.\n" +
            "\n" +
            "## Entropía\n" +
            "\n" +
            "La entropía mide el desorden, y la segunda ley se enuncia así de forma compacta:\n" +
            "\n" +
            "$$ \\Delta S_{universo} \\ge 0 $$\n" +
            "\n" +
            "En un sistema aislado, la entropía nunca baja. Por eso un vaso de café caliente se enfría y nunca se recalienta solo.\n" +
            "\n" +
            "glosario:Máquina térmica :: Motor que convierte calor en trabajo de forma cíclica.\n" +
            "glosario:Fuente caliente :: Reservorio del que se extrae el calor.\n" +
            "glosario:Sumidero frío :: Reservorio al que se descarga el calor sobrante.\n" +
            "glosario:Rendimiento :: Proporción del calor convertido en trabajo útil; siempre menor que 1.\n" +
            "glosario:Entropía :: Medida del desorden; nunca disminuye en un sistema aislado.\n" +
            "glosario:Ciclo de Carnot :: Máquina ideal que alcanza el rendimiento máximo posible.",
          ejemplo:
            "Una máquina recibe 1000 J de la fuente caliente y descarga 700 J al sumidero. ¿Cuál es su rendimiento y cuánto queda del 40 por ciento de Carnot?\n" +
            "\n" +
            "## Trabajo útil\n" +
            "\n" +
            "$$ W = Q_h - Q_c = 1000 - 700 = 300\\ \\text{J} $$\n" +
            "\n" +
            "## Rendimiento\n" +
            "\n" +
            "$$ \\eta = \\frac{300}{1000} = 0.30 = 30\\ \\text{ por ciento} $$\n" +
            "\n" +
            "## Comparación con el máximo\n" +
            "\n" +
            "Con $$T_h = 500\\ \\text{K}$$ y $$T_c = 300\\ \\text{K}$$:\n" +
            "\n" +
            "$$ \\eta_{Carnot} = 1 - \\frac{300}{500} = 0.40 $$\n" +
            "\n" +
            "La máquina real rinde 30 por ciento frente a un techo de 40: le queda un margen de mejora de 10 puntos.\n" +
            "\n" +
            "> Ninguna máquina real puede superar el 40 por ciento en esas temperaturas. Por eso los ley se llama también **degradación de la energía**: el trabajo es energía de calidad alta y el calor de la calidad más baja.\n" +
            "\n" +
            "!! Comprueba los números\n" +
            "- ¿Qué pasaría si la máquina no descargara nada al sumidero?\n" +
            "- Una máquina entre 400 K y 200 K, ¿cuál es su rendimiento máximo?\n" +
            ">> Si no descargara nada, su rendimiento sería del 100 por ciento, lo cual es imposible: necesitaría convertir todo el calor en trabajo y la segunda ley lo prohíbe. Con 400 K y 200 K el máximo es $$1 - 200/400 = 0.5$$, o sea 50 por ciento.",
          consejo: "Convierte siempre a kelvin antes de aplicar la fórmula de Carnot. Es el error más caro del tema: 500 °C y 500 K dan rendimientos que no coinciden en absoluto."
        },
        {
          titulo: "Ciclos, gases ideales y transformaciones",
          objetivo: "Aplicar la ley de los gases ideales en transformaciones a temperatura, presión o volumen constante.",
          teoria:
            "Para un gas ideal, el estado queda descrito por tres variables y una sola relación:\n" +
            "\n" +
            "$$ PV = nRT $$\n" +
            "\n" +
            "- $$P$$: presión en pascales.\n" +
            "- $$V$$: volumen en metros cúbicos.\n" +
            "- $$n$$: cantidad de sustancia en moles.\n" +
            "- $$T$$: temperatura **absoluta** en kelvin.\n" +
            "- $$R = 8.314\\ \\text{J/(mol·K)}$$\n" +
            "\n" +
            "Si dos estados del mismo gas ideal tienen los mismos moles, se puede dividir una ecuación por la otra:\n" +
            "\n" +
            "$$ \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} $$\n" +
            "\n" +
            "Esta forma es la que resuelve casi todos los ejercicios: no necesitas conocer los moles.\n" +
            "\n" +
            "## Tres transformaciones típicas\n" +
            "\n" +
            "| Nombre | Qué se mantiene | Relación | Curva en P-V |\n" +
            "|---|---|---|---|\n" +
            "| Isotérmica | temperatura | $$P_1 V_1 = P_2 V_2$$ | hipérbola |\n" +
            "| Isobárica | presión | $$V/T = cte$$ | recta horizontal |\n" +
            "| Isocórica | volumen | $$P/T = cte$$ | recta vertical |\n" +
            "\n" +
            "## Escala Kelvin obligatoria\n" +
            "\n" +
            "Una mezcla de gases a presión constante de $$100\\ \\text{kPa}$$, que pasa de 27 °C a 127 °C:\n" +
            "\n" +
            "$$ T_1 = 300\\ \\text{K}, \\qquad T_2 = 400\\ \\text{K} $$\n" +
            "\n" +
            "El volumen final es $$V_2 = V_1 \\times 400/300 = 1.33\\ V_1$$. Con grados, 127/27 daría 4.7 veces, que es absurdo.\n" +
            "\n" +
            "glosario:Gas ideal :: Modelo donde el volumen de las moléculas es despreciable y no interactúan.\n" +
            "glosario:Presión :: Fuerza por unidad de superficie; en un gas es el efecto de los choques.\n" +
            "glosario:Transformación isotérmica :: A temperatura constante; el producto P·V no cambia.\n" +
            "glosario:Transformación isobárica :: A presión constante; el volumen es proporcional a la temperatura.\n" +
            "glosario:Transformación isocórica :: A volumen constante; la presión es proporcional a la temperatura.\n" +
            "glosario:Volumen molar :: Volumen que ocupa un mol; 22,4 L a 0 °C y 1 atm.",
          ejemplo:
            "Un gas ocupa 2 L a 200 kPa. ¿Qué volumen ocupa a 600 kPa si la temperatura no cambia?\n" +
            "\n" +
            "## Detectamos la transformación\n" +
            "\n" +
            "La temperatura es constante, así que es **isotérmica** y aplicamos la ley de Boyle:\n" +
            "\n" +
            "$$ P_1 V_1 = P_2 V_2 $$\n" +
            "\n" +
            "## Despejamos el volumen final\n" +
            "\n" +
            "$$ V_2 = \\frac{P_1 V_1}{P_2} = \\frac{200 \\times 2}{600} = 0.67\\ \\text{L} $$\n" +
            "\n" +
            "## Ejercicio con temperatura\n" +
            "\n" +
            "Ahora el gas se calienta de 300 K a 450 K manteniendo la presión:\n" +
            "\n" +
            "$$ V_2 = V_1 \\frac{T_2}{T_1} = 2 \\times \\frac{450}{300} = 3\\ \\text{L} $$\n" +
            "\n" +
            "> Si triplicas la temperatura absoluta a presión constante, el volumen se triplica exactamente. Y si triplicas la presión a temperatura constante, el volumen se divide entre tres: son el mismo hecho contado al revés.\n" +
            "\n" +
            "!! Aplica la ley de los gases\n" +
            "- Un gas a 27 °C y 1 atm cambia a 54 °C. ¿Cuánto cambia su volumen a presión constante?\n" +
            "- Un globo se hincha de 2 L a 6 L sin cambiar de temperatura. ¿Qué pasa con la presión?\n" +
            ">> El volumen se multiplica por 300/327 = 0.92, así que se encoge un poco, porque los 27 °C son 300 K y 54 °C son 327 K, no el doble. La presión se reduce a la tercera parte, porque $$P_2 = P_1 V_1/V_2 = 1/3$$.",
          consejo: "Antes de elegir fórmula, tacha mentalmente lo que el enunciado dice que no cambia. Si dice «la temperatura no cambia», es isotérmica; si dice «a presión constante», es isobárica. Leer la palabra clave ahorra el error de fórmula."
        },
        {
          titulo: "Ciclos Otto y Diesel: el motor real",
          objetivo: "Describir las etapas de los motores de combustión interna y calcular su rendimiento a partir de los datos del enunciado.",
          teoria:
            "Un motor real no funciona en un solo paso: repite un **ciclo** de cuatro tiempos, y por eso se llama motor de cuatro tiempos.\n" +
            "\n" +
            "## Las cuatro etapas del ciclo Otto\n" +
            "\n" +
            "| Etapa | Qué hace el pistón | Qué pasa con el gas |\n" +
            "|---|---|---|\n" +
            "| Admisión | baja, entra mezcla | se mezcla aire con combustible |\n" +
            "| Compresión | sube, se cierra la válvula | aumenta presión y temperatura |\n" +
            "| Explosión | baja, la bujía enciende | se libera energía, el gas se expande |\n" +
            "| Escape | sube, expulsa gases | vuelve el pistón arriba |\n" +
            "\n" +
            "La **compresión** es la etapa clave: una relación de compresión mayor da más rendimiento, pero el motor se calienta y se desgasta antes.\n" +
            "\n" +
            "## Ciclo Diesel\n" +
            "\n" +
            "La diferencia es que en el motor Diesel **solo se comprime aire**, sin chispa. La presión resultante es tan alta que el combustible se enciende al ser inyectado:\n" +
            "\n" +
            "1. Admisión de aire.\n" +
            "2. Compresión fuerte, sin inyección.\n" +
            "3. Inyección del combustible, que se enciende solo.\n" +
            "4. Expulsión.\n" +
            "\n" +
            "Por eso es más eficiente y más pesado, y por eso se usa en camiones, buses y tractores.\n" +
            "\n" +
            "## Rendimiento desde los datos\n" +
            "\n" +
            "Cuando el enunciado da calor y trabajo, se usa directamente:\n" +
            "\n" +
            "$$ \\eta = \\frac{W}{Q_h} $$\n" +
            "\n" +
            "Cuando da solo energías internas de estados, hay que reconstruir el calor y el trabajo con la primera ley en cada etapa.\n" +
            "\n" +
            "glosario:Ciclo termodinámico :: Serie de procesos que devuelve el sistema a su estado inicial.\n" +
            "glosario:Admisión :: Entrada de la mezcla combustible en la cámara.\n" +
            "glosario:Compresión :: Reducción del volumen que eleva la presión y la temperatura del gas.\n" +
            "glosario:Relación de compresión :: Cociente entre el volumen máximo y el mínimo de la cámara.\n" +
            "glosario:Ciclo Diesel :: Ciclo de combustión por inyección, sin bujía.\n" +
            "glosario:Rendimiento térmico :: Porcentaje de la energía liberada que se convierte en trabajo.",
          ejemplo:
            "Un motor Otto recibe 2000 J de la mezcla y rechaza 1200 J. Calcula su rendimiento y di si supera a Carnot entre 700 K y 350 K.\n" +
            "\n" +
            "## Trabajo y rendimiento\n" +
            "\n" +
            "$$ W = 2000 - 1200 = 800\\ \\text{J} $$\n" +
            "\n" +
            "$$ \\eta = \\frac{800}{2000} = 0.40 $$\n" +
            "\n" +
            "## Techo de Carnot\n" +
            "\n" +
            "$$ \\eta_{Carnot} = 1 - \\frac{350}{700} = 0.50 $$\n" +
            "\n" +
            "## Comparación\n" +
            "\n" +
            "El motor rinde 40 por ciento y el máximo teórico es 50 por ciento. Cumple la segunda ley, aunque queda margen.\n" +
            "\n" +
            "> Si alguien afirma un rendimiento del 60 por ciento con esas temperaturas, está violando la segunda ley: no existe ningún motor, por bueno que sea, que supere ese 50 por ciento.\n" +
            "\n" +
            "!! Comprueba el rendimiento\n" +
            "- ¿Qué pasaría si el motor rechazara solo 500 J?\n" +
            "- ¿Por qué los motores  más pequeños que los grandes?\n" +
            ">> Rejectando 500 J el trabajo sería 1500 J y el rendimiento 75 por ciento, imposible con esas temperaturas, así que los datos serían inválidos. Los motores grandes gestionan mejor la fricción y el calor residual, por eso su rendimiento sube aunque el gasoil se queme igual.",
          consejo: "En los problemas de motores, escribe siempre las cuatro etapas con el nombre de cada transformación y sus fórmulas. Si dibujas el ciclo en el diagrama P-V, los ángulos (2-2, 1-2, 2-1, 1-1) te dicen qué energía estás calculando."
        },
      ],
    },
    // ---------------------------------------------------------------------
    // Módulo 7 · Electricidad y magnetismo
    // ---------------------------------------------------------------------
    {
      titulo: "Módulo 7 · Electricidad y magnetismo",
      lecciones: [
        {
          titulo: "Carga eléctrica y ley de Coulomb",
          objetivo: "Distinguir carga positiva y negativa, aplicar la ley de Coulomb y calcular la fuerza entre cargas puntuales.",
          teoria:
            "La **carga eléctrica** es la propiedad que explica por qué unos cuerpos se atraen y otros se repelen. Hay dos tipos y se comportan de forma distinta:\n" +
            "\n" +
            "| Tipo | Se atrae con | Se repele con | Ejemplo |\n" +
            "|---|---|---|---|\n" +
            "| Positiva | negativa | positiva | protones |\n" +
            "| Negativa | positiva | negativa | electrones |\n" +
            "\n" +
            "Las cargas del mismo signo se repelen y las de signo distinto se atraen. La transferencia de electrones es lo que explica la electrización:\n" +
            "\n" +
            "- **Por contacto**: un cuerpo neutro toca uno cargado y toma su carga.\n" +
            "- **Por fricción**: los electrones pasan de un material a otro.\n" +
            "- **Por inducción**: se acerca una carga sin tocar y el neutro se polariza, aunque la carga neta siga siendo cero.\n" +
            "\n" +
            "## Ley de Coulomb\n" +
            "\n" +
            "La fuerza entre dos cargas puntuales es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia:\n" +
            "\n" +
            "$$ F = k \\frac{q_1 q_2}{r^2}, \\qquad k = 8.99 \\times 10^9\\ \\text{N·m}^2/\\text{C}^2 $$\n" +
            "\n" +
            "figura:circuito-resistencias | Las cargas opuestas se atraen y las de igual signo se repelen\n" +
            "\n" +
            "## Qué dice el inverso cuadrado\n" +
            "\n" +
            "Si duplicas la distancia, la fuerza se reduce a **la cuarta parte**:\n" +
            "\n" +
            "$$ F(2r) = \\frac{F(r)}{4} $$\n" +
            "\n" +
            "Y si la duplicas tres veces, la fuerza es la novena parte. Esa es la diferencia clave frente a la gravedad, que solo cae con el cuadrado en otras escalas.\n" +
            "\n" +
            "glosario:Carga eléctrica :: Propiedad que explica la atracción y la repulsión; se mide en culombios.\n" +
            "glosario:Carga positiva :: La que se repele consigo misma y atrae a la negativa, como el protón.\n" +
            "glosario:Carga negativa :: La que se repele consigo misma y atrae a la positiva, como el electrón.\n" +
            "glosario:Ley de Coulomb :: La fuerza entre dos cargas es proporcional al producto y a la inversa del cuadrado de la distancia.\n" +
            "glosario:Electrización por inducción :: Polarización de un cuerpo neutro por cercanía, sin contacto.\n" +
            "glosario:Neutralidad :: Estado de un cuerpo con igual número de cargas positivas y negativas.",
          ejemplo:
            "Dos cargas de 2 μC y 3 μC están separadas 0,3 m. ¿Qué fuerza actúa entre ellas?\n" +
            "\n" +
            "## Sustituimos en la ley de Coulomb\n" +
            "\n" +
            "$$ F = 8.99 \\times 10^9 \\times \\frac{2 \\times 10^{-6} \\times 3 \\times 10^{-6}}{0.3^2} $$\n" +
            "\n" +
            "## El numerador\n" +
            "\n" +
            "$$ 8.99 \\times 10^9 \\times 6 \\times 10^{-12} = 5.394 \\times 10^{-2} $$\n" +
            "\n" +
            "## El denominador\n" +
            "\n" +
            "$$ 0.3^2 = 0.09 $$\n" +
            "\n" +
            "$$ F = \\frac{5.394 \\times 10^{-2}}{0.09} = 0.6\\ \\text{N} $$\n" +
            "\n" +
            "## Si duplicamos la distancia\n" +
            "\n" +
            "$$ F' = \\frac{0.6}{4} = 0.15\\ \\text{N} $$\n" +
            "\n" +
            "> Un error típico es poner $$k = 9 \\times 10^{-9}$$. La constante de Coulomb lleva un 9 **por arriba**; si la escribes con el exponente negativo toda la fuerza sale mil millones de veces más pequeña.\n" +
            "\n" +
            "!! Practica la ley de Coulomb\n" +
            "- Dos cargas de 4 μC y 2 μC a 2 m. ¿Cuál es la fuerza?\n" +
            "- Si la distancia se triplica, ¿qué pasa con la fuerza?\n" +
            ">> $$F = 9 \\times 10^9 \\times 8 \\times 10^{-12}/4 = 0.018\\ \\text{N}$$. Si la distancia se triplica, la fuerza se divide entre nueve y queda en 0,002 N.",
          consejo: "Antes de operar, escribe a mano si las cargas se atraen o se repelen y pasa la distancia a metros. Casi todos los errores del tema son de unidades: microcoulombs, centímetros y milímetros son la trampa."
        },
        {
          titulo: "Circuito eléctrico: corriente, tensión y resistencia",
          objetivo: "Distinguir corriente, tensión y resistencia, y aplicar las leyes de Ohm y de Kirchhoff en circuitos sencillos.",
          teoria:
            "Un circuito es un camino cerrado donde la carga fluye. Sus tres magnitudes clave son:\n" +
            "\n" +
            "| Magnitud | Símbolo | Unidad | Qué es realmente |\n" +
            "|---|---|---|---|\n" +
            "| Corriente | I | amperio (A) | carga que pasa por un punto cada segundo |\n" +
            "| Tensión | V | voltio (V) | energía que se da a cadaculombio |\n" +
            "| Resistencia | R | ohmio (Ω) | oposición al paso de la corriente |\n" +
            "\n" +
            "## Ley de Ohm\n" +
            "\n" +
            "$$ V = I \\cdot R $$\n" +
            "\n" +
            "La ley de Ohm relaciona las tres. Si la resistencia es constante, un diagrama de tensión frente a corriente es una recta que pasa por el origen y cuya pendiente es R.\n" +
            "\n" +
            "## Leyes de Kirchhoff\n" +
            "\n" +
            "En los nodos de un circuito se cumple lo mismo que en una tubería con agua: lo que entra, sale.\n" +
            "\n" +
            "- **Leyes de nodos**: la suma de corrientes que entran es la suma de las que salen.\n" +
            "- **Ley de mallas**: la suma de subidas de tensión es igual a la suma de bajadas.\n" +
            "\n" +
            "figura:circuito-resistencias | Dos resistencias en serie suman; en paralelo, la conductancia suma\n" +
            "\n" +
            "## Serie y paralelo\n" +
            "\n" +
            "| Configuración | Resistencia | Corriente | Tensión |\n" +
            "|---|---|---|---|\n" +
            "| Serie | $$R_t = R_1 + R_2$$ | la misma | se reparte |\n" +
            "| Paralelo | $$\\frac{1}{R_t} = \\frac{1}{R_1} + \\frac{1}{R_2}$$ | se reparte | la misma |\n" +
            "\n" +
            "> En **paralelo** siempre se ve la misma tensión en las dos ramas; en **serie** siempre pasa la misma corriente. Cada combinación tiene un rasgo invariante, y ese rasgo es la pista para escoger la fórmula.\n" +
            "\n" +
            "glosario:Intensidad :: Corriente eléctrica; cantidad de carga que cruza un punto por segundo.\n" +
            "glosario:Voltaje :: Diferencia de potencial entre dos puntos de un circuito.\n" +
            "glosario:Resistencia :: Oposición al paso de la corriente, en ohmios.\n" +
            "glosario:Ley de Ohm :: La tensión es el producto de intensidad por resistencia.\n" +
            "glosario:Ley de Kirchhoff :: En un nodo no se acumula carga; en una malla la suma de fuerzas es cero.\n" +
            "glosario:Circuito serie :: Donde todas las resistencias comparten la misma corriente.",
          ejemplo:
            "Dos resistencias de 4 Ω y 6 Ω se conectan a 12 V. Calcula la resistencia total y la intensidad en cada una.\n" +
            "\n" +
            "## Caso serie\n" +
            "\n" +
            "$$ R_t = 4 + 6 = 10\\ \\text{Ω} $$\n" +
            "\n" +
            "$$ I = \\frac{V}{R_t} = \\frac{12}{10} = 1.2\\ \\text{A} $$\n" +
            "\n" +
            "## Tensión en cada resistencia\n" +
            "\n" +
            "$$ V_1 = 1.2 \\times 4 = 4.8\\ \\text{V}, \\qquad V_2 = 1.2 \\times 6 = 7.2\\ \\text{V} $$\n" +
            "\n" +
            "Comprobación: $$4.8 + 7.2 = 12\\ \\text{V}$$, toda la tensión de la fuente.\n" +
            "\n" +
            "## Caso paralelo\n" +
            "\n" +
            "$$ \\frac{1}{R_t} = \\frac{1}{4} + \\frac{1}{6} = \\frac{5}{12} \\implies R_t = 2.4\\ \\text{Ω} $$\n" +
            "\n" +
            "$$ I = \\frac{12}{2.4} = 5\\ \\text{A} $$\n" +
            "\n" +
            "Cada rama recibe 12 V, así que las intensidades son 3 A y 2 A, y suman los 5 A del total.\n" +
            "\n" +
            "!! Resuelve el circuito\n" +
            "- Dos resistencias de 3 Ω y 6 Ω en paralelo. ¿Cuál es la resistencia total?\n" +
            "- Dos de 2 Ω en serie con 10 V. ¿Cuánto consume cada una?\n" +
            ">> $$1/R_t = 1/3 + 1/6 = 1/2$$, así que $$R_t = 2\\ \\text{Ω}$$. En serie $$I = 10/4 = 2.5\\ \\text{A}$$, y cada una cae $$2.5 \\times 2 = 5\\ \\text{V}$$, la mitad de la fuente.",
          consejo: "No intentes resolver el circuito mentalmente. Dibuja un rectángulo, pon la batería y las resistencias, y numera los nodos. Con el dibujo, la ley de mallas se escribe sola y se ven las resistencias equivalentes."
        },
        {
          titulo: "Potencia y resistencia interna",
          objetivo: "Calcular la potencia disipada en un resistor y explicar por qué una batería no mantiene su tensión.",
          teoria:
            "La **potencia** es la rapidez con que un circuito transforma energía eléctrica en otro tipo de energía (calor, luz, movimiento):\n" +
            "\n" +
            "$$ P = V \\cdot I = I^2 R = \\frac{V^2}{R} $$\n" +
            "\n" +
            "Las tres formas son la misma ley, y conviene tener las tres porque cada una es la cómoda según lo que te den:\n" +
            "\n" +
            "| Si te dan | Usa | Nota |\n" +
            "|---|---|---|\n" +
            "| V y I | $$P = V I$$ | la más directa |\n" +
            "| I y R | $$P = I^2 R$$ | la de los resistores |\n" +
            "| V y R | $$P = V^2/R$$ | cuidado: al revés da error |\n" +
            "\n" +
            "## Disipación en el resistor\n" +
            "\n" +
            "Un resistor no almacena energía: la convierte toda en calor. La cantidad de calor por segundo es exactamente la potencia:\n" +
            "\n" +
            "$$ Q = P \\cdot t $$\n" +
            "\n" +
            "Por eso una resistencia de 100 W en un circuito de 220 V se calienta y quema: está disipando 100 julios por segundo.\n" +
            "\n" +
            "## Resistencia interna de la batería\n" +
            "\n" +
            "Una batería real tiene una resistencia interna $$r$$ en serie. Por eso al conectar una carga la tensión cae:\n" +
            "\n" +
            "$$ I = \\frac{\\mathcal{E}}{R + r}, \\qquad V = \\mathcal{E} - I r $$\n" +
            "\n" +
            "Cuando el circuito está abierto no circula corriente y la tensión es la fuerza electromotriz completa. Al conectar, baja.\n" +
            "\n" +
            "glosario:Potencia eléctrica :: Energía transformada por unidad de tiempo; se mide en vatios.\n" +
            "glosario:Vatio :: Unidad de potencia: un vatio es un julio por segundo.\n" +
            "glosario:Resistencia interna :: Resistencia de la fuente, que hace caer la tensión al conectar.\n" +
            "glosario:Fuerza electromotriz :: Energía que la fuente entrega por cada culombio, en voltios.\n" +
            "glosario:Disipación :: Conversión de energía eléctrica en calor dentro de un resistor.\n" +
            "glosario:Corto circuito :: Conexión de resistencia casi cero; la corriente se dispara.",
          ejemplo:
            "Un resistor de 220 Ω conectado a 220 V. ¿Qué potencia disipa?\n" +
            "\n" +
            "## Intensidad que lo atraviesa\n" +
            "\n" +
            "$$ I = \\frac{V}{R} = \\frac{220}{220} = 1\\ \\text{A} $$\n" +
            "\n" +
            "## Potencia\n" +
            "\n" +
            "$$ P = V I = 220 \\times 1 = 220\\ \\text{W} $$\n" +
            "\n" +
            "Un resistor de 220 W en ese punto se calienta muchísimo; uno de 100 W no aguantaría.\n" +
            "\n" +
            "## Con resistencia interna de 20 Ω\n" +
            "\n" +
            "$$ I = \\frac{220}{220 + 20} = 0.92\\ \\text{A} $$\n" +
            "\n" +
            "$$ V = 220 - 0.92 \\times 20 = 201.6\\ \\text{V} $$\n" +
            "\n" +
            "La tensión cayó casi 20 V solo por la resistencia interna. Con un cable muy largo, además, cae más por el propio cable.\n" +
            "\n" +
            "!! Comprueba la potencia\n" +
            "- Un resistor de 10 Ω con 2 A. ¿Qué potencia disipa?\n" +
            "- ¿Por qué un cortocircuito puede fundir un cable?\n" +
            ">> $$P = 2^2 \\times 10 = 40\\ \\text{W}$$. En un cortocircuito la resistencia total es casi cero, así que la intensidad se hace enorme y la potencia $$I^2R$$ aunque sea pequeña en el cable, se dispara lo suficiente para fundirlo.",
          consejo: "Cuando el enunciado mezcle varias resistencias, elige la forma de la potencia que descarte la que no conoces. Si te dan I y R, usa $$I^2R$$; si te dan V e I, usa $$VI$$ sin calcular nada más."
        },
        {
          titulo: "Campo eléctrico y potencial",
          objetivo: "Representar líneas de campo, calcular el campo de una carga puntual y distinguir potencial de energía.",
          teoria:
            "El **campo eléctrico** es la capacidad que tiene una carga de empujar o atraer otras cargas. Se representa con líneas de campo, que tienen tres reglas:\n" +
            "\n" +
            "1. Salen de las cargas positivas.\n" +
            "2. Entran en las cargas negativas.\n" +
            "3. Su número es proporcional a la carga: un dipolo tiene igual número de líneas saliendo de la positiva que entrando en la negativa.\n" +
            "\n" +
            "figura:arbol-probabilidad | La estructura de las líneas de campo recuerda a la de un árbol: nacen de las cargas positivas\n" +
            "\n" +
            "## Intensidad del campo\n" +
            "\n" +
            "$$ E = \\frac{F}{q} = k \\frac{Q}{r^2} $$\n" +
            "\n" +
            "Es la fuerza que siente **una** carga de prueba por unidad de carga. Nótese que el campo no depende de la carga de prueba: por eso se dice que el campo es una propiedad del lugar.\n" +
            "\n" +
            "## Potencial y energía\n" +
            "\n" +
            "El **potencial** $$V$$ es la energía por unidad de carga, y por eso:\n" +
            "\n" +
            "$$ V = \\frac{U}{q} = k \\frac{Q}{r} $$\n" +
            "\n" +
            "La diferencia clave: el potencial **no depende de la carga de prueba**, pero la energía sí:\n" +
            "\n" +
            "$$ U = q V $$\n" +
            "\n" +
            "| Magnitud | Depende de la carga de prueba | Unidad |\n" +
            "|---|---|---|\n" +
            "| Campo E | no | N/C |\n" +
            "| Potencial V | no | voltio |\n" +
            "| Energía U | sí | joule |\n" +
            "\n" +
            "> En el campo de una carga positiva, el potencial **decrece** con la distancia, y lo mismo que el campo. Pero el potencial se puede hacer cero de una forma más cómoda: tomando el infinito como referencia, porque allí la influencia de la carga es nula.\n" +
            "\n" +
            "glosario:Campo eléctrico :: Fuerza por unidad de carga positiva de prueba en un punto.\n" +
            "glosario:Línea de campo :: Curva imaginaria que marca la dirección de la fuerza sobre una carga positiva de prueba.\n" +
            "glosario:Potencial eléctrico :: Energía por unidad de carga en un punto; se mide en voltios.\n" +
            "glosario:Carga de prueba :: Carga pequeña que se coloca para medir el campo sin alterarlo.\n" +
            "glosario:Diferencia de potencial :: Trabajo por unidad de carga entre dos puntos: $$V_A - V_B = W/q$$.",
          ejemplo:
            "Una carga de 5 μC está a 20 cm de un punto. Calcula el campo y el potencial en ese punto.\n" +
            "\n" +
            "## Datos en unidades del SI\n" +
            "\n" +
            "$$ Q = 5 \\times 10^{-6}\\ \\text{C}, \\qquad r = 0.2\\ \\text{m} $$\n" +
            "\n" +
            "## Campo\n" +
            "\n" +
            "$$ E = 9 \\times 10^9 \\times \\frac{5 \\times 10^{-6}}{0.04} = 1.125 \\times 10^6\\ \\text{N/C} $$\n" +
            "\n" +
            "## Potencial\n" +
            "\n" +
            "$$ V = 9 \\times 10^9 \\times \\frac{5 \\times 10^{-6}}{0.2} = 2.25 \\times 10^5\\ \\text{V} $$\n" +
            "\n" +
            "## Energía de una carga de 2 μC en ese punto\n" +
            "\n" +
            "$$ U = qV = 2 \\times 10^{-6} \\times 2.25 \\times 10^5 = 0.45\\ \\text{J} $$\n" +
            "\n" +
            "> Fíjate en la diferencia: el campo cae con $$r^2$$ y el potencial con $$r$$. El campo describes una fuerza, el potencial describe una energía acumulada.\n" +
            "\n" +
            "!! Distingue campo y potencial\n" +
            "- Una carga negativa de 2 μC en ese punto, ¿qué energía tiene?\n" +
            "- Si la distancia se duplica, ¿cómo cambia el potencial?\n" +
            ">> La energía sería $$-0.45\\ \\text{J}$$, negativa porque el potencial es positivo y la carga también. Al duplicar la distancia el potencial se reduce a la mitad: 1,125 × 10⁵ V.",
          consejo: "Cuando el enunciado pida «energía», casi siempre hay una carga multiplicando. Si solo te dan la carga que crea el campo, lo que se busca es el campo o el potencial, no la energía: son tres preguntas distintas."
        },
        {
          titulo: "Magnetismo, campo magnético y fuerza de Lorentz",
          objetivo: "Describir el campo magnético, relacionarlo con la corriente eléctrica y aplicar la fuerza sobre un conductor en un campo.",
          teoria:
            "El magnetismo aparece en tres sitios con la misma explicación:\n" +
            "\n" +
            "- **Imanes**: dominance dipolos atómicos desalineados.\n" +
            "- **Corriente eléctrica**: una corriente es un conjunto de cargas en movimiento, y por eso genera campo.\n" +
            "- **Espira de corriente**: el campo de una espira se parece al de un imán de barra.\n" +
            "\n" +
            "El **campo magnético** se mide en teslas (T) y se representa con líneas que son **cerradas**, porque no hay monopolos magnéticos: no existe un imán con un solo polo.\n" +
            "\n" +
            "## Regla de la mano derecha\n" +
            "\n" +
            "Para el campo alrededor de un conductor recto, rodea el cable con la mano derecha en el sentido de la corriente y el pulgar marca el norte del campo.\n" +
            "\n" +
            "## Fuerza sobre una carga en movimiento\n" +
            "\n" +
            "Una carga que se mueve dentro de un campo magnético siente una fuerza:\n" +
            "\n" +
            "$$ F = q v B \\sin\\theta $$\n" +
            "\n" +
            "- Si $$v$$ y $$B$$ son paralelos ($$\\theta = 0$$), la fuerza es **nula**: la carga sigue recta.\n" +
            "- Si son perpendiculares ($$\\theta = 90^\\circ$$, la fuerza es **máxima**.\n" +
            "\n" +
            "Por eso en un selector de velocidad solo pasan las partículas con una velocidad concreta, y por eso las partículas de un ciclotrón giran describiendo círculos.\n" +
            "\n" +
            "glosario:Campo magnético :: Campo que actúa sobre cargas en movimiento; se mide en teslas.\n" +
            "glosario:Tesla :: Unidad del campo magnético en el SI.\n" +
            "glosario:Solenoide :: Bobina larga que genera un campo magnético parecido al de un imán recto.\n" +
            "glosario:Regla de la mano derecha :: Regla que fija la dirección del campo alrededor de un conductor.\n" +
            "glosario:Fuerza magnética :: Fuerza perpendicular a la velocidad y al campo, $$qvB\\sin\\theta$$.\n" +
            "glosario:Polos magnéticos :: Los dos extremos de un imán, norte y sur; siempre aparecen juntos.",
          ejemplo:
            "Un electrón de 1,6 × 10⁻¹⁹ C se mueve a 2 × 10⁶ m/s perpendicularmente a un campo de 0,5 T. Calcula la fuerza.\n" +
            "\n" +
            "## Sustituimos\n" +
            "\n" +
            "$$ F = qvB\\sin 90^\\circ = (1.6 \\times 10^{-19})(2 \\times 10^6)(0.5)(1) $$\n" +
            "\n" +
            "## El producto\n" +
            "\n" +
            "$$ F = 1.6 \\times 10^{-19} \\times 10^6 = 1.6 \\times 10^{-13}\\ \\text{N} $$\n" +
            "\n" +
            "## La dirección de la fuerza\n" +
            "\n" +
            "La fuerza es perpendicular al movimiento. En un campo dirigido hacia dentro del papel, una carga positiva se curvaría hacia arriba; como el electrón tiene carga negativa, gira al revés, en sentido horario.\n" +
            "\n" +
            "!! Comprueba la fuerza magnética\n" +
            "- ¿Qué pasa si la velocidad es paralela al campo?\n" +
            "- Una partícula alfa de carga 2e entra perpendicular a 1 T. ¿Cómo se compara su fuerza con la de un electrón en el mismo campo?\n" +
            ">> Si son paralelos, $$\\sin 0 = 0$$ y la fuerza es nula: no se desvía. La partícula alfa lleva el doble de carga, así que su fuerza es exactamente el doble, si la velocidad es la misma.",
          consejo: "La fórmula lleva $$\\sin\\theta$$ y no $$\\cos\\theta$$: por eso la fuerza es máxima cuando la velocidad es perpendicular al campo. Si en un problema te da la fuerza máxima, van perpendiculares; si te da cero, van paralelos."
        },
      ],
    },,,  ],
};
