import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';
import { groupServices } from './servicesData';
import ServiceCard from '../components/ServiceCard';

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
          <p className="hero-subtitle">Expérience collective enrichissante</p>
        </div>
      </section>

      <section id="groupes" className="section services-section">
        <div className="container">
          <div className="section-header">
            <h1>2. Accompagnements groupe</h1>
            <p>Expérience collective enrichissante</p>
          </div>
          <div className="services-grid">
            {groupServices.map(service => (
              <ServiceCard key={service.id} service={service} isHighlight={service.highlight} />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt(e) à commencer votre parcours ?</h2>
            <p>
              Contactez-moi pour discuter de vos besoins et trouver l'accompagnement
              qui vous correspond le mieux.
            </p>
            <Link to="/contact-reservation" className="btn btn-primary">
              Prendre rendez-vous
              <CalendarDays size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccompagnementsGroupePage;
