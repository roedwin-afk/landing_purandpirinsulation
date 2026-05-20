import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import { blogKit } from "astro-blog-kit/integration";

const SITE = process.env.SITE || "https://roedwin-afk.github.io";
const BASE = process.env.BASE || "/landing_purandpirinsulation/";

export default defineConfig({
  site: SITE,
  base: BASE,
  output: "static",
  integrations: [sitemap()
  ],
});

