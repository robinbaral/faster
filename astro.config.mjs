import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://robinbaral.github.io',
  base: '/faster',
  trailingSlash: 'always',
  // The whole stylesheet is small, so it ships inside each page instead of as a render-blocking request.
  build: { inlineStylesheets: 'always' },
});
