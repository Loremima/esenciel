import React from 'react';
import { Target, Heart, Sparkles } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const SanteQualiteVieDetailsPage: React.FC = () => {
  return (
    <ServiceLayout
      hero={{
        title: <>Santé et<br /><span className="opacity-40 italic font-light">vitalité</span></>,
        subtitle: "Devenir acteur de sa santé pour un bien-être durable et une vie pleine de vitalité au quotidien.",
        tag: "Accompagnement individuel",
        duration: "1H - 1H30",
        format: "INDIVIDUEL",
        location: "VAUREILLES / VISIO",
        mediaSrc: "/vitalité_sainté.mp4",
        mediaType: "video"
      }}
      benefits={{
        title: "Les bénéfices attendus",
        subtitle: "Un accompagnement pour mobiliser vos ressources internes",
        items: [
          {
            icon: Target,
            title: 'Clarté sur vos objectifs',
            description: 'Identifiez précisément ce qui compte vraiment pour votre bien-être.'
          },
          {
            icon: Heart,
            title: 'Équilibre retrouvé',
            description: 'Harmonisez tous les aspects de votre vie pour un épanouissement global.'
          },
          {
            icon: Sparkles,
            title: 'Transformation durable',
            description: 'Instaurez des changements qui perdurent dans le temps.'
          }
        ]
      }}
      process={{
        title: "Votre parcours",
        subtitle: "Un accompagnement structuré pour des résultats durables",
        steps: [
          {
            number: '01',
            title: 'Évaluation complète',
            description: 'Analyse approfondie de votre situation actuelle, de vos habitudes et de vos aspirations.'
          },
          {
            number: '02',
            title: 'Plan personnalisé',
            description: 'Création d\'un programme sur-mesure adapté à votre rythme de vie et vos objectifs.'
          },
          {
            number: '03',
            title: 'Accompagnement actif',
            description: 'Mise en œuvre progressive avec plusieurs séances pour des ajustements réguliers.'
          },
          {
            number: '04',
            title: 'Autonomisation',
            description: 'Développement de votre capacité à maintenir vos nouvelles habitudes de façon autonome.'
          }
        ]
      }}
      objectives={{
        title: "Les piliers",
        subtitle: "Ce que vous allez accomplir ensemble",
        items: [
          { title: 'Identification', description: 'Prendre conscience de vos habitudes et freins.' },
          { title: 'Ressources', description: 'Mobiliser vos ressources personnelles internes.' },
          { title: 'Plan d\'action', description: 'Établir un plan aligné à vos objectifs.' },
          { title: 'Motivation', description: 'Soutenir votre motivation sur le long terme.' }
        ]
      }}
      practical={{
        durationDetail: "1h30 puis 1h",
        formatDetail: "Accompagnement individuel",
        locationDetail: "Vaureilles (12) ou Visio",
        priceMain: "90€",
        priceSub: "60€",
        priceLabelMain: "Bilan Initial",
        priceLabelSub: "Suivi",
        description: "L'accompagnement est un espace sécurisé où la bienveillance et l'écoute sont au centre. Nous construisons ensemble un cadre qui respecte votre rythme.",
        features: ['Approche personnalisée', 'Confidentialité totale', 'Flexibilité des formats']
      }}
      cta={{
        title: "Prêt(e) à prendre en main votre santé ?",
        subtitle: "Réservez votre premier rendez-vous pour un accompagnement sur mesure.",
        buttonText: "Réserver ma séance"
      }}
    />
  );
};

export default SanteQualiteVieDetailsPage;
