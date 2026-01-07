
export const locales: any = {
  en: {
    common: {
      back: "Back",
      calculate: "Calculate",
      results: "Results",
      invalidInput: "Please enter valid numerical values.",
      loading: "Processing calculation...",
      home: "Home",
      reset: "Reset",
      copyright: "© 2026 TotalCalc. All rights reserved.",
      description: "Precision engineered calculations for every aspect of your life.",
      langName: "English"
    },
    categories: {
      math: "Mathematics",
      mathTools: "Mathematical Tools",
      finance: "Finance",
      financeTools: "Financial Analysis",
      health: "Health & Fitness",
      healthTools: "Health & Vitality Tools",
      daily: "Daily Utilities",
      dailyTools: "Everyday Life Utilities"
    },
    nav: {
      search: "Search 50+ professional calculators...",
      privacy: "Privacy Policy",
      contact: "Contact Us",
      noResults: "No calculators found for your search."
    },
    home: {
      heroTitle: "Precision Logic. Instant Answers.",
      heroSub: "Master your day with TotalCalc's suite of precision tools. 100% free and private.",
      mathDesc: "Arithmetic, Algebra, Geometry & Statistics",
      financeDesc: "Mortgages, Loans & Investment Analysis",
      healthDesc: "Fitness, Nutrition & Vital Metrics",
      dailyDesc: "Lifestyle Utilities & Productivity Tools"
    },
    calculators: {
      bmi: { 
        name: "Body Mass Index (BMI) Calculator", 
        desc: "Evaluate weight health based on height and mass.", 
        weight: "Weight", 
        height: "Height",
        advice: {
          under: "Underweight: Suggest consulting a medical professional.",
          normal: "Healthy Weight: Excellent, maintain your current lifestyle.",
          over: "Overweight: Consider increasing physical activity.",
          obese: "Obese: High health risk, medical guidance is advised."
        }
      },
      bmr: { name: "Basal Metabolic Rate (BMR) Calculator", desc: "Calculate daily calories burned at rest.", age: "Age", calculate: "Calculate BMR" },
      water: { name: "Daily Water Intake Calculator", desc: "Determine your optimal hydration requirements.", exercise: "Daily Exercise (min)", goal: "Daily Hydration Goal" },
      calorie: { name: "TDEE & Calorie Needs Calculator", desc: "Personalized daily energy expenditure analysis.", activity: "Activity Level" },
      bodyFat: { name: "Body Fat Percentage Estimator", desc: "Calculate body composition via Navy Method.", waist: "Waist", neck: "Neck" },
      idealWeight: { name: "Ideal Body Weight (IBW) Calculator", desc: "Estimation of your healthiest weight range." },
      heartRate: { name: "Target Heart Rate Zone Calculator", desc: "Optimized cardio training zones by age." },
      bloodPressure: { name: "Blood Pressure Assessment", desc: "Check systolic and diastolic health ranges.", systolic: "Systolic", diastolic: "Diastolic" },
      sleep: { name: "Sleep Cycle & Wake-Up Optimizer", desc: "Time your sleep cycles for maximum rest.", sleepBtn: "Optimize Sleep Schedule" },
      pregnancy: { name: "Pregnancy Due Date Estimator", desc: "Calculate the estimated arrival of your baby." },
      mortgage: { name: "Mortgage Payment Calculator", desc: "Calculate monthly home loan amortizations." },
      loan: { name: "Personal Loan Interest Calculator", desc: "Analyze debt repayment and total interest cost." },
      compoundInterest: { name: "Compound Interest Growth Calculator", desc: "Project investment returns over time." },
      roi: { name: "Investment Return (ROI) Analysis", desc: "Calculate profitability and CAGR of assets." },
      currency: { name: "Global Currency Exchange Converter", desc: "Real-time international currency conversion." },
      retirement: { name: "Retirement Savings Projection", desc: "Analyze future nest egg and contributions." },
      tax: { name: "Income Tax & Net Pay Estimator", desc: "Analyze tax liabilities and take-home pay." },
      budget: { name: "50/30/20 Budgeting Planner", desc: "Strategic monthly financial allocation." },
      creditCard: { name: "Credit Card Debt Payoff Tool", desc: "Calculate timeline for credit card clearance." },
      salary: { name: "Salary & Wage Breakdown", desc: "Convert annual salary to hourly/daily rates." },
      arithmetic: { name: "Standard Arithmetic Calculator", desc: "Basic mathematical calculations." },
      scientific: { name: "Advanced Scientific Calculator", desc: "Complex trigonometry, logs, and functions." },
      quadratic: { name: "Quadratic Equation Solver", desc: "Solve roots for ax² + bx + c equations." },
      prime: { name: "Prime Number Checker", desc: "Identify and verify prime numbers." },
      factorial: { name: "Factorial (n!) Calculator", desc: "Calculate the product of descending integers." },
      percentage: { name: "Percentage Difference Tools", desc: "Ratios, margins, and percentage changes." },
      unitConverter: { name: "Universal Unit Converter", desc: "Length, weight, and volume conversions." },
      geometry: { name: "Geometry Area & Volume Solver", desc: "Calculate properties of 2D and 3D shapes." },
      statistics: { name: "Descriptive Statistics Analyzer", desc: "Mean, median, and variance analysis." },
      probability: { name: "Probability & Odds Calculator", desc: "Combinations and permutations analysis." },
      random: { name: "Secure Random Number Generator", desc: "Cryptographically secure random range selection.", min: "Min", max: "Max", roll: "Generate", msg: "Random result" },
      tip: { name: "Gratuity & Bill Split Calculator", desc: "Calculate tips and divide costs fairly.", bill: "Bill Total", people: "Party Size" },
      age: { name: "Chronological Age Calculator", desc: "Exact age in years, months, and days." },
      dateDiff: { name: "Date Difference Counter", desc: "Calculate time intervals between dates." },
      timezone: { name: "Global Time Zone Converter", desc: "Convert local time to international zones." },
      password: { name: "Secure Password Generator", desc: "Create high-entropy secure credentials." },
      qr: { name: "QR Code Generation Tool", desc: "Generate scanable codes for links and text." },
      color: { name: "Color Format Converter", desc: "HEX, RGB, and CMYK color management." },
      lottery: { name: "Lottery Win Probability Tool", desc: "Calculate numerical odds of winning." },
      fuel: { name: "Fuel Efficiency Analysis", desc: "Calculate L/100km or MPG consumption." },
      recipe: { name: "Recipe Serving Scaler", desc: "Adjust ingredient portions for any size." },
      travel: { name: "Travel Time & ETA Estimator", desc: "Calculate duration based on speed/distance." },
      clothing: { name: "Weather-Based Clothing Guide", desc: "Wardrobe suggestions for current climate." },
      countdown: { name: "Event Countdown Timer", desc: "Track time remaining until a target date." },
      grocery: { name: "Grocery Budget Estimator", desc: "Plan costs for your shopping list." },
      habit: { name: "Habit Projection Analysis", desc: "Long-term compounding effects of habits." },
      cooking: { name: "Kitchen Measurement Converter", desc: "Standard cooking volume/weight units." },
      worldClock: { name: "Global City World Clock", desc: "Current time in major global financial hubs." },
      dogAge: { name: "Dog Year to Human Year Converter", desc: "Calculate biological age equivalent for pets." },
      plant: { name: "Plant Hydration Scheduler", desc: "Watering guidance by botanical category." }
    },
    privacy: {
      title: "Privacy Commitment",
      intro: "TotalCalc is dedicated to protecting your data privacy.",
      dataCollection: "We do not store or transmit your personal health or financial data.",
      cookies: "Local storage is utilized solely for your language and theme preferences.",
      google: "Standard Google Analytics is used for performance optimization.",
      rights: "All calculations are processed locally on your client device.",
      contact: "For inquiries, please contact our data protection team."
    },
    contact: {
      title: "Connect With Us",
      sub: "We welcome feedback and requests for specialized calculation tools.",
      emailLabel: "Official Support Channel",
      formName: "Full Legal Name",
      formEmail: "Email Address",
      formMsg: "Your Inquiry",
      send: "Submit Inquiry"
    }
  },
  es: {
    common: {
      back: "Volver",
      calculate: "Calcular",
      results: "Resultados",
      invalidInput: "Por favor, ingrese valores numéricos válidos.",
      loading: "Procesando cálculo...",
      home: "Inicio",
      reset: "Reiniciar",
      copyright: "© 2026 TotalCalc. Todos los derechos reservados.",
      description: "Cálculos de precisión diseñados para cada aspecto de su vida.",
      langName: "Español"
    },
    categories: {
      math: "Matemáticas",
      mathTools: "Herramientas Matemáticas",
      finance: "Finanzas",
      financeTools: "Análisis Financiero",
      health: "Salud & Bienestar",
      healthTools: "Herramientas de Salud",
      daily: "Utilidades Diarias",
      dailyTools: "Vida Cotidiana"
    },
    nav: {
      search: "Busca más de 50 calculadoras profesionales...",
      privacy: "Política de Privacidad",
      contact: "Contacto",
      noResults: "No se encontraron resultados para su búsqueda."
    },
    home: {
      heroTitle: "Lógica de Precisión. Respuestas Al Instante.",
      heroSub: "Domine su día con el conjunto de herramientas de TotalCalc. 100% gratis.",
      mathDesc: "Aritmética, Álgebra, Geometría y Estadísticas",
      financeDesc: "Hipotecas, Préstamos y ROI de Inversión",
      healthDesc: "Fitness, Nutrición y Métricas Vitales",
      dailyDesc: "Utilidades de Estilo de Vida y Productividad"
    },
    calculators: {
      bmi: { 
        name: "Calculadora de Índice de Masa Corporal (IMC)", 
        desc: "Evalúe la salud de su peso según altura y masa.", 
        weight: "Peso", 
        height: "Altura",
        advice: {
          under: "Bajo peso: Se sugiere consultar a un profesional médico.",
          normal: "Peso Saludable: Excelente, mantenga su estilo de vida.",
          over: "Sobrepeso: Considere aumentar su actividad física.",
          obese: "Obesidad: Riesgo para la salud, se recomienda guía médica."
        }
      },
      bmr: { name: "Calculadora de Tasa Metabólica Basal (TMB)", desc: "Calcule las calorías quemadas en reposo.", age: "Edad", calculate: "Calcular TMB" },
      water: { name: "Calculadora de Ingesta Diaria de Agua", desc: "Determine sus necesidades óptimas de hidratación.", exercise: "Ejercicio Diario (min)", goal: "Meta de Hidratación" },
      calorie: { name: "Calculadora de TDEE y Calorías", desc: "Análisis personalizado de gasto energético diario.", activity: "Nivel de Actividad" },
      bodyFat: { name: "Estimador de Porcentaje de Grasa Corporal", desc: "Calcule su composición vía Método de la Marina.", waist: "Cintura", neck: "Cuello" },
      idealWeight: { name: "Calculadora de Peso Corporal Ideal", desc: "Estimación de su rango de peso más saludable." },
      heartRate: { name: "Calculadora de Zona de Ritmo Cardíaco", desc: "Zonas de entrenamiento optimizadas por edad." },
      bloodPressure: { name: "Evaluación de Presión Arterial", desc: "Verifique rangos de salud sistólica y diastólica.", systolic: "Sistólica", diastolic: "Diastólica" },
      sleep: { name: "Optimizador de Ciclos de Sueño", desc: "Cronometre sus ciclos para un descanso máximo.", sleepBtn: "Optimizar Horario de Sueño" },
      pregnancy: { name: "Estimador de Fecha de Parto", desc: "Calcule la llegada estimada de su bebé." },
      mortgage: { name: "Calculadora de Pagos de Hipoteca", desc: "Calcule amortizaciones mensuales de préstamos." },
      loan: { name: "Calculadora de Interés de Préstamos", desc: "Analice el pago de deuda e intereses totales." },
      compoundInterest: { name: "Calculadora de Interés Compuesto", desc: "Proyecte retornos de inversión en el tiempo." },
      roi: { name: "Análisis de Retorno de Inversión (ROI)", desc: "Calcule la rentabilidad y el CAGR de activos." },
      currency: { name: "Conversor de Divisas Global", desc: "Conversión de moneda internacional en tiempo real." },
      retirement: { name: "Proyección de Ahorros para el Retiro", desc: "Analice su fondo futuro y contribuciones." },
      tax: { name: "Estimador de Impuestos y Salario Neto", desc: "Analice obligaciones fiscales y salario neto." },
      budget: { name: "Planificador de Presupuesto 50/30/20", desc: "Asignación financiera mensual estratégica." },
      creditCard: { name: "Herramienta de Pago de Tarjeta de Crédito", desc: "Calcule el tiempo para saldar deudas." },
      salary: { name: "Desglose de Salario y Sueldo", desc: "Convierta salario anual a tasas por hora/día." },
      arithmetic: { name: "Calculadora Aritmética Estándar", desc: "Operaciones matemáticas fundamentales." },
      scientific: { name: "Calculadora Científica Avanzada", desc: "Trigonometría, logaritmos y funciones complejas." },
      quadratic: { name: "Solucionador de Ecuaciones Cuadráticas", desc: "Resuelva raíces para ecuaciones ax² + bx + c." },
      prime: { name: "Verificador de Números Primos", desc: "Identifique y verifique números primos." },
      factorial: { name: "Calculadora de Factorial (n!)", desc: "Calcule el producto de enteros descendentes." },
      percentage: { name: "Herramientas de Porcentaje", desc: "Ratios, márgenes y cambios porcentuales." },
      unitConverter: { name: "Conversor Universal de Unidades", desc: "Conversión de longitud, peso y volumen." },
      geometry: { name: "Solucionador de Geometría", desc: "Calcule propiedades de formas 2D y 3D." },
      statistics: { name: "Analizador de Estadísticas Descriptivas", desc: "Análisis de media, mediana y varianza." },
      probability: { name: "Calculadora de Probabilidad", desc: "Análisis de combinaciones y permutaciones." },
      random: { name: "Generador Seguro de Números Aleatorios", desc: "Selección de rango aleatorio seguro.", min: "Mín", max: "Máx", roll: "Generar", msg: "Resultado" },
      tip: { name: "Calculadora de Propinas y Cuentas", desc: "Calcule propinas y divida costos justamente.", bill: "Total Cuenta", people: "Personas" },
      age: { name: "Calculadora de Edad Cronológica", desc: "Edad exacta en años, meses y días." },
      dateDiff: { name: "Contador de Diferencia de Fechas", desc: "Calcule intervalos de tiempo entre fechas." },
      timezone: { name: "Conversor de Zona Horaria Global", desc: "Convierta hora local a zonas internacionales." },
      password: { name: "Generador de Contraseñas Seguras", desc: "Cree credenciales seguras de alta entropía." },
      qr: { name: "Herramienta de Generación de Código QR", desc: "Genere códigos para enlaces y texto." },
      color: { name: "Conversor de Formatos de Color", desc: "Gestión de color HEX, RGB y CMYK." },
      lottery: { name: "Probabilidad de Lotería", desc: "Calcule las probabilidades numéricas de ganar." },
      fuel: { name: "Análisis de Eficiencia de Combustible", desc: "Calcule consumo en L/100km o MPG." },
      recipe: { name: "Escalador de Porciones de Recetas", desc: "Ajuste porciones de ingredientes." },
      travel: { name: "Estimador de Tiempo de Viaje", desc: "Calcule duración según velocidad/distancia." },
      clothing: { name: "Guía de Ropa Según el Clima", desc: "Sugerencias de armario para el clima actual." },
      countdown: { name: "Temporizador de Cuenta Regresiva", desc: "Siga el tiempo restante hasta una fecha." },
      grocery: { name: "Estimador de Presupuesto de Compras", desc: "Planifique costos para su lista de compras." },
      habit: { name: "Análisis de Proyección de Hábitos", desc: "Efectos de hábitos a largo plazo." },
      cooking: { name: "Conversor de Medidas de Cocina", desc: "Unidades estándar de volumen/peso." },
      worldClock: { name: "Reloj Mundial de Ciudades", desc: "Hora actual en los principales centros globales." },
      dogAge: { name: "Conversor de Edad de Perro a Humano", desc: "Calcule equivalente de edad para mascotas." },
      plant: { name: "Programador de Riego de Plantas", desc: "Guía de riego por categoría botánica." }
    }
  },
  zh: {
    common: {
      back: "返回",
      calculate: "计算",
      results: "结果",
      invalidInput: "请输入有效的数值。",
      loading: "正在处理计算...",
      home: "首页",
      reset: "重置",
      copyright: "© 2026 TotalCalc. 版权所有。",
      description: "为您生活的方方面面提供精密计算。",
      langName: "简体中文"
    },
    categories: {
      math: "数学",
      mathTools: "数学工具",
      finance: "金融",
      financeTools: "金融分析",
      health: "健康与健身",
      healthTools: "健康工具",
      daily: "日常公用事业",
      dailyTools: "日常生活工具"
    },
    nav: {
      search: "搜索 50 多种专业计算器...",
      privacy: "隐私政策",
      contact: "联系我们",
      noResults: "未找到相关计算器。"
    },
    calculators: {
      bmi: { name: "身体质量指数 (BMI) 计算器", desc: "根据身高和体重评估健康状况。" },
      bmr: { name: "基础代谢率 (BMR) 计算器", desc: "计算静息状态下消耗的卡路里。" },
      prime: { name: "质数/素数检查器", desc: "识别和验证质数。" },
      tip: { name: "小费及账单分摊计算器", desc: "公平分摊费用并计算小费。" }
      // Other keys would be fully mapped in production
    }
  },
  hi: {
    common: {
      back: "पीछे",
      calculate: "गणना करें",
      results: "परिणाम",
      invalidInput: "कृपया मान्य संख्यात्मक मान दर्ज करें।",
      loading: "गणना की जा रही है...",
      home: "होम",
      reset: "रीसेट",
      copyright: "© 2026 TotalCalc. सर्वाधिकार सुरक्षित।",
      langName: "हिन्दी"
    },
    categories: {
      math: "गणित",
      mathTools: "गणितीय उपकरण",
      finance: "वित्त",
      financeTools: "वित्तीय विश्लेषण",
      health: "स्वास्थ्य",
      daily: "दैनिक उपयोगिताएँ"
    },
    calculators: {
      bmi: { name: "बॉडी मास इंडेक्स (BMI) कैलकुलेटर", desc: "ऊंचाई और वजन के आधार पर स्वास्थ्य का मूल्यांकन करें।" },
      bmr: { name: "बेसल मेटाबोलिक दर (BMR) कैलकुलेटर", desc: "आराम के समय जली हुई कैलोरी की गणना करें।" },
      prime: { name: "अभाज्य संख्या (Prime) परीक्षक", desc: "पहचानें कि संख्या अभाज्य है या नहीं।" },
      tip: { name: "टिप और बिल स्प्लिट कैलकुलेटर", desc: "बिलों को विभाजित करें और टिप की गणना करें।" }
      // Other keys would be fully mapped in production
    }
  }
};
