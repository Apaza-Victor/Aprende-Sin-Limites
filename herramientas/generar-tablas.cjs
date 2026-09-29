// ============================================================================
// generar-tablas.cjs
// Crea secciones/tablas.html: la pagina de consulta rapida con la tabla
// periodica interactiva y las tablas de formulas de cada area.
//
// La tabla periodica NO se escribe a mano: se dibuja en el navegador con
// assets/js/tabla-periodica.js a partir de los datos de assets/js/elementos.js.
// Las tablas de formulas si son HTML fijo, para que se lean sin JavaScript.
//
// Reutiliza el navbar, el footer y el envoltorio de pagina de
// generar-secciones.cjs, de modo que las 5 secciones comparten cabecera.
// NO usa template literals ni ${} ; todo con concatenacion.
// ============================================================================
const fs = require("fs");
const path = require("path");

const { SECCIONES, pagina } = require("./generar-secciones.cjs");

const { RAIZ } = require("./raiz.cjs");

const DIR_SECCIONES = path.join(RAIZ, "secciones");
const SEC = SECCIONES.filter(function (s) {
  return s.id === "tablas";
})[0];

// ---------------------------------------------------------------------------
// Tablas de formulas. Se escriben con notacion corta y estantica: los
// superindices van como ^(...) para no depender de caracteres Unicode raros.
// ---------------------------------------------------------------------------
const GRUPOS = [
  {
    id: "algebra",
    nav: "Álgebra",
    titulo: "Álgebra",
    intro:
      "Identidades, ecuaciones de segundo grado, logaritmos y progresiones. Son las herramientas que se repiten en casi todos los demás temas.",
    tablas: [
      {
        cap: "Potencias",
        cols: ["Propiedad", "Fórmula", "Ejemplo"],
        filas: [
          ["Producto de igual base", "a^(n) · a^(m) = a^(n+m)", "2³ · 2⁴ = 2⁷ = 128"],
          ["Cociente de igual base", "a^(n) : a^(m) = a^(n−m)", "5⁶ : 5² = 5⁴ = 625"],
          ["Potencia de potencia", "(a^(n))^(m) = a^(n·m)", "(3²)³ = 3⁶ = 729"],
          ["Potencia de un producto", "(a · b)^(n) = a^(n) · b^(n)", "(2 · 5)³ = 8 · 125 = 1000"],
          ["Exponente cero", "a⁰ = 1  (con a ≠ 0)", "7⁰ = 1"],
          ["Exponente negativo", "a^(−n) = 1 : a^(n)", "2⁻³ = 1/8"],
        ],
      },
      {
        cap: "Identidades notables (productos notables)",
        cols: ["Nombre", "Fórmula"],
        filas: [
          ["Cuadrado de una suma", "(a + b)² = a² + 2ab + b²"],
          ["Cuadrado de una diferencia", "(a − b)² = a² − 2ab + b²"],
          ["Diferencia de cuadrados", "(a + b)(a − b) = a² − b²"],
          ["Cubo de una suma", "(a + b)³ = a³ + 3a²b + 3ab² + b³"],
          ["Diferencia de cubos", "(a³ − b³) = (a − b)(a² + ab + b²)"],
          ["Suma de cubos", "(a³ + b³) = (a + b)(a² − ab + b²)"],
        ],
      },
      {
        cap: "Ecuación de segundo grado",
        cols: ["Concepto", "Fórmula", "Ejemplo"],
        filas: [
          ["Fórmula general", "x = (−b ± √(b² − 4ac)) : (2a)", "x² − 5x + 6 = 0 → x = 3 y x = 2"],
          ["Discriminante", "Δ = b² − 4ac", "Δ > 0 dos raíces; Δ = 0 una; Δ < 0 ninguna real"],
          ["Suma de raíces", "x₁ + x₂ = −b : a", "x₁ + x₂ = 5"],
          ["Producto de raíces", "x₁ · x₂ = c : a", "x₁ · x₂ = 6"],
        ],
      },
      {
        cap: "Logaritmos",
        cols: ["Propiedad", "Fórmula", "Ejemplo"],
        filas: [
          ["Definición", "log_b M = n  ⇔  bⁿ = M", "log₂ 8 = 3 porque 2³ = 8"],
          ["Producto", "log(M · N) = log M + log N", "log 1000 = 3 + 0 + 0"],
          ["Cociente", "log(M : N) = log M − log N", "log(1/2) = 0 − 0,301"],
          ["Potencia", "log(Mⁿ) = n · log M", "log(5²) = 2 log 5"],
        ],
      },
      {
        cap: "Progresiones",
        cols: ["Aritmética (suma constante)", "Geométrica (razón constante)"],
        filas: [
          ["Término general: aₙ = a₁ + (n − 1)·d", "Término general: aₙ = a₁ · q^(n−1)"],
          ["Suma: Sₙ = n · (a₁ + aₙ) : 2", "Suma: Sₙ = a₁ · (qⁿ − 1) : (q − 1)"],
          ["Buscador de diferencia: d = (aₙ − a₁) : (n − 1)", "Buscador de razón: q = a₂ : a₁"],
        ],
      },
      {
        cap: "Sistemas de ecuaciones",
        cols: ["Método", "Fórmula"],
        filas: [
          ["Determinantes (Cramer)", "x = (Dₓ : D)   ·   y = (Dᵧ : D)   ·   D = a₁b₂ − a₂b₁"],
          ["Dₓ", "Dₓ = b₁c₂ − b₂c₁   (cambia la primera columna por los términos independientes)"],
          ["Dᵧ", "Dᵧ = a₁b₂ − a₂b₁   (cambia la segunda columna por los términos independientes)"],
        ],
      },
    ],
  },
  {
    id: "geometria",
    nav: "Geometría",
    titulo: "Geometría",
    intro:
      "Perímetros, áreas, volúmenes y los teoremas de triángulos y polígonos que más se piden en los exámenes.",
    tablas: [
      {
        cap: "Áreas y perímetros",
        cols: ["Figura", "Área", "Perímetro"],
        filas: [
          ["Triángulo", "A = b · h : 2", "a + b + c"],
          ["Cuadrado", "A = a²", "4a"],
          ["Rectángulo", "A = b · h", "2(b + h)"],
          ["Paralelogramo", "A = b · h", "2(a + b)"],
          ["Rombo", "A = d₁ · d₂ : 2", "4a"],
          ["Trapecio", "A = (B + b) · h : 2", "B + b + 2c"],
          ["Círculo", "A = π · r²", "C = 2πr"],
          ["Sector circular", "A = (θ : 360) · π · r²", "L = (θ : 360) · 2πr"],
        ],
      },
      {
        cap: "Volúmenes y superficies",
        cols: ["Sólido", "Volumen", "Área total"],
        filas: [
          ["Prisma", "V = A_base · h", "A = 2A_base + P_base · h"],
          ["Cilindro", "V = π · r² · h", "A = 2πr(r + h)"],
          ["Cono", "V = π · r² · h : 3", "A = πr(r + g)"],
          ["Esfera", "V = 4π · r³ : 3", "A = 4π · r²"],
          ["Pirámide", "V = A_base · h : 3", "A = A_base + la suma de las caras laterales"],
        ],
      },
      {
        cap: "Triángulos notables",
        cols: ["Teorema", "Fórmula", "Para qué sirve"],
        filas: [
          ["Pitágoras", "a² + b² = c²", "Calcular un lado de un triángulo rectángulo"],
          ["Altura al hipotenusa", "c · h = a · b", "Calcular la altura desde el ángulo recto"],
          ["Herón (área)", "A = √(s · (s − a)(s − b)(s − c))  con s = (a+b+c) : 2", "Área con los tres lados"],
          ["Equilátero (altura)", "h = (√3 : 2) · a", "Altura y área de un triángulo equilátero"],
          ["Semejanza", "a : a′ = b : b′ = c : c′", "Resolver lados proporcionales de dos figuras"],
        ],
      },
      {
        cap: "Ángulos y polígonos",
        cols: ["Concepto", "Fórmula", "Ejemplo"],
        filas: [
          ["Triángulo", "Suma de ángulos internos = 180°", "60° + 60° + 60°"],
          ["Cuadrilátero", "Suma de ángulos internos = 360°", "90° + 90° + 90° + 90°"],
          ["Polígono de n lados", "Suma de ángulos internos = (n − 2) · 180°", "Pentágono: 540°"],
          ["Ángulo exterior de un polígono regular", "360° : n", "Hexágono regular: 60°"],
          ["Ángulo interior (polígono regular)", "180° − 360° : n", "Pentágono: 108°"],
        ],
      },
      {
        cap: "Circunferencia: potencia de un punto",
        cols: ["Teorema", "Fórmula"],
        filas: [
          ["Dos secantes", "S · E = S′ · E′"],
          ["Secante y tangente desde el exterior", "T² = S · E"],
          ["Dos cuerdas que se cortan dentro", "S · E = S′ · E′"],
        ],
      },
    ],
  },
  {
    id: "trigonometria",
    nav: "Trigonometría",
    titulo: "Trigonometría",
    intro:
      "Razones, identidades y las tres leyes que resuelven cualquier triángulo. Se escribe sen y cos, no sin ni cos.",
    tablas: [
      {
        cap: "Razones trigonométricas",
        cols: ["Razón", "Definición", "Relación con la hipotenusa"],
        filas: [
          ["sen α", "cateto opuesto : hipotenusa", "sen α = y : r"],
          ["cos α", "cateto adyacente : hipotenusa", "cos α = x : r"],
          ["tan α", "cateto opuesto : cateto adyacente", "tan α = y : x"],
        ],
      },
      {
        cap: "Valores notables",
        cols: ["Ángulo", "30°", "45°", "60°"],
        filas: [
          ["sen", "1/2", "√2/2", "√3/2"],
          ["cos", "√3/2", "√2/2", "1/2"],
          ["tan", "√3/3", "1", "√3"],
        ],
      },
      {
        cap: "Identidades",
        cols: ["Identidad", "Fórmula", "Ejemplo"],
        filas: [
          ["Pitamágoras", "sen²α + cos²α = 1", "Si sen α = 3/5, cos α = 4/5"],
          ["De la tangente", "1 + tan²α = 1 : cos²α", "tan α = 3/4 → sec²α = 25/16"],
          ["Recíprocas", "sec α = 1 : cos α  ·  cosec α = 1 : sen α  ·  cot α = 1 : tan α", "cosec 30° = 2"],
          ["Ángulos complementarios", "sen(90° − α) = cos α", "sen 30° = cos 60° = 1/2"],
        ],
      },
      {
        cap: "Leyes del triángulo oblicuo",
        cols: ["Ley", "Fórmula", "Cuándo usarla"],
        filas: [
          ["Ley de senos", "a : sen A = b : sen B = c : sen C", "Conoces un lado y sus ángulos opuestos"],
          ["Ley de cosenos", "c² = a² + b² − 2ab · cos C", "Conoces los tres lados, o dos lados y el ángulo entre ellos"],
          ["Ley de tangentes", "a : b = tan A : tan B", "Conoces dos ángulos y un lado, y quieres el otro lado"],
          ["Área del triángulo", "A = (a · b · sen C) : 2", "Dos lados y el ángulo comprendido"],
        ],
      },
      {
        cap: "Ángulos compuestos y grados-radianes",
        cols: ["Fórmula", "Desarrollo"],
        filas: [
          ["Seno de la suma", "sen(A ± B) = senA·cosB ± cosA·senB"],
          ["Coseno de la suma", "cos(A ± B) = cosA·cosB ∓ senA·senB"],
          ["Tangente de la suma", "tan(A ± B) = (tanA ± tanB) : (1 ∓ tanA·tanB)"],
          ["Seno del ángulo doble", "sen 2α = 2 · senα · cosα"],
          ["Coseno del ángulo doble", "cos 2α = cos²α − sen²α = 2cos²α − 1"],
          ["Tangente del ángulo doble", "tan 2α = 2 tanα : (1 − tan²α)"],
          ["Pasaje de grados a radianes", "180° = π rad  →  θ(rad) = θ(grados) · π : 180"],
        ],
      },
    ],
  },
  {
    id: "fisica",
    nav: "Física",
    titulo: "Física",
    intro:
      "Mecánica, energía, ondas, electricidad y óptica con las fórmulas tal como se escriben en la pizarra.",
    tablas: [
      {
        cap: "Movimiento rectilíneo",
        cols: ["Cantidad", "Fórmula", "Definición"],
        filas: [
          ["Velocidad media", "v = d : t", "Recorrido entre tiempo"],
          ["Aceleración", "a = (v_f − v_i) : t", "Cambio de velocidad por unidad de tiempo"],
          ["Posición (MRUV)", "x = v_i · t + a · t² : 2", "Distancia recorrida desde el origen"],
          ["Velocidad (MRUV)", "v_f = v_i + a · t", "Velocidad final en función de la inicial"],
          ["Relación sin tiempo", "v_f² = v_i² + 2 · a · d", "Útil cuando no te dan el tiempo"],
          ["Caída libre", "v_f² = v_i² + 2gh  con g = 9,81 m/s²", "Sin resistencia del aire"],
        ],
      },
      {
        cap: "Fuerzas y energía",
        cols: ["Ley o concepto", "Fórmula", "Detalle"],
        filas: [
          ["Segunda ley de Newton", "F = m · a", "La fuerza neta es la masa por la aceleración"],
          ["Equilibrio", "ΣF = 0", "Cuando la fuerza neta es cero el cuerpo no acelera"],
          ["Trabajo", "W = F · d · cos θ", "θ es el ángulo entre la fuerza y el desplazamiento"],
          ["Potencia", "P = W : t", "Trabajo por unidad de tiempo"],
          ["Energía cinética", "E_c = m · v² : 2", "Energía por movimiento"],
          ["Energía potencial", "E_p = m · g · h", "Energía por altura, en la gravedad"],
          ["Impulso", "I = F · Δt = m · Δv", "Cambio de momento"],
        ],
      },
      {
        cap: "Ondas y sonido",
        cols: ["Concepto", "Fórmula", "Detalle"],
        filas: [
          ["Velocidad de la onda", "v = λ · f", "Longitud de onda por frecuencia"],
          ["Periodo y frecuencia", "T = 1 : f  →  f = 1 : T", "Son recíprocos"],
          ["Reflexión", "θ_i = θ_r", "El ángulo de incidente es igual al de reflexión"],
          ["Refracción (Snell)", "sen θ₁ : sen θ₂ = v₁ : v₂", "La onda cambia de velocidad al cambiar de medio"],
        ],
      },
      {
        cap: "Electricidad",
        cols: ["Concepto", "Fórmula", "Detalle"],
        filas: [
          ["Ley de Ohm", "V = I · R", "Voltaje = corriente · resistencia"],
          ["Potencia eléctrica", "P = V · I = I² · R = V² : R", "Tres formas equivalentes"],
          ["Resistencias en serie", "R_eq = R₁ + R₂ + ... ", "La corriente es la misma en todas"],
          ["Resistencias en paralelo", "1 : R_eq = 1 : R₁ + 1 : R₂ + ...", "El voltaje es el mismo en todas"],
          ["Energía eléctrica", "E = P · t", "Consumo en el tiempo, se mide en kWh"],
        ],
      },
      {
        cap: "Optica y medidas",
        cols: ["Concepto", "Fórmula", "Detalle"],
        filas: [
          ["Lentes y espejos", "1 : f = 1 : d_o + 1 : d_i", "Ecuación de las óptica gaussiana"],
          ["Aumento", "A = d_i : d_o = h_i : h_o", "Relación de tamaños imagen/objeto"],
          ["Densidad", "ρ = m : V", "Masa por volumen"],
          ["Presión", "P = F : A", "Fuerza sobre superficie"],
          ["Presión hidrostática", "P = ρ · g · h", "Aumenta con la profundidad"],
          ["Calor", "Q = m · c · ΔT", "c es el calor específico"],
        ],
      },
    ],
  },
  {
    id: "quimica",
    nav: "Química",
    titulo: "Química",
    intro:
      "Cantidad de sustancia, gases, soluciones, pH y decaimiento radiactivo, con las unidades que hay que colocar en cada caso.",
    tablas: [
      {
        cap: "Cantidad de sustancia",
        cols: ["Dato", "Fórmula", "Unidad"],
        filas: [
          ["Moles a partir de la masa", "n = m : M", "mol"],
          ["Moles a partir del volumen de gas", "n = V : 22,4 (en condiciones normales)", "mol"],
          ["Moles a partir de la concentración", "n = M · V", "mol"],
          ["Masa molar", "M = m : n", "g/mol"],
          ["Número de partículas", "N = n · N_A  con N_A = 6,022 · 10²³", "partículas"],
        ],
      },
      {
        cap: "Gases",
        cols: ["Ley", "Fórmula", "Qué se mantiene constante"],
        filas: [
          ["General de los gases ideales", "P · V = n · R · T", "Nada; R = 0,082 atm·L/(mol·K)"],
          ["Boyle (isotérmica)", "P₁V₁ = P₂V₂", "La temperatura"],
          ["Charles (isobárica)", "V₁ : T₁ = V₂ : T₂", "La presión"],
          ["Gay-Lussac (isocórica)", "P₁ : T₁ = P₂ : T₂", "El volumen"],
        ],
      },
      {
        cap: "Disoluciones y pH",
        cols: ["Concepto", "Fórmula", "Detalle"],
        filas: [
          ["Molaridad", "M = n : V  (V en litros)", "mol/L"],
          ["pH", "pH = −log[H⁺]", "H⁺ en mol/L"],
          ["pOH", "pOH = −log[OH⁻]", "A 25 °C, pH + pOH = 14"],
          ["Concentración de H⁺", "[H⁺] = 10^(−pH)", "mol/L"],
        ],
      },
      {
        cap: "Estequiometría y rendimiento",
        cols: ["Concepto", "Fórmula", "Detalle"],
        filas: [
          ["Masa molar de un compuesto", "M = suma de las masas atómicas", "Se suman los átomos de la fórmula"],
          ["Rendimiento porcentual", "% rendimiento = (rendimiento real : rendimiento teórico) · 100", "Nunca pasa del 100 %"],
          ["Reactivo limitante", "Aquel que se acaba primero", "Se calcula comparando moles: coeficiente/moles"],
        ],
      },
      {
        cap: "Decaimiento radiactivo",
        cols: ["Concepto", "Fórmula", "Detalle"],
        filas: [
          ["Ley de decaimiento", "N = N₀ · (1/2)^(t : t₁/₂)", "N₀ es la cantidad inicial"],
          ["Periodo de semidesintegración", "t₁/₂", "Tiempo en que queda la mitad del núcleo inicial"],
          ["Actividad", "A = λ · N", "Desintegraciones por segundo"],
        ],
      },
    ],
  },
  {
    id: "unidades",
    nav: "Unidades",
    titulo: "Unidades, prefijos y constantes",
    intro:
      "Las unidades del SI, los prefijos que se añaden a los prefijos y las constantes que hay que memorizar para los ejercicios.",
    tablas: [
      {
        cap: "Unidades base del Sistema Internacional",
        cols: ["Magnitud", "Unidad", "Símbolo"],
        filas: [
          ["Longitud", "metro", "m"],
          ["Masa", "kilogramo", "kg"],
          ["Tiempo", "segundo", "s"],
          ["Intensidad de corriente", "amperio", "A"],
          ["Temperatura termodinámica", "kelvin", "K"],
          ["Cantidad de sustancia", "mol", "mol"],
          ["Intensidad luminosa", "candela", "cd"],
        ],
      },
      {
        cap: "Prefijos del SI",
        cols: ["Prefijo", "Símbolo", "Factor", "Ejemplo"],
        filas: [
          ["tera", "T", "10¹²", "1 Tm = 10¹² m"],
          ["giga", "G", "10⁹", "1 GHz = 10⁹ Hz"],
          ["mega", "M", "10⁶", "1 Mg = 10⁶ g"],
          ["kilo", "k", "10³", "1 km = 10³ m"],
          ["hecto", "h", "10²", "1 hm = 100 m"],
          ["deca", "da", "10¹", "1 dam = 10 m"],
          ["deci", "d", "10⁻¹", "1 dm = 0,1 m"],
          ["centi", "c", "10⁻²", "1 cm = 0,01 m"],
          ["mili", "m", "10⁻³", "1 mm = 0,001 m"],
          ["micro", "µ", "10⁻⁶", "1 µL = 10⁻⁶ L"],
          ["nano", "n", "10⁻⁹", "1 nm = 10⁻⁹ m"],
          ["pico", "p", "10⁻¹²", "1 pm = 10⁻¹² m"],
        ],
      },
      {
        cap: "Constantes y datos que hay que saber",
        cols: ["Dato", "Símbolo", "Valor"],
        filas: [
          ["Velocidad de la luz en el vacío", "c", "299 792 458 m/s"],
          ["Aceleración de la gravedad", "g", "9,81 m/s²"],
          ["Constante de gravitación universal", "G", "6,674 · 10⁻¹¹ N·m²/kg²"],
          ["Constante de Planck", "h", "6,626 · 10⁻³⁴ J·s"],
          ["Número de Avogadro", "N_A", "6,022 · 10²³ mol⁻¹"],
          ["Constante de los gases ideales", "R", "8,314 J/(mol·K)"],
          ["Carga del electrón", "e", "1,602 · 10⁻¹⁹ C"],
          ["Masa del electrón", "mₑ", "9,109 · 10⁻³¹ kg"],
          ["Masa del protón", "m_p", "1,673 · 10⁻²⁷ kg"],
          ["Masa de la unidad atómica", "u", "1,661 · 10⁻²⁷ kg"],
          ["Presión atmosférica normal", "—", "1 atm = 101 325 Pa = 760 mmHg"],
          ["Caballo de vapor", "CV", "735,5 W"],
          ["Pi", "π", "3,14159..."],
        ],
      },
      {
        cap: "Equivalencias útiles",
        cols: ["De", "A", "Factor"],
        filas: [
          ["1 litro", "1 dm³ = 10⁻³ m³", "1 L = 1000 mL"],
          ["1 metro", "100 cm", "1 m = 1000 mm"],
          ["1 kilogramo", "1000 g", "1 kg = 10⁶ mg"],
          ["1 hora", "60 min = 3600 s", "1 h = 3600 s"],
          ["1 área", "1 dam² = 100 m²", "1 ha = 10 000 m²"],
          ["1 galón (EE. UU.)", "3,785 L", "1 gal = 16 tazas"],
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Render
// ---------------------------------------------------------------------------
function tablaFormula(t) {
  let h = '<div class="tabla-formula-wrap"><table class="tabla-formula">';
  if (t.cap) h += "<caption>" + t.cap + "</caption>";
  h += "<thead><tr>";
  t.cols.forEach(function (c) {
    h += '<th scope="col">' + c + "</th>";
  });
  h += "</tr></thead><tbody>";
  t.filas.forEach(function (fila) {
    h += "<tr>";
    fila.forEach(function (celda, i) {
      if (i === 0) h += '<th scope="row" class="formula">' + celda + "</th>";
      else h += '<td class="formula">' + celda + "</td>";
    });
    h += "</tr>";
  });
  h += "</tbody></table></div>";
  return h;
}

function panelGrupo(g, activa) {
  let h = '<div class="tab-pane fade' + (activa ? " show active" : "") + '" id="panel-' + g.id + '" role="tabpanel">';
  h += "<h3>" + g.titulo + "</h3>";
  h += '<p class="text-muted-2 mb-4">' + g.intro + "</p>";
  g.tablas.forEach(function (t) {
    h += tablaFormula(t);
  });
  h += "</div>";
  return h;
}

// ---------------------------------------------------------------------------
// Cuerpo de la pagina
// ---------------------------------------------------------------------------
function cuerpo() {
  let h = '<section id="tablas">\n  <div class="container">\n\n';
  h += '    <h1 class="titulo-seccion">Tablas y fórmulas de consulta</h1>\n';
  h +=
    '    <p class="lead mb-4">Todo lo que se consulta a última hora, en una sola página: la tabla periódica ' +
    "completa con buscador y las fórmulas de álgebra, geometría, trigonometría, física y química. " +
    "Úsala para repasar antes del simulacro, no para estudiar la teoría.</p>\n\n";

  // --- Tabla periódica ------------------------------------------------------
  h += '    <div class="card-panel mb-5">\n';
  h += '      <h2 class="panel-titulo"><i class="bi bi-grid-3x3-gap"></i> Tabla periódica</h2>\n';
  h +=
    '      <div class="row g-3 align-items-end mb-3">\n' +
    '        <div class="col-md-6">\n' +
    '          <label for="buscarElemento" class="form-label">Buscar un elemento</label>\n' +
    '          <input type="search" class="form-control" id="buscarElemento" placeholder="oro, Fe, 26..." autocomplete="off" />\n' +
    "        </div>\n" +
    '        <div class="col-md-6">\n' +
    '          <p class="mb-0 small" id="avisoBusqueda" aria-live="polite">Escribe un nombre o un símbolo, por ejemplo: oro, Fe, o 26.</p>\n' +
    "        </div>\n" +
    "      </div>\n";
  h += '      <p class="pt-hint"><i class="bi bi-arrow-left-right"></i> Desliza la tabla para ver los 118 elementos: en movil no cabe entera.</p>\n';
  h += '      <div class="pt-wrap"><div id="tablaPeriodica" aria-label="Tabla periódica de los elementos"></div></div>\n';
  h += '      <div class="pt-wrap"><div id="tablaFamilias"></div></div>\n';
  h += '      <div class="leyenda" id="leyendaPeriodica"></div>\n';
  h += '      <div class="detalle-elemento" id="detalleElemento" aria-live="polite"></div>\n';
  h += "    </div>\n\n";

  // --- Fórmulas -------------------------------------------------------------
  h += '    <div class="card-panel mb-5">\n';
  h += '      <h2 class="panel-titulo"><i class="bi bi-journal-text"></i> Fórmulas por área</h2>\n';
  h +=
    '      <ul class="nav nav-pills flex-wrap gap-2 mb-4" id="pillsFormulas" role="tablist">\n';
  GRUPOS.forEach(function (g, i) {
    h +=
      '        <li class="nav-item" role="presentation">\n' +
      '          <button class="nav-link' +
      (i === 0 ? " active" : "") +
      '" data-bs-toggle="tab" data-bs-target="#panel-' +
      g.id +
      '" type="button" role="tab" aria-controls="panel-' +
      g.id +
      '" aria-selected="' +
      (i === 0 ? "true" : "false") +
      '">' +
      g.nav +
      "</button>\n" +
      "        </li>\n";
  });
  h += "      </ul>\n";
  h += '      <div class="tab-content" id="panelesFormulas">\n';
  GRUPOS.forEach(function (g, i) {
    h += panelGrupo(g, i === 0);
  });
  h += "      </div>\n";
  h += "    </div>\n\n";

  h += "  </div>\n</section>";
  return h;
}

// ---------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------
function main() {
  if (!fs.existsSync(DIR_SECCIONES)) fs.mkdirSync(DIR_SECCIONES, { recursive: true });

  let html = pagina(SEC, cuerpo());

  // Esta pagina necesita el dataset y el script de pintado, ademas de los
  // scripts comunes que pagina() ya coloca.
  const ancla = '  <script src="../assets/js/ui.js"></script>';
  const extra =
    '  <script src="../assets/js/elementos.js"></script>\n' +
    '  <script src="../assets/js/tabla-periodica.js"></script>\n' +
    ancla;
  if (html.indexOf(ancla) < 0) throw new Error("No se encontro el punto de insercion de los scripts");
  html = html.split(ancla).join(extra);

  const destino = path.join(DIR_SECCIONES, SEC.archivo);
  fs.writeFileSync(destino, html, "utf8");
  console.log("  " + SEC.archivo + "  (" + html.length + " chars, " + GRUPOS.length + " grupos de formulas)");
}

main();
