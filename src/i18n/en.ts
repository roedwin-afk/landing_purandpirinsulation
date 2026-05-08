export const en = {
    nav: {
        technical: 'Technical Specs',
        comparative: 'PUR vs PIR vs Rockwool',
        fireSafety: 'Fire Safety',
        applications: 'Applications',
        getQuote: 'Get Technical Quote'
    },

    hero: {
        badge: 'Advanced Thermal Engineering',

        title: 'High-Performance Thermal Insulation for',

        highlight: 'Engineering Excellence',

        description:
            'Detailed technical specifications and comparative analysis of Polyurethane (PUR), Polyisocyanurate (PIR), and Mineral Wool cores for industrial sandwich panels.',

        primaryButton: 'Download Technical Catalog',

        secondaryButton:
            'View Standards Compliance'
    }
} as const;

type DeepString<T> = {
    [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string;
};

export type TranslationKeys = DeepString<typeof en>;