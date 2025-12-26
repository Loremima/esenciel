import React from 'react';
import { Target, Heart, Sparkles } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const GestionStressDetailsPage: React.FC = () => {
  return (
    <ServiceLayout
      hero={{
        title: <>Gestion du<br /><span className="opacity-40 italic font-light">stress</span></>,
        subtitle: "Retrouvez votre équilibre et votre sérénité grâce à un programme structuré basé sur la pleine conscience.",
        tag: "Programme collectif",
        duration: "8 SEMAINES",
        format: "GROUPE (5-10 PERS.)",
        location: "PRÉSENTIEL",
        mediaSrc: "/surf_MBCR.mp4",
        mediaType: "video"
      }}
      benefits={{
        title: "Les bienfaits",
        subtitle: "Une approche validée pour apaiser le mental",
        items: [
    {
      icon: Target,
            title: 'Apaisement',
            description: 'Diminuez significativement votre niveau de stress et d\'anxiété au quotidien.'
    },
    {
      icon: Heart,
            title: 'Bienveillance',
            description: 'Améliorez votre relation à vous-même et développez l\'autocompassion.'
    },
    {
      icon: Sparkles,
            title: 'Régulation',
            description: 'Apprenez à mieux vivre vos émotions et à ne plus vous laisser submerger.'
          }
        ]
      }}
      process={{
        title: "Le cycle",
        subtitle: "Un apprentissage progressif sur 8 semaines",
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
        title: "Compétences clés",
        subtitle: "Ce que vous allez développer",
        items: [
          { title: 'Attention', description: 'Muscler sa capacité à rester concentré.' },
          { title: 'Recul', description: 'Observer ses pensées sans s\'y accrocher.' },
          { title: 'Réponse', description: 'Choisir sa réaction plutôt que de subir.' },
          { title: 'Soin de soi', description: 'Savoir prendre soin de ses besoins.' }
        ]
      }}
      practical={{
        durationDetail: "8 séances de 2h30",
        formatDetail: "Groupe de 5 à 10 pers.",
        locationDetail: "Présentiel",
        priceMain: "330€",
        priceLabelMain: "Cycle complet",
        description: "Ce programme demande un engagement personnel avec une pratique quotidienne d'environ 30 minutes. C'est la clé pour en ressentir les bénéfices profonds.",
        features: ['Supports écrits', 'Enregistrements audios', 'Journée de pratique', 'Entretien préalable']
      }}
      cta={{
        title: "Envie de retrouver le calme ?",
        subtitle: "Inscrivez-vous au prochain cycle de gestion du stress.",
        buttonText: "Me pré-inscrire"
      }}
    />
  );
};

export default GestionStressDetailsPage;
