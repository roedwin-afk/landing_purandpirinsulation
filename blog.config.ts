import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'http://paneldetecho.local',
  postsPerPage: 6,
  defaultLayout: 'grid',
  locale: 'en',

  theme: {
    accent: '#3b82f6',     // Naranja vibrante de acento (--color-accent-orange)
    background: '#f8fafc', // Fondo pizarra muy claro (--color-bg)
    surface: '#ffffff',    // Fondo blanco para las tarjetas del grid (--color-surface)
    text: '#0f172a',       // Slate oscuro para máxima legibilidad (--color-text)
    muted: '#475569',      // Gris intermedio para los extractos de posts (--color-text-light)
    mutedLight: '#94a3b8', // Gris claro para fechas y metadatos (--color-text-muted)
    border: '#e2e8f0',     // Bordes finos de las tarjetas (--color-border)
    black: '#0f172a',      // Tono oscuro base (--color-text)
    white: '#ffffff',
    fontHeading: '"Inter", sans-serif', // Fuente sans global unificada
    fontBody: '"Inter", sans-serif',    // --font-sans
    fontMono: 'monospace',
    fontDisplay: '"Inter", sans-serif',
    containerMax: '1280px', // Mapeado a los 1280px de --container-width
  },

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    en: {
      tagline: 'Our Blog',
      titleLine1: 'Latest',
      titleLine2: 'Articles',
      description: 'Welcome to our blog.',
    },
    es: {
      tagline: 'Nuestro Blog',
      titleLine1: 'Últimos',
      titleLine2: 'Artículos',
      description: 'Bienvenido a nuestro blog.',
    },
  },

  // ── UI labels ────────────────────────────────────────────────
  ui: {
    en: {
      readMoreLabel: 'Read more →',
      btnPrev: 'Previous',
      btnNext: 'Next',
      commentButtonColor: 'var(--bk-accent)',
      commentButtonTextColor: 'var(--bk-white)',
      paginationStyle: 'minimal',
      // Paginación limpia usando el azul primario y el naranja de acento
      paginationBtnBg: '#ffffff',          // Fondo blanco nativo de la superficie
      paginationBtnText: '#2563eb',        // Texto interactivo en azul brillante (--color-primary)
      paginationBtnHoverBg: '#2563eb',     // Hover sólido azul corporativo
      paginationBtnHoverText: '#ffffff',   // Texto blanco en hover
      paginationActiveBg: '#ea580c',       // Botón activo resalta con el naranja de acento
      paginationActiveText: '#ffffff',     // Contraste limpio sobre el naranja
    },
    es: {
      readMoreLabel: 'Leer más →',
      btnPrev: 'Anterior',
      btnNext: 'Siguiente',
    },
  },
});