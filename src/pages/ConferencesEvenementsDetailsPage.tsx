import React from 'react';
import { Target, Heart, Sparkles } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';
import { otherFormats } from './servicesData';

const ConferencesEvenementsDetailsPage: React.FC = () => {
  const serviceData = otherFormats.find(s => s.id === 'conferences');

  return (
    <ServiceLayout
      hero={{
        title: <>Conférences &<br /><span className="opacity-40 italic font-light">événements</span></>,
        subtitle: "Des temps de partage et d'inspiration pour sensibiliser le grand public aux enjeux de santé et de bien-être.",
        tag: "Grand Public",
        duration: "1H30 - 2H",
        format: "CONFÉRENCE / ATELIER",
        location: "SUR DEMANDE",
        mediaSrc: "/surf_MBCR.mp4",
        mediaType: "video"
      }}
      benefits={{
        title: "L'intention",
        subtitle: "Informer, inspirer et relier",
        items: [
          {
            icon: Target,
            title: 'Sensibilisation',
            description: 'Apporter un éclairage accessible et rigoureux sur des sujets de santé publique.'
          },
          {
            icon: Heart,
            title: 'Partage',
            description: 'Créer des espaces de dialogue et de rencontre autour de valeurs communes.'
          },
          {
            icon: Sparkles,
            title: 'Inspiration',
            description: 'Donner des clés concrètes pour devenir acteur de sa santé au quotidien.'
          }
        ]
      }}
      process={{
        title: "Formats",
        subtitle: "Des interventions adaptées à votre public",
        steps: [
          {
            number: '01',
            title: 'Conférence',
            description: 'Présentation dynamique et interactive sur un thème défini (ex: stress, sommeil, émotions).'
          },
          {
            number: '02',
            title: 'Atelier découverte',
            description: 'Initiation pratique à la pleine conscience ou à d\'autres outils de santé.'
          },
          {
            number: '03',
            title: 'Ciné-débat',
            description: 'Projection d\'un film suivie d\'un échange animé avec le public.'
          },
          {
            number: '04',
            title: 'Table ronde',
            description: 'Participation à des événements collectifs avec d\'autres intervenants.'
          }
        ]
      }}
      objectives={{
        title: "Sujets phares",
        subtitle: "Exemples de thématiques abordées",
        items: [
          { title: 'Pleine conscience', description: 'Une ressource pour notre temps.' },
          { title: 'Santé intégrative', description: 'Prendre soin de soi globalement.' },
          { title: 'Émotions', description: 'Mieux les comprendre pour mieux les vivre.' },
          { title: 'Bien vieillir', description: 'Avancer en âge avec sérénité.' }
        ]
      }}
      practical={{
        durationDetail: "1h30 à 2h",
        formatDetail: "Grand groupe",
        locationDetail: "Sur demande",
        priceMain: "Sur devis",
        priceLabelMain: "Selon format",
        description: "J'interviens à la demande d'associations, de mairies, de médiathèques ou d'organisateurs d'événements. Mon approche se veut à la fois scientifique et humaniste.",
        features: ['Contenu expert', 'Support visuel', 'Interaction public', 'Adaptabilité']
      }}
      cta={{
        title: "Organiser un événement ?",
        subtitle: "Contactez-moi pour discuter de votre projet de conférence ou d'animation.",
        buttonText: "Me contacter"
      }}
      bookingLink={serviceData?.bookingLink}
    />
  );
};

export default ConferencesEvenementsDetailsPage;
