import React from 'react';
import { Link } from 'react-router-dom';
import { individualServices, groupServices, collectivePrograms, otherFormats } from '../pages/servicesData';
import ServiceCard from '../components/ServiceCard';
import { useSlowMoVideo } from '../hooks/useSlowMoVideo';

const ServicesPage: React.FC = () => {
  const videoRef = useSlowMoVideo();
  return (
    <div className="services-page">
      {/* Hero Section avec vidéo de fond (aligné sur Blog/Infos) */}
      <section className="hero-services">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/background.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Paysage serein - MindWayLife"
          />
        </video>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <h1>Mes services</h1>
          <p className="hero-subtitle services-hero-subtitle">
            Une approche personnalisée pour votre épanouissement et votre bien-être
          </p>
        </div>
      </section>

      {/* Accompagnements individuels */}
      <section id="individuels" className="section services-section">
        <div className="container">
          <div className="section-header">
            <h1>Accompagnements individuels</h1>
            <p>Un accompagnement sur mesure pour une santé de qualité, une vie optimisée et une pleine conscience au quotidien. </p>
          </div>
          <div className="services-grid">
            {individualServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Accompagnements groupe */}
      <section id="groupes" className="section services-section alt parallax-surface">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="parallax-video"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
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

      {/* Programmes collectifs */}
      <section id="programmes" className="section services-section">
        <div className="container">
          <div className="section-header">
            <h1>Programmes de pleine conscience</h1>
            <p>Programmes structurés et scientifiquement validés</p>
          </div>
          <div className="services-grid">
            {collectivePrograms.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Offres pour entreprises & collectivités */}
      <section id="autres" className="section services-section alt parallax-surface">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="parallax-video"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="section-header">
            <h1>Offres pour entreprises & collectivités</h1>
            <p>Ateliers éducation à la santé /conférences pour entreprises et collectivités.</p>
          </div>
          <div className="services-grid">
            {otherFormats.map(service => (
              <ServiceCard key={service.id} service={service} isHighlight={service.highlight} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;