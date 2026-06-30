import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fredvasconcelos.github.io',

  integrations: [mdx()],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});