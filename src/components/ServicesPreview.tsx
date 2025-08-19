import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Sparkles, ArrowRight, Clock, Users, Euro } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      id: 'sante',
      icon: Heart,
      title: 'Santé & Qualité de Vie',
      description: 'Accompagnement personnalisé pour devenir acteur de votre santé. Approche intégrative corps-esprit.',
      features: ['Bilan de santé global', 'Plan personnalisé', 'Suivi régulier'],
      link: '/sante-qualite-vie',
      color: 'primary'
    },
    {
      id: 'mindfulness',
      icon: Brain,
      title: 'Pleine Conscience',
      description: 'Développez votre présence et votre écoute intérieure grâce aux techniques de mindfulness.',
      features: ['Méditation guidée', 'Techniques MBSR', 'Gestion du stress'],
      link: '/pleine-conscience',
      color: 'secondary'
    },
    {
      id: 'tao',
      icon: Sparkles,
      title: 'Jeu du Tao',
      description: 'Séances de groupe pour explorer votre potentiel à travers une approche ludique et introspective.',
      features: ['4h en groupe', '60€/personne', 'Min 3 participants'],
      link: '/jeu-du-tao',
      color: 'accent',
      price: '60€',
      duration: '4h',
      groupSize: '3-8 personnes'
    }
  ];

  return (
    <section className="section services-preview">
      <div className="container">
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
              <div key={service.id} className={`service-card ${service.color}`}>
                <div className="service-header">
                  <div className="service-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3>{service.title}</h3>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-bullet"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.price && (
                  <div className="service-details">
                    <div className="detail-item">
                      <Euro size={16} />
                      <span>{service.price}</span>
                    </div>
                    <div className="detail-item">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="detail-item">
                      <Users size={16} />
                      <span>{service.groupSize}</span>
                    </div>
                  </div>
                )}
                
                <Link to={service.link} className="service-link">
                  En savoir plus
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
          background: linear-gradient(135deg, var(--color-white) 0%, var(--color-gray-50) 100%);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-12);
        }

        .section-header h2 {
          margin-bottom: var(--spacing-4);
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--color-gray-600);
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-8);
          margin-bottom: var(--spacing-12);
        }

        .service-card {
          background: var(--color-white);
          border-radius: var(--radius-2xl);
          padding: var(--spacing-8);
          box-shadow: var(--shadow-lg);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
        }

        .service-card.secondary::before {
          background: linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light));
        }

        .service-card.accent::before {
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-6);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(85, 107, 47, 0.1);
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .secondary .service-icon {
          background: rgba(218, 165, 32, 0.1);
          color: var(--color-secondary);
        }

        .service-header h3 {
          margin: 0;
          flex: 1;
        }

        .service-description {
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
          line-height: 1.6;
        }

        .service-features {
          list-style: none;
          margin-bottom: var(--spacing-6);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding: var(--spacing-2) 0;
          color: var(--color-gray-700);
        }

        .feature-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-secondary);
          flex-shrink: 0;
        }

        .service-details {
          display: flex;
          justify-content: space-between;
          gap: var(--spacing-2);
          margin-bottom: var(--spacing-6);
          padding: var(--spacing-4);
          background: rgba(85, 107, 47, 0.05);
          border-radius: var(--radius-lg);
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-1);
          font-size: 0.9rem;
          color: var(--color-gray-600);
          font-weight: 500;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-2);
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 600;
          padding: var(--spacing-3) var(--spacing-4);
          border-radius: var(--radius-lg);
          background: rgba(85, 107, 47, 0.1);
          transition: all var(--transition-normal);
        }

        .service-link:hover {
          background: var(--color-primary);
          color: var(--color-white);
          transform: translateX(4px);
        }

        .section-cta {
          text-align: center;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
            text-align: center;
          }

          .hero-visual {
            order: -1;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-6);
          }

          .service-card {
            padding: var(--spacing-6);
          }

          .service-details {
            flex-direction: column;
            gap: var(--spacing-2);
          }

          .detail-item {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesPreview;