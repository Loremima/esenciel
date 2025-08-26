import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';
import { collectivePrograms } from './servicesData';
import ServiceCard from '../components/ServiceCard';
import VideoCTA from '../components/VideoCTA';

const ProgrammesPleineConsciencePage: React.FC = () => {
  return (
    <div className="services-page">
      <section className="hero-services">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <h1>Programmes de pleine conscience</h1>
        </div>
      </section>

      <section id="programmes" className="section services-section">
        <div className="container programmes-container">
          <div className="section-header">
            <h1>Programmes de pleine conscience</h1>
            <p>Programmes structurés et scientifiquement validés pour cultiver le bien-être ensemble</p>
          </div>
          <div className="services-grid three-cols">
            {collectivePrograms.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <VideoCTA
        title="Prêt(e) à transformer votre quotidien ?"
        subtitle="Contactez-moi pour connaître les prochaines sessions et réserver votre place."
        buttonText="M'inscrire à un programme"
        buttonLink="/contact-reservation"
      />
      <style>{`
              .programmes-container { 
                max-width: 1200px; 
                width: 100%;
              }
              .programmes-container .services-grid.three-cols {
                display: grid !important;
                grid-template-columns: repeat(2, 1fr) !important;
                gap: var(--spacing-8) !important;
                width: 100%;
                justify-items: center;
              }
              .programmes-container .services-grid.three-cols > *:nth-child(3) {
                grid-column: 1 / -1 !important;
                max-width: 400px;
                justify-self: center;
              }
              .programmes-container .services-grid.three-cols .service-card { 
                width: 100%;
                max-width: 500px;
                box-sizing: border-box;
              }
              @media (max-width: 768px) {
                .programmes-container .services-grid.three-cols { 
                  grid-template-columns: 1fr !important; 
                  gap: var(--spacing-6) !important;
                }
                .programmes-container .services-grid.three-cols > *:nth-child(3) {
                  grid-column: 1 !important;
                  max-width: 100%;
                }
              }
            `}</style>
    </div>
  );
};

export default ProgrammesPleineConsciencePage;
