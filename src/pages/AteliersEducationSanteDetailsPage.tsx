import React from 'react';
import { Target, Heart, Sparkles } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';

const AteliersEducationSanteDetailsPage: React.FC = () => {
  return (
    <ServiceLayout
      hero={{
        title: <>Ateliers<br /><span className="opacity-40 italic font-light">éducation santé</span></>,
        subtitle: "Des interventions pédagogiques et expérientielles pour promouvoir la santé et le bien-être au sein de votre structure.",
        tag: "Pour les structures",
        duration: "SUR MESURE",
        format: "GROUPE / ÉQUIPE",
        location: "IN SITU / DISTANCIEL",
        mediaSrc: "/background.mp4",
        mediaType: "video"
      }}
      benefits={{
        title: "Les impacts",
        subtitle: "Soutenir la qualité de vie au travail et le bien-être",
        items: [
          {
            icon: Target,
            title: 'Prévention',
            description: 'Agir en amont pour prévenir l\'épuisement professionnel et les risques psychosociaux.'
          },
          {
            icon: Heart,
            title: 'Cohésion',
            description: 'Renforcer les liens et la qualité des relations au sein des équipes.'
          },
          {
            icon: Sparkles,
            title: 'Ressources',
            description: 'Outiller vos collaborateurs pour mieux gérer leur stress et leur énergie.'
          }
        ]
      }}
      process={{
        title: "Notre démarche",
        subtitle: "Co-construire une intervention adaptée à vos besoins",
        steps: [
          {
            number: '01',
            title: 'Analyse',
            description: 'Échange approfondi pour comprendre votre contexte, vos enjeux et vos attentes.'
          },
          {
            number: '02',
            title: 'Conception',
            description: 'Proposition d\'un format et d\'un contenu pédagogique sur-mesure.'
          },
          {
            number: '03',
            title: 'Intervention',
            description: 'Animation des ateliers avec une pédagogie active et participative.'
          },
          {
            number: '04',
            title: 'Bilan',
            description: 'Retour d\'expérience et évaluation de l\'impact de l\'action.'
          }
        ]
      }}
      objectives={{
        title: "Thématiques",
        subtitle: "Exemples de sujets d'intervention",
        items: [
          { title: 'Stress & Émotions', description: 'Comprendre et réguler son stress.' },
          { title: 'Qualité de vie', description: 'Prendre soin de soi au travail.' },
          { title: 'Communication', description: 'Développer une écoute bienveillante.' },
          { title: 'Resilience', description: 'S\'adapter aux changements avec souplesse.' }
        ]
      }}
      practical={{
        durationDetail: "Adaptable (2h à 2 jours)",
        formatDetail: "Intra-entreprise",
        locationDetail: "Vos locaux ou extérieur",
        priceMain: "Sur devis",
        priceLabelMain: "Selon cahier des charges",
        description: "J'interviens auprès des entreprises, associations, collectivités et établissements de santé. Chaque projet fait l'objet d'une étude personnalisée pour répondre au plus juste à votre demande.",
        features: ['Ingénierie pédagogique', 'Animation experte', 'Supports de formation', 'Bilan d\'intervention']
      }}
      cta={{
        title: "Un projet pour vos équipes ?",
        subtitle: "Contactez-moi pour échanger sur vos besoins et construire votre projet.",
        buttonText: "Demander un devis"
      }}
    />
  );
};

export default AteliersEducationSanteDetailsPage;
