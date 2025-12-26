import React from 'react';
import { Shield, Brain, Sparkles } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const PreventionRechuteDetailsPage: React.FC = () => {
  return (
    <ServiceLayout
      hero={{
        title: <>Prévention<br /><span className="opacity-40 italic font-light">rechute</span></>,
        subtitle: "Un programme alliant thérapie cognitive et pleine conscience pour consolider votre équilibre émotionnel.",
        tag: "Programme collectif",
        duration: "8 SEMAINES",
        format: "GROUPE (5-10 PERS.)",
        location: "PRÉSENTIEL",
        mediaSrc: "/sunrise_MBCT.mp4",
        mediaType: "video"
      }}
      benefits={{
        title: "Les objectifs",
        subtitle: "Renforcer sa stabilité face aux défis de la vie",
        items: [
          {
            icon: Shield,
            title: 'Protection',
            description: 'Identifier les signes avant-coureurs de rechute et savoir comment agir.'
          },
          {
            icon: Brain,
            title: 'Compréhension',
            description: 'Comprendre les mécanismes du mental qui mènent à la spirale dépressive.'
          },
          {
            icon: Sparkles,
            title: 'Libération',
            description: 'Se désengager des ruminations mentales et des pensées négatives.'
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
        title: "Piliers du programme",
        subtitle: "Les axes de travail",
        items: [
          { title: 'Cognitif', description: 'Outils issus des TCC pour gérer les pensées.' },
          { title: 'Méditatif', description: 'Pratiques pour ancrer le calme.' },
          { title: 'Émotionnel', description: 'Accueillir sans se laisser envahir.' },
          { title: 'Corporel', description: 'Le corps comme baromètre du bien-être.' }
        ]
      }}
      practical={{
        durationDetail: "8 séances de 2h",
        formatDetail: "Groupe de 5 à 10 pers.",
        locationDetail: "Présentiel",
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
    />
  );
};

export default PreventionRechuteDetailsPage;
