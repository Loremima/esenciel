import React from 'react';
import { Shield, Brain, Sparkles } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';
import { collectivePrograms } from './servicesData';

const PreventionRechuteDetailsPage: React.FC = () => {
  const serviceData = collectivePrograms.find(s => s.id === 'prevention-rechute');

  return (
    <ServiceLayout
      hero={{
        title: <>Prévention<br /><span className="opacity-40 italic font-light">rechute dépressive</span></>,
        subtitle: "Réduire le risque de rechute dépressive en changeant la relation aux pensées et états émotionnels.",
        tag: "Programme collectif",
        duration: "8 SÉANCES",
        format: "GROUPE (5-10 PERS.)",
        location: "PRÉSENTIEL/DISTANCIEL",
        mediaSrc: "/sunrise_MBCT.mp4",
        mediaType: "video"
      }}
      benefits={{
        title: "Les bénéfices principaux",
        subtitle: "Renforcer sa stabilité face aux défis de la vie",
        items: [
          {
            icon: Shield,
            title: 'Prévention',
            description: 'Identifier les pensées répétitives et reconnaître les premiers signes de dépression.'
          },
          {
            icon: Brain,
            title: 'Prise de recul',
            description: 'Observer pensées et émotions sans se laisser submerger.'
          },
          {
            icon: Sparkles,
            title: 'Présence consciente',
            description: 'Cultiver l’attention au moment présent pour un meilleur équilibre psychique.'
          }
        ]
      }}
      process={{
        title: "La méthode MBCT",
        subtitle: "Mindfulness Based Cognitive Therapy",
        steps: [
          {
            number: '01',
            title: 'Reconnaissance',
            description: 'Prendre conscience du mode "faire" et apprendre à passer au mode "être".'
          },
          {
            number: '02',
            title: 'Observation',
            description: 'Reconnaître les schémas de pensées négatives et les jugements automatiques.'
          },
          {
            number: '03',
            title: 'Distanciation',
            description: 'Considérer les pensées comme des événements mentaux et non des faits.'
          },
          {
            number: '04',
            title: 'Bienveillance',
            description: 'Prendre soin de soi et élaborer un plan d\'action personnel en cas de baisse de moral.'
          }
        ]
      }}
      objectives={{
        title: "Ce que vous allez développer",
        subtitle: "Les axes de travail",
        items: [
          { title: 'Accueil', description: 'Pratique de la pleine conscience pour observer et accueillir pensées et émotions.' },
          { title: 'Recul', description: 'Exercices de décentration cognitive pour prendre du recul face aux ruminations.' },
          { title: 'Présence', description: 'Développement d’une présence consciente et ouverte.' }
        ]
      }}
      practical={{
        durationDetail: "8 séances (2h/séance)",
        formatDetail: "Groupe de 5 à 10 pers.",
        locationDetail: "Présentiel/Distanciel",
        priceMain: "330€",
        priceLabelMain: "Cycle complet",
        description: "Particulièrement recommandé aux personnes ayant déjà vécu des épisodes dépressifs ou anxieux. Un entretien préalable est nécessaire pour valider l'adéquation du programme.",
        features: ['Protocole validé', 'Suivi personnalisé', 'Supports pédagogiques', 'Entretien préalable']
      }}
      cta={{
        title: "Consolidez votre équilibre",
        subtitle: "Rejoignez un groupe bienveillant pour prévenir durablement la rechute.",
        buttonText: "Me pré-inscrire"
      }}
      bookingLink="https://esenciel.setmore.com/services/9eefb15d-57de-4f51-91cc-b37949858c23"
      learnMoreLink="https://esenciel.setmore.com/services/c3da0ac5-1530-4576-8ad5-2e43d65c30bc"
    />
  );
};

export default PreventionRechuteDetailsPage;
