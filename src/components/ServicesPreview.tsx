import React from 'react';
import { Heart, Brain, Sparkles, ArrowRight, Users } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ParallaxSection from './ParallaxSection';
import GlassButton from './GlassButton';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      id: 'individuels',
      icon: Heart,
      title: 'Accompagnements individuels',
      description: 'Un accompagnement sur mesure pour une santé de qualité, une vie optimisée et une pleine conscience au quotidien.',
      detailPage: '/accompagnements-individuels',
    },
    {
      id: 'groupes',
      icon: Users,
      title: 'Accompagnements de groupe',
      description: 'Accompagnement collectif avec le jeu du Tao, santé et mieux-être.',
      detailPage: '/accompagnements-groupe',
    },
    {
      id: 'programmes',
      icon: Brain,
      title: 'Programmes de pleine conscience',
      description: 'Des protocoles structurés basés sur la pleine conscience pour la réduction du stress, la prévention de la rechute dépressive et pour bien vivre son avancée en âge.',
      detailPage: '/programmes-pleine-conscience',
    },
    {
      id: 'autres',
      icon: Sparkles,
      title: 'Structures & financeurs',
      description: 'Conférences, ateliers et formations pour les seniors, les aidants et les professionnels qui les accompagnent.',
      detailPage: '/structures',
    }
  ];

  return (
    <ParallaxSection 
      videoSrc="/background.mp4" 
      className="py-24 min-h-screen"
      overlayOpacity={0.25}
    >
      <div className="flex flex-col items-center justify-center w-full">

        {/* Header Centré au-dessus */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-[#fffcea] text-5xl md:text-7xl font-bold mb-6 font-heading leading-[0.95] drop-shadow-lg">
            Mes accompagnements
          </h2>
          <div className="w-24 h-1 bg-[#fffcea]/30 mb-8 mx-auto"></div>
          <p className="text-[#fffcea]/90 text-xl font-light leading-relaxed" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
            Comprendre et piloter son cerveau, seul, en groupe ou au sein de votre structure.
          </p>
        </div>

        {/* Cards Grid - 2 colonnes pour la lisibilité */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto px-4 md:px-0">
          {services.map((service) => (
            <div key={service.id} className="h-full">
              <ServiceCard
                service={service}
                variant="on-video"
              />
            </div>
          ))}
        </div>

        {/* Bouton centré sous les cartes */}
        <div className="w-full flex justify-center mt-4">
          <GlassButton to="/services" icon={ArrowRight}>
            Tous les services
          </GlassButton>
        </div>

      </div>
    </ParallaxSection>
  );
};

export default ServicesPreview;
