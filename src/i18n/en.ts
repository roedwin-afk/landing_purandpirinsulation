export const en = {
  nav: {
    comparison: "PUR vs PIR vs Rockwool",
    fireSafety: "Fire Safety",
    uvalue: "U-Value Calculator",
    getQuote: "Get Technical Quote",
    blog: "Blog",
    faq: "FAQ",
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
  pages: {
    fireSafety: {
      meta: {
        title: "Fire Safety Standards for Insulation Panels | PUR & PIR",
        description: "Complete guide to Euroclass, FM Global and EN 13501-1 fire safety standards for PUR, PIR and Mineral Wool insulation panels.",
      },
      hero: {
        eyebrow: "Fire Safety",
        title: "Fire Safety",
        titleAccent: "Standards & Certifications",
        description: "A technical guide to Euroclass classifications, FM Global approvals and EN 13501-1 compliance for industrial insulation panels.",
      },
      euroclass: {
        title: "Euroclass Classification System",
        description: "The EN 13501-1 standard defines how building materials react to fire. It evaluates flame spread, smoke production and burning droplets.",
        tableHeaders: {
          class: "Class",
          material: "Typical Material",
          smoke: "Smoke",
          droplets: "Droplets",
        },
        rows: [
          { class: "A1", material: "Mineral Wool, Concrete", smoke: "—", droplets: "—" },
          { class: "A2", material: "Gypsum, Rock Wool", smoke: "s1", droplets: "d0" },
          { class: "B", material: "PIR (Polyisocyanurate)", smoke: "s1", droplets: "d0" },
          { class: "C", material: "PUR (Enhanced Polyurethane)", smoke: "s2", droplets: "d0" },
          { class: "D / E", material: "PUR (standard)", smoke: "s3", droplets: "d2" },
        ],
        legend: [
          { key: "s1", value: "Very limited smoke" },
          { key: "s2", value: "Limited smoke" },
          { key: "s3", value: "No smoke classification" },
          { key: "d0", value: "No burning droplets" },
          { key: "d2", value: "Burning droplets present" },
        ],
      },
      carbonization: {
        eyebrow: "Why PIR is Superior?",
        title: "Protective Carbonization",
        description: "When PIR is exposed to heat, its unique chemical structure forms a rigid char layer that acts as a protective barrier, slowing flame spread and maintaining the structural integrity of the panel.",
        benefits: [
          "Delays flame spread up to 60 minutes",
          "Very low smoke emission (s1)",
          "No burning droplets (d0)",
          "Maintains structural integrity",
        ],
        pirCaption: "Protective char layer",
        purCaption: "Melting and structural collapse",
      },
      fm: {
        title: "FM Global Approval",
        description: "FM 4880 is the most stringent international standard for insulated panels. It evaluates fire propagation, structural integrity and insurance compliance.",
        badge: "FM Approved",
        tests: [
          "Fire propagation test (FMRC 4880)",
          "Smoke and toxicity evaluation",
          "Sprinkler system requirements",
          "Industrial insurance compliance",
        ],
      },
      cta: {
        title: "Need Fire Safety Documentation?",
        description: "Request fire certificates, test reports and FM approval documentation for your project.",
        btn: "Request Fire Certificates",
      },
    },
    uvalue: {
      meta: {
        title: "Thermal Conductivity & U-Value Calculator | PUR & PIR Insulation",
        description: "Understand thermal conductivity (λ) and calculate U-Values for PUR, PIR and Mineral Wool insulation panels for industrial projects.",
      },
      hero: {
        eyebrow: "Thermal Performance",
        title: "Thermal Conductivity &",
        titleAccent: "U-Value Calculator",
        description: "Understanding λ values and U-Value calculations is essential for specifying the right insulation thickness for your climate and energy requirements.",
      },
      lambdaSection: {
        title: "λ Values by Material",
        pir: { label: "Best thermal performance" },
        pur: { label: "High thermal performance" },
        mw: { label: "Fire safety priority" },
      },
      formula: {
        title: "How U-Value is Calculated",
        description: "The U-Value (thermal transmittance) measures how much heat passes through a panel per square meter per degree of temperature difference.",
        simplified: "Simplified formula for single-core panel",
        vars: {
          u: "Thermal transmittance (W/m²·K)",
          lambda: "Thermal conductivity of material (W/m·K)",
          d: "Panel thickness (meters)",
        },
      },
      materials: [
        { id: "pir", label: "PIR (Polyisocyanurate)", lambda: "0.021" },
        { id: "pur", label: "PUR (Polyurethane)", lambda: "0.022" },
        { id: "mw", label: "Mineral Wool / Rockwool", lambda: "0.037" },
      ],
      ratings: {
        excellent: "Excellent ✓",
        good: "Good",
        standard: "Standard",
        poor: "Poor ✗",
      },
      calculator: {
        title: "U-Value Calculator",
        thickness: "Panel Thickness (mm)",
        material: "Core Material",
        calculate: "Calculate U-Value",
        result: "U-Value Result",
        unit: "W/m²·K",
      },
      cta: {
        title: "Need a Custom U-Value Analysis?",
        description: "Our engineering team provides detailed heat transfer calculations for your specific project dimensions and climate zone.",
        btn: "Request U-Value Analysis",
      },

    },
  },
  faq: {
      meta: {
        title: "FAQ: PUR vs PIR vs Mineral Wool Insulation Panels | Technical Answers",
        description: "Answers to common technical questions about PUR, PIR and Mineral Wool sandwich panel cores: thermal conductivity, fire ratings, thickness, cost and Mexican insulation standards.",
      },
      hero: {
        eyebrow: "FAQ",
        title: "Frequently Asked",
        titleAccent: "Questions",
        description: "Technical answers to the most common questions about PUR, PIR, and Mineral Wool insulation cores for industrial sandwich panels — thermal performance, fire safety, thickness, and Mexican regulatory compliance.",
      },
      items: [
        {
          question: "What is the difference between PUR and PIR insulation panels?",
          answer: "PIR panels use a chemically modified polyisocyanurate core with a cross-linked structure, giving them a thermal conductivity of 0.020-0.022 W/m·K and a Euroclass B-s1,d0 fire rating, while standard PUR panels have a thermal conductivity of about 0.022 W/m·K and a lower Class C/D fire rating. PIR costs more but requires less thickness to reach the same insulation level and performs significantly better under fire exposure thanks to its protective char layer.",
        },
        {
          question: "Which core is better for cold storage, PUR or PIR?",
          answer: "PUR panels are the standard choice for chilled rooms and general cold storage because of their lower cost and thermal conductivity around 0.022 W/m·K, while PIR panels are recommended for freezer rooms and cold-chain facilities with stricter fire-safety requirements thanks to their B-s1,d0 rating. MEQUIPO's technical team (ventas@mequipo.com, +52 55 9990 3546) can review your target temperature and insurance requirements to recommend the right core.",
        },
        {
          question: "What fire rating do PIR sandwich panels have?",
          answer: "PIR sandwich panels typically achieve a Euroclass B-s1,d0 classification under EN 13501-1, meaning very limited smoke production and no burning droplets. Panels meeting FM 4880 requirements are also available for insurance-driven projects, offering a significantly better fire response than standard PUR's Class C/D rating.",
        },
        {
          question: "Is mineral wool more fire-resistant than PIR panels?",
          answer: "Yes — mineral wool (rock wool) cores are classified A1 non-combustible under EN 13501-1, the highest fire rating possible, compared to PIR's B-s1,d0. Mineral wool is required for chemical plants, hospitals, and other facilities where insurers or local codes mandate a fully non-combustible core, while PIR is sufficient for most industrial roofing and cold-storage applications.",
        },
        {
          question: "What panel thickness do I need for industrial roofing or cold storage?",
          answer: "Panel thickness depends on the core material and target U-value: PIR panels typically run 40-100 mm for industrial roofing and 100-150+ mm for cold storage, while mineral wool needs roughly 85-95 mm to match the insulation of a 50 mm PIR panel due to its higher thermal conductivity (0.035-0.040 W/m·K). Use our U-Value Calculator to size the exact thickness for your climate zone and target transmittance.",
        },
        {
          question: "How much more expensive is PIR than PUR insulation?",
          answer: "PIR panels generally cost more than PUR panels because of the higher isocyanate content and added catalyst used in manufacturing, though the exact premium varies by supplier, panel thickness, and steel facing. Since pricing is project-specific, request a technical quote from MEQUIPO (ventas@mequipo.com) with your dimensions and application to get an accurate comparison.",
        },
        {
          question: "What Mexican regulations apply to insulated sandwich panels?",
          answer: "In Mexico, NOM-018-ENER-2011 sets the test methods and characteristics for thermal insulation materials, including thermal conductivity, density, and moisture absorption, while structural requirements for panel-clad buildings fall under local codes such as the RCDF and its complementary technical standards (NTC-2017) in Mexico City. Fire classification is generally referenced against EN 13501-1 (Euroclass) or FM 4880, since Mexico does not yet have a dedicated fire-reaction standard specific to insulated sandwich panels — confirm current requirements with your local building authority.",
        },
        {
          question: "What's the acoustic performance difference between PIR and mineral wool panels?",
          answer: "Mineral wool panels provide substantially better sound insulation, absorbing airborne noise at around 30-35 dB (Rw) thanks to their fibrous structure, compared to roughly 24-30 dB for PIR panels. This makes mineral wool the preferred core for generator rooms, compressor enclosures, and industrial buildings near noise-sensitive areas, while PIR remains the standard for thermal-priority applications like cold storage.",
        },
      ],
      cta: {
        title: "Still Have Technical Questions?",
        description: "Our engineering team can review your project's climate zone, fire-safety requirements, and target U-Value to recommend the right insulation core.",
        btn: "Request Technical Consultation",
      },
    },
} as const;

export type DeepString<T> = {
  [K in keyof T]: T[K] extends Array<infer U>
  ? U extends object
  ? Array<DeepString<U>>
  : Array<string>
  : T[K] extends object
  ? DeepString<T[K]>
  : string;
};
export type TranslationKeys = DeepString<typeof en>;