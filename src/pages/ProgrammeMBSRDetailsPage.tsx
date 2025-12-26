import React from 'react';
import { Clock, Users, Target, Heart, Sparkles } from 'lucide-react';
import VideoCTA from '../components/VideoCTA';
import PracticalInfoCard from '../components/PracticalInfoCard';

const ProgrammeMBSRDetailsPage: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Réduction du stress',
      description: 'Diminuez significativement votre niveau de stress grâce aux techniques validées scientifiquement.'
    },
    {
      icon: Heart,
      title: 'Bien-être physique',
      description: 'Améliorez votre relation au corps et développez une meilleure conscience corporelle.'
    },
    {
      icon: Sparkles,
      title: 'Équilibre mental',
      description: 'Cultivez la sérénité et la clarté mentale dans votre quotidien.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Introduction à la mindfulness',
      description: 'Découverte des fondamentaux de la pleine conscience et première expérience du scan corporel.'
    },
    {
      number: '02',
      title: 'Perception et réactivité',
      description: 'Exploration de nos perceptions automatiques et de nos réactions face au stress.'
    },
    {
      number: '03',
      title: 'Pleine conscience du corps',
      description: 'Approfondissement de la conscience corporelle par le yoga doux et le mouvement conscient.'
    },
    {
      number: '04',
      title: 'Pleine conscience du souffle',
      description: 'Développement de la respiration consciente comme ancrage dans le moment présent.'
    },
    {
      number: '05',
      title: 'Acceptation et lâcher-prise',
      description: 'Apprentissage de l\'accueil bienveillant de l\'expérience telle qu\'elle est.'
    },
    {
      number: '06',
      title: 'Pensées et émotions',
      description: 'Observation des patterns mentaux et développement d\'une relation saine aux émotions.'
    },
    {
      number: '07',
      title: 'Communication consciente',
      description: 'Application de la mindfulness dans les relations interpersonnelles.'
    },
    {
      number: '08',
      title: 'Maintien de la pratique',
      description: 'Intégration durable de la pleine conscience dans la vie quotidienne.'
    }
  ];

  return (
    <div className="mbsr-details-page service-detail-page">
      {/* Hero Section Élégant avec vidéo surf */}
      <section className="hero-mbsr">
        <div className="container">
          <div className="hero-mbsr-layout">
            <div className="hero-content-mbsr">
              <h1>Programme MBSR</h1>
              <p className="hero-subtitle-mbsr">
                Réduction du stress basée sur la pleine conscience
              </p>
              <div className="hero-description-mbsr">
                <p>
                  Ce programme est conçu pour toute personne souhaitant apprendre à réduire le stress, à
                  mieux gérer ses émotions et à améliorer sa qualité de vie. Que vous soyez confronté au stress
                  professionnel, familial ou que vous cherchiez à mieux gérer vos émotions, ce programme vous
                  offre des outils pratiques et profonds pour améliorer votre bien-être.
                </p>
              </div>
              <div className="hero-highlights-mbsr">
                <div className="highlight-item">
                  <Clock size={20} />
                  <span><strong>8 semaines</strong> • 2h30 par séance</span>
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
            <div className="hero-video-mbsr">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="hero-video-element"
              >
                <source src="/surf_MBCR.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay-mbsr"></div>
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
            <h2>Les bénéfices du programme</h2>
            <p>Une approche scientifiquement validée pour réduire le stress et cultiver le bien-être</p>
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
              <h2>Un parcours de 8 semaines vers la sérénité</h2>
              <p className="journey-intro">
                Le programme MBSR vous guide progressivement dans l'apprentissage de techniques validées scientifiquement
                pour réduire le stress et développer une relation plus sereine avec vos émotions et vos pensées.
              </p>

              <div className="learning-outcomes">
                <h3>Ce que vous allez développer</h3>
                <div className="outcomes-grid">
                  <div className="outcome-item">
                    <div className="outcome-icon">🌊</div>
                    <div>
                      <h4>Gestion du stress</h4>
                      <p>Apprenez à identifier vos réactions automatiques et développez de nouvelles réponses adaptatives.</p>
                    </div>
                  </div>
                  <div className="outcome-item">
                    <div className="outcome-icon">🧘</div>
                    <div>
                      <h4>Conscience corporelle</h4>
                      <p>Cultivez une relation bienveillante avec votre corps à travers des pratiques douces.</p>
                    </div>
                  </div>
                  <div className="outcome-item">
                    <div className="outcome-icon">💭</div>
                    <div>
                      <h4>Clarté mentale</h4>
                      <p>Observez vos pensées avec recul et développez la stabilité mentale.</p>
                    </div>
                  </div>
                  <div className="outcome-item">
                    <div className="outcome-icon">💝</div>
                    <div>
                      <h4>Bienveillance</h4>
                      <p>Intégrez l'autocompassion et la bienveillance dans votre quotidien.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="journey-aside">
              <PracticalInfoCard
                variant="primary"
                isSticky={true}
                duration={<>8 séances hebdomadaires<br /><small>2h30 chacune</small></>}
                format={<>Petit groupe<br /><small>5 à 10 participants</small></>}
                tarifs={[{
                  amount: '330€',
                  label: 'Programme complet',
                  details: ''
                }]}
                pricingNote="Entretien préalable • Acompte 30% • Paiement fractionné possible"
              >
                <div className="info-section-enhanced custom-support-section">
                  <h3 className="section-subtitle-enhanced">Accompagnement inclus</h3>
                  <div className="support-items">
                    <div className="support-item">
                      <span className="support-icon">📅</span>
                      <div className="support-content">
                        <div className="support-title">Réunion d'information</div>
                        <div className="support-desc">Découvrez le programme avant de vous engager</div>
                      </div>
                    </div>
                    <div className="support-item">
                      <span className="support-icon">📚</span>
                      <div className="support-content">
                        <div className="support-title">Supports complets</div>
                        <div className="support-desc">Livrets, audios et exercices pratiques</div>
                      </div>
                    </div>
                    <div className="support-item">
                      <span className="support-icon">🏠</span>
                      <div className="support-content">
                        <div className="support-title">Pratique quotidienne</div>
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
        subtitle="Contactez-moi pour obtenir des informations détaillées sur les dates, les horaires, le lieu et les modalités d'inscription."
        buttonText="M'inscrire au programme MBSR"
        buttonLink="/contact-reservation"
      />

      <style>{`
        /* === HERO SECTION MBSR === */
        .hero-mbsr {
          padding: var(--spacing-20) 0;
          background: #fffcea;
          overflow: hidden;
        }

        .hero-mbsr-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--spacing-12);
          align-items: center;
          min-height: 70vh;
        }

        .hero-content-mbsr h1 {
          font-size: clamp(3rem, 6vw, 4.5rem);
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
          line-height: 1.1;
          font-weight: 700;
        }

        .hero-subtitle-mbsr {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
          font-weight: 500;
          line-height: 1.4;
        }

        .hero-description-mbsr p {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
          max-width: 55ch;
        }

        .hero-highlights-mbsr {
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

        .hero-video-mbsr {
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

        .video-overlay-mbsr {
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
          grid-template-columns: 1.8fr 1.2fr;
          gap: var(--spacing-8);
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

        /* Enhanced outcomes grid pour une meilleure utilisation de l'espace */
        .outcomes-grid-enhanced {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-5);
          margin-top: var(--spacing-6);
        }

        .outcome-item-enhanced {
          display: flex;
          gap: var(--spacing-3);
          align-items: flex-start;
          padding: var(--spacing-4);
          background: rgba(255, 255, 255, 0.7);
          border-radius: 12px;
          border: 1px solid rgba(139, 134, 98, 0.1);
          transition: all 0.3s ease;
        }

        .outcome-item-enhanced:hover {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(139, 134, 98, 0.2);
          transform: translateY(-2px);
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

        /* === RESPONSIVE === */
        @media (max-width: 1200px) {
          .journey-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
          }
        }

        @media (max-width: 1024px) {
          .hero-mbsr-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
            text-align: center;
          }
          
          .hero-video-mbsr {
            height: 400px;
            order: -1;
          }
          
          .hero-description-mbsr p {
            margin: 0 auto var(--spacing-8);
          }
        }

        @media (max-width: 768px) {
          .hero-mbsr {
            padding: var(--spacing-12) 0;
          }
          
          .hero-video-mbsr {
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

          .benefits-section-mbsr .container {
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

          .outcomes-grid-enhanced {
            grid-template-columns: 1fr;
          }

          .modalities-grid {
            gap: var(--spacing-3);
          }

          .modality-card {
            padding: var(--spacing-3);
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
          .benefits-section-mbsr {
            padding: var(--spacing-12) 0;
          }

          .benefits-section-mbsr .section-header h2 {
            font-size: clamp(1.8rem, 6vw, 2.5rem);
            padding: 0 var(--spacing-2);
          }

          .benefits-section-mbsr .section-header p {
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

export default ProgrammeMBSRDetailsPage;

