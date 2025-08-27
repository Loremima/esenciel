import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Sparkles, ArrowRight, Users } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      id: 'individuels',
      icon: Heart,
      title: 'Accompagnements individuels',
      description: 'Un accompagnement sur mesure pour une santé de qualité, une vie optimisée et une pleine conscience au quotidien.',
      link: '/services#individuels',
    },
    {
      id: 'groupes',
      icon: Users,
      title: 'Accompagnements de groupe',
      description: 'Accompagnement collectif avec le jeu du Tao, santé et mieux-être.',
      link: '/services#groupes',
    },
    {
      id: 'programmes',
      icon: Brain,
      title: 'Programmes de pleine conscience',
      description: 'Des protocoles structurés basés sur la pleine conscience pour la réduction du stress, la prévention de la rechute dépressive et pour bien vivre son avancée en age.',
      link: '/services#programmes',
    },
    {
      id: 'autres',
      icon: Sparkles,
      title: 'Offres pour entreprises & collectivités',
      description: 'Ateliers thématiques, retraites et interventions sur mesure pour explorer la pleine conscience sous différents angles.',
      link: '/services#autres',
    }
  ];

  return (
    <section className="section services-preview">
      <div className="container section-inner">
        <div className="section-header">
          <h2>Mes Services</h2>
          <p className="section-subtitle services-preview-subtitle">
            Une approche holistique pour devenir acteur de votre santé et de votre bien-être.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <div className="service-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3>{service.title}</h3>
                </div>

                <p className="service-description">{service.description}</p>

                <Link to={service.link} className="service-link">
                  Découvrir
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="section-cta">
          <Link to="/services" className="btn btn-outline">
            Voir tous les services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style>{`
        .services-preview {
          background: transparent;
        }

        .section-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-12);
        }

        .section-header h2 {
          margin-bottom: var(--spacing-4);
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-family: var(--font-heading);
          letter-spacing: -0.01em;
          color: #fffcea !important;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #fffcea;
          max-width: 550px;
          margin: 0 auto;
          text-shadow: 0 1px 5px rgba(0,0,0,0.3);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-8);
          margin-bottom: var(--spacing-12);
          justify-items: stretch;
        }

        .service-card {
          background: rgba(255, 252, 234, 0.95);
          backdrop-filter: blur(10px);
          border-radius: var(--radius-2xl);
          padding: var(--spacing-8);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 420px;
        }

        .service-card:hover {
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
        }

        .service-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-6);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-primary);
          color: var(--color-white);
          flex-shrink: 0;
        }

        .service-header h3 {
          margin: 0;
          flex: 1;
          font-size: 1.25rem;
        }

        .service-description {
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
          line-height: 1.6;
          flex-grow: 1;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-2);
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 600;
          padding: var(--spacing-3) var(--spacing-4);
          border-radius: var(--radius-lg);
          background: rgba(85, 107, 47, 0.1);
          transition: all var(--transition-normal);
          margin-top: auto;
        }

        .service-link:hover {
          background: var(--color-primary);
          color: var(--color-white);
        }

        .section-cta {
          text-align: center;
          width: 100%;
          margin-top: var(--spacing-8);
        }
        
        .section-cta .btn {
          background: #fffcea;
          color: var(--color-primary);
          border: 1px solid #fffcea;
          font-weight: 600;
          padding: 0.8rem 2.2rem;
          border-radius: var(--radius-lg);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .section-cta .btn:hover {
          background: transparent;
          color: #fffcea;
          border-color: #fffcea;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(300px, 1fr));
          }

          .service-card {
            padding: var(--spacing-6);
          }
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesPreview;