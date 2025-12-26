import React from 'react';
import { Target, Heart, Sparkles } from 'lucide-react';
import ServiceLayout from '../components/ServiceLayout';
import { otherFormats } from './servicesData';

const AteliersEducationSanteDetailsPage: React.FC = () => {
  const serviceData = otherFormats.find(s => s.id === 'ateliers-education');

  return (
    <ServiceLayout
      hero={{
        title: <>Programmes<br /><span className="opacity-40 italic font-light">éducation santé & pleine conscience</span></>,
        subtitle: "Des interventions pédagogiques et expérientielles pour promouvoir la santé et le bien-être au sein de votre structure.",
        tag: "Pour les structures",
        duration: "SUR MESURE",
        format: "GROUPE / ÉQUIPE",
        location: "PRÉSENTIEL/DISTANCIEL",
        mediaSrc: "/background.mp4",
        mediaType: "video"
      }}
      benefits={{
        items: [
          {
            icon: Target,
            title: 'Programme d\'éducation à la santé.',
            description: 'Adoper des habitudes de vie favorables à la santé et au bien-être.'
          },
          {
            icon: Sparkles,
            title: 'Programme de pleine conscience',
            description: 'Apprendre à cultiver une présence plus profonde et authentique.'
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
        durationDetail: "Adaptable suivant les besoins",
        formatDetail: "Intra-entreprise",
        locationDetail: "Présentiel/Distanciel",
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
      bookingLink={serviceData?.bookingLink}
    />
  );
};

export default AteliersEducationSanteDetailsPage;
