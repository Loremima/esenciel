import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Sparkles, ArrowRight, Users } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      id: 'individuels',
      icon: Heart,
      title: 'Accompagnements individuels',
      description: 'Un suivi personnalisé pour explorer vos besoins, renforcer votre équilibre et devenir acteur de votre santé.',
      link: '/services#individuels',
    },
    {
      id: 'groupes',
      icon: Users,
      title: 'Accompagnements de groupe',
      description: 'Des expériences collectives enrichissantes pour grandir ensemble, partager et apprendre dans un cadre bienveillant.',
      link: '/services#groupes',
    },
    {
      id: 'programmes',
      icon: Brain,
      title: 'Programmes MBSR / MBCT',
      description: 'Des protocoles structurés basés sur la pleine conscience pour la réduction du stress et la prévention de la rechute dépressive.',
      link: '/services#programmes',
    },
    {
      id: 'autres',
      icon: Sparkles,
      title: 'Autres formats',
      description: 'Ateliers thématiques, retraites et interventions sur mesure pour explorer la pleine conscience sous différents angles.',
      link: '/services#autres',
    }
  ];

  return (
    <section className="section services-preview">
      <div className="container section-inner">
        <div className="section-header">
          <h2>Mes Services</h2>
          <p className="section-subtitle">
            Une approche holistique pour votre bien-être et votre développement personnel
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

      <style jsx>{`
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
          font-size: clamp(2rem, 4vw, 2.5rem);
          letter-spacing: -0.01em;
          color: var(--color-white);
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin: 0 auto;
          text-shadow: 0 1px 5px rgba(0,0,0,0.3);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-6);
          margin-bottom: var(--spacing-12);
          max-width: 900px;
          margin: 0 auto;
          justify-items: center;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border-radius: var(--radius-xl);
          padding: var(--spacing-6);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 350px;
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
          text-align: center;
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
          background: rgba(255, 255, 255, 0.95);
          color: var(--color-primary);
          border: 1px solid transparent;
          font-weight: 600;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .section-cta .btn:hover {
          background: var(--color-white);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-6);
          }

          .service-card {
            padding: var(--spacing-6);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesPreview;