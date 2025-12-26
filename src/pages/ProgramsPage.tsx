import React from 'react';
import { collectivePrograms } from './servicesData';
import ServiceCard from '../components/ServiceCard';
import VideoCTA from '../components/VideoCTA';
import ParallaxSection from '../components/ParallaxSection';

const ProgramsPage: React.FC = () => {
  return (
    <div className="services-page">
      <ParallaxSection 
        videoSrc="/background.mp4" 
        className="hero-services min-h-[60vh]"
        overlayOpacity={0.4}
      >
        <div className="hero-content text-center">
          <h1>Programmes de pleine conscience</h1>
          <p className="hero-subtitle">Programmes structurés et scientifiquement validés</p>
        </div>
      </ParallaxSection>

      <section id="programmes" className="section services-section bg-[#fffcea]">
        <div className="container">
          <div className="section-header">
            <h1>Programmes de pleine conscience</h1>
            <p>Programmes structurés et scientifiquement validés</p>
          </div>
          <div className="services-grid grid md:grid-cols-3 gap-8">
            {collectivePrograms.map(service => (
              <ServiceCard key={service.id} service={service} variant="on-nude" />
            ))}
          </div>
        </div>
      </section>

      <VideoCTA
        title="Prêt(e) à transformer votre quotidien ?"
        subtitle="Contactez-moi pour discuter de vos besoins et trouver l'accompagnement qui vous correspond le mieux."
        buttonText="Prendre rendez-vous"
        buttonLink="/contact-reservation"
      />
    </div>
  );
};

export default ProgramsPage;