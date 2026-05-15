import type { TranslationKeys } from "./en";

export const es: TranslationKeys = {
  nav: {
    technicalSpecs: "Especificaciones Técnicas",
    comparison: "PUR vs PIR vs Lana de Roca",
    fireSafety: "Seguridad contra Incendios",
    applications: "Aplicaciones",
    getQuote: "Solicitar Cotización Técnica",
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
};