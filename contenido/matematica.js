// ============================================================================
// contenido/matematica.js
// Contenido profundo de las lecciones del curso de Matematica.
//
// Estos archivos APISAN la estructura de assets/js/cursos-data.js. La union es
// por posicion: modulos[0] es el primer modulo del curso y lecciones[3] es su
// cuarta leccion. Si aqui hay mas modulos o mas lecciones de las que existen,
// se anaden como nuevas y necesitan traer titulo.
//
// Formato de cada leccion:
//   objetivo  una frase con lo que sabras hacer
//   teoria    el desarrollo, con subtitulos (## ), listas (- ), avisos (> ) y
//             negritas (**texto**) que el generador convierte en HTML
//   ejemplo   un problema resuelto paso a paso
//   consejo   el error o el atajo que suma puntos en el examen
// ============================================================================

CONTENIDO.matematica = {
  modulos: [
    // ---------------------------------------------------------------------
    // Modulo 1 · Aritmetica y numeros
    // ---------------------------------------------------------------------
    {
      lecciones: [
        {
          objetivo:
            "Resolver con seguridad cualquier expresión numérica respetando el orden de las operaciones, el uso del paréntesis y los signos.",
          teoria:
            "Las operaciones no se ejecutan en el orden en que aparecen, sino en uno fijo que conviene memorizar. Ese orden es: primero los **paréntesis, corchetes y llaves**, resueltos de dentro hacia afuera; luego las **potencias y raíces**; después las **multiplicaciones y divisiones**, de izquierda a derecha; y al final las **sumas y restas**, también de izquierda a derecha.\n" +
            "## El paréntesis cambia la respuesta\n" +
            "El paréntesis es la herramienta más poderosa de la aritmética, porque te permite forzar ese orden. Antes de calcular nada, busca todos los paréntesis y resuélvelos. El signo negativo que antecede a un paréntesis se aplica al resultado completo, no solo al primer término.\n" +
            "## Cuidado con los signos de las potencias\n" +
            "Aquí hay una distinción que decide puntos: **el exponente pertenece a la potencia, no al número**. En (−3)² el paréntesis hace que el menos también se eleve, y (−3)² = 9. En cambio, en −3² no hay paréntesis, así que primero se calcula 3² = 9 y luego se aplica el signo, dando −9. Lo mismo ocurre con las raíces: la raíz de −9 no existe en los reales, pero el negativo de la raíz de 9 sí vale −3.\n" +
            "## Propiedades que simplifican el cálculo\n" +
            "Para no hacer cuentas inútiles usa estas tres propiedades:\n" +
            "- **Asociativa**: (a + b) + c = a + (b + c). Permite agrupar como convenga.\n" +
            "- **Conmutativa**: a + b = b + a. Permite reordenar los términos.\n" +
            "- **Distributiva**: a(b + c) = ab + ac. Permite abrir paréntesis.\n" +
            "La conmutativa es muy útil para cancelar términos opuestos sin equivocarse: en 15 − 7 + 3 − 8, si sumas primero los positivos (15 + 3 = 18) y luego los negativos (7 + 8 = 15), la operación se vuelve 18 − 15 = 3. Y recuerda que (aᵐ)ⁿ = a elevado a m por n, mientras que aᵐ por aⁿ = a elevado a m más n.",
          ejemplo:
            "Resuelve: −3² + 2 × (5 + 4) − (8 − 6)² ÷ 2\n" +
            "## Método directo, paso a paso\n" +
            "- Paréntesis: (5 + 4) = 9 y (8 − 6)² = 2² = 4.\n" +
            "- División: 4 ÷ 2 = 2.\n" +
            "- Multiplicación: 2 × 9 = 18.\n" +
            "- Potencia del negativo: −3² = −(3²) = −9, porque el paréntesis rodea solo al 3, no al signo.\n" +
            "- Sumas y restas de izquierda a derecha: −9 + 18 − 2 = 9 − 2 = **7**.\n" +
            "## Método PEMm/T, que ordena por prioridades en lugar de avanzar por sectores\n" +
            "- **P**aréntesis: quedan los dos que había, que valen 9 y 4.\n" +
            "- **E**xponentes: el 4 ya está elevado, y −3² se resuelve como −(3²) = −9.\n" +
            "- **Mm**ultiplicación y división: quedan 2 × 9 = 18 y 4 ÷ 2 = 2.\n" +
            "- **A**dición y resta, y **T**ermino: 18 − 9 − 2 = **7**.\n" +
            "3. **Control por partes**: separo la expresión en sus tres sumandos, 2 × (5 + 4) = 18, (8 − 6)² ÷ 2 = 2 y 3² = 9, y el resultado tiene que ser 18 − 2 − 9 = 7, igual que antes.\n" +
            "> Ojo con el error típico: tratar −3² como si fuera (−3)². Eso daría 9 + 18 − 2 = 25, que es el distractor que ofrece el enunciado a quien confunde los signos.",
          consejo:
            "No calcules nada hasta haber resuelto todos los paréntesis. Después anota el resultado de cada uno: ese es tu mapa de trabajo y evita la mayor parte de los errores de signo.",
        },
        {
          objetivo:
            "Reconocer números primos, aplicar los criterios de divisibilidad del 2 al 11 y descomponer cualquier número en factores primos.",
          teoria:
            "Todo número natural puede escribirse como producto de factores primos, y esa descomposición es la base de casi todo lo que viene después: el MCM, el MCD, la simplificación de fracciones y la resolución de ecuaciones.\n" +
            "## Qué es un número primo\n" +
            "Un número primo tiene exactamente dos divisores: el 1 y él mismo. Los primos menores son 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31. El 1 **no** es primo porque solo tiene un divisor, y el 2 es el único primo par: cualquier otro número par es compuesto.\n" +
            "## Criterios de divisibilidad\n" +
            "Estos atajos evitan tener que dividir entre posibles divisores uno por uno:\n" +
            "- Divisible entre 2: termina en cifra par.\n" +
            "- Divisible entre 3: la suma de sus cifras es múltiplo de 3.\n" +
            "- Divisible entre 4: las dos últimas cifras forman un múltiplo de 4.\n" +
            "- Divisible entre 5: termina en 0 o en 5.\n" +
            "- Divisible entre 6: cumple a la vez el criterio del 2 y el del 3.\n" +
            "- Divisible entre 8: las tres últimas cifras forman un múltiplo de 8.\n" +
            "- Divisible entre 9: la suma de sus cifras es múltiplo de 9.\n" +
            "- Divisible entre 11: la diferencia entre la suma de las cifras en posición impar y la suma de las cifras en posición par es múltiplo de 11.\n" +
            "## Cómo descomponer en factores primos\n" +
            "Se divide entre el primo más pequeño posible y se repite sobre el cociente hasta llegar a 1. Al empezar, prueba con el 2 si el número es par; cuando ya no sea par, pasa al 3, luego al 5, 7, 11, y así sucesivamente.\n" +
            "> Un control muy útil: si multiplicas todos los factores primos que obtuviste, tiene que volverte el número original. Si no coincide, te saltaste un paso.",
          ejemplo:
            "Determina si 1 728 es divisible entre 12 y factorízalo en primos.\n" +
            "## Método de las reglas de divisibilidad, que responde sí o no en un segundo\n" +
            "- Para que un número sea divisible entre 12 debe serlo entre 3 y entre 4 a la vez.\n" +
            "- Regla del 3: 1 + 7 + 2 + 8 = 18, y 18 es múltiplo de 3, así que 1 728 es divisible entre 3.\n" +
            "- Regla del 4: las dos últimas cifras, 28, forman un múltiplo de 4, así que 1 728 también es divisible entre 4.\n" +
            "- Al cumplir las dos condiciones, la respuesta es sí, es divisible entre 12.\n" +
            "## Método de la división sucesiva por primos, que además da la factorización\n" +
            "- Entre 2: 1 728 / 2 = 864, / 2 = 432, / 2 = 216, / 2 = 108, / 2 = 54, / 2 = 27. Paro porque 27 es impar, y tengo seis factores 2.\n" +
            "- Entre 3: 27 / 3 = 9, / 3 = 3, / 3 = 1. Tres factores 3.\n" +
            "- Resultado: 1 728 = 2⁶ × 3³ = 64 × 27.\n" +
            "## Método del control por exponentes, que no confía en la regla\n" +
            "- 12 = 2² × 3. En 1 728 = 2⁶ × 3³ los exponentes cumplen 6 ≥ 2 y 3 ≥ 1, así que el 12 cabe entero dentro del número.\n" +
            "- Comprobación aritmética: 1 728 ÷ 12 = 144, que es un número entero. Confirmado.\n" +
            "- De paso, como los exponentes son tan altos, también es divisible entre 24, 36 y 48.\n" +
            "> La respuesta corta es sí, pero el valor de la segunda vía es que te da la factorización completa, que es lo que permite trabajar de arriba abajo en cualquier problema de factorización.",
          consejo:
            "Para comprobar si un número grande es primo basta con dividirlo entre todos los primos menores o iguales a su raíz cuadrada: si ninguno lo divide, es primo. En el examen suele ser mucho más rápido aplicar los criterios de divisibilidad que factorizar a mano.",
        },
        {
          objetivo:
            "Calcular el mínimo común múltiplo y el máximo común divisor por descomposición prima, y saber cuándo conviene usar cada uno.",
          teoria:
            "El MCM y el MCD son las dos herramientas que más se repiten en aritmética, y vuelven a aparecer en fracciones, proporciones, problemas de reparto y cálculos de tiempo. Se obtienen de la misma descomposición en factores primos, pero eligiendo exponentes distintos.\n" +
            "## Mínimo común múltiplo (MCM)\n" +
            "Es el menor número que es múltiplo de todos los números dados. En la descomposición se toman **todos** los factores, comunes y no comunes, cada uno con su **mayor** exponente. Se usa cuando necesitas un denominador común para sumar fracciones, o cuando dos ciclos deben coincidir en el tiempo.\n" +
            "## Máximo común divisor (MCD)\n" +
            "Es el mayor número que divide a todos los números dados. Se toman **solo** los factores comunes, cada uno con su **menor** exponente. Se usa para repartir en partes iguales sin que sobre nada, y para simplificar fracciones.\n" +
            "## La otra vía: múltiplos y divisores\n" +
            "Un múltiplo de n se obtiene multiplicando n por 1, 2, 3, y un divisor se obtiene de sus factores. Con números pequeños suele ser más rápido listar múltiplos que factorizar, y a veces los dos caminos sirven como comprobación mutua.\n" +
            "> Guarda esta relación de control: el MCM multiplicado por el MCD es igual al producto de los dos números originales.",
          ejemplo:
            "Calcula el MCM y el MCD de 24 y 36.\n" +
            "## Método de la factorización en primos\n" +
            "- 24 = 2³ × 3 y 36 = 2² × 3².\n" +
            "- MCM: se toman todos los factores con el mayor exponente, o sea 2³ × 3² = 8 × 9 = **72**.\n" +
            "- MCD: se toman solo los factores comunes con el menor exponente, o sea 2² × 3¹ = 4 × 3 = **12**.\n" +
            "## Método de Euclides para el MCD, que no necesita factorizar nada\n" +
            "- 36 = 1 × 24 + 12, así que el primer resto es 12.\n" +
            "- 24 = 2 × 12 + 0, así que el último resto no nulo es 12 y el MCD es **12**.\n" +
            "- Con el MCD conocido, el MCM sale de la identidad MCM × MCD = a × b: MCM = (24 × 36) ÷ 12 = 864 ÷ 12 = **72**.\n" +
            "## Control de los dos métodos\n" +
            "- 72 ÷ 12 = 6 da un entero, como tiene que ocurrir siempre.\n" +
            "- 24 = 12 × 2 y 36 = 12 × 3, así que el 12 los divide a los dos exactamente.\n" +
            "- Y 24 × 36 = 864 = 72 × 12: la misma cifra sale por los dos productos.\n" +
            "> En concreto: si necesitas 24 fichas y 36 fichas en paquetes iguales, el paquete más grande posible mide 12 fichas, y 72 es la cantidad que llena a la vez los paquetes de 24 y los de 36.",
          consejo:
            "No confundas las dos escalas. El MCM siempre es mayor o igual que el número mayor, y el MCD siempre es menor o igual que el número menor. Si tu resultado rompe esa regla, es que intercambiaste los exponentes.",
        },
        {
          objetivo:
            "Operar con fracciones en sus cuatro formas, convertirlas a decimal y reconocer cuándo el decimal es exacto y cuándo es periódico.",
          teoria:
            "Una fracción representa una parte de un todo: el numerador indica cuántas partes tomas y el denominador en cuántas está dividido ese todo. Dominar estas cuatro operaciones es requisito para porcentajes, proporciones, álgebra y casi todo lo demás.\n" +
            "## Suma y resta: denominador común\n" +
            "No se pueden sumar directamente 1/2 + 1/3, porque los denominadores son distintos. Se busca un denominador común, idealmente el MCM, se convierte cada fracción y después se suman o restan **solo los numeradores**. El denominador se mantiene igual. Al final se simplifica.\n" +
            "## Multiplicación: en línea\n" +
            "Se multiplica numerador con numerador y denominador con denominador, y no hace falta nada más. Si hay factores comunes entre un numerador y un denominador, se pueden cancelar antes de multiplicar, y así se llega directo al resultado irreducible.\n" +
            "## División: se invierte\n" +
            "Para dividir entre una fracción se invierte la segunda, es decir el numerador y el denominador cambian de lugar, y la operación se convierte en una multiplicación.\n" +
            "## Fracción decimal: exacto y periódico\n" +
            "Si el denominador solo tiene como factores primos el 2 y el 5, el decimal es **exacto** y termina. Si tiene otros primos, el decimal es **periódico** y sus cifras se repiten.\n" +
            "> Atajo de memoria: la mitad de 100 es 50, un cuarto es 25, un quinto es 20, un octavo es 12,5 y un décimo es 10. Con la mitad y el cuarto ya reconoces casi todas las fracciones que salen en el examen.",
          ejemplo:
            "Calcula 2/3 + 1/4 y después 5/6 ÷ 10/9.\n" +
            "## Método de fracciones comunes para la suma\n" +
            "- El mínimo común múltiplo de 3 y 4 es 12.\n" +
            "- Convierto a denominador común: 2/3 = 8/12 y 1/4 = 3/12.\n" +
            "- Sumo solo los numeradores, 8 + 3 = 11, y mantengo el denominador: **11/12**.\n" +
            "- No se simplifica porque 11 es primo y no divide a 12.\n" +
            "## Método de la división como fracción compleja, con cancelación cruzada\n" +
            "- Dividir entre una fracción es multiplicar por su inversa: 5/6 ÷ 10/9 = 5/6 × 9/10.\n" +
            "- Cancelo el 6 con el 9 y el 5 con el 10, y queda (5 × 3) / (2 × 10) = 15/20.\n" +
            "- Simplifico entre 5 y llego a **3/4**.\n" +
            "## Método decimal, que sirve de control rápido\n" +
            "- 2/3 vale 0,667 y 1/4 vale 0,25, así que la suma da 0,917, que redondeado coincide con 11/12 = 0,9167.\n" +
            "- 5/6 vale 0,833 y 10/9 vale 1,111, y al dividir da 0,75, que es exactamente 3/4.\n" +
            "> Cuando dos caminos distintos dan el mismo valor, es muy difícil que los dos estén mal a la vez, por eso conviene usarlos como control mutuo.",
          consejo:
            "Simplifica siempre el resultado final y comprueba que numerador y denominador no tengan divisores en común. Presentar la fracción sin simplificar suele costarte el punto aunque la operación esté bien.",
        },
        {
          objetivo:
            "Distinguir entre proporción directa e inversa, resolver problemas de proporcionalidad y aplicar porcentajes, aumentos y descuentos sucesivos.",
          teoria:
            "Una proporción es la igualdad entre dos razones, y se escribe a/b = c/d. Resolver una regla de tres consiste en encontrar el valor desconocido de esa igualdad. El paso que decide si el problema sale bien es identificar si la proporción es directa o inversa.\n" +
            "## Tres simple directa\n" +
            "Se da cuando las dos magnitudes se mueven en el mismo sentido: si una aumenta, la otra también. Por ejemplo, más horas producen más kilómetros.\n" +
            "1. Plantea a/b = c/x.\n" +
            "2. Multiplica en cruz: a × x = b × c.\n" +
            "3. Despeja x.\n" +
            "## Tres simple inversa\n" +
            "Se da cuando una magnitud aumenta y la otra disminuye: a mayor le corresponde menor. Por ejemplo, más albañiles terminan el muro en menos días.\n" +
            "1. En una proporción inversa el **producto se mantiene constante**.\n" +
            "2. Plantea a × b = c × x.\n" +
            "3. Despeja x.\n" +
            "## Porcentaje\n" +
            "Un porcentaje es una fracción de denominador 100. El 15 % de 200 es 15/100 × 200 = 30. Para saber qué porcentaje representa una parte, se divide la parte entre el total y se multiplica por 100.\n" +
            "## Aumentos y descuentos sucesivos\n" +
            "Subir un 20 % y después bajar un 20 % **no** devuelve el valor inicial. Si el precio era 100, sube a 120 y luego baja a 96: hay una pérdida neta del 4 %. Cada operación se aplica sobre el valor ya modificado, nunca sobre el original.",
          ejemplo:
            "Resuelve los tres casos clásicos de regla de tres y porcentaje.\n" +
            "## Proporción directa\n" +
            "- Un auto recorre 240 km en 3 horas. ¿Cuánto recorre en 5 horas?\n" +
            "- Planteo 240/3 = x/5 y multiplico en cruz: 240 × 5 = 3 × x, entonces x = 1 200/3 = **400 km**.\n" +
            "- Confirmo que es directa porque a más horas corresponde más distancia, y no al revés.\n" +
            "## Proporción inversa\n" +
            "- Si 8 albañiles levantan un muro en 12 días, ¿cuántos días tardarán 6 albañiles?\n" +
            "- Con menos albañiles hacen falta más días, así que el producto se mantiene constante: 8 × 12 = 6 × x, entonces x = 96/6 = **16 días**.\n" +
            "- Control: con 12 albañiles, el doble de trabajo por persona, se sale en la mitad de días, o sea 6, que es lo que predice la misma proporción vista al revés.\n" +
            "## Porcentaje\n" +
            "- Un celular cuesta 720 soles y tiene 25 % de descuento.\n" +
            "- El descuento vale 720 × 25/100 = 180 soles.\n" +
            "- El precio final es 720 − 180 = **540 soles**, que es el 75 % del original.\n" +
            "- Control: 540 ÷ 720 = 0,75, y un descuento del 25 % deja el 75 % del precio. Coincide.\n" +
            "> La misma lógica sirve para todo: si las dos cantidades van en el mismo sentido, el producto se mantiene; si van en sentidos contrarios, lo que se mantiene es la razón.",
          consejo:
            "Antes de elegir entre directa e inversa, pregúntate: si la primera cantidad aumenta, ¿la segunda debería aumentar o disminuir? Si también aumenta, es directa y multiplicas en cruz; si disminuye, es inversa e igualas productos. Ese único criterio evita la mayoría de los errores.",
        },
      ],
    },

    // ---------------------------------------------------------------------
    // Modulo 2 · Algebra
    // ---------------------------------------------------------------------
    {
      lecciones: [
        {
          objetivo:
            "Reconocer el grado de un polinomio, reducir términos semejantes y sumar, restar y multiplicar expresiones algebraicas.",
          teoria:
            "El álgebra usa letras como si fueran casillas: cada letra representa un número cualquiera, y las reglas sirven sin importar cuál sea ese número. Esa es su gran ventaja, porque permite resolver problemas donde el número desconocido se repite varias veces.\n" +
            "## Monomio, polinomio y grado\n" +
            "Un **monomio** es un producto de letras y números, como 3x² o −5ab: el 3 es el coeficiente, x la base y 2 el exponente. Un **polinomio** es una suma de monomios. El **grado** de un monomio es la suma de sus exponentes, y el de un polinomio es el grado de su monomio de mayor grado. Así, 3x² − 5x + 7 tiene grado 2.\n" +
            "## Términos semejantes y reducción\n" +
            "Dos términos son **semejantes** cuando tienen exactamente la misma parte literal. Entonces sí se pueden sumar o restar: 3x + 5x = 8x. En cambio 3x + 5x² no se puede reducir, porque son de grados distintos. Reducir es justamente juntar todos los términos semejantes.\n" +
            "## Operaciones entre polinomios\n" +
            "- Para **sumar o restar**, se reducen por separado los términos semejantes y el resultado se ordena de mayor a menor grado.\n" +
            "- Para **multiplicar**, se aplica la distributiva término a término: cada monomio del primer polinomio multiplica a cada monomio del segundo. El resultado puede tener más términos, y luego se reducen los semejantes.\n" +
            "> Truco de control: al multiplicar polinomios de grados m y n, el producto tiene grado m + n. Si lo que obtuviste no coincide, te equivocaste en algún producto.",
          ejemplo:
            "Desarrolla y reduce (2x³ − x + 4)(x − 3) − (x² + 5).\n" +
            "## Método de la distributiva, término a término\n" +
            "- 2x³ por x da 2x⁴; 2x³ por −3 da −6x³; −x por x da −x²; −x por −3 da +3x; 4 por x da 4x; 4 por −3 da −12.\n" +
            "- Queda 2x⁴ − 6x³ − x² + 3x + 4x − 12.\n" +
            "- Reduzco los semejantes: 3x + 4x = 7x, y me queda 2x⁴ − 6x³ − x² + 7x − 12.\n" +
            "- Cambio el signo de (x² + 5) y sumo: −x² − 5. En x² tengo −x² − x² = −2x², y en la constante −12 − 5 = −17.\n" +
            "- Resultado: **2x⁴ − 6x³ − 2x² + 7x − 17**.\n" +
            "## Método de la caja de multiplicación, que quita las dudas de signo\n" +
            "- Cruzo cada término de la primera fila con cada término de la segunda: 2x³ por x, 2x³ por −3, −x por x, −x por −3, 4 por x y 4 por −3.\n" +
            "- Los signos salen de multiplicar los de cada par, y se leen en diagonal: más, menos, menos, más, más, menos.\n" +
            "- Las dos casillas en x² suman −x² − x² = −2x², y es el único paso donde hay que juntar términos de la misma potencia.\n" +
            "## Control de grados y de sustitución numérica\n" +
            "- El primer polinomio tiene grado 3 y el segundo grado 1, así que el producto tiene grado 4. Al restar uno de grado 2, el resultado sigue siendo de grado 4, que es lo que obtuve.\n" +
            "- Pruebo con x = 2 en el enunciado: (2 · 8 − 2 + 4)(2 − 3) − (4 + 5) = 20 × (−1) − 9 = −27.\n" +
            "- Pruebo con x = 2 en mi resultado: 2 · 16 − 6 · 8 − 2 · 4 + 7 · 2 − 17 = 32 − 48 − 8 + 14 − 17 = −27. Los dos caminos coinciden.",
          consejo:
            "Ordena siempre de mayor a menor grado, porque te facilita ver los términos semejantes y comparar tu respuesta con las alternativas. Y al restar un paréntesis, cambia el signo a todo lo que va dentro: −(x² + 5) es −x² − 5, nunca −x² + 5.",
        },
        {
          objetivo:
            "Expandir y factorizar los cuatro productos notables, y usarlos para resolver operaciones algebraicas en menos pasos.",
          teoria:
            "Los productos notables son multiplicaciones entre polinomios que siempre dan el mismo resultado, y por eso se pueden calcular de memoria. Conocerlos ahorra muchísimo tiempo en el examen.\n" +
            "## Los cuatro productos\n" +
            "- **Cuadrado de una suma**: (a + b)² = a² + 2ab + b².\n" +
            "- **Cuadrado de una diferencia**: (a − b)² = a² − 2ab + b². Ojo: el término del medio cambia de signo, pero el último sigue siendo positivo.\n" +
            "- **Producto de dos binomios**: (a + b)(a − b) = a² − b².\n" +
            "- **Cubo de una suma o diferencia**: (a ± b)³ = a³ ± 3a²b + 3ab² ± b³.\n" +
            "## La idea que explica a todos\n" +
            "Todos salen de multiplicar y luego reunir términos semejantes. En (a + b)² el término 2ab aparece porque hay dos maneras de obtener el producto ab: tomando a del primer binomio y b del segundo, o al revés. Como ocurre dos veces, el coeficiente es 2. Esa misma lógica explica el 3 del cubo.\n" +
            "## Factorizar es el camino inverso\n" +
            "Si ves a² + 2ab + b², reconoce que es (a + b)². Si ves a² − b², es (a + b)(a − b). Reconocer estas formas **reduce a la mitad el trabajo** de factorizar, y es lo que más se pregunta.\n" +
            "> Cuidado con el error más común: (a + b)² no es a² + b². El término del medio nunca puede olvidarse.",
          ejemplo:
            "Desarrolla (x + 5)² y factoriza x² − 49.\n" +
            "## Método de la fórmula del cuadrado de un binomio\n" +
            "- Con a = x y b = 5, la fórmula es a² + 2ab + b².\n" +
            "- Da x² + 2(x)(5) + 25 = **x² + 10x + 25**.\n" +
            "## Método de la distributiva, para comprobar la fórmula\n" +
            "- (x + 5)(x + 5) = x² + 5x + 5x + 25 = x² + 10x + 25.\n" +
            "- Los dos términos 5x son iguales y se suman, y por eso la fórmula lleva un 2 en el medio: 2ab = 10x.\n" +
            "## Método geométrico de la diferencia de cuadrados\n" +
            "- x² − 49 es a² − b² con a = x y b = 7, así que factorizo **(x + 7)(x − 7)**.\n" +
            "- Verifico el producto: x² − 7x + 7x − 49 = x² − 49, porque los términos del medio se cancelan entre sí, como debe ocurrir.\n" +
            "- Lectura geométrica: un cuadrado de lado x menos un cuadrado de lado 7 es exactamente un rectángulo de lados x + 7 y x − 7.\n" +
            "## Control numérico con x = 3\n" +
            "- Por fórmula: (3 + 5)² = 64, y con el resultado x² + 10x + 25 = 9 + 30 + 25 = 64. Coincide.\n" +
            "- Por factorización: 3² − 49 = −40, y (3 + 7)(3 − 7) = 10 × (−4) = −40. Coincide.",
          consejo:
            "Antes de desarrollar a lo bruto, busca siempre la forma notable. Si aparecen dos términos al cuadrado y un término del medio, casi siempre es un cuadrado perfecto. Desarrollar a mano solo cuando no haya forma reconocible.",
        },
        {
          objetivo:
            "Resolver ecuaciones de primer grado, comprobar las soluciones y Aplicar el método a problemas de la vida diaria.",
          teoria:
            "Una ecuación es una igualdad donde hay una o más incógnitas. El **grado** es el mayor exponente de la incógnita: x + 3 = 8 es de grado 1, y x² − 4 = 0 es de grado 2. Resolver consiste en hallar el valor de la incógnita que convierte la igualdad en verdad.\n" +
            "## La propiedad clave\n" +
            "Puedes sumar o restar **lo mismo** a los dos miembros, y puedes multiplicar o dividir ambos por un número distinto de cero, sin que la igualdad deje de cumplirse. Todos los pasos se apoyan en eso.\n" +
            "## Método paso a paso\n" +
            "1. Junta en un solo miembro todos los términos con incógnita y en el otro las constantes.\n" +
            "2. Determina el coeficiente de la incógnita y despeja dividiendo.\n" +
            "3. **Comprueba** sustituyendo en la ecuación original.\n" +
            "## Errores que se repiten\n" +
            "- Dividir solo un miembro: si 2x = 10, no basta con escribir x = 5, hay que dividir 2x y también 10, es decir **ambos** miembros.\n" +
            "- Dividir por una expresión que puede valer cero, porque en ese caso perderías soluciones.\n" +
            "- No comprobar: el resultado puede verse razonable y aun así fallar si te equivocaste al transponer los términos.",
          ejemplo:
            "Resuelve 3(x + 2) − 5 = 2x + 8.\n" +
            "## Método de la transposición, que mueve términos de un lado a otro\n" +
            "- Desarrollo el paréntesis: 3x + 6 − 5 = 2x + 8, o sea 3x + 1 = 2x + 8.\n" +
            "- Paso las incógnitas a un lado y las constantes al otro: 3x − 2x = 8 − 1, entonces x = **7**.\n" +
            "## Método del equilibrio, que explica por qué se puede mover\n" +
            "- Imagino la igualdad como una balanza con 3x + 1 pesos a la izquierda y 2x + 8 a la derecha.\n" +
            "- Si a los dos lados les quito 2x, queda x + 1 = 8, y la balanza sigue equilibrada.\n" +
            "- Si a los dos lados les quito 1, queda x = 7, y la balanza sigue equilibrada. La única operación permitida es la misma en los dos lados.\n" +
            "## Método de la ecuación reducida, que evita pasos de más\n" +
            "- Si llevo las dos x a un lado desde el principio, 3x − 2x = x, así que el enunciado es equivalente a x = 8 − 1.\n" +
            "- La respuesta salta de inmediato: **x = 7**.\n" +
            "## Comprobación obligatoria en la ecuación original\n" +
            "- Izquierda: 3(7 + 2) − 5 = 27 − 5 = 22.\n" +
            "- Derecha: 2(7) + 8 = 14 + 8 = 22.\n" +
            "- Los dos miembros dan 22, así que x = 7 es la única solución.\n" +
            "> Comprobar no es opcional: es la única forma segura de saber que no he cambiado de signo por error en algún paso.",
          consejo:
            "Haz siempre la comprobación, aunque el examen no la pida: es la única forma de detectar un error de transposición, y con números pequeños toma solo unos segundos. Además, si la ecuación da dos soluciones, ambas deben aparecer en las alternativas.",
        },
        {
          objetivo:
            "Resolver ecuaciones de segundo grado por factorización y por fórmula general, e interpretar el discriminante.",
          teoria:
            "Una ecuación cuadrática tiene la forma ax² + bx + c = 0, con a distinto de cero. Siempre tiene **dos soluciones**, que pueden coincidir, y el término independiente debe ser 0 para poder factorizar.\n" +
            "## Método 1: factorización\n" +
            "Buscas dos números que multiplicados den c y sumados den b. Si los encuentras, escribes el producto de los binomios y pones cada factor en cero. Ejemplo: x² − 5x + 6 = 0, porque 2 × 3 = 6 y 2 + 3 = 5, así que (x − 2)(x − 3) = 0.\n" +
            "## Método 2: fórmula general\n" +
            "Cuando no se puede factorizar fácilmente se usa:\n" +
            "x = (−b ± raíz de (b² − 4ac)) / (2a)\n" +
            "La expresión de adentro es el **discriminante** D = b² − 4ac, y decide cuántas soluciones hay:\n" +
            "- Si D es positivo: dos soluciones reales distintas.\n" +
            "- Si D es cero: una solución doble.\n" +
            "- Si D es negativo: no hay soluciones reales.\n" +
            "## Relación con la parábola\n" +
            "Las soluciones son los puntos donde la parábola corta el eje horizontal. Si el discriminante es negativo, la parábola ni siquiera toca ese eje, y por eso no hay soluciones reales que dibujar.",
          ejemplo:
            "Resuelve 2x² − 7x + 3 = 0.\n" +
            "## Método de la factorización, el más rápido cuando funciona\n" +
            "- Busco dos números cuyo producto sea 3 y cuya suma sea −7: son −1 y −6.\n" +
            "- Reparto el coeficiente de x entre los dos factores: (2x − 1)(x − 3) = 0.\n" +
            "- Pongo cada factor en cero: 2x − 1 = 0 da x = 1/2, y x − 3 = 0 da x = 3.\n" +
            "## Método de la fórmula general, que siempre funciona\n" +
            "- Con a = 2, b = −7 y c = 3, el discriminante es D = b² − 4ac = 49 − 24 = **25**.\n" +
            "- Como es positivo, hay dos soluciones reales distintas, como esperaba.\n" +
            "- Aplico x = (−b ± raíz de D) / (2a) = (7 ± 5)/4, lo que da 3 y 1/2. Las mismas dos raíces.\n" +
            "## Método de las fórmulas de Viète, que no calcula pero controla\n" +
            "- La suma de las raíces es −b/a = 7/2 = 3,5. En efecto, 3 + 0,5 = 3,5.\n" +
            "- El producto de las raíces es c/a = 3/2 = 1,5. En efecto, 3 × 0,5 = 1,5.\n" +
            "- Si mis dos valores no cumplieran estas dos relaciones, habría que revisarlos.\n" +
            "## Comprobación de cada raíz\n" +
            "- 2(3)² − 7(3) + 3 = 18 − 21 + 3 = 0. Correcto.\n" +
            "- 2(1/2)² − 7(1/2) + 3 = 0,5 − 3,5 + 3 = 0. También correcta.",
          consejo:
            "Intenta siempre factorizar antes de usar la fórmula: es más rápido y evita errores de signo. Y cuando sí uses la fórmula, escribe primero el discriminante y decide con él si hay una, dos o ninguna solución real, porque eso mismo suelen preguntarlo.",
        },
        {
          objetivo:
            "Resolver sistemas de dos ecuaciones con dos incógnitas por sustitución, igualación y eliminación, y analizar si tienen solución.",
          teoria:
            "Un sistema son dos o más ecuaciones que deben cumplirse al mismo tiempo. Buscamos el par de valores que satisface **todas** a la vez, y ese par se representa con un punto.\n" +
            "## Tres métodos\n" +
            "- **Sustitución**: despejas una incógnita de una ecuación y la reemplazas en la otra. Es el más seguro cuando una variable ya está medio aislada.\n" +
            "- **Igualación**: despejas la **misma** incógnita en las dos ecuaciones y las pones iguales. Lo que queda es una ecuación de primer grado.\n" +
            "- **Eliminación**: sumas o restas las ecuaciones para que una incógnita se cancele. Funciona muy bien con coeficientes pequeños.\n" +
            "## ¿Tiene solución?\n" +
            "- Una solución: las dos rectas se cortan en un punto.\n" +
            "- Ninguna solución: las rectas son paralelas y distintas.\n" +
            "- Infinitas soluciones: las dos ecuaciones son en realidad la misma recta.\n" +
            "> Pista: si multiplicas una de las ecuaciones por un número y el resultado se parece mucho a la otra ecuación, estás ante el caso de infinitas soluciones.",
          ejemplo:
            "Resuelve el sistema formado por x + y = 10 y 2x − y = 5.\n" +
            "## Método de sustitución\n" +
            "- De la primera despejo y = 10 − x, y lo sustituyo en la segunda: 2x − (10 − x) = 5.\n" +
            "- Desarrollo: 2x − 10 + x = 5, o sea 3x = 15, entonces x = 5.\n" +
            "- Vuelvo a la primera: 5 + y = 10, entonces y = 5.\n" +
            "## Método de reducción, que suma y resta las ecuaciones enteras\n" +
            "- Sumo las dos ecuaciones: (x + y) + (2x − y) = 10 + 5, o sea 3x + 0 = 15, entonces x = 5.\n" +
            "- Con la y se hace igual: sumo la primera al revés de la segunda y sale −x + 2y = 5, o sea −5 + 2y = 5, y entonces y = 5.\n" +
            "- Fíjate en que los dos métodos llegaron a 3x = 15 por el mismo motivo, porque en ambos se han cancelado las y.\n" +
            "## Método gráfico, que confirma el punto de corte\n" +
            "- La recta x + y = 10 pasa por (0, 10) y por (10, 0).\n" +
            "- La recta 2x − y = 5 se escribe y = 2x − 5, y pasa por (0, −5) y por (5, 5).\n" +
            "- Las dos se cortan exactamente en **(5, 5)**, que es la solución del sistema.\n" +
            "## Comprobación de las dos ecuaciones\n" +
            "- Primera: 5 + 5 = 10. Segunda: 2(5) − 5 = 10 − 5 = 5. Las dos dan lo que pedían.",
          consejo:
            "Elige el método según los coeficientes: sustitución si una variable ya está despejada, igualación si las dos se despejan con facilidad, y eliminación si los números son pequeños. Comprueba siempre en las dos ecuaciones originales, porque verificar solo en una no detecta el error.",
        },
      ],
    },

    // ---------------------------------------------------------------------
    // Modulo 3 · Geometria
    // ---------------------------------------------------------------------
    {
      lecciones: [
          {
            objetivo:
              "Medir y clasificar ángulos, relacionar los que se forman entre rectas paralelas y entre una circunferencia y una recta secante.",
            teoria:
              "Un **ángulo** se forma por dos semirrectas que comparten un origen, llamado vértice. Se nombra con tres letras, una en cada semirrecta y la del vértice en medio: el ángulo ABC tiene su vértice en B.\n" +
              "## Clasificación por su medida\n" +
              "- **Nulo**: 0°, porque las semirrectas coinciden.\n" +
              "- **Recto**: 90°.\n" +
              "- **Llano o plano**: 180°, porque las semirrectas son opuestas.\n" +
              "- **A recto**: entre 0° y 90°.\n" +
              "- **Obtuso**: entre 90° y 180°.\n" +
              "- **Reflexo**: entre 180° y 360°.\n" +
              "figura:angulo-rectangulo | Un ángulo recto: sus dos semirrectas forman 90°\n" +
              "## Ángulos entre rectas paralelas\n" +
              "Cuando una transversal corta dos rectas paralelas aparecen pares de ángulos con nombres propios, y lo interesante es que **todos esos pares son iguales entre sí**:\n" +
              "- **Correspondientes**: ocupan la misma posición respecto a la intersección.\n" +
              "- **Alternos internos**: están entre las paralelas y en lados opuestos de la transversal.\n" +
              "- **Alternos externos**: están fuera de las paralelas y en lados opuestos de la transversal.\n" +
              "Los que no son de estos pares se llaman **conjugados** y suman 180°.\n" +
              "## Ángulos en la circunferencia\n" +
              "- El **ángulo central** tiene el vértice en el centro y mide lo mismo que el arco que abarca.\n" +
              "- El **ángulo inscrito** tiene el vértice en la circunferencia y mide **la mitad** del arco que abarca.\n" +
              "- Dos ángulos inscritos que abarcan el mismo arco son iguales entre sí.\n" +
              "> Truco: cuando dos rectas se cruzan, los ángulos opuestos por el vértice son iguales, y los que forman una línea recta suman 180°. Con esos dos datos resuelves casi cualquier figura sin hacer cuentas.",
            ejemplo:
            "Dos rectas paralelas son cortadas por una transversal y forman un ángulo de 65°.\n" +
            "## Método de los pares de ángulos\n" +
            "- Los **opuestos por el vértice** miden lo mismo que el original: **65°**.\n" +
            "- Los **correspondientes** y los **alternos internos** también miden 65°.\n" +
            "- Los **conjugados**, que forman línea recta con el original, miden 180° − 65° = **115°**.\n" +
            "## Método de la suma en la línea recta, que llega al mismo resultado por dentro\n" +
            "- El ángulo de 115° y el de 65° son suplementarios: 65° + 115° = 180°, que es el ángulo de la línea recta.\n" +
            "- Los otros dos ángulos son suplementarios con estos, o sea 180° − 115° = 65° y 180° − 65° = 115°, alternando uno y otro.\n" +
            "## Método de la suma en el punto, como control final\n" +
            "- En el punto donde se cruzan las rectas hay cuatro ángulos: 65°, 115°, 65° y 115°.\n" +
            "- Su suma es 65 + 115 + 65 + 115 = 360°, que es el ángulo completo. Todo cuadra.\n" +
            "## El mismo problema con otro dato, para ver que el método no depende de la cifra\n" +
            "- Si el ángulo fuera de 118°, el conjugado sería 180° − 118° = **62°**, y los cuatro ángulos seguirían siendo 118°, 62°, 118° y 62°.\n" +
            "> Los pares de ángulos son automáticos: en cuanto conoces el original, los otros tres se obtienen restando a 180 o copiando el mismo valor.",
            consejo:
              "Antes de calcular, identifica qué par de ángulos te piden, porque cada par tiene su regla: los correspondientes, alternos y opuestos por el vértice son iguales, y los conjugados suman 180°. Si el enunciado no lo dice, busca en la figura cuáles son los dos ángulos que comparten la transversal.",
          },
        {
          objetivo:
            "Aplicar las propiedades de los triángulos, clasificar por ángulos y lados, y usar el teorema de la bisagra y el teorema de Pitágoras.",
          teoria:
            "Un **triángulo** tiene tres lados y tres ángulos. Su **perímetro** es la suma de los lados y su **área** es la base por la altura dividida entre 2.\n" +
            "## Clasificación por ángulos\n" +
            "- **Acutángulo**: los tres ángulos son menores de 90°.\n" +
            "- **Rectángulo**: tiene un ángulo de 90°.\n" +
            "- **Obtusángulo**: tiene un ángulo mayor de 90°.\n" +
            "figura:triangulo-acutangulo | Triángulo acutángulo: sus tres ángulos son menores de 90°\n" +
            "figura:triangulo-obtusangulo | Triángulo obtusángulo: un ángulo es mayor de 90°\n" +
            "## Clasificación por lados\n" +
            "- **Equilátero**: los tres lados iguales, entonces los tres ángulos miden 60°.\n" +
            "- **Isósceles**: dos lados iguales, entonces los dos ángulos opuestos son iguales.\n" +
            "- " +
            "**Escaleno**: los tres lados distintos.\n" +
            "figura:triangulo-rectangulo | Triángulo rectángulo: el lado mayor es la hipotenusa\n" +
            "## Propiedades que conviene memorizar\n" +
            "- La suma de los ángulos interiores de cualquier triángulo es **180°**.\n" +
            "- En un triángulo isósceles, el ángulo comprendido entre los dos lados iguales es el **vértice**.\n" +
            "- El lado mayor se opone al ángulo mayor.\n" +
            "- **Teorema de la bisagra**: en dos triángulos con dos lados iguales, es mayor el que tiene el tercer lado mayor.\n" +
            "figura:mediana-baricentro | La mediana une un vértice con el punto medio del lado opuesto\n" +
            "## Teorema de Pitágoras\n" +
            "En un triángulo **rectángulo**, la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa: a² + b² = c². Solo se aplica en triángulos rectángulos, y la hipotenusa es siempre el lado más largo, el que está frente al ángulo de 90°.\n" +
            "> Error frecuente: aplicar Pitágoras a un triángulo que no es rectángulo. Si no hay ángulo recto, la relación no se cumple.\n" +
          "figura:altura-hipotenusa | La altura al hipotenusa parte el triángulo en dos triángulos semejantes",
          ejemplo:
            "En un triángulo rectángulo, un cateto mide 9 y la hipotenusa 15. Halla el otro cateto y los dos ángulos agudos.\n" +
            "## Método del teorema de Pitágoras\n" +
            "- 9² + b² = 15², o sea 81 + b² = 225, así que b² = 144 y **b = 12**.\n" +
            "- Como 81 + 144 = 225, la cuenta queda cerrada.\n" +
            "## Método de las ternas pitagóricas, que da el resultado sin despejar nada\n" +
            "- Las ternas clásicas son 3-4-5, 5-12-13 y 8-15-17.\n" +
            "- La hipotenusa 15 aparece en 8-15-17 y también en el múltiplo 3 de 3-4-5, que es 9-12-15.\n" +
            "- Como ya conozco un cateto, 9, el otro tiene que ser **12**, sin hacer ninguna cuenta.\n" +
            "## Método de las razones trigonométricas, para los ángulos\n" +
            "- El ángulo opuesto al cateto de 9 cumple seno = 9/15 = 0,6, y el arco seno de 0,6 da **36,9°**.\n" +
            "- El ángulo opuesto al cateto de 12 cumple coseno = 9/15 = 0,6, y el arco coseno da **53,1°**.\n" +
            "- Control: 36,9° + 53,1° = 90°, que es lo que tienen que sumar los dos ángulos agudos de un triángulo rectángulo.",
          consejo:
            "Ordena siempre los lados de menor a mayor antes de aplicar Pitágoras, porque el lado mayor es necesariamente la hipotenusa. Y reconoce las ternas pitagóricas clásicas (3-4-5, 5-12-13, 8-15-17, 7-24-25): si los números son múltiplos de alguna, la respuesta sale sin hacer cuentas.",
        },
        {
          objetivo:
            "Resolver problemas de polígonos y cuadriláteros: ángulos internos, lados, diagonales y propiedades de paralelogramos.",
          teoria:
            "Un **polígono** es una figura plana formada por segmentos que se unen dos a dos, sin cruzarse. Recibe nombre según el número de lados.\n" +
            "## Fórmulas de un polígono de n lados\n" +
            "- Suma de ángulos interiores: (n − 2) × 180°.\n" +
            "- Cada ángulo interior (en un polígono regular): (n − 2) × 180° ÷ n.\n" +
            "- Número de diagonales: n × (n − 3) ÷ 2. Ojo, no es n − 2: desde cada vértice se pueden trazar n − 3 diagonales, porque dos de los otros vértices son sus vecinos y están unidos por lados.\n" +
            "- Número de triángulos que se forman al trazar todas las diagonales desde un vértice: n − 2.\n" +
            "figura:poligono-regular | Polígono regular de 6 lados: el apotema une el centro con el punto medio del lado\n" +
            "## Cuadriláteros importantes\n" +
            "- **Paralelogramo**: los dos lados opuestos son paralelos y iguales. Sus ángulos opuestos son iguales y los consecutivos suman 180°.\n" +
            "- **Rectángulo**: es un paralelogramo con cuatro ángulos rectos. Su diagonal divide el rectángulo en dos triángulos congruentes.\n" +
            "- **Rombo**: paralelogramo con los cuatro lados iguales. Sus diagonales son perpendiculares y se cortan en el punto medio.\n" +
            "- **Cuadrado**: rectángulo y rombo a la vez.\n" +
            "- **Trapecio**: un solo par de lados paralelos, que se llaman bases.\n" +
            "> En un rombo, el área se puede calcular como el producto de sus diagonales dividido entre 2, aunque no se conozca la base ni la altura.\n" +
          "figura:paralelogramo | El paralelogramo y sus dos diagonales, que se cortan en el mismo punto",
          ejemplo:
            "Determina cuántas diagonales tiene un octágono, cuánto suman sus ángulos interiores y cuánto mide cada ángulo si es regular.\n" +
            "## Método de las fórmulas directas\n" +
            "- El octógono tiene n = 8 lados, así que desde cada vértice se pueden trazar n − 3 = 5 diagonales.\n" +
            "- Diagonales: n × (n − 3) ÷ 2 = 8 × 5 ÷ 2 = **20 diagonales**.\n" +
            "- Suma de ángulos interiores: (n − 2) × 180° = 6 × 180° = **1 080°**.\n" +
            "- Si es regular, cada ángulo mide 1 080 ÷ 8 = **135°**, un ángulo obtuso, como corresponde a una figura de tantos lados.\n" +
            "## Método del conteo vértice por vértice, que explica de dónde sale la división entre 2\n" +
            "- Desde un vértice hay 7 vértices distintos; dos son sus vecinos, unidos por lados, así que quedan 7 − 2 = 5 diagonales, que es exactamente n − 3.\n" +
            "- Sumando los 8 vértices salen 8 × 5 = 40, pero cada diagonal se ha contado dos veces, una desde cada extremo.\n" +
            "- Por eso se divide entre 2: 40 ÷ 2 = **20 diagonales**.\n" +
            "## Método de los triángulos, para la suma de ángulos\n" +
            "- Al trazar todas las diagonales desde un vértice, el octógono queda dividido en 8 − 2 = **6 triángulos**.\n" +
            "- Cada triángulo aporta 180°, y 6 × 180° = 1 080°, la misma suma de antes.\n" +
            "- En la figura regular los 6 triángulos son iguales y el ángulo del vértice elegido se reparte en 135° ÷ 6 = 22,5° para cada uno, lo que confirma los 135° de cada ángulo interior.\n" +
            "## Control con polígonos conocidos\n" +
            "- Un cuadrado, con n = 4, tiene 4 × 1 ÷ 2 = **2 diagonales**, que es lo que ya sabíamos.\n" +
            "- Un pentágono, con n = 5, tiene 5 × 2 ÷ 2 = **5 diagonales**, que es lo que se ve al contar a mano.",
          consejo:
            "Memoriza las dos fórmulas clave: la suma de interiores (n − 2) × 180 y las diagonales n(n − 3)/2. Con eso resuelves cualquier pregunta de polígonos, y el control con el cuadrado y el triángulo te permite detectar un error al instante. No las confundas: n − 2 es el número de lados que le sobran a un vértice, y de ahí salen los triángulos; n − 3 es el número de vértices a los que puede unirse sin tocar sus vecinos, y de ahí salen las diagonales.",
        },
        {
          objetivo:
            "Distinguir circunferencia y círculo, dominar ángulos en la circunferencia y aplicar Pitágoras a problemas con radios y cuerdas.",
          teoria:
            "La **circunferencia** es la línea curva cerrada cuyos puntos están a la misma distancia del centro, y esa distancia es el **radio**. El **círculo** es toda la superficie limitada por la circunferencia, y el segmento de diámetro es el **disco**.\n" +
            "## Ángulos asociados a la circunferencia\n" +
            "- El **ángulo central** tiene su vértice en el centro y su medida es igual a la del arco que abarca.\n" +
            "- El **ángulo inscrito** tiene su vértice en la circunferencia y mide **la mitad** del arco que abarca.\n" +
            "- Un ángulo inscrito que abarca un arco de 180° es un **ángulo recto**: el ángulo formado por un diámetro medido desde cualquier punto de la circunferencia siempre vale 90°.\n" +
            "figura:circunferencia-radio | Radio y diámetro: el diámetro es el doble del radio\n" +
            "figura:angulo-inscrito | El ángulo central es el doble del ángulo inscrito que abarcan el mismo arco\n" +
            "## Longitudes y áreas\n" +
            "- Longitud de la circunferencia: 2 × π × r.\n" +
            "- Área del círculo: π × r².\n" +
            "- Longitud de un arco de amplitud A en grados: (A / 360) × 2 × π × r.\n" +
            "> Truco: el área va con el radio **al cuadrado**, mientras que el perímetro va con el radio. Si duplicas el radio, el perímetro se duplica, pero el área se cuadruplica.\n" +
          "figura:triangulo-inscrito | Triángulo inscrito: el centro está a la misma distancia de los tres vértices\n" +
          "figura:sector-circular | Sector circular: el arco y el ángulo central se calculan con la misma proporción",
          ejemplo:
            "Una rueda tiene radio 35 cm. Halla cuánto recorre en una vuelta, qué área barre y cuánto mide el arco de 60°.\n" +
            "## Método de las fórmulas directas\n" +
            "- Longitud de la vuelta, que es la longitud de la circunferencia: L = 2 × π × 35 = 70π, que con 3,14 da **219,8 cm**.\n" +
            "- Área barrida, que es el área del círculo: A = π × 35² = π × 1 225 = 3,14 × 1 225 = **3 846,5 cm²**.\n" +
            "- El arco de 60° es una fracción de la vuelta completa: L = (60/360) × 70π, y como 60/360 es un sexto, el arco mide **36,6 cm**.\n" +
            "## Método de las unidades, que evita el error clásico\n" +
            "- Con el radio en centímetros, la longitud sale en centímetros y el área en centímetros cuadrados, y no hace falta inventar ninguna conversión.\n" +
            "- Paso la longitud a metros dividiendo entre 100: 219,8 cm = **2,198 m**.\n" +
            "- Paso el área a metros cuadrados dividiendo entre 10 000, porque un metro tiene 100 cm y un metro cuadrado 100 × 100: 3 846,5 cm² = **0,384 65 m²**.\n" +
            "- Si saliera 0,038 465 m², el error sería haber dividido entre 100 en lugar de entre 10 000.\n" +
            "## Método del control con números calculados de otra forma\n" +
            "- 2 × π × r con π = 3,14 da 70 × 3,14 = 219,8, y el área se comprueba como π × (35 × 35) = 3 846,5. Las dos cuentas coinciden.\n" +
            "- Un arco de 60° es un sexto de la vuelta, y 219,8 ÷ 6 = 36,6, que es el mismo resultado del método 1.\n" +
            "> La cuenta más rápida para un arco es dividir la longitud completa entre 360 y multiplicar por los grados del arco; con 60°, que es un sexto, la división se hace sola.",
          consejo:
            "Antes de hacer cuentas, escribe siempre la fórmula y anota las unidades del radio. Los errores más frecuentes en examen no son de fórmula, sino mezclar centímetros con metros, o usar el diámetro donde iba el radio (y entonces todo se va por un factor 2 o por un factor 4).",
        },
        {
          objetivo:
            "Calcular perímetros y áreas de figuras planas, y resolver problemas de áreas sombreadas y figuras compuestas.",
          teoria:
            "El **perímetro** es la longitud total del contorno de una figura, y el **área** es la superficie que ocupa. No deben confundirse: una figura puede tener el mismo perímetro y áreas muy distintas.\n" +
            "## Fórmulas que debes tener a mano\n" +
            "- Triángulo: perímetro = suma de lados; área = base × altura ÷ 2.\n" +
            "- Cuadrado: perímetro = 4l; área = l².\n" +
            "- Rectángulo: perímetro = 2(b + h); área = b × h.\n" +
            "- Paralelogramo: área = base × altura.\n" +
            "- Trapecio: área = (B + b) × h ÷ 2, con B la base mayor y b la menor.\n" +
            "- Círculo: perímetro = 2πr; área = πr².\n" +
            "- Rombo: área = diagonal mayor × diagonal menor ÷ 2.\n" +
            "figura:cilindro | Cilindro: el área total es la lateral más las dos bases\n" +
            "figura:cono | Cono: su volumen es la tercera parte del cilindro equivalente\n" +
            "figura:esfera | Esfera: el área de la superficie y el volumen salen de un solo radio\n" +
            "figura:prisma-rectangular | Prisma rectangular: el volumen es base por altura\n" +
            "## Figuras compuestas\n" +
            "Cuando una figura se arma con varias piezas, hay dos caminos: **sumar** las áreas si las piezas están pegadas, o **restar** un hueco si una pieza está dentro de otra. En el segundo caso, calcula primero el área grande, luego la del hueco, y réstalas.\n" +
            "> La altura no siempre es el lado. En un triángulo rectángulo, en un rombo o en un paralelogramo, la altura es una perpendicular que muchas veces no es ninguno de los lados que ves.",
          ejemplo:
            "Un terreno es un trapecio de bases 30 m y 18 m y altura 12 m, con lados laterales de 10 m y 14 m. Halla el área y el perímetro.\n" +
            "## Método de la fórmula del trapecio\n" +
            "- Área: A = (B + b) × h ÷ 2 = (30 + 18) × 12 ÷ 2 = 48 × 6 = **288 m²**.\n" +
            "- Perímetro: P = 30 + 18 + 10 + 14 = **72 m**.\n" +
            "## Método de la descomposición en figuras conocidas\n" +
            "- Corto el trapecio con una vertical por la base menor y obtengo un rectángulo de 18 × 12 = 216 m² más dos triángulos rectángulos.\n" +
            "- La base de cada triángulo es (30 − 18) ÷ 2 = 6 y la altura es 12, así que cada uno vale 6 × 12 ÷ 2 = 36 m².\n" +
            "- Total 216 + 36 + 36 = **288 m²**, exactamente lo que dio la fórmula.\n" +
            "## Método del control con longitudes racionales y con el costo\n" +
            "- El perímetro se puede repasar como base más base, 30 + 18 = 48, más los dos laterales, 10 + 14 = 24, y 48 + 24 = 72, la misma cifra.\n" +
            "- Si se quiere cercar con alambre a 8 soles el metro, el costo es 72 × 8 = **576 soles**.\n" +
            "- Y si se quiere sembrar, el área de 288 m² es la superficie real por la que hay que pagar.\n" +
            "> Si la fórmula y la descomposición dieran resultados distintos, casi siempre el error está en repartir la diferencia entre las bases, porque esa diferencia es lo que forma los dos triángulos.",
          consejo:
            "Si el enunciado mezcla área y perímetro, subraya cuál pide cada uno antes de calcular, porque es la trampa más común. Y cuando la figura se compone de varias piezas, siempre conviene buscar una segunda vía de cálculo para comprobar.",
        },
      ],
    },

    // ---------------------------------------------------------------------
    // Modulo 4 · Trigonometria
    // ---------------------------------------------------------------------
    {
      lecciones: [
        {
          objetivo:
            "Definir las seis razones trigonométricas, relacionarlas con lados de triángulos rectángulos y conocer sus signos por cuadrante.",
          teoria:
            "En un triángulo rectángulo, los lados tienen nombres fijos: el **cateto opuesto** es el que está frente al ángulo que studias, el **cateto adyacente** es el otro cateto, y la **hipotenusa** es el lado mayor, opuesto al ángulo recto. La trigonometría relaciona los ángulos con las razones entre estos lados.\n" +
            "## Las seis razones\n" +
            "- seno de α = cateto opuesto ÷ hipotenusa\n" +
            "- coseno de α = cateto adyacente ÷ hipotenusa\n" +
            "- " +
            "tangente de α = cateto opuesto ÷ cateto adyacente\n" +
            "Los inversos se llaman cosecante, secante y cotangente, y son el inverso de cada razón: por ejemplo, la secante de α es 1 dividido por el coseno.\n" +
            "## Relaciones fundamentales\n" +
            "En todo triángulo rectángulo, sin importar el ángulo, se cumple:\n" +
            "- seno² + coseno² = 1\n" +
            "- 1 + tangente² = secante²\n" +
            "- 1 + cotangente² = cosecante²\n" +
            "## Signos por cuadrante\n" +
            "En el primer cuadrante (0° a 90°) todas las razones son positivas. Al pasar al segundo, seno y cosecante siguen siendo positivas, pero coseno, tangente, secante y cotangente se vuelven negativas. En el tercero happens lo mismo que en el primero, y en el cuarto igual que en el segundo.\n" +
            "> En un triángulo rectángulo los ángulos siempre están entre 0° y 90°, así que todas las razones dan positivas. Los signos solo importan en el círculo unitario.\n" +
          "figura:triangulo-rectangulo | El seno, el coseno y la tangente se definen sobre el triángulo rectángulo\n" +
          "figura:cuadrante-angulos | En el primer cuadrante el seno y el coseno son positivos",
          ejemplo:
            "En un triángulo rectángulo, el cateto opuesto a α mide 6 y la hipotenusa 10. Halla seno, coseno y tangente de α.\n" +
            "## Método de la definición, con Pitágoras para el cateto que falta\n" +
            "- Seno = cateto opuesto ÷ hipotenusa = 6/10 = **0,6**.\n" +
            "- El otro cateto sale de Pitágoras: a² + 6² = 10², de donde a² = 100 − 36 = 64 y a = **8**.\n" +
            "- Coseno = cateto adyacente ÷ hipotenusa = 8/10 = **0,8**.\n" +
            "- Tangente = cateto opuesto ÷ cateto adyacente = 6/8 = **0,75**.\n" +
            "## Método de la razón de lados, que evita la cuenta intermedia\n" +
            "- Los lados 6, 8 y 10 son un múltiplo de 3-4-5, así que la razón del triángulo es 3 : 4 : 5.\n" +
            "- En esa razón, seno = 3/5 = 0,6, coseno = 4/5 = 0,8 y tangente = 3/4 = 0,75.\n" +
            "- Los tres valores salen sin despejar nada, y coinciden con el método 1.\n" +
            "## Método del control con la relación fundamental\n" +
            "- Seno² + coseno² tiene que dar 1: 0,36 + 0,64 = **1**. La relación se cumple, así que los dos valores son coherentes entre sí.\n" +
            "- Además, como el seno es 0,6 y el coseno es 0,8, la tangente no puede ser otra que 0,6 ÷ 0,8 = 0,75, que es lo que obtuve.\n" +
            "> En un triángulo rectángulo las tres razones no se eligen por separado: el seno y el coseno quedan encadenados por la relación fundamental, y la tangente es el cociente de los dos.",
          consejo:
            "Identifica primero el cateto opuesto y el adyacente, y escribe a qué ángulo te refieres. Confundir opuesto con adyacente es el error más común: intercambiandolos, el seno y el coseno quedan cambiados y todo el resultado se va al revés.",
        },
        {
          objetivo:
            "Usar el teorema de Pitágoras y los ángulos especiales para calcular lados y ángulos en figuras geométricas.",
          teoria:
            "Los **ángulos especiales** tienen razones trigonométricas que conviene saber de memoria, porque son los que más aparecen en los ejercicios y buena parte de las preguntas los usa directamente.\n" +
            "## Razones de los ángulos especiales\n" +
            "- 30°: seno 0,5 · coseno 0,866 · tangente 0,577\n" +
            "- 45°: seno 0,707 · coseno 0,707 · tangente 1\n" +
            "- 60°: seno 0,866 · coseno 0,5 · tangente 1,732\n" +
            "Para 0° y 90° basta con el sentido común: el seno de 0° es 0 y el coseno de 0° es 1; en 90° ocurre al revés.\n" +
              "## De dónde sale el triángulo 30-60-90\n" +
            "Ese triángulo aparece siempre que en un triángulo rectángulo hay un ángulo de 60° o de 30°, porque los lados guardan razón 1 : raíz de 3 : 2. Si el cateto menor mide k, el mayor es k × raíz de 3 y la hipotenusa es 2k.\n" +
            "## El 45-45-90\n" +
            "Aparece con dos ángulos de 45°. Sus lados guardan razón 1 : 1 : raíz de 2. Si los catetos valen k, la hipotenusa es k × raíz de 2.\n" +
            "> Un triángulo 45-45-90 es un caso particular del 30-60-90, y eso te da una forma rápida de comprobar cualquier resultado.\n" +
          "figura:altura-hipotenusa | La altura al hipotenusa cumple c · h = a · b",
          ejemplo:
            "Un triángulo rectángulo tiene un ángulo de 30° y la hipotenusa mide 14. Halla los catetos.\n" +
            "## Método de la razón 1 : raíz de 3 : 2\n" +
            "- El triángulo 30-60-90 tiene cateto menor, cateto mayor e hipotenusa en razón 1 : raíz de 3 : 2.\n" +
            "- La hipotenusa es 2k, así que k = 14 ÷ 2 = 7.\n" +
            "- Cateto menor, que es el opuesto a 30°: **7**.\n" +
            "- Cateto mayor, que es el opuesto a 60°: 7 × raíz de 3 = 7 × 1,732 = **12,12**.\n" +
            "## Método del seno y del coseno, que da lo mismo sin memorizar la razón\n" +
            "- Cateto menor = hipotenusa × seno de 30° = 14 × 0,5 = **7**.\n" +
            "- Cateto mayor = hipotenusa × coseno de 30° = 14 × 0,866 = **12,12**.\n" +
            "## Método del control con Pitágoras y con las propiedades del ángulo de 30°\n" +
            "- 7² + 12,12² = 49 + 147 = 196 = 14². La relación se cumple exactamente.\n" +
            "- 7 ÷ 14 = 0,5 = seno de 30°, y 12,12 ÷ 14 = 0,866 = coseno de 30°, así que cada cateto está en el ángulo que le corresponde.\n" +
            "- Y como el cateto menor es justo la mitad de la hipotenusa, se cumple la propiedad que define al ángulo de 30°.\n" +
            "> Los ángulos de 30° y 60° son los únicos que dan razones exactas con números sencillos, así que cuando aparecen en un problema conviene reconocerlos antes de sacar la calculadora.",
          consejo:
            "Si en el triángulo hay un ángulo de 30° o de 60°, no calcules nada con decimales: usa la razón 1 : raíz de 3 : 2 y conserva la raíz hasta el final. Si hay dos ángulos de 45°, usa 1 : 1 : raíz de 2. Es más rápido y exacto.",
        },
        {
          objetivo:
            "Resolver triángulos rectángulos e inclinados hallando lados y ángulos desconocidos, incluido el teorema del seno y del coseno.",
          teoria:
            "**Resolver un triángulo** significa hallar los lados y ángulos que faltan cuando se conocen dos datos. En un triángulo rectángulo eso se hace con Pitágoras y con las razones trigonométricas.\n" +
            "## Dos datos no siempre bastan\n" +
            "En un triángulo rectángulo, dos lados determinan todo el triángulo. Un cateto y un ángulo también. Pero un cateto y **solo** un ángulo pueden no bastar, porque no sabes si ese ángulo es el opuesto o el adyacente a ese cateto.\n" +
            "## Triángulos inclinados (no rectángulos)\n" +
            "Cuando no hay ángulo recto se usan otros dos teoremas, y hacen falta **tres datos** (dos lados y un ángulo, o dos ángulos y un lado):\n" +
            "- **Teorema del seno**: a/seno A = b/seno B = c/seno C.\n" +
            "- **Teorema del coseno**: c² = a² + b² − 2ab × coseno C.\n" +
            "figura:ley-senos | Ley de senos: dos lados y un ángulo no siempre bastan\n" +
            "figura:ley-cosenos | Ley de cosenos: conoce los tres lados, o dos lados y el ángulo comprendido\n" +
            "## Ángulos de una línea recta y del triángulo isósceles\n" +
            "En un triángulo isósceles, el vértice es el ángulo comprendido entre los dos lados iguales, y los dos ángulos de la base son iguales. Si conoces el vértice, cada base vale (180 menos el vértice) ÷ 2.\n" +
            "> Truco parano perder tiempo: si el triángulo es rectángulo, el otro ángulo se obtiene con la relación de la suma a 180°; si es isósceles, primero reparte los ángulos de la base.\n" +
          "figura:teorema-tales | Dos rectas paralelas cortadas por una transversal dan segmentos proporcionales\n" +
          "figura:semejanza | Dos triángulos semejantes tienen los lados proporcionales",
          ejemplo:
            "En un triángulo rectángulo, un cateto de 12 cm es adyacente a un ángulo agudo de 53°. Halla el otro cateto, la hipotenusa y el otro ángulo.\n" +
            "## Método de la tangente, el más corto cuando se pide el cateto opuesto\n" +
            "- Respecto a 53°, el cateto adyacente es 12 y el cateto opuesto es el que busco.\n" +
            "- Tangente = opuesto ÷ adyacente, así que el opuesto = 12 × tangente de 53° = 12 × 1,3270 = **15,92 cm**.\n" +
            "## Método de Pitágoras, que no necesita ninguna función\n" +
            "- Con los dos catetos, la hipotenusa sale directa: raíz de (12² + 15,92²) = raíz de (144 + 253,4) = raíz de 397,4 = **19,93 cm**.\n" +
            "- El otro ángulo agudo es 180° − 90° − 53° = **37°**.\n" +
            "## Método del seno y el coseno, como control cruzado\n" +
            "- Seno de 53° debe ser opuesto ÷ hipotenusa: 15,92 ÷ 19,93 = 0,7988, y el seno de 53° es 0,7986. La diferencia es solo redondeo.\n" +
            "- Coseno de 53° debe ser adyacente ÷ hipotenusa: 12 ÷ 19,93 = 0,6021, y el coseno de 53° es 0,6018. También coincide.\n" +
            "- Para el ángulo de 37° los papeles se invierten: su seno es 12 ÷ 19,93 = 0,6021, que es el 0,6018 del seno de 37°, y su coseno es 15,92 ÷ 19,93 = 0,7988.\n" +
            "- Por último, 53° + 37° + 90° = 180°, como tiene que ser en cualquier triángulo.\n" +
            "> Antes de elegir la función, escribe siempre de qué lado está el cateto conocido respecto al ángulo dado: adyacente u opuesto. Ese es el paso que decide si usas coseno, seno o tangente.",
          consejo:
            "Dibuja el triángulo y rotula cateto opuesto, adyacente e hipotenusa **antes** de escribir cualquier fórmula. Con el dibujo hecho, la elección de la razón correcta es automática, y si no te sale el número, sabes que el error está en la elección y no en la cuenta.",
        },
        {
          objetivo:
            "Usar las identidades trigonométricas fundamentales para simplificar expresiones y resolver problemas con ángulos desconocidos.",
          teoria:
            "Las identidades trigonométricas son igualdades que se cumplen siempre, para cualquier ángulo. Son la herramienta que permite transformar expresiones desconocidas en otras más sencillas.\n" +
            "## Las tres identidades de un ángulo\n" +
            "- seno² α + coseno² α = 1\n" +
            "- 1 + tangente² α = secante² α\n" +
            "- 1 + cotangente² α = cosecante² α\n" +
            "## Identidades de la suma y la resta\n" +
            "- seno(α ± β) = seno α × coseno β ± coseno α × seno β\n" +
            "- coseno(α ± β) = coseno α × coseno β ∓ seno α × seno β\n" +
            "- tangente(α ± β) = (tangente α ± tangente β) ÷ (1 ∓ tangente α × tangente β)\n" +
            "En la fórmula del coseno el signo se invierte, y ese detalle es la causa de casi todos los errores.\n" +
            "## Identidades del ángulo doble\n" +
            "- seno 2α = 2 × seno α × coseno α\n" +
            "- coseno 2α = coseno² α − seno² α, y también vale 1 − 2 × seno² α o 2 × coseno² α − 1\n" +
            "> Truco: para simplificar una expresión con dos razones del mismo ángulo, conviértela a una sola usando la primera identidad y luego usa el ángulo doble.\n" +
          "figura:cuadrante-angulos | Los ángulos de un mismo cuadrante comparten el mismo signo",
          ejemplo:
            "Simplifica 2 × seno α × coseno α + seno² α − coseno² α.\n" +
            "## Método del ángulo doble, que reconoce las dos piezas\n" +
            "- El primer término es seno de 2α, porque el seno del ángulo doble es 2 × seno α × coseno α.\n" +
            "- Los otros dos términos juntos son seno² α − coseno² α, que es la versión con el signo cambiado del coseno de 2α.\n" +
            "- El resultado queda **seno de 2α − coseno de 2α**.\n" +
            "## Método de llevar todo a un mismo tipo de función\n" +
            "- El coseno del ángulo doble es coseno² α − seno² α, así que seno² α − coseno² α es exactamente el negativo: −coseno de 2α.\n" +
            "- El seno de 2α se deja como está, o se pasa a coseno de (90° − 2α) si lo que se quiere es una sola función en el resultado.\n" +
            "- Con cualquiera de las dos decisiones, el resultado es el mismo: seno de 2α − coseno de 2α.\n" +
            "## Método numérico, que es la prueba de fuego\n" +
            "- Tomo α = 30°, de modo que 2α = 60°.\n" +
            "- Por identidades: seno de 60° − coseno de 60° = 0,866 − 0,5 = **0,366**.\n" +
            "- Por la expresión original: 2 × 0,5 × 0,866 + 0,25 − 0,75 = 0,866 − 0,5 = **0,366**.\n" +
            "- Los dos caminos dan exactamente lo mismo.\n" +
            "> Con un solo valor numérico compruebas cualquier identidad en un segundo, sin desarrollar veinte líneas de álgebra. Si no coinciden, hay un error de signo en algún lado.",
          consejo:
            "Aprende primero a pasar cualquier par de razones al mismo ángulo y después aplica el ángulo doble. Cuando expression aparentemente no se simplifica, casi siempre falta convertir un coseno en seno o al revés, y por eso conviene tener presentes las tres identidades de un ángulo.",
        },
        {
          objetivo:
            "Modelar y resolver problemas de alturas y distancias con triángulos rectángulos, usando las razones trigonométricas.",
          teoria:
            "Los problemas de **alturas y distancias** son la aplicación más útil de la trigonometría, porque usan un mismo tipo de figura: un triángulo rectángulo, a veces con un ángulo de 90° ya dado y a veces con dos datos que obligan a calcular primero un lado.\n" +
            "## Los tres pasos que siempre siguen\n" +
            "1. **Dibuja** el triángulo y rotula el ángulo recto, la altura y la base.\n" +
            "2. **Identifica** el cateto opuesto, el adyacente y la hipotenusa **respecto del ángulo que conoces**.\n" +
            "3. **Elige** la razón: seno si necesitas el cateto opuesto, coseno si necesitas el adyacente, tangente si necesitas el otro cateto y ya conoces uno.\n" +
            "## Casos que se repiten\n" +
            "- **Altura de una torre o un poste**: casi siempre un triángulo 30-60-90 o 45-45-90, así que se resuelve con razones especiales.\n" +
            "- **Distancia hasta un punto inaccesible**: se forma un triángulo con la base conocida y dos ángulos medidos con un teodolito, y la altura se despeja de la tangente.\n" +
            "- **Línea de vista a un avión**: se usan dos triángulos y se resta una altura de la otra.\n" +
            "> Cuando no hay ángulo recto a la vista, puedes **inventarlo**: traza una perpendicular desde el punto más cercano al suelo. Eso convierte la figura en dos triángulos rectángulos.\n" +
          "figura:triangulo-inscrito | La altura y las distancias en la circunferencia se apoyan en el radio",
          ejemplo:
            "Desde el punto más alto de un edificio de 24 m se ve un globo a 30° sobre la horizontal. El globo está sobre un punto situado a 40 m del edificio. ¿A qué altura está el globo y a qué distancia del observador?\n" +
            "## Método de la tangente, que va directo a la altura\n" +
            "- La altura que se pide no es el cateto, sino la del edificio más la parte que lo supera. Ese error es el más común de este tema.\n" +
            "- Respecto a 30°, el cateto adyacente son 40 m y el cateto opuesto es lo que el globo supera por encima del tejado.\n" +
            "- Tangente = opuesto ÷ adyacente, así que la parte que supera es 40 × tangente de 30° = 40 × 0,5774 = **23,09 m**.\n" +
            "- Altura total del globo: 24 + 23,09 = **47,09 m**, es decir unos 47,1 m.\n" +
            "## Método del coseno y del seno, que pasa por la distancia\n" +
            "- La distancia del observador al globo es la hipotenusa: 40 ÷ coseno de 30° = 40 ÷ 0,8660 = **46,19 m**.\n" +
            "- Con esa distancia, la parte que el globo supera el tejado es seno de 30° por la hipotenusa: 0,5 × 46,19 = **23,10 m**.\n" +
            "- Vuelvo a sumar la altura del edificio: 24 + 23,10 = **47,10 m**.\n" +
            "## Método del control con Pitágoras\n" +
            "- En el triángulo pequeño: raíz de (46,19² − 40²) = raíz de (2 133,5 − 1 600) = raíz de 533,5 = **23,10 m**.\n" +
            "- Sumando otra vez los 24 m del edificio se obtiene 47,10 m, el mismo valor que por los otros dos métodos.\n" +
            "> Los tres caminos coinciden en 47,1 m. Si en algún punto sale 23,1 m, es que se ha contestado a la pregunta más fácil: a cuánto sube el globo por encima del tejado, y no a qué altura está.",
          consejo:
            "Dibuja siempre la figura antes de escribir la fórmula, aunque el enunciado ya traiga un dibujo. Y comprueba que tu respuesta sea **razonable**: si el problema dice que ves un objeto muy cercano y a 30° sobre la horizontal, la distancia no puede salir enorme. El sentido común detecta errores de signo que ninguna calculadora revela.",
        },
      ],
    },
    // ---------------------------------------------------------------------
    // Modulo 5 · Funciones, sucesiones, reales y logaritmos
    // ---------------------------------------------------------------------
    {
      titulo: "Módulo 5 · Funciones y sucesiones",
      lecciones: [
        {
          titulo: "Concepto de función y dominio y recorrido",
          objetivo:
            "Comprender qué es una función, distinguirla de una relación y determinar su dominio y recorrido con precisión.",
          teoria:
            "Una **función** es una relación que a cada elemento del conjunto de partida le asigna **un único** elemento del conjunto de llegada. Esa condición de unicidad es la que marca la diferencia con cualquier otra relación.\n" +
            "## Notación y elementos\n" +
            "1. Se escribe **f(x) = expresión**, donde x es la variable independiente y f(x) es la imagen.\n" +
            "2. **Dominio D(f)**: valores de x para los que existe la imagen. En álgebra se excluyen los que anulan denominadores o hacen negativa la raíz par.\n" +
            "3. **Recorrido R(f)**: valores que toma f(x) cuando x recorre el dominio.\n" +
            "$$f: A \\to B,\\qquad y = f(x) = 3x + 2$$\n" +
            "## Casos que restringen el dominio\n" +
            "| Expresión | Restricción | Ejemplo |\n" +
            "|---|---|---|\n" +
            "| $$f(x) = \\frac{1}{g(x)}$$ | $$g(x) \\neq 0$$ | $$f(x)=\\frac{1}{x-2} \\implies D = \\mathbb{R} - \\{2\\}$$ |\n" +
            "| $$f(x) = \\sqrt{g(x)}$$ de índice par | $$g(x) \\ge 0$$ | $$f(x)=\\sqrt{x-3} \\implies x \\ge 3$$ |\n" +
            "| $$f(x) = \\frac{1}{\\sqrt{g(x)}}$$ | $$g(x) > 0$$ | $$f(x)=\\frac{1}{\\sqrt{x+1}} \\implies x > -1$$ |\n" +
            "El ejemplo del dominio se lee así: todos los reales salvo el 2. La llave es parte del conjunto que se quita, no un adorno.\n" +
            "> Un error frecuente es confundir la condición de la raíz: la raíz cuadrada de un número negativo **no existe** en los reales, y por eso se pide mayor o igual que cero, no mayor que cero.",
          ejemplo:
            "Dada la función $$f(x)=\\frac{2x+1}{x^2-9}$$, determina su dominio.\n" +
            "## Método por el denominador\n" +
            "- El denominador no puede ser cero: $$x^2 - 9 = 0 \\implies x^2 = 9 \\implies x = 3 \\text{ o } x = -3$$.\n" +
            "- Por tanto el dominio es todos los reales menos esos dos valores.\n" +
            "## Representación con intervalos\n" +
            "$$D(f) = (-\\infty, -3) \\cup (-3, 3) \\cup (3, +\\infty)$$\n" +
            "- Se lee: desde menos infinito hasta -3, luego entre -3 y 3, y desde 3 hasta más infinito. Los extremos quedan fuera porque allí el denominador vale cero.\n" +
            "> Si en lugar de intervalos se pide notación de conjuntos, vale lo mismo: se escriben los tres tramos separados por unión.",
          consejo:
            "Cuando busques el recorrido, despeja x en función de y siempre que sea posible. Ese cambio de variable evita muchísimas confusiones al leer la curva, y sobre todo en las funciones racionales, donde el recorrido no se adivina a simple vista.",
        },
        {
          titulo: "Funciones lineales, cuadráticas y de proporcionalidad",
          objetivo:
            "Representar e interpretar funciones lineales y cuadráticas, reconociendo pendiente, vértice y puntos de corte.",
          teoria:
            "La **función lineal** es $$f(x) = mx + n$$, donde $$m$$ es la **pendiente** y $$n$$ la ordenada en el origen. Su gráfica es una recta.\n" +
            "## Significado de la pendiente\n" +
            "$$m = \\tan\\alpha = \\frac{\\Delta y}{\\Delta x}$$\n" +
            "- $$m > 0$$: recta creciente.\n" +
            "- $$m < 0$$: recta decreciente.\n" +
            "- $$m = 0$$: función constante $$y = n$$, una recta horizontal.\n" +
            "## Función cuadrática\n" +
            "$$f(x) = ax^2 + bx + c,\\qquad a \\neq 0$$\n" +
            "Su gráfica es una **parábola** abierta hacia arriba si $$a > 0$$ y hacia abajo si $$a < 0$$.\n" +
            "### Vértice\n" +
            "$$x_v = -\\frac{b}{2a},\\qquad y_v = f(x_v) = -\\frac{\\Delta}{4a},\\qquad \\Delta = b^2 - 4ac$$\n" +
            "El eje de simetría es la recta $$x = x_v$$.\n" +
            "### Puntos de corte\n" +
            "- Con el eje OY, se pone $$x = 0$$ y sale el punto $$(0, c)$$.\n" +
            "- Con el eje OX, se pone $$y = 0$$ y se resuelven las raíces de $$ax^2 + bx + c = 0$$ según el valor de $$\\Delta$$:\n" +
            "$$a < 0, \\quad a = 0, \\quad a > 0$$\n" +
            "## Forma canónica\n" +
            "$$f(x) = a(x - h)^2 + k,\\qquad V = (h, k)$$\n" +
            "> Para pasar de la forma general a la canónica basta con completar cuadrados. Así el vértice se identifica de un vistazo y la parábola se lee sin operar.",
          ejemplo:
            "Dada $$f(x) = x^2 - 4x + 3$$, halla vértice, eje de simetría, puntos de corte y forma canónica.\n" +
            "## Vértice y eje\n" +
            "$$x_v = -\\frac{-4}{2} = 2,\\qquad y_v = f(2) = 4 - 8 + 3 = -1$$\n" +
            "Así $$V = (2, -1)$$ y el eje es $$x = 2$$.\n" +
            "## Puntos de corte\n" +
            "- Con el OY: $$x = 0 \\implies (0, 3)$$.\n" +
            "- Con el OX: $$x^2 - 4x + 3 = 0 \\implies (x-1)(x-3) = 0 \\implies (1, 0)\\text{ y }(3, 0)$$.\n" +
            "## Forma canónica\n" +
            "$$f(x) = (x - 2)^2 - 1$$\n" +
            "## Comprobación\n" +
            "Al evaluar en el vértice: $$(2-2)^2 - 1 = -1$$, que coincide con $$y_v$$. Y las raíces de la canónica son $$2 - 1 = 1$$ y $$2 + 1 = 3$$, simétricas respecto a $$x = 2$$ como debe ser.\n" +
            "> Las dos comprobaciones dan el mismo vértice y las raíces simétricas confirman que el cálculo está bien.",
          consejo:
            "Si el coeficiente $$a < 0$$, la parábola abre hacia abajo y el vértice es un **máximo**, no un mínimo. Anótalo siempre, porque en problemas de optimisation ese matiz decide si buscas el techo o el suelo de la curva.",
        },
        {
          titulo: "Funciones exponenciales y logarítmicas",
          objetivo:
            "Aplicar las propiedades de exponentes y logaritmos para resolver ecuaciones y analizar funciones exponenciales.",
          teoria:
            "La **función exponencial** es $$f(x) = a^x$$ con $$a > 0$$, $$a \\neq 1$$, y su dominio es todo $$\\mathbb{R}$$.\n" +
            "## Propiedades básicas\n" +
            "$$a^{x+y} = a^x a^y,\\qquad a^{x-y} = \\frac{a^x}{a^y}$$\n" +
            "$$(a^b)^x = a^{bx},\\qquad a^0 = 1,\\qquad a^{-x} = \\frac{1}{a^x}$$\n" +
            "## El logaritmo es la operación inversa\n" +
            "$$\\log_a y = x \\iff a^x = y$$\n" +
            "con las condiciones $$a > 0$$, $$a \\neq 1$$ y $$y > 0$$.\n" +
            "## Propiedades del logaritmo\n" +
            "$$\\log_a(xy) = \\log_a x + \\log_a y, \\qquad \\log_a\\frac{x}{y} = \\log_a x - \\log_a y$$\n" +
            "$$\\log_a(x^k) = k \\log_a x, \\qquad \\log_a a = 1, \\qquad \\log_a 1 = 0$$\n" +
            "## Cambio de base\n" +
            "$$\\log_a b = \\frac{\\ln b}{\\ln a} = \\frac{\\log_{10} b}{\\log_{10} a} = \\frac{1}{\\log_b a}$$\n" +
            "> El logaritmo solo existe para argumentos positivos. Antes de dar por buena una solución logarítmica, compruébala en la expresión original: casi siempre es un argumento negativo.",
          ejemplo:
            "Resuelve $$2^x + 2^{x+1} = 12$$.\n" +
            "## Factor común\n" +
            "- Como $$2^{x+1} = 2 \\cdot 2^x$$, se puede sacar $$2^x$$: $$2^x(1 + 2) = 12$$.\n" +
            "- Entonces $$3 \\cdot 2^x = 12 \\implies 2^x = 4 = 2^2 \\implies x = 2$$.\n" +
            "## Comprobación\n" +
            "$$2^2 + 2^3 = 4 + 8 = 12$$\n" +
            "---\n" +
            "Resuelve $$\\log(x) + \\log(x - 3) = 1$$ en base 10.\n" +
            "## Condición de existencia primero\n" +
            "- Para que ambos logaritmos existan: $$x > 0$$ y $$x - 3 > 0$$, luego $$x > 3$$.\n" +
            "## Aplicamos las propiedades\n" +
            "$$\\log\\big(x(x-3)\\big) = \\log(10) \\implies x^2 - 3x - 10 = 0$$\n" +
            "$$(x-5)(x+2) = 0 \\implies x = 5 \\text{ o } x = -2$$\n" +
            "## Descartamos y comprobamos\n" +
            "- $$x = -2$$ **no vale**: incumple $$x > 3$$ y además daría un logaritmo de negativo.\n" +
            "- $$x = 5$$ sí: $$\\log 5 + \\log 2 = \\log 10 = 1$$.\n" +
            "> Solución: $$x = 5$$. El descarte de -2 no es un fallo del álgebra, es la condición de existencia del logaritmo.",
          consejo:
            "En ecuaciones con logaritmos, escribe siempre la condición de existencia ($$x>0$$, $$x-3>0$$, lo que toque) **antes** de despejar. Te ahorra perder tiempo con soluciones extraviadas y, sobre todo, evita presentar en el examen una raíz que no existe.",
        },
        {
          titulo: "Sucesiones, progresiones aritméticas y geométricas",
          objetivo:
            "Identificar el término general y la suma de progresiones aritméticas y geométricas para resolver problemas.",
          teoria:
            "Una **sucesión** es una lista ordenada $$a_1, a_2, a_3, ...$$ de números llamados términos.\n" +
            "## Progresión aritmética (P.A.)\n" +
            "La diferencia entre términos consecutivos es constante: $$d = a_{n+1} - a_n$$.\n" +
            "### Término general\n" +
            "$$a_n = a_1 + (n-1)d$$\n" +
            "### Suma de los n primeros términos\n" +
            "$$S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}\\big(2a_1 + (n-1)d\\big)$$\n" +
            "## Progresión geométrica (P.G.)\n" +
            "El cociente entre términos consecutivos es constante: $$r = \\frac{a_{n+1}}{a_n}$$, con $$r \\neq 0$$.\n" +
            "### Término general\n" +
            "$$a_n = a_1 \\cdot r^{n-1}$$\n" +
            "### Suma de los n primeros términos\n" +
            "Si $$r \\neq 1$$: $$S_n = a_1\\frac{r^n - 1}{r - 1}$$\n" +
            "Si $$r = 1$$: $$S_n = n \\cdot a_1$$\n" +
            "### Suma infinita, cuando converge\n" +
            "Si se cumple $$|r| < 1$$: $$S_\\infty = \\frac{a_1}{1 - r}$$\n" +
            "> Una progresión geométrica **converge en valor absoluto solo cuando** $$|r| < 1$$. Es uno de los pocos casos en que sumamos infinitos términos y obtenemos un número finito.",
          ejemplo:
            "En una progresión aritmética se sabe que $$a_3 = 7$$ y $$a_7 = 15$$. Halla $$a_1$$, la diferencia, $$a_{20}$$ y $$S_{20}$$.\n" +
            "## Plantear el sistema\n" +
            "- Del término general: $$a_3 = a_1 + 2d = 7$$ y $$a_7 = a_1 + 6d = 15$$.\n" +
            "- Restando ambas ecuaciones: $$4d = 8 \\implies d = 2$$.\n" +
            "- Sustituyendo: $$a_1 + 4 = 7 \\implies a_1 = 3$$.\n" +
            "## Término general y suma\n" +
            "$$a_{20} = a_1 + 19d = 3 + 38 = 41$$\n" +
            "$$S_{20} = \\frac{20}{2}(a_1 + a_{20}) = 10(3 + 41) = 10 \\cdot 44 = 440$$\n" +
            "## Comprobación de la diferencia\n" +
            "La serie empieza $$3, 5, 7, 9, ...$$: el tercer término es 7 y el séptimo es 15, tal y como decía el enunciado.\n" +
            "---\n" +
            "Halla la suma de los infinitos términos de $$2 + 1 + \\frac{1}{2} + \\frac{1}{4} + ...$$\n" +
            "- $$a_1 = 2$$ y $$r = \\frac{1}{2}$$, que cumple $$|r| < 1$$.\n" +
            "$$S_\\infty = \\frac{2}{1 - \\frac{1}{2}} = \\frac{2}{\\frac{1}{2}} = 4$$\n" +
            "> Comprobación: las sumas parciales se acercan a 4 (2 + 1 = 3, +0,5 = 3,5, +0,25 = 3,75, +0,125 = 3,875...). El límite es 4.",
          consejo:
            "En problemas de progresión geométrica con fracciones, escribe la razón $$r$$ en forma de fracción exacta, sin decimales, y termina el apartado verificando que un término cualquiera coincide con la fórmula general. Si dudas entre $$S_n$$ y $$S_\\infty$$, recuerda que la suma infinita solo existe cuando $$|r| < 1$$: aplicarla fuera de ese rango es el error más común al final de este tema.",
        },
        {
          titulo: "Números reales, intervalos y logaritmos en la recta",
          objetivo:
            "Clasificar números reales, operar con intervalos y aplicar propiedades de logaritmos para simplificar expresiones.",
          teoria:
            "El conjunto de los **números reales** $$\\mathbb{R}$$ incluye naturales, enteros, racionales e irracionales. Se representan en la recta real sin huecos.\n" +
            "## Clasificación\n" +
            "| Conjunto | Notación | Ejemplos |\n" +
            "|---|---|---|\n" +
            "| Naturales | $$\\mathbb{N}$$ | $$1, 2, 3, ...$$ |\n" +
            "| Enteros | $$\\mathbb{Z}$$ | $$..., -2, -1, 0, 1, 2, ...$$ |\n" +
            "| Racionales | $$\\mathbb{Q}$$ | $$\\frac{1}{2}, -0.25, 0.\\overline{3}$$ |\n" +
            "| Irracionales | $$\\mathbb{I}$$ | $$\\pi, \\sqrt{2}, e$$ |\n" +
            "| Reales | $$\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}$$ | todos |\n" +
            "## Intervalos\n" +
            "| Notación | Descripción | Gráfica |\n" +
            "|---|---|---|\n" +
            "| $$(a, b)$$ | $$a < x < b$$ | abierto |\n" +
            "| $$[a, b]$$ | $$a \\le x \\le b$$ | cerrado |\n" +
            "| $$(a, b]$$ | $$a < x \\le b$$ | semiabierto |\n" +
            "| $$(-\\infty, b)$$ | $$x < b$$ | infinito |\n" +
            "| $$[a, +\\infty)$$ | $$x \\ge a$$ | infinito |\n" +
            "> El intervalo $$(a, b)$$ NO incluye los extremos y $$[a, b]$$ sí. Lo que decide es si el cierre es redondo o cuadrado.\n" +
            "## Propiedades de logaritmos\n" +
            "$$\\log_a(b^p c^q) = p\\log_a b + q\\log_a c$$\n" +
            "$$\\log_a\\frac{b^p}{c^q} = p\\log_a b - q\\log_a c$$\n" +
            "## Logaritmos naturales y decimales\n" +
            "$$\\ln x = \\log_e x,\\qquad e \\approx 2.718,\\qquad \\log_{10} x = \\log x$$\n" +
            "> $$\\sqrt{2} \\approx 1.414213...$$ es irracional: no se puede escribir como fracción exacta y su decimal no es periódico.",
          ejemplo:
            "Escribe en intervalo y representa: $$x \\ge 2$$ y $$x < 5$$.\n" +
            "## Un intervalo semiabierto\n" +
            "El intervalo semiabierto es $$[2, 5)$$: incluye el 2 porque el cierre es cuadrado, y excluye el 5 porque el paréntesis lo deja fuera.\n" +
            "---\n" +
            "Simplifica $$\\log 100 - \\log 10^2 + \\log_a(a^3)$$.\n" +
            "$$\\log 100 = 2,\\qquad \\log 10^2 = 2,\\qquad \\log_a(a^3) = 3$$\n" +
            "$$2 - 2 + 3 = 3$$\n" +
            "---\n" +
            "Desarrolla $$\\log_2\\frac{8x^3}{y^2}$$.\n" +
            "$$\\log_2(8x^3) - \\log_2(y^2) = \\log_2 8 + 3\\log_2 x - 2\\log_2 y$$\n" +
            "$$= 3 + 3\\log_2 x - 2\\log_2 y$$\n" +
            "> Siempre comprueba el argumento: para que $$\\frac{8x^3}{y^2}$$ sea positivo hacen falta $$x \\neq 0$$ y $$y \\neq 0$$, y como el signo de $$x^3$$ es el de $$x$$, solo se admite $$x > 0$$.",
          consejo:
            "Al unir intervalos con \"y\", piensa en intersección ($$\\cap$$), y con \"o\" en unión ($$\\cup$$). Ese matiz evita errores frecuentes en desigualdades compuestas, y antes de dar por buena una respuesta comprueba que los extremos abiertos o cerrados coinciden con lo que pide el enunciado.",
        },
      ],
    },
    // ---------------------------------------------------------------------
    // Módulo 6 · Estadística y probabilidad
    // ---------------------------------------------------------------------
    {
      titulo: "Módulo 6 · Estadística y probabilidad",
      lecciones: [
        {
          titulo: "Variables, datos y cómo se distribuyen",
          objetivo: "Distinguir variables cualitativas de cuantitativas, leer tablas de frecuencias y entender qué mide cada tipo de promedio.",
          teoria:
            "La estadística descriptiva trabaja con **datos observados**: los resume sin decidir nada sobre el futuro. La probabilidad, en cambio, responde a cuánto es probable un suceso incierto. Esta lección es la primera de las dos.\n" +
            "\n" +
            "## Variables y tipos de datos\n" +
            "\n" +
            "Una **variable** es lo que se mide u observa en cada individuo del estudio.\n" +
            "\n" +
            "| Tipo | Qué es | Ejemplo |\n" +
            "|---|---|---|\n" +
            "| Cualitativa nominal | categorías sin orden | color de ojos, carrera, sexo |\n" +
            "| Cualitativa ordinal | categorías con orden | nota de satisfaction, puesto en la tabla |\n" +
            "| Cuantitativa discreta | valores que se cuentan | número de hermanos, aciertos, hijos |\n" +
            "| Cuantitativa continua | valores que se miden | altura, peso, tiempo, temperatura |\n" +
            "\n" +
            "La diferencia práctica está en cómo se resume: una nominal se cuenta con frecuencias, y una continua necesita media y desviación.\n" +
            "\n" +
            "## Tabla de frecuencias\n" +
            "\n" +
            "Un **histograma** es un gráfico de barras verticales donde la altura de cada barra es la **frecuencia** de un intervalo, y los intervalos van pegados porque la variable es continua.\n" +
            "\n" +
            "| Notas | 0-2 | 3-4 | 5-6 | 7-8 | 9-10 |\n" +
            "|---|---|---|---|---|---|\n" +
            "| Alumnos | 2 | 5 | 9 | 7 | 3 |\n" +
            "\n" +
            "figura:histograma-caja | El histograma dice cuántas veces aparece cada valor, y la caja resume el mismo dato en cinco números\n" +
            "\n" +
            "## Los tres promedios\n" +
            "\n" +
            "Con la serie $$3, 5, 5, 7, 9, 11, 11$$:\n" +
            "\n" +
            "$$ \\text{media} = \\frac{51}{7} = 7.29, \\qquad \\text{mediana} = 7, \\qquad \\text{moda} = 5 \\text{ y } 11 $$\n" +
            "\n" +
            "- La **media** usa todos los valores, por eso la tiran hacia el lado de los valores extremos.\n" +
            "- La **mediana** es el valor central y **no se mueve** si un dato cambia mucho.\n" +
            "- La **moda** es el más frecuente; puede haber dos modas o ninguna.\n" +
            "\n" +
            "## Rango y recorrido\n" +
            "\n" +
            "$$ R = \\text{máximo} - \\text{mínimo} $$\n" +
            "\n" +
            "El rango resume solo cuánto se extiende el conjunto: dos distribuciones pueden tener la misma media y rangos muy distintos.\n" +
            "\n" +
            "> Un dato **atípico** es un valor muy lejos del resto. Detecta siempre si existe, porque basta con uno para que la media se vuelva poco representativa. Un ejemplo: las notas de una clase con un 0 y un 100 tienen media distinta de la misma clase sin el 0.\n" +
            "\n" +
            "glosario:Dato :: Cada observación que entra en el estudio.\n" +
            "glosario:Variable :: La característica que se mide u observa en cada sujeto.\n" +
            "glosario:Frecuencia :: Cuántas veces aparece un valor o un intervalo en la muestra.\n" +
            "glosario:Histograma :: Gráfico de barras pegadas con la frecuencia en el eje vertical.\n" +
            "glosario:Dato atípico :: Valor muy alejado del resto; falsea la media si no se comenta.\n" +
            "glosario:Mediana :: Valor central de la serie ordenada; resistente a los valores extremos.",
          ejemplo:
            "Las notas de 8 alumnos son: $$4, 6, 6, 7, 8, 8, 9, 12$$.\n" +
            "\n" +
            "## Ordenamos y contamos\n" +
            "\n" +
            "$$ 4, 6, 6, 7, 8, 8, 9, 12 $$\n" +
            "\n" +
            "- Media: $$ \\frac{60}{8} = 7.5 $$\n" +
            "- Mediana: con 8 datos, se promedian el 4.º y el 5.º: $$ (7 + 8) / 2 = 7.5 $$\n" +
            "- Moda: 6, 8 y 8, así que hay dos modas.\n" +
            "- Rango: $$ 12 - 4 = 8 $$\n" +
            "\n" +
            "## ¿Hay dato atípico?\n" +
            "\n" +
            "El 12 está claramente separado del resto. Si lo retiramos:\n" +
            "\n" +
            "$$ \\text{media} = \\frac{48}{7} = 6.86 $$\n" +
            "\n" +
            "La media baja casi medio punto, y el rango pasa de 8 a 5.\n" +
            "\n" +
            "> Conclusión: el 12 es un dato atípico y por eso la **mediana** describe mejor a este grupo que la media.\n" +
            "\n" +
            "!! Comprueba lo calculado\n" +
            "- Calcula la mediana de la serie $$2, 3, 3, 8, 9$$.\n" +
            "- ¿Cuántas modas tiene la serie $$5, 5, 5, 7$$?\n" +
            "- ¿Qué pasa con el rango si añadimos el valor 0 a la serie $$4, 6, 8$$?\n" +
            ">> Mediana = 3. Tiene una sola moda, la 5. El rango pasa de 4 a 8, y por eso el rango también es sensible a los extremos.",
          consejo: "Antes de resumir una serie, ordénala y mira si hay un dato pegado al resto o muy lejos. Si lo hay, calcula la media con y sin ese dato: la diferencia te dice cuánto está falseando el resumen."
        },
        {
          titulo: "Desviación típica: cuánto se dispersan los datos",
          objetivo: "Calcular la varianza y la desviación típica, y usarlas para comparar dos distribuciones con la misma media.",
          teoria:
            "Dos series pueden tener **la misma media** y ser completamente distintas. Lo que las separa es la **dispersión**: si los datos se agrupan mucho alrededor de la media, la desviación es pequeña.\n" +
            "\n" +
            "## Qué mide, en una frase\n" +
            "\n" +
            "$$ \\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}} $$\n" +
            "\n" +
            "La desviación típica $$\\sigma$$ es, en promedio, **cuánto se aleja un dato de la media**. Siempre se expresa en las mismas unidades que el dato: si las notas van de 0 a 10, $$\\sigma$$ también.\n" +
            "\n" +
            "## Cómo se calcula, paso a paso\n" +
            "\n" +
            "1. Restas la media a cada dato: eso da las **desviaciones**.\n" +
            "2. Las elevas al cuadrado: así los signos desaparecen y los valores extremos pesan más.\n" +
            "3. Las sumas y divides entre el número de datos: eso es la **varianza**.\n" +
            "4. Raíz cuadrada: eso es la **desviación típica**.\n" +
            "\n" +
            "$$ \\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n} $$\n" +
            "\n" +
            "Que la varianza lleve unidades al cuadrado es una incomodidad, y por eso se vuelve a la raíz para poder compararla con los datos.\n" +
            "\n" +
            "## Lectura de la desviación\n" +
            "\n" +
            "Un convenio muy usado para series unimodales:\n" +
            "\n" +
            "| Distancia a la media | Porcentaje de los datos |\n" +
            "|---|---|\n" +
            "| Una desviación | unos dos tercios |\n" +
            "| Dos desviaciones | unos 95 por ciento |\n" +
            "| Tres desviaciones | casi todos |\n" +
            "\n" +
            "figura:histograma-caja | La caja marca el intervalo de una desviación alrededor de la media\n" +
            "\n" +
            "> La **varianza** sirve para hacer cuentas encadenadas (sumar varianzas de datos independientes), pero para describir un conjunto se usa siempre la desviación, porque se lee en las unidades originales.\n" +
            "\n" +
            "glosario:Desviación :: Diferencia entre un dato y la media, con signo.\n" +
            "glosario:Varianza :: Promedio de las desviaciones al cuadrado.\n" +
            "glosario:Desviación típica :: Raíz de la varianza; mide la dispersión en las unidades del dato.\n" +
            "glosario:Serie unimodal :: Distribución con un solo pico, la más habitual.",
          ejemplo:
            "Dos grupos de notas: grupo A $$4, 5, 5, 6, 5$$ y grupo B $$2, 2, 9, 8, 4$$.\n" +
            "\n" +
            "## Media de cada grupo\n" +
            "\n" +
            "$$ \\bar{x}_A = \\frac{25}{5} = 5, \\qquad \\bar{x}_B = \\frac{25}{5} = 5 $$\n" +
            "\n" +
            "Las dos medias son **exactamente iguales**.\n" +
            "\n" +
            "## Desviación del grupo A\n" +
            "\n" +
            "Desviaciones: $$-1, 0, 0, 1, 0$$, cuadrados: $$1, 0, 0, 1, 0$$\n" +
            "\n" +
            "$$ \\sigma_A = \\sqrt{\\frac{2}{5}} = \\sqrt{0.4} \\approx 0.63 $$\n" +
            "\n" +
            "## Desviación del grupo B\n" +
            "\n" +
            "Desviaciones: $$-3, -3, 4, 3, -1$$, cuadrados: $$9, 9, 16, 9, 1$$\n" +
            "\n" +
            "$$ \\sigma_B = \\sqrt{\\frac{44}{5}} = \\sqrt{8.8} \\approx 2.97 $$\n" +
            "\n" +
            "## Conclusión\n" +
            "\n" +
            "Misma media, muy distinta dispersión. El grupo A es homogéneo y el B tiene alumnos muy desiguales.\n" +
            "\n" +
            "!! Practica el criterio\n" +
            "- Una máquina produce piezas de 10 cm con desviación $$0.2$$ y otra con $$1.5$$. ¿Cuál necesita menos control?\n" +
            "- ¿Qué le pasa a $$\\sigma$$ si duplicas todos los datos?\n" +
            ">> La de $$0.2$$, porque con menos dispersión casi todas las piezas están cerca de 10 cm. Si duplicas los datos, $$\\sigma$$ también se duplica: la dispersión crece en la misma proporción que la media.",
          consejo: "No calcules $$\\sigma$$ mentalmente en series largas: agrupa los cuadrados repetidos y multiplica. En el ejemplo del grupo B, los cuadrados son 9, 9, 16, 9, 1: es más rápido ver que hay tres 9 y summation que sumar cinco números."
        },
        {
          titulo: "Probabilidad: espacio muestral y eventos",
          objetivo: "Calcular la probabilidad de un evento con el método clásico, aplicar el complemento y usar las reglas de suma y producto.",
          teoria:
            "La probabilidad mide cuánto es probable un suceso, con un número **entre 0 y 1**:\n" +
            "\n" +
            "$$ 0 = \\text{imposible}, \\qquad 1 = \\text{seguro}, \\qquad P = \\frac{\\text{casos favorables}}{\\text{casos posibles}} $$\n" +
            "\n" +
            "## Tres axiomas que bastan\n" +
            "\n" +
            "1. La probabilidad del hecho seguro es 1.\n" +
            "2. La probabilidad de un suceso y la de su contrario suman 1: $$ P(A') = 1 - P(A) $$\n" +
            "3. Si dos sucesos son **incompatibles** (no pueden ocurrir a la vez), $$ P(A \\cup B) = P(A) + P(B) $$\n" +
            "\n" +
            "## Sucesos compatibles\n" +
            "\n" +
            "Cuando A y B **sí** pueden ocurrir juntos, hay que descontar la intersección:\n" +
            "\n" +
            "$$ P(A \\cup B) = P(A) + P(B) - P(A \\cap B) $$\n" +
            "\n" +
            "Ese término que se resta es justamente la **inclusión-exclusión**: sumar dos veces lo que ocurre en ambos.\n" +
            "\n" +
            "## Producto:bbe los dos a la vez\n" +
            "\n" +
            "Si A y B son **independientes**, la probabilidad de que ocurran los dos es el producto:\n" +
            "\n" +
            "$$ P(A \\cap B) = P(A) \\cdot P(B) $$\n" +
            "\n" +
            "figura:arbol-probabilidad | En un árbol, el camino entero se resuelve multiplicando las ramas\n" +
            "\n" +
            "## Los cinco errores típicos\n" +
            "\n" +
            "1. Confundir **probabilidad** con **frecuencia**: un 30 por ciento no significa que de 10 casos haya 3,3.\n" +
            "2. Sumar probabilidades de sucesos compatibles sin restar la intersección.\n" +
            "3. Multiplicar cuando los sucesos son dependientes.\n" +
            "4. Creer que dos sucesos independientes tienen la misma probabilidad.\n" +
            "5. Interpretar un porcentaje como cantidad de casos cuando la muestra es pequeña.\n" +
            "\n" +
            "glosario:Espacio muestral :: Conjunto de todos los resultados posibles, se escribe Omega.\n" +
            "glosario:Evento o suceso :: Subconjunto del espacio muestral que nos interesa.\n" +
            "glosario:Eventos incompatibles :: Dos sucesos que no pueden ocurrir a la vez.\n" +
            "glosario:Eventos independientes :: La probabilidad de uno no cambia si ocurre el otro.\n" +
            "glosario:Complemento :: El suceso contrario; su probabilidad es 1 menos la del original.",
          ejemplo:
            "Se lanzan dos dados. ¿Qué probabilidad hay de que la suma sea 7? ¿Y de que sea un número par?\n" +
            "\n" +
            "## Espacio muestral del primer caso\n" +
            "\n" +
            "Hay 36 combinaciones y 6 dan 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).\n" +
            "\n" +
            "$$ P(\\text{suma 7}) = \\frac{6}{36} = \\frac{1}{6} $$\n" +
            "\n" +
            "## Suma par: dos caminos\n" +
            "\n" +
            "La suma es par si los dos dados son pares, o si los dos son impares.\n" +
            "\n" +
            "- 3 pares y 3 impares en cada dado: $$3 \\times 3 + 3 \\times 3 = 18$$\n" +
            "- $$ P(\\text{suma par}) = \\frac{18}{36} = \\frac{1}{2} $$\n" +
            "\n" +
            "## Atajo de la paridad\n" +
            "\n" +
            "Coincide con el 50 por ciento, que es lo esperable: la mitad de las 36 combinaciones tienen una suma par.\n" +
            "\n" +
            "> Si en lugar de dos dados se lanza una moneda 3 veces, la suma de caras es par en 4 de los 8 casos, y $$4/8 = 1/2$$ de nuevo. No es casualidad: en una moneda las paridades están equilibradas.\n" +
            "\n" +
            "!! Repasa los conceptos\n" +
            "- ¿Cuál es la probabilidad de sacar un 6 en un dado justo?\n" +
            "- Si $$P(A) = 0.3$$, ¿cuánto vale $$P(A')$$?\n" +
            "- ¿Pueden A y B ser independientes y a la vez incompatibles?\n" +
            ">> $$1/6$$. $$P(A') = 0.7$$. No: si son incompatibles, que ocurra A deja a B con probabilidad 0, así que no son independientes.",
          consejo: "Cuando dos sucesos pueden ocurrir juntos, escribe primero un diagrama o una tabla de 2 por 2 y cuenta los casos favorables a mano. Sellar la fórmula antes de contar es donde se cuelan los errores."
        },
        {
          titulo: "Probabilidad condicional e independencia",
          objetivo: "Distinguir datos que informado de un dato que condiciona el resultado, y aplicar la fórmula de Bayes.",
          teoria:
            "Cambiar la pregunta modifica la respuesta. Si sabes que un alumno suspendió y le preguntas su nota, ya no estás en el mismo escenario que si no lo sabes.\n" +
            "\n" +
            "## La fórmula clave\n" +
            "\n" +
            "$$ P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} $$\n" +
            "\n" +
            "Se lee: **probabilidad de A dados los datos B**. Es decir, entre todos los casos que cumplen B, ¿qué fracción cumple también A?\n" +
            "\n" +
            "## Ejemplo con una tabla\n" +
            "\n" +
            "De 100 alumnos, 30 estudian con médico y 25 aprueban. Entre los que estudian, 20 aprueban:\n" +
            "\n" +
            "| | Aprueba | No aprueba | Total |\n" +
            "|---|---|---|---|\n" +
            "| Estudia | 20 | 10 | 30 |\n" +
            "| No estudia | 25 | 35 | 60 |\n" +
            "| Total | 45 | 45 | 100 |\n" +
            "\n" +
            "$$ P(\\text{aprueba} \\mid \\text{estudia}) = \\frac{20}{30} = 0.67 $$\n" +
            "\n" +
            "$$ P(\\text{aprueba} \\mid \\text{no estudia}) = \\frac{25}{60} = 0.42 $$\n" +
            "\n" +
            "Los datos **sí** importan: 0.67 frente a 0.42 no es un detalle.\n" +
            "\n" +
            "## Bayes: dar vuelta a la pregunta\n" +
            "\n" +
            "El ejemplo anterior va de causa a efecto. Bayes permite invertirlo:\n" +
            "\n" +
            "$$ P(\\text{estudia} \\mid \\text{aprueba}) = \\frac{P(\\text{aprueba} \\mid \\text{estudia}) \\cdot P(\\text{estudia})}{P(\\text{aprueba})} $$\n" +
            "\n" +
            "$$ = \\frac{0.67 \\times 0.30}{0.45} = \\frac{0.201}{0.45} = 0.447 $$\n" +
            "\n" +
            "Parecido en apariencia, pero **no es lo mismo**: 0.447 no es 0.67.\n" +
            "\n" +
            "> Ojo con el orden de las letras: $$P(A \\mid B)$$ y $$P(B \\mid A)$$ son preguntas distintas y solo coinciden cuando A y B son independientes.\n" +
            "\n" +
            "glosario:Probabilidad condicional :: Probabilidad de un suceso sabiendo que ocurrió otro.\n" +
            "glosario:Inferencia bayesiana :: Invertir la condición: del efecto a la causa probable.\n" +
            "glosario:Datos independientes :: Cada dato aporta lo suyo sin depender del anterior.\n" +
            "glosario:Tabla de contingencia :: Tabla que cruza dos variables categóricas.",
          ejemplo:
            "En una fábrica, el 20 por ciento de las piezas salen defectuosas. Una pieza es defectuosa con probabilidad 0.4 si viene de la línea A, y 0.1 si viene de la línea B. La mitad de la producción es de cada línea. ¿Qué probabilidad hay de que una pieza defectuosa venga de A?\n" +
            "\n" +
            "## Probabilidad de que sea de A y defectuosa\n" +
            "\n" +
            "$$ P(A \\cap D) = 0.5 \\times 0.4 = 0.2 $$\n" +
            "\n" +
            "## Probabilidad total de defectuosa\n" +
            "\n" +
            "$$ P(D) = 0.2 + 0.5 \\times 0.1 = 0.25 $$\n" +
            "\n" +
            "## Aplicamos Bayes\n" +
            "\n" +
            "$$ P(A \\mid D) = \\frac{0.2}{0.25} = 0.8 $$\n" +
            "\n" +
            "> La línea A aporta la mitad de la producción pero el 80 por ciento de los defectos. Esa es justo la información que sirve para actuar: revisar primero la línea A multiplica por cuatro la posibilidades de detectar el problema.\n" +
            "\n" +
            "!! Comprueba la inversión\n" +
            "- Si $$P(A) = 0.4$$ y $$P(B \\mid A) = 0.5$$, ¿cuánto vale $$P(A \\mid B)$$ si $$P(B) = 0.5$$?\n" +
            "- ¿Por qué no puede ser que $$P(A \\mid B) = 1$$\n" +
            ">> Con Bayes: $$0.4 \\times 0.5 / 0.5 = 0.4$$. Y no puede ser 1, porque eso diría que todos los casos de B son de A, y entonces $$P(B \\mid A)$$ sería 1 y no 0.5.",
          consejo: "Dibuja siempre la tabla 2 por 2 antes de Bayes. El error típico es usar $$P(B \\mid A)$$ donde debía $$P(A \\mid B)$$ porque la frase se lee al revés; la tabla deja ver de inmediato qué celda es el numerador."
        },
        {
          titulo: "Combinatoria y distribuciones binomiale y normal",
          objetivo: "Contar resultados con permutaciones y combinaciones, y entender cuándo un experimento se ajusta a una binomial o a una normal.",
          teoria:
            "La **combinatoria** cuenta resultados sin necesidad de representarlos uno a uno. Antes de contar hay que hacerse siempre la misma pregunta: ¿**el orden importa**?\n" +
            "\n" +
            "## Con orden: permutaciones\n" +
            "\n" +
            "Ordenar 3 libros de 5 en una estantería:\n" +
            "\n" +
            "$$ V_5^3 = 5 \\times 4 \\times 3 = 60 $$\n" +
            "\n" +
            "Multiplicas por 5 opciones para el primer hueco, luego 4, luego 3. En general $$V_n^k = n! / (n-k)!$$.\n" +
            "\n" +
            "## Sin orden: combinaciones\n" +
            "\n" +
            "Elegir 3 jugadores de 8 para un equipo, donde da igual quién va primero:\n" +
            "\n" +
            "$$ C_8^3 = \\frac{8!}{3! \\cdot 5!} = 56 $$\n" +
            "\n" +
            "Se lee con la fórmula de «n sobre k» y **siempre da un entero**.\n" +
            "\n" +
            "## La distribución binomial\n" +
            "\n" +
            "Se aplica cuando se repite una prueba idéntica, con dos resultados, y en cada una la probabilidad de éxito no cambia:\n" +
            "\n" +
            "$$ P(X = k) = C_n^k \\cdot p^k \\cdot (1-p)^{n-k} $$\n" +
            "\n" +
            "| Símbolo | Significado |\n" +
            "|---|---|\n" +
            "| n | número de pruebas |\n" +
            "| k | número de aciertos que se pide |\n" +
            "| p | probabilidad de acierto en una prueba |\n" +
            "\n" +
            "El ejemplo clásico es lanzar una moneda 10 veces y contar caras: n = 10, p = 0.5.\n" +
            "\n" +
            "## La curva normal\n" +
            "\n" +
            "Cuando n es grande, la binomial se parece a una **campana** centrada en la media, y se puede resumir con dos números: media y desviación.\n" +
            "\n" +
            "$$ X \\sim N(np, \\sqrt{np(1-p)}) $$\n" +
            "\n" +
            "Por eso en una muestra grande basta la media y la desviación para describir casi todo. La regla de las tres sigmas reparte aproximadamente el 68, 95 y 99,7 por ciento.\n" +
            "\n" +
            "> La media aritmética de cualquier distribución y la moda coinciden en la normal. En general no pasa, y por eso la media sola no describe un conjunto de datos.\n" +
            "\n" +
            "glosario:Permutación :: Selección ordenada; el orden de los elementos sí importa.\n" +
            "glosario:Combinación :: Selección sin orden; da igual qué elemento va primero.\n" +
            "glosario:Factorial :: Producto de todos los enteros desde 1 hasta n.\n" +
            "glosario:Distribución binomial :: Probabilidades de número de aciertos en n pruebas iguales.\n" +
            "glosario:Distribución normal :: Campana de media y desviación conocidas, aproximada con la binomial en muestras grandes.\n" +
            "glosario:Probabilidad binomial :: Probabilidad de exactamente k aciertos en n pruebas.",
          ejemplo:
            "En un examen de 10 preguntas de opción múltiple, hay 4 opciones y solo una es correcta. Cada pregunta se contesta al azar. ¿Cuál es la probabilidad de aprobar con 6 o más aciertos?\n" +
            "\n" +
            "## Parámetros del modelo\n" +
            "\n" +
            "$$ n = 10, \\qquad p = \\frac{1}{4} = 0.25, \\qquad q = 0.75 $$\n" +
            "\n" +
            "Media esperada: $$np = 2.5$$ aciertos. Aprobar exige casi el doble de la media.\n" +
            "\n" +
            "## Probabilidad de exactamente 6\n" +
            "\n" +
            "$$ P(X = 6) = C_{10}^6 \\times 0.25^6 \\times 0.75^4 $$\n" +
            "\n" +
            "$$ = 210 \\times 0.000244 \\times 0.3164 \\approx 0.0162 $$\n" +
            "\n" +
            "## Sumamos de 6 a 10\n" +
            "\n" +
            "$$ P(X = 7) = 120 \\times 0.25^7 \\times 0.75^3 \\approx 0.0116 $$\n" +
            "\n" +
            "$$ P(X = 8) = 45 \\times 0.25^8 \\times 0.75^2 \\approx 0.0039 $$\n" +
            "\n" +
            "$$ P(X = 9) = 10 \\times 0.25^9 \\times 0.75 \\approx 0.0005 $$\n" +
            "\n" +
            "$$ P(X = 10) = 0.25^{10} \\approx 0.000001 $$\n" +
            "\n" +
            "$$ P(X \\ge 6) \\approx 0.0162 + 0.0116 + 0.0039 + 0.0005 + 0.000001 \\approx 0.032 $$\n" +
            "\n" +
            "Solo un 3,2 por ciento de los alumnos que contestan al azar aprueba. La pregunta del examen era si merece la pena contestar al azar.\n" +
            "\n" +
            "> Un alumno que estudia y saca el 6 seguro debería asegurarse: su nota está 2,8 desviaciones por encima de la media de los que responden al azar.\n" +
            "\n" +
            "!! Cuenta con criterio\n" +
            "- ¿Cuántas formas hay de elegir personas de un grupo de 10, si el orden no importa?\n" +
            "- ¿Cuántas hay si importa quién va primero?\n" +
            "- En una binomial con p = 0.5, ¿cuántos intentos se necesitan para que la desviación sea menor que 1?\n" +
            ">> $$C_{10}^2 = 45$$, porque el orden no importa. Si el orden importa son $$10 \\times 9 = 90$$. Y por la fórmula, $$\\sqrt{np(1-p)} = \\sqrt{n}/2 < 1$$ pide $$n < 4$$, o sea 3 intentos.\n" +
            "\n",
          consejo: "En combinatoria, decide primero si el orden importa y anótalo. Después usa la fórmula y comprueba que el resultado sea entero: si sale decimal, casi siempre has usado la fórmula equivocada o estás contando dos veces lo mismo."
        },
      ],
    },  ],
};
