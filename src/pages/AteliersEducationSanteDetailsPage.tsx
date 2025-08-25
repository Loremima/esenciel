import React from 'react';
import { Clock, Users, Target, Heart, Sparkles } from 'lucide-react';
import VideoCTA from '../components/VideoCTA';

const AteliersEducationSanteDetailsPage: React.FC = () => {
    const benefits = [
        {
            icon: Target,
            title: 'Bien-être au travail',
            description: 'Améliorez la qualité de vie au travail et réduisez le stress professionnel.'
        },
        {
            icon: Heart,
            title: 'Cohésion d\'équipe',
            description: 'Renforcez les liens entre collaborateurs autour du bien-être commun.'
        },
        {
            icon: Sparkles,
            title: 'Performance durable',
            description: 'Boostez la productivité grâce à des équipes plus épanouies et engagées.'
        }
    ];

    const processSteps = [
        {
            number: '01',
            title: 'Diagnostic et besoins',
            description: 'Évaluation des besoins spécifiques de votre organisation et de vos équipes.'
        },
        {
            number: '02',
            title: 'Conception sur mesure',
            description: 'Création d\'ateliers adaptés à votre secteur d\'activité et vos contraintes.'
        },
        {
            number: '03',
            title: 'Animation interactive',
            description: 'Ateliers participatifs mêlant théorie, pratique et échanges d\'expériences.'
        },
        {
            number: '04',
            title: 'Outils pratiques',
            description: 'Remise de supports et techniques applicables immédiatement au quotidien.'
        },
        {
            number: '05',
            title: 'Suivi et évaluation',
            description: 'Accompagnement post-atelier et mesure de l\'impact sur les équipes.'
        }
    ];

    return (
        <div className="ateliers-education-details-page service-detail-page">
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
                    <h1>Ateliers en éducation à la santé</h1>
                </div>
            </section>

            {/* Value proposition avec bénéfices */}
            <section className="section value-section">
                <div className="container">
                    <div className="value-layout">
                        <div className="value-left">
                            <h2>Les ateliers pratiques</h2>
                            <p className="lead">
                                Objectif : apprendre à mettre en pratique. Je propose des ateliers personnalisés pour les structures, adaptés à vos besoins et
                                à votre public. Chaque séance est conçue pour être interactive et pratique, afin
                                que les participants puissent appliquer immédiatement les techniques et conseils.
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
                        <h2>Un accompagnement sur mesure pour transformer votre culture d'entreprise.</h2>
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

            {/* Détails des ateliers */}
            <section className="section coaching-details">
                <div className="container">
                    <div className="coaching-details-grid">
                        <div className="coaching-text">
                            <h2>Exemples de thèmes</h2>
                            <ul className="objectives-list-large">
                                <li>Gestion du stress et bien-être mental</li>
                                <li>Sommeil et récupération</li>
                                <li>Santé cognitive et prévention</li>
                                <li>Prévention et promotion de la santé</li>
                                <li>Relations sociales et bien-être</li>
                            </ul>
                        </div>
                        <div className="coaching-aside">
                            <div className="info-card-merged">
                                <h2>Format sur commande</h2>
                                <div className="info-section">
                                    <div className="detail-item-revisited">
                                        <Clock size={22} />
                                        <div>
                                            <strong>Durée et contenu</strong>
                                            <span>Personnalisables selon vos besoins.</span>
                                        </div>
                                    </div>
                                    <div className="detail-item-revisited">
                                        <Users size={22} />
                                        <div>
                                            <strong>Thèmes</strong>
                                            <span>Possibilité de combiner plusieurs thèmes.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-section">
                                    <div className="price-row">
                                        <div className="price-amount">Sur devis</div>
                                        <div className="price-label">sur demande</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <VideoCTA
                title="Prêt(e) à transformer votre quotidien ?"
                subtitle="Contactez-moi pour discuter de vos besoins et concevoir des ateliers sur mesure pour vos équipes."
                buttonText="Demander un devis"
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

export default AteliersEducationSanteDetailsPage;
