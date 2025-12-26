import React from 'react';
import { Target, Heart, Sparkles } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const JeuDuTaoDetailsPage: React.FC = () => {
  return (
    <ServiceLayout
      hero={{
        title: <>Jeu du<br /><span className="opacity-40 italic font-light">Tao</span></>,
        subtitle: "Une expérience interactive et immersive pour définir votre propre quête et explorer vos aspirations profondes.",
        tag: "Expérience collective",
        duration: "4H - 5H",
        format: "GROUPE (4 PERS. MAX)",
        location: "PRÉSENTIEL",
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
            description: 'Identifiez vos aspirations profondes et vos freins avec l\'appui du collectif.'
          },
          {
            icon: Heart,
            title: 'Introspection',
            description: 'Explorez vos ressources internes dans un cadre bienveillant et sécurisant.'
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
            description: 'Présentation du jeu et mise en confiance dans un environnement bienveillant.'
          },
          {
            number: '02',
            title: 'Exploration',
            description: 'Voyage à travers les mondes symboliques (Terre, Eau, Feu, Air) pour révéler vos ressources.'
          },
          {
            number: '03',
            title: 'Partage',
            description: 'Temps de réflexion collective et de partage des découvertes personnelles.'
          },
          {
            number: '04',
            title: 'Ancrage',
            description: 'Intégration des apprentissages et définition d\'actions concrètes pour le quotidien.'
          }
        ]
      }}
      objectives={{
        title: "Les 4 mondes",
        subtitle: "Les dimensions explorées durant la partie",
        items: [
          { title: 'Terre', description: 'Stabilité, ancrage et fondations de votre vie.' },
          { title: 'Eau', description: 'Émotions, fluidité et relation aux autres.' },
          { title: 'Feu', description: 'Action, transformation et énergie vitale.' },
          { title: 'Air', description: 'Pensée, vision et clarté mentale.' }
        ]
      }}
      practical={{
        durationDetail: "4 à 5 heures",
        formatDetail: "Groupe de 4 personnes max.",
        locationDetail: "Présentiel",
        priceMain: "70€",
        priceLabelMain: "Par personne",
        description: "Le Jeu du Tao se joue en petit groupe pour garantir une qualité d'écoute et de partage. C'est un moment privilégié pour soi, soutenu par la dynamique du groupe.",
        features: ['Matériel fourni', 'Animation certifiée', 'Cadre confidentiel']
      }}
      cta={{
        title: "Prêt(e) pour l'aventure ?",
        subtitle: "Réservez votre place pour la prochaine session de jeu.",
        buttonText: "Voir les dates"
      }}
    />
  );
};

export default JeuDuTaoDetailsPage;
