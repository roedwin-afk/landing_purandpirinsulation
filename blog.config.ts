import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'http://paneldetecho.local',
  postsPerPage: 6,
  defaultLayout: 'magazine',
  locale: 'en',
  theme: {
    accent: '#2563eb',
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#0f172a',
    muted: '#94a3b8',
    mutedLight: '#475569',
    border: '#e2e8f0',
    black: '#0f172a',
    white: '#ffffff',
    fontHeading: 'Inter, sans-serif',
    fontBody: 'Inter, sans-serif',
    fontMono: 'monospace',
    fontDisplay: 'Inter, sans-serif',
    containerMax: '1280px',
  },
});