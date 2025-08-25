import React from 'react';
import { Clock, Users, Target, Heart, Sparkles } from 'lucide-react';
import VideoCTA from '../components/VideoCTA';

const JeuDuTaoDetailsPage: React.FC = () => {
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
                    <h1>Jeu du Tao santé et mieux-être</h1>
                </div>
            </section>

            {/* Value proposition avec bénéfices */}
            <section className="section value-section">
                <div className="container">
                    <div className="value-layout">
                        <div className="value-left">
                            <h2>Devenez le héros de votre propre légende – Jeu collectif</h2>
                            <p className="lead">
                                Le jeu du tao du Mieux-être est une expérience interactive et immersive qui invite chaque
                                participant à se connecter à ses propres objectifs personnels de bien-être, de santé et
                                d’équilibre de vie. A travers un voyage initiatique, chaque joueur définit sa propre quête et
                                avec le soutien du collectif, se lance dans un cheminement d’introspection pour atteindre ses
                                aspirations les plus profondes.
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
                        <h2>Un parcours immersif de 4 à 5 heures pour explorer vos aspirations profondes.</h2>

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

            {/* Détails du jeu */}
            <section className="section coaching-details">
                <div className="container">
                    <div className="coaching-details-grid">
                        <div className="coaching-text">
                            <h2>Présentation du jeu</h2>
                            <p>
                                Ce jeu est une démarche proactive où chaque participant est encouragé à explorer ses ressources intérieures et à prendre des décisions qui favoriseront son épanouissement et sa qualité de vie à long terme.
                            </p>
                            <h3>Objectifs du jeu du Tao et du Mieux-Être</h3>
                            <ul className="objectives-list-large">
                                <li><strong>Clarifier ses aspirations personnelles :</strong> Chaque participant définit ses objectifs en lien avec son équilibre de vie.</li>
                                <li><strong>Explorer les dimensions essentielles de la vie :</strong> à travers quatre mondes symboliques, les joueurs seront confrontés à des questions profondes.</li>
                                <li><strong>Favoriser l’introspection et l’harmonisation :</strong> le cheminement permet à chaque participant de faire émerger des informations sur lui-même.</li>
                                <li><strong>Intelligence et entraide collective :</strong> l’échange et le soutien entre les participants renforcent l’expérience.</li>
                            </ul>
                            <h3>Le déroulement du jeu</h3>
                            <div className="process-text-large">
                                <p>
                                    Le jeu se déroule sur une session de 4 heures avec un maximum de 4 joueurs par
                                    groupe. Chaque joueur va traverser 4 mondes symboliques :
                                </p>
                                <p>
                                    <strong>Le monde de la Terre :</strong> questionne la stabilité et l’ancrage.
                                </p>
                                <p>
                                    <strong>Le monde de l’Eau :</strong> explore les émotions, leur gestion et leur impact.
                                </p>
                                <p>
                                    <strong>Le monde du Feu :</strong> permet aux joueurs de découvrir leurs ressources et forces intérieures.
                                </p>
                                <p>
                                    <strong>Le monde de l’Air :</strong> questionne la clarté mentale et l’ouverture au champ des possibilités.
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
                                            <strong>Durée</strong>
                                            <span>4 à 5 heures par session</span>
                                        </div>
                                    </div>
                                    <div className="detail-item-revisited">
                                        <Users size={22} />
                                        <div>
                                            <strong>Modalités</strong>
                                            <span>Jusqu'à 4 participants - Présentiel ou en ligne</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-section">
                                    <div className="price-row">
                                        <div className="price-amount">70€</div>
                                        <div className="price-label">Par personne</div>
                                    </div>
                                    <div className="price-row">
                                        <div className="price-amount">Sessions</div>
                                        <div className="price-label">Ponctuelles</div>
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

export default JeuDuTaoDetailsPage;
