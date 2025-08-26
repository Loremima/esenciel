import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';
import { groupServices } from './servicesData';
import ServiceCard from '../components/ServiceCard';
import VideoCTA from '../components/VideoCTA';

const AccompagnementsGroupePage: React.FC = () => {
  return (
    <div className="services-page">
      <section className="hero-services">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <h1>Accompagnements groupe</h1>
        </div>
      </section>

      <section id="groupes" className="section services-section">
        <div className="container">
          <div className="section-header">
            <h1>Accompagnements groupe</h1>
            <p>Expérience collective enrichissante</p>
          </div>
          <div className="services-grid">
            {groupServices.map(service => (
              <ServiceCard key={service.id} service={service} isHighlight={service.highlight} />
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

export default AccompagnementsGroupePage;
