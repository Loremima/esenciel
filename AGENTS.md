# Consignes pour les assistants de code (Codex, Claude…)

Ce dépôt est le site esenciel.net de Véronique Carrié (EsenCiel). Véronique le modifie elle-même avec Codex : elle n'est pas développeuse, donc explique chaque changement simplement, en français, et tutoie-la si elle te tutoie.

## Règles de contenu (à respecter absolument)

- Véronique n'est **ni psychologue ni neuropsychologue**. Elle a un M1 de psychologie clinique, spécialisé en neuropsychologie du vieillissement, et elle est instructrice certifiée MBSR, MBCT et MBCAS. N'écris jamais « psychologue » ni « neuropsychologue » pour la décrire, nulle part (pages, métadonnées, `public/llms.txt`).
- Slogan : « Prendre soin de son cerveau, à chaque âge de la vie ».
- Pas de faux témoignages, pas de chiffres ou de résultats inventés.
- Le site reste sobre : peu de texte, mobile d'abord, palette nuit `#121A2B` / ivoire, police Fraunces pour les titres. Ne pas revenir au duo blanc/beige.
- La prise de rendez-vous passe par sutempo (`SITE.booking` dans `src/content/site.ts`). Ne pas remettre Setmore.

## Où modifier

- Textes, offres, tarifs, durées : `src/content/offres.ts` et `src/content/structures.ts`.
- Coordonnées, mentions légales, menu : `src/content/site.ts`.
- Photos : `src/content/photos.ts` et `public/images/`.
- Si une offre change, mettre aussi à jour `public/llms.txt`.

## Avant de proposer un changement

1. `npm install` puis `npm run build` doit réussir (il vérifie les types et prérend toutes les pages).
2. `npm run lint` ne doit pas signaler d'erreur.
3. Véronique pousse directement sur `main` (choix validé par Lorenzo). Attention : `main` part en ligne tout de suite sur Vercel, donc ne pousse qu'un changement qui construit sans erreur, et décris-le clairement dans le message de commit. Pour un gros changement, propose plutôt une branche et une pull request, qui donne une adresse d'aperçu Vercel.

## À ne jamais faire

- Ne jamais écrire de clé, de mot de passe ou de jeton dans le code ou dans un fichier. La clé Resend du formulaire de contact vit uniquement dans Vercel (`RESEND_API_KEY`).
- Ne pas toucher à `vercel.json` (redirections, en-têtes de sécurité) ni à `api/contact.ts` sans que Véronique ait demandé exactement ça.
- Ne pas supprimer de page : les anciennes adresses sont redirigées dans `vercel.json`.
