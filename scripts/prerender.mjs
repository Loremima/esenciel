// Prérendu : chaque page est écrite en HTML complet dans dist/, pour que
// Google et les assistants IA (qui n'exécutent pas le JavaScript) lisent le
// vrai contenu. Génère aussi le sitemap et la page 404.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssr = join(root, 'dist-ssr');
const SITE_URL = 'https://esenciel.net';

const { render, STATIC_ROUTES } = await import(pathToFileURL(join(ssr, 'entry-server.js')).href);
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const page = (url) => {
  const { html, head } = render(url);
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
};

for (const url of STATIC_ROUTES) {
  const file = url === '/' ? join(dist, 'index.html') : join(dist, url, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page(url));
}
writeFileSync(join(dist, '404.html'), page('/page-introuvable'));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_ROUTES.map((u) => `  <url><loc>${SITE_URL}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);

rmSync(ssr, { recursive: true, force: true });
console.log(`Prérendu : ${STATIC_ROUTES.length} pages + 404, sitemap écrit.`);
