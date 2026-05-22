export const en = {
  nav: {
    technicalSpecs: "Technical Specs",
    comparison: "PUR vs PIR vs Rockwool",
    fireSafety: "Fire Safety",
    applications: "Applications",
    getQuote: "Get Technical Quote",
    blog: "Blog",
  },
  hero: {
    title: "High-Performance Thermal Insulation for",
    titleAccent: "Engineering Excellence",
    description:
      "Detailed technical specifications and comparative analysis of Polyurethane (PUR), Polyisocyanurate (PIR), and Mineral Wool cores for industrial sandwich panels.",
    downloadCatalog: "Download Technical Catalog",
    viewStandards: "View Standards Compliance",
  },
  comparison: {
    sectionTitle: "Core Material Comparative Analysis",
    sectionDesc:
      "Understanding the chemical and structural differences between insulation cores to optimize your project requirements.",
    pur: {
      badge: "PUR",
      title: "Polyurethane",
      description:
        "Optimized for maximum thermal efficiency in standard temperature environments. High adhesion strength to panel skins.",
      features: [
        "High R-Value (Thermal Resistance)",
        "Lightweight Structure",
        "Moisture Resistant",
      ],
    },
    pir: {
      badge: "PIR",
      recommended: "Recommended for Safety",
      title: "Polyisocyanurate",
      description:
        "Enhanced chemical stability. Superior fire reaction compared to standard PUR due to its cross-linked structure.",
      features: [
        "Improved Fire Resistance (B-s1, d0)",
        "Dimensional Stability",
        "Low Smoke Emission",
      ],
    },
    mw: {
      badge: "MW",
      title: "Mineral Wool",
      description:
        "Non-combustible core. Preferred for high-risk fire zones and acoustic insulation requirements.",
      features: [
        "Class A1 Non-combustible",
        "Superior Acoustic Damping",
        "High Temperature Limits",
      ],
    },
  },
  table: {
    sectionTitle: "Thermal Conductivity & Performance Table",
    disclaimer:
      "* Values are indicative and may vary based on specific panel thickness and manufacturer certifications.",
    headers: {
      property: "Property",
      pur: "PUR (Polyurethane)",
      pir: "PIR (Polyisocyanurate)",
      mw: "Rockwool / Mineral Wool",
    },
    rows: {
      conductivity: {
        label: "Thermal Conductivity (λ)",
        pur: "~ 0.022 W/m·K",
        pir: "~ 0.020 - 0.022 W/m·K",
        mw: "~ 0.035 - 0.040 W/m·K",
      },
      fire: {
        label: "Reaction to Fire (EN 13501-1)",
        pur: "Class C / D",
        pir: "Class B-s1, d0 / B-s2, d0",
        mw: "Class A1 / A2 (Non-combustible)",
      },
      density: {
        label: "Density Range",
        pur: "35 - 40 kg/m³",
        pir: "38 - 42 kg/m³",
        mw: "100 - 120 kg/m³",
      },
      acoustic: {
        label: "Acoustic Performance",
        pur: "Minimal",
        pir: "Standard",
        mw: "High (Rw ~ 30-35 dB)",
      },
      applications: {
        label: "Standard Applications",
        pur: "Cold Rooms, Warehouses",
        pir: "Industrial High-Rise",
        mw: "Chemical Plants, Hospitals",
      },
    },
  },
  fireSafety: {
    sectionTitle: "Advanced Fire Safety Certification",
    description:
      "Our technical team prioritizes PIR (Polyisocyanurate) cores for most industrial applications. Its unique chemical structure forms a protective charred layer when exposed to heat, preventing flame spread and maintaining structural integrity.",
    certifications: {
      euroclass: {
        title: "Euroclass B-s1, d0 Compliance",
        description:
          "Highest safety rating for combustible materials with very limited smoke production.",
      },
      fm: {
        title: "FM Global Approved",
        description:
          "Available cores meeting stringent FM 4880 insurance standards.",
      },
    },
    diagramCaption: "Structural Fire Resistance Diagram",
    diagramNote:
      "Diagram showing carbonization of PIR vs rapid melting of standard PUR",
  },
  quote: {
    sectionTitle: "Need a Technical Consultation?",
    description:
      "Our engineering department is ready to provide heat transfer calculations, fire safety dossiers, and U-Value analysis for your specific project.",
    projectPlaceholder: "Project Type (e.g. Cold Storage)",
    emailPlaceholder: "Professional Email",
    submit: "Request Technical Data Sheet (TDS)",
  },
  footer: {
    description:
      "Specialized technical resource for sandwich panel insulation materials. Dedicated to assisting architects and engineers in specifying the right thermal core for industrial efficiency and safety.",
    coreMaterials: {
      title: "Core Materials",
      links: {
        pir: "PIR Sandwich Panels",
        pur: "PUR Solutions",
        rockwool: "Rockwool Insulation",
        coldRoom: "Cold Room Panels",
      },
    },
    technical: {
      title: "Technical Documentation",
      links: {
        uvalue: "U-Value Calculator",
        fire: "Fire Certificates",
        installation: "Installation Guides",
        bim: "BIM Objects",
      },
    },
    copyright: "purandpirinsulation.com - Global Engineering Standards.",
    privacy: "Privacy Policy",
    compliance: "Compliance",
    contact: "Contact",
  },
  meta: {
    title: "PUR & PIR Insulation | Professional Sandwich Panels",
    description:
      "Technical specifications and comparative analysis of PUR, PIR and Mineral Wool insulation cores for industrial sandwich panels.",
  },
  "404": {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
    back: "Back to Home",
  },
} as const;

export type DeepString<T> = {
  [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string;
};

export type TranslationKeys = DeepString<typeof en>;