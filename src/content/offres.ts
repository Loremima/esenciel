// Toutes les offres du site. Les pages lisent ces données : un tarif ou une
// durée ne se modifie qu'ici.

import { SITE } from './site';

export type Fact = { label: string; value: string };
export type Step = { title: string; text?: string };

export type Accent = 'gold' | 'clay' | 'sage';

export type OffreStructure = {
  slug: string;
  path: string;
  kind: 'conference' | 'programme';
  eyebrow: string;
  title: string;
  /** Une phrase de promesse, reprise dans les cartes et les métadonnées. */
  promise: string;
  /** Ce que dit le public, en une phrase (programmes seulement). */
  quote?: string;
  audience?: string;
  accent: Accent;
  facts: Fact[];
  objectifs: string[];
  deroule: Step[];
  declinaisons?: Fact[];
  note?: string;
  seo: { title: string; description: string };
};

const FINANCEMENTS_CONF = 'Budget propre de la structure, CFPPA (actions collectives de prévention), CARSAT, MSA, contrat local de santé, budget QVT';

export const conferences: OffreStructure[] = [
  {
    slug: 'quand-mon-cerveau-n-en-fait-qu-a-sa-tete',
    path: '/conferences/quand-mon-cerveau-n-en-fait-qu-a-sa-tete',
    kind: 'conference',
    eyebrow: 'Conférence interactive',
    title: '« Quand mon cerveau n’en fait qu’à sa tête »',
    promise: 'Comprendre le pilote automatique de notre cerveau : pourquoi il nous rend service, et quand il nous joue des tours.',
    accent: 'gold',
    facts: [
      { label: 'Public', value: 'Seniors, aidants ou professionnels, avec une version adaptée à chaque public. Grand public d’une commune ou d’une structure.' },
      { label: 'Format', value: '1 h 30 à 2 h, de 15 à 50 personnes, une seule séance, dans une salle avec vidéoprojecteur' },
      { label: 'Compétences psychosociales', value: 'Cognitives : conscience de soi, compréhension de son fonctionnement' },
      { label: 'Évaluation', value: 'Nombre de participants, questionnaire de satisfaction, intérêt pour un cycle' },
      { label: 'Financements possibles', value: FINANCEMENTS_CONF },
      { label: 'Tarif', value: 'Sur devis, frais de déplacement compris' },
    ],
    objectifs: [
      'Comprendre ce qu’est un automatisme et à quoi il sert : le cerveau économise son énergie.',
      'Vivre en direct une expérience qui montre l’automatisme à l’œuvre : lire des noms de couleurs écrits dans une autre couleur (l’effet Stroop).',
      'Repérer les situations où le pilote automatique décide à notre place : fatigue, stress, nouveauté.',
      'Donner envie d’aller plus loin, sans dramatiser.',
    ],
    deroule: [
      { title: 'Accueil et questions de départ', text: '10 min' },
      { title: 'Le cerveau, une machine à économiser l’énergie', text: '25 min' },
      { title: 'L’expérience des couleurs, à vivre ensemble', text: '20 min' },
      { title: 'Quand l’automatisme nous piège : âge, fatigue, stress', text: '20 min' },
      { title: 'Échanges et pistes concrètes pour le quotidien', text: '15 min' },
    ],
    declinaisons: [
      { label: 'Seniors', value: 'Le cerveau qui avance en âge : ce qui change, ce qui reste, ce qu’on peut entraîner.' },
      { label: 'Aidants', value: 'La charge mentale : pourquoi on s’épuise, et comment le repérer à temps.' },
      { label: 'Soignants', value: 'Fatigue et automatismes au travail : quand le pilote automatique prend le relais.' },
    ],
    seo: {
      title: 'Conférence « Quand mon cerveau n’en fait qu’à sa tête » | Véronique Carrié',
      description: 'Conférence interactive sur le pilote automatique du cerveau, avec l’effet Stroop, pour seniors, aidants et soignants. Hérault et Aveyron. Sur devis.',
    },
  },
  {
    slug: 'qui-pilote-ma-vie',
    path: '/conferences/qui-pilote-ma-vie',
    kind: 'conference',
    eyebrow: 'Conférence interactive',
    title: '« Qui pilote ma vie : ma conscience ou mes automatismes ? »',
    promise: 'Passer de la compréhension à l’action : repérer ses automatismes face au stress et apprendre à choisir sa réponse.',
    accent: 'gold',
    facts: [
      { label: 'Public', value: 'Seniors, aidants ou professionnels. Idéale après la première conférence, ou seule.' },
      { label: 'Format', value: '1 h 30 à 2 h, de 15 à 50 personnes, une seule séance, dans une salle avec vidéoprojecteur' },
      { label: 'Compétences psychosociales', value: 'Cognitives : maîtrise de soi, prise de décision. Émotionnelles : identifier ses émotions, réguler son stress.' },
      { label: 'Évaluation', value: 'Participants, satisfaction, et auto-évaluation avant et après : « je sais repérer quand je fonctionne en pilote automatique »' },
      { label: 'Financements possibles', value: FINANCEMENTS_CONF },
      { label: 'Tarif', value: 'Sur devis, tarif dégressif si les deux conférences sont commandées ensemble' },
    ],
    objectifs: [
      'Distinguer les automatismes de pensée, d’émotion et de comportement.',
      'Comprendre la mécanique du stress et son effet sur l’attention et la mémoire.',
      'Expérimenter des outils simples pour remarquer le pilote automatique et reprendre la main.',
      'Repartir avec une pratique concrète à tester chez soi.',
    ],
    deroule: [
      { title: 'Accueil et retour sur les automatismes', text: '10 min' },
      { title: 'Pensées, émotions, réactions : comment le stress s’emballe', text: '25 min' },
      { title: 'Exercices courts d’entraînement de l’attention', text: '25 min' },
      { title: 'Choisir sa réponse plutôt que réagir : mises en situation', text: '20 min' },
      { title: 'Échanges et pratique à emporter', text: '10 min' },
    ],
    declinaisons: [
      { label: 'Seniors', value: 'Garder la main sur ses choix quand les habitudes s’installent.' },
      { label: 'Aidants', value: 'Sortir de l’hypervigilance et de la culpabilité automatique.' },
      { label: 'Soignants', value: 'Répondre plutôt que réagir dans l’urgence du soin.' },
    ],
    seo: {
      title: 'Conférence « Qui pilote ma vie ? » sur le stress et les automatismes | Véronique Carrié',
      description: 'Conférence interactive pour repérer ses automatismes face au stress et choisir sa réponse. Pour seniors, aidants et professionnels, Hérault et Aveyron.',
    },
  },
];

export const programmes: OffreStructure[] = [
  {
    slug: 'seniors',
    path: '/structures/seniors',
    kind: 'programme',
    eyebrow: 'Programme seniors',
    title: 'Bien vivre son avancée en âge',
    promise: 'Un cycle pour entraîner son attention, apaiser le stress et les ruminations, et accueillir les changements de l’âge.',
    quote: '« Mon cerveau change, que puis-je faire ? »',
    audience: 'Seniors',
    accent: 'gold',
    facts: [
      { label: 'Public', value: 'Personnes de 60 ans et plus, autonomes, vivant à domicile ou en résidence autonomie' },
      { label: 'Format', value: 'Format MBCAS : 15 séances de 2 h sur 8 mois. Format CFPPA : 12 semaines à 2 séances par semaine, puis 3 séances de suivi. De 5 à 12 personnes, carnet de pratique remis à chacun.' },
      { label: 'Compétences psychosociales', value: 'Cognitives : conscience de soi, maîtrise de soi. Émotionnelles : réguler ses émotions et son stress. Sociales : relations, lien social.' },
      { label: 'Évaluation', value: 'Stress perçu (PSS-10), bien-être (WEMWBS court), assiduité, satisfaction, verbatims' },
      { label: 'Financements possibles', value: 'CFPPA (santé mentale et isolement), CARSAT et MSA (bien vieillir), caisses de retraite complémentaire, contrat local de santé' },
      { label: 'Tarif', value: 'Sur devis, selon le nombre de séances' },
    ],
    objectifs: [
      'Comprendre le vieillissement cérébral normal et dédramatiser les petits oublis.',
      'Réduire le stress perçu et les ruminations.',
      'Entraîner l’attention et la capacité à sortir du pilote automatique.',
      'Renforcer le lien social grâce au groupe.',
    ],
    deroule: [
      { title: 'Séance 1', text: 'Comprendre son cerveau qui avance en âge, et questionnaire de départ' },
      { title: 'Séances 2 à 6', text: 'Attention, corps, pensées automatiques, émotions' },
      { title: 'Séances 7 à 12', text: 'Changements, pertes, relations, se faire du bien' },
      { title: 'Séances 13 à 15', text: 'Consolider ses pratiques, bilan et questionnaire de fin' },
    ],
    note: 'Méthode : programme MBCAS (Mindfulness-Based Conscious Aging Skills), conçu pour les seniors à partir des programmes évalués MBSR et MBCT.',
    seo: {
      title: 'Atelier prévention avancée en âge pour seniors, CCAS et résidences | Véronique Carrié',
      description: 'Cycle de prévention pour les seniors : attention, stress, lien social. Format CFPPA possible, évaluation PSS-10 et WEMWBS. Hérault et Aveyron.',
    },
  },
  {
    slug: 'aidants',
    path: '/structures/aidants',
    kind: 'programme',
    eyebrow: 'Programme aidants',
    title: 'Aider sans s’épuiser',
    promise: 'Un cycle court pour les proches aidants : repérer la surcharge, souffler et retrouver de l’espace pour soi.',
    quote: '« Je m’épuise à aider. »',
    audience: 'Aidants',
    accent: 'clay',
    facts: [
      { label: 'Public', value: 'Proches aidants (conjoints, enfants) d’une personne âgée, malade ou en situation de handicap' },
      { label: 'Format', value: '6 à 8 séances de 2 h, de 5 à 12 personnes. Une solution de répit pour la personne aidée est à prévoir par la structure.' },
      { label: 'Compétences psychosociales', value: 'Émotionnelles : identifier ses émotions, réguler son stress. Cognitives : conscience de soi. Sociales : demander de l’aide, s’affirmer.' },
      { label: 'Évaluation', value: 'Stress perçu (PSS-10), bien-être (WEMWBS court), assiduité, satisfaction' },
      { label: 'Financements possibles', value: 'CFPPA (soutien psychosocial collectif des aidants), CARSAT, Agirc-Arrco, plateformes d’accompagnement et de répit, contrat local de santé' },
      { label: 'Tarif', value: 'Sur devis, selon le nombre de séances' },
    ],
    objectifs: [
      'Comprendre comment la charge mentale et le stress épuisent le cerveau.',
      'Repérer ses signaux d’alerte et ses automatismes : culpabilité, hypervigilance.',
      'S’entraîner à des pratiques courtes, faisables dans un quotidien chargé.',
      'Rompre l’isolement grâce au groupe.',
    ],
    deroule: [
      { title: 'Le cerveau de l’aidant' },
      { title: 'Le stress et la charge mentale' },
      { title: 'Les émotions difficiles' },
      { title: 'Les pensées automatiques' },
      { title: 'Prendre soin de soi en 5 minutes' },
      { title: 'Demander de l’aide, poser ses limites' },
    ],
    note: 'Les thèmes sont ajustés avec chaque structure selon son public et le nombre de séances retenu.',
    seo: {
      title: 'Atelier soutien aux aidants, prévention de l’épuisement | Véronique Carrié',
      description: 'Cycle collectif pour les proches aidants : charge mentale, stress, répit. Pour plateformes de répit, CCAS et associations de l’Hérault et de l’Aveyron.',
    },
  },
  {
    slug: 'professionnels',
    path: '/structures/professionnels',
    kind: 'programme',
    eyebrow: 'Programme professionnels',
    title: 'Prendre soin de soi quand on prend soin des autres',
    promise: 'Un cycle ou une journée pour les soignants et les professionnels de l’accompagnement : comprendre le stress au travail et prévenir l’épuisement.',
    quote: '« Comment je tiens ? »',
    audience: 'Soignants et professionnels',
    accent: 'sage',
    facts: [
      { label: 'Public', value: 'Équipes d’EHPAD, de SAAD, de résidences autonomie : aides-soignants, auxiliaires de vie, animateurs, cadres' },
      { label: 'Format', value: 'Cycle de 6 séances d’1 h 30 sur le temps de travail, ou journée en intra (1 jour ou 2 demi-journées). De 6 à 12 professionnels, dans vos locaux.' },
      { label: 'Compétences psychosociales', value: 'Émotionnelles : réguler son stress. Cognitives : maîtrise de soi. Sociales : empathie, communication.' },
      { label: 'Évaluation', value: 'Stress perçu (PSS-10), bien-être (WEMWBS court), satisfaction, mise en pratique à 1 mois' },
      { label: 'Financements possibles', value: 'Budget QVT de l’employeur, ARS (qualité de vie et des conditions de travail), contrat local de santé' },
      { label: 'Tarif', value: 'Sur devis, à la séance ou à la journée' },
    ],
    objectifs: [
      'Comprendre la mécanique du stress et de la fatigue professionnelle.',
      'Repérer ses automatismes en situation de soin : urgence, sur-adaptation.',
      'S’approprier des pratiques courtes de récupération et d’attention, utilisables pendant le service.',
      'Améliorer la qualité de la relation avec les personnes accompagnées.',
    ],
    deroule: [
      { title: 'Cerveau et stress' },
      { title: 'Automatismes au travail' },
      { title: 'Émotions dans le soin' },
      { title: 'Pratiques de récupération' },
      { title: 'Relation à l’autre' },
      { title: 'Plan personnel' },
    ],
    note: 'S’inscrit dans la démarche de qualité de vie au travail et la prévention des risques psychosociaux.',
    seo: {
      title: 'QVT des soignants en EHPAD et SAAD, prévention de l’épuisement | Véronique Carrié',
      description: 'Cycle ou journée en intra pour les équipes soignantes : stress, automatismes, récupération. Démarche QVT, Hérault et Aveyron.',
    },
  },
];

export type OffreParticulier = {
  slug: string;
  path: string;
  category: 'cycle' | 'individuel' | 'atelier';
  title: string;
  method?: string;
  short: string;
  definition: string;
  pourQui: string;
  deroule: Step[];
  facts: Fact[];
  price: string;
  booking: string;
  bookingLabel: string;
  followUp?: { label: string; href: string };
  info?: { label: string; href: string };
  image: { src: string; alt: string };
  note?: string;
  seo: { title: string; description: string };
};

const S = `${SITE.booking}/services/`;

export const particuliers: OffreParticulier[] = [
  {
    slug: 'gestion-du-stress',
    path: '/particuliers/gestion-du-stress',
    category: 'cycle',
    title: 'Gestion du stress par la pleine conscience',
    method: 'Inspiré du MBSR',
    short: 'Huit séances pour mieux faire face aux situations stressantes et sortir du pilote automatique.',
    definition: 'Un cycle en groupe, inspiré du programme MBSR (Mindfulness-Based Stress Reduction) développé par Jon Kabat-Zinn. On y apprend, séance après séance, à reconnaître les signes du stress et à y répondre de façon plus ajustée.',
    pourQui: 'Toute personne qui se sent dépassée par le stress du quotidien, au travail ou dans sa vie personnelle, et qui veut des outils concrets.',
    deroule: [
      { title: 'Exploration', text: 'Découvrir le pilote automatique et se reconnecter aux sensations du corps.' },
      { title: 'Accueil', text: 'Rester présent face aux expériences agréables comme désagréables.' },
      { title: 'Nouvelle relation aux pensées', text: 'Prendre du recul avec les pensées et les émotions difficiles.' },
      { title: 'Intégration', text: 'Faire de la pratique une ressource durable au quotidien.' },
    ],
    facts: [
      { label: 'Durée', value: '8 séances de 2 h 30' },
      { label: 'Format', value: 'Groupe de 5 à 10 personnes' },
      { label: 'Lieu', value: 'En présentiel' },
    ],
    price: '330 € le cycle',
    booking: S + '75422cbc-2646-42db-9eee-97e4628f71e8',
    bookingLabel: 'Me pré-inscrire',
    info: { label: 'Réunion d’information', href: S + 'c3da0ac5-1530-4576-8ad5-2e43d65c30bc' },
    image: { src: '/images/vague.webp', alt: 'Une vague maîtrisée par une surfeuse' },
    seo: {
      title: 'Cycle gestion du stress par la pleine conscience (MBSR) | Véronique Carrié',
      description: 'Cycle de 8 séances inspiré du MBSR pour mieux gérer le stress, en groupe de 5 à 10 personnes. 330 €. Avec Véronique Carrié, instructrice certifiée.',
    },
  },
  {
    slug: 'prevention-rechute-depressive',
    path: '/particuliers/prevention-rechute-depressive',
    category: 'cycle',
    title: 'Prévention de la rechute dépressive',
    method: 'Programme MBCT',
    short: 'Huit séances pour changer sa relation aux pensées et prévenir la rechute.',
    definition: 'Un cycle en groupe fondé sur le programme MBCT (Mindfulness-Based Cognitive Therapy), qui associe pratiques de pleine conscience et apports de la psychologie cognitive. Son efficacité pour réduire le risque de rechute dépressive a été évaluée par de nombreuses études.',
    pourQui: 'Les personnes qui ont déjà traversé un ou plusieurs épisodes dépressifs ou anxieux et qui sont aujourd’hui stabilisées. Un entretien préalable permet de vérifier que le cycle est adapté.',
    deroule: [
      { title: 'Reconnaître', text: 'Prendre conscience du mode pilote automatique.' },
      { title: 'Observer', text: 'Repérer les schémas de pensées négatives et les jugements automatiques.' },
      { title: 'Prendre du recul', text: 'Considérer les pensées comme des événements mentaux, pas comme des faits.' },
      { title: 'Prendre soin de soi', text: 'Élaborer son plan personnel de prévention.' },
    ],
    facts: [
      { label: 'Durée', value: '8 séances de 2 h' },
      { label: 'Format', value: 'Groupe de 5 à 10 personnes, après un entretien préalable' },
      { label: 'Lieu', value: 'En présentiel ou à distance' },
    ],
    price: '330 € le cycle',
    booking: S + '9eefb15d-57de-4f51-91cc-b37949858c23',
    bookingLabel: 'Me pré-inscrire',
    info: { label: 'Réunion d’information', href: S + 'c3da0ac5-1530-4576-8ad5-2e43d65c30bc' },
    image: { src: '/images/lever-soleil.webp', alt: 'Lever de soleil sur une étendue d’eau calme' },
    note: 'Ce cycle est une démarche de prévention. Il ne remplace pas un suivi médical : il se fait en dehors des périodes de crise et en accord avec votre médecin si vous êtes suivi.',
    seo: {
      title: 'Cycle MBCT de prévention de la rechute dépressive | Véronique Carrié',
      description: 'Cycle MBCT de 8 séances en groupe pour prévenir la rechute dépressive, après un entretien préalable. 330 €. Avec une instructrice MBCT certifiée.',
    },
  },
  {
    slug: 'bien-vivre-son-avancee-en-age',
    path: '/particuliers/bien-vivre-son-avancee-en-age',
    category: 'cycle',
    title: 'Bien vivre son avancée en âge',
    method: 'Programme MBCAS',
    short: 'Quinze séances sur huit mois pour accueillir les changements de l’âge avec plus de sérénité.',
    definition: 'Un cycle en groupe fondé sur le programme MBCAS (Mindfulness-Based Conscious Aging Skills), conçu pour les seniors. Il aborde les enjeux psychologiques, émotionnels et relationnels de l’avancée en âge, dans un cadre de prévention et de qualité de vie.',
    pourQui: 'Les personnes de 60 ans et plus qui veulent garder un cerveau actif, apaiser leurs inquiétudes et partager ce chemin avec d’autres.',
    deroule: [
      { title: 'Comprendre', text: 'Son cerveau qui avance en âge : ce qui change, ce qui reste.' },
      { title: 'S’entraîner', text: 'Attention, corps, pensées automatiques, émotions.' },
      { title: 'Traverser', text: 'Changements, pertes, relations, se faire du bien.' },
      { title: 'Consolider', text: 'Ancrer ses pratiques pour la suite.' },
    ],
    facts: [
      { label: 'Durée', value: '15 séances sur 8 mois : 8 séances de 2 h et 7 séances d’1 h 30' },
      { label: 'Format', value: 'Groupe de 5 à 10 personnes' },
      { label: 'Lieu', value: 'En présentiel' },
    ],
    price: '420 € le cycle',
    booking: S + '7c7d1387-91a3-4127-947d-4632b229d9bc',
    bookingLabel: 'Me pré-inscrire',
    info: { label: 'Réunion d’information', href: S + 'c3da0ac5-1530-4576-8ad5-2e43d65c30bc' },
    image: { src: '/images/arbre.webp', alt: 'Un arbre aux racines profondes' },
    seo: {
      title: 'Cycle MBCAS « Bien vivre son avancée en âge » pour seniors | Véronique Carrié',
      description: 'Cycle MBCAS de 15 séances sur 8 mois pour les seniors : attention, émotions, changements de l’âge. 420 €. Hérault et Aveyron.',
    },
  },
  {
    slug: 'sante-et-vitalite',
    path: '/particuliers/sante-et-vitalite',
    category: 'individuel',
    title: 'Santé et vitalité',
    method: 'Accompagnement individuel',
    short: 'Devenir acteur de sa santé et installer des habitudes qui durent.',
    definition: 'Un accompagnement individuel en éducation à la santé. On fait le point sur vos habitudes de vie, vos freins et vos ressources, puis on construit ensemble un plan d’action réaliste.',
    pourQui: 'Les personnes qui veulent changer une habitude (sommeil, activité, alimentation, rythme de vie) et ont besoin d’un cadre pour tenir dans la durée.',
    deroule: [
      { title: 'Bilan', text: 'Prendre conscience de vos habitudes de vie et de ce qui compte pour vous.' },
      { title: 'Plan', text: 'Établir un plan d’action aligné sur vos objectifs.' },
      { title: 'Mise en œuvre', text: 'Ajuster au fil des séances, à votre rythme.' },
      { title: 'Autonomie', text: 'Maintenir vos nouvelles habitudes par vous-même.' },
    ],
    facts: [
      { label: 'Durée', value: '1 h 30 la première séance, puis 1 h' },
      { label: 'Format', value: 'Individuel' },
      { label: 'Lieu', value: 'En présentiel ou à distance' },
    ],
    price: '90 € la première séance, puis 60 €',
    booking: S + '8d6ee6ea-5080-498a-a702-ee207cff6a5d',
    bookingLabel: 'Réserver la première séance',
    followUp: { label: 'Réserver une séance de suivi', href: S + '39493de5-ca53-4fa8-92ef-39965c82c7bf' },
    image: { src: '/images/coucher-soleil.webp', alt: 'Coucher de soleil sur les collines' },
    seo: {
      title: 'Accompagnement individuel santé et vitalité | Véronique Carrié',
      description: 'Accompagnement individuel en éducation à la santé pour changer ses habitudes durablement. 90 € la première séance, puis 60 €. Présentiel ou visio.',
    },
  },
  {
    slug: 'pleine-conscience',
    path: '/particuliers/pleine-conscience',
    category: 'individuel',
    title: 'Pleine conscience et présence attentive',
    method: 'Accompagnement individuel',
    short: 'Ralentir, apprendre les pratiques de base et construire sa propre pratique.',
    definition: 'Un accompagnement individuel pour découvrir la pleine conscience à votre rythme : respiration, scan corporel, méditation guidée, et surtout la façon de les intégrer à votre quotidien.',
    pourQui: 'Les personnes qui veulent s’initier ou reprendre une pratique, sans passer par un groupe.',
    deroule: [
      { title: 'Première rencontre', text: 'Vos besoins, vos objectifs et le cadre de l’accompagnement.' },
      { title: 'Initiation', text: 'Respiration consciente, scan corporel, méditation.' },
      { title: 'Approfondissement', text: 'Des exercices adaptés à votre quotidien.' },
      { title: 'Autonomie', text: 'Des outils pour garder votre équilibre dans la durée.' },
    ],
    facts: [
      { label: 'Durée', value: '1 h 30 la première séance, puis 1 h' },
      { label: 'Format', value: 'Individuel' },
      { label: 'Lieu', value: 'En présentiel ou à distance' },
    ],
    price: '90 € la première séance, puis 60 €',
    booking: S + 'a2313cf9-230a-471b-afe8-72d966932548',
    bookingLabel: 'Réserver la première séance',
    followUp: { label: 'Réserver une séance de suivi', href: S + 'ad635ece-740f-4f0f-a813-c5e91ac76040' },
    image: { src: '/images/pas-sable.webp', alt: 'Des pas lents sur le sable mouillé' },
    seo: {
      title: 'Initiation individuelle à la pleine conscience | Véronique Carrié',
      description: 'Accompagnement individuel pour apprendre la pleine conscience à son rythme. 90 € la première séance, puis 60 €. Présentiel ou visio.',
    },
  },
  {
    slug: 'jeu-du-tao',
    path: '/particuliers/jeu-du-tao',
    category: 'atelier',
    title: 'Jeu du Tao santé et mieux-être',
    method: 'Atelier en petit groupe',
    short: 'Une demi-journée de jeu coopératif pour clarifier ce qui compte pour vous.',
    definition: 'Un jeu coopératif en petit groupe. Chaque participant explore quatre mondes symboliques (terre, eau, feu, air) pour clarifier une question personnelle de santé ou de mieux-être, avec l’aide des autres joueurs.',
    pourQui: 'Les personnes qui se posent une question de vie (un changement, un projet, un équilibre à retrouver) et aiment réfléchir avec d’autres.',
    deroule: [
      { title: 'Accueil', text: 'Présentation du jeu et de sa règle de bienveillance.' },
      { title: 'Exploration', text: 'Les mondes de la terre, de l’eau, du feu et de l’air.' },
      { title: 'Partage', text: 'Ce que chacun découvre, avec l’aide du groupe.' },
      { title: 'Ancrage', text: 'Un premier pas concret, et une heure de suivi après la session.' },
    ],
    facts: [
      { label: 'Durée', value: '4 à 5 heures, plus une heure de suivi' },
      { label: 'Format', value: 'Groupe de 3 à 4 personnes' },
      { label: 'Lieu', value: 'En présentiel' },
    ],
    price: '70 € par personne',
    booking: S + 'ec9be6bb-4ae2-44de-865a-6b57a86d137f',
    bookingLabel: 'Voir les dates',
    image: { src: '/images/jeu-du-tao.webp', alt: 'Plateau du Jeu du Tao' },
    seo: {
      title: 'Jeu du Tao santé et mieux-être en petit groupe | Véronique Carrié',
      description: 'Atelier Jeu du Tao en groupe de 3 à 4 personnes pour clarifier une question de santé ou de vie. 70 € par personne, suivi compris.',
    },
  },
];

export const ALL_STRUCTURE_OFFERS = [...conferences, ...programmes];
