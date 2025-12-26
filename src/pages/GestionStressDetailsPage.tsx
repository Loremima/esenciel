import React from 'react';
import { Target, Heart, Sparkles } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';
import { collectivePrograms } from './servicesData';

const GestionStressDetailsPage: React.FC = () => {
  const serviceData = collectivePrograms.find(s => s.id === 'gestion-stress');

  return (
    <ServiceLayout
      hero={{
        title: <>Gestion du<br /><span className="opacity-40 italic font-light">stress</span></>,
        subtitle: "Développer une relation plus consciente à son expérience et mieux faire face aux situations stressantes.",
        tag: "Programme collectif",
        duration: "8 SÉANCES",
        format: "GROUPE (5-10 PERS.)",
        location: "PRÉSENTIEL",
        mediaSrc: "/surf_MBCR.mp4",
        mediaType: "video"
      }}
      benefits={{
        title: "Les bénéfices principaux",
        subtitle: "Une approche validée pour apaiser le mental",
        items: [
          {
            icon: Target,
            title: 'Gestion du stress',
            description: 'Reconnaître les signes de stress et y répondre de façon ajustée.'
          },
          {
            icon: Heart,
            title: 'Clarté et concentration',
            description: 'Améliorer l’attention au moment présent et réduire les distractions mentales.'
          },
          {
            icon: Sparkles,
            title: 'Présence quotidienne',
            description: 'Être plus attentif à ce qui se passe en soi sans réagir automatiquement.'
          }
        ]
      }}
      process={{
        title: "Le cycle",
        subtitle: "Un apprentissage progressif en 8 séances",
        steps: [
          {
            number: '01',
            title: 'Exploration',
            description: 'Découverte du pilotage automatique et reconnexion aux sensations corporelles.'
          },
          {
            number: '02',
            title: 'Accueil',
            description: 'Apprendre à rester présent face aux expériences agréables comme désagréables.'
          },
          {
            number: '03',
            title: 'Acceptation',
            description: 'Développer une nouvelle relation avec les pensées et les émotions difficiles.'
          },
          {
            number: '04',
            title: 'Intégration',
            description: 'Consolider la pratique pour en faire une ressource durable au quotidien.'
          }
        ]
      }}
      objectives={{
        title: "Ce que vous allez développer",
        subtitle: "Des outils pour votre quotidien",
        items: [
          { title: 'Observation', description: 'Pratiques de pleine conscience pour observer pensées, émotions et sensations.' },
          { title: 'Techniques', description: 'Techniques d’attention consciente appliquées au quotidien.' },
          { title: 'Lucidité', description: 'Exercices pour répondre au stress avec plus de lucidité.' }
        ]
      }}
      practical={{
        durationDetail: "8 séances (2h/séance)",
        formatDetail: "Groupe de 5 à 10 pers.",
        locationDetail: "Présentiel/Distanciel",
        priceMain: "330€",
        priceLabelMain: "Cycle complet",
        description: "Ce programme demande un engagement personnel avec une pratique quotidienne. C'est la clé pour en ressentir les bénéfices profonds.",
        features: ['Supports écrits', 'Enregistrements audios', 'Entretien préalable']
      }}
      cta={{
        title: "Envie de retrouver le calme ?",
        subtitle: "Inscrivez-vous au prochain cycle de gestion du stress.",
        buttonText: "Me pré-inscrire"
      }}
      bookingLink="https://esenciel.setmore.com/services/75422cbc-2646-42db-9eee-97e4628f71e8"
      learnMoreLink="https://esenciel.setmore.com/services/c3da0ac5-1530-4576-8ad5-2e43d65c30bc"
    />
  );
};

export default GestionStressDetailsPage;
