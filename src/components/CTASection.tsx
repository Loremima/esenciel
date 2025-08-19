import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Prêt(e) à commencer votre transformation ?</h2>
            <p className="cta-description">
              Prenez rendez-vous pour un premier entretien personnalisé.
              Ensemble, nous définirons l'accompagnement le plus adapté à vos besoins et objectifs.
            </p>

            <div className="cta-features">
              <div className="cta-feature">
                <Calendar className="feature-icon" />
                <div>
                  <h4>Premier entretien offert</h4>
                  <p>30 minutes pour faire connaissance</p>
                </div>
              </div>
              <div className="cta-feature">
                <MessageCircle className="feature-icon" />
                <div>
                  <h4>Échange personnalisé</h4>
                  <p>Définition de vos objectifs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-actions">
            <Link to="/contact-reservation" className="btn btn-primary cta-primary">
              Prendre rendez-vous
              <ArrowRight size={18} />
            </Link>
            <p className="cta-note">
              Consultations en présentiel à Vaureilles ou en distanciel
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          background: #fffcea;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .cta-section::before { display: none; }

        .cta-content {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-12);
          align-items: center;
        }

        .cta-text h2 {
          margin-bottom: var(--spacing-6);
          color: var(--color-primary);
          font-size: clamp(2rem, 4vw, 2.5rem);
        }

        .cta-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
        }

        .cta-features {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }

        .cta-feature {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          padding: var(--spacing-4);
          background: var(--color-white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
        }

        .cta-feature:hover {
          box-shadow: var(--shadow-md);
        }

        .feature-icon {
          color: var(--color-secondary);
          background: rgba(218, 165, 32, 0.1);
          padding: var(--spacing-2);
          border-radius: var(--radius-md);
          flex-shrink: 0;
        }

        .cta-feature h4 {
          margin: 0 0 var(--spacing-1);
          font-size: 1rem;
          color: var(--color-primary);
        }

        .cta-feature p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-gray-600);
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-6);
          text-align: center;
        }

        .cta-primary {
          font-size: 1.2rem;
          padding: var(--spacing-4) var(--spacing-8);
          box-shadow: var(--shadow-xl);
        }

        .cta-primary:hover {
          box-shadow: 0 25px 50px -12px rgba(85, 107, 47, 0.5);
        }

        .cta-note {
          color: var(--color-gray-600);
          font-size: 0.95rem;
          font-style: italic;
          max-width: 300px;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .cta-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .cta-features {
            gap: var(--spacing-3);
          }

          .cta-feature {
            padding: var(--spacing-3);
          }

          .cta-primary {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;