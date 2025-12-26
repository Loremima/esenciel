import React from 'react';
import { Clock, Users, Target, Heart, Sparkles } from 'lucide-react';
import VideoCTA from '../components/VideoCTA';
import { useSlowMoVideo } from '../hooks/useSlowMoVideo';
import PracticalInfoCard from '../components/PracticalInfoCard';

const JeuDuTaoDetailsPage: React.FC = () => {

  const videoRef = useSlowMoVideo();

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
      <section className="section benefits-section-shared parallax-surface">
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

      {/* Section unifiée : Expérience du jeu et déroulement */}
      <section className="section journey-section">
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
              <PracticalInfoCard
                variant="primary"
                isSticky={true}
                duration="4 à 5 heures"
                format={<>Jeu collectif<br /><small>Présentiel ou en ligne</small></>}
                tarifs={[{
                  amount: '70€',
                  label: 'Par personne',
                  details: 'Groupe de 4 max.'
                }]}
                pricingNote="Sessions ponctuelles • Réservation obligatoire"
              >
                <div className="info-section-enhanced custom-support-section">
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
              </PracticalInfoCard>
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

      {/* No local styles needed anymore, moved to globals.css */}
    </div>
  );
};

export default JeuDuTaoDetailsPage;
