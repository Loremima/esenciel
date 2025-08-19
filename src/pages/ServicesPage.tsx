import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Sparkles, ArrowRight, Clock, Users, Euro, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'sante',
      icon: Heart,
      title: 'Santé & Qualité de Vie',
      subtitle: 'Accompagnement personnalisé pour votre bien-être global',
      description: 'Devenez acteur de votre santé grâce à une approche intégrative qui prend en compte votre globalité : corps, esprit, émotions et environnement.',
      features: [
        'Bilan de santé holistique',
        'Plan personnalisé d\'actions',
        'Suivi régulier et ajustements',
        'Éducation thérapeutique',
        'Prévention et promotion de la santé'
      ],
      benefits: [
        'Amélioration de votre vitalité',
        'Gestion optimale du stress',
        'Meilleur équilibre de vie',
        'Prévention des troubles'
      ],
      duration: '1h à 1h30',
      price: 'Sur devis',
      modalities: ['Présentiel', 'Distanciel'],
      link: '/sante-qualite-vie'
    },
    {
      id: 'mindfulness',
      icon: Brain,
      title: 'Pleine Conscience',
      subtitle: 'Développez votre présence et votre écoute intérieure',
      description: 'Inspiré de la citation de Jung "Qui regarde dehors rêve, qui regarde en soi s\'éveille", cet accompagnement vous guide vers une meilleure connaissance de vous-même.',
      features: [
        'Méditation guidée',
        'Techniques de mindfulness',
        'Exercices de respiration',
        'Gestion des émotions',
        'Développement de la présence'
      ],
      benefits: [
        'Réduction du stress et anxiété',
        'Amélioration de la concentration',
        'Meilleure régulation émotionnelle',
        'Qualité de sommeil améliorée'
      ],
      duration: '45min à 1h',
      price: 'À partir de 60€',
      modalities: ['Individuel', 'Groupe', 'Distanciel'],
      link: '/pleine-conscience'
    },
    {
      id: 'tao',
      icon: Sparkles,
      title: 'Jeu du Tao',
      subtitle: 'Exploration ludique de votre potentiel en groupe',
      description: 'Une approche créative et introspective qui utilise le jeu comme vecteur de développement personnel et de découverte de soi.',
      features: [
        'Séances de groupe interactives',
        'Approche ludique et bienveillante',
        'Exploration des potentiels',
        'Dynamique de groupe enrichissante',
        'Outils concrets à emporter'
      ],
      benefits: [
        'Meilleure connaissance de soi',
        'Développement de la confiance',
        'Créativité stimulée',
        'Liens sociaux renforcés'
      ],
      duration: '4 heures',
      price: '60€ par personne',
      modalities: ['Groupe de 3 à 8 personnes'],
      link: '/jeu-du-tao',
      highlight: true
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-services">
        <div className="container">
          <div className="hero-content">
            <h1>Mes Services</h1>
            <p className="hero-subtitle">
              Une approche personnalisée pour votre épanouissement et votre bien-être
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="section services-detailed">
        <div className="container">
          <div className="services-list">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className={`service-detail-card ${service.highlight ? 'highlight' : ''}`}>
                  <div className="service-main">
                    <div className="service-header">
                      <div className="service-icon">
                        <IconComponent size={40} />
                      </div>
                      <div className="service-title-group">
                        <h2>{service.title}</h2>
                        <p className="service-subtitle">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="service-description">{service.description}</p>
                    
                    <div className="service-details-grid">
                      <div className="details-column">
                        <h4>Ce qui est inclus</h4>
                        <ul className="features-list">
                          {service.features.map((feature, i) => (
                            <li key={i} className="feature-item">
                              <CheckCircle size={16} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="details-column">
                        <h4>Bénéfices</h4>
                        <ul className="benefits-list">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="benefit-item">
                              <span className="benefit-bullet"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="service-sidebar">
                    <div className="pricing-card">
                      <h4>Informations pratiques</h4>
                      
                      <div className="pricing-detail">
                        <Clock size={18} />
                        <div>
                          <span className="detail-label">Durée</span>
                          <span className="detail-value">{service.duration}</span>
                        </div>
                      </div>
                      
                      <div className="pricing-detail">
                        <Euro size={18} />
                        <div>
                          <span className="detail-label">Tarif</span>
                          <span className="detail-value">{service.price}</span>
                        </div>
                      </div>
                      
                      <div className="pricing-detail">
                        <Users size={18} />
                        <div>
                          <span className="detail-label">Modalités</span>
                          <span className="detail-value">{service.modalities.join(', ')}</span>
                        </div>
                      </div>
                      
                      <Link to={service.link} className="btn btn-primary service-cta">
                        En savoir plus
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-services">
        <div className="container">
          <div className="cta-content">
            <h2>Besoin d'un accompagnement sur mesure ?</h2>
            <p>
              Contactez-moi pour discuter de vos besoins spécifiques. 
              Nous définirons ensemble l'approche la plus adaptée à votre situation.
            </p>
            <Link to="/contact-reservation" className="btn btn-secondary">
              Prendre rendez-vous
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-page {
          padding-top: 80px;
        }

        .hero-services {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: var(--color-white);
          padding: var(--spacing-16) 0;
          text-align: center;
        }

        .hero-content h1 {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-4);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin: 0 auto;
        }

        .services-detailed {
          background: var(--color-white);
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-12);
        }

        .service-detail-card {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-10);
          padding: var(--spacing-10);
          background: var(--color-gray-50);
          border-radius: var(--radius-2xl);
          transition: all var(--transition-normal);
          position: relative;
        }

        .service-detail-card.highlight {
          background: linear-gradient(135deg, rgba(218, 165, 32, 0.1) 0%, rgba(245, 245, 220, 0.8) 100%);
          border: 2px solid rgba(218, 165, 32, 0.3);
        }

        .service-detail-card.highlight::before {
          content: 'Populaire';
          position: absolute;
          top: var(--spacing-4);
          right: var(--spacing-4);
          background: var(--color-secondary);
          color: var(--color-white);
          padding: var(--spacing-1) var(--spacing-3);
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .service-detail-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-6);
        }

        .service-icon {
          background: rgba(85, 107, 47, 0.1);
          color: var(--color-primary);
          padding: var(--spacing-4);
          border-radius: var(--radius-xl);
          flex-shrink: 0;
        }

        .service-title-group h2 {
          margin: 0 0 var(--spacing-1);
          color: var(--color-primary);
        }

        .service-subtitle {
          color: var(--color-gray-600);
          font-size: 1.1rem;
          margin: 0;
        }

        .service-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
        }

        .service-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-8);
        }

        .details-column h4 {
          margin-bottom: var(--spacing-4);
          color: var(--color-primary);
          font-size: 1.1rem;
        }

        .features-list,
        .benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          color: var(--color-gray-700);
          font-size: 0.95rem;
        }

        .feature-item svg {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          color: var(--color-gray-700);
          font-size: 0.95rem;
        }

        .benefit-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-secondary);
          flex-shrink: 0;
        }

        .service-sidebar {
          display: flex;
          flex-direction: column;
        }

        .pricing-card {
          background: var(--color-white);
          border-radius: var(--radius-xl);
          padding: var(--spacing-6);
          box-shadow: var(--shadow-md);
          position: sticky;
          top: 100px;
        }

        .pricing-card h4 {
          margin-bottom: var(--spacing-6);
          color: var(--color-primary);
          text-align: center;
        }

        .pricing-detail {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-4);
          padding-bottom: var(--spacing-4);
          border-bottom: 1px solid var(--color-gray-200);
        }

        .pricing-detail:last-of-type {
          border-bottom: none;
          margin-bottom: var(--spacing-6);
        }

        .pricing-detail svg {
          color: var(--color-secondary);
          flex-shrink: 0;
        }

        .detail-label {
          display: block;
          font-size: 0.85rem;
          color: var(--color-gray-600);
          font-weight: 500;
        }

        .detail-value {
          display: block;
          font-size: 1rem;
          color: var(--color-gray-800);
          font-weight: 600;
        }

        .service-cta {
          width: 100%;
          justify-content: center;
        }

        .cta-services {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
          text-align: center;
        }

        .cta-content h2 {
          margin-bottom: var(--spacing-4);
          color: var(--color-primary);
        }

        .cta-content p {
          font-size: 1.2rem;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 1024px) {
          .service-detail-card {
            grid-template-columns: 1fr;
            gap: var(--spacing-6);
          }

          .service-details-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-6);
          }

          .pricing-card {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .service-detail-card {
            padding: var(--spacing-6);
          }

          .service-header {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-3);
          }

          .pricing-card {
            padding: var(--spacing-4);
          }

          .service-details-grid {
            gap: var(--spacing-4);
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;