import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Heart, Brain, Sparkles, ArrowRight, Clock, Users, Euro, CheckCircle, Phone, Calendar } from 'lucide-react';

interface ServiceDetailPageProps {
  service: 'sante' | 'mindfulness' | 'tao';
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service }) => {
  const serviceData = {
    sante: {
      icon: Heart,
      title: 'Santé & Qualité de Vie',
      subtitle: 'Accompagnement personnalisé pour devenir acteur de votre santé',
      hero: 'https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg',
      description: 'Une approche intégrative qui vous accompagne vers une meilleure qualité de vie en prenant en compte votre globalité : physique, émotionnelle, mentale et environnementale.',
      longDescription: `
        Cet accompagnement s'adresse à toute personne souhaitant prendre en main sa santé de manière proactive et éclairée. 
        Basé sur les dernières recherches en psychologie de la santé et neurosciences, il combine évaluation personnalisée, 
        éducation thérapeutique et mise en place d'actions concrètes.
        
        L'objectif est de vous rendre autonome dans la gestion de votre bien-être, en développant vos ressources personnelles 
        et en identifiant les leviers d'action les plus efficaces pour votre situation unique.
      `,
      process: [
        'Bilan de santé holistique approfondi',
        'Identification de vos objectifs et priorités',
        'Élaboration d\'un plan d\'action personnalisé',
        'Accompagnement dans la mise en œuvre',
        'Suivi régulier et ajustements'
      ],
      benefits: [
        'Amélioration durable de votre vitalité',
        'Gestion optimisée du stress et des émotions',
        'Développement de saines habitudes de vie',
        'Prévention des troubles de santé',
        'Autonomie dans la gestion de votre bien-être'
      ],
      duration: '1h à 1h30 par séance',
      price: 'À partir de 80€',
      frequency: 'Selon vos besoins',
      modalities: ['Cabinet à Cransac-les-Thermes', 'Visioconférence']
    },
    mindfulness: {
      icon: Brain,
      title: 'Pleine Conscience',
      subtitle: 'Développez votre présence et votre écoute intérieure',
      hero: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
      description: 'Inspiré de la sagesse de Jung "Qui regarde dehors rêve, qui regarde en soi s\'éveille", cet accompagnement vous guide vers une meilleure connaissance de vous-même.',
      longDescription: `
        La pleine conscience (mindfulness) est une pratique millénaire validée scientifiquement qui consiste à porter 
        attention au moment présent avec bienveillance. Cette approche vous permet de développer une relation différente 
        avec vos pensées, émotions et sensations.
        
        Que vous souhaitiez gérer le stress, améliorer votre concentration, ou simplement cultiver plus de paix intérieure, 
        ces techniques s'adaptent à votre rythme et vos objectifs personnels.
      `,
      process: [
        'Découverte des fondements de la pleine conscience',
        'Pratiques de méditation guidée adaptées',
        'Techniques de respiration consciente',
        'Exercices d\'observation bienveillante',
        'Intégration dans votre quotidien'
      ],
      benefits: [
        'Réduction significative du stress et de l\'anxiété',
        'Amélioration de la concentration et clarté mentale',
        'Meilleure régulation émotionnelle',
        'Qualité de sommeil améliorée',
        'Développement de la compassion envers soi'
      ],
      duration: '45min à 1h par séance',
      price: 'À partir de 60€',
      frequency: 'Hebdomadaire puis adaptée',
      modalities: ['Séances individuelles', 'Groupes', 'En ligne']
    },
    tao: {
      icon: Sparkles,
      title: 'Jeu du Tao',
      subtitle: 'Exploration ludique et créative de votre potentiel',
      hero: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      description: 'Une approche unique qui utilise le jeu comme vecteur de développement personnel et de découverte de soi, dans un cadre de groupe bienveillant.',
      longDescription: `
        Le Jeu du Tao est une méthode innovante qui combine ludisme et introspection pour révéler votre potentiel unique. 
        Dans un cadre de groupe sécurisant, vous explorez différentes facettes de votre personnalité à travers des activités 
        créatives et des exercices de développement personnel.
        
        Cette approche favorise la spontanéité, la créativité et les échanges enrichissants avec les autres participants, 
        tout en respectant le rythme et les limites de chacun.
      `,
      process: [
        'Accueil et présentation du cadre bienveillant',
        'Échauffement créatif et mise en confiance',
        'Exploration guidée à travers différents jeux',
        'Temps de partage et d\'échanges',
        'Synthèse et ancrage des découvertes'
      ],
      benefits: [
        'Meilleure connaissance de vos ressources',
        'Développement de la confiance en soi',
        'Stimulation de votre créativité naturelle',
        'Renforcement des liens sociaux',
        'Outils concrets pour votre quotidien'
      ],
      duration: '4 heures (avec pause)',
      price: '60€ par personne',
      frequency: 'Séances ponctuelles',
      modalities: ['Groupe de 3 à 8 personnes', 'Présentiel uniquement']
    }
  };

  const currentService = serviceData[service];
  const IconComponent = currentService.icon;

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="hero-service-detail">
        <div className="hero-background">
          <img src={currentService.hero} alt={currentService.title} />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="service-icon-large">
                <IconComponent size={60} />
              </div>
              <h1>{currentService.title}</h1>
              <p className="hero-subtitle">{currentService.subtitle}</p>
              <p className="hero-description">{currentService.description}</p>
              <Link to="/contact-reservation" className="btn btn-secondary">
                Réserver une séance
                <Calendar size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu détaillé */}
      <section className="section service-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <h2>En quoi consiste cet accompagnement ?</h2>
              <div className="text-content">
                {currentService.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>

              <h3>Déroulement des séances</h3>
              <div className="process-list">
                {currentService.process.map((step, index) => (
                  <div key={index} className="process-step">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">
                      <p>{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3>Bénéfices attendus</h3>
              <div className="benefits-grid">
                {currentService.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <CheckCircle size={20} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="sidebar">
              <div className="info-card">
                <h3>Informations pratiques</h3>
                
                <div className="info-item">
                  <Clock size={20} />
                  <div>
                    <span className="info-label">Durée</span>
                    <span className="info-value">{currentService.duration}</span>
                  </div>
                </div>

                <div className="info-item">
                  <Euro size={20} />
                  <div>
                    <span className="info-label">Tarif</span>
                    <span className="info-value">{currentService.price}</span>
                  </div>
                </div>

                <div className="info-item">
                  <Users size={20} />
                  <div>
                    <span className="info-label">Modalités</span>
                    <span className="info-value">{currentService.modalities.join(', ')}</span>
                  </div>
                </div>

                <div className="cta-buttons">
                  <Link to="/contact-reservation" className="btn btn-primary">
                    Prendre rendez-vous
                    <ArrowRight size={16} />
                  </Link>
                  <a href="tel:+33XXXXXXXXX" className="btn btn-outline">
                    <Phone size={16} />
                    Appeler
                  </a>
                </div>
              </div>

              {/* Autres services */}
              <div className="related-services">
                <h4>Autres services</h4>
                <div className="related-links">
                  {service !== 'sante' && (
                    <Link to="/sante-qualite-vie" className="related-link">
                      Santé & Qualité de Vie
                    </Link>
                  )}
                  {service !== 'mindfulness' && (
                    <Link to="/pleine-conscience" className="related-link">
                      Pleine Conscience
                    </Link>
                  )}
                  {service !== 'tao' && (
                    <Link to="/jeu-du-tao" className="related-link">
                      Jeu du Tao
                    </Link>
                  )}
                  <Link to="/programmes-mbsr-mbct" className="related-link">
                    Programmes MBSR/MBCT
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-detail-page {
          padding-top: 80px;
        }

        .hero-service-detail {
          position: relative;
          min-height: 60vh;
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

        .hero-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(85, 107, 47, 0.8) 0%,
            rgba(85, 107, 47, 0.6) 100%
          );
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-text {
          max-width: 600px;
          color: var(--color-white);
        }

        .service-icon-large {
          background: rgba(218, 165, 32, 0.2);
          color: var(--color-secondary);
          padding: var(--spacing-4);
          border-radius: var(--radius-xl);
          width: fit-content;
          margin-bottom: var(--spacing-4);
        }

        .hero-text h1 {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-3);
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--spacing-4);
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: var(--spacing-6);
        }

        .service-content {
          background: var(--color-white);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-12);
        }

        .main-content h2 {
          margin-bottom: var(--spacing-6);
          color: var(--color-primary);
        }

        .main-content h3 {
          margin: var(--spacing-8) 0 var(--spacing-4);
          color: var(--color-primary);
        }

        .text-content p {
          line-height: 1.7;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-4);
        }

        .process-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-8);
        }

        .process-step {
          display: flex;
          gap: var(--spacing-4);
          align-items: flex-start;
        }

        .step-number {
          background: var(--color-secondary);
          color: var(--color-white);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }

        .step-content p {
          margin: 0;
          color: var(--color-gray-700);
          line-height: 1.5;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-3);
        }

        .benefit-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding: var(--spacing-3);
          background: rgba(85, 107, 47, 0.05);
          border-radius: var(--radius-lg);
          color: var(--color-gray-700);
          transition: all var(--transition-normal);
        }

        .benefit-card:hover {
          background: rgba(85, 107, 47, 0.1);
          transform: translateX(4px);
        }

        .benefit-card svg {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-6);
        }

        .info-card {
          background: var(--color-gray-50);
          border-radius: var(--radius-2xl);
          padding: var(--spacing-8);
          position: sticky;
          top: 100px;
        }

        .info-card h3 {
          margin-bottom: var(--spacing-6);
          color: var(--color-primary);
          text-align: center;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-6);
          padding-bottom: var(--spacing-4);
          border-bottom: 1px solid var(--color-gray-200);
        }

        .info-item:last-of-type {
          border-bottom: none;
          margin-bottom: var(--spacing-8);
        }

        .info-item svg {
          color: var(--color-secondary);
          flex-shrink: 0;
        }

        .info-label {
          display: block;
          font-size: 0.9rem;
          color: var(--color-gray-600);
          font-weight: 500;
        }

        .info-value {
          display: block;
          font-size: 1rem;
          color: var(--color-gray-800);
          font-weight: 600;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
        }

        .related-services {
          background: var(--color-white);
          border-radius: var(--radius-xl);
          padding: var(--spacing-6);
          box-shadow: var(--shadow-md);
        }

        .related-services h4 {
          margin-bottom: var(--spacing-4);
          color: var(--color-primary);
          text-align: center;
        }

        .related-links {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .related-link {
          padding: var(--spacing-3);
          color: var(--color-gray-700);
          text-decoration: none;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
          text-align: center;
        }

        .related-link:hover {
          background: rgba(85, 107, 47, 0.1);
          color: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
          }

          .info-card {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .hero-text {
            text-align: center;
          }

          .info-card {
            padding: var(--spacing-6);
          }

          .cta-buttons {
            gap: var(--spacing-2);
          }

          .benefits-grid {
            gap: var(--spacing-2);
          }

          .benefit-card {
            padding: var(--spacing-2);
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailPage;