import type { APIRoute } from 'astro';
import { join } from 'node:path';
import sharp from 'sharp';

// The app icon as a favicon that follows the browser's light or dark appearance: both versions,
// rounded like the app icon, with the dark one shown under `prefers-color-scheme: dark`.
const png = async (file: string) =>
  (await sharp(join(process.cwd(), 'src/assets', file)).resize(64, 64).png().toBuffer()).toString('base64');

export const GET: APIRoute = async () => {
  const [light, dark] = await Promise.all([png('icon.png'), png('icon-dark.png')]);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<style>.dark{display:none}@media (prefers-color-scheme:dark){.light{display:none}.dark{display:inline}}</style>
<clipPath id="r"><rect width="64" height="64" rx="14"/></clipPath>
<g clip-path="url(#r)">
<image class="light" width="64" height="64" href="data:image/png;base64,${light}"/>
<image class="dark" width="64" height="64" href="data:image/png;base64,${dark}"/>
</g>
</svg>
`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};
