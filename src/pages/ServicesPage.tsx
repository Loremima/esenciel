import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Sparkles, ArrowRight, Clock, Users, Euro, CheckCircle, Award, BookOpen, Presentation, CalendarDays } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const individualServices = [
    {
      id: 'coaching-sante',
      icon: Heart,
      title: 'Coaching Santé & Qualité de vie',
      description: 'Accompagnement personnalisé pour devenir acteur de votre bien-être global.',
      duration: '1h à 1h30',
      price: 'Sur devis',
      modalities: ['Présentiel', 'Distanciel'],
      features: [
        'Bilan de santé holistique',
        'Plan personnalisé d\'actions',
        'Suivi régulier et ajustements',
        'Éducation thérapeutique'
      ]
    },
    {
      id: 'coaching-pleine-conscience',
      icon: Brain,
      title: 'Coaching Pleine conscience & qualité de présence',
      description: 'Développez votre présence et votre écoute intérieure pour une meilleure qualité de vie.',
      duration: '45min à 1h',
      price: 'Sur devis',
      modalities: ['Présentiel', 'Distanciel'],
      features: [
        'Méditation guidée',
        'Techniques de mindfulness',
        'Exercices de respiration',
        'Gestion des émotions'
      ]
    }
  ];

  const groupServices = [
    {
      id: 'jeu-du-tao',
      icon: Sparkles,
      title: 'Le Jeu du Tao',
      description: 'Une approche ludique du développement personnel qui révèle vos ressources cachées.',
      duration: '4 heures',
      price: '60€ par participant',
      modalities: ['Groupe de 4 à 5 personnes (min 3)'],
      features: [
        'Exploration créative de soi',
        'Révélation des potentiels',
        'Dynamique de groupe bienveillante',
        'Outils concrets à emporter'
      ],
      highlight: true
    }
  ];

  const collectivePrograms = [
    {
      id: 'mbsr',
      icon: Award,
      title: 'MBSR - Gestion du stress',
      subtitle: 'Mindfulness-Based Stress Reduction',
      description: 'Programme de 8 semaines pour apprendre à gérer le stress par la pleine conscience.',
      duration: '8 semaines',
      sessionDuration: '2h30 par séance',
      groupSize: '5 à 10 personnes',
      price: 'Tarif communiqué lors de l\'inscription',
      includes: [
        '8 séances de groupe',
        'Journée de retraite en silence',
        'Supports audio pour la pratique',
        'Manuel du participant'
      ]
    },
    {
      id: 'mbct',
      icon: Brain,
      title: 'MBCT - Prévention des rechutes dépressives',
      subtitle: 'Mindfulness-Based Cognitive Therapy',
      description: 'Programme combinant pleine conscience et thérapie cognitive pour prévenir les rechutes dépressives.',
      duration: '8 semaines',
      sessionDuration: '2h par séance',
      groupSize: '5 à 10 personnes',
      price: 'Tarif communiqué lors de l\'inscription',
      includes: [
        '8 séances de groupe',
        'Exercices de thérapie cognitive',
        'Pratiques de pleine conscience',
        'Suivi personnalisé'
      ]
    },
    {
      id: 'mbcas',
      icon: Users,
      title: 'MBCAS - Accompagnement seniors',
      subtitle: 'Mindfulness-Based Compassionate Aging Support',
      description: 'Programme adapté aux seniors pour un vieillissement en pleine conscience et bienveillance.',
      duration: '6 semaines',
      sessionDuration: '1h30 par séance',
      groupSize: '4 à 8 personnes',
      price: 'Tarif communiqué lors de l\'inscription',
      includes: [
        '6 séances adaptées',
        'Pratiques douces',
        'Accompagnement bienveillant',
        'Soutien de groupe'
      ]
    }
  ];

  const otherFormats = [
    {
      id: 'ateliers-education',
      icon: BookOpen,
      title: 'Ateliers en éducation à la santé',
      description: 'Ateliers thématiques pour apprendre à prendre soin de sa santé au quotidien.',
      duration: '2h à 3h',
      price: 'Sur devis selon le format',
      modalities: ['Entreprises', 'Associations', 'Particuliers']
    },
    {
      id: 'conferences',
      icon: Presentation,
      title: 'Conférences & événements publics',
      description: 'Interventions sur la pleine conscience, la santé et le bien-être.',
      duration: '1h à 2h',
      price: 'Sur devis',
      modalities: ['Conférences', 'Tables rondes', 'Événements']
    }
  ];

  const ServiceCard = ({ service, isHighlight = false }: { service: any, isHighlight?: boolean }) => {
    const IconComponent = service.icon;

    return (
      <div className={`service-card ${isHighlight ? 'highlight' : ''}`}>
        <div className="service-header">
          <div className="service-icon">
            <IconComponent size={32} />
          </div>
          <div>
            <h3>{service.title}</h3>
            {service.subtitle && <p className="service-subtitle">{service.subtitle}</p>}
          </div>
        </div>

        <p className="service-description">{service.description}</p>

        {service.features && (
          <ul className="service-features">
            {service.features.map((feature: string, index: number) => (
              <li key={index}>
                <CheckCircle size={16} />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {service.includes && (
          <ul className="service-features">
            {service.includes.map((item: string, index: number) => (
              <li key={index}>
                <CheckCircle size={16} />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="service-info">
          {service.duration && (
            <div className="info-item">
              <Clock size={16} />
              <span>{service.duration}</span>
            </div>
          )}
          {service.sessionDuration && (
            <div className="info-item">
              <Clock size={16} />
              <span>{service.sessionDuration}</span>
            </div>
          )}
          {service.groupSize && (
            <div className="info-item">
              <Users size={16} />
              <span>{service.groupSize}</span>
            </div>
          )}
          <div className="info-item">
            <Euro size={16} />
            <span>{service.price}</span>
          </div>
        </div>

        {service.modalities && (
          <div className="service-modalities">
            {service.modalities.map((modality: string, index: number) => (
              <span key={index} className="modality-tag">{modality}</span>
            ))}
          </div>
        )}

        <Link to="/contact-reservation" className="btn btn-primary">
          Réserver
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  };

  return (
    <div className="services-page">
      {/* Hero Section avec vidéo de fond (aligné sur Blog/Infos) */}
      <section className="hero-services">
        <video
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
          <p className="hero-subtitle">
            Une approche personnalisée pour votre épanouissement et votre bien-être
          </p>
        </div>
      </section>

      {/* Accompagnements individuels */}
      <section id="individuels" className="section services-section">
        <div className="container">
          <div className="section-header">
            <h1>1. Accompagnements individuels</h1>
            <p>Coaching personnalisé pour votre développement</p>
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
        <div className="container">
          <div className="section-header">
            <h1>2. Accompagnements groupe</h1>
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
      <section id="programmes" className="section services-section parallax-surface">
        <div className="container">
          <div className="section-header">
            <h1>3. Programmes collectifs de pleine conscience</h1>
            <p>Programmes structurés et scientifiquement validés</p>
          </div>
          <div className="services-grid">
            {collectivePrograms.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Autres formats */}
      <section id="autres" className="section services-section alt parallax-surface">
        <div className="container">
          <div className="section-header">
            <h1>4. Autres formats</h1>
            <p>Interventions et ateliers sur mesure</p>
          </div>
          <div className="services-grid">
            {otherFormats.map(service => (
              <ServiceCard key={service.id} service={service} />
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
              <CalendarDays size={18} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .services-page {
          padding-top: 0;
        }

        /* === HERO SECTION AVEC VIDÉO (cohérent Blog/Infos) === */
        .hero-services {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: -2;
        }

        .hero-video img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #fffcea;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero-content h1 {
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 1.1;
          color: #fffcea;
          font-weight: 700;
          text-shadow: 0 4px 20px rgba(0,0,0,0.4);
          margin: 0 0 var(--spacing-6) 0;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          color: rgba(255, 252, 234, 0.9);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          letter-spacing: 0.025em;
        }

        .services-section {
          padding: var(--spacing-20) 0;
        }

        .services-section.alt {
          background: var(--color-gray-50);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-12);
          width: 100%;
          display: block;
        }

        /* Forcer le flux vertical: titre au-dessus, contenu en dessous */
        .services-section .container,
        .cta-section .container {
          display: block;
        }

        .section-header h1 {
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
          font-size: clamp(2rem, 4vw, 2.5rem);
        }

        .section-header p {
          font-size: 1.2rem;
          color: var(--color-gray-600);
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-8);
        }

        .service-card {
          background: var(--color-white);
          border-radius: var(--radius-2xl);
          padding: var(--spacing-8);
          box-shadow: var(--shadow-md);
          transition: all var(--transition-normal);
          border: 2px solid transparent;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-6);
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
          border-color: var(--color-secondary);
        }

        .service-card.highlight {
          border-color: var(--color-secondary);
          background: linear-gradient(135deg, var(--color-white) 0%, rgba(230, 126, 34, 0.05) 100%);
        }

        .service-header {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-4);
        }

        .service-icon {
          background: rgba(230, 126, 34, 0.1);
          color: var(--color-secondary);
          padding: var(--spacing-3);
          border-radius: var(--radius-lg);
          flex-shrink: 0;
        }

        .service-header h3 {
          margin: 0 0 var(--spacing-1) 0;
          color: var(--color-primary);
          font-size: 1.25rem;
        }

        .service-subtitle {
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-secondary);
          font-weight: 600;
        }

        .service-description {
          color: var(--color-gray-700);
          line-height: 1.6;
          margin: 0;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          font-size: 0.9rem;
          color: var(--color-gray-700);
        }

        .service-features svg {
          color: var(--color-secondary);
          flex-shrink: 0;
        }

        .service-info {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-4);
          padding: var(--spacing-4);
          background: var(--color-gray-50);
          border-radius: var(--radius-lg);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          font-size: 0.9rem;
          color: var(--color-gray-700);
          font-weight: 500;
        }

        .info-item svg {
          color: var(--color-primary);
        }

        .service-modalities {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-2);
        }

        .modality-tag {
          background: rgba(44, 62, 80, 0.1);
          color: var(--color-primary);
          padding: var(--spacing-1) var(--spacing-3);
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          font-weight: 500;
        }

        .service-card .btn {
          margin-top: auto;
          align-self: flex-start;
        }

        .cta-section {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: var(--color-white);
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-4);
          font-size: clamp(2rem, 4vw, 2.5rem);
        }

        .cta-content p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--spacing-8);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .service-info {
            justify-content: center;
          }

          .service-modalities {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;