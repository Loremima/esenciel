import { conferences, particuliers, programmes } from './content/offres';

// Liste des pages prérendues et publiées dans le sitemap.
export const STATIC_ROUTES: string[] = [
  '/',
  '/structures',
  '/structures/dossier',
  ...programmes.map((o) => o.path),
  ...conferences.map((o) => o.path),
  '/particuliers',
  ...particuliers.map((o) => o.path),
  '/qui-suis-je',
  '/contact',
  '/mentions-legales',
  '/confidentialite',
  '/cgv',
];

// Pages qui s'ouvrent sur une vidéo : l'en-tête y est transparent tant qu'on n'a pas défilé.
export const VIDEO_HERO_ROUTES = new Set<string>([
  '/',
  '/structures',
  ...programmes.map((o) => o.path),
  ...conferences.map((o) => o.path),
  '/particuliers',
  '/qui-suis-je',
]);
