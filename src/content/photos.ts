// PHOTOS TEMPORAIRES (banque d'images Pexels, licence libre, sans attribution obligatoire).
// À remplacer par les vraies photos des ateliers de Véronique dès qu'elle en a :
// déposer le fichier dans public/images/ et remplacer l'adresse ci-dessous par '/images/nom-du-fichier.webp'.

const pexels = (id: number, w = 1200) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export type Photo = { src: string; alt: string };

export const PHOTOS = {
  // Porte « structures » : un groupe de retraités en séance, assis, avec une animatrice.
  structureGroupe: { src: pexels(11674390), alt: 'Un groupe de retraités assis en cercle pendant un atelier' },
  // Porte « particuliers » : un couple de retraités qui pratique au calme, dehors.
  particulierCouple: { src: pexels(8939952), alt: 'Un couple de retraités qui pratique la méditation dans un parc' },
  // Situation « garder un cerveau en forme ».
  cerveauForme: { src: pexels(5992856), alt: 'Trois femmes retraitées en séance de pleine conscience' },
  // Situation « j'accompagne un proche ».
  aidant: { src: pexels(3768131), alt: 'Une femme et sa mère âgée se tiennent la main en souriant' },
  // Situation « le stress déborde ».
  stress: { src: pexels(5992866), alt: 'Une femme retraitée, les yeux fermés, respire calmement' },
  // Ateliers gratuits près de chez vous.
  atelierGratuit: { src: pexels(36883131), alt: 'Des femmes retraitées qui partagent un moment convivial en atelier' },
} satisfies Record<string, Photo>;
