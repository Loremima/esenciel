import React from 'react';
import { Clock, Users, Target, Heart, Sparkles } from 'lucide-react';
import VideoCTA from '../components/VideoCTA';

const ProgrammeMBCASDetailsPage: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Gestion de l\'anxiété',
      description: 'Développez des stratégies efficaces pour faire face à l\'anxiété et aux préoccupations.'
    },
    {
      icon: Heart,
      title: 'Équilibre émotionnel',
      description: 'Cultivez la stabilité émotionnelle et la résilience face aux défis.'
    },
    {
      icon: Sparkles,
      title: 'Bien-être durable',
      description: 'Intégrez des pratiques qui nourrissent votre bien-être à long terme.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Comprendre l\'anxiété',
      description: 'Exploration des mécanismes de l\'anxiété et reconnaissance des patterns personnels.'
    },
    {
      number: '02',
      title: 'Pleine conscience des pensées',
      description: 'Apprentissage de l\'observation bienveillante des pensées anxieuses et ruminations.'
    },
    {
      number: '03',
      title: 'Ancrage corporel',
      description: 'Techniques de connexion au corps pour gérer l\'activation physiologique de l\'anxiété.'
    },
    {
      number: '04',
      title: 'Respiration consciente',
      description: 'Pratiques respiratoires pour réguler le système nerveux et apaiser l\'esprit.'
    },
    {
      number: '05',
      title: 'Pleine conscience des émotions',
      description: 'Accueil et régulation des émotions difficiles avec bienveillance et sagesse.'
    },
    {
      number: '06',
      title: 'Gestion des préoccupations',
      description: 'Outils pratiques pour transformer la relation aux pensées inquiètes et projections.'
    },
    {
      number: '07',
      title: 'Compassion et auto-bienveillance',
      description: 'Développement de la compassion envers soi-même face aux difficultés.'
    },
    {
      number: '08',
      title: 'Maintien et intégration',
      description: 'Consolidation de la pratique et stratégies pour maintenir l\'équilibre au quotidien.'
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
      <section className="section benefits-section-mbcas parallax-surface">
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
            <h2>Les bénéfices du programme</h2>
            <p>Une approche douce et progressive pour cultiver le bien-être à chaque étape de la vie</p>
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

      {/* Section unifiée : Parcours et apprentissages */}
      <section className="section journey-section">
        <div className="container">
          <div className="journey-layout">
            <div className="journey-content">
              <h2>Un parcours de 8 mois vers l'épanouissement</h2>
              <p className="journey-intro">
                Ce programme vous accompagne pas à pas dans la découverte de vos ressources intérieures
                et dans l'apprentissage d'outils concrets pour naviguer avec sérénité les défis de l'avancée en âge.
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
          </div>

          <div className="journey-aside">
            <div className="info-card-merged">
              <h2>Informations pratiques</h2>

              {/* Section modalités */}
              <div className="info-section">
                <h3 className="section-subtitle">Modalités</h3>
                <div className="format-highlights-merged">
                  <div className="format-item-merged">
                    <strong>15 séances</strong> réparties sur 8 mois
                  </div>
                  <div className="format-item-merged">
                    <strong>2 rencontres par mois</strong> : une principale + une intermédiaire
                  </div>
                  <div className="format-item-merged">
                    <strong>Petit groupe</strong> de 5 à 10 participants maximum
                  </div>
                </div>
                <p className="format-description">
                  Chaque séance combine pratiques guidées, moments d'apprentissage et temps d'échange,
                  abordant des thèmes profonds comme la compassion, la spiritualité et l'acceptation de sa propre finitude.
                </p>
              </div>

              {/* Section accompagnement */}
              <div className="info-section">
                <h3 className="section-subtitle">Accompagnement</h3>
                <div className="detail-item-revisited">
                  <span>📋</span>
                  <div>
                    <strong>Entretien préalable inclus</strong>
                    <span>Pour personnaliser votre accompagnement</span>
                  </div>
                </div>
                <div className="detail-item-revisited">
                  <span>📚</span>
                  <div>
                    <strong>Supports fournis</strong>
                    <span>Livrets, fichiers audios et exercices</span>
                  </div>
                </div>
                <div className="detail-item-revisited">
                  <span>🏠</span>
                  <div>
                    <strong>Pratique à domicile</strong>
                    <span>Exercices guidés entre les séances</span>
                  </div>
                </div>
              </div>
              <div className="pricing-section">
                <div className="price-row">
                  <div className="price-amount">380€</div>
                  <div className="price-label">Programme complet</div>
                </div>
                <p className="small-text">Règlement possible en 3 ou 4 versements. En cas de difficulté financière, n'hésitez pas à me contacter.</p>
              </div>
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
        /* === HERO SECTION MBCAS === */
        .hero-mbcas {
          padding: var(--spacing-20) 0;
          background: #fffcea;
          overflow: hidden;
        }

        .hero-mbcas-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--spacing-12);
          align-items: center;
          min-height: 70vh;
        }

        .hero-content-mbcas h1 {
          font-size: clamp(3rem, 6vw, 4.5rem);
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
          line-height: 1.1;
          font-weight: 700;
        }

        .hero-subtitle-mbcas {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
          font-weight: 500;
          line-height: 1.4;
        }

        .hero-description-mbcas p {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
          max-width: 55ch;
        }

        .hero-highlights-mbcas {
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

        .hero-image-mbcas {
          position: relative;
          height: 600px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .hero-image-mbcas img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .image-overlay-mbcas {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(31, 41, 55, 0.1) 0%, rgba(31, 41, 55, 0.05) 100%);
        }

        /* === BENEFITS SECTION AVEC VIDÉO === */
        .benefits-section-mbcas {
          padding: var(--spacing-16) 0;
          position: relative;
        }

        .benefits-section-mbcas .section-header {
          text-align: center;
          margin-bottom: var(--spacing-12);
        }

        .benefits-section-mbcas .section-header h2 {
          font-size: clamp(2.2rem, 4vw, 3rem);
          color: #fffcea;
          margin-bottom: var(--spacing-4);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
        }

        .benefits-section-mbcas .section-header p {
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

        .learning-outcomes {
          margin-bottom: var(--spacing-10);
        }

        .learning-outcomes h3 {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
          font-weight: 600;
        }

        .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-6);
        }

        .outcome-item {
          display: flex;
          gap: var(--spacing-4);
          align-items: flex-start;
        }

        .outcome-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .outcome-item h4 {
          font-size: 1.2rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-2);
          font-weight: 600;
        }

        .outcome-item p {
          color: var(--color-gray-700);
          line-height: 1.6;
          font-size: 1rem;
        }

        .program-format h3 {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
          font-weight: 600;
        }

        .format-highlights {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-6);
          padding: var(--spacing-6);
          background: var(--color-white);
          border-radius: var(--radius-lg);
          border-left: 4px solid var(--color-primary);
        }

        .format-item {
          color: var(--color-primary);
          font-size: 1.1rem;
        }

        .format-item strong {
          font-weight: 700;
        }

        .program-format p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--color-gray-700);
        }

        /* === VIDÉO STATIQUE === */
        .parallax-video-static {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          /* Suppression de autoPlay pour arrêter le mouvement */
        }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
          .hero-mbcas-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
            text-align: center;
          }
          
          .hero-image-mbcas {
            height: 400px;
            order: -1;
          }
          
          .hero-description-mbcas p {
            margin: 0 auto var(--spacing-8);
          }
        }

        @media (max-width: 1200px) {
          .journey-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
          }
        }

        @media (max-width: 768px) {
          .hero-mbcas {
            padding: var(--spacing-12) 0;
          }
          
          .hero-image-mbcas {
            height: 300px;
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

          .benefits-section-mbcas .container {
            padding: 0 var(--spacing-4);
            max-width: 100%;
            overflow-x: hidden;
          }
          
          .highlight-item {
            justify-content: center;
          }

          .outcomes-grid {
            grid-template-columns: 1fr;
          }

          .journey-content h2 {
            text-align: center;
          }

          .journey-intro {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 480px) {
          .benefits-section-mbcas {
            padding: var(--spacing-12) 0;
          }

          .benefits-section-mbcas .section-header h2 {
            font-size: clamp(1.8rem, 6vw, 2.5rem);
            padding: 0 var(--spacing-2);
          }

          .benefits-section-mbcas .section-header p {
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

        /* Styles existants */
        .value-section, .process-section, .practical-info {
          padding: var(--spacing-16) 0;
        }

        /* Value Section refined */
        .value-layout { display: grid; grid-template-columns: 1fr 1.6fr; gap: var(--spacing-12); align-items: center; }
        .value-left h2 { font-size: clamp(2.2rem, 4.2vw, 3rem); color: var(--color-primary); margin-bottom: var(--spacing-4); }
        .value-left .lead { font-size: 1.15rem; color: var(--color-text-secondary); line-height: 1.7; max-width: 48ch; text-align: justify; }

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

        /* Coaching details layout */
        .coaching-details-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: var(--spacing-12); align-items: start; }
        .coaching-text h2 { font-size: clamp(2.1rem, 4vw, 2.8rem); color: var(--color-primary); margin-bottom: var(--spacing-4); }
        .coaching-text p { color: var(--color-text-secondary); line-height: 1.8; }
        .coaching-text h3 { margin-top: var(--spacing-8); margin-bottom: var(--spacing-3); color: var(--color-primary); font-size: clamp(1.6rem, 2.2vw, 2rem); letter-spacing: 0.01em; }
        .coaching-aside { display: grid; gap: var(--spacing-6); }
        
        /* Larger process text */
        .process-text-large p { font-size: 1.25rem; line-height: 1.9; margin-bottom: var(--spacing-6); text-align: justify; }
        
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
