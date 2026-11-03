import type { APIRoute } from 'astro';
import { locales } from '../i18n/locales';

// Lists every page, with each home page pointing at its other languages so search engines
// can match visitors to the right one.
const updated = '2026-11-03';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const url = (path: string) => new URL(`${base}${path}`, site).href;
  const alternates = [
    ...locales.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${url(l.dir)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${url('')}"/>`,
  ].join('\n');
  const homes = locales.map((l) => `  <url>\n    <loc>${url(l.dir)}</loc>\n    <lastmod>${updated}</lastmod>\n${alternates}\n  </url>`);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${homes.join('\n')}
  <url>
    <loc>${url('privacy/')}</loc>
    <lastmod>2026-11-01</lastmod>
  </url>
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
