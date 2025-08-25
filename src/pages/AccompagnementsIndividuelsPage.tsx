import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';
import { individualServices } from './servicesData';
import ServiceCard from '../components/ServiceCard';
import VideoCTA from '../components/VideoCTA';

const AccompagnementsIndividuelsPage: React.FC = () => {
  return (
    <div className="services-page">
      <section className="hero-services">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <h1>Accompagnements individuels</h1>
        </div>
      </section>

      <section id="individuels" className="section services-section">
        <div className="container">
          <div className="section-header">
            <h1>1. Accompagnements individuels</h1>
            <p>Un accompagnement sur mesure pour une santé de qualité, une vie optimisée et une pleine conscience au quotidien. </p>
          </div>
          <div className="services-grid">
            {individualServices.map(service => (
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

export default AccompagnementsIndividuelsPage;
