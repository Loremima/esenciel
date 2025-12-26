import React from 'react';
import { Clock, Users, Target, Heart, Sparkles } from 'lucide-react';
import VideoCTA from '../components/VideoCTA';
import { useSlowMoVideo } from '../hooks/useSlowMoVideo';
import PracticalInfoCard from '../components/PracticalInfoCard';

const SanteQualiteVieDetailsPage: React.FC = () => {
  const videoRef = useSlowMoVideo();

  const benefits = [
    {
      icon: Target,
      title: 'Clarté sur vos objectifs',
      description: 'Identifiez précisément ce qui compte vraiment pour votre bien-être.'
    },
    {
      icon: Heart,
      title: 'Équilibre retrouvé',
      description: 'Harmonisez tous les aspects de votre vie pour un épanouissement global.'
    },
    {
      icon: Sparkles,
      title: 'Transformation durable',
      description: 'Instaurez des changements qui perdurent dans le temps.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Évaluation complète',
      description: 'Analyse approfondie de votre situation actuelle, de vos habitudes et de vos aspirations.'
    },
    {
      number: '02',
      title: 'Plan personnalisé',
      description: 'Création d\'un programme sur-mesure adapté à votre rythme de vie et vos objectifs.'
    },
    {
      number: '03',
      title: 'Accompagnement actif',
      description: 'Mise en œuvre progressive avec plusieurs séances pour des ajustements réguliers et un soutien continu.'
    },
    {
      number: '04',
      title: 'Autonomisation',
      description: 'Développement de votre capacité à maintenir vos nouvelles habitudes de façon autonome.'
    }
  ];

  return (
    <div className="sante-details-page service-detail-page">
      {/* Hero Section alignée aux autres pages */}
      <section className="hero-detail-shared">
        <div className="container">
          <div className="hero-detail-layout">
            <div className="hero-detail-content">
              <h1>Santé et vitalité</h1>
              <p className="hero-detail-subtitle">Acteur de sa santé, vers un bien-être durable</p>
              <div className="hero-detail-description">
                <p>
                  Ces accompagnements sont conçus pour vous aider à identifier et à mettre en
                  place des habitudes de vie favorables à votre bien-être global. Grâce à un suivi
                  personnalisé, nous explorerons ensemble les ressources internes qui vous
                  permettront d’adopter des pratiques quotidiennes bénéfiques pour votre santé.
                </p>
              </div>
              <div className="hero-detail-highlights">
                <div className="highlight-item-detail">
                  <Clock size={20} />
                  <span><strong>1h30 (1ère séance) / 1h (suivantes)</strong> • 1ère séance</span>
                </div>
                <div className="highlight-item-detail">
                  <Users size={20} />
                  <span><strong>Individuel</strong> • Présentiel ou visio</span>
                </div>
                <div className="highlight-item-detail">
                  <span className="price-highlight-detail"><strong>90€ / 60€</strong> • 1ère séance / Suivantes</span>
                </div>
              </div>
            </div>
            <div className="hero-detail-image">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="hero-detail-image-element"
              >
                <source src="/vitalité_sainté.mp4" type="video/mp4" />
              </video>
              <div className="image-overlay-detail"></div>
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

      {/* Section unifiée : Parcours et accompagnement */}
      <section className="section journey-section">
        <div className="container">
          <div className="journey-layout">
            <div className="journey-content">
              <h2>Votre parcours vers un bien-être durable</h2>
              <p className="journey-intro">
                Un accompagnement personnalisé en 4 étapes pour identifier vos habitudes de vie,
                mobiliser vos ressources internes et instaurer des changements durables alignés avec vos valeurs.
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

              <div className="objectives-exploration">
                <h3>Objectifs de l'accompagnement</h3>
                <div className="objectives-grid">
                  <div className="objective-item">
                    <div className="objective-icon">🎯</div>
                    <div>
                      <h4>Conscience et identification</h4>
                      <p>Prendre conscience de vos habitudes de vie et identifier les freins qui limitent votre épanouissement.</p>
                    </div>
                  </div>
                  <div className="objective-item">
                    <div className="objective-icon">💎</div>
                    <div>
                      <h4>Mobilisation des ressources</h4>
                      <p>Découvrir et mobiliser vos ressources personnelles pour une vie équilibrée et alignée.</p>
                    </div>
                  </div>
                  <div className="objective-item">
                    <div className="objective-icon">🚀</div>
                    <div>
                      <h4>Actions concrètes</h4>
                      <p>Mettre en place des actions adaptées à vos besoins pour améliorer durablement votre qualité de vie.</p>
                    </div>
                  </div>
                  <div className="objective-item">
                    <div className="objective-icon">🌱</div>
                    <div>
                      <h4>Motivation et engagement</h4>
                      <p>Soutenir et maintenir votre motivation pour des changements durables à long terme.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="journey-aside">
              <PracticalInfoCard
                variant="primary"
                isSticky={true}
                duration="1h30 (1ère séance) / 1h (suivantes)"
                format="Accompagnement individuel"
                location="Cabinet à Vaureilles ou en visio"
                priceFirst="90€"
                priceFirstDetails={<>Première séance<br /><small>(1h30 à 2h)</small></>}
                priceNext="60€"
                priceNextDetails={<>Séances suivantes<br /><small>(1h)</small></>}
                pricingNote="Entretien personnalisé • Règlement en fin de séance"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (video background, texte blanc) */}
      <VideoCTA
        title="Alors ? Prêt(e) à prendre en main votre santé et votre bien-être ?"
        subtitle="Réservez dès maintenant votre premier rendez-vous et engagez-vous dans un accompagnement sur mesure pour créer des changements durables."
        buttonText="Réserver ma séance"
        buttonLink="/contact-reservation"
      />

      {/* No local styles needed anymore, moved to globals.css */}
    </div>
  );
};

export default SanteQualiteVieDetailsPage;
