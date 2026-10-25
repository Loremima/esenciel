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
