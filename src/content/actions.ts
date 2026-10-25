// Les 5 actions proposées aux structures, avec ce qu'on lit d'un coup d'œil :
// type, public, format et repère de prix. Le détail de chaque action est dans offres.ts.

import { conferences, programmes, type OffreStructure } from './offres';
import { REPERES_PRIX } from './structures';

export type Action = { offre: OffreStructure; type: string; publicCible: string; format: string; prix: string };

export const ACTIONS: Action[] = [
  { offre: conferences[0], type: 'Conférence', publicCible: 'Tout public, 15 à 50 personnes', format: '1 h 30 à 2 h', prix: REPERES_PRIX.conference },
  { offre: conferences[1], type: 'Conférence', publicCible: 'Tout public, 15 à 50 personnes', format: '1 h 30 à 2 h', prix: REPERES_PRIX.conference },
  { offre: programmes[0], type: 'Cycle', publicCible: 'Seniors, 5 à 12 personnes', format: '12 à 15 séances de 2 h', prix: REPERES_PRIX.seance },
  { offre: programmes[1], type: 'Cycle', publicCible: 'Proches aidants, 5 à 12 personnes', format: '6 à 8 séances de 2 h', prix: REPERES_PRIX.seance },
  { offre: programmes[2], type: 'Cycle ou journée', publicCible: 'Équipes soignantes, 6 à 12 personnes', format: '6 séances d’1 h 30, ou 1 journée', prix: `${REPERES_PRIX.seance}, ou ${REPERES_PRIX.journee}` },
];

export const actionOf = (slug: string) => ACTIONS.find((a) => a.offre.slug === slug);

/** Ce que la structure reçoit pour chaque action. */
export const LIVRABLES = [
  'La fiche-action rédigée, prête pour votre dossier',
  'Un texte d’invitation et une affiche à diffuser',
  'Les questionnaires avant et après, et la feuille d’émargement',
  'Un bilan écrit pour votre financeur',
];

/** Les trois formats, présentés comme des offres. Prix À VALIDER PAR VÉRONIQUE (voir REPERES_PRIX). */
export const FORMATS = [
  {
    name: 'Conférence',
    price: '350 €',
    unit: 'la conférence',
    pitch: 'Pour lancer la dynamique.',
    meta: '1 h 30 à 2 h · 15 à 50 personnes',
    features: ['2 thèmes au choix', 'Une version par public', 'Affiche et texte d’invitation', 'Questionnaire de satisfaction'],
  },
  {
    name: 'Cycle',
    price: '160 €',
    unit: 'la séance de 2 h',
    pitch: 'Pour installer de vraies habitudes.',
    meta: '6 à 15 séances · 5 à 12 personnes',
    features: ['Seniors, aidants ou soignants', 'Fiche-action rédigée', 'Évaluation avant et après', 'Bilan écrit pour le financeur'],
    highlight: 'Le plus complet',
  },
  {
    name: 'Journée équipe',
    price: '800 €',
    unit: 'la journée',
    pitch: 'Pour prévenir l’épuisement des soignants.',
    meta: '1 jour ou 2 demi-journées · 6 à 12 professionnels',
    features: ['Sur le temps de travail', 'Dans vos locaux', 'Démarche qualité de vie au travail', 'Bilan écrit'],
  },
];
