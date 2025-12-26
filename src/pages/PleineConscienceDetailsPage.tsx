import React from 'react';
import { Target, Heart, Sparkles } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';
import { individualServices } from './servicesData';

const PleineConscienceDetailsPage: React.FC = () => {
  const serviceData = individualServices.find(s => s.id === 'pleine-conscience-presence');

  return (
    <ServiceLayout
      hero={{
        title: <>Pleine<br /><span className="opacity-40 italic font-light">conscience</span></>,
        subtitle: "Ralentir pour mieux se retrouver et cultiver une présence authentique à vous-même.",
        tag: "Accompagnement individuel",
        duration: "1H - 1H30",
        format: "INDIVIDUEL",
        location: "Présentiel/Distanciel",
        mediaSrc: "/sand_conscience.mp4",
        mediaType: "video"
      }}
      benefits={{
        title: "Les bénéfices attendus",
        subtitle: "Un chemin vers plus de clarté et d'alignement",
        items: [
          {
            icon: Target,
            title: 'Conscience de soi',
            description: 'Développez une meilleure connaissance de vos besoins et de vos réactions.'
          },
          {
            icon: Heart,
            title: 'Équilibre émotionnel',
            description: 'Apprenez à accueillir et réguler vos émotions avec bienveillance.'
          },
          {
            icon: Sparkles,
            title: 'Sérénité quotidienne',
            description: 'Intégrez la pleine conscience dans votre vie pour plus de paix intérieure.'
          }
        ]
      }}
      process={{
        title: "Déroulement",
        subtitle: "Un cheminement progressif vers la pleine présence",
        steps: [
          {
            number: '01',
            title: 'Première rencontre',
            description: 'Écoute de vos besoins, exploration de vos objectifs et définition du cadre d\'accompagnement.'
          },
          {
            number: '02',
            title: 'Initiation aux pratiques',
            description: 'Découverte des techniques de base : respiration consciente, scan corporel et méditation.'
          },
          {
            number: '03',
            title: 'Approfondissement',
            description: 'Développement de votre pratique personnelle avec des exercices adaptés à votre quotidien.'
          },
          {
            number: '04',
            title: 'Autonomie',
            description: 'Consolidation de votre pratique avec des outils pour maintenir votre équilibre durablement.'
          }
        ]
      }}
      objectives={{
        title: "Techniques intégrées",
        subtitle: "Des outils concrets pour votre pratique",
        items: [
          { title: 'Respiration', description: 'Techniques de respiration consciente pour apaiser le mental.' },
          { title: 'Méditation', description: 'Pratiques formelles guidées.' },
          { title: 'Scan corporel', description: 'Reconnexion aux sensations du corps pour s\'ancrer.' },
          { title: 'Vie quotidienne', description: 'Exercices informels pour intégrer la présence au quotidien.' }
        ]
      }}
      practical={{
        durationDetail: "1h30 (1ère séance) / 1h (suivantes)",
        formatDetail: "Accompagnement individuel",
        locationDetail: "Présentiel/Distanciel",
        priceMain: "90€",
        priceSub: "60€",
        priceLabelMain: "Bilan Initial",
        priceLabelSub: "Suivi",
        description: "Chaque séance est unique et s'adapte à votre état du moment. Nous avançons ensemble à votre rythme, avec douceur et bienveillance.",
        features: ['Séances personnalisées', 'Enregistrements audios', 'Suivi entre les séances']
      }}
      cta={{
        title: "Prêt(e) à vous reconnecter à vous-même ?",
        subtitle: "Contactez-moi pour discuter de vos besoins et commencer votre parcours.",
        buttonText: "Me contacter"
      }}
      bookingLink={serviceData?.bookingLink}
      followUpBookingLink={serviceData?.followUpBookingLink}
    />
  );
};

export default PleineConscienceDetailsPage;
