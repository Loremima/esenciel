import React from 'react';
import { Clock, Users, Target, Heart, Sparkles, MapPin } from 'lucide-react';
import VideoCTA from '../components/VideoCTA';

const PleineConscienceDetailsPage: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Conscience de soi',
      description: 'Développez une meilleure connaissance de vos besoins et de vos réactions.'
    },
    {
      icon: Heart,
      title: 'Équilibre émotionnel',
      description: 'Apprenez à accueillir et réguler vos émotions avec bienveillance.'
    },
    {
      icon: Sparkles,
      title: 'Sérénité quotidienne',
      description: 'Intégrez la pleine conscience dans votre vie pour plus de paix intérieure.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Première rencontre',
      description: 'Écoute de vos besoins, exploration de vos objectifs et définition du cadre d\'accompagnement.'
    },
    {
      number: '02',
      title: 'Initiation aux pratiques',
      description: 'Découverte des techniques de base : respiration consciente, scan corporel et méditation.'
    },
    {
      number: '03',
      title: 'Approfondissement',
      description: 'Développement de votre pratique personnelle avec des exercices adaptés à votre quotidien.'
    },
    {
      number: '04',
      title: 'Intégration et échanges',
      description: 'Partage d\'expériences, ajustements et renforcement des acquis pour une pratique autonome.'
    },
    {
      number: '05',
      title: 'Autonomie et suivi',
      description: 'Consolidation de votre pratique avec des outils pour maintenir votre équilibre durablement.'
    }
  ];

  return (
    <div className="pleine-conscience-details-page service-detail-page">
      {/* Hero Section Élégant avec vidéo sand */}
      <section className="hero-pleine-conscience">
        <div className="container">
          <div className="hero-pleine-conscience-layout">
            <div className="hero-content-pleine-conscience">
              <h1>Pleine conscience</h1>
              <p className="hero-subtitle-pleine-conscience">
                Ralentir pour mieux se retrouver
              </p>
              <div className="hero-description-pleine-conscience">
                <p>
                  Cet accompagnement vous invite à ralentir, à vous poser, à respirer, pour cultiver
                  une qualité de présence plus profonde et plus authentique à vous-même. Grâce
                  aux outils de la pleine conscience, vous apprendrez à être à l'écoute de votre
                  intériorité et à apaiser votre cœur.
                </p>
              </div>
              <div className="hero-highlights-pleine-conscience">
                <div className="highlight-item">
                  <Clock size={20} />
                  <span><strong>45min-1h</strong> par séance</span>
                </div>
                <div className="highlight-item">
                  <Users size={20} />
                  <span><strong>Individuel</strong> • Accompagnement personnalisé</span>
                </div>
                <div className="highlight-item">
                  <span className="price-highlight"><strong>Sur devis</strong> • Adapté à vos besoins</span>
                </div>
              </div>
            </div>
            <div className="hero-video-pleine-conscience">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="hero-video-element"
              >
                <source src="/sand_conscience.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay-pleine-conscience"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section des bénéfices avec vidéo de fond */}
      <section className="section benefits-section-pleine-conscience parallax-surface">
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
            <p>Un chemin vers plus de clarté, de sens et d'alignement avec votre essence</p>
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

      {/* Section unifiée : Expérience d'accompagnement et déroulement */}
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
                <h3>Déroulement de l'accompagnement</h3>
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

              <div className="techniques-exploration">
                <h3>Techniques et pratiques intégrées</h3>
                <div className="techniques-grid">
                  <div className="technique-item">
                    <div className="technique-icon">🫁</div>
                    <div>
                      <h4>Respiration consciente</h4>
                      <p>Maîtrise des techniques respiratoires pour apaiser le mental et retrouver votre centre.</p>
                    </div>
                  </div>
                  <div className="technique-item">
                    <div className="technique-icon">🧘‍♀️</div>
                    <div>
                      <h4>Méditations guidées</h4>
                      <p>Pratiques adaptées à votre expérience et à vos objectifs personnels de bien-être.</p>
                    </div>
                  </div>
                  <div className="technique-item">
                    <div className="technique-icon">🌺</div>
                    <div>
                      <h4>Scan corporel</h4>
                      <p>Développement de la conscience corporelle pour une connexion authentique à vos ressentis.</p>
                    </div>
                  </div>
                  <div className="technique-item">
                    <div className="technique-icon">💗</div>
                    <div>
                      <h4>Pratiques d'autocompassion</h4>
                      <p>Cultiver une relation bienveillante et apaisante avec vous-même et vos émotions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="journey-aside">
              <div className="info-card-enhanced">
                <h2>Informations pratiques</h2>
                <div className="info-section-enhanced">
                  <div className="modalities-grid">
                    <div className="modality-card">
                      <Users size={24} className="modality-icon-revisited" />
                      <div className="modality-content">
                        <div className="modality-label">Format</div>
                        <div className="modality-value">Accompagnement individuel</div>
                        <div className="modality-detail">Une approche sur-mesure</div>
                      </div>
                    </div>
                    <div className="modality-card">
                      <Clock size={24} className="modality-icon-revisited" />
                      <div className="modality-content">
                        <div className="modality-label">Durée</div>
                        <div className="modality-value">45min - 1h</div>
                        <div className="modality-detail">Adaptée à votre rythme</div>
                      </div>
                    </div>
                    <div className="modality-card">
                      <MapPin size={24} className="modality-icon-revisited" />
                      <div className="modality-content">
                        <div className="modality-label">Lieu</div>
                        <div className="modality-value">Distanciel ou Présentiel</div>
                        <div className="modality-detail">Selon vos préférences</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pricing-section-enhanced">
                  <div className="price-display">
                    <div className="price-amount">Sur devis</div>
                    <div className="price-label">Séance personnalisée</div>
                  </div>
                  <div className="pricing-details">
                    Tarif adapté à vos besoins et à la fréquence des séances.
                  </div>
                  <a href="/contact-reservation" className="cta-button-card">
                    Demander un devis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <VideoCTA
        title="Prêt(e) à vous reconnecter à vous-même ?"
        subtitle="Contactez-moi pour discuter de vos besoins et commencer votre parcours vers plus de présence et de sérénité."
        buttonText="Demander un accompagnement"
        buttonLink="/contact-reservation"
      />

      <style>{`
        /* === HERO SECTION PLEINE CONSCIENCE === */
        .hero-pleine-conscience {
          padding: var(--spacing-20) 0;
          background: #fffcea;
          overflow: hidden;
        }

        .hero-pleine-conscience-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--spacing-12);
          align-items: center;
          min-height: 70vh;
        }

        .hero-content-pleine-conscience h1 {
          font-size: clamp(3rem, 6vw, 4.5rem);
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
          line-height: 1.1;
          font-weight: 700;
        }

        .hero-subtitle-pleine-conscience {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
          font-weight: 500;
          line-height: 1.4;
        }

        .hero-description-pleine-conscience p {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
          max-width: 55ch;
        }

        .hero-highlights-pleine-conscience {
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

        .hero-video-pleine-conscience {
          position: relative;
          height: 600px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .hero-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .video-overlay-pleine-conscience {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(31, 41, 55, 0.1) 0%, rgba(31, 41, 55, 0.05) 100%);
        }

        /* === BENEFITS SECTION AVEC VIDÉO === */
        .benefits-section-pleine-conscience {
          padding: var(--spacing-16) 0;
          position: relative;
        }

        .benefits-section-pleine-conscience .section-header {
          text-align: center;
          margin-bottom: var(--spacing-12);
        }

        .benefits-section-pleine-conscience .section-header h2 {
          font-size: clamp(2.2rem, 4vw, 3rem);
          color: #fffcea;
          margin-bottom: var(--spacing-4);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
        }

        .benefits-section-pleine-conscience .section-header p {
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

        .learning-outcomes, .techniques-exploration {
          margin-bottom: var(--spacing-10);
        }

        .learning-outcomes h3, .techniques-exploration h3 {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
          font-weight: 600;
        }

        .techniques-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-6);
        }

        .technique-item {
          display: flex;
          gap: var(--spacing-4);
          align-items: flex-start;
        }

        .technique-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 2px;
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
          flex-shrink: 0;
          margin-top: 2px;
        }

        .outcome-item h4, .technique-item h4 {
          font-size: 1.2rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-2);
          font-weight: 600;
        }

        .outcome-item p, .technique-item p {
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
        }

        .info-card-enhanced h2 {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
        }

        .info-section-enhanced {
          margin-bottom: var(--spacing-7);
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
          gap: var(--spacing-0); /* No gap needed with borders */
        }

        .modality-card {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-4);
          padding: var(--spacing-4) 0;
          border-bottom: 1px solid var(--color-gray-100);
        }

        .modality-card:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .modality-icon-revisited {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 4px;
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

        .modality-content {
          flex-grow: 1;
        }

        .pricing-section-enhanced {
          margin-top: var(--spacing-6);
          padding-top: var(--spacing-6);
          border-top: 1px solid var(--color-gray-100);
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
        
        .cta-button-card {
          display: block;
          width: 100%;
          text-align: center;
          background: var(--color-primary);
          color: white;
          padding: var(--spacing-3) var(--spacing-4);
          border-radius: var(--radius-md);
          font-weight: 600;
          text-decoration: none;
          margin-top: var(--spacing-5);
          transition: background-color 0.3s ease-out;
        }
        
        .cta-button-card:hover {
          background: #4A7A78; /* Darker primary */
        }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
          .hero-pleine-conscience-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
            text-align: center;
          }
          
          .hero-video-pleine-conscience {
            height: 400px;
            order: -1;
          }
          
          .hero-description-pleine-conscience p {
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
          .hero-pleine-conscience {
            padding: var(--spacing-12) 0;
          }
          
          .hero-video-pleine-conscience {
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

          .benefits-section-pleine-conscience .container {
            padding: 0 var(--spacing-4);
            max-width: 100%;
            overflow-x: hidden;
          }
          
          .highlight-item {
            justify-content: center;
          }

          .outcomes-grid, .techniques-grid {
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
          .benefits-section-pleine-conscience {
            padding: var(--spacing-12) 0;
          }

          .benefits-section-pleine-conscience .section-header h2 {
            font-size: clamp(1.8rem, 6vw, 2.5rem);
            padding: 0 var(--spacing-2);
          }

          .benefits-section-pleine-conscience .section-header p {
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
    </div >
  );
};

export default PleineConscienceDetailsPage;