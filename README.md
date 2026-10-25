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
- `src/content/offres.ts` : conférences, programmes structures et offres particuliers (textes, durées, tarifs, liens de réservation sutempo). Chaque page se construit à partir de ces données.
- `public/llms.txt` : résumé du site pour les assistants IA, à mettre à jour si les offres changent.
- Photo : remplacer `public/images/veronique.webp` (800 × 1000) et `veronique-480.webp` (480 × 600).

## Hébergement (Vercel)

- `vercel.json` : build, redirections 301 des anciennes adresses, en-têtes de sécurité et de cache.
- Formulaire de contact : la fonction `api/contact.ts` envoie chaque message par e-mail via Resend. Dans Vercel (Settings > Environment Variables), définir `RESEND_API_KEY`. Le domaine esenciel.net doit être vérifié dans Resend pour l'expéditeur `contact@esenciel.net` ; sinon, définir `CONTACT_FROM` sur une adresse vérifiée. `CONTACT_TO` change le destinataire (par défaut esenciel.contact@gmail.com).
