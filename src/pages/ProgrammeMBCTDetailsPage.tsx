import React from 'react';
import { Clock, Users, Target, Heart, Sparkles } from 'lucide-react';
import VideoCTA from '../components/VideoCTA';

const ProgrammeMBCTDetailsPage: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Prévention des rechutes',
      description: 'Réduisez significativement les risques de rechute dépressive grâce aux outils de la pleine conscience.'
    },
    {
      icon: Heart,
      title: 'Gestion des ruminations',
      description: 'Apprenez à vous libérer des cycles de pensées négatives et répétitives.'
    },
    {
      icon: Sparkles,
      title: 'Bien-être émotionnel',
      description: 'Développez une relation plus saine et bienveillante avec vos émotions.'
    }
  ];

  return (
    <div className="mbct-details-page service-detail-page">
      {/* Hero Section Élégant avec vidéo sunrise */}
      <section className="hero-mbct">
        <div className="container">
          <div className="hero-mbct-layout">
            <div className="hero-content-mbct">
              <h1>Programme MBCT</h1>
              <p className="hero-subtitle-mbct">
                Prévention des rechutes dépressives par la pleine conscience
              </p>
              <div className="hero-description-mbct">
                <p>
                  Ce programme de méditation de pleine conscience MBI-MindfulFrance est une approche
                  intégrative combinant le programme MBSR et le programme MBCT. Structuré en huit séances
                  hebdomadaires, ce protocole permet d'apprendre à observer ses pensées et émotions sans se laisser submerger.
                </p>
              </div>
              <div className="hero-highlights-mbct">
                <div className="highlight-item">
                  <Clock size={20} />
                  <span><strong>8 semaines</strong> • 2h-2h30 par séance</span>
                </div>
                <div className="highlight-item">
                  <Users size={20} />
                  <span><strong>5-10 pers.</strong> • Groupe</span>
                </div>
                <div className="highlight-item">
                  <span className="price-highlight"><strong>330€</strong> • Programme complet</span>
                </div>
              </div>
            </div>
            <div className="hero-video-mbct">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="hero-video-element"
              >
                <source src="/sunrise_MBCT.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay-mbct"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section des bénéfices avec vidéo de fond */}
      <section className="section benefits-section-mbct parallax-surface">
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
            <p>Une approche intégrative pour prévenir les rechutes et cultiver le bien-être émotionnel</p>
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
              <h2>Un parcours de 8 semaines vers la liberté émotionnelle</h2>
              <p className="journey-intro">
                Le programme MBCT vous accompagne dans l'apprentissage d'outils issus de la thérapie cognitive
                et de la pleine conscience pour briser les cycles de rumination et prévenir les rechutes dépressives.
              </p>

              <div className="learning-outcomes">
                <h3>Ce que vous allez développer</h3>
                <div className="outcomes-grid">
                  <div className="outcome-item">
                    <div className="outcome-icon">🌅</div>
                    <div>
                      <h4>Prévention des rechutes</h4>
                      <p>Développez des stratégies efficaces pour identifier et prévenir les épisodes dépressifs.</p>
                    </div>
                  </div>
                  <div className="outcome-item">
                    <div className="outcome-icon">🔄</div>
                    <div>
                      <h4>Liberté face aux ruminations</h4>
                      <p>Apprenez à vous détacher des cycles de pensées répétitives et négatives.</p>
                    </div>
                  </div>
                  <div className="outcome-item">
                    <div className="outcome-icon">💎</div>
                    <div>
                      <h4>Perspective sur les pensées</h4>
                      <p>Découvrez que les pensées ne sont pas des faits et développez la décentration cognitive.</p>
                    </div>
                  </div>
                  <div className="outcome-item">
                    <div className="outcome-icon">🤗</div>
                    <div>
                      <h4>Autocompassion</h4>
                      <p>Cultivez la bienveillance envers vous-même et des stratégies de bien-être durable.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="program-format">
                <h3>Organisation pratique</h3>
                <div className="format-highlights">
                  <div className="format-item">
                    <strong>8 séances hebdomadaires</strong> de 2h à 2h30 chacune
                  </div>
                  <div className="format-item">
                    <strong>Approche intégrative</strong> alliant pleine conscience et thérapie cognitive
                  </div>
                  <div className="format-item">
                    <strong>Petit groupe</strong> de 5 à 10 participants maximum
                  </div>
                </div>
                <p>
                  Chaque séance combine méditation de pleine conscience et techniques issues des thérapies cognitives et comportementales.
                  Vous apprendrez à observer vos pensées et émotions avec recul, développant une relation plus saine avec votre mental.
                </p>
              </div>
            </div>

            <div className="journey-aside">
              <div className="info-card-merged">
                <h2>Informations pratiques</h2>
                <div className="info-section">
                  <div className="detail-item-revisited">
                    <span>🎯</span>
                    <div>
                      <strong>Public spécialisé</strong>
                      <span>Personnes ayant vécu des épisodes dépressifs ou anxieux</span>
                    </div>
                  </div>
                  <div className="detail-item-revisited">
                    <span>📚</span>
                    <div>
                      <strong>Supports complets fournis</strong>
                      <span>Livrets, exercices et méditations guidées</span>
                    </div>
                  </div>
                  <div className="detail-item-revisited">
                    <span>🧠</span>
                    <div>
                      <strong>Outils cognitifs</strong>
                      <span>Techniques validées scientifiquement</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-section">
                  <div className="price-row">
                    <div className="price-amount">330€</div>
                    <div className="price-label">Programme complet</div>
                  </div>
                  <p className="small-text">Entretien préalable recommandé. Possibilité de régler en plusieurs fois.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <VideoCTA
        title="Prêt(e) à transformer votre quotidien ?"
        subtitle="Contactez-moi pour connaître les prochaines sessions MBCT et réserver votre place."
        buttonText="M'inscrire au programme MBCT"
        buttonLink="/contact-reservation"
      />

      <style>{`
        /* === HERO SECTION MBCT === */
        .hero-mbct {
          padding: var(--spacing-20) 0;
          background: #fffcea;
          overflow: hidden;
        }

        .hero-mbct-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--spacing-12);
          align-items: center;
          min-height: 70vh;
        }

        .hero-content-mbct h1 {
          font-size: clamp(3rem, 6vw, 4.5rem);
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
          line-height: 1.1;
          font-weight: 700;
        }

        .hero-subtitle-mbct {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
          font-weight: 500;
          line-height: 1.4;
        }

        .hero-description-mbct p {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
          max-width: 55ch;
        }

        .hero-highlights-mbct {
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

        .hero-video-mbct {
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

        .video-overlay-mbct {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(31, 41, 55, 0.1) 0%, rgba(31, 41, 55, 0.05) 100%);
        }

        /* === BENEFITS SECTION AVEC VIDÉO === */
        .benefits-section-mbct {
          padding: var(--spacing-16) 0;
          position: relative;
        }

        .benefits-section-mbct .section-header {
          text-align: center;
          margin-bottom: var(--spacing-12);
        }

        .benefits-section-mbct .section-header h2 {
          font-size: clamp(2.2rem, 4vw, 3rem);
          color: #fffcea;
          margin-bottom: var(--spacing-4);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
        }

        .benefits-section-mbct .section-header p {
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
          grid-template-columns: 1.5fr 1fr;
          gap: var(--spacing-12);
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
          max-width: 60ch;
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

        /* Info card */
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

        .info-section {
          margin-bottom: var(--spacing-6);
          padding-bottom: var(--spacing-6);
          border-bottom: 1px solid var(--color-gray-200);
        }

        .detail-item-revisited {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-4);
          color: var(--color-primary);
        }

        .detail-item-revisited:not(:last-child) {
          margin-bottom: var(--spacing-5);
        }

        .detail-item-revisited strong {
          display: block;
          font-size: 1.1rem;
          margin-bottom: 2px;
        }

        .detail-item-revisited span {
          font-size: 1rem;
          color: var(--color-text-secondary);
        }

        .pricing-section {
          display: grid;
          gap: var(--spacing-4);
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-3) 0;
        }

        .price-amount {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-primary);
        }

        .price-label {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          font-weight: 500;
        }

        .small-text {
          font-size: 0.9rem;
          color: var(--color-gray-600);
          line-height: 1.5;
        }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
          .hero-mbct-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
            text-align: center;
          }
          
          .hero-video-mbct {
            height: 400px;
            order: -1;
          }
          
          .hero-description-mbct p {
            margin: 0 auto var(--spacing-8);
          }

          .journey-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
          }
        }

        @media (max-width: 768px) {
          .hero-mbct {
            padding: var(--spacing-12) 0;
          }
          
          .hero-video-mbct {
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

          .benefits-section-mbct .container {
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
          .benefits-section-mbct {
            padding: var(--spacing-12) 0;
          }

          .benefits-section-mbct .section-header h2 {
            font-size: clamp(1.8rem, 6vw, 2.5rem);
            padding: 0 var(--spacing-2);
          }

          .benefits-section-mbct .section-header p {
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

export default ProgrammeMBCTDetailsPage;