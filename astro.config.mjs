import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import { blogKit } from "astro-blog-kit/integration";

const SITE = process.env.SITE || "https://roedwin-afk.github.io";
const BASE = process.env.BASE || "/landing_purandpirinsulation/";

export default defineConfig({
  site: SITE,
  base: BASE,
  // output: "static",
  integrations: [sitemap(),
  blogKit({
    postsPerPage: 6,
    defaultLayout: "list",
    theme: {
      accent: "#2563eb",        // tu --color-primary
      background: "#f8fafc",    // tu --color-bg
      surface: "#ffffff",       // tu --color-surface
      text: "#0f172a",          // tu --color-text
      muted: "#475569",         // tu --color-text-light
      mutedLight: "#64748b",
      border: "#e2e8f0",        // tu --color-border
      black: "#0f172a",
      white: "#ffffff",
      fontHeading: "Inter, sans-serif",
      fontBody: "Inter, sans-serif",
      fontMono: "monospace",
      fontDisplay: "Inter, sans-serif",
      containerMax: "1280px",   // tu --container-width
    },
  }),
  ],
});

