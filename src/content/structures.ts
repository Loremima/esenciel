// Le récit commercial pour les structures (accueil et page Structures).
// Chaque bloc est une étape du parcours : le problème, l'offre clé en main,
// l'échelle des formats, le déroulé, les objections.

import {
  Award,
  BadgeCheck,
  BarChart3,
  Brain,
  ClipboardList,
  Eye,
  FileCheck2,
  FilePen,
  FileSignature,
  FileText,
  Footprints,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Megaphone,
  Mic,
  PhoneCall,
  Presentation,
  Search,
  Sprout,
  Stethoscope,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { CREDENTIALS } from './site';

type Item = { icon: LucideIcon; title: string; text: string };

export const CTA_APPEL = { label: 'Réserver un appel de 20 min', to: '/contact?profil=structure' };

export const preuves: { icon: LucideIcon; text: string }[] = [
  { icon: GraduationCap, text: 'Formée en neuropsychologie du vieillissement' },
  { icon: BadgeCheck, text: 'Instructrice certifiée MBSR, MBCT et MBCAS' },
  { icon: Award, text: 'Intervenante du programme Neo Silver' },
  { icon: MapPin, text: 'Hérault et Aveyron, dans vos locaux' },
];

export const douleurs: Item[] = [
  {
    icon: Search,
    title: 'Trouver la bonne personne',
    text: 'Un intervenant sérieux, qui parle aux seniors sans les infantiliser, et que votre financeur prendra au sérieux.',
  },
  {
    icon: FileText,
    title: 'Monter le dossier',
    text: 'Objectifs, compétences psychosociales, indicateurs : la fiche-action vous prend des heures que vous n’avez pas.',
  },
  {
    icon: BarChart3,
    title: 'Rendre des comptes',
    text: 'Après l’action, il faut prouver qu’elle a servi. Sans outil d’évaluation, c’est la page blanche.',
  },
];

export const offreCleEnMain: Item[] = [
  { icon: PhoneCall, title: 'Un premier échange offert', text: '20 minutes pour cerner votre public, vos dates et votre financement.' },
  {
    icon: FilePen,
    title: 'La fiche-action rédigée',
    text: 'Objectifs, compétences psychosociales, déroulé et indicateurs, prêts à glisser dans votre dossier CFPPA, CARSAT ou contrat local de santé.',
  },
  { icon: Megaphone, title: 'De quoi mobiliser votre public', text: 'Un texte d’invitation et une affiche, à imprimer ou à diffuser.' },
  {
    icon: Presentation,
    title: 'Une animation vivante',
    text: 'Des expériences à vivre et des outils simples, adaptés aux seniors, aux aidants ou aux soignants.',
  },
  { icon: ClipboardList, title: 'L’évaluation intégrée', text: 'Émargement, questionnaires avant et après (stress perçu, bien-être) et satisfaction.' },
  { icon: FileCheck2, title: 'Le bilan écrit', text: 'Un compte rendu chiffré, prêt pour votre rapport au financeur.' },
];

export const publics: { slug: string; icon: LucideIcon }[] = [
  { slug: 'seniors', icon: Sprout },
  { slug: 'aidants', icon: HeartHandshake },
  { slug: 'professionnels', icon: Stethoscope },
];

export const echelle: (Item & { meta: string; to: string; cta: string })[] = [
  {
    icon: Mic,
    title: 'La conférence',
    meta: '1 h 30 à 2 h · 15 à 50 personnes',
    text: 'Le plus simple pour commencer : un format court, facile à financer, qui donne envie d’aller plus loin.',
    to: '/conferences',
    cta: 'Les 2 conférences',
  },
  {
    icon: Users,
    title: 'Le cycle',
    meta: '6 à 15 séances · 5 à 12 personnes',
    text: 'Pour installer de vraies habitudes, avec un groupe qui se soutient d’une séance à l’autre.',
    to: '/structures#programmes',
    cta: 'Les 3 programmes',
  },
  {
    icon: GraduationCap,
    title: 'La journée pour vos équipes',
    meta: '1 jour ou 2 demi-journées · 6 à 12 professionnels',
    text: 'Pour prévenir l’épuisement des soignants et des accompagnants, sur le temps de travail.',
    to: '/structures/professionnels',
    cta: 'Le programme professionnels',
  },
];

export const methode: Item[] = [
  { icon: Brain, title: 'Comprendre', text: 'Comment fonctionnent l’attention, la mémoire, le stress et nos automatismes, à chaque âge de la vie.' },
  { icon: Eye, title: 'Observer', text: 'Repérer quand on fonctionne en pilote automatique, dans ses pensées, ses émotions et ses réactions.' },
  { icon: Footprints, title: 'Agir', text: 'S’entraîner à reprendre la main, et installer des habitudes qui protègent sa santé psychique.' },
];

export const etapes: Item[] = [
  { icon: PhoneCall, title: 'On s’appelle', text: '20 minutes, gratuites et sans engagement : votre public, vos dates, votre piste de financement.' },
  { icon: FileSignature, title: 'Vous recevez la proposition', text: 'Programme adapté, devis et fiche-action prête pour votre dossier.' },
  { icon: Presentation, title: 'J’interviens', text: 'Dans vos locaux. Je m’occupe du contenu et de l’animation, vous mobilisez le public.' },
  { icon: BarChart3, title: 'Vous avez votre bilan', text: 'Questionnaires, émargement et compte rendu écrit, prêts pour votre financeur.' },
];

export const objections = [
  {
    q: 'Combien coûte une intervention ?',
    a: 'Chaque intervention fait l’objet d’un devis, selon le format, le nombre de séances et le déplacement. Je vous l’envoie après notre premier échange, avec les financements mobilisables.',
  },
  {
    q: 'Pouvez-vous m’aider à monter un dossier de financement ?',
    a: 'Oui, c’est compris. Je vous fournis le programme, les objectifs, les compétences psychosociales travaillées, les indicateurs d’évaluation et une fiche-action rédigée. Le dossier reste porté par votre structure.',
  },
  {
    q: 'Mon public est difficile à mobiliser. Comment faire ?',
    a: 'Je vous donne un texte d’invitation et une affiche prêts à diffuser. La conférence est aussi un bon point d’entrée : courte, sans engagement, elle donne envie de s’inscrire au cycle.',
  },
  { q: 'Quelle est votre formation ?', a: `${CREDENTIALS.short}. ${CREDENTIALS.certifications}. ${CREDENTIALS.health}. ${CREDENTIALS.references}.` },
  {
    q: 'S’agit-il de soins ou de consultations ?',
    a: 'Non. Mes interventions relèvent de la prévention et de l’éducation à la santé. Elles ne remplacent pas un suivi médical ou psychologique.',
  },
  { q: 'Où intervenez-vous ?', a: 'Dans l’Hérault et l’Aveyron, dans vos locaux. Au-delà, contactez-moi : c’est souvent possible.' },
];
