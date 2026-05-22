import type { TranslationKeys } from "./en";

export const es: TranslationKeys = {
  nav: {
    comparison: "PUR vs PIR vs Lana de Roca",
    fireSafety: "Seguridad contra Incendios",
    uvalue: "Calculadora de Valor U",
    getQuote: "Solicitar Cotización Técnica",
    blog: "Blog",
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
};