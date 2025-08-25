import React from 'react';
import { Clock, Users, Target, Heart, Sparkles } from 'lucide-react';
import VideoCTA from '../components/VideoCTA';

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
                    <h1>Programme MBSR</h1>
                </div>
            </section>

            {/* Value proposition avec bénéfices */}
            <section className="section value-section">
                <div className="container">
                    <div className="value-layout">
                        <div className="value-left">
                            <h2>Programme MBSR sur la gestion du stress en 8 semaines</h2>
                            <p className="lead">
                                Ce programme est conçu pour toute personne souhaitant apprendre à réduire le stress, à
                                mieux gérer ses émotions et à améliorer sa qualité de vie. Que vous soyez confronté au stress
                                professionnel, familial ou que vous cherchiez à mieux gérer vos émotions, ce programme vous
                                offre des outils pratiques et profonds pour améliorer votre bien-être.
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
                        <h2>Un parcours en 8 semaines pour développer votre pratique de la pleine conscience.</h2>
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

            {/* Détails du programme */}
            <section className="section coaching-details">
                <div className="container">
                    <div className="coaching-details-grid">
                        <div className="coaching-text">
                            <h2>Le déroulement du programme</h2>
                            <p className="lead-text">
                                Le programme se déroule en 8 séances hebdomadaires de 2h30, animées en présentiel ou en
                                ligne. Chaque séance comporte des pratiques guidées de méditations et des temps de partage
                                d’expérience et d’information. Vous serez amenés à expérimenter progressivement des
                                méditations formelles : assises, allongées, en mouvement, mais aussi des pratiques
                                informelles afin de les intégrer au mieux dans vos activités de routine quotidienne.
                            </p>
                            <h3>Les grands axes du programme</h3>
                            <ul className="objectives-list-large">
                                <li>Introduction à la pleine conscience et à l’automatisation mentale</li>
                                <li>Exploration des pensées et de leur influence sur notre bien-être</li>
                                <li>Le stress et les réactions automatiques</li>
                                <li>L’acceptation et la non résistance</li>
                                <li>La pleine conscience en action</li>
                                <li>Cultiver la bienveillance et l’autocompassion</li>
                                <li>Maintenir la pleine conscience dans la vie courante</li>
                            </ul>
                        </div>
                        <div className="coaching-aside">
                            <div className="info-card-merged">
                                <h2>Tarifs et inscription</h2>
                                <div className="info-section">
                                    <p>Le coût inclus une réunion d’information, 8 séances, des livrets de formation, des fichiers audios et des exercices.</p>
                                </div>
                                <div className="pricing-section">
                                    <div className="price-row">
                                        <div className="price-amount">330€</div>
                                        <div className="price-label">Programme complet</div>
                                    </div>
                                    <p className="small-text">Votre inscription sera confirmée après un entretien. Un acompte de 30% est demandé. Possibilité de régler en plusieurs fois.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <VideoCTA
                title="Prêt(e) à transformer votre quotidien ?"
                subtitle="Contactez-moi pour obtenir des informations détaillées sur les dates, les horaires, le lieu et les modalités d’inscription."
                buttonText="M'inscrire au programme MBSR"
                buttonLink="/contact-reservation"
            />

            <style>{`
        /* Réutilisation des styles de SanteQualiteVieDetailsPage */
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
        </div>
    );
};

export default ProgrammeMBSRDetailsPage;
