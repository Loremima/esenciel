import React from 'react';
import { Sun, Heart, Sparkles } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const BienVieillirDetailsPage: React.FC = () => {
  return (
    <ServiceLayout
      hero={{
        title: <>Bien vivre<br /><span className="opacity-40 italic font-light">son avancée en âge</span></>,
        subtitle: "Un accompagnement vers la sagesse et l'équilibre pour aborder cette étape de vie avec sérénité.",
        tag: "Programme Seniors",
        duration: "8 MOIS",
        format: "GROUPE (5-10 PERS.)",
        location: "PRÉSENTIEL",
        mediaSrc: "/arbre_MBCAS.jpg",
        mediaType: "image"
      }}
      benefits={{
        title: "Les bienfaits",
        subtitle: "Cultiver la vitalité et la présence",
        items: [
          {
            icon: Sun,
            title: 'Vitalité',
            description: 'Maintenez une présence attentive pour mieux vivre les changements liés à l\'âge.'
          },
          {
            icon: Heart,
            title: 'Sérénité',
            description: 'Cultivez l\'acceptation et la bienveillance envers soi-même et son parcours.'
          },
          {
            icon: Sparkles,
            title: 'Lien social',
            description: 'Partagez une expérience enrichissante au sein d\'un groupe bienveillant.'
          }
        ]
      }}
      process={{
        title: "Le cheminement",
        subtitle: "Une progression douce sur 8 mois",
        steps: [
          {
            number: '01',
            title: 'Ancrage',
            description: 'Renforcer sa stabilité physique et émotionnelle dans l\'instant présent.'
          },
          {
            number: '02',
            title: 'Exploration',
            description: 'Revisiter son histoire de vie avec un regard nouveau et apaisé.'
          },
          {
            number: '03',
            title: 'Ouverture',
            description: 'S\'ouvrir aux autres et cultiver la joie des petits moments.'
          },
          {
            number: '04',
            title: 'Transmission',
            description: 'Reconnaître sa valeur et ce que l\'on souhaite transmettre.'
          }
        ]
      }}
      objectives={{
        title: "Thèmes abordés",
        subtitle: "Les clés du bien vieillir",
        items: [
          { title: 'Adaptation', description: 'Faire face aux changements avec souplesse.' },
          { title: 'Estime de soi', description: 'Renforcer la confiance en ses capacités.' },
          { title: 'Mémoire', description: 'Stimuler ses fonctions cognitives par l\'attention.' },
          { title: 'Sagesse', description: 'Cultiver un regard apaisé sur la vie.' }
        ]
      }}
      practical={{
        durationDetail: "15 séances sur 8 mois",
        formatDetail: "Groupe convivial",
        locationDetail: "Présentiel",
        priceMain: "380€",
        priceLabelMain: "Parcours complet",
        description: "Ce programme MBCAS (Mindfulness-Based Cognitive Approach for Seniors) est spécialement conçu pour les seniors. Le rythme est adapté et l'ambiance chaleureuse.",
        features: ['Rythme adapté', 'Séances espacées', 'Convivialité', 'Exercices simples']
      }}
      cta={{
        title: "Une nouvelle étape épanouissante",
        subtitle: "Contactez-moi pour en savoir plus sur le prochain cycle dédié aux seniors.",
        buttonText: "Me renseigner"
      }}
    />
  );
};

export default BienVieillirDetailsPage;
