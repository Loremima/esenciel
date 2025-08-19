import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img
          src="https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg"
          alt="Séance de méditation en pleine nature"
          className="hero-image"
        />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Accompagnement personnalisé</span>
            </div>
            
            <h1 className="hero-title">
              Devenez acteur de votre 
              <span className="highlight"> santé et bien-être</span>
            </h1>
            
            <p className="hero-description">
              Psychologue clinicienne et instructrice certifiée en programmes de 
              pleine conscience MBSR/MBCT. Une approche intégrative pour votre 
              épanouissement personnel et votre autonomie en santé.
            </p>
            
            <div className="hero-actions">
              <Link to="/contact-reservation" className="btn btn-primary">
                Prendre rendez-vous
                <ArrowRight size={18} />
              </Link>
              <Link to="/qui-suis-je" className="btn btn-outline">
                Découvrir mon approche
              </Link>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Années d'expérience</span>
              </div>
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Personnes accompagnées</span>
              </div>
              <div className="stat">
                <span className="stat-number">MBSR</span>
                <span className="stat-label">Instructrice certifiée</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card">
              <img
                src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
                alt="Véronique Carrié, psychologue et coach bien-être"
                className="hero-portrait"
              />
              <div className="card-content">
                <h3>Véronique Carrié</h3>
                <p>Psychologue clinicienne<br />Spécialisée en neuropsychologie</p>
                <div className="credentials">
                  <span className="credential">Instructrice MBSR</span>
                  <span className="credential">Coach certifiée</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -2;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.3;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(245, 245, 220, 0.9) 0%,
            rgba(245, 245, 220, 0.8) 50%,
            rgba(218, 165, 32, 0.1) 100%
          );
          z-index: -1;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-12);
          align-items: center;
          padding: var(--spacing-8) 0;
        }

        .hero-text {
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-2);
          background: rgba(218, 165, 32, 0.1);
          color: var(--color-secondary-dark);
          padding: var(--spacing-2) var(--spacing-4);
          border-radius: var(--radius-xl);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: var(--spacing-6);
          border: 1px solid rgba(218, 165, 32, 0.2);
        }

        .hero-title {
          margin-bottom: var(--spacing-6);
          line-height: 1.1;
        }

        .highlight {
          background: linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-10);
        }

        .hero-stats {
          display: flex;
          gap: var(--spacing-8);
          padding-top: var(--spacing-6);
          border-top: 1px solid rgba(85, 107, 47, 0.2);
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--color-gray-600);
          font-weight: 500;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-card {
          background: var(--color-white);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-xl);
          overflow: hidden;
          max-width: 350px;
          transition: all var(--transition-normal);
        }

        .hero-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .hero-portrait {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        .card-content {
          padding: var(--spacing-6);
        }

        .card-content h3 {
          margin-bottom: var(--spacing-2);
          color: var(--color-primary);
        }

        .card-content p {
          color: var(--color-gray-600);
          margin-bottom: var(--spacing-4);
          line-height: 1.5;
        }

        .credentials {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .credential {
          background: rgba(85, 107, 47, 0.1);
          color: var(--color-primary);
          padding: var(--spacing-1) var(--spacing-3);
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 500;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
            text-align: center;
          }

          .hero-visual {
            order: -1;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 90vh;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            flex-direction: column;
            gap: var(--spacing-4);
          }

          .stat {
            padding: var(--spacing-3);
            background: rgba(255, 255, 255, 0.8);
            border-radius: var(--radius-lg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;