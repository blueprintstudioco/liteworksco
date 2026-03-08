// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://liteworksco.com',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
// force rebuild Sat Mar  7 19:05:02 EST 2026
