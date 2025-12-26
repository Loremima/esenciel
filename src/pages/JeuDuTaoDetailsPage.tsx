import React from 'react';
import { Target, Heart, Sparkles } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';
import { groupServices } from './servicesData';

const JeuDuTaoDetailsPage: React.FC = () => {
  const serviceData = groupServices.find(s => s.id === 'jeu-du-tao');

  return (
    <ServiceLayout
      hero={{
        title: <>Jeu du<br /><span className="opacity-40 italic font-light">Tao</span></>,
        subtitle: "Une expérience interactive and immersive destinée à des petits groupes de 4 personnes maximum. En 4/5 heures, chaque participant explore quatre mondes symboliques (terre, eau, feu, air) pour clarifier ses objectifs de bien-être and d\'équilibre de vie.",
        tag: "Expérience collective",
        duration: "4H - 5H",
        format: "GROUPE (4 PERS. MAX)",
        location: "Présentiel/Distanciel",
        mediaSrc: "/tao.png",
        mediaType: "image"
      }}
      benefits={{
        title: "L'expérience",
        subtitle: "Un voyage initiatique qui révèle vos ressources",
        items: [
          {
            icon: Target,
            title: 'Clarification',
            description: 'Identifiez vos aspirations profondes and vos freins avec l\'appui du collectif.'
          },
          {
            icon: Heart,
            title: 'Introspection',
            description: 'Explorez vos ressources internes dans un cadre bienveillant and sécurisant.'
          },
          {
            icon: Sparkles,
            title: 'Alignement',
            description: 'Repartez avec des outils concrets pour ajuster vos choix de vie.'
          }
        ]
      }}
      process={{
        title: "Votre quête",
        subtitle: "Un parcours guidé à travers les mondes",
        steps: [
          {
            number: '01',
            title: 'Accueil',
            description: 'Présentation du jeu and mise en confiance dans un environnement bienveillant.'
          },
          {
            number: '02',
            title: 'Exploration',
            description: 'Voyage à travers les mondes symboliques (Terre, Eau, Feu, Air) pour révéler vos ressources.'
          },
          {
            number: '03',
            title: 'Partage',
            description: 'Temps de réflexion collective and de partage des découvertes personnelles.'
          },
          {
            number: '04',
            title: 'Ancrage',
            description: 'Intégration des apprentissages and définition d\'actions concrètes pour le quotidien.'
          }
        ]
      }}
      objectives={{
        title: "Les 4 mondes",
        subtitle: "Les dimensions explorées durant la partie",
        items: [
          { title: 'Terre', description: 'Stabilité, ancrage and fondations de votre vie.' },
          { title: 'Eau', description: 'Émotions, fluidité and relation aux autres.' },
          { title: 'Feu', description: 'Action, transformation and énergie vitale.' },
          { title: 'Air', description: 'Pensée, vision and clarté mentale.' }
        ]
      }}
      practical={{
        durationDetail: "4 à 5 heures",
        formatDetail: "Groupe de 4 personnes max.",
        locationDetail: "Présentiel/Distanciel",
        priceMain: "70€",
        priceLabelMain: "Par personne",
        description: "Le Jeu du Tao se joue en petit groupe pour garantir une qualité d'écoute and de partage. C'est un moment privilégié pour soi, soutenu par la dynamique du groupe.",
        features: ['Matériel fourni', 'Animation certifiée', 'Cadre confidentiel']
      }}
      cta={{
        title: "Prêt(e) pour l'aventure ?",
        subtitle: "Réservez votre place pour la prochaine session de jeu.",
        buttonText: "Voir les dates"
      }}
      bookingLink={serviceData?.bookingLink}
    />
  );
};

export default JeuDuTaoDetailsPage;
