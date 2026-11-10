import { defineConfig } from 'astro/config';

// The site is built once per host. With nothing set it builds for GitHub Pages, the address
// App Review has; the Cloudflare build sets SITE_URL and BASE_PATH (see build:cloudflare).
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://robinbaral.github.io',
  base: process.env.BASE_PATH ?? '/faster',
  trailingSlash: 'always',
  // The whole stylesheet is small, so it ships inside each page instead of as a render-blocking request.
  build: { inlineStylesheets: 'always' },
});
