import React from 'react';
import { Clock, Users, Target, Heart, Sparkles } from 'lucide-react';
import VideoCTA from '../components/VideoCTA';
import { useSlowMoVideo } from '../hooks/useSlowMoVideo';
import PracticalInfoCard from '../components/PracticalInfoCard';

const ProgrammeMBCASDetailsPage: React.FC = () => {
  const videoRef = useSlowMoVideo();
  const benefits = [
    {
      icon: Target,
      title: 'Prévention santé',
      description: 'Maintenez et améliorez votre bien-être physique et mental.'
    },
    {
      icon: Heart,
      title: 'Sérénité intérieure',
      description: 'Cultivez un état d\'esprit apaisé face aux défis du quotidien.'
    },
    {
      icon: Sparkles,
      title: 'Joie de vivre',
      description: 'Redécouvrez le plaisir simple d\'être présent à votre vie.'
    }
  ];
  return (
    <div className="mbcas-details-page service-detail-page">
      {/* Hero Section Élégant avec image de l'arbre */}
      <section className="hero-mbcas">
        <div className="container">
          <div className="hero-mbcas-layout">
            <div className="hero-content-mbcas">
              <h1>Programme MBCAS</h1>
              <p className="hero-subtitle-mbcas">
                Bien vivre son avancée en âge avec la pleine conscience
              </p>
              <div className="hero-description-mbcas">
                <p>
                  Le programme MBCAS est spécifiquement destiné aux séniors ou à toute personne
                  intéressée par l'avancée en âge. Développé par Brigitte Zellner Keller, il a été conçu comme un programme de
                  prévention pour aider les personnes à faire face aux défis liés au vieillissement.
                </p>
              </div>
              <div className="hero-highlights-mbcas">
                <div className="highlight-item">
                  <Clock size={20} />
                  <span><strong>8 mois</strong> • 15 séances</span>
                </div>
                <div className="highlight-item">
                  <Users size={20} />
                  <span><strong>5-10 pers.</strong> • Groupe</span>
                </div>
                <div className="highlight-item">
                  <span className="price-highlight"><strong>380€</strong> • Programme complet</span>
                </div>
              </div>
            </div>
            <div className="hero-image-mbcas">
              <img src="/arbre_MBCAS.jpg" alt="Arbre symbolisant la sagesse et l'enracinement pour le programme MBCAS" />
              <div className="image-overlay-mbcas"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section des bénéfices avec vidéo de fond */}
      <section className="section benefits-section-shared parallax-surface">
        <video
          muted
          loop
          playsInline
          className="parallax-video-static"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="section-header">
            <h2>Les bénéfices de l'accompagnement</h2>
            <p>Un accompagnement pour vous aider à devenir acteur de votre santé et à adopter des habitudes de vie favorables à votre bien-être.</p>
          </div>
          <div className="benefits-grid-shared-simplified">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="benefit-card-shared-simplified">
                  <IconComponent size={28} className="benefit-icon-shared-simplified" />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section unifiée : Parcours et apprentissages */}
      <section className="section journey-section">
        <div className="container">
          <div className="journey-layout">
            <div className="journey-content">
              <h2>Votre parcours vers la sérénité</h2>
              <p className="journey-intro">
                Un accompagnement individuel sur-mesure qui vous guide dans l'apprentissage de la pleine conscience,
                à votre rythme et selon vos besoins spécifiques, pour une transformation authentique et durable.
              </p>

              <div className="learning-outcomes">
                <h3>Ce que vous allez développer</h3>
                <div className="outcomes-grid">
                  <div className="outcome-item">
                    <div className="outcome-icon">🌱</div>
                    <div>
                      <h4>Résilience face aux changements</h4>
                      <p>Apprenez à faire face aux épreuves et défis avec bienveillance et sagesse.</p>
                    </div>
                  </div>
                  <div className="outcome-item">
                    <div className="outcome-icon">🎯</div>
                    <div>
                      <h4>Connexion à vos valeurs</h4>
                      <p>Réalisez vos potentialités présentes et agissez selon ce qui vous tient à cœur.</p>
                    </div>
                  </div>
                  <div className="outcome-item">
                    <div className="outcome-icon">🧘</div>
                    <div>
                      <h4>Présence consciente</h4>
                      <p>Cultivez l'art d'être pleinement présent à chaque instant de votre vie.</p>
                    </div>
                  </div>
                  <div className="outcome-item">
                    <div className="outcome-icon">💭</div>
                    <div>
                      <h4>Liberté mentale</h4>
                      <p>Prenez de la distance par rapport aux pensées négatives et aux ruminations.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="journey-aside">
              <PracticalInfoCard
                variant="primary"
                isSticky={true}
                duration={<>15 séances sur 8 mois<br /><small>2 rencontres par mois</small></>}
                format={<>Petit groupe<br /><small>5 à 10 participants</small></>}
                tarifs={[{
                  amount: '380€',
                  label: 'Programme complet',
                  details: ''
                }]}
                pricingNote="Paiement en 3/4 fois possible. Me contacter si difficultés."
              >
                <div className="info-section-enhanced custom-support-section">
                  <h3 className="section-subtitle-enhanced">Accompagnement inclus</h3>
                  <div className="support-items">
                    <div className="support-item">
                      <span className="support-icon">📋</span>
                      <div className="support-content">
                        <div className="support-title">Entretien préalable</div>
                        <div className="support-desc">Pour personnaliser votre accompagnement</div>
                      </div>
                    </div>
                    <div className="support-item">
                      <span className="support-icon">📚</span>
                      <div className="support-content">
                        <div className="support-title">Supports fournis</div>
                        <div className="support-desc">Livrets, audios et exercices</div>
                      </div>
                    </div>
                    <div className="support-item">
                      <span className="support-icon">🏠</span>
                      <div className="support-content">
                        <div className="support-title">Pratique à domicile</div>
                        <div className="support-desc">Exercices guidés entre les séances</div>
                      </div>
                    </div>
                  </div>
                </div>
              </PracticalInfoCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <VideoCTA
        title="Prêt(e) à transformer votre quotidien ?"
        subtitle="Contactez-moi pour en savoir plus sur le programme MBCAS et réserver votre place."
        buttonText="M'inscrire"
        buttonLink="/contact-reservation"
      />

      <style>{`
        /* === HERO SECTION SANTÉ === */
        .hero-sante {
          padding: var(--spacing-20) 0;
          background: #fffcea;
          overflow: hidden;
        }

        .hero-sante-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--spacing-12);
          align-items: center;
          min-height: 70vh;
        }

        .hero-content-sante h1 {
          font-size: clamp(3rem, 6vw, 4.5rem);
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
          line-height: 1.1;
          font-weight: 700;
        }

        .hero-subtitle-sante {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
          font-weight: 500;
          line-height: 1.4;
        }

        .hero-description-sante p {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
          max-width: 55ch;
        }

        .hero-highlights-sante {
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

        .hero-image-sante {
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

        .image-overlay-sante {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(31, 41, 55, 0.1) 0%, rgba(31, 41, 55, 0.05) 100%);
        }

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

        .learning-outcomes, .objectives-exploration {
          margin-bottom: var(--spacing-10);
        }

        .learning-outcomes h3, .objectives-exploration h3 {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
          font-weight: 600;
        }

        .outcomes-grid, .objectives-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-6);
        }

        .outcome-item, .objective-item {
          display: flex;
          gap: var(--spacing-4);
          align-items: flex-start;
        }

        .outcome-icon, .objective-icon {
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

        .outcome-item h4, .objective-item h4 {
          font-size: 1.2rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-2);
          font-weight: 600;
        }

        .outcome-item p, .objective-item p {
          color: var(--color-gray-700);
          line-height: 1.6;
          font-size: 1rem;
        }

        /* Merged info card styles are now in globals.css */

        /* Reset and simplify previous styles */
        .value-section, .process-section, .practical-info {
          padding: var(--spacing-16) 0;
        }

        /* Value Section refined */
        .value-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: var(--spacing-12);
          align-items: center;
        }

        .value-left h2 {
          font-size: clamp(2.2rem, 4.2vw, 3rem);
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
        }

        .value-left .lead {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
          max-width: 48ch;
          text-align: justify;
        }

        .benefits-grid-refined {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--spacing-6);
        }

        .benefit-card-refined {
          background: var(--color-white);
          border: 1px solid var(--color-gray-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-5) var(--spacing-6);
        }

        .benefit-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-3);
        }

        .benefit-icon-refined {
          color: var(--color-primary);
        }

        .benefit-card-refined h3 {
          font-size: 1.2rem;
          margin: 0;
          color: var(--color-primary);
          letter-spacing: 0.01em;
        }

        .benefit-card-refined p {
          color: var(--color-text-secondary);
          line-height: 1.65;
          font-size: 1rem;
        }

        @media (max-width: 900px) {
          .value-layout {
            grid-template-columns: 1fr;
          }

          .value-left {
            text-align: center;
          }

          .value-left .lead {
            margin: 0 auto;
          }
        }

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
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
        }

        .process-intro-revisited p {
          font-size: 1.2rem;
          line-height: 1.6;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
          max-width: 30ch;
        }

        .timeline-revisited {
          border-left: 1px solid rgba(255, 252, 234, 0.45);
          padding-left: var(--spacing-8);
        }

        .timeline-item-revisited {
          position: relative;
          padding-bottom: var(--spacing-16);
        }

        .timeline-item-revisited:last-child {
          padding-bottom: 0;
        }

        .timeline-number-revisited {
          position: absolute;
          left: calc(-1 * var(--spacing-8) - 19px);
          top: -4px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 252, 234, 0.08);
          border: 1px solid rgba(255, 252, 234, 0.7);
          color: #fffcea;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.95rem;
          box-shadow: none;
          backdrop-filter: saturate(120%) blur(2px);
        }

        .timeline-content-revisited h3 {
          font-size: 1.35rem;
          margin-bottom: var(--spacing-2);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.35);
        }

        .timeline-content-revisited p {
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.92);
        }

        /* Coaching details layout */
        .coaching-details-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: var(--spacing-12);
          align-items: start;
        }

        .coaching-text h2 {
          font-size: clamp(2.1rem, 4vw, 2.8rem);
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
        }

        .coaching-text p {
          color: var(--color-text-secondary);
          line-height: 1.8;
        }

        .coaching-text h3 {
          margin-top: var(--spacing-8);
          margin-bottom: var(--spacing-3);
          color: var(--color-primary);
          font-size: clamp(1.6rem, 2.2vw, 2rem);
          letter-spacing: 0.01em;
        }

        .coaching-aside {
          display: grid;
          gap: var(--spacing-6);
        }
        
        /* Larger process text */
        .process-text-large p {
          font-size: 1.25rem;
          line-height: 1.9;
          margin-bottom: var(--spacing-6);
          text-align: justify;
        }
        
        /* Merged info card */
        .info-card-merged {
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
        
        .info-card-merged h2 {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
          font-weight: 600;
          border-bottom: 1px solid var(--color-gray-200);
          padding-bottom: var(--spacing-2);
        }

        .format-highlights-merged {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
          margin-bottom: var(--spacing-4);
          padding: var(--spacing-4);
          background: #fffcea;
          border-radius: var(--radius-lg);
        }

        .format-item-merged {
          color: var(--color-primary);
          font-size: 1rem;
          padding: var(--spacing-2) 0;
        }

        .format-item-merged strong {
          font-weight: 700;
        }

        .format-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-gray-700);
          margin-bottom: 0;
        }
        .info-section { margin-bottom: var(--spacing-6); padding-bottom: var(--spacing-6); border-bottom: 1px solid var(--color-gray-200); }
        .detail-item-revisited { display: flex; align-items: flex-start; gap: var(--spacing-4); color: var(--color-primary); }
        .detail-item-revisited:not(:last-child) { margin-bottom: var(--spacing-5); }
        .detail-item-revisited strong { display: block; font-size: 1.1rem; margin-bottom: 2px; }
        .detail-item-revisited span { font-size: 1rem; color: var(--color-text-secondary); }
        .pricing-section { display: grid; gap: var(--spacing-4); }
        .price-row { display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-3) 0; }
        .price-amount { font-size: 2.5rem; font-weight: 700; color: var(--color-primary); }
        .price-label { font-size: 1.1rem; color: var(--color-text-secondary); font-weight: 500; }
        
        @media (max-width: 900px) { .coaching-details-grid { grid-template-columns: 1fr; } }

        @media (max-width: 768px) {
          .process-container-revisited { grid-template-columns: 1fr; gap: var(--spacing-8); text-align: center; }
          .process-intro-revisited p { margin: 0 auto; }
          .timeline-revisited { border-left: none; padding-left: 0; }
          .timeline-item-revisited { text-align: left; }
          .timeline-number-revisited { position: static; margin-bottom: var(--spacing-4); width: 45px; height: 45px; }
        }
      `}</style>
    </div >
  );
};

export default ProgrammeMBCASDetailsPage;
