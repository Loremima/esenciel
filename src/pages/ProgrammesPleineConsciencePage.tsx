import React from 'react';
import { collectivePrograms } from './servicesData';
import ServiceCard from '../components/ServiceCard';
import VideoCTA from '../components/VideoCTA';
import ParallaxSection from '../components/ParallaxSection';

const ProgrammesPleineConsciencePage: React.FC = () => {
  const primaryDark = '#1F2937';

  return (
    <div className="programmes-pleine-conscience-page">
      <ParallaxSection 
        videoSrc="/background.mp4" 
        className="hero-programmes min-h-[60vh]"
        overlayOpacity={0.4}
      >
        <div className="hero-content text-center">
          <h1>Programmes de pleine conscience</h1>
          <p className="hero-subtitle">
            Des parcours structurés et scientifiquement validés pour cultiver le calme et la clarté mentale ensemble.
          </p>
        </div>
      </ParallaxSection>

      <section id="programmes" className="section bg-[#fffcea]">
        <div className="container flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center mb-20 w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: primaryDark }}>Nos Cycles</h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Découvrez les programmes basés sur la pleine conscience pour transformer votre rapport au quotidien.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {collectivePrograms.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                variant="on-nude"
              />
            ))}
          </div>
        </div>
      </section>

      <VideoCTA
        title="Une pause nécessaire ?"
        subtitle="Découvrez nos prochaines dates de cycle et inscrivez-vous pour transformer votre quotidien."
        buttonText="Voir les dates"
        buttonLink="https://esenciel.setmore.com/services/c3da0ac5-1530-4576-8ad5-2e43d65c30bc"
      />
    </div>
  );
};

export default ProgrammesPleineConsciencePage;
