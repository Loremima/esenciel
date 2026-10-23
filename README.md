# esenciel.net

Site d'EsenCiel, Véronique Carrié : React, Vite, TypeScript et Tailwind, prérendu en HTML statique au build.

## Lancer et construire

```bash
npm install
npm run dev      # développement sur http://localhost:5173
npm run build    # vérifie les types, construit, prérend les 20 pages + 404 et le sitemap dans dist/
npm run lint
```

## Où modifier les contenus

- `src/content/site.ts` : téléphone, e-mail, zone, mentions légales (SIRET, adresse, médiateur), menu.
- `src/content/offres.ts` : conférences, programmes structures et offres particuliers (textes, durées, tarifs, liens Setmore). Chaque page se construit à partir de ces données.
- `public/llms.txt` : résumé du site pour les assistants IA, à mettre à jour si les offres changent.
- Photo : remplacer `public/images/veronique.webp` (800 × 1000) et `veronique-480.webp` (480 × 600).

## Hébergement (Netlify)

- `netlify.toml` : commande de build et dossier publié.
- `public/_redirects` : redirections 301 des anciennes adresses.
- `public/_headers` : en-têtes de sécurité et de cache.
- Formulaire de contact : Netlify Forms (formulaire `contact`). Activer la détection des formulaires dans Netlify (Forms > Enable form detection) et ajouter une notification e-mail vers esenciel.contact@gmail.com.

`vercel.json` reprend les mêmes redirections et en-têtes si le site passe sur Vercel ; le formulaire devra alors passer par un autre service.
