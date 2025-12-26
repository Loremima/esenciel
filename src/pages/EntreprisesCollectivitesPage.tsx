import React from 'react';
import { otherFormats } from './servicesData';
import ServiceCard from '../components/ServiceCard';
import VideoCTA from '../components/VideoCTA';
import ParallaxSection from '../components/ParallaxSection';

const EntreprisesCollectivitesPage: React.FC = () => {
  const primaryDark = '#1F2937';

  return (
    <div className="entreprises-collectivites-page">
      <ParallaxSection 
        videoSrc="/background.mp4" 
        className="hero-entreprises min-h-[60vh]"
        overlayOpacity={0.4}
      >
        <div className="hero-content text-center">
          <h1>Entreprises & collectivités</h1>
          <p className="hero-subtitle">
            Offrir des espaces pour ralentir, respirer et se recentrer au sein de votre structure ou collectivité.
          </p>
        </div>
      </ParallaxSection>

      <section id="autres" className="section bg-[#fffcea]">
        <div className="container flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center mb-20 w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: primaryDark }}>Nos Interventions</h2>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Des formats adaptés aux enjeux de la qualité de vie au travail et de la prévention santé.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {otherFormats.map(service => (
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
        title="Un projet sur-mesure ?"
        subtitle="Contactez-moi pour concevoir ensemble une intervention adaptée aux besoins de vos équipes."
        buttonText="Demander un devis"
        buttonLink="/contact-reservation"
      />
    </div>
  );
};

export default EntreprisesCollectivitesPage;
