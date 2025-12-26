import React from 'react';
import { Sun, Heart, Sparkles } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';
import { collectivePrograms } from './servicesData';

const BienVieillirDetailsPage: React.FC = () => {
  const serviceData = collectivePrograms.find(s => s.id === 'bien-vieillir');

  return (
    <ServiceLayout
      hero={{
        title: <>Bien vivre son<br /><span className="opacity-40 italic font-light">avancée en âge</span></>,
        subtitle: "Le programme MBCAS a été développé par Brigitte Zellner‑Keller, gérontologue. Il s'inspire des programmes de gestion du stress et de prévention des rechutes dépressives.",
        tag: "Programme Seniors",
        duration: "15 SÉANCES SUR 8 MOIS",
        format: "GROUPE (5-10 PERS.)",
        location: "PRÉSENTIEL/DISTANCIEL",
        mediaSrc: "/arbre_MBCAS.jpg",
        mediaType: "image"
      }}
      benefits={{
        title: "Les bénéfices principaux",
        items: [
          {
            icon: Sun,
            title: 'Santé émotionnelle',
            description: 'Réduire le stress, limiter les pensées anxiogènes et cultiver les petits plaisirs au quotidien.'
          },
          {
            icon: Heart,
            title: 'Présence consciente',
            description: 'Rester présent, ressentir l’expérience et maintenir une clarté mentale.'
          },
          {
            icon: Sparkles,
            title: 'Sérénité & Résilience',
            description: 'Accueillir les changements physiques, cognitifs et sociaux avec sérénité.'
          },
          {
            icon: Sun,
            title: 'Lien social',
            description: 'Renouer avec l’envie d’être en relation et développer des interactions enrichissantes.'
          }
        ]
      }}
      process={{
        title: "Le cheminement",
        subtitle: "Une progression adaptée sur 15 séances",
        steps: [
          {
            number: '01',
            title: 'Découverte',
            description: 'Commencer par prendre conscience de ses pensées, émotions et sensations corporelles.'
          },
          {
            number: '02',
            title: 'Exploration du moment présent',
            description: 'Expérimenter l’attention consciente ici et maintenant, avec curiosité et bienveillance.'
          },
          {
            number: '03',
            title: 'Renforcement',
            description: 'Intégrer progressivement la présence attentive dans les situations quotidiennes et face aux changements liés à l’âge.'
          },
          {
            number: '04',
            title: 'Application concrète',
            description: 'Mettre en pratique des exercices simples et réguliers pour favoriser le bien-être, la résilience et le lien social.'
          }
        ]
      }}
      objectives={{
        title: "Ce que vous allez développer",
        subtitle: "Des outils adaptés aux enjeux du vieillissement",
        items: [
          { title: 'Pratiques', description: 'Pleine conscience pour observer pensées, émotions et sensations corporelles.' },
          { title: 'Résilience', description: 'Exercices pour renforcer la résilience face aux changements liés à l’âge.' },
          { title: 'Conscience', description: 'Renforcement de la conscience corporelle et du lien social.' },
          { title: 'Thématiques', description: 'Travail sur des thèmes adaptés aux enjeux du vieillissement et favorisant expériences et échanges.' }
        ]
      }}
      practical={{
        durationDetail: "15 séances sur 8 mois (8 séances de 2h + 7 séances de 1h30)",
        formatDetail: "Groupe convivial (5-10 pers.)",
        locationDetail: "Présentiel/Distanciel",
        priceMain: "420€",
        priceLabelMain: "Parcours complet",
        description: "Le programme MBCAS (Mindfulness-Based Cognitive Approach for Seniors) s’inspire des programmes MBCT et MBSR. Le rythme est adapté et l'ambiance chaleureuse.",
        features: ['Rythme adapté', 'Séances espacées', 'Convivialité', 'Exercices simples']
      }}
      cta={{
        title: "Une nouvelle étape épanouissante",
        subtitle: "Contactez-moi pour en savoir plus sur le prochain cycle dédié aux seniors.",
        buttonText: "Me renseigner"
      }}
      bookingLink="https://esenciel.setmore.com/services/7c7d1387-91a3-4127-947d-4632b229d9bc"
      learnMoreLink="https://esenciel.setmore.com/services/c3da0ac5-1530-4576-8ad5-2e43d65c30bc"
    />
  );
};

export default BienVieillirDetailsPage;
