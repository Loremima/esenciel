import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';
import { collectivePrograms } from './servicesData';
import ServiceCard from '../components/ServiceCard';

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

export default ProgramsPage;