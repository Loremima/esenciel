// Coordonnées et informations générales : c'est le seul endroit à modifier
// quand un numéro, une adresse ou une mention légale change.

export const SITE = {
  name: 'EsenCiel',
  url: 'https://esenciel.net',
  owner: 'Véronique Carrié',
  tagline: 'Prendre soin de son cerveau, à chaque âge de la vie',
  specialty: "Spécialiste de l'avancée en âge : seniors, aidants et professionnels qui les accompagnent",
  zone: 'Hérault et Aveyron',
  phone: '06 25 13 72 50',
  phoneHref: 'tel:+33625137250',
  email: 'esenciel.contact@gmail.com',
  // Agenda de réservation en ligne : la seule adresse à changer pour passer sur un autre outil.
  booking: 'https://esenciel.sutempo.com',
  // Le module de réservation sutempo, intégré au site (offre Pro). Clé publique : lecture du catalogue et réservation seulement.
  sutempo: {
    origin: 'https://sutempo.com',
    tenantId: '4f7bfab4-3f73-436e-979c-6728916e6620',
    widgetKey: 'pk_6cf7314ddd537ecb_IZ3GN_zYqXLp2BOoiq6Mv1OYJkpgHTQSewsXhzCQbDQ',
  },
  linkedin: 'https://fr.linkedin.com/in/v%C3%A9ronique-carri%C3%A9',
  plaquette: '/docs/plaquette-esenciel-structures.pdf',
  ogImage: '/og-image.jpg',
};

// Le premier rendez-vous, proposé dans le bloc « Prendre rendez-vous » : une structure
// va droit à l'échange découverte sutempo, un particulier choisit sa prestation.
export const FIRST_MEETING = {
  structure: {
    label: 'Structure',
    info: 'Échange découverte · 20 min · gratuit',
    text: 'Votre public, vos dates, votre financement : on regarde ensemble ce qui est possible.',
    cta: 'Choisir mon créneau',
    href: `${SITE.booking}/?service=b65a6aed-6cbb-5e65-aa85-e9a419134383`,
  },
  particulier: {
    label: 'Particulier',
    info: 'Séance individuelle ou cycle en groupe',
    text: 'Réservez directement votre séance individuelle, ou demandez les prochaines dates d’un cycle.',
    cta: 'Choisir mon créneau',
    href: `${SITE.booking}#book`,
  },
};

// Formulation validée : jamais « psychologue » ni « neuropsychologue » (titres protégés).
export const CREDENTIALS = {
  short: 'Formée en psychologie clinique (Master 1), spécialisée en neuropsychologie du vieillissement',
  certifications: 'Instructrice certifiée MBSR, MBCT et MBCAS',
  health: 'Formatrice en éducation à la santé',
  references: 'Intervenante pour le programme Neo Silver',
};

// Mentions légales. Les champs vides s'affichent « à compléter » et doivent
// être remplis avant la mise en ligne.
export const LEGAL = {
  status: 'Entrepreneuse individuelle (micro-entreprise)',
  siret: '817 627 003 00020',
  address: '1 allée Georges Brassens, 34290 Abeilhan',
  vat: 'TVA non applicable, article 293 B du Code général des impôts',
  // Médiateur de la consommation : en pause (Lorenzo, 23/10). Obligatoire dès qu'on vend à des particuliers.
  mediator: '',
  host: {
    name: 'Vercel Inc.',
    address: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
    url: 'https://vercel.com',
  },
  updated: '23 octobre 2026',
};

export const NAV = [
  { to: '/structures', label: 'Structures' },
  { to: '/particuliers', label: 'Particuliers' },
  { to: '/qui-suis-je', label: 'Qui suis-je' },
];
