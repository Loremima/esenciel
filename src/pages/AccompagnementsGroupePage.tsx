import React from 'react';
import { groupServices } from './servicesData';
import ServiceCard from '../components/ServiceCard';
import VideoCTA from '../components/VideoCTA';

const AccompagnementsGroupePage: React.FC = () => {
  const primaryDark = '#1F2937';

  return (
    <div className="accompagnements-groupe-page">
      <section id="groupes" className="section bg-[#fffcea] pt-32">
        <div className="container flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center mb-20 w-full">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading" style={{ color: primaryDark }}>Accompagnement Groupe</h1>
            <p className="text-stone-600 text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Une dynamique de partage et d'entraide pour évoluer ensemble vers un mieux-être durable.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-xl w-full">
              {groupServices.map(service => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isHighlight={service.highlight}
                  variant="on-nude"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <VideoCTA
        title="L'aventure vous tente ?"
        subtitle="Rejoignez un groupe pour vivre une expérience humaine riche et transformatrice."
        buttonText="Réserver ma place"
        buttonLink="https://esenciel.setmore.com"
      />
    </div>
  );
};

export default AccompagnementsGroupePage;
