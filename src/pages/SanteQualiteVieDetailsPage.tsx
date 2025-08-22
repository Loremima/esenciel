import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Euro, CalendarDays, Users, Target, Heart, Sparkles } from 'lucide-react';

const SanteQualiteVieDetailsPage: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Clarté sur vos objectifs',
      description: 'Identifiez précisément ce qui compte vraiment pour votre bien-être'
    },
    {
      icon: Heart,
      title: 'Équilibre retrouvé',
      description: 'Harmonisez tous les aspects de votre vie pour un épanouissement global'
    },
    {
      icon: Sparkles,
      title: 'Transformation durable',
      description: 'Instaurez des changements qui perdurent dans le temps'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Évaluation complète',
      description: 'Analyse approfondie de votre situation actuelle, de vos habitudes et de vos aspirations.'
    },
    {
      number: '02',
      title: 'Plan personnalisé',
      description: 'Création d\'un programme sur-mesure adapté à votre rythme de vie et vos objectifs.'
    },
    {
      number: '03',
      title: 'Accompagnement actif',
      description: 'Mise en œuvre progressive avec ajustements réguliers et soutien continu.'
    },
    {
      number: '04',
      title: 'Autonomisation',
      description: 'Développement de votre capacité à maintenir vos nouvelles habitudes de façon autonome.'
    }
  ];

  return (
    <div className="sante-details-page service-detail-page">
      {/* Hero Section */}
      <section className="hero-details">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <h1>Santé et Qualité de Vie</h1>
          <p className="hero-subtitle">
            Devenez acteur de votre santé et de votre qualité de vie au quotidien grâce à un accompagnement personnalisé.
          </p>
        </div>
      </section>

      {/* Value proposition avec bénéfices */}
      <section className="section value-section">
        <div className="container">
          <div className="value-layout">
            <div className="value-left">
              <h2>Transformez votre quotidien</h2>
              <p className="lead">
                Un accompagnement sur-mesure pour développer des habitudes de vie durables
                et retrouver un équilibre qui vous ressemble vraiment.
              </p>
            </div>
            <div className="benefits-grid-refined">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="benefit-card-refined">
                    <div className="benefit-header">
                      <IconComponent size={22} className="benefit-icon-refined" />
                      <h3>{benefit.title}</h3>
                    </div>
                    <p>{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Processus avec timeline moderne */}
      <section className="section process-section parallax-surface">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="parallax-video"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="container process-container-revisited">
          <div className="process-intro-revisited">
            <h2>Comment ça marche ?</h2>
            <p>Un parcours en 4 étapes pour des résultats durables.</p>
          </div>
          <div className="timeline-revisited">
            {processSteps.map((step, index) => (
              <div key={index} className="timeline-item-revisited">
                <div className="timeline-number-revisited">{step.number}</div>
                <div className="timeline-content-revisited">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Détails Coaching S&QV (fusion infos pratiques + ressources) */}
      <section className="section coaching-details">
        <div className="container">
          <div className="coaching-details-grid">
            <div className="coaching-text">
              <h2>Santé & Qualité de Vie</h2>
              <p>
                Acteur de votre santé : vers un bien‑être durable. Cet accompagnement vous aide à
                identifier vos habitudes, lever les freins, mobiliser vos ressources et installer des
                actions adaptées et alignées à vos besoins.
              </p>
              <h3>Objectifs</h3>
              <ul className="objectives-list-large">
                <li>Prendre conscience des habitudes impactant votre bien‑être</li>
                <li>Identifier les freins et blocages</li>
                <li>Mobiliser vos ressources personnelles</li>
                <li>Mettre en place des actions concrètes et alignées</li>
                <li>Soutenir votre motivation sur la durée</li>
              </ul>
              <h3>Déroulement</h3>
              <div className="process-text-large">
                <p>
                  L'accompagnement débute par une première rencontre pour discuter de vos objectifs et définir
                  ensemble un plan d'action personnalisé. À partir de là nous explorerons vos habitudes de vie
                  et identifierons les freins qui limitent votre bien-être.
                </p>
                <p>
                  Chaque séance vous aidera à mobiliser vos ressources internes et à mettre en place des actions
                  concrètes pour améliorer votre qualité de vie. Au fil des séances, le suivi régulier vous
                  permettra d'ajuster vos actions en fonction de l'évolution de vos besoins afin de maintenir
                  votre motivation.
                </p>
              </div>
            </div>
            <div className="coaching-aside">
              <div className="info-card-merged">
                <h2>Informations pratiques & Tarifs</h2>
                <div className="info-section">
                  <div className="detail-item-revisited">
                    <Clock size={22} />
                    <div>
                      <strong>Durée des séances</strong>
                      <span>1h30–2h pour la première, puis 1h</span>
                    </div>
                  </div>
                  <div className="detail-item-revisited">
                    <Users size={22} />
                    <div>
                      <strong>Modalités</strong>
                      <span>En cabinet à Toulouse ou en visio</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-section">
                  <div className="price-row">
                    <div className="price-amount">90€</div>
                    <div className="price-label">Première séance</div>
                  </div>
                  <div className="price-row">
                    <div className="price-amount">60€</div>
                    <div className="price-label">Séance de suivi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (video background, texte blanc) */}
      <section className="section cta-section parallax-surface">
        <video autoPlay muted loop playsInline className="parallax-video">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Prêt(e) à transformer votre quotidien ?</h2>
              <p>Commencez dès aujourd'hui votre parcours vers une vie plus équilibrée et épanouissante.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact-reservation" className="btn btn-primary cta-primary">
                Réserver ma première séance
                <CalendarDays size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Reset and simplify previous styles */
        .value-section, .process-section, .practical-info {
          padding: var(--spacing-16) 0;
        }

        /* Value Section refined */
        .value-layout { display: grid; grid-template-columns: 1fr 1.6fr; gap: var(--spacing-12); align-items: center; }
        .value-left h2 { font-size: clamp(2.2rem, 4.2vw, 3rem); color: var(--color-primary); margin-bottom: var(--spacing-4); }
        .value-left .lead { font-size: 1.15rem; color: var(--color-text-secondary); line-height: 1.7; max-width: 48ch; }

        .benefits-grid-refined { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--spacing-6); }
        .benefit-card-refined { background: var(--color-white); border: 1px solid var(--color-gray-200); border-radius: var(--radius-lg); padding: var(--spacing-5) var(--spacing-6); }
        .benefit-header { display: flex; align-items: center; gap: var(--spacing-3); margin-bottom: var(--spacing-3); }
        .benefit-icon-refined { color: var(--color-primary); }
        .benefit-card-refined h3 { font-size: 1.2rem; margin: 0; color: var(--color-primary); letter-spacing: 0.01em; }
        .benefit-card-refined p { color: var(--color-text-secondary); line-height: 1.65; font-size: 1rem; }
        @media (max-width: 900px) { .value-layout { grid-template-columns: 1fr; } .value-left { text-align: center; } .value-left .lead { margin: 0 auto; } }
        
        /* Process Section Revisited */
        .process-container-revisited {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: var(--spacing-12);
          align-items: center;
          color: #fff;
        }
        .process-intro-revisited h2 {
          font-size: clamp(3rem, 6vw, 4.5rem);
          line-height: 1.1;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
        }
        .process-intro-revisited p {
          font-size: 1.2rem;
          line-height: 1.6;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
          max-width: 30ch;
        }
        .timeline-revisited { border-left: 1px solid rgba(255, 252, 234, 0.45); padding-left: var(--spacing-8); }
        .timeline-item-revisited {
          position: relative;
          padding-bottom: var(--spacing-16);
        }
        .timeline-item-revisited:last-child { padding-bottom: 0; }
        .timeline-number-revisited { position: absolute; left: calc(-1 * var(--spacing-8) - 19px); top: -4px; width: 36px; height: 36px; border-radius: 50%; background: rgba(255, 252, 234, 0.08); border: 1px solid rgba(255, 252, 234, 0.7); color: #fffcea; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.95rem; box-shadow: none; backdrop-filter: saturate(120%) blur(2px); }
        .timeline-content-revisited h3 { font-size: 1.35rem; margin-bottom: var(--spacing-2); text-shadow: 1px 1px 2px rgba(0,0,0,0.35); }
        .timeline-content-revisited p { line-height: 1.7; color: rgba(255,255,255,0.92); }

        /* Practical Info Revisited */
        .practical-info { background: var(--color-background); }
        .info-grid-revisited {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-8);
          max-width: 900px;
          margin: 0 auto;
        }
        .info-card-revisited {
          background: var(--color-white);
          border-radius: var(--radius-xl);
          padding: var(--spacing-8);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-gray-200);
        }
        .info-card-revisited h2 {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
        }
        .detail-item-revisited { display: flex; align-items: flex-start; gap: var(--spacing-4); color: var(--color-primary); }
        .detail-item-revisited:not(:last-child) { margin-bottom: var(--spacing-5); }
        .detail-item-revisited strong { display: block; font-size: 1.1rem; margin-bottom: 2px; }
        .detail-item-revisited span { font-size: 1rem; color: var(--color-text-secondary); }
        
        .pricing-card .price-item-revisited { display: flex; justify-content: space-between; align-items: baseline; padding: var(--spacing-4) 0; }
        .pricing-card .price-item-revisited:not(:last-child) { border-bottom: 1px solid var(--color-gray-100); }
        .pricing-card .price { font-size: 2.2rem; font-weight: 600; color: var(--color-primary); }
        .pricing-card span { font-size: 1.1rem; color: var(--color-text-secondary); }

        /* CTA on video */
        .cta-section .cta-text h2,
        .cta-section .cta-text p { color: #fffcea; text-shadow: 0 2px 10px rgba(0,0,0,0.45); }

        /* Protocols */
        .protocols-section .accordion { max-width: 1000px; margin: 0 auto; display: grid; gap: var(--spacing-4); }
        .protocols-section details { background: var(--color-white); border: 1px solid var(--color-gray-200); border-radius: var(--radius-lg); padding: var(--spacing-4) var(--spacing-5); }
        .protocols-section summary { cursor: pointer; font-weight: 600; color: var(--color-primary); outline: none; }
        .protocols-section .accordion-body { margin-top: var(--spacing-3); color: var(--color-text-secondary); line-height: 1.75; }
        .protocols-section ul { margin: var(--spacing-3) 0; padding-left: var(--spacing-6); }
        .protocols-section li { list-style: disc; margin: 0 0 var(--spacing-2); }
        .protocols-section .small { font-size: 0.95rem; opacity: 0.9; }
        .protocols-section .sub-accordion { display: grid; gap: var(--spacing-3); }

        /* Coaching details layout */
        .coaching-details-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: var(--spacing-12); align-items: start; }
        .coaching-text h2 { font-size: clamp(2.1rem, 4vw, 2.8rem); color: var(--color-primary); margin-bottom: var(--spacing-4); }
        .coaching-text p { color: var(--color-text-secondary); line-height: 1.8; }
        .coaching-text h3 { margin-top: var(--spacing-8); margin-bottom: var(--spacing-3); color: var(--color-primary); font-size: clamp(1.6rem, 2.2vw, 2rem); letter-spacing: 0.01em; }
        .coaching-text ul { padding-left: var(--spacing-6); }
        .coaching-text li { list-style: disc; margin-bottom: var(--spacing-2); }
        .coaching-aside { display: grid; gap: var(--spacing-6); }
        
        /* Larger objectives and process text */
        .objectives-list-large { padding-left: var(--spacing-6); margin: var(--spacing-6) 0 var(--spacing-10); }
        .objectives-list-large li { list-style: disc; margin-bottom: var(--spacing-4); font-size: 1.25rem; line-height: 1.9; }
        .process-text-large p { font-size: 1.25rem; line-height: 1.9; margin-bottom: var(--spacing-6); }
        
        /* Merged info card */
        .info-card-merged {
          background: var(--color-white);
          border-radius: var(--radius-xl);
          padding: var(--spacing-8);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-gray-200);
        }
        .info-card-merged h2 {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
        }
        .info-section { margin-bottom: var(--spacing-6); padding-bottom: var(--spacing-6); border-bottom: 1px solid var(--color-gray-200); }
        .pricing-section { display: grid; gap: var(--spacing-4); }
        .price-row { display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-3) 0; }
        .price-amount { font-size: 2.5rem; font-weight: 700; color: var(--color-primary); }
        .price-label { font-size: 1.1rem; color: var(--color-text-secondary); font-weight: 500; }
        
        @media (max-width: 900px) { .coaching-details-grid { grid-template-columns: 1fr; } }

        /* CTA text on video */
        .cta-section .cta-text h2 {
          color: #fffcea !important;
          font-family: var(--font-heading);
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
        .cta-section .cta-text p {
          color: #fffcea !important;
          text-shadow: 0 1px 6px rgba(0,0,0,0.3);
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .process-container-revisited { grid-template-columns: 1fr; gap: var(--spacing-8); text-align: center; }
          .process-intro-revisited p { margin: 0 auto; }
          .timeline-revisited { border-left: none; padding-left: 0; }
          .timeline-item-revisited { text-align: left; }
          .timeline-number-revisited { position: static; margin-bottom: var(--spacing-4); width: 45px; height: 45px; }
        }
      `}</style>
    </div>
  );
};

export default SanteQualiteVieDetailsPage;
