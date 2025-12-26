import React from 'react';
import { individualServices } from './servicesData';
import ServiceCard from '../components/ServiceCard';
import VideoCTA from '../components/VideoCTA';
import ParallaxSection from '../components/ParallaxSection';

const AccompagnementsIndividuelsPage: React.FC = () => {
  const primaryDark = '#1F2937';

  return (
    <div className="accompagnements-individuels-page">
      <ParallaxSection 
        videoSrc="/background.mp4" 
        className="hero-individuel min-h-[60vh]"
        overlayOpacity={0.4}
      >
        <div className="hero-content text-center">
          <h1>Accompagnement Individuel</h1>
          <p className="hero-subtitle">
            Un suivi personnalisé pour une santé de qualité, une vie optimisée et une pleine conscience au quotidien.
          </p>
        </div>
      </ParallaxSection>

      <section id="individuels" className="section bg-[#fffcea]">
        <div className="container flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center mb-20 w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: primaryDark }}>Nos Accompagnements</h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Découvrez comment je peux vous aider à retrouver votre équilibre.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {individualServices.map(service => (
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
        title="Prêt(e) pour un changement ?"
        subtitle="Commencez votre voyage vers une version plus sereine et vitalisée de vous-même."
        buttonText="Réserver un bilan"
        buttonLink="https://esenciel.setmore.com"
      />
    </div>
  );
};

export default AccompagnementsIndividuelsPage;
