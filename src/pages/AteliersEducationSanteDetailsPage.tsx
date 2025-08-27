import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target, Users, Heart, BookOpen, Sparkles, Calendar,
  Building2, MapPin, Clock, CheckCircle, ArrowRight,
  Briefcase, TreePine, Moon, Brain, Shield, Award
} from 'lucide-react';
import { useSlowMoVideo } from '../hooks/useSlowMoVideo';

const AteliersEducationSanteDetailsPage: React.FC = () => {
  const videoRef = useSlowMoVideo();

  const entreprisesThemes = [
    {
      category: "Gestion du stress et prévention",
      themes: [
        "Gestion du stress et régulation des émotions",
        "Prévention de l'épuisement et du burn-out",
        "Renforcer la résilience et la capacité d'adaptation"
      ]
    },
    {
      category: "Équilibre et ressources personnelles",
      themes: [
        "Retrouver un équilibre de vie durable",
        "Mieux gérer son énergie et son temps",
        "Favoriser un sommeil réparateur"
      ]
    }
  ];

  const collectivitesPublics = [
    {
      icon: Users,
      title: "Seniors",
      description: "Favoriser le maintien de l'autonomie, soutenir la qualité de vie et encourager la sérénité ainsi que la résilience face aux défis du vieillissement."
    },
    {
      icon: Heart,
      title: "Aidants",
      description: "Offrir des espaces de répit et de ressourcement, pour souffler, prévenir l'épuisement et retrouver un meilleur équilibre personnel."
    },
    {
      icon: Shield,
      title: "Publics vulnérables ou en difficulté",
      description: "Proposer des approches accessibles et adaptées favorisant le bien-être, la confiance en soi et une meilleure capacité d'adaptation face aux difficultés."
    }
  ];

  const trustedBy = [
    "EHPAD Les Jardins",
    "Mairie de Toulouse",
    "Association AIDER",
    "Centre Social du Quartier",
    "Entreprise INNOV'TECH"
  ];

    return (
    <div className="ateliers-details-page service-detail-page">
            {/* Hero Section */}
      <section className="hero-ateliers">
        <div className="container">
          <div className="hero-ateliers-layout">
            <div className="hero-content-ateliers">
              <h1>Entreprises & collectivités</h1>
              <p className="hero-tagline">Offrir des espaces pour ralentir, respirer et se recentrer</p>
              <p className="hero-subtitle-ateliers">
                Investir dans plus de sérénité, c'est favoriser l'efficacité, l'équilibre et la santé –
                au sein de vos équipes comme auprès de vos publics.
              </p>
              <div className="hero-description-ateliers">
                <p>
                  Je propose des formations, ateliers expérientiels et conférences sur mesure, adaptés aux
                  besoins des entreprises et des collectivités. Mes interventions peuvent également s'intégrer
                  à des projets et appels d'offres dans les domaines de la prévention et éducation à la santé
                  ainsi que de la pleine conscience.
                </p>
              </div>
            </div>
            <div className="hero-video-ateliers">
                <video
                ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                className="hero-video-element"
                >
                    <source src="/background.mp4" type="video/mp4" />
                </video>
              <div className="video-overlay-ateliers"></div>
                        </div>
                    </div>
                </div>
            </section>

      {/* Section Entreprises */}
      <section className="section entreprises-section parallax-surface">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="parallax-video"
                >
                    <source src="/background.mp4" type="video/mp4" />
                </video>
        <div className="container">
          <div className="section-content-centered">
            <div className="section-header-detailed">
              <h2>Entreprises : Formations & ateliers expérientiels</h2>
              <p>
                J'accompagne vos équipes à travers des programmes adaptés, où la pratique et l'expérience
                sont au cœur de l'apprentissage. Chaque atelier ou formation permet de vivre concrètement
                des outils utiles et transférables dans la vie professionnelle comme personnelle.
              </p>
            </div>

            <div className="themes-container">
              <h3>Exemples de thématiques :</h3>
              {entreprisesThemes.map((group, idx) => (
                <div key={idx} className="theme-group">
                  <h4>{group.category} :</h4>
                  <ul className="theme-list">
                    {group.themes.map((theme, index) => (
                      <li key={index}>
                        <CheckCircle size={18} />
                        <span>{theme}</span>
                      </li>
                    ))}
                  </ul>
                    </div>
              ))}

              <div className="programme-note">
                <Brain size={24} />
                <p>
                  <strong>Programmes de pleine conscience :</strong> des parcours structurés et progressifs,
                  conçus pour développer la sérénité, la clarté d'esprit, une présence et concentration
                  plus stable, et une meilleure gestion du stress.
                </p>
                                </div>
                            </div>

            <div className="info-card-standalone">
              <p className="highlight-text">
                Chaque projet est élaboré sur mesure, en fonction de vos besoins, et fait l'objet
                d'un devis personnalisé.
              </p>
            </div>
                    </div>
                </div>
            </section>

      {/* Section Collectivités */}
      <section className="section collectivites-section">
                <div className="container">
          <div className="collectivites-layout">
            <div className="collectivites-content">
              <div className="section-badge">
                <MapPin size={20} />
                <span>Collectivités territoriales</span>
              </div>
              <h2>Accompagnement des publics fragiles</h2>
              <div className="intro-text">
                <p>
                  J'interviens auprès des collectivités territoriales dans le cadre d'appels à projets 
                  santé et bien-être, pour accompagner des publics spécifiques avec bienveillance 
                  et expertise.
                </p>
              </div>
              
              <div className="approach-highlights">
                <div className="highlight-item">
                  <Heart size={24} className="highlight-icon" />
                  <div>
                    <h4>Approche adaptée</h4>
                    <p>Programmes personnalisés selon les besoins de chaque public</p>
                  </div>
                        </div>
                <div className="highlight-item">
                  <Users size={24} className="highlight-icon" />
                                        <div>
                    <h4>Collaboration étroite</h4>
                    <p>Travail en partenariat avec les équipes locales</p>
                                        </div>
                                    </div>
                <div className="highlight-item">
                  <Target size={24} className="highlight-icon" />
                                        <div>
                    <h4>Impact mesurable</h4>
                    <p>Suivi et évaluation des bénéfices sur le bien-être</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="publics-sidebar">
              <h3>Publics accompagnés</h3>
              <div className="publics-list">
                {collectivitesPublics.map((publicTarget, index) => (
                  <div key={index} className="public-item">
                    <div className="public-icon-mini">
                      <publicTarget.icon size={20} />
                    </div>
                    <div className="public-info">
                      <h4>{publicTarget.title}</h4>
                      <p>{publicTarget.description}</p>
                    </div>
                  </div>
                ))}
              </div>
                                        </div>
                                    </div>
                                </div>
      </section>

      {/* Section Conférences */}
      <section className="section conferences-section parallax-surface">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="parallax-video"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="conferences-hero">
            <div className="conferences-intro">
              <div className="section-badge light">
                <Sparkles size={20} />
                <span>Conférences & événements</span>
              </div>
              <h2>Inspirez votre communauté</h2>
              <p className="conferences-lead">
                Des conférences interactives et inspirantes qui créent un élan collectif 
                vers plus de bien-être et de sérénité.
              </p>
            </div>

            <div className="conferences-impact">
              <div className="impact-card">
                <div className="impact-icon">
                  <Target size={28} />
                </div>
                <h3>Sensibilisation large</h3>
                <p>Touchez un public nombreux avec des messages impactants</p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">
                  <Users size={28} />
                </div>
                <h3>Élan collectif</h3>
                <p>Créez une dynamique positive dans votre communauté</p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">
                  <Heart size={28} />
                </div>
                <h3>Impact durable</h3>
                <p>Plantez des graines de transformation qui germeront</p>
              </div>
            </div>
          </div>

          <div className="conferences-formats">
            <h3>Formats adaptés à vos besoins</h3>
            <div className="formats-grid">
              <div className="format-card">
                <h4>Conférences plénières</h4>
                <p>Grandes assemblées, événements publics, séminaires</p>
              </div>
              <div className="format-card">
                <h4>Ateliers découverte</h4>
                <p>Sessions interactives avec pratiques guidées</p>
              </div>
              <div className="format-card">
                <h4>Tables rondes</h4>
                <p>Échanges participatifs autour de la santé et du bien-être</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Ils m'ont fait confiance */}
      <section className="section trust-section">
        <div className="container">
          <div className="trust-content">
            <h2>Ils m'ont fait confiance</h2>
            <p>Pour des conférences, des ateliers et des programmes de pleine conscience.</p>
            <div className="trust-logos">
              {trustedBy.map((org, index) => (
                <div key={index} className="trust-item">
                  <Award size={20} />
                  <span>{org}</span>
                </div>
              ))}
                                    </div>
                                </div>
                            </div>
      </section>

      {/* CTA Final avec fond vidéo */}
      <section className="section cta-final parallax-surface">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="parallax-video"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="cta-content-detailed">
            <h2>Et si nous ouvrions ensemble un espace de respiration et de sérénité pour vos équipes ?</h2>
            <div className="cta-actions">
              <Link to="/contact-reservation" className="btn btn-glass">
                Demander un devis
                <ArrowRight size={16} />
              </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        .ateliers-details-page {
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-ateliers {
          padding: var(--spacing-16) 0 var(--spacing-20);
          background: #fffcea;
          min-height: 60vh;
          display: flex;
          align-items: center;
        }

        .hero-ateliers-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-16);
          align-items: center;
        }

        .hero-content-ateliers {
          max-width: 600px;
        }

        .hero-content-ateliers h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: var(--spacing-4);
          color: var(--color-primary);
        }

        .hero-tagline {
          font-size: 1.4rem;
          color: var(--color-secondary);
          font-style: italic;
          margin-bottom: var(--spacing-4);
        }

        .hero-subtitle-ateliers {
          font-size: 1.25rem;
          color: var(--color-gray-700);
          line-height: 1.6;
          margin-bottom: var(--spacing-6);
          font-weight: 500;
        }

        .hero-description-ateliers {
          color: var(--color-gray-600);
          line-height: 1.7;
          font-size: 1.1rem;
        }

        .hero-video-ateliers {
          position: relative;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          height: 450px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .hero-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay-ateliers {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(184, 138, 43, 0.1) 0%,
            rgba(31, 41, 55, 0.05) 100%
          );
          pointer-events: none;
        }

        /* Sections communes */
        .section-content-centered {
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-header-detailed {
          text-align: center;
          margin-bottom: var(--spacing-12);
        }

        .section-icon {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-4);
        }

        .section-header-detailed h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: var(--spacing-6);
          color: var(--color-primary);
        }

        .section-header-detailed p {
          font-size: 1.2rem;
          line-height: 1.7;
          color: var(--color-gray-700);
          max-width: 800px;
          margin: 0 auto;
        }

        /* Section Entreprises avec fond vidéo */
        .entreprises-section {
          padding: var(--spacing-20) 0;
        }

        .entreprises-section.parallax-surface .section-header-detailed h2 {
          color: #fffcea !important;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }

        .entreprises-section.parallax-surface .section-header-detailed p {
          color: #fffcea !important;
          text-shadow: 0 1px 6px rgba(0,0,0,0.3);
          opacity: 0.95;
        }

        .themes-container {
          background: white;
          border-radius: var(--radius-2xl);
          padding: var(--spacing-8);
          margin-bottom: var(--spacing-8);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .themes-container h3 {
          font-size: 1.5rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
        }

        .theme-group {
          margin-bottom: var(--spacing-6);
        }

        .theme-group h4 {
          font-size: 1.2rem;
          color: var(--color-secondary);
          margin-bottom: var(--spacing-3);
        }

        .theme-list {
          list-style: none;
          padding: 0;
        }

        .theme-list li {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-3);
          padding: var(--spacing-2) 0;
          color: var(--color-gray-700);
          font-size: 1.05rem;
        }

        .theme-list li svg {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .programme-note {
          background: rgba(184, 138, 43, 0.1);
          border-radius: var(--radius-xl);
          padding: var(--spacing-6);
          margin-top: var(--spacing-8);
          display: flex;
          gap: var(--spacing-4);
          align-items: flex-start;
        }

        .programme-note svg {
          color: var(--color-secondary);
          flex-shrink: 0;
        }

        .info-card-standalone {
          background: var(--color-primary);
          color: white;
          padding: var(--spacing-6);
          border-radius: var(--radius-xl);
          text-align: center;
        }

        .highlight-text {
          font-size: 1.2rem;
          margin: 0;
          font-weight: 500;
        }

        /* Section Collectivités refaite */
        .collectivites-section {
          padding: var(--spacing-20) 0;
          background: #fffcea;
        }

        .collectivites-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--spacing-12);
          align-items: start;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-2);
          background: var(--color-primary);
          color: white;
          padding: var(--spacing-2) var(--spacing-4);
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: var(--spacing-4);
        }

        .section-badge.light {
          background: rgba(255, 252, 234, 0.2);
          color: #fffcea;
          border: 1px solid rgba(255, 252, 234, 0.3);
          backdrop-filter: blur(10px);
        }

        .collectivites-content h2 {
          font-size: clamp(2.2rem, 4vw, 3rem);
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
          line-height: 1.1;
        }

        .intro-text p {
          font-size: 1.2rem;
          line-height: 1.7;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
        }

        .approach-highlights {
          display: grid;
          gap: var(--spacing-6);
          margin-bottom: var(--spacing-8);
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-4);
        }

        .highlight-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .highlight-item h4 {
          font-size: 1.2rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-2);
          font-weight: 600;
        }

        .highlight-item p {
          color: var(--color-gray-700);
          line-height: 1.6;
        }

        .publics-sidebar {
          background: white;
          border-radius: var(--radius-2xl);
          padding: var(--spacing-8);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--color-gray-200);
          position: sticky;
          top: 2rem;
        }

        .publics-sidebar h3 {
          font-size: 1.4rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
          text-align: center;
        }

        .publics-list {
          display: grid;
          gap: var(--spacing-5);
        }

        .public-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-3);
          padding: var(--spacing-4);
          border-radius: var(--radius-lg);
          transition: background-color 0.2s ease;
        }

        .public-item:hover {
          background: var(--color-gray-50);
        }

        .public-icon-mini {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-secondary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .public-info h4 {
          font-size: 1rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-1);
          font-weight: 600;
        }

        .public-info p {
          font-size: 0.9rem;
          color: var(--color-gray-600);
          line-height: 1.5;
        }

        /* Section Conférences avec fond vidéo */
        .conferences-section {
          padding: var(--spacing-20) 0;
        }

        .conferences-hero {
          margin-bottom: var(--spacing-12);
        }

        .conferences-intro {
          text-align: center;
          margin-bottom: var(--spacing-10);
        }

        .conferences-intro h2 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: #fffcea !important;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
          margin-bottom: var(--spacing-4);
          line-height: 1.1;
        }

        .conferences-lead {
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          color: #fffcea !important;
          text-shadow: 0 1px 6px rgba(0,0,0,0.3);
          opacity: 0.95;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }

        .conferences-impact {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-6);
          margin-bottom: var(--spacing-12);
        }

        .impact-card {
          background: rgba(255, 252, 234, 0.95);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 252, 234, 0.3);
          border-radius: var(--radius-xl);
          padding: var(--spacing-6);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .impact-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 252, 234, 1);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        }

        .impact-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--color-primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-4);
        }

        .impact-card h3 {
          font-size: 1.3rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-3);
          font-weight: 600;
        }

        .impact-card p {
          color: var(--color-gray-700);
          line-height: 1.6;
        }

        .conferences-formats {
          background: rgba(255, 252, 234, 0.9);
          backdrop-filter: blur(15px);
          border-radius: var(--radius-2xl);
          padding: var(--spacing-8);
          border: 1px solid rgba(255, 252, 234, 0.4);
        }

        .conferences-formats h3 {
          font-size: 1.8rem;
          color: var(--color-primary);
          text-align: center;
          margin-bottom: var(--spacing-6);
        }

        .formats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-6);
        }

        .format-card {
          background: white;
          border-radius: var(--radius-lg);
          padding: var(--spacing-5);
          border: 1px solid var(--color-gray-200);
          transition: transform 0.2s ease;
        }

        .format-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .format-card h4 {
          font-size: 1.2rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-3);
          font-weight: 600;
        }

        .format-card p {
          color: var(--color-gray-700);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* Section Quote CTA */
        .quote-cta-section {
          background: var(--color-primary);
          padding: var(--spacing-16) 0;
          color: white;
        }

        .quote-cta-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .main-quote {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-style: italic;
          line-height: 1.5;
          margin: 0;
          font-family: var(--font-heading);
        }

        /* Section Trust */
        .trust-section {
          padding: var(--spacing-16) 0;
          background: var(--color-gray-50);
        }

        .trust-content {
          text-align: center;
        }

        .trust-content h2 {
          font-size: 2rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-3);
        }

        .trust-content > p {
          font-size: 1.2rem;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
        }

        .trust-logos {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-4);
          justify-content: center;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: var(--spacing-3) var(--spacing-6);
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          font-weight: 500;
          color: var(--color-gray-700);
        }

        .trust-item svg {
          color: var(--color-secondary);
        }

        /* CTA Final avec fond vidéo */
        .cta-final {
          padding: var(--spacing-20) 0;
        }

        .cta-content-detailed {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-content-detailed h2 {
          font-size: clamp(2.2rem, 4.2vw, 3rem);
          margin-bottom: var(--spacing-4);
          color: #fffcea !important;
          font-family: var(--font-heading);
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }

        .cta-content-detailed p {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          line-height: 1.7;
          color: #fffcea !important;
          text-shadow: 0 1px 6px rgba(0,0,0,0.3);
          opacity: 0.95;
          margin-bottom: var(--spacing-8);
        }

        .btn-outline-glass {
          background: rgba(255, 252, 234, 0.05) !important;
          border: 1px solid rgba(255, 252, 234, 0.4) !important;
        }

        .btn-outline-glass:hover {
          background: rgba(255, 252, 234, 0.15) !important;
          border-color: rgba(255, 252, 234, 0.6) !important;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-ateliers-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
          }

          .hero-video-ateliers {
            height: 350px;
          }

          .collectivites-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
          }

          .publics-sidebar {
            position: static;
          }

          .conferences-impact {
            grid-template-columns: 1fr;
          }

          .formats-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-ateliers {
            padding: var(--spacing-12) 0;
            min-height: auto;
          }

          .trust-logos {
            flex-direction: column;
            align-items: center;
          }

          .trust-item {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .cta-actions {
            flex-direction: column;
            gap: var(--spacing-3);
          }

          .cta-actions .btn {
            width: 100%;
          }
        }
      `}</style>
        </div>
    );
};

export default AteliersEducationSanteDetailsPage;