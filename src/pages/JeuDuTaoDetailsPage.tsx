import React, { useEffect, useState, useRef } from 'react';
import { Clock, Users, Target, Heart, Sparkles, MapPin } from 'lucide-react';
import VideoCTA from '../components/VideoCTA';
import { useSlowMoVideo } from '../hooks/useSlowMoVideo';

const JeuDuTaoDetailsPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const journeyRef = useRef<HTMLElement>(null);
  const videoRef = useSlowMoVideo();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    {
      icon: Target,
      title: 'Clarification personnelle',
      description: 'Identifiez vos aspirations profondes et vos freins avec l\'appui du collectif.'
    },
    {
      icon: Heart,
      title: 'Introspection guidée',
      description: 'Explorez vos ressources internes dans un cadre bienveillant et sécurisant.'
    },
    {
      icon: Sparkles,
      title: 'Décisions alignées',
      description: 'Repartez avec des outils concrets pour ajuster vos choix de vie.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Accueil et cadre',
      description: 'Présentation du jeu et mise en confiance dans un environnement bienveillant.'
    },
    {
      number: '02',
      title: 'Échauffement créatif',
      description: 'Activités ludiques pour libérer l\'expression et favoriser la connexion au groupe.'
    },
    {
      number: '03',
      title: 'Exploration des 4 mondes',
      description: 'Parcours guidé à travers les éléments Terre, Eau, Feu et Air pour révéler vos ressources.'
    },
    {
      number: '04',
      title: 'Partage et échanges',
      description: 'Temps de réflexion collective et de partage des découvertes personnelles.'
    },
    {
      number: '05',
      title: 'Synthèse et ancrage',
      description: 'Intégration des apprentissages et définition d\'actions concrètes pour le quotidien.'
    }
  ];

  return (
    <div className="jeu-tao-details-page service-detail-page">
      {/* Hero Section Élégant avec image tao */}
      <section className="hero-tao">
        <div className="container">
          <div className="hero-tao-layout">
            <div className="hero-content-tao">
              <h1>Jeu du Tao</h1>
              <p className="hero-subtitle-tao">
                Santé et mieux-être
              </p>
              <div className="hero-description-tao">
                <p>
                  Une expérience interactive et immersive qui vous invite à vous connecter à vos objectifs personnels
                  de bien-être et d'équilibre de vie. À travers un voyage initiatique, définissez votre propre quête
                  et explorez vos aspirations les plus profondes avec le soutien du collectif.
                </p>
              </div>
              <div className="hero-highlights-tao">
                <div className="highlight-item">
                  <Clock size={20} />
                  <span><strong>4-5 heures</strong> • Session immersive</span>
                </div>
                <div className="highlight-item">
                  <Users size={20} />
                  <span><strong>4 pers. max</strong> • Groupe intimiste</span>
                </div>
                <div className="highlight-item">
                  <span className="price-highlight"><strong>70€</strong> • Par personne</span>
                </div>
              </div>
            </div>
            <div className="hero-image-tao">
              <img
                src="/tao.png"
                alt="Jeu du Tao avec cartes des éléments"
                className="hero-image-element"
              />
              <div className="image-overlay-tao"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section des bénéfices avec vidéo de fond */}
      <section className="section benefits-section-tao parallax-surface">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="parallax-video-static"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="section-header">
            <h2>Les bénéfices de l'expérience</h2>
            <p>Un voyage initiatique qui révèle vos ressources intérieures et clarifie vos aspirations</p>
          </div>
          <div className="benefits-grid-simplified">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="benefit-card-simplified">
                  <IconComponent size={28} className="benefit-icon-simplified" />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section unifiée : Expérience du jeu et déroulement */}
      <section ref={journeyRef} className="section journey-section">
        <div className="container">
          <div className="journey-layout">
            <div className="journey-content">
              <h2>Votre expérience pas à pas</h2>
              <p className="journey-intro">
                Une session immersive de 4 à 5 heures où chaque participant explore ses ressources intérieures
                avec le soutien du groupe, dans un cadre bienveillant et créatif.
              </p>

              <div className="learning-outcomes">
                <h3>Déroulement de la session</h3>
                <div className="outcomes-grid">
                  {processSteps.map((step, index) => (
                    <div key={index} className="outcome-item">
                      <div className="outcome-icon">{step.number}</div>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="worlds-exploration">
                <h3>Les 4 mondes symboliques</h3>
                <div className="worlds-grid">
                  <div className="world-item">
                    <div className="world-icon">🌍</div>
                    <div>
                      <h4>Monde de la Terre</h4>
                      <p>Questionne la stabilité, l'ancrage et les fondations de votre vie.</p>
                    </div>
                  </div>
                  <div className="world-item">
                    <div className="world-icon">🌊</div>
                    <div>
                      <h4>Monde de l'Eau</h4>
                      <p>Explore les émotions, leur gestion et leur impact sur votre quotidien.</p>
                    </div>
                  </div>
                  <div className="world-item">
                    <div className="world-icon">🔥</div>
                    <div>
                      <h4>Monde du Feu</h4>
                      <p>Révèle vos ressources et forces intérieures, votre potentiel créateur.</p>
                    </div>
                  </div>
                  <div className="world-item">
                    <div className="world-icon">💨</div>
                    <div>
                      <h4>Monde de l'Air</h4>
                      <p>Questionne la clarté mentale et l'ouverture au champ des possibilités.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="journey-aside">
              <div
                className="info-card-enhanced"
                style={{
                  transform: `translateY(${(scrollY - (journeyRef.current?.offsetTop || 0)) * 0.1
                    }px)`,
                }}
              >
                <h2>Informations pratiques</h2>

                {/* Section modalités restructurée */}
                <div className="info-section-enhanced">
                  <h3 className="section-subtitle-enhanced">Modalités</h3>
                  <div className="modalities-grid">
                    <div className="modality-card">
                      <div className="modality-label">Durée</div>
                      <div className="modality-value">4 à 5 heures</div>
                      <div className="modality-detail">Session immersive</div>
                    </div>
                    <div className="modality-card">
                      <div className="modality-label">Format</div>
                      <div className="modality-value">Jeu collectif</div>
                      <div className="modality-detail">Présentiel ou en ligne</div>
                    </div>
                    <div className="modality-card">
                      <div className="modality-label">Participation</div>
                      <div className="modality-value">Groupe intimiste</div>
                      <div className="modality-detail">Maximum 4 participants</div>
                    </div>
                  </div>
                  <div className="format-description-enhanced">
                    Chaque session combine introspection guidée, exploration créative et partage d'expérience
                    dans un cadre bienveillant et sécurisant.
                  </div>
                </div>

                {/* Section déroulement */}
                <div className="info-section-enhanced">
                  <h3 className="section-subtitle-enhanced">Déroulement</h3>
                  <div className="support-items">
                    <div className="support-item">
                      <span className="support-icon">🎭</span>
                      <div className="support-content">
                        <div className="support-title">Accueil créatif</div>
                        <div className="support-desc">Mise en confiance et échauffement ludique</div>
                      </div>
                    </div>
                    <div className="support-item">
                      <span className="support-icon">🗺️</span>
                      <div className="support-content">
                        <div className="support-title">Exploration des mondes</div>
                        <div className="support-desc">Parcours guidé à travers les 4 éléments</div>
                      </div>
                    </div>
                    <div className="support-item">
                      <span className="support-icon">🎯</span>
                      <div className="support-content">
                        <div className="support-title">Synthèse et ancrage</div>
                        <div className="support-desc">Intégration et actions concrètes</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing simplifié */}
                <div className="pricing-section-enhanced">
                  <div className="price-display">
                    <div className="price-amount">70€</div>
                    <div className="price-label">Par personne</div>
                  </div>
                  <div className="pricing-details">
                    Sessions ponctuelles • Réservation obligatoire • Paiement sécurisé
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <VideoCTA
        title="Alors, êtes-vous prêt à entreprendre votre quête personnelle ?"
        subtitle="Réservez votre place dès maintenant et laissez vous guider à travers un voyage initiatique unique !"
        buttonText="Réserver ma place"
        buttonLink="/contact-reservation"
      />

      <style>{`
        /* === HERO SECTION TAO === */
        .hero-tao {
          padding: var(--spacing-20) 0;
          background: #fffcea;
          overflow: hidden;
        }

        .hero-tao-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--spacing-12);
          align-items: center;
          min-height: 70vh;
        }

        .hero-content-tao h1 {
          font-size: clamp(3rem, 6vw, 4.5rem);
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
          line-height: 1.1;
          font-weight: 700;
        }

        .hero-subtitle-tao {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
          font-weight: 500;
          line-height: 1.4;
        }

        .hero-description-tao p {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
          max-width: 55ch;
        }

        .hero-highlights-tao {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          font-size: 1.1rem;
          color: var(--color-primary);
        }

        .highlight-item svg {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .price-highlight {
          color: var(--color-primary) !important;
          font-size: 1.2rem;
        }

        .hero-image-tao {
          position: relative;
          height: 600px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .hero-image-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .image-overlay-tao {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(31, 41, 55, 0.1) 0%, rgba(31, 41, 55, 0.05) 100%);
        }

        /* === BENEFITS SECTION AVEC VIDÉO === */
        .benefits-section-tao {
          padding: var(--spacing-16) 0;
          position: relative;
        }

        .benefits-section-tao .section-header {
          text-align: center;
          margin-bottom: var(--spacing-12);
        }

        .benefits-section-tao .section-header h2 {
          font-size: clamp(2.2rem, 4vw, 3rem);
          color: #fffcea;
          margin-bottom: var(--spacing-4);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
        }

        .benefits-section-tao .section-header p {
          font-size: 1.2rem;
          color: rgba(255, 252, 234, 0.9);
          max-width: 600px;
          margin: 0 auto;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }

        .benefits-grid-simplified {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-8);
        }

        .benefit-card-simplified {
          background: rgba(255, 252, 234, 0.95);
          border: 1px solid rgba(255, 252, 234, 0.3);
          border-radius: var(--radius-xl);
          padding: var(--spacing-8);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .benefit-card-simplified:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
          background: rgba(255, 252, 234, 1);
        }

        .benefit-icon-simplified {
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
        }

        .benefit-card-simplified h3 {
          font-size: 1.4rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-3);
          font-weight: 600;
        }

        .benefit-card-simplified p {
          color: var(--color-gray-700);
          line-height: 1.6;
          font-size: 1rem;
        }

        /* === VIDÉO STATIQUE === */
        .parallax-video-static {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        /* === SECTIONS COMMUNES === */

        /* === JOURNEY SECTION === */
        .journey-section {
          padding: var(--spacing-20) 0;
          background: #fffcea;
        }

        .journey-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-6);
          align-items: start;
        }

        .journey-content h2 {
          font-size: clamp(2.5rem, 4.5vw, 3.5rem);
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
          line-height: 1.2;
        }

        .journey-intro {
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-10);
          max-width: 85ch;
        }

        .learning-outcomes, .worlds-exploration {
          margin-bottom: var(--spacing-10);
        }

        .learning-outcomes h3, .worlds-exploration h3 {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
          font-weight: 600;
        }

        .outcomes-grid, .worlds-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-6);
        }

        .outcome-item, .world-item {
          display: flex;
          gap: var(--spacing-4);
          align-items: flex-start;
        }

        .outcome-icon, .world-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .outcome-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: var(--color-primary);
          color: white;
          border-radius: 50%;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .outcome-item h4, .world-item h4 {
          font-size: 1.2rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-2);
          font-weight: 600;
        }

        .outcome-item p, .world-item p {
          color: var(--color-gray-700);
          line-height: 1.6;
          font-size: 1rem;
        }

        /* Enhanced info card styles */
        .info-card-enhanced {
          background: var(--color-white);
          border-radius: var(--radius-xl);
          padding: var(--spacing-8);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-gray-200);
          width: 100%;
          max-width: 400px;
          z-index: 10;
          will-change: transform;
        }

        .info-card-enhanced h2 {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
        }

        .info-section-enhanced {
          margin-bottom: var(--spacing-7);
          padding-bottom: var(--spacing-6);
          border-bottom: 1px solid var(--color-gray-100);
        }

        .info-section-enhanced:last-of-type {
          border-bottom: none;
          margin-bottom: 0;
        }

        .section-subtitle-enhanced {
          font-size: 1.3rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-5);
          font-weight: 600;
        }

        .modalities-grid {
          display: grid;
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-5);
          padding: var(--spacing-4);
          background: #fffcea;
          border-radius: var(--radius-lg);
        }

        .modality-card {
          padding: var(--spacing-3) 0;
          background: transparent;
          border-radius: 0;
          border-left: none;
          border-bottom: 1px solid var(--color-gray-100);
        }

        .modality-label {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .modality-value {
          font-weight: 600;
          color: var(--color-primary);
          font-size: 1.1rem;
          margin-bottom: 2px;
        }

        .modality-detail {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
        }

        .format-description-enhanced {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          padding: 0;
          background: transparent;
          border-radius: 0;
          border: none;
        }

        .support-items {
          display: grid;
          gap: var(--spacing-4);
        }

        .support-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-3);
          padding: var(--spacing-3);
          border-radius: 8px;
          transition: background-color 0.2s ease;
        }

        .support-item:hover {
          background: rgba(249, 247, 234, 0.3);
        }

        .support-icon {
          font-size: 1.2rem;
          margin-top: 2px;
        }

        .support-content {
          flex: 1;
        }

        .support-title {
          font-weight: 600;
          color: var(--color-primary);
          font-size: 1rem;
          margin-bottom: 2px;
        }

        .support-desc {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.4;
        }

        .pricing-section-enhanced {
          margin-top: var(--spacing-6);
          padding: 0;
          background: transparent;
          border-radius: 0;
          border: none;
        }

        .price-display {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: var(--spacing-2);
        }

        .price-display .price-amount {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--color-primary);
        }

        .price-display .price-label {
          font-size: 1rem;
          color: var(--color-text-secondary);
          font-weight: 500;
        }

        .pricing-details {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        /* === RESPONSIVE === */
        @media (max-width: 1200px) {
          .journey-layout { grid-template-columns: 1fr; gap: var(--spacing-8); }
          .journey-aside { margin-top: 0; }
          .info-card-enhanced { 
            max-width: none !important;
          }
        }

        @media (max-width: 1024px) {
          .hero-tao-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
            text-align: center;
          }
          
          .hero-image-tao {
            height: 400px;
            order: -1;
          }
          
          .hero-description-tao p {
            margin: 0 auto var(--spacing-8);
          }

          .benefits-grid-simplified {
            grid-template-columns: 1fr;
            gap: var(--spacing-6);
            padding: 0 var(--spacing-4);
          }

          .benefit-card-simplified {
            padding: var(--spacing-6);
            margin: 0;
            max-width: 100%;
            box-sizing: border-box;
          }
        }

        @media (max-width: 768px) {
          .hero-tao {
            padding: var(--spacing-12) 0;
          }
          
          .hero-image-tao {
            height: 300px;
          }
          
          .highlight-item {
            justify-content: center;
          }

          .outcomes-grid, .worlds-grid {
            grid-template-columns: 1fr;
          }
          
          .sliding-card { 
            position: static !important; 
            transform: none !important;
            top: auto !important;
            max-width: none !important;
          }

          .benefits-section-tao {
            padding: var(--spacing-12) 0;
          }

          .benefits-section-tao .section-header h2 {
            font-size: clamp(1.8rem, 6vw, 2.5rem);
            padding: 0 var(--spacing-2);
          }

          .benefits-section-tao .section-header p {
            font-size: 1rem;
            padding: 0 var(--spacing-2);
          }

          .benefits-grid-simplified {
            gap: var(--spacing-4);
            padding: 0 var(--spacing-2);
          }

          .benefit-card-simplified {
            padding: var(--spacing-5);
          }

          .benefit-card-simplified h3 {
            font-size: 1.2rem;
          }

          .benefit-card-simplified p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default JeuDuTaoDetailsPage;
