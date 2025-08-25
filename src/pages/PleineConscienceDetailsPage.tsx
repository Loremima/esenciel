import React from 'react';
import { Clock, Users, Target, Heart, Sparkles } from 'lucide-react';
import VideoCTA from '../components/VideoCTA';

const PleineConscienceDetailsPage: React.FC = () => {
    const benefits = [
        {
            icon: Target,
            title: 'Clarté mentale',
            description: 'Observez vos pensées avec bienveillance et libérez votre espace mental.'
        },
        {
            icon: Heart,
            title: 'Présence au cœur',
            description: 'Reconnectez-vous à vos besoins profonds et à l\'instant présent.'
        },
        {
            icon: Sparkles,
            title: 'Autonomie retrouvée',
            description: 'Développez votre capacité à gérer votre bien-être de manière durable.'
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

            {/* Section unifiée : Parcours et apprentissages */}
            <section className="section journey-section">
                <div className="container">
                    <div className="journey-layout">
                        <div className="journey-content">
                            <h2>Un accompagnement personnalisé vers la sérénité</h2>
                            <p className="journey-intro">
                                Cet accompagnement individuel vous guide dans l'apprentissage de techniques de pleine conscience
                                adaptées à votre rythme et à vos besoins spécifiques, pour une transformation en profondeur.
                            </p>

                            <div className="learning-outcomes">
                                <h3>Ce que vous allez développer</h3>
                                <div className="outcomes-grid">
                                    <div className="outcome-item">
                                        <div className="outcome-icon">🌊</div>
                                        <div>
                                            <h4>Écoute attentive</h4>
                                            <p>Développez une écoute plus fine de vos besoins et de vos ressentis profonds.</p>
                                        </div>
                                    </div>
                                    <div className="outcome-item">
                                        <div className="outcome-icon">🔍</div>
                                        <div>
                                            <h4>Clarification mentale</h4>
                                            <p>Apprenez à observer vos pensées avec recul et à libérer votre espace mental.</p>
                                        </div>
                                    </div>
                                    <div className="outcome-item">
                                        <div className="outcome-icon">💎</div>
                                        <div>
                                            <h4>Présence authentique</h4>
                                            <p>Cultivez une qualité de présence plus profonde à vous-même et au moment présent.</p>
                                        </div>
                                    </div>
                                    <div className="outcome-item">
                                        <div className="outcome-icon">🌱</div>
                                        <div>
                                            <h4>Autonomie durable</h4>
                                            <p>Intégrez des outils pratiques pour maintenir votre équilibre de façon autonome.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="program-format">
                                <h3>Organisation pratique</h3>
                                <div className="format-highlights">
                                    <div className="format-item">
                                        <strong>Accompagnement individuel</strong> personnalisé à votre rythme
                                    </div>
                                    <div className="format-item">
                                        <strong>Séances flexibles</strong> de 45 minutes à 1 heure
                                    </div>
                                    <div className="format-item">
                                        <strong>Distanciel ou présentiel</strong> selon vos préférences
                                    </div>
                                </div>
                                <p>
                                    Chaque séance combine pratiques guidées de pleine conscience, moments d'échange et d'exploration personnelle.
                                    L'approche s'adapte entièrement à votre situation et à vos objectifs de bien-être.
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
                                            <strong>Approche personnalisée</strong>
                                            <span>Adaptée à votre situation et vos besoins</span>
                                        </div>
                                    </div>
                                    <div className="detail-item-revisited">
                                        <span>🧘</span>
                                        <div>
                                            <strong>Pratiques guidées</strong>
                                            <span>Méditation, respiration et présence attentive</span>
                                        </div>
                                    </div>
                                    <div className="detail-item-revisited">
                                        <span>🌱</span>
                                        <div>
                                            <strong>Intégration quotidienne</strong>
                                            <span>Outils pratiques pour votre vie de tous les jours</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-section">
                                    <div className="price-row">
                                        <div className="price-amount">Sur devis</div>
                                        <div className="price-label">Accompagnement personnalisé</div>
                                    </div>
                                    <p className="small-text">Tarif adapté à la durée et fréquence de l'accompagnement. Contactez-moi pour un devis personnalisé.</p>
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
        </div>
    );
};

export default PleineConscienceDetailsPage;