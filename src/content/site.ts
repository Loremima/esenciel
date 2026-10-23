// Coordonnées et informations générales : c'est le seul endroit à modifier
// quand un numéro, une adresse ou une mention légale change.

export const SITE = {
  name: 'EsenCiel',
  url: 'https://esenciel.net',
  owner: 'Véronique Carrié',
  tagline: 'Piloter son cerveau face aux changements de la vie',
  specialty: "Spécialiste de l'avancée en âge : seniors, aidants et professionnels qui les accompagnent",
  zone: 'Hérault et Aveyron',
  phone: '06 25 13 72 50',
  phoneHref: 'tel:+33625137250',
  email: 'esenciel.contact@gmail.com',
  setmore: 'https://esenciel.setmore.com',
  linkedin: 'https://fr.linkedin.com/in/v%C3%A9ronique-carri%C3%A9',
  plaquette: '/docs/plaquette-esenciel-structures.pdf',
  ogImage: '/og-image.jpg',
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
  siret: '',
  address: '',
  vat: 'TVA non applicable, article 293 B du Code général des impôts',
  mediator: '',
  host: {
    name: 'Netlify, Inc.',
    address: '512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis',
    url: 'https://www.netlify.com',
  },
  updated: '23 octobre 2026',
};

export const NAV = [
  { to: '/structures', label: 'Structures & financeurs' },
  { to: '/conferences', label: 'Conférences' },
  { to: '/particuliers', label: 'Particuliers' },
  { to: '/qui-suis-je', label: 'Qui suis-je' },
];
