const CURSOS = {
  matematica: {
    titulo: "Matemática",
    icono: "bi-calculator",
    descripcion:
      "Domina números, álgebra, geometría y trigonometría con teoría clara y ejemplos resueltos paso a paso.",
    areas: ["Aritmética", "Álgebra", "Geometría", "Trigonometría"],
    ruta: [
      "Refuerza primero operaciones y fracciones: son la base de todo.",
      "Avanza a álgebra y ecuaciones dominando el despeje y la factorización.",
      "Cierra con geometría y trigonometría practicando con figuras reales.",
    ],
    recursos: [
      { titulo: "Khan Academy — Matemáticas en Español", desc: "Videos y práctica ilimitada por tema.", url: "es.khanacademy.org/math" },
      { titulo: "Proyecto Descartes — Matemática", desc: "Actividades interactivas para cada tópico.", url: "proyectodescartes.org" },
      { titulo: "Calculadoras y tablas", desc: "Ten a mano tablas de factorización y fórmulas. Siempre útil en exámenes", url: "" },
    ],
    modulos: [
      {
        titulo: "Módulo 1 · Aritmética y números",
        lecciones: [
          {
            titulo: "Operaciones básicas y jerarquía",
            objetivo: "Resolver con seguridad cualquier expresión numérica respetando el orden de las operaciones, el uso del paréntesis y los signos.",
            teoria:
              "Las operaciones no se ejecutan en el orden en que aparecen, sino en uno fijo que debes memorizar. Ese orden es: primero los **paréntesis, corchetes y llaves**, resueltos de dentro hacia afuera; luego las **potencias y raíces**; después las **multiplicaciones y divisiones**, de izquierda a derecha; y al final las **sumas y restas**, también de izquierda a derecha.\n" +
              "## El paréntesis cambia la respuesta\n" +
              "El paréntesis es la herramienta más poderosa de la aritmética: te permite forzar el orden. Por eso, antes de calcular nada, busca todos los paréntesis y resuélvelos. Cambia el signo de un resultado SIEMPRE que el paréntesis tenga un número negativo delante, porque ese negativo se aplica al resultado completo.\n" +
              "## Cuidado con los signos de las potencias\n" +
              "Aquí hay una distinción que decide puntos: **el exponente negativo pertenece a la potencia, no al número**. En (−3)² el paréntesis hace que el menos se eleve, y (−3)² = 9. En cambio, en −3² no hay paréntesis, así que primero se calcula 3² = 9 y luego se aplica el signo: −3² = −9. Lo mismo ocurre con las raíces: √(−9) no existe en los reales, pero −√9 sí vale −3.\n" +
              "## Propiedades que simplifican el cálculo\n" +
              "Para no hacer cuentas innecesarias usa estas propiedades: la **asociativa** (a + b + c se puede agrupar como a + (b + c)), la **conmutativa** (a + b = b + a) y la **distributiva** (a(b + c) = ab + ac). Con la conmutativa puedes reordenar una suma para juntar términos opuestos: si en 15 − 7 + 3 − 8 sumas primero los positivos (15 + 3 = 18) y luego los negativos (7 + 8 = 15), obtienes 3 sin error. También recuerda que (aᵐ)ⁿ = a^(m·n) y que aᵐ · aⁿ = a^(m+n).",
            ejemplo:
              "Resuelve: −3² + 2 × (5 + 4) − (8 − 6)² ÷ 2\n" +
              "1. Paréntesis: (5 + 4) = 9 y (8 − 6)² = 2² = 4.\n" +
              "2. División: 4 ÷ 2 = 2.\n" +
              "3. Multiplicación: 2 × 9 = 18.\n" +
              "4. Potencia del negativo: −3² = −(3²) = −9, porque no lleva paréntesis.\n" +
              "5. Sumas y restas de izquierda a derecha: −9 + 18 − 2 = 9 − 2 = **7**.\n" +
              "Un error típico es tratar −3² como (−3)². Habría dado 9 + 18 − 2 = 25, que es justamente la respuesta que el distractor espera de quien se confunde con los signos.",
            consejo:
              "En el examen no calcules nada hasta haber resuelto todos los paréntesis. Después anota el resultado de cada paréntesis: ese es tu mapa de trabajo y evita la mayor parte de los errores de signo.",
          },
          {
            titulo: "Divisibilidad y números primos",
            objetivo: "Identificar números primos y aplicar criterios de divisibilidad del 2 al 11.",
            teoria:
              "Un número es primo si solo tiene dos divisores: 1 y él mismo. Los criterios de divisibilidad permiten saber rápido si un número divide a otro: por 2 si termina en par; por 3 si la suma de cifras es múltiplo de 3; por 5 si termina en 0 o 5.",
            ejemplo:
              "¿El 342 es divisible por 3? Suma de cifras: 3+4+2 = 9, que es múltiplo de 3. Sí. Además termina en par, así que también es divisible por 2.",
            consejo:
              "Para factorizar un número, divide siempre primero por los primos menores (2, 3, 5, 7, 11).",
          },
          {
            titulo: "MCM y MCD",
            objetivo: "Calcular el mínimo común múltiplo y el máximo común divisor por descomposición prima.",
            teoria:
              "Descomponé cada número en factores primos. El MCM es el producto de los factores comunes y no comunes con su mayor exponente. El MCD es el producto solo de los factores comunes con su menor exponente.",
            ejemplo:
              "Para 12 (2²·3) y 18 (2·3²): MCM = 2²·3² = 36. MCD = 2·3 = 6.",
            consejo:
              "El MCD siempre divide al MCM. Úsalo para reducciones y distribución equitativa de cantidades.",
          },
          {
            titulo: "Fracciones y decimales",
            objetivo: "Operar con fracciones (suma, resta, multiplicación, división) y convertir a decimales.",
            teoria:
              "Para sumar o restar fracciones se usa un denominador común (idealmente el MCM). Se multiplican en línea (numerador por numerador, denominador por denominador) y para dividir se invierte la segunda fracción y se multiplica.",
            ejemplo:
              "1/2 + 1/3 → común 6 → 3/6 + 2/6 = 5/6. Para dividir 3/4 ÷ 2/5 → 3/4 × 5/2 = 15/8 = 1,875.",
            consejo:
              "Siempre simplifica el resultado final. Una fracción irreducible vale más que un decimal mal aproximado.",
          },
          {
            titulo: "Regla de tres y porcentajes",
            objetivo: "Resolver problemas de proporcionalidad y calcular porcentajes con rapidez.",
            teoria:
              "La regla de tres simple directa relaciona dos magnitudes proporcionales: a/b = c/d. Un porcentaje es una fracción con denominador 100; calcular el 15 % de 200 es 15/100 × 200 = 30.",
            ejemplo:
              "Si 4 cuadernos cuestan $8, ¿cuánto valen 10? 4/10 = 8/x → x = 8×10/4 = $20.",
            consejo:
              "Para aumentos y descuentos sucesivos, trabaja con el porcentaje que queda, no con el que se resta.",
          },
        ],
      },
      {
        titulo: "Módulo 2 · Álgebra",
        lecciones: [
          {
            titulo: "Expresiones algebraicas",
            objetivo: "Reconocer términos, clases de expresiones y reducir términos semejantes.",
            teoria:
              "Una expresión algebraica combina números y letras mediante operaciones. Los términos semejantes tienen la misma parte literal; solo ellos pueden sumarse o restarse reduciendo sus coeficientes.",
            ejemplo:
              "Reduce 3x + 5 − 2x + 4 → (3x − 2x) + (5 + 4) = x + 9.",
            consejo:
              "Escribe siempre los términos semejantes juntos antes de operar; reduces errores de signo.",
          },
          {
            titulo: "Productos notables",
            objetivo: "Aplicar las identidades clave para multiplicar binomios sin distribuir cada término.",
            teoria:
              "Los productos notables principales son: (a+b)² = a² + 2ab + b²; (a−b)² = a² − 2ab + b²; (a+b)(a−b) = a² − b².",
            ejemplo:
              "(x + 5)² = x² + 2·x·5 + 25 = x² + 10x + 25.",
            consejo:
              "Memoriza (a+b)² = a² + 2ab + b²; es el que aparece en casi todos los exámenes.",
          },
          {
            titulo: "Ecuaciones de primer grado",
            objetivo: "Despejar la incógnita en ecuaciones lineales aplicando operaciones inversas.",
            teoria:
              "Una ecuación de primer grado tiene la forma ax + b = c. Para resolverla, se agrupan los términos con x de un lado y los números del otro, luego se divide por el coeficiente.",
            ejemplo:
              "3x − 7 = 14 → 3x = 21 → x = 7.",
            consejo:
              "Verifica siempre reemplazando el valor encontrado en la ecuación original.",
          },
          {
            titulo: "Ecuaciones cuadráticas",
            objetivo: "Resolver ecuaciones de segundo grado por factorización y con la fórmula general.",
            teoria:
              "Para ax² + bx + c = 0 puedes factorizar buscando dos números que sumen b y multipliquen a·c, o usar la fórmula x = [−b ± √(b²−4ac)] / (2a).",
            ejemplo:
              "x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0 → x = 2 o x = 3.",
            consejo:
              "Intenta siempre factorizar primero: es más rápido y menos propenso a errores de signo.",
          },
          {
            titulo: "Sistemas de ecuaciones",
            objetivo: "Resolver sistemas de dos ecuaciones lineales por reducción y sustitución.",
            teoria:
              "En el método de reducción se multiplican una o ambas ecuaciones para que una variable tenga coeficientes opuestos y luego se suma. En sustitución se despeja una variable y se reemplaza en la otra.",
            ejemplo:
              "x + y = 10 y x − y = 4. Sumando: 2x = 14 → x = 7; entonces y = 3.",
            consejo:
              "Elige el método según el sistema: si una variable ya está despejada o tiene coeficiente 1, usa sustitución.",
          },
        ],
      },
      {
        titulo: "Módulo 3 · Geometría",
        lecciones: [
          {
            titulo: "Ángulos y rectas",
            objetivo: "Calcular ángulos entre rectas paralelas cortadas por una secante.",
            teoria:
              "Al cortar dos rectas paralelas con una secante se forman ángulos alternos, correspondientes y conjugados. Los ángulos opuestos por el vértice son iguales, y los adyacentes a una recta suman 180°.",
            ejemplo:
              "Si un ángulo corresponde a uno de 70°, el otro también mide 70°. El conjugado adyacente mide 110°.",
            consejo:
              "Dibuja siempre la figura. Marcar ángulos iguales con colores evita confusiones.",
          },
          {
            titulo: "Triángulos",
            objetivo: "Aplicar la suma de ángulos internos y el teorema de Pitágoras en triángulos.",
            teoria:
              "Los ángulos internos de todo triángulo suman 180°. En un triángulo rectángulo, a² + b² = c², donde c es la hipotenusa (lado opuesto al ángulo recto).",
            ejemplo:
              "Catetos 3 y 4 → hipotenusa = √(9 + 16) = 5.",
            consejo:
              "Reconoce triángulos especiales (3-4-5, 30-60-90) para ahorrar tiempo de cálculo.",
          },
          {
            titulo: "Polígonos y cuadriláteros",
            objetivo: "Calcular perímetros, ángulos internos y diagonales de polígonos regulares.",
            teoria:
              "La suma de ángulos internos de un polígono de n lados es (n − 2)·180°. Las diagonales desde un vértice son n − 3, y el total es n(n−3)/2.",
            ejemplo:
              "Pentágono (5 lados): ángulos internos suman (5−2)·180° = 540°; cada ángulo regular mide 108°.",
            consejo:
              "Para el perímetro basta sumar todos los lados; para el área identifica primero la base y la altura.",
          },
          {
            titulo: "Circunferencia y círculo",
            objetivo: "Relacionar radio, diámetro, longitud y área del círculo.",
            teoria:
              "La circunferencia mide 2πr y el área del círculo es πr². El diámetro es el doble del radio. Un ángulo central de n° abarca un arco de n°.",
            ejemplo:
              "Radio 7 → circunferencia = 2π·7 ≈ 43,96 y área = π·49 ≈ 153,94.",
            consejo:
              "Cuando te pidan un arco, calcula la fracción del ángulo sobre 360° y multiplícala por la circunferencia.",
          },
          {
            titulo: "Perímetros y áreas",
            objetivo: "Calcular áreas de figuras compuestas descomponiendo en figuras simples.",
            teoria:
              "Las áreas se suman o restan según la figura: rectángulo (b·h), triángulo (b·h/2), trapecio ((B+b)·h/2). Para figuras compuestas, divide en figuras conocidas.",
            ejemplo:
              "Un rectángulo 10×4 con un semicírculo de radio 2: área = 40 + π·4/2 = 40 + 2π.",
            consejo:
              "Anota las fórmulas antes de operar. Un área mal identificada se corrige con un buen dibujo.",
          },
        ],
      },
      {
        titulo: "Módulo 4 · Trigonometría",
        lecciones: [
          {
            titulo: "Razones trigonométricas",
            objetivo: "Definir seno, coseno y tangente como razones en un triángulo rectángulo.",
            teoria:
              "Dado un ángulo agudo θ: sen θ = cateto opuesto / hipotenusa; cos θ = cateto adyacente / hipotenusa; tan θ = cateto opuesto / cateto adyacente.",
            ejemplo:
              "Triángulo de hipotenusa 10 y cateto opuesto 6 → sen θ = 6/10 = 0,6.",
            consejo:
              "La frase 'SOH-CAH-TOA' (Sen=Opuesto/Hip, Cos=Adyacente/Hip, Tan=Opuesto/Adyacente) te salvará en el examen.",
          },
          {
            titulo: "Teorema de Pitágoras y ángulos especiales",
            objetivo: "Calcular lados en triángulos de 30°-60°-90° y 45°-45°-90°.",
            teoria:
              "En un triángulo 30-60-90 los lados están en proporción 1 : √3 : 2. En un 45-45-90 los catetos son iguales y la hipotenusa es cateto·√2.",
            ejemplo:
              "Cateto menor 4 en un 30-60-90 → hipotenusa = 8; cateto mayor = 4√3.",
            consejo:
              "Estos dos triángulos aparecen en la mayoría de problemas de admisión. Domínalos primero.",
          },
          {
            titulo: "Resolución de triángulos",
            objetivo: "Resolver triángulos oblicuángulos combinando seno y coseno.",
            teoria:
              "La ley de senos: a/sen A = b/sen B = c/sen C. La ley de cosenos: a² = b² + c² − 2bc·cos A. Úsalas cuando falten lados o ángulos.",
            ejemplo:
              "Con lados b=8, c=6 y ángulo A=60°: a² = 64 + 36 − 2·8·6·0,5 = 52 → a ≈ 7,21.",
            consejo:
              "Si tienes un lado y su ángulo opuesto, usa ley de senos; si tienes dos lados y el ángulo entre ellos, usa cosenos.",
          },
          {
            titulo: "Identidades trigonométricas básicas",
            objetivo: "Simplificar expresiones con las identidades fundamentales.",
            teoria:
              "Las identidades clave: sen²θ + cos²θ = 1; tan θ = sen θ / cos θ; y las razones recíprocas (cosecante, secante, cotangente).",
            ejemplo:
              "Simplifica sen θ / tan θ → sen θ / (sen θ/cos θ) = cos θ.",
            consejo:
              "Empieza siempre simplificando el lado más complejo de la identidad.",
          },
          {
            titulo: "Alturas y distancias",
            objetivo: "Aplicar trigonometría a problemas de ángulos de elevación y depresión.",
            teoria:
              "En problemas de altura h y distancia d con ángulo θ: tan θ = h/d. El ángulo de elevación se mide hacia arriba y el de depresión hacia abajo, desde la línea horizontal.",
            ejemplo:
              "Si el ángulo de elevación a una torre es 30° y la distancia es 100 m: h = 100·tan 30° = 100/√3 ≈ 57,7 m.",
            consejo:
              "Dibuja el triángulo antes de plantear cualquier fórmula; define claramente qué es adyacente y qué es opuesto.",
          },
        ],
      },
    ],
  },

  fisica: {
    titulo: "Física",
    icono: "bi-lightning-charge",
    descripcion:
      "Comprende el movimiento, las fuerzas, la energía y las ondas desde cero con un enfoque práctico.",
    areas: ["Cinemática", "Dinámica", "Estática", "Energía", "Ondas"],
    ruta: [
      "Empieza por magnitudes y unidades para manejar bien los datos.",
      "Domina cinemática antes de dinámica: movimiento primero, fuerzas después.",
      "Cierra con energía y ondas conectando todo lo aprendido.",
    ],
    recursos: [
      { titulo: "Khan Academy — Física", desc: "Videos con simulaciones de movimiento y energía.", url: "es.khanacademy.org/science/physics" },
      { titulo: "Educaplus — Física interactiva", desc: "Laboratorios virtuales de mecánica y ondas.", url: "educaplus.org" },
      { titulo: "Fórmulas de una sola hoja", desc: "Resume cinemática y dinámica en una ficha para repasar. Elabora la tuya al finalizar", url: "" },
    ],
    modulos: [
      {
        titulo: "Módulo 1 · Movimiento y cinemática",
        lecciones: [
          {
            titulo: "Magnitudes y unidades",
            objetivo: "Diferenciar magnitudes escalares y vectoriales y usar unidades del SI.",
            teoria:
              "Las magnitudes escalares tienen solo valor (masa, tiempo), mientras que las vectoriales tienen valor, dirección y sentido (velocidad, fuerza). El Sistema Internacional usa metro, segundo, kilogramo.",
            ejemplo:
              "La distancia (escalar) y el desplazamiento (vectorial) pueden diferir: en 100 m de ida y vuelta la distancia es 200 m y el desplazamiento es 0.",
            consejo:
              "Siempre escribe las unidades en cada resultado; un número sin unidad está incompleto.",
          },
          {
            titulo: "Movimiento rectilíneo uniforme (MRU)",
            objetivo: "Resolver problemas de velocidad constante usando d = v·t.",
            teoria:
              "En el MRU la velocidad es constante, por lo que d = v·t. La velocidad se expresa en m/s o km/h (1 km/h = 1000/3600 m/s ≈ 0,278 m/s).",
            ejemplo:
              "Un auto a 72 km/h (= 20 m/s) recorre en 5 s una distancia de 100 m.",
            consejo:
              "Convierte km/h a m/s dividiendo entre 3,6; es el error más común en estos problemas.",
          },
          {
            titulo: "Movimiento rectilíneo uniformemente variado (MRUV)",
            objetivo: "Aplicar las fórmulas de aceleración constante.",
            teoria:
              "Las ecuaciones del MRUV son: v = v₀ + a·t; d = v₀·t + ½·a·t²; v² = v₀² + 2·a·d. La aceleración es el cambio de velocidad por unidad de tiempo.",
            ejemplo:
              "Partiendo del reposo con a = 4 m/s², tras 3 s: v = 0 + 4·3 = 12 m/s y d = ½·4·9 = 18 m.",
            consejo:
              "Elige la fórmula que no incluya la variable desconocida que no te piden. Reduce el álgebra.",
          },
          {
            titulo: "Caída libre",
            objetivo: "Resolver movimientos verticales con aceleración de la gravedad (g = 9,8 m/s²).",
            teoria:
              "En caída libre solo actúa la gravedad. Las mismas fórmulas del MRUV se usan con a = g: v = g·t, h = ½·g·t², v² = 2·g·h.",
            ejemplo:
              "Tras 2 s, un cuerpo cae h = ½·9,8·4 = 19,6 m y lleva v = 19,6 m/s.",
            consejo:
              "Define un sentido positivo (abajo o arriba) y respétalo en todo el problema. El signo importa.",
          },
          {
            titulo: "Movimiento circular uniforme",
            objetivo: "Calcular rapidez angular, lineal y aceleración centrípeta.",
            teoria:
              "En el MCU la rapidez es constante pero la dirección cambia: ω = θ/t (rad/s), v = ω·r, y a centrípeta = v²/r. Una vuelta completa equivale a 2π radianes.",
            ejemplo:
              "Una rueda de radio 0,5 m gira a 4 rad/s → v = 2 m/s y a = 4/0,5 = 8 m/s².",
            consejo:
              "Distingue frecuencia (vueltas/s) de rapidez angular (rad/s): se conectan con ω = 2π·f.",
          },
        ],
      },
      {
        titulo: "Módulo 2 · Fuerzas y dinámica",
        lecciones: [
          {
            titulo: "Las leyes de Newton",
            objetivo: "Interpretar inercia, masa, aceleración y acción-reacción.",
            teoria:
              "Primera ley: si la fuerza resultante es cero, el cuerpo mantiene su velocidad. Segunda ley: F = m·a. Tercera ley: toda acción tiene una reacción igual y opuesta.",
            ejemplo:
              "Empujas una caja de 2 kg con 10 N → a = 10/2 = 5 m/s².",
            consejo:
              "La tercera ley actúa sobre cuerpos distintos: la jabalina 'empuja' la mano tanto como la mano la lanza.",
          },
          {
            titulo: "Fuerza, masa y aceleración",
            objetivo: "Usar la segunda ley de Newton para resolver gráficos y tablas.",
            teoria:
              "Con F = m·a, un mayor masa necesita más fuerza para la misma aceleración. Si hay varias fuerzas, primero halla la resultante.",
            ejemplo:
              "Dos fuerzas de 30 N y 20 N opuestas sobre 5 kg → resultante 10 N → a = 2 m/s².",
            consejo:
              "Dibuja las fuerzas con flechas (diagrama de cuerpo libre) antes de operar.",
          },
          {
            titulo: "Fuerza de rozamiento",
            objetivo: "Calcular el rozamiento estático y cinético entre superficies.",
            teoria:
              "La fuerza de rozamiento es f = μ·N, donde N es la normal. El coeficiente estático (μe) es mayor que el cinético (μc): hay que vencer más fuerza para iniciar el movimiento.",
            ejemplo:
              "Caja de 10 kg sobre superficie con μc = 0,3 → N = 98 N → f = 0,3·98 = 29,4 N.",
            consejo:
              "La normal no siempre es el peso: en un plano inclinado N = mg·cos θ.",
          },
          {
            titulo: "Plano inclinado",
            objetivo: "Descomponer el peso en componentes paralela y perpendicular al plano.",
            teoria:
              "Sobre un plano inclinado θ, la componente del peso a lo largo del plano es mg·sen θ y la perpendicular es mg·cos θ. La normal equilibra a esta última.",
            ejemplo:
              "En un plano de 30° con masa 2 kg: componente paralela = 2·9,8·0,5 = 9,8 N.",
            consejo:
              "Gira mentalmente el plano hasta que quede horizontal; simplifica el análisis de fuerzas.",
          },
          {
            titulo: "Fuerza centrípeta",
            objetivo: "Aplicar la fuerza que mantiene el movimiento circular.",
            teoria:
              "La fuerza centrípeta apunta al centro: Fc = m·v²/r. Puede ser la tensión, la fricción o la gravedad según el contexto.",
            ejemplo:
              "Una masa de 1 kg con v = 3 m/s en radio 1,5 m → Fc = 1·9/1,5 = 6 N.",
            consejo:
              "Pregunta siempre: ¿qué fuerza apunta al centro? Esa es la fuerza centrípeta.",
          },
        ],
      },
      {
        titulo: "Módulo 3 · Estática y equilibrio",
        lecciones: [
          {
            titulo: "Momento de una fuerza (torque)",
            objetivo: "Calcular el giro producido por una fuerza con M = F·d.",
            teoria:
              "El momento es M = F·d, con d la distancia perpendicular al eje de giro. Su signo indica el sentido: positivo antihorario, negativo horario.",
            ejemplo:
              "Fuerza de 20 N a 0,5 m del eje → M = 10 N·m.",
            consejo:
              "Usa siempre la distancia perpendicular. Si la fuerza está inclinada, proyecta la fuerza sobre la perpendicular.",
          },
          {
            titulo: "Equilibrio de cuerpos",
            objetivo: "Aplicar las condiciones de equilibrio de traslación y rotación.",
            teoria:
              "Un cuerpo está en equilibrio cuando la suma de fuerzas es cero (ΣF = 0) y la suma de momentos es cero (ΣM = 0). Aquí resuelves incógnitas de fuerzas.",
            ejemplo:
              "Una viga de 6 m con pesos en los extremos de 40 N y 20 N: el punto de apoyo se ubica donde se balancean los momentos.",
            consejo:
              "Elige el eje de giro en el punto de apoyo desconocido: su momento se anula.",
          },
          {
            titulo: "Palancas y máquinas simples",
            objetivo: "Usar la ley de la palanca para amplificar fuerzas.",
            teoria:
              "En una palanca F·d₁ = R·d₂. Las máquinas simples (poleas, rampas, cuñas) cambian fuerza por distancia conservando el trabajo.",
            ejemplo:
              "Para levantar 100 N con un brazo de fuerza de 1 m y resistencia a 0,25 m: F = 100·0,25/1 = 25 N.",
            consejo:
              "En poleas fijas la fuerza no se reduce pero cambia de dirección; en móviles la fuerza se divide por el número de cables.",
          },
          {
            titulo: "Centro de gravedad",
            objetivo: "Encontrar el punto donde se concentra el peso de un cuerpo.",
            teoria:
              "El centro de gravedad es el punto donde aplicamos el peso total. En figuras regulares coincide con el centro geométrico; en figuras compuestas se calcula con promedios ponderados por área.",
            ejemplo:
              "Un rectángulo de área 8 y un triángulo de área 2 superpuestos dan un centro de gravedad cerca de la zona de mayor área.",
            consejo:
              "Para figuras compuestas, aplica la fórmula del centroide separando ejes x e y.",
          },
          {
            titulo: "Estabilidad",
            objetivo: "Determinar cuándo un cuerpo se vuelca o permanece estable.",
            teoria:
              "Un cuerpo es estable si la línea del centro de gravedad cae dentro de su base de apoyo. A mayor base y menor altura del centro de gravedad, mayor estabilidad.",
            ejemplo:
              "Un bus está más estable con base ancha y pasajeros abajo; por eso se 'agacha' en curvas.",
            consejo:
              "En problemas de vuelco, compáralo con el ángulo máximo antes de que el centro salga de la base.",
          },
        ],
      },
      {
        titulo: "Módulo 4 · Energía y ondas",
        lecciones: [
          {
            titulo: "Trabajo y potencia",
            objetivo: "Calcular trabajo (W = F·d·cos θ) y potencia (P = W/t).",
            teoria:
              "El trabajo se realiza cuando una fuerza desplaza un cuerpo: W = F·d·cos θ. La potencia es el trabajo por unidad de tiempo, medida en watts.",
            ejemplo:
              "Fuerza de 40 N desplaza 5 m en la misma dirección → W = 200 J; en 4 s, P = 50 W.",
            consejo:
              "Si la fuerza es perpendicular al movimiento (como la normal), su trabajo es cero.",
          },
          {
            titulo: "Energía cinética y potencial",
            objetivo: "Distinguir y calcular las energías de movimiento y posición.",
            teoria:
              "Energía cinética: Ec = ½·m·v². Energía potencial gravitatoria: Ep = m·g·h. La energía se mide en joules (J).",
            ejemplo:
              "Masa de 2 kg a 3 m/s → Ec = ½·2·9 = 9 J. A 5 m de altura → Ep = 2·9,8·5 = 98 J.",
            consejo:
              "La Ec crece con el cuadrado de la velocidad: al doble de velocidad, ¡cuatro veces más energía!",
          },
          {
            titulo: "Conservación de la energía",
            objetivo: "Resolver problemas combinando energía cinética y potencial sin fricción.",
            teoria:
              "En sistemas sin fricción la energía mecánica se conserva: E inicial = E final. La energía de arriba (potencial) se convierte en cinética al bajar.",
            ejemplo:
              "Un cuerpo cae de 10 m de altura: v = √(2·g·h) = √(2·9,8·10) = 14 m/s al llegar al suelo.",
            consejo:
              "Usa conservación cuando haya alturas y velocidades; evita desglosar fuerzas innecesarias.",
          },
          {
            titulo: "Movimiento ondulatorio",
            objetivo: "Relacionar longitud de onda, frecuencia y velocidad de una onda.",
            teoria:
              "Toda onda cumple v = λ·f. Se distingue entre ondas transversales (perpendiculares) y longitudinales (paralelas a la propagación, como el sonido).",
            ejemplo:
              "Onda de frecuencia 50 Hz y longitud de onda 2 m → v = 100 m/s.",
            consejo:
              "A mayor frecuencia, menor longitud de onda para la misma velocidad. Es una relación inversa.",
          },
          {
            titulo: "Sonido y luz",
            objetivo: "Comparar la propagación del sonido y la luz en distintos medios.",
            teoria:
              "El sonido es una onda mecánica longitudinal; necesita un medio y viaja a ~340 m/s en el aire. La luz es una onda electromagnética que viaja a 3×10⁸ m/s y no requiere medio.",
            ejemplo:
              "Ves el relámpago y escuchas el trueno 3 s después: la tormenta está a ~1020 m (340 × 3).",
            consejo:
              "El sonido es más rápido en sólidos que en aire; la luz siempre es la más rápida en el vacío.",
          },
        ],
      },
    ],
  },

  quimica: {
    titulo: "Química",
    icono: "bi-droplet-fill",
    descripcion:
      "Aprende la materia, la tabla periódica, las reacciones y la química orgánica con ejemplos reales.",
    areas: ["Materia", "Tabla periódica", "Estequiometría", "Orgánica"],
    ruta: [
      "Domina el átomo y la tabla periódica: son el mapa de toda la química.",
      "Practica estequiometría hasta que los moles te salgan de memoria.",
      "Termina con reacciones y orgánica aplicando lo aprendido a compuestos reales.",
    ],
    recursos: [
      { titulo: "Khan Academy — Química", desc: "Videos y ejercicios de estructura atómica y reacciones.", url: "es.khanacademy.org/science/chemistry" },
      { titulo: "Tabla periódica interactiva", desc: "Consulta masas y propiedades de cada elemento.", url: "ptable.com" },
      { titulo: "Educaplus — Química", desc: "Laboratorios virtuales de disoluciones y gases.", url: "educaplus.org" },
    ],
    modulos: [
      {
        titulo: "Módulo 1 · Materia y estructura",
        lecciones: [
          {
            titulo: "Estados de la materia",
            objetivo: "Describir sólidos, líquidos, gases y los cambios de estado.",
            teoria:
              "En los sólidos las partículas están ordenadas y vibran; en los líquidos se mueven con libertad limitada; en los gases están separadas y se mueven rápido. Los cambios de estado (fusión, condensación, etc.) son físicos, no alteran la composición.",
            ejemplo:
              "El hielo funde a 0 °C (fusión) y el agua hierve a 100 °C (ebullición) a nivel del mar.",
            consejo:
              "Recuerda la secuencia sublimación hermética: sólido → líquido → gas consume energía; el inverso la libera.",
          },
          {
            titulo: "El átomo y las partículas subatómicas",
            objetivo: "Identificar protones, neutrones y electrones y calcular el número atómico.",
            teoria:
              "El átomo tiene protones (carga +) y neutrones en el núcleo, y electrones (−) en la corteza. El número atómico Z es el número de protones; la masa A = protones + neutrones.",
            ejemplo:
              "Un átomo con 11 protones y 12 neutrones tiene Z = 11 y A = 23; tiene 11 electrones si es neutro.",
            consejo:
              "En un átomo neutro, electrones = protones. Los iones cationes pierden electrones y los aniones ganan.",
          },
          {
            titulo: "La tabla periódica",
            objetivo: "Leer grupos, periodos y ubicar metales, no metales y metaloides.",
            teoria:
              "La tabla se organiza en 18 grupos (columnas) y 7 periodos (filas). Los elementos de un mismo grupo tienen propiedades químicas parecidas. Los metales tienden a perder electrones; los no metales a ganarlos.",
            ejemplo:
              "Los halógenos (grupo 17) son no metales muy reactivos: flúor, cloro, bromo y yodo.",
            consejo:
              "La posición en la tabla te indica la valencia probable: grupo 1 → +1, grupo 2 → +2, etc.",
          },
          {
            titulo: "Enlaces químicos",
            objetivo: "Diferenciar enlace iónico, covalente y metálico.",
            teoria:
              "El enlace iónico transfiere electrones (metal + no metal). El covalente comparte electrones (no metal + no metal). El metálico une metales con un 'mar' de electrones libres.",
            ejemplo:
              "NaCl es iónico (transferencia), H₂O es covalente (comparte), el Fe es metálico.",
            consejo:
              "Para decidir el tipo: dos no metales → covalente; metal + no metal → iónico.",
          },
          {
            titulo: "Nomenclatura inorgánica",
            objetivo: "Nombrar óxidos, hidróxidos, ácidos y sales de forma básica.",
            teoria:
              "Óxidos: metal + oxígeno. Hidróxidos: metal + OH. Ácidos: hidrógeno + no metal. Sales: se forman al neutralizar ácidos con bases.",
            ejemplo:
              "Na₂O → óxido de sodio. NaOH → hidróxido de sodio. HCl → ácido clorhídrico.",
            consejo:
              "Memoriza los sufijos de la nomenclatura tradicional: −oso (menor valencia), −ico (mayor).",
          },
        ],
      },
      {
        titulo: "Módulo 2 · Estequiometría",
        lecciones: [
          {
            titulo: "Mol y masa molar",
            objetivo: "Convertir entre masa, moles y número de partículas.",
            teoria:
              "Un mol contiene 6,022×10²³ partículas (número de Avogadro). La masa molar es la masa de un mol en gramos y coincide con la masa atómica.",
            ejemplo:
              "El agua (H₂O) tiene masa molar 18 g/mol: 2 g de hidrógeno + 16 g de oxígeno.",
            consejo:
              "Usa el triángulo mol-masa-partículas: masa ÷ masa molar = moles; moles × Avogadro = partículas.",
          },
          {
            titulo: "Balanceo de ecuaciones",
            objetivo: "Balancear ecuaciones químicas conservando el número de átomos.",
            teoria:
              "Balancear implica colocar coeficientes para que cada elemento tenga el mismo número de átomos en reactivos y productos. Puedes usar el método por tanteo.",
            ejemplo:
              "H₂ + O₂ → H₂O se balancea: 2H₂ + O₂ → 2H₂O. Ahora 4 H y 2 O en ambos lados.",
            consejo:
              "Empieza balanceando el elemento que aparece una sola vez en cada lado.",
          },
          {
            titulo: "Relaciones de masa entre reactivos y productos",
            objetivo: "Calcular masas en reacciones usando proporciones estequiométricas.",
            teoria:
              "Con la ecuación balanceada, cada coeficiente indica la proporción en moles. Convierte masa a moles, aplica la proporción y regresa a masa.",
            ejemplo:
              "2H₂ + O₂ → 2H₂O: 4 g de H₂ (2 moles) producen 36 g de H₂O (2 moles × 18 g/mol).",
            consejo:
              "Nunca conviertas directamente gramos a gramos; siempre pasa por moles.",
          },
          {
            titulo: "Reactivo limitante",
            objetivo: "Identificar qué reactivo se agota primero y limita el producto.",
            teoria:
              "El reactivo limitante es el que se consume por completo; los demás quedan en exceso. Se identifica comparando los moles disponibles con los que exige la proporción.",
            ejemplo:
              "Con 3 moles de H₂ y 2 de O₂ en 2H₂ + O₂ → 2H₂O, el H₂ se agota (necesita 2 O₂ pero solo hay... el H₂ limita: 3 H₂ requieren 1,5 O₂).",
            consejo:
              "Pregunta clásica: '¿cuánto sobra?' responde calculando lo consumido y restando.",
          },
          {
            titulo: "Gases ideales y rendimiento",
            objetivo: "Aplicar la ley de los gases ideales y calcular rendimiento porcentual.",
            teoria:
              "PV = nRT describe un gas ideal. El rendimiento compara lo obtenido con lo teórico: % = (real/teórico)×100. En gases a la misma presión y temperatura, los volúmenes se relacionan como los moles.",
            ejemplo:
              "Si se esperan 10 g de producto y se obtienen 8: rendimiento = 80 %.",
            consejo:
              "Ajusta las unidades de R al usar PV = nRT (presión en atm, volumen en L, T en K).",
          },
        ],
      },
      {
        titulo: "Módulo 3 · Disoluciones y reacciones",
        lecciones: [
          {
            titulo: "Concentraciones de disoluciones",
            objetivo: "Calcular molaridad, porcentaje en masa y diluciones.",
            teoria:
              "La molaridad es M = moles de soluto / litros de disolución. En diluciones se cumple M₁·V₁ = M₂·V₂: al añadir disolvente, la concentración baja.",
            ejemplo:
              "10 g de NaCl (58,5 g/mol) en 2 L → moles = 0,17 → M = 0,085 mol/L.",
            consejo:
              "La molaridad usa litros de disolución total, no litros de solvente.",
          },
          {
            titulo: "Ácidos y bases",
            objetivo: "Aplicar las teorías de Arrhenius y Brønsted-Lowry.",
            teoria:
              "Un ácido libera H⁺ en agua y una base libera OH⁻. Brønsted-Lowry: el ácido dona protones y la base los acepta. La neutralización forma sal y agua.",
            ejemplo:
              "HCl + NaOH → NaCl + H₂O. El HCl dona H⁺ (ácido) y el NaOH lo acepta (base).",
            consejo:
              "Distingue ácidos fuertes (se disocian por completo) de débiles (equilibrio parcial).",
          },
          {
            titulo: "pH y neutralización",
            objetivo: "Calcular pH y preparar la neutralización de soluciones.",
            teoria:
              "El pH = −log[H⁺]. Valores bajo 7 son ácidos, 7 neutros y mayores básicos. Cada punto de pH representa un factor 10 en acidez.",
            ejemplo:
              "Si [H⁺] = 1×10⁻⁴ M → pH = 4 (ácido suave). Un pH 2 es 100 veces más ácido que uno de pH 4.",
            consejo:
              "Memoriza que log(1×10⁻ⁿ) = −n; con eso resuelves la mayoría de cálculos de pH.",
          },
          {
            titulo: "Reacciones redox",
            objetivo: "Identificar oxidación y reducción por cambio de número de oxidación.",
            teoria:
              "La oxidación pierde electrones (el número de oxidación sube) y la reducción los gana (baja). El agente oxidante se reduce y el reductor se oxida.",
            ejemplo:
              "En Zn + Cu²⁺ → Zn²⁺ + Cu, el Zn sube de 0 a +2 (se oxida, agente reductor) y el cobre baja de +2 a 0 (se reduce).",
            consejo:
              "El mnemotecnias 'LEO dice GER': Ligar Electrones = Oxidación; Ganan Electrones = Reducción.",
          },
          {
            titulo: "Equilibrio químico",
            objetivo: "Interpretar la constante de equilibrio Kc y el principio de Le Chatelier.",
            teoria:
              "En el equilibrio las velocidades de reacción directa e inversa se igualan. Kc = [productos]/[reactivos]. Si se alteran concentración, presión o temperatura, el sistema se desplaza para contrarrestar el cambio.",
            ejemplo:
              "En N₂ + 3H₂ ⇌ 2NH₃ (exotérmica), subir la presión desplaza el equilibrio hacia donde hay menos moles: el NH₃.",
            consejo:
              "El catalizador acelera la llegada al equilibrio pero no lo desplaza.",
          },
        ],
      },
      {
        titulo: "Módulo 4 · Química orgánica",
        lecciones: [
          {
            titulo: "Hidrocarburos",
            objetivo: "Nombrar alcanos, alquenos y alquinos de cadenas simples.",
            teoria:
              "Los alcanos solo tienen enlaces simples (−ano), los alquenos uno doble (−eno) y los alquinos uno triple (−ino). El prefijo indica el número de carbonos (met-, et-, prop-, but-).",
            ejemplo:
              "CH₄ es el metano; C₂H₆ etano; C₂H₄ eteno; C₂H₂ etino.",
            consejo:
              "Cuenta la cadena más larga y numera por el extremo más cercano al doble o triple enlace.",
          },
          {
            titulo: "Grupos funcionales",
            objetivo: "Reconocer los principales grupos funcionales por sus sufijos.",
            teoria:
              "Los grupos funcionales determinan las propiedades: alcoholes (−ol), ácidos (ácido ...oico), éteres, cetonas (−ona) y aminas. La fórmula general define su estructura.",
            ejemplo:
              "CH₃OH es metanol (alcohol); CH₃COOH es el ácido acético del vinagre.",
            consejo:
              "Asocia cada grupo a un ejemplo cotidiano: el etanol de las bebidas, el ácido fórmico de las hormigas.",
          },
          {
            titulo: "Alcoholes y ácidos orgánicos",
            objetivo: "Relacionar estructura, propiedades y usos de alcoholes y ácidos.",
            teoria:
              "Los alcoholes contienen −OH y los ácidos carboxílicos −COOH. El −OH hace solubles en agua; los ácidos más pequeños son líquidos de olor fuerte.",
            ejemplo:
              "El etanol (C₂H₅OH) es un disolvente común; el ácido cítrico da el sabor ácido de las frutas.",
            consejo:
              "Compara puntos de ebullición: los alcoholes hierven más alto que los hidrocarburos por los puentes de hidrógeno.",
          },
          {
            titulo: "Isomería",
            objetivo: "Diferenciar isómeros estructurales, geométricos y de función.",
            teoria:
              "Los isómeros tienen la misma fórmula molecular pero distinta estructura u orden. Estructurales: distinta cadena o posición. Geométricos (cis/trans): distinta disposición alrededor de un doble enlace.",
            ejemplo:
              "C₄H₁₀ tiene dos isómeros estructurales: butano (lineal) y 2-metilpropano (ramificado).",
            consejo:
              "Cuenta los isómeros dibujando cadenas: nunca cambies la fórmula molecular al variar la estructura.",
          },
          {
            titulo: "Polímeros",
            objetivo: "Explicar cómo se forman y clasificar los polímeros naturales y sintéticos.",
            teoria:
              "Los polímeros son macromoléculas formadas por monómeros repetidos. Los naturales incluyen almidón, proteínas y ADN; los sintéticos, plastilina, PET y nylon.",
            ejemplo:
              "El polietileno (plástico de bolsas) polimeriza el eteno: n(CH₂=CH₂) → [−CH₂−CH₂−]ₙ.",
            consejo:
              "Distingue adición (no libera subproductos) de condensación (libera agua u otras moléculas pequeñas).",
          },
        ],
      },
    ],
  },

  "razonamiento-matematico": {
    titulo: "Razonamiento Matemático",
    icono: "bi-brain",
    descripcion:
      "Desarrolla tu lógica con sucesiones, series, planteo de ecuaciones y estadística para exámenes de ingreso.",
    areas: ["Sucesiones", "Series", "Planteo", "Probabilidad"],
    ruta: [
      "Empieza con sucesiones y series para entrenar la observación de patrones.",
      "Avanza al planteo de problemas con edades, mezclas y móviles.",
      "Cierra con probabilidad y gráficos aplicados a preguntas tipo examen.",
    ],
    recursos: [
      { titulo: "Bancos de preguntas de admisión", desc: "Simulacros de RM de diversas universidades. Busca simulacros publicados", url: "" },
      { titulo: "Razonamiento matemático interactivo", desc: "Ejercicios en línea con respuestas comentadas; los simulacros están en el portal CENES de la UNMSM.", url: "" },
      { titulo: "Práctica cronometrada diaria", desc: "Resuelve 5 problemas de RM en 20 minutos. Hábito recomendado", url: "" },
    ],
    modulos: [
      {
        titulo: "Módulo 1 · Habilidades numéricas",
        lecciones: [
          {
            titulo: "Sucesiones aritméticas",
            objetivo: "Hallar términos de sucesiones con diferencia constante.",
            teoria:
              "Una sucesión aritmética avanza sumando siempre la misma diferencia d. El término general es aₙ = a₁ + (n−1)·d.",
            ejemplo:
              "3, 7, 11, 15… con d = 4: el término 10 es a₁₀ = 3 + 9·4 = 39.",
            consejo:
              "Calcula la diferencia entre términos consecutivos antes de intentar cualquier fórmula.",
          },
          {
            titulo: "Sucesiones geométricas",
            objetivo: "Hallar términos de sucesiones con razón constante.",
            teoria:
              "En una sucesión geométrica cada término se obtiene multiplicando por una razón r. El término general es aₙ = a₁·r^(n−1).",
            ejemplo:
              "2, 6, 18, 54… con r = 3: el término 5 es 2·3⁴ = 162.",
            consejo:
              "Si la secuencia crece rápido, sospecha de una razón multiplicativa; comprueba dividiendo términos.",
          },
          {
            titulo: "Series numéricas",
            objetivo: "Sumar los primeros términos de progresiones aritméticas y geométricas.",
            teoria:
              "La suma de una serie aritmética es S = (a₁ + aₙ)·n/2. La de una geométrica finita es S = a₁·(rⁿ −1)/(r − 1).",
            ejemplo:
              "Suma 1 a 100: (1 + 100)·100/2 = 5050. El famoso truco de Gauss.",
            consejo:
              "Para sumas de pares o impares consecutivos, cuenta los términos y usa la fórmula mitad.",
          },
          {
            titulo: "Operadores y fracciones",
            objetivo: "Interpretar operadores arbitrarios definidos en el problema.",
            teoria:
              "Los operadores (∆, *, #, etc.) se definen en el enunciado. Solo debes reemplazar correctamente los valores en la regla dada. Suele combinar fracciones y álgebra.",
            ejemplo:
              "Si a ∆ b = a² − b, entonces 5 ∆ 3 = 25 − 3 = 22.",
            consejo:
              "Lee la definición del operador dos veces; el truco está en respetar los paréntesis.",
          },
          {
            titulo: "Distribuciones numéricas",
            objetivo: "Localizar el número que falta en arreglos y tablas.",
            teoria:
              "En las distribuciones, los números siguen una relación oculta (filas, columnas o diagonales). Analiza primero las filas completas para deducir la regla.",
            ejemplo:
              "En 2·3 + 4 = 10, la regla del arreglo podría ser multiplicar los superiores y sumar el inferior.",
            consejo:
              "Prueba reglas sencillas primero (suma, resta, producto) antes de combinarlas.",
          },
        ],
      },
      {
        titulo: "Módulo 2 · Procesos y planteo de problemas",
        lecciones: [
          {
            titulo: "Planteo de ecuaciones",
            objetivo: "Traducir enunciados verbales a ecuaciones y resolverlos.",
            teoria:
              "Identifica la incógnita, traduce cada frase a una expresión algebraica y plantea una ecuación. Verifica el resultado en el texto del problema.",
            ejemplo:
              "El doble de un número aumentado en 5 es 21: 2x + 5 = 21 → x = 8.",
            consejo:
              "Define con claridad QUÉ es x antes de escribir cualquier ecuación.",
          },
          {
            titulo: "Problemas sobre edades",
            objetivo: "Resolver problemas típicos de edades pasadas, presentes y futuras.",
            teoria:
              "Usa una tabla con las columnas pasado, presente, futuro. La diferencia de edades entre dos personas siempre es constante, y la suma de todo es la que da la pista.",
            ejemplo:
              "Dentro de 5 años, Juan tendrá el doble que hoy: x + 5 = 2x → x = 5.",
            consejo:
              "La clave en edades: la diferencia entre dos personas jamás cambia con los años.",
          },
          {
            titulo: "Mezclas y aleaciones",
            objetivo: "Calcular concentraciones y precios de mezclas.",
            teoria:
              "En mezclas se conservan las cantidades: cantidad × concentración se suman. En aleaciones se trabaja con el metal fino por unidad.",
            ejemplo:
              "Mezclar 2 L al 20 % y 3 L al 10 %: metal total = 0,4 + 0,3 = 0,7 L sobre 5 L → 14 %.",
            consejo:
              "La concentración resultante siempre cae entre las dos concentraciones mezcladas.",
          },
          {
            titulo: "Problemas de móviles",
            objetivo: "Resolver encuentros y persecuciones con rapidez constante.",
            teoria:
              "En encuentros, los móviles cubren la distancia total: (v₁ + v₂)·t = d. En persecución, la distancia inicial se acorta: (v₂ − v₁)·t = d.",
            ejemplo:
              "Dos móviles a 40 y 60 km/h y separados 100 km se encuentran en t = 100/(100) = 1 h.",
            consejo:
              "Dibuja la recta del trayecto y marca el punto de partida de cada uno.",
          },
          {
            titulo: "Cronometría (relojes)",
            objetivo: "Calcular ángulos entre las manecillas del reloj.",
            teoria:
              "El ángulo se calcula con: |30·H − 5,5·M| (grados), donde H es la hora y M los minutos. La manecilla de minutos avanza 6°/min y la de horas 0,5°/min.",
            ejemplo:
              "A las 3:00 → |30·3 − 0| = 90°, el ángulo recto típico.",
            consejo:
              "Para horas exactas sin minutos: cada hora equivale a 30°.",
          },
        ],
      },
      {
        titulo: "Módulo 3 · Razonamiento geométrico",
        lecciones: [
          {
            titulo: "Secuencias de figuras",
            objetivo: "Predecir el siguiente elemento en secuencias gráficas.",
            teoria:
              "Observa rotación, cambio de posición, color o número de lados. Las secuencias gráficas combinan más de un cambio a la vez.",
            ejemplo:
              "Un cuadrado que gira 90° y cambia de tamaño rotando: alterna grande y pequeño.",
            consejo:
              "Aísla cada atributo (forma, tamaño, giro, conteo) antes de combinar las reglas.",
          },
          {
            titulo: "Cortes y estacas",
            objetivo: "Resolver problemas de cortes, estacas y postes.",
            teoria:
              "N cortes producen N+1 piezas en una cinta. En estacas equidistantes en una línea de longitud L con separación s: Nº estacas = L/s + 1.",
            ejemplo:
              "Una cerca de 20 m con postes cada 4 m → 20/4 + 1 = 6 postes.",
            consejo:
              "En figuras cerradas (un círculo), los cortes sí igualan el número de piezas a diferencia de la línea.",
          },
          {
            titulo: "Áreas sombreadas",
            objetivo: "Calcular áreas sombreadas restando figuras conocidas.",
            teoria:
              "El área sombreada suele ser el área de una figura grande menos la de las figuras internas. Identifica cuadrados, rectángulos y semicírculos.",
            ejemplo:
              "Cuadrado de 10×10 con un círculo inscrito de radio 5: sombreado = 100 − π·25.",
            consejo:
              "Reconoce 'espacios vacíos' que juntos forman medio círculo o un rectángulo.",
          },
          {
            titulo: "Perímetros con lógica",
            objetivo: "Calcular perímetros de figuras con contornos irregulares.",
            teoria:
              "Mueve mentalmente los lados 'empujados' para convertir contornos irregulares en rectángulos o formas simples. El perímetro se conserva.",
            ejemplo:
              "Una escalera de 4 peldaños de 2×2 m equivale a un rectángulo de 8×8 → perímetro 32 m.",
            consejo:
              "Todo peldaño horizontal-vertical recupera la base y la altura completas.",
          },
          {
            titulo: "Razonamiento con palitos",
            objetivo: "Resolver problemas de mover, quitar o agregar palitos de fósforo.",
            teoria:
              "Cada palito es un segmento o un lado de una figura. Para transformar una figura, piensa cuántos lados se ganan o pierden al mover un palito.",
            ejemplo:
              "Quitar 1 palito de dos cuadrados compartiendo lado rompe la figura en dos (se pierden 2 lados).",
            consejo:
              "Cuenta lados totales antes y después: mover un palito ni crea ni destruye palitos, solo los reorganiza.",
          },
        ],
      },
      {
        titulo: "Módulo 4 · Estadística y probabilidad",
        lecciones: [
          {
            titulo: "Gráficos estadísticos",
            objetivo: "Leer e interpretar barras, círculos y polígonos de frecuencia.",
            teoria:
              "Los gráficos de barras comparan cantidades, los circulares muestran porcentajes del total (360° = 100 %) y los de línea muestran tendencias.",
            ejemplo:
              "En un gráfico circular, un sector de 90° representa el 25 % del total.",
            consejo:
              "Convierte siempre grados ↔ porcentaje: divide el ángulo entre 3,6.",
          },
          {
            titulo: "Promedios",
            objetivo: "Calcular media aritmética, media ponderada y promedios móviles.",
            teoria:
              "La media aritmética es suma de datos / número de datos. En la media ponderada se multiplica cada valor por su peso. Si un elemento sube, decide cuánto cambia el promedio.",
            ejemplo:
              "Promedio de 3 notas 12, 15 y 9 → (12+15+9)/3 = 12.",
            consejo:
              "Reconstruye la suma total con promedio × cantidad; es la clave de casi todos los problemas de promedio.",
          },
          {
            titulo: "Probabilidad básica",
            objetivo: "Calcular probabilidades de eventos simples como favorables/total.",
            teoria:
              "La probabilidad de un evento es P = casos favorables / casos totales, entre 0 y 1. El complemento (1 − P) es la probabilidad de que NO ocurra.",
            ejemplo:
              "Tirar un dado: P(sacar 4) = 1/6. P(no sacar 4) = 5/6.",
            consejo:
              "Cuenta cuidadosamente los casos totales: la probabilidad nunca supera 1.",
          },
          {
            titulo: "Eventos compuestos",
            objetivo: "Combinar probabilidades con 'y' (producto) y 'o' (suma).",
            teoria:
              "Para eventos independientes, P(A y B) = P(A)·P(B). Para eventos mutuamente excluyentes, P(A o B) = P(A) + P(B).",
            ejemplo:
              "Dos monedas: P(ambas cara) = ½·½ = ¼. P(una cara u otra moneda sale cara) usando suma.",
            consejo:
              "'Sin reemplazo' cambia el total a la segunda extracción; ajústalo siempre.",
          },
          {
            titulo: "Combinatoria simple",
            objetivo: "Contar posibilidades con multiplicación, permutaciones y combinaciones.",
            teoria:
              "Principio multiplicativo: m×n resultados. Permutaciones ordenan (P = n!). Combinaciones ignoran el orden (C = n!/(k!(n−k)!)).",
            ejemplo:
              "Elegir 2 de 5 libros (sin importar orden): C(5,2) = 10 formas.",
            consejo:
              "Pregúntate: ¿importa el orden? Si importa → permutación; si no → combinación.",
          },
        ],
      },
    ],
  },

  "razonamiento-verbal": {
    titulo: "Razonamiento Verbal",
    icono: "bi-chat-quote",
    descripcion:
      "Mejora tu vocabulario, comprensión lectora y precisión en analogías, sinónimos y conectores lógicos.",
    areas: ["Sinónimos", "Antónimos", "Analogías", "Comprensión"],
    ruta: [
      "Amplía vocabulario con listas diarias de sinónimos y antónimos.",
      "Practica analogías y conectores para entrenar la lógica del lenguaje.",
      "Cierra con comprensión lectora cronometrada: la que más puntos da.",
    ],
    recursos: [
      { titulo: "Razonamiento Verbal en línea", desc: "Ejercicios y bancos de preguntas clasificados.", url: "razonamientoverbal.com" },
      { titulo: "Lectura diaria", desc: "Lee un artículo de opinión y resume en 3 líneas. Hábito recomendado", url: "" },
      { titulo: "Diccionario RAE", desc: "Consulta el significado preciso de cada término.", url: "dle.rae.es" },
    ],
    modulos: [
      {
        titulo: "Módulo 1 · Sinonimia y vocabulario",
        lecciones: [
          {
            titulo: "Sinónimos",
            objetivo: "Reconocer palabras con significado equivalente o muy próximo.",
            teoria:
              "Los sinónimos son palabras distintas que comparten un significado. La sinonimia contextual importa: la palabra exacta depende del sentido de la frase.",
            ejemplo:
              "Fidedigno, veraz y fehaciente son sinónimos de 'digno de confianza' en un documento.",
            consejo:
              "Ante dos opciones igual de parecidas, elige la que 'encaje' con el registro del texto.",
          },
          {
            titulo: "Antónimos",
            objetivo: "Reconocer relaciones de oposición entre palabras.",
            teoria:
              "Los antónimos expresan significados opuestos. Pueden ser graduales (frío/calor), complementarios (vivo/muerto) o recíprocos (comprar/vender).",
            ejemplo:
              "El antónimo de 'exuberante' es 'escaso'; el de 'efímero' es 'duradero'.",
            consejo:
              "Forma el antónimo mentalmente agregando 'no' para confirmar la oposición.",
          },
          {
            titulo: "Términos excluidos",
            objetivo: "Identificar la palabra que NO pertenece a una familia de concepto.",
            teoria:
              "Se presenta un término base y varios candidatos. Se excluye el que no guarda la misma relación semántica, aunque se parezca fonéticamente.",
            ejemplo:
              "Si el término base es 'mar', se excluye 'marea'? No: se excluye quien no comparte el campo (p. ej. 'montaña').",
            consejo:
              "Define primero el campo semántico del término base y revisa cada opción contra ese campo.",
          },
          {
            titulo: "Series verbales",
            objetivo: "Continuar secuencias de palabras con una misma relación lógica.",
            teoria:
              "Las series verbales siguen un criterio semántico: sinónimos, aumentos de intensidad, grados u órdenes. Encuentra el patrón entre los primeros términos.",
            ejemplo:
              "lunes, miércoles, viernes, ... → la serie salta de a un día → domingo.",
            consejo:
              "Prueba relaciones de causa-efecto, intensidad o categoría cuando no veas un patrón obvio.",
          },
          {
            titulo: "Familia de palabras",
            objetivo: "Agrupar palabras por su raíz común y significado relacionado.",
            teoria:
              "Las palabras de una misma familia comparten lexema: mar, marine, marea, marinero. Comparten la idea central aunque cambie la terminación.",
            ejemplo:
              "Luz, lucero, lucir, iluminar componen la familia de 'luz'.",
            consejo:
              "Distingue la raíz derivada de la simple coincidencia de letras: 'pan' no es familia de 'panadería' solo por prefijo.",
          },
        ],
      },
      {
        titulo: "Módulo 2 · Semántica y precisión",
        lecciones: [
          {
            titulo: "Analogías",
            objetivo: "Identificar la relación que guardan dos pares de palabras.",
            teoria:
              "Las analogías exigen descubrir la relación del primer par y buscar el par equivalente: sinonimia, causa-efecto, parte-todo, agente-instrumento.",
            ejemplo:
              "Médico : paciente :: maestro : alumno (relación profesional → persona atendida).",
            consejo:
              "Formula la relación como oración corta y aplícala a cada opción hasta que solo sobre una.",
          },
          {
            titulo: "Conectores lógicos",
            objetivo: "Elegir el conector que articula correctamente las ideas del texto.",
            teoria:
              "Los conectores organizan el discurso: aditivos (además), adversativos (pero), causales (porque), consecutivos (por tanto), condicionales (si) y de contraste (sin embargo).",
            ejemplo:
              "Estudió toda la noche; ____, aprobó. → 'por consiguiente' (consecuencia).",
            consejo:
              "Identifica la relación global entre las ideas (contraste, causa, adición) y descarta los conectores de otra familia.",
          },
          {
            titulo: "Plan de redacción",
            objetivo: "Ordenar oraciones para formar un párrafo coherente y lógico.",
            teoria:
              "Busca la oración introductoria (oración temática), luego las que la desarrollan de lo general a lo particular y cierra con la conclusión. Evita saltos de tema.",
            ejemplo:
              "Primero la definición del concepto, después sus tipos y características, y al final su importancia.",
            consejo:
              "La primera oración casi siempre presenta el tema; la última suele concluir o sintetizar.",
          },
          {
            titulo: "Oraciones eliminadas",
            objetivo: "Detectar la oración que se aparta de la idea central del texto.",
            teoria:
              "Una oración eliminada rompe la coherencia o repetitividad: repite información, cambia de tema o es una generalización no relacionada.",
            ejemplo:
              "Si el texto trata de la fotosíntesis, la oración sobre 'historia del microscopio' se elimina.",
            consejo:
              "Define la idea central y verifica que cada oración la sirva; la intrusa suele ser la que no conecta.",
          },
          {
            titulo: "Términos contextuales",
            objetivo: "Deducir el significado de una palabra según el contexto del texto.",
            teoria:
              "El contexto da pistas: definiciones, ejemplos, sinónimos, antónimos o la estructura del párrafo. Elige la opción que encaje en la situación descrita.",
            ejemplo:
              "'Su discurso fue lapidario' → el contexto de severidad indica 'contundente y severo', no 'de piedra'.",
            consejo:
              "Vuelve a leer la oración reemplazando la palabra por la opción elegida; debe sonar natural.",
          },
        ],
      },
      {
        titulo: "Módulo 3 · Comprensión de lectura",
        lecciones: [
          {
            titulo: "Idea principal",
            objetivo: "Identificar la idea central que el autor quiere transmitir.",
            teoria:
              "La idea principal expresa el mensaje nuclear del texto y no debe confundirse con un detalle o ejemplo. Puede aparecer explícita o implícita.",
            ejemplo:
              "En un texto sobre ahorro, la idea es 'el ahorro mejora la seguridad económica', no la lista de consejos.",
            consejo:
              "Pregúntate: '¿qué debo recordar si olvido todo lo demás?'. Eso es la idea principal.",
          },
          {
            titulo: "Comprensión literal",
            objetivo: "Localizar información explícita en el texto.",
            teoria:
              "Las preguntas literales tienen respuesta directa en el texto: datos, fechas, nombres, definiciones. Solo hay que ubicar la información.",
            ejemplo:
              "'El autor nació en 1952' responde directamente cuándo nació, sin interpretar.",
            consejo:
              "Subraya datos y fechas mientras lees: las preguntas literales responden con el mismo texto.",
          },
          {
            titulo: "Comprensión inferencial",
            objetivo: "Deducir información implícita a partir de las pistas del texto.",
            teoria:
              "La inferencia une lo que dice el texto con lo que se puede concluir lógicamente. Exige interpretar, no copiar frases.",
            ejemplo:
              "Si el texto dice 'comenzó a nevar al amanecer', se infiere que la temperatura es baja.",
            consejo:
              "Marca relaciones causa-efecto y comparaciones; las inferencias se apoyan en esos vínculos.",
          },
          {
            titulo: "Lectura crítica",
            objetivo: "Evaluar la validez de los argumentos y la intención del autor.",
            teoria:
              "La lectura crítica cuestiona la información: ¿es el argumento sólido? ¿qué presupone el autor? ¿hay falencias lógicas o parcialidad?",
            ejemplo:
              "Un anuncio que solo muestra los beneficios del producto presupone que no tiene riesgos.",
            consejo:
              "Distinguir hecho (verificable) de opinión (valorativa) es el primer paso de la lectura crítica.",
          },
          {
            titulo: "Textos comparativos y estructuras",
            objetivo: "Reconocer el tipo de estructura textual (causa-efecto, comparación, problema-solución).",
            teoria:
              "Los textos se estructuran para persuadir, informar u entretener: expositivos, argumentativos, narrativos y descriptivos. Identificar la estructura ayuda a predecir preguntas.",
            ejemplo:
              "Un texto que contrasta dos teorías usa estructura de comparación con marcadores como 'mientras', 'por otro lado'.",
            consejo:
              "Observa las palabras clave de cada párrafo: te dicen la estructura sin leer todo.",
          },
        ],
      },
      {
        titulo: "Módulo 4 · Aplicación en exámenes",
        lecciones: [
          {
            titulo: "Estrategia frente a textos largos",
            objetivo: "Administrar el tiempo leyendo con propósito.",
            teoria:
              "Lee primero las preguntas, luego escanea el texto en busca de la información pedida. No necesitas leer palabra por palabra si sabes qué buscar.",
            ejemplo:
              "Ante 4 preguntas sobre un texto de 6 párrafos, ubica primero las respuestas literales y luego trabaja las inferenciales.",
            consejo:
              "En preguntas de opción múltiple, descarta opciones absurdas antes de elegir.",
          },
          {
            titulo: "Eliminación de alternativas",
            objetivo: "Mejorar tus respuestas descartando opciones incorrectas con método.",
            teoria:
              "Primero descarta las que contradicen el texto, luego las demasiado amplias o estrechas y al final elige entre las dos más cercanas usando el matiz exacto.",
            ejemplo:
              "Entre 'el autor critica la tecnología' y 'el autor critica cierto uso de la tecnología', la segunda suele ser correcta.",
            consejo:
              "Busca el modismo del texto: la opción que repite palabras del texto a veces es falsa por sacarlas de contexto.",
          },
          {
            titulo: "Velocidad lectora",
            objetivo: "Leer más rápido sin sacrificar comprensión.",
            teoria:
              "Evita la subvocalización, fija la mirada en grupos de palabras y lee los párrafos por su primera y última oración para anticipar contenido.",
            ejemplo:
              "Doble el vocabulario familiar y apoye el ritmo con el índice a medida que avanza.",
            consejo:
              "Diez minutos de lectura diaria cronometrada mejoran la velocidad notablemente en un mes.",
          },
          {
            titulo: "Vocabulario para el examen (parte 1)",
            objetivo: "Dominar los 50 términos más frecuentes en admisiones.",
            teoria:
              "Repasa listas temáticas: abstractos (efímero, coherente), de actitud (reticente, vehemente), calificativos (lascivo, nefando).",
            ejemplo:
              "'Reticente' significa reacio a hablar; 'vehemente', apasionado intensamente.",
            consejo:
              "Usa cada palabra nueva en una oración propia para fijarla en la memoria.",
          },
          {
            titulo: "Vocabulario para el examen (parte 2)",
            objetivo: "Aplicar atajos de etimología para deducir palabras desconocidas.",
            teoria:
              "Las raíces latinas y griegas revelan significados: 'bi-' (dos), 'anti-' (contra), 'fil-' (amor), 'fob-' (temor). Compón el sentido por partes.",
            ejemplo:
              "'Filántropo' = phil (amor) + anthropos (hombre): quien ama a la humanidad.",
            consejo:
              "Apréndete 20 raíces esenciales y podrás deducir cientos de palabras en el examen.",
          },
        ],
      },
    ],
  },

  comunicacion: {
    titulo: "Comunicación / Lenguaje",
    icono: "bi-chat-square-text",
    descripcion:
      "Perfecciona gramática, ortografía, tilde diacrítica, redacción y literatura para comunicarte con precisión.",
    areas: ["Gramática", "Ortografía", "Redacción", "Literatura"],
    ruta: [
      "Corrige la ortografía y la tilde primero: es puntaje seguro.",
      "Refuerza gramática identificando sujeto, predicado y verbos.",
      "Termina con redacción y literatura para integrar todo.",
    ],
    recursos: [
      { titulo: "RAE — Centro de dudas y DLE", desc: "Consultas directas de significados y ortografía. También en rae.es.", url: "dle.rae.es" },
      { titulo: "Ortografía interactiva", desc: "Ejercicios en línea de tildación y letras dudosas.", url: "reglasdeortografia.com" },
      { titulo: "Antologías y análisis literarios", desc: "Lecturas comentadas de autores clásicos; la antología de la Biblioteca Virtual Miguel de Cienfuegos.", url: "" },
    ],
    modulos: [
      {
        titulo: "Módulo 1 · Gramática",
        lecciones: [
          {
            titulo: "La comunicación y sus funciones",
            objetivo: "Reconocer los elementos y funciones de la comunicación.",
            teoria:
              "La comunicación involucra emisor, receptor, mensaje, código, canal y contexto. Cada antes estudiantes destaca una función: informar (referencial), emocionar (expresiva), convencer (apelativa).",
            ejemplo:
              "Un aviso de tránsito 'PARE' prioriza la función apelativa (llama a actuar al receptor).",
            consejo:
              "Memoriza el mapa de la comunicación con un ejemplo cotidiano de cada función.",
          },
          {
            titulo: "La oración y el sujeto",
            objetivo: "Delimitar oraciones y reconocer el sujeto con sus núcleos.",
            teoria:
              "La oración tiene sujeto y predicado. El sujeto (quien ejecuta o sobre quien se dice algo) tiene como núcleo un sustantivo o pronombre. Para hallarlo, pregunta al verbo: ¿quién?",
            ejemplo:
              "En 'Los niños pequeños corren rápido', el sujeto es 'Los niños pequeños', cuyo núcleo es 'niños'.",
            consejo:
              "El sujeto puede omitirse (tácito): 'Corremos mañana' → sujeto 'nosotros'.",
          },
          {
            titulo: "El predicado",
            objetivo: "Reconocer el predicado, su núcleo verbal y sus complementos.",
            teoria:
              "El predicado dice algo del sujeto y tiene como núcleo un verbo. Los complementos del verbo (directo, indirecto, circunstancial) completan la información.",
            ejemplo:
              "En 'María entregó el informe ayer al director': núcleo 'entregó', CD 'el informe', CI 'al director', CC 'ayer'.",
            consejo:
              "Encuentra primero el verbo conjugado: a partir de él se organiza todo el predicado.",
          },
          {
            titulo: "El verbo",
            objetivo: "Identificar tiempos, modos, personas y números del verbo.",
            teoria:
              "El verbo expresa acción, proceso o estado con tiempo (presente, pasado, futuro), modo (indicativo, subjuntivo, imperativo) y persona. La raíz más la desinencia forman cada forma verbal.",
            ejemplo:
              "'Cantaban' = raíz 'cant-' + desinencia de tercera persona plural, pretérito, indicativo.",
            consejo:
              "Conjuga un verbo modelo completo (amar) y úsalo de referencia para los demás.",
          },
          {
            titulo: "Pronombres y adjetivos",
            objetivo: "Distinguir pronombres de adjetivos y sus clases.",
            teoria:
              "El adjetivo acompaña y modifica al sustantivo; el pronombre lo reemplaza. Se clasifican en personales, demostrativos, posesivos, indefinidos, numerales y relativos.",
            ejemplo:
              "'Mi libro' (posesivo como adjetivo) frente a 'el mío' (poseivo como pronombre).",
            consejo:
              "Un truco: si puede ir acompañando un sustantivo es adjetivo; si lo reemplaza, pronombre.",
          },
        ],
      },
      {
        titulo: "Módulo 2 · Ortografía",
        lecciones: [
          {
            titulo: "Uso de B y V",
            objetivo: "Aplicar las reglas de escritura con b y v.",
            teoria:
              "Se escriben con b los verbos terminados en -bir (excepto hervir, servir y vivir), los prefijos bi-, bis- y los sonidos terminados en -bilidad. Con v, los adjetivos en -avo, -ivo y los tiempos de verbos como andar, estar y tener.",
            ejemplo:
              "Escrito con b: 'recibir', 'biología', 'habilidad'. Con v: 'octavo', 'positivo', 'tuvieron'.",
            consejo:
              "Memoriza las excepciones de -bir: hervir, servir y vivir (con v).",
          },
          {
            titulo: "Uso de S, C y Z",
            objetivo: "Diferenciar s, c y z según las reglas ortográficas.",
            teoria:
              "Se escriben con c los plurales de -z (luz→luces) y la terminación -ción cuando deriva de -do, -to. Con z, los sufijos -azo, -ez y -eza. Con s, adjetivos en -oso y sustantivos en -sión derivados de verbos en -der, -dir, -tir.",
            ejemplo:
              "'Comprensión' (de comprender) con s; 'precisión' (de preciso) con c.",
            consejo:
              "Busca el verbo de origen: revela si lleva s o c en la terminación.",
          },
          {
            titulo: "Uso de G y J y de la H",
            objetivo: "Aplicar las reglas de g/j y la h muda.",
            teoria:
              "Con g: los verbos terminados en -ger y -gir (excepto tejer y crujir) y el sonido ge/gi. Con j: las palabras con -aje y los pretéritos de los verbos en -decir y -traer. La h es muda y se mantiene en palabras patrimoniales.",
            ejemplo:
              "Recoger (excepto tejer, crujir), pero 'garaje' y 'viaje' se escriben con j.",
            consejo:
              "Los sustantivos en -aje y -jería casi siempre llevan j. Muy pocas excepciones.",
          },
          {
            titulo: "La tilde general (agudas, graves, esdrújulas)",
            objetivo: "Aplicar las reglas de acentuación según la sílaba tónica.",
            teoria:
              "Agudas llevan tilde si terminan en n, s o vocal. Graves (llanas) si NO terminan en n, s o vocal. Esdrújulas y sobresdrújulas siempre llevan tilde.",
            ejemplo:
              "Café (aguda, termina en vocal), árbol (grava, termina en l), sílaba (esdrújula, siempre).",
            consejo:
              "Aprende el truco de la 'moneda': si termina en N, S o vocal y es aguda... la regla de tres es suficiente.",
          },
          {
            titulo: "Tilde diacrítica y en diptongos/hiatos",
            objetivo: "Diferenciar palabras iguales por el acento y acentuar diptongos e hiatos.",
            teoria:
              "La tilde diacrítica diferencia: tú/tu, él/el, sí/si, más/mas, dé/de, sé/se. En diptongos la tilde va en la vocal abierta; en hiatos con vocal débil tónica (ías, úe), va sobre esa débil.",
            ejemplo:
              "'Él sabe más que tú' lleva tildes; 'el sabe mas de lo que se le dio' no.",
            consejo:
              "Para hiatos del tipo 'raíz', la tilde rompe el diptongo: la vocal débil se hace tónica.",
          },
        ],
      },
      {
        titulo: "Módulo 3 · Redacción",
        lecciones: [
          {
            titulo: "El párrafo y la idea central",
            objetivo: "Escribir párrafos con unidad, coherencia y cohesión.",
            teoria:
              "Un párrafo desarrolla UNA idea principal con oraciones secundarias de apoyo. Debe cumplir unidad (todos giran en torno a la idea), coherencia y cohesión.",
            ejemplo:
              "Idea central + datos, ejemplos y explicación. Cierra con una oración que resume o conecta.",
            consejo:
              "Escribe la oración temática al inicio y desarrolla lo prometido; revisa que no se filtre otra idea.",
          },
          {
            titulo: "Cohesión y conectores",
            objetivo: "Unir ideas fluidamente con conectores apropiados.",
            teoria:
              "La cohesión enlaza oraciones con conectores de adición, contraste, causa y consecuencia, junto con pronombres y sinónimos para evitar repeticiones.",
            ejemplo:
              "'Sin embargo' (contraste) y 'por lo tanto' (consecuencia) orientan la lectura del párrafo.",
            consejo:
              "No abuses de los conectores; cada uno debe reflejar una relación real entre las ideas.",
          },
          {
            titulo: "Tipos de texto",
            objetivo: "Diferenciar narración, descripción, exposición y argumentación.",
            teoria:
              "La narración cuenta hechos en el tiempo; la descripción presenta características; la exposición explica un tema de forma objetiva; la argumentación defiende un punto de vista con razones.",
            ejemplo:
              "Una noticia es expositiva; un editorial es argumentativo; una crónica mezcla narración y descripción.",
            consejo:
              "Reconoce la intención y estructura para elegir los recursos adecuados de cada tipo.",
          },
          {
            titulo: "El ensayo",
            objetivo: "Estructurar un ensayo: introducción, desarrollo y conclusión.",
            teoria:
              "El ensayo expone y argumenta sobre un tema libre. La introducción presenta la tesis, el desarrollo aporta argumentos y evidencias, y la conclusión sintetiza y deja una reflexión.",
            ejemplo:
              "Tesis: 'la lectura forma el pensamiento crítico'. Desarrollo: tres argumentos con ejemplos. Cierre: refuerzo de la tesis.",
            consejo:
              "Redacta la tesis antes del desarrollo; así todo el cuerpo del ensayo la sostiene.",
          },
          {
            titulo: "Corrección de estilo",
            objetivo: "Revisar y mejorar la claridad de un texto propio.",
            teoria:
              "Corrige por pasos: 1) contenido y orden, 2) gramática y concordancia, 3) ortografía y puntuación, 4) estilo (eliminar repeticiones y ambigüedades).",
            ejemplo:
              "Reemplazar 'El coche rojo es rojo' por 'El coche rojo ...' y cortar oraciones largas confusas.",
            consejo:
              "Lee en voz alta: los errores de ritmo y concordancia se notan al escuchar.",
          },
        ],
      },
      {
        titulo: "Módulo 4 · Literatura",
        lecciones: [
          {
            titulo: "Géneros literarios",
            objetivo: "Distinguir lírica, narrativa, dramática y sus subgéneros.",
            teoria:
              "La lírica expresa sentimientos (poema, himno); la narrativa cuenta historias (cuento, novela, epopeya); la dramática se escribe para representar (tragedia, comedia, drama).",
            ejemplo:
              "Un soneto es lírico; 'Cien años de soledad' es narrativo; 'Hamlet' es dramático.",
            consejo:
              "Asocia cada género a su intención: cantar, contar o representar.",
          },
          {
            titulo: "Figuras literarias",
            objetivo: "Identificar metáfora, metáfora, símil, hipérbole y personificación.",
            teoria:
              "La metáfora traslada el significado (identificación), el símil compara con 'como', la hipérbole exagera, la personificación da cualidades humanas a lo no humano.",
            ejemplo:
              "'Tus ojos son dos luceros' = metáfora. 'Brillan como el sol' = símil.",
            consejo:
              "Distingue metáfora (sin 'como') de símil (con 'como'); es la pregunta más frecuente.",
          },
          {
            titulo: "Corrientes y autores esenciales",
            objetivo: "Ubicar grandes autores por época y corriente.",
            teoria:
              "Del romanticismo (Bécquer), realismo (Galdós), modernismo (Rubén Darío) y vanguardias (Vallejo, Neruda) llegan las obras más pedidas. Ubica autor, obra y movimiento.",
            ejemplo:
              "César Vallejo → vanguardismo y 'Trilce'; José María Arguedas → indigenismo y 'Los ríos profundos'.",
            consejo:
              "Haz una línea de tiempo con autor + obra + corriente: basta para la mayoría de preguntas.",
          },
          {
            titulo: "Análisis de poemas",
            objetivo: "Interpretar el contenido y la forma de un poema.",
            teoria:
              "Analiza primero el hablante lírico y el tema, luego las figuras y el ritmo (verso, estrofa, sílabas). Relaciona fondo (qué dice) y forma (cómo lo dice).",
            ejemplo:
              "En un poema de amor, identifica el tú poético, las metáforas y la musicalidad de los versos.",
            consejo:
              "Responde primero '¿qué sentimiento domina?'; la poesía siempre comunica una emoción.",
          },
          {
            titulo: "Recursos para estudiar literatura",
            objetivo: "Aprovechar antologías, resúmenes y técnicas de repaso.",
            teoria:
              "Combina resúmenes y análisis comentados: lee la obra original cuando puedas y usa fichas de autor-contexto-tema-estilo. Practica con exámenes pasados.",
            ejemplo:
              "Crea una ficha para cada obra: autor, año, género, tema central, personajes, estilo.",
            consejo:
              "Cuando no haya tiempo de leer la obra completa, estudia fragmentos comentados de las escenas clave.",
          },
        ],
      },
    ],
  },



  historia: {
    titulo: "Historia del Perú y Universal",
    icono: "bi-flag",
    descripcion:
      "Recorre el poblamiento de América, el Perú prehispánico, la colonia, la república y los grandes procesos universales con cronología y análisis.",
    areas: ["Perú prehispánico", "Colonia", "República", "Historia universal"],
    ruta: [
      "Ubica cada etapa en su línea de tiempo antes de leer los detalles.",
      "Conecta causas sociales y económicas con cada proceso político.",
      "Cierra aplicando el análisis a preguntas de examen de admisión.",
    ],
    recursos: [
      { titulo: "MINEDU — Ciencias Sociales", desc: "Recursos oficiales del área.", url: "minedu.gob.pe" },
      { titulo: "Historia comentada en videos", desc: "Cronologías animadas y biografías, en canales educativos de YouTube.", url: "youtube.com" },
      { titulo: "Línea de tiempo propia", desc: "Actividad recomendada: elabora un eje cronológico del Perú y del mundo.", url: "" },
    ],
    modulos: [
      {
        titulo: "Módulo 1 · Poblamiento y Perú prehispánico",
        lecciones: [
          {
            titulo: "El poblamiento de América",
            objetivo: "Comparar las teorías sobre el origen del hombre americano.",
            teoria:
              "La teoría más aceptada es la del origen asiático (estrecho de Bering) propuesta por Ales Hrdlička. También destacan la teoría australiana de Mendes Correia y la oceánica de Paul Rivet.",
            ejemplo:
              "Los hallazgos de Monte Verde (Chile) y la ruta costera por el Pacífico refuerzan un ingreso temprano.",
            consejo:
              "Memoriza: Hrdlička (Bering), Rivet (Oceánico) y Ameghino (autoctonista, refutada).",
          },
          {
            titulo: "Caral y las primeras civilizaciones",
            objetivo: "Explicar la importancia de Caral como civilización madre.",
            teoria:
              "Caral (3000-1800 a. C.), en Supe (Lima), es considerada la civilización más antigua de América: arquitectura monumental, organización urbana y comercio, sin cerámica ni guerreros.",
            ejemplo:
              "Los geoglifos, la pirámide mayor y los quipus caraleños muestran una sociedad avanzada.",
            consejo:
              "Distingue Caral (Arcaico tardío) de Chavín (Horizonte temprano).",
          },
          {
            titulo: "Culturas preincas: Chavín, Paracas y Moche",
            objetivo: "Comparar las principales culturas del Perú antiguo.",
            teoria:
              "Chavín (Huántar): centro religioso panandino con el Lanzón y la cerámica incisa. Paracas (Ica): trepanaciones craneanas y fardos funerarios. Moche (norte): cerámica escultórica (huacos retrato) y la Señora de Cao.",
            ejemplo:
              "Las líneas de Nazca y los acueductos de Cantalloc muestran el dominio del desierto costero.",
            consejo:
              "Asocia cada cultura con su aporte más representativo: Chavín-religión, Moche-cerámica, Nazca-geoglifos.",
          },
          {
            titulo: "Los incas: origen y expansión",
            objetivo: "Explicar la formación y expansión del Tahuantinsuyo.",
            teoria:
              "Manco Cápac fundó el Cusco según la leyenda. Los incas expandieron su imperio desde el Cusco con Pachacútec, Túpac Yupanqui y Huayna Cápac, integrando los cuatro suyos hasta abarcar gran parte de Sudamérica.",
            ejemplo:
              "Pachacútec venció a los chancas y organizó el imperio; los quipus y la reciprocidad sostuvieron la economía.",
            consejo:
              "Ruta clave: Manco Cápac → Pachacútec (imperio) → Atahualpa (caída).",
          },
          {
            titulo: "Organización social inca",
            objetivo: "Describir la organización social, política y económica inca.",
            teoria:
              "La base era el ayllu. La sociedad se organizó en: rey (Sapa Inca), nobleza, pueblos y yanaconas. La economía usaba la mita, la reciprocidad y la redistribución; la tecnología destacó en andenes (sistemas de riego) y caminos.",
            ejemplo:
              "La mita era trabajo por turnos; el ayllu trabajaba tierras comunales (tierras del Inti, del Inca y del pueblo).",
            consejo:
              "Recuerda la tríada económica inca: reciprocidad, redistribución y mita.",
          },
        ],
      },
      {
        titulo: "Módulo 2 · La conquista y el virreinato",
        lecciones: [
          {
            titulo: "La conquista del Tahuantinsuyo",
            objetivo: "Secuenciar la llegada española y la caída del imperio.",
            teoria:
              "Francisco Pizarro llegó en 1532, capturó a Atahualpa en Cajamarca y, tras el rescate, lo ejecutó (1533). Se fundó Lima (Ciudad de los Reyes, 1535) y se inició la colonia.",
            ejemplo:
              "La muerte de Atahualpa y la guerra civil entre conquistadores facilitaron la dominación española.",
            consejo:
              "Ordena: Cajamarca (1532) → ejecución de Atahualpa → fundación de Lima (1535).",
          },
          {
            titulo: "El virreinato: política y sociedad",
            objetivo: "Explicar la organización política del virreinato del Perú.",
            teoria:
              "El virreinato del Perú (1542) fue gobernado por un virrey que representaba al rey. Se organizó con audiencias, corregimientos y el Consejo de Indias. La sociedad colonial fue jerárquica: peninsulares, criollos, mestizos, indígenas y esclavos.",
            ejemplo:
              "La Real Audiencia de Lima y las intendencias administraban justicia y gobierno.",
            consejo:
              "Recuerda la pirámide social: rey → virrey → audiencias → corregidores → pueblo.",
          },
          {
            titulo: "Economía colonial y la mita",
            objetivo: "Analizar la economía colonial y la explotación.",
            teoria:
              "La economía giró en torno a la minería (Potosí), el comercio monopólico y el tributo. La mita colonial obligaba a los indígenas a trabajar en las minas; la encomienda y el obraje completaban la explotación.",
            ejemplo:
              "El cerro de Potosí financió el imperio español; la plata viajó a Europa vía Sevilla.",
            consejo:
              "Conecta: minería + mita + tributo = base de la economía colonial.",
          },
          {
            titulo: "Las reformas borbónicas",
            objetivo: "Explicar las reformas del siglo XVIII y sus consecuencias.",
            teoria:
              "Los Borbones reorganizaron el imperio: intendencias, libre comercio, mayor control fiscal. Estas reformas redujeron el poder criollo y aumentaron el descontento que desembocó en las rebeliones.",
            ejemplo:
              "La creación del virreinato del Río de la Plata (1776) restó territorio al virreinato peruano.",
            consejo:
              "Relaciona reformas borbónicas con el malestar previo a las rebeliones.",
          },
          {
            titulo: "Rebeliones y Túpac Amaru II",
            objetivo: "Analizar la gran rebelión de 1780.",
            teoria:
              "José Gabriel Condorcanqui, Túpac Amaru II, lideró en 1780 la mayor rebelión anticolonial: denunció los abusos, la mita y el mal gobierno. Fue derrotado en 1781 y ejecutado en el Cusco.",
            ejemplo:
              "La rebelión se originó en Tinta (Cusco) y buscó unificar criollos, mestizos e indígenas.",
            consejo:
              "Recuerda el lema de la rebelión: la defensa de los pueblos frente a los abusos coloniales.",
          },
        ],
      },
      {
        titulo: "Módulo 3 · La Independencia y la República",
        lecciones: [
          {
            titulo: "La Independencia del Perú",
            objetivo: "Explicar las corrientes libertadoras y la proclamación.",
            teoria:
              "La Corriente Libertadora del Sur (San Martín) proclamó la independencia en Lima (1821). La Corriente del Norte (Bolívar) completó la liberación con las batallas de Junín y Ayacucho (1824), poniendo fin al dominio español en América del Sur.",
            ejemplo:
              "San Martín declaró la independencia el 28 de julio de 1821; Sucre triunfó en Ayacucho.",
            consejo:
              "Distingue: San Martín (sur) proclama; Bolívar (norte) consolida la victoria final.",
          },
          {
            titulo: "El primer militarismo",
            objetivo: "Analizar el caudillismo posterior a la independencia.",
            teoria:
              "Tras la independencia, los caudillos militares disputaron el poder (Gamarra, Santa Cruz, Salaverry). Andrés de Santa Cruz formó la Confederación Perú-Boliviana (1836-1839), que fue disuelta tras la batalla de Yungay.",
            ejemplo:
              "La Confederación unió Perú y Bolivia, pero despertó la oposición de Chile y Argentina.",
            consejo:
              "Memoriza la secuencia: independencia → caudillismo → confederación → anarquía.",
          },
          {
            titulo: "El guano y el salitre",
            objetivo: "Explicar la bonanza económica y su mal uso.",
            teoria:
              "La venta del guano y el salitre (1840-1870) generó enormes ingresos al Estado, pero se malgastaron en gastos suntuarios y obras sin planificación, dejando al país endeudado y sin industria.",
            ejemplo:
              "Los consignatarios extranjeros y los empréstitos con el contrato Dreyfus hipotecaron los recursos.",
            consejo:
              "Recuerda: bonanza mal administrada → crisis fiscal → debilidad ante la guerra.",
          },
          {
            titulo: "La Guerra del Pacífico",
            objetivo: "Analizar las causas y consecuencias de la guerra de 1879.",
            teoria:
              "La guerra (1879-1883) enfrentó a Perú y Bolivia contra Chile por el control del salitre. Tras las acciones navales (Capitán Prat, Alfonso Ugarte en Arica) y las terrestres, Perú perdió Arica y Tarapacá (Tratado de Ancón, 1883).",
            ejemplo:
              "Miguel Grau (Húsares) y Cáceres (brevete de la resistencia, 'brujo de los Andes').",
            consejo:
              "Asocia cada héroe con su gesta: Grau (mar), Bolognesi (Arica), Cáceres (resistencia).",
          },
          {
            titulo: "La Reconstrucción Nacional",
            objetivo: "Analizar la posguerra y la reconstrucción del Estado.",
            teoria:
              "Tras la guerra, el Perú debió reconstruirse. Gobiernos como el de Andrés Cáceres y luego el Oncenio de Leguía (1919-1930) impulsaron modernización, obra pública y nuevas industrias, manteniendo tensiones sociales.",
            ejemplo:
              "La 'Patria Nueva' de Leguía atrajo inversión extranjera y crecimiento urbano, pero generó deuda.",
            consejo:
              "Conecta reconstrucción con nuevos partidos y el surgimiento de movimientos sociales.",
          },
        ],
      },
      {
        titulo: "Módulo 4 · Historia Universal",
        lecciones: [
          {
            titulo: "Las primeras civilizaciones",
            objetivo: "Comparar Mesopotamia y Egipto.",
            teoria:
              "Las primeras civilizaciones surgieron en los grandes ríos: Mesopotamia (entre Tigris y Éufrates) y Egipto (Nilo). Desarrollaron escritura, leyes, agricultura y ciudades-Estado o imperios teocráticos.",
            ejemplo:
              "Código de Hammurabi (Mesopotamia) y las pirámides de Egipto son hitos clave.",
            consejo:
              "Memoriza: río + escritura + leyes = civilización fluvial.",
          },
          {
            titulo: "Grecia y Roma",
            objetivo: "Comparar las civilizaciones clásicas.",
            teoria:
              "Grecia aportó la democracia, la filosofía y el arte (polis). Roma pasó de monarquía a república y luego imperio, desarrollando el derecho y expandiéndose. Roma cayó en 476 d. C. (Occidente).",
            ejemplo:
              "Atenas dio la democracia; Roma, el Derecho y el latín.",
            consejo:
              "Distingue aportes griegos (cultura) de los romanos (ley, organización).",
          },
          {
            titulo: "La Edad Media",
            objetivo: "Explicar el feudalismo y las cruzadas.",
            teoria:
              "La Edad Media (siglo V-XV) se organizó en el feudalismo: señores, vasallos y siervos. La Iglesia tuvo gran poder, y las cruzadas (siglos XI-XIII) buscaron recuperar Tierra Santa.",
            ejemplo:
              "El sistema feudal se basó en el feudo: tierra concedida por fidelidad.",
            consejo:
              "Asocia feudalismo con economía agraria y fragmentación del poder.",
          },
          {
            titulo: "La Edad Moderna",
            objetivo: "Explicar el Renacimiento y los grandes descubrimientos.",
            teoria:
              "La Edad Moderna trajo el Humanismo y el Renacimiento (siglos XV-XVI), la Reforma protestante (Lutero) y la era de los descubrimientos: Colón llegó a América en 1492 y la ciencia avanzó con Galileo y Copérnico.",
            ejemplo:
              "La imprenta de Gutenberg difundió las ideas; la Reforma dividió a la cristiandad.",
            consejo:
              "Conecta Renacimiento + descubrimientos + reforma = transformación del mundo.",
          },
          {
            titulo: "La Edad Contemporánea",
            objetivo: "Explicar las revoluciones y guerras mundiales.",
            teoria:
              "La Edad Contemporánea (desde 1789) incluye la Revolución Industrial y las revoluciones liberales. El siglo XX estuvo marcado por las dos guerras mundiales, la Guerra Fría y la globalización.",
            ejemplo:
              "La Revolución Industrial (Inglaterra) y la Revolución Francesa transformaron la sociedad.",
            consejo:
              "Secuencia global: guerra fría → caída del muro (1989) → globalización actual.",
          },
        ],
      },
    ],
  },

  "ciencia-tecnologia-ambiente": {
    titulo: "Ciencia, Tecnología y Ambiente",
    icono: "bi-leaf",
    descripcion:
      "Comprende la vida, el cuerpo humano, la materia, la energía y el cuidado del ambiente con una mirada científica y práctica.",
    areas: ["Seres vivos", "Cuerpo humano", "Materia", "Ambiente"],
    ruta: [
      "Empieza por los seres vivos y la célula: es la base del curso.",
      "Avanza al cuerpo humano entendiendo los sistemas.",
      "Cierra con materia, energía y cuidado ambiental aplicado.",
    ],
    recursos: [
      { titulo: "MINEDU — CTA", desc: "Material oficial del área.", url: "minedu.gob.pe" },
      { titulo: "Aprende con videos de ciencia", desc: "Experimentos y explicaciones sencillas, en canales educativos de YouTube.", url: "youtube.com" },
      { titulo: "Cuidado del ambiente", desc: "Consejos prácticos para el hogar, del Ministerio del Ambiente.", url: "www.minam.gob.pe" },
    ],
    modulos: [
      {
        titulo: "Módulo 1 · La vida y los seres vivos",
        lecciones: [
          {
            titulo: "La célula y sus partes",
            objetivo: "Identificar las partes de la célula y sus funciones.",
            teoria:
              "La célula es la unidad básica de los seres vivos. La eucariota tiene núcleo definido y organelos: membrana, citoplasma, núcleo, mitocondrias, ribosomas, retículo y Aparato de Golgi. La procariota (bacterias) no tiene núcleo.",
            ejemplo:
              "La mitocondria produce energía (respiración celular); los ribosomas fabrican proteínas.",
            consejo:
              "Asocia cada organelo con su función: mitocondria=energía, núcleo=control genético.",
          },
          {
            titulo: "Clasificación de los seres vivos",
            objetivo: "Clasificar los seres vivos en los cinco reinos.",
            teoria:
              "Se clasifican en Monera (bacterias), Protista (protozoos y algas), Fungi (hongos), Plantae (plantas) y Animalia (animales). La taxonomía va de reino a especie.",
            ejemplo:
              "La bacteria es Monera; el hongo es Fungi; el ser humano, Animalia.",
            consejo:
              "Memoriza: Monera-Protista-Fungi-Plantae-Animalia con la frase 'Mi Papá Fue Plantador Asombroso'.",
          },
          {
            titulo: "Biodiversidad y ecosistemas",
            objetivo: "Explicar la biodiversidad y el flujo de energía.",
            teoria:
              "El ecosistema incluye seres vivos (bióticos) y no vivos (abióticos) que interactúan. La energía fluye desde los productores (plantas) hasta los consumidores y descomponedores, en cadenas y redes alimenticias.",
            ejemplo:
              "Cadena: hierba → conejo → zorro. La energía se pierde en cada eslabón.",
            consejo:
              "Identifica primero a los productores: son siempre la base de la cadena.",
          },
          {
            titulo: "El cuerpo humano: sistemas",
            objetivo: "Describir los sistemas del organismo.",
            teoria:
              "El cuerpo humano se organiza en sistemas: digestivo, respiratorio, circulatorio, nervioso, excretor y reproductor. Cada órgano cumple una función integrada para mantener la homeostasis.",
            ejemplo:
              "El sistema digestivo transforma alimentos; el respiratorio intercambia gases; el circulatorio transporta nutrientes y oxígeno.",
            consejo:
              "Asocia cada sistema con su función principal y con un órgano clave.",
          },
          {
            titulo: "Salud y prevención",
            objetivo: "Promover hábitos para una vida saludable.",
            teoria:
              "Una buena salud depende de alimentación balanceada, ejercicio, descanso e higiene. Prevenir enfermedades implica vacunas, higiene personal y evitar el consumo de sustancias nocivas.",
            ejemplo:
              "La higiene de manos y la vacunación son las medidas más efectivas de prevención.",
            consejo:
              "En el examen, distingue hábitos preventivos (hábitos) de curativos (tratamiento).",
          },
        ],
      },
      {
        titulo: "Módulo 2 · Materia, energía y fenómenos",
        lecciones: [
          {
            titulo: "La materia y sus propiedades",
            objetivo: "Clasificar la materia y sus estados.",
            teoria:
              "La materia tiene masa y volumen y se presenta en estados: sólido, líquido y gaseoso. Sus propiedades pueden ser intensivas (densidad, punto de ebullición) o extensivas (masa, volumen).",
            ejemplo:
              "El agua en hielo (sólido), río (líquido) y vapor (gaseoso) es siempre H₂O.",
            consejo:
              "Recuerda que un cambio de estado no altera la composición de la materia.",
          },
          {
            titulo: "La energía y sus formas",
            objetivo: "Identificar las formas de energía y sus transformaciones.",
            teoria:
              "La energía puede ser cinética (movimiento), potencial (posición), térmica, química, eléctrica, luminosa y nuclear. Se transforma: una represa convierte energía potencial en eléctrica.",
            ejemplo:
              "Una planta: luz (solar) → química (fotosíntesis). Una moto: química → cinética.",
            consejo:
              "Traza el camino: de qué forma parte y a qué forma llega la energía.",
          },
          {
            titulo: "Ondas: sonido y luz",
            objetivo: "Comparar el sonido y la luz.",
            teoria:
              "El sonido es una onda mecánica que necesita un medio para propagarse; la luz es una onda electromagnética que puede viajar en el vacío. El sonido viaja más lento que la luz (por eso vemos el rayo antes del trueno).",
            ejemplo:
              "La velocidad del sonido en el aire es ~340 m/s; la de la luz ~300 000 km/s.",
            consejo:
              "Asocia: sonido = mecánico (necesita medio); luz = puede viajar en vacío.",
          },
          {
            titulo: "Electricidad y magnetismo",
            objetivo: "Explicar la corriente eléctrica y el magnetismo.",
            teoria:
              "La corriente es el flujo de electrones por un conductor. Se distingue corriente continua (pilas) de alterna (hogares). El magnetismo y sus campos sostienen electroimanes, parlantes y motores.",
            ejemplo:
              "Un circuito con batería enciende una lámpara; un electroimán levanta metales.",
            consejo:
              "Recuerda: circuito cerrado = la corriente fluye; abierto = se interrumpe.",
          },
          {
            titulo: "Cambios físicos y químicos",
            objetivo: "Diferenciar cambios físicos de químicos.",
            teoria:
              "En un cambio físico la sustancia no cambia su composición (fusión, evaporación). En uno químico se forman nuevas sustancias (combustión, oxidación). En las reacciones, los reactivos se transforman en productos.",
            ejemplo:
              "Derretir hielo es físico; quemar papel es químico (nuevas sustancias).",
            consejo:
              "Pregunta: ¿sigue siendo la misma sustancia? Si no, es un cambio químico.",
          },
        ],
      },
      {
        titulo: "Módulo 3 · El ambiente y el desarrollo sostenible",
        lecciones: [
          {
            titulo: "Contaminación ambiental",
            objetivo: "Identificar los tipos de contaminación.",
            teoria:
              "La contaminación altera el equilibrio del ambiente: del agua (relaves, desagües), del aire (gases, humos), del suelo (residuos) y sonora/lumínica. Sus consecuencias afectan la salud y los ecosistemas.",
            ejemplo:
              "Los residuos plásticos en los ríos y el humo vehicular en las ciudades son ejemplos claros.",
            consejo:
              "Clasifica toda contaminación por medio: agua, aire, suelo o ruido/luz.",
          },
          {
            titulo: "Recursos naturales",
            objetivo: "Clasificar los recursos renovables y no renovables.",
            teoria:
              "Los recursos renovables (agua, bosques, energía solar) se regeneran; los no renovables (petróleo, minerales, carbón) se agotan. Su uso racional asegura su disponibilidad futura.",
            ejemplo:
              "El sol y el viento son inagotables; el petróleo y el cobre son limitados.",
            consejo:
              "Usa la mnemotecnia R/R: renovables se Renuevan; no renovables se agotan.",
          },
          {
            titulo: "Cambio climático",
            objetivo: "Explicar el calentamiento global.",
            teoria:
              "La acumulación de gases de efecto invernadero (CO₂, metano) atrapa calor y produce el calentamiento global: deshielo, sequías e inundaciones. La acción responsable reduce emisiones.",
            ejemplo:
              "Quemar combustibles y talar bosques aumenta el CO₂ y agrava el efecto invernadero.",
            consejo:
              "Distingue efecto invernadero (natural y útil) del calentamiento acelerado por el hombre.",
          },
          {
            titulo: "Desarrollo sostenible",
            objetivo: "Aplicar el concepto de sostenibilidad.",
            teoria:
              "El desarrollo sostenible satisface las necesidades presentes sin comprometer a las futuras generaciones: equilibrio entre lo económico, lo social y lo ambiental (triple balance).",
            ejemplo:
              "Reciclar, ahorrar agua y usar energías limpias son prácticas sostenibles.",
            consejo:
              "Pregunta en cada caso: ¿es viable en lo ambiental, social y económico?",
          },
          {
            titulo: "Tecnología y sociedad",
            objetivo: "Evaluar el impacto de la tecnología.",
            teoria:
              "La tecnología mejora la vida (comunicación, salud, alimentos) pero también genera impactos: residuos electrónicos, consumo de energía y brechas digitales. Su uso responsable minimiza efectos negativos.",
            ejemplo:
              "Los celulares conectan al mundo, pero sus baterías contaminan si no se reciclan.",
            consejo:
              "En el examen, valora pros y contras antes de responder sobre tecnología.",
          },
        ],
      },
    ],
  },
  "admision-universitaria": {
    titulo: "Admisión Universitaria",
    icono: "bi-mortarboard",
    descripcion:
      "Estrategia, razonamiento y escritura para entrar a la universidad: cómo estudiar, cómo rinde el tiempo y cómo responder cada tipo de pregunta.",
    areas: ["Estrategia", "Razonamiento verbal", "Razonamiento matemático", "Escritura", "Conocimiento general"],
    ruta: [
      "Empieza por el diagnóstico: saber qué te falta por descuido es más útil que estudiar en orden alfabético.",
      "Refuerza las dos secciones que más pesan y que casi siempre se estudian menos: razonamiento verbal y escritura.",
      "Cierra con ensayos cronometrados, porque un ensayo solo se entrena escribiéndolo entero y a tiempo.",
    ],
    recursos: [
      { titulo: "Guías oficiales de la universidad que eliges", desc: "La convocatoria de tu examen manda sobre cualquier generalidad. Busca la de tu universidad", url: "" },
      { titulo: "Ensayos de años anteriores", desc: "Resueltos y sin resolver: ambos sirven, y el cronómetro es la clave. Archivo de la institución", url: "" },
      { titulo: "Cuaderno de errores", desc: "Un registro donde anotas por qué te equivocaste, no solo qué fallaste. Empieza hoy con diez errores", url: "" },
    ],
    modulos: [
      {
        titulo: "Módulo 1 · Estrategia y diagnóstico",
        lecciones: [
          {
            titulo: "Cómo funciona una prueba de admisión",
            objetivo:
              "Comprender cómo se estructura una prueba de admisión, qué mide cada sección, cómo se puntúa y qué penalizaciones suele aplicar la universidad.",
          },
          {
            titulo: "Plan de estudio realista",
            objetivo:
              "Diseñar un plan de estudio con horas semanales realistas, reparto por materias y revisiones espaciadas que se sostengan durante semanas.",
          },
          {
            titulo: "Diagnóstico inicial de tu nivel",
            objetivo:
              "Aplicar una prueba de diagnóstico para saber con exactitud qué temas dominas y cuáles necesitan refuerzo, y ordenar los esfuerzos por prioridad.",
          },
          {
            titulo: "Ansiedad, tiempo y lectura bajo presión",
            objetivo:
              "Controlar la ansiedad el día de la prueba, administrar el tiempo por secciones y aplicar estrategias de lectura que eviten el bloqueo.",
          },
          {
            titulo: "Simulador completo y análisis de errores",
            objetivo:
              "Realizar simulacros completos, registrar cada error con su causa real y convertir ese registro en un plan de repaso concreto.",
          },
        ],
      },
      {
        titulo: "Módulo 2 · Razonamiento verbal",
        lecciones: [
          {
            titulo: "Comprensión literal e inferencial",
            objetivo:
              "Distinguir lo que un texto afirma literalmente de lo que solo permite inferir, y responder sin extrapolar más allá de la información dada.",
          },
          {
            titulo: "Idea principal y estructura del texto",
            objetivo:
              "Identificar la idea principal, las ideas secundarias y la estructura de un texto, separándolas de los detalles de apoyo que distraen.",
          },
          {
            titulo: "Vocabulario en contexto",
            objetivo:
              "Deducir el significado de palabras desconocidas a partir del contexto, los prefijos, los sufijos y las relaciones de sentido dentro del texto.",
          },
          {
            titulo: "Analogías y relaciones de palabras",
            objetivo:
              "Resolver analogías identificando la relación que hay dentro de cada par y buscando la opción que la repita con la misma estructura.",
          },
          {
            titulo: "Oraciones incompletas y coherencia",
            objetivo:
              "Completar oraciones eligiendo la alternativa que mantiene la coherencia lógica y la concordancia, y descartar las que introducen una contradicción.",
          },
        ],
      },
      {
        titulo: "Módulo 3 · Razonamiento matemático",
        lecciones: [
          {
            titulo: "Aritmética y fracciones en el examen",
            objetivo:
              "Resolver problemas con fracciones, porcentajes y razones, eligiendo la operación correcta y simplificando antes de hacer la cuenta.",
          },
          {
            titulo: "Proporciones e intereses",
            objetivo:
              "Plantear y resolver problemas de proporcionalidad directa e inversa, y calcular intereses simples y compuestos distinguiendo bien los dos casos.",
          },
          {
            titulo: "Álgebra: ecuaciones y sistemas",
            objetivo:
              "Traducir un enunciado a una ecuación, resolver ecuaciones de primer y segundo grado y sistemas de dos ecuaciones con dos incógnitas.",
          },
          {
            titulo: "Probabilidad y combinatoria",
            objetivo:
              "Calcular probabilidades de eventos simples y compuestos, y aplicar los principios de adición y multiplicación a problemas de conteo y elecciones.",
          },
          {
            titulo: "Razonamiento con figuras y series",
            objetivo:
              "Completar series numéricas y de figuras detectando la regla que las genera, y resolver problemas de distribuciones, cruces y conteo visual.",
          },
        ],
      },
      {
        titulo: "Módulo 4 · Comprensión y producción escrita",
        lecciones: [
          {
            titulo: "La estructura del texto argumentativo",
            objetivo:
              "Reconocer las partes de un texto argumentativo, su propósito y la función de cada párrafo, para poder analizarlo y construirlo con soltura.",
          },
          {
            titulo: "Tesis y argumentos",
            objetivo:
              "Formular una tesis clara y defenderla con argumentos pertinentes y suficientes, distinguiendo los argumentos de los ejemplos y de los datos.",
          },
          {
            titulo: "Coherencia, cohesión y conectores",
            objetivo:
              "Mantener la coherencia entre párrafos y usar los conectores que correspondan para marcar causa, consecuencia, contraste y adición sin abusar de ellos.",
          },
          {
            titulo: "Resumen y síntesis",
            objetivo:
              "Resumir un texto conservando su estructura y sus ideas principales, y sintetizar información de varias fuentes en un solo párrafo claro.",
          },
          {
            titulo: "Errores frecuentes y reescritura",
            objetivo:
              "Detectar los errores de redacción más comunes, corregirlos y reescribir un texto para mayor claridad sin cambiar lo que realmente dice.",
          },
        ],
      },
      {
        titulo: "Módulo 5 · Conocimiento general",
        lecciones: [
          {
            titulo: "Pensamiento crítico y fuentes confiables",
            objetivo:
              "Evaluar la calidad de una fuente y de un argumento, reconociendo sesgos, falta de evidencia y errores de razonamiento en la información que consumes.",
          },
          {
            titulo: "Historia y proceso histórico",
            objetivo:
              "Ordenar procesos históricos, identificar causas y consecuencias, y relacionar los hechos con el contexto económico, social y cultural de su época.",
          },
          {
            titulo: "Geografía y ambiente",
            objetivo:
              "Relacionar los fenómenos geográficos y ambientales con las actividades humanas, y explicar sus efectos sobre el clima, el agua y el paisaje.",
          },
          {
            titulo: "Ciudadanía, ética y derechos",
            objetivo:
              "Comprender los derechos y deberes ciudadanos, y razonar sobre dilemas éticos distinguiendo con claridad lo legal, lo justo y lo conveniente.",
          },
          {
            titulo: "Lectura crítica de la actualidad",
            objetivo:
              "Leer noticias y textos de actualidad separando el hecho de la opinión, contrastando fuentes y reconociendo el tratamiento que recibe cada tema.",
          },
        ],
      },
      {
        titulo: "Módulo 6 · Ensayo y simulación final",
        lecciones: [
          {
            titulo: "El ensayo: estructura y tesis",
            objetivo:
              "Planificar un ensayo eligiendo un tema acotado, formulando una tesis defendible y repartiendo el espacio disponible entre todas sus partes.",
          },
          {
            titulo: "Introducción y desarrollo argumentado",
            objetivo:
              "Redactar una introducción que enganche y un desarrollo que defienda la tesis con argumentos ordenados, ejemplos pertinentes y transiciones claras.",
          },
          {
            titulo: "Conclusión y cierre",
            objetivo:
              "Cerrar el ensayo retomando la tesis, sintetizando el recorrido del texto y cerrando con una idea que deje algo en que pensar, sin repetir el desarrollo.",
          },
          {
            titulo: "Fuentes y honestidad académica",
            objetivo:
              "Citar fuentes correctamente, evitar el plagio y distinguir con claridad la cita, la paráfrasis y la opinión propia en cualquier trabajo escrito.",
          },
          {
            titulo: "Ensayo completo y autoevaluación",
            objetivo:
              "Escribir un ensayo entero en tiempo limitado y autoevaluarlo con una rúbrica clara, reescribiendo lo que peor te haya salido.",
          },
        ],
      },
      {
        titulo: "Módulo 7 · Cierre, gestión y logística",
        lecciones: [
          {
            titulo: "Las dos semanas antes de la prueba",
            objetivo:
              "Planificar la fase final con tres modos de estudio y evitar el error de seguir aprendiendo temas nuevos cuando ya hay que consolidar.",
          },
          {
            titulo: "Manejo del tiempo dentro de la prueba",
            objetivo:
              "Repartir los minutos disponibles con un presupuesto fijo por ítem y decidir con criterio qué ítems se dejan en blanco.",
          },
          {
            titulo: "Ansiedad, bloqueo y protocolo de 30 segundos",
            objetivo:
              "Reconocer las señales tempranas del bloqueo y aplicar un protocolo corto que devuelva la atención al problema.",
          },
          {
            titulo: "Logística del día de la prueba",
            objetivo:
              "Preparar documento, material, ruta y alimentación con antelación para llegar en condiciones y no en carreras.",
          },
          {
            titulo: "Después de la prueba y siguientes decisiones",
            objetivo:
              "Interpretar un resultado decepcionante sin dramatizarlo y definir la siguiente decisión de estudio a partir de datos, no de la pura cascada de emociones.",
          },
        ],
      },
    ],
  },

  // ==========================================================================
  // Curso nuevo: Biologia. Los modulos y las lecciones llegan desde
  // contenido/biologia.js, asi que aqui solo se declara la ficha del curso.
  // ==========================================================================
  biologia: {
    titulo: "Biología",
    icono: "bi-brightness-high",
    descripcion:
      "De la célula al ecosistema: cómo funciona la vida, cómo se heredan los genes y cómo se relacionan los seres vivos con su ambiente.",
    areas: ["Célula", "Genética", "Ecología", "Cuerpo humano"],
    ruta: [
      "Empieza por la célula: es la unidad en la que se decide todo lo demás.",
      "Sigue con la genética para entender por qué cada organismo es distinto.",
      "Cierra con ecología, donde las relaciones entre seres vivos se vuelven el tema central.",
    ],
    recursos: [
      { titulo: "Khan Academy — Biología", desc: "Lecciones en español con animación de procesos celulares.", url: "es.khanacademy.org/science/biology" },
      { titulo: "BioDigital", desc: "Aula virtual con simulaciones de microscopía y genética.", url: "" },
      { titulo: "Cuaderno de laboratorio", desc: "Anota lo que observas: la biología se aprende registrando.", url: "" },
    ],
    modulos: [],
  },

  // ==========================================================================
  // Curso nuevo: Alfabetizacion digital. Utiliza Word, hojas de calculo,
  // busquedas y citas, que es lo que se pide en casi cualquier trabajo.
  // ==========================================================================
  "alfabetizacion-digital": {
    titulo: "Alfabetización Digital",
    icono: "bi-laptop",
    descripcion:
      "Usa la computadora con soltura: archivos, procesador de textos, hoja de cálculo, búsquedas, fuentes confiables y citas.",
    areas: ["Archivos", "Procesador de textos", "Hoja de cálculo", "Búsqueda y citas"],
    ruta: [
      "Ordena tu información: sin archivos bien nombrados, todo lo demás se pierde.",
      "Aprende a escribir y calcular de forma automática, no a mano.",
      "Busca mejor y cita lo que encontraste: es lo que se evalúa al final.",
    ],
    recursos: [
      { titulo: "Khan Academy — Computación", desc: "Tutoriales breves de ofimática en español.", url: "es.khanacademy.org/computing" },
      { titulo: "Manuales de LibreOffice", desc: "Documentación oficial de Writer, Calc e Impress.", url: "help.libreoffice.org" },
      { titulo: "Cómo citar — Guía de la biblioteca de tu institución", desc: "Cada biblioteca tiene su norma; esta es la puerta de entrada.", url: "" },
    ],
    modulos: [],
  },
};
