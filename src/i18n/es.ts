import type { TranslationKeys } from "./en";

export const es: TranslationKeys = {
  nav: {
    comparison: "PUR vs PIR vs Lana de Roca",
    fireSafety: "Seguridad contra Incendios",
    uvalue: "Calculadora de Valor U",
    getQuote: "Solicitar Cotización Técnica",
    blog: "Blog",
    faq: "FAQ",
  },
  hero: {
    title: "Aislamiento Térmico de Alto Rendimiento para",
    titleAccent: "Excelencia en Ingeniería",
    description:
      "Especificaciones técnicas detalladas y análisis comparativo de núcleos de Poliuretano (PUR), Poliisocianurato (PIR) y Lana Mineral para paneles sándwich industriales.",
    downloadCatalog: "Descargar Catálogo Técnico",
    viewStandards: "Ver Cumplimiento de Normas",
  },
  comparison: {
    sectionTitle: "Análisis Comparativo de Materiales de Núcleo",
    sectionDesc:
      "Comprensión de las diferencias químicas y estructurales entre núcleos de aislamiento para optimizar los requisitos de su proyecto.",
    pur: {
      badge: "PUR",
      title: "Poliuretano",
      description:
        "Optimizado para máxima eficiencia térmica en entornos de temperatura estándar. Alta resistencia de adhesión a las pieles del panel.",
      features: [
        "Alto Valor R (Resistencia Térmica)",
        "Estructura Ligera",
        "Resistente a la Humedad",
      ],
    },
    pir: {
      badge: "PIR",
      recommended: "Recomendado por Seguridad",
      title: "Poliisocianurato",
      description:
        "Estabilidad química mejorada. Reacción al fuego superior en comparación con el PUR estándar gracias a su estructura reticulada.",
      features: [
        "Resistencia al Fuego Mejorada (B-s1, d0)",
        "Estabilidad Dimensional",
        "Baja Emisión de Humo",
      ],
    },
    mw: {
      badge: "MW",
      title: "Lana Mineral",
      description:
        "Núcleo no combustible. Preferido para zonas de alto riesgo de incendio y requisitos de aislamiento acústico.",
      features: [
        "Clase A1 No Combustible",
        "Amortiguación Acústica Superior",
        "Altos Límites de Temperatura",
      ],
    },
  },
  table: {
    sectionTitle: "Tabla de Conductividad Térmica y Rendimiento",
    disclaimer:
      "* Los valores son indicativos y pueden variar según el espesor específico del panel y las certificaciones del fabricante.",
    headers: {
      property: "Propiedad",
      pur: "PUR (Poliuretano)",
      pir: "PIR (Poliisocianurato)",
      mw: "Lana de Roca / Lana Mineral",
    },
    rows: {
      conductivity: {
        label: "Conductividad Térmica (λ)",
        pur: "~ 0.022 W/m·K",
        pir: "~ 0.020 - 0.022 W/m·K",
        mw: "~ 0.035 - 0.040 W/m·K",
      },
      fire: {
        label: "Reacción al Fuego (EN 13501-1)",
        pur: "Clase C / D",
        pir: "Clase B-s1, d0 / B-s2, d0",
        mw: "Clase A1 / A2 (No Combustible)",
      },
      density: {
        label: "Rango de Densidad",
        pur: "35 - 40 kg/m³",
        pir: "38 - 42 kg/m³",
        mw: "100 - 120 kg/m³",
      },
      acoustic: {
        label: "Rendimiento Acústico",
        pur: "Mínimo",
        pir: "Estándar",
        mw: "Alto (Rw ~ 30-35 dB)",
      },
      applications: {
        label: "Aplicaciones Estándar",
        pur: "Cámaras Frigoríficas, Almacenes",
        pir: "Edificios Industriales en Altura",
        mw: "Plantas Químicas, Hospitales",
      },
    },
  },
  fireSafety: {
    sectionTitle: "Certificación Avanzada de Seguridad contra Incendios",
    description:
      "Nuestro equipo técnico prioriza los núcleos de PIR (Poliisocianurato) para la mayoría de aplicaciones industriales. Su estructura química única forma una capa carbonizada protectora cuando se expone al calor, evitando la propagación de llamas y manteniendo la integridad estructural.",
    certifications: {
      euroclass: {
        title: "Cumplimiento Euroclass B-s1, d0",
        description:
          "La más alta calificación de seguridad para materiales combustibles con producción de humo muy limitada.",
      },
      fm: {
        title: "Aprobado por FM Global",
        description:
          "Núcleos disponibles que cumplen los estrictos estándares de seguros FM 4880.",
      },
    },
    diagramCaption: "Diagrama de Resistencia Estructural al Fuego",
    diagramNote:
      "Diagrama que muestra la carbonización del PIR vs la fusión rápida del PUR estándar",
  },
  quote: {
    sectionTitle: "¿Necesita una Consulta Técnica?",
    description:
      "Nuestro departamento de ingeniería está listo para proporcionar cálculos de transferencia de calor, dossieres de seguridad contra incendios y análisis de valor U para su proyecto específico.",
    projectPlaceholder: "Tipo de Proyecto (ej. Almacén Frigorífico)",
    emailPlaceholder: "Correo Profesional",
    submit: "Solicitar Ficha Técnica (TDS)",
  },
  footer: {
    description:
      "Recurso técnico especializado en materiales de aislamiento para paneles sándwich. Dedicado a ayudar a arquitectos e ingenieros a especificar el núcleo térmico adecuado para la eficiencia industrial y la seguridad.",
    coreMaterials: {
      title: "Materiales de Núcleo",
      links: {
        pir: "Paneles Sándwich PIR",
        pur: "Soluciones PUR",
        rockwool: "Aislamiento de Lana de Roca",
        coldRoom: "Paneles para Cámaras Frías",
      },
    },
    technical: {
      title: "Documentación Técnica",
      links: {
        uvalue: "Calculadora de Valor U",
        fire: "Certificados de Incendio",
        installation: "Guías de Instalación",
        bim: "Objetos BIM",
      },
    },
    copyright: "purandpirinsulation.com - Estándares de Ingeniería Global.",
    privacy: "Política de Privacidad",
    compliance: "Cumplimiento",
    contact: "Contacto",
  },
  meta: {
    title: "Aislamiento PUR & PIR | Paneles Sándwich Profesionales",
    description:
      "Especificaciones técnicas y análisis comparativo de núcleos de aislamiento PUR, PIR y Lana Mineral para paneles sándwich industriales.",
  },
  "404": {
    title: "Página No Encontrada",
    description: "La página que busca no existe.",
    back: "Volver al Inicio",
  },
  pages: {
    fireSafety: {
      meta: {
        title: "Normativas de Seguridad contra Incendios | PUR & PIR Aislamiento",
        description: "Guía completa de clasificaciones Euroclass, aprobaciones FM Global y normativa EN 13501-1 para paneles de aislamiento PUR, PIR y Lana de Roca.",
      },
      hero: {
        eyebrow: "Seguridad contra Incendios",
        title: "Normativas y",
        titleAccent: "Certificaciones de Incendio",
        description: "Guía técnica sobre clasificaciones Euroclass, aprobaciones FM Global y cumplimiento de la norma EN 13501-1 para paneles de aislamiento industrial.",
      },
      euroclass: {
        title: "Sistema de Clasificación Euroclass",
        description: "La norma EN 13501-1 define cómo reaccionan los materiales de construcción ante el fuego. Evalúa la propagación de llamas, producción de humo y gotas ardientes.",
        tableHeaders: {
          class: "Clase",
          material: "Material Típico",
          smoke: "Humo",
          droplets: "Gotas",
        },
        rows: [
          { class: "A1", material: "Lana Mineral, Hormigón", smoke: "—", droplets: "—" },
          { class: "A2", material: "Yeso, Lana de Roca", smoke: "s1", droplets: "d0" },
          { class: "B", material: "PIR (Poliisocianurato)", smoke: "s1", droplets: "d0" },
          { class: "C", material: "PUR (Poliuretano mejorado)", smoke: "s2", droplets: "d0" },
          { class: "D / E", material: "PUR (estándar)", smoke: "s3", droplets: "d2" },
        ],
        legend: [
          { key: "s1", value: "Humo muy limitado" },
          { key: "s2", value: "Humo limitado" },
          { key: "s3", value: "Sin clasificación de humo" },
          { key: "d0", value: "Sin gotas ardientes" },
          { key: "d2", value: "Gotas ardientes presentes" },
        ],
      },
      carbonization: {
        eyebrow: "¿Por qué PIR es superior?",
        title: "Carbonización Protectora",
        description: "Cuando el PIR se expone al calor, su estructura química única forma una capa de carbón rígida que actúa como barrera protectora, retardando la propagación de llamas y manteniendo la integridad estructural del panel.",
        benefits: [
          "Retrasa la propagación de llamas hasta 60 minutos",
          "Emisión de humo muy baja (s1)",
          "Sin gotas ardientes (d0)",
          "Mantiene la integridad estructural",
        ],
        pirCaption: "Capa de carbón protectora",
        purCaption: "Fusión y colapso estructural",
      },
      fm: {
        title: "Aprobación FM Global",
        description: "FM 4880 es el estándar internacional más exigente para paneles aislantes. Evalúa la propagación del fuego, integridad estructural y cumplimiento de seguros.",
        badge: "Aprobado FM",
        tests: [
          "Prueba de propagación de incendio (FMRC 4880)",
          "Evaluación de humo y toxicidad",
          "Requisitos de sistemas de rociadores",
          "Cumplimiento de seguros industriales",
        ],
      },
      cta: {
        title: "¿Necesita Documentación de Seguridad contra Incendios?",
        description: "Solicite certificados de incendio, informes de prueba y documentación de aprobación FM para su proyecto.",
        btn: "Solicitar Certificados de Incendio",
      },
    },
    uvalue: {
      meta: {
        title: "Conductividad Térmica y Calculadora de Valor U | PUR & PIR",
        description: "Comprenda los valores λ y calcule el Valor U para paneles de aislamiento PUR, PIR y Lana Mineral en proyectos industriales.",
      },
      hero: {
        eyebrow: "Rendimiento Térmico",
        title: "Conductividad Térmica y",
        titleAccent: "Calculadora de Valor U",
        description: "Entender los valores λ y los cálculos de Valor U es esencial para especificar el espesor de aislamiento correcto para su clima y requisitos energéticos.",
      },
      lambdaSection: {
        title: "Valores λ por Material",
        pir: { label: "Mejor rendimiento térmico" },
        pur: { label: "Alto rendimiento térmico" },
        mw: { label: "Prioridad en seguridad contra incendios" },
      },
      formula: {
        title: "Cómo se Calcula el Valor U",
        description: "El Valor U (transmitancia térmica) mide cuánto calor pasa a través de un panel por metro cuadrado por grado de diferencia de temperatura.",
        simplified: "Fórmula simplificada para panel de núcleo único",
        vars: {
          u: "Transmitancia térmica (W/m²·K)",
          lambda: "Conductividad térmica del material (W/m·K)",
          d: "Espesor del panel (metros)",
        },
      },
      materials: [
        { id: "pir", label: "PIR (Poliisocianurato)", lambda: "0.021" },
        { id: "pur", label: "PUR (Poliuretano)", lambda: "0.022" },
        { id: "mw", label: "Lana Mineral / Rockwool", lambda: "0.037" },
      ],
      ratings: {
        excellent: "Excelente ✓",
        good: "Bueno",
        standard: "Estándar",
        poor: "Deficiente ✗",
      },
      calculator: {
        title: "Calculadora de Valor U",
        thickness: "Espesor del Panel (mm)",
        material: "Material del Núcleo",
        calculate: "Calcular Valor U",
        result: "Resultado del Valor U",
        unit: "W/m²·K",
      },
      cta: {
        title: "¿Necesita un Análisis de Valor U Personalizado?",
        description: "Nuestro equipo de ingeniería proporciona cálculos detallados de transferencia de calor para las dimensiones específicas de su proyecto y zona climática.",
        btn: "Solicitar Análisis de Valor U",
      },
    },
  },
  faq: {
    meta: {
      title: "FAQ: Paneles PUR vs PIR vs Lana Mineral | Respuestas Técnicas",
      description:
        "Respuestas a las preguntas técnicas más comunes sobre núcleos de paneles sándwich PUR, PIR y Lana Mineral: conductividad térmica, resistencia al fuego, espesores, costos y normativa mexicana de aislamiento.",
    },
    hero: {
      eyebrow: "Preguntas Frecuentes",
      title: "Preguntas",
      titleAccent: "Frecuentes",
      description:
        "Respuestas técnicas a las preguntas más comunes sobre núcleos de aislamiento PUR, PIR y Lana Mineral para paneles sándwich industriales — desempeño térmico, seguridad contra incendios, espesores y cumplimiento normativo en México.",
    },
    items: [
      {
        question: "¿Cuál es la diferencia entre paneles de aislamiento PUR y PIR?",
        answer:
          "Los paneles PIR utilizan un núcleo de poliisocianurato modificado químicamente con estructura reticulada, lo que les da una conductividad térmica de 0.020-0.022 W/m·K y una clasificación de fuego Euroclase B-s1,d0, mientras que los paneles PUR estándar tienen una conductividad térmica de aproximadamente 0.022 W/m·K y una clasificación de fuego menor, Clase C/D. El PIR cuesta más pero requiere menor espesor para alcanzar el mismo nivel de aislamiento y se comporta significativamente mejor ante exposición al fuego gracias a su capa protectora carbonizada.",
      },
      {
        question: "¿Qué núcleo es mejor para cuartos fríos, PUR o PIR?",
        answer:
          "Los paneles PUR son la opción estándar para cuartos fríos y almacenamiento refrigerado en general por su menor costo y conductividad térmica cercana a 0.022 W/m·K, mientras que los paneles PIR se recomiendan para cuartos de congelación e instalaciones de cadena de frío con requisitos más estrictos de seguridad contra incendios gracias a su clasificación B-s1,d0. El equipo técnico de MEQUIPO (ventas@mequipo.com, +52 55 9990 3546) puede revisar la temperatura objetivo y los requisitos de aseguradora para recomendar el núcleo adecuado.",
      },
      {
        question: "¿Qué clasificación contra incendio tienen los paneles sándwich PIR?",
        answer:
          "Los paneles sándwich PIR típicamente alcanzan una clasificación Euroclase B-s1,d0 bajo la norma EN 13501-1, lo que significa producción de humo muy limitada y sin goteo de partículas en llamas. También existen paneles que cumplen con los requisitos FM 4880 para proyectos que dependen de aseguradoras, ofreciendo una respuesta al fuego significativamente mejor que la clasificación estándar Clase C/D del PUR.",
      },
      {
        question: "¿Es la lana mineral más resistente al fuego que los paneles PIR?",
        answer:
          "Sí — los núcleos de lana mineral (lana de roca) están clasificados A1 no combustible bajo la norma EN 13501-1, la clasificación de fuego más alta posible, en comparación con el B-s1,d0 del PIR. La lana mineral es requerida en plantas químicas, hospitales y otras instalaciones donde las aseguradoras o los códigos locales exigen un núcleo completamente no combustible, mientras que el PIR es suficiente para la mayoría de aplicaciones industriales de techado y cuartos fríos.",
      },
      {
        question: "¿Qué espesor de panel necesito para techado industrial o cuartos fríos?",
        answer:
          "El espesor del panel depende del material del núcleo y del valor U objetivo: los paneles PIR suelen ir de 40-100 mm para techado industrial y 100-150+ mm para cuartos fríos, mientras que la lana mineral necesita aproximadamente 85-95 mm para igualar el aislamiento de un panel PIR de 50 mm debido a su mayor conductividad térmica (0.035-0.040 W/m·K). Utilice nuestra Calculadora de Valor U para dimensionar el espesor exacto según su zona climática y transmitancia objetivo.",
      },
      {
        question: "¿Qué tan más costoso es el PIR comparado con el PUR?",
        answer:
          "Los paneles PIR generalmente cuestan más que los paneles PUR debido al mayor contenido de isocianato y al catalizador adicional utilizado en su fabricación, aunque la diferencia exacta varía según el proveedor, el espesor del panel y el recubrimiento de acero. Como el precio es específico de cada proyecto, solicite una cotización técnica a MEQUIPO (ventas@mequipo.com) con sus dimensiones y aplicación para obtener una comparación precisa.",
      },
      {
        question: "¿Qué normativa mexicana aplica a los paneles sándwich aislados?",
        answer:
          "En México, la NOM-018-ENER-2011 establece los métodos de prueba y características para materiales de aislamiento térmico, incluyendo conductividad térmica, densidad y absorción de humedad, mientras que los requisitos estructurales para edificaciones con recubrimiento de panel caen bajo códigos locales como el RCDF y sus normas técnicas complementarias (NTC-2017) en la Ciudad de México. La clasificación contra incendio generalmente se referencia contra la EN 13501-1 (Euroclase) o FM 4880, ya que México aún no cuenta con una norma de reacción al fuego dedicada específicamente a paneles sándwich aislados — confirme los requisitos vigentes con la autoridad de construcción local.",
      },
      {
        question:
          "¿Cuál es la diferencia de desempeño acústico entre paneles PIR y lana mineral?",
        answer:
          "Los paneles de lana mineral ofrecen un aislamiento acústico sustancialmente mejor, absorbiendo ruido aéreo alrededor de 30-35 dB (Rw) gracias a su estructura fibrosa, en comparación con aproximadamente 24-30 dB para los paneles PIR. Esto hace de la lana mineral el núcleo preferido para cuartos de generadores, encierros de compresores y edificios industriales cerca de zonas sensibles al ruido, mientras que el PIR sigue siendo el estándar para aplicaciones donde prioriza el desempeño térmico, como cuartos fríos.",
      },
    ],
    cta: {
      title: "¿Aún tiene preguntas técnicas?",
      description:
        "Nuestro equipo de ingeniería puede revisar la zona climática de su proyecto, los requisitos de seguridad contra incendios y el valor U objetivo para recomendar el núcleo de aislamiento adecuado.",
      btn: "Solicitar Consulta Técnica",
    },
  },
};