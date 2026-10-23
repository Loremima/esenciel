// Les vidéos d'ambiance et leur image fixe (affichée avant lecture, ou si le visiteur limite les animations).

export type Media = { video: string; poster: string };

export const MEDIA = {
  ciel: { video: '/media/hero-plein-ecran.mp4', poster: '/images/hero-plein-ecran.webp' },
  herbes: { video: '/media/hero-herbes.mp4', poster: '/images/hero-herbes.webp' },
  sable: { video: '/media/pas-sable.mp4', poster: '/images/video-pas-sable.webp' },
  surf: { video: '/media/surf.mp4', poster: '/images/video-surf.webp' },
  soleil: { video: '/media/lever-soleil.mp4', poster: '/images/video-lever-soleil.webp' },
  bougie: { video: '/media/bougie.mp4', poster: '/images/video-bougie.webp' },
} satisfies Record<string, Media>;

/** La vidéo associée à chaque public. */
export const AUDIENCE_MEDIA: Record<string, { label: string; media: Media }> = {
  seniors: { label: 'Seniors', media: MEDIA.herbes },
  aidants: { label: 'Aidants', media: MEDIA.sable },
  professionnels: { label: 'Soignants', media: MEDIA.surf },
};
