import type { APIRoute } from 'astro';

// Points crawlers at the sitemap on whichever host this build is for, and keeps them off a
// copy of the site that's built with NOINDEX.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(`${import.meta.env.BASE_URL}sitemap.xml`, site).href;
  const rule = process.env.NOINDEX === '1' ? 'Disallow: /' : 'Allow: /';
  return new Response(`User-agent: *\n${rule}\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
