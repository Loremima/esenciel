import React from 'react';
import { collectivePrograms } from './servicesData';
import ServiceCard from '../components/ServiceCard';
import VideoCTA from '../components/VideoCTA';

const ProgramsPage: React.FC = () => {
  return (
    <div className="services-page">
      <section className="hero-services">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <h1>Programmes de pleine conscience</h1>
          <p className="hero-subtitle">Programmes structurés et scientifiquement validés</p>
        </div>
      </section>

      <section id="programmes" className="section services-section">
        <div className="container">
          <div className="section-header">
            <h1>3. Programmes de pleine conscience</h1>
            <p>Programmes structurés et scientifiquement validés</p>
          </div>
          <div className="services-grid">
            {collectivePrograms.map(service => (
              <ServiceCard key={service.id} service={service} />
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