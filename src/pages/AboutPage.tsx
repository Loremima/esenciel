import React, { useEffect, useState } from 'react';
import { Sparkles, Heart, Award, ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSlowMoVideo } from '../hooks/useSlowMoVideo';

const AboutPage: React.FC = () => {
  const videoRef = useSlowMoVideo();
  const quotes = [
    {
      text: 'Celui qui regarde l\'extérieur rêve, celui qui regarde à l\'intérieur s\'éveille.',
      author: 'Carl Jung',
    },
    {
      text: 'Connais-toi toi-même et tu connaîtras l\'univers et les dieux.',
      author: 'Socrate',
    },
    {
      text: 'Entre le stimulus et la réponse, il y a un espace. Dans cet espace se trouve notre pouvoir de choisir notre réponse. Dans notre réponse résident notre croissance et notre liberté.',
      author: 'Viktor Frankl',
    },
  ];

  const [currentQuote, setCurrentQuote] = useState(0);
  const [visibleQuote, setVisibleQuote] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleQuote(false);
      setTimeout(() => {
        setCurrentQuote(prev => (prev + 1) % quotes.length);
        setVisibleQuote(true);
      }, 600); // durée du fade-out
    }, 6000); // temps d\'affichage par citation

    return () => clearInterval(interval);
  }, [quotes.length]);
  const credentials = [
    {
      icon: Heart,
      title: 'Master en psychologie clinique',
      description: 'Spécialité en neuropsychologie',
      details: 'Approche intégrative',
    },
    {
      icon: Award,
      title: 'Coach prévention santé - Qualité de vie',
      description: 'Accompagnement holistique',
      details: 'Santé- Sérénité - Vitalité'
    },
    {
      icon: Sparkles,
      title: 'Instructrice de programmes basés sur la pleine conscience',
      description: 'Mindfulness-Based Interventions - MBIs',
      details: 'Certification des programmes MBCT - MBCAS'
    },
    {
      icon: Sparkles,
      title: 'Formatrice en éducation à la santé',
      description: 'Formation - Prévention - Education',
      details: 'Certification en Promotion et éducation à la santé'
    }
  ];

  const values = [
    {
      title: 'Bienveillance',
      description: 'Agir avec empathie et attention pour soutenir chacun dans son parcours.'
    },
    {
      title: "Respect de l'individualité",
      description: 'Accompagner chaque personne à son rythme, en tenant compte de ses besoins et de sa singularité.'
    },
    {
      title: 'Ouverture et curiosité',
      description: 'Explorer différentes approches et outils pour s\'adapter aux besoins uniques de chaque personne.'
    },
    {
      title: 'Authenticité',
      description: 'Être vrai et sincère dans mes interactions pour créer une relation de confiance.'
    },
    {
      title: 'Responsabilité',
      description: 'Assurer pleinement mon rôle et mon engagement envers ceux que j\'accompagne.'
    },
    {
      title: 'Honnêteté et intégrité',
      description: 'Agir avec transparence et éthique dans toutes mes pratiques.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section avec vidéo de fond */}
      <section className="hero-about">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/background.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Paysage serein - MindWayLife"
          />
        </video>

        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="hero-content">
          <div className="hero-text">
            <h1>Qui suis-je ?</h1>
            <p className="hero-subtitle">
              Coach & formatrice Santé et vitalité<br />
              Intructrice de programmes basés sur la pleine conscience.<br />
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section intro-section">
        <div className="container intro-container">
          <div className="intro-image">
            <img src="/vero.jpg" alt="Véronique Carrié" />
          </div>
          <div className="intro-text">
            <h2>Véronique Carrié</h2>
            <p> Je m'appelle Véronique Carrié. Ma passion pour l'humain m'a naturellement conduite vers des études en psychologie clinique, avec une spécialité en neuropsychologie. J'ai choisi cette voie afin d'explorer les mécanismes cognitifs et émotionnels qui influencent notre comportement dans le but de favoriser une meilleure qualité de vie.
            </p>
            <p>
              Au fil de mon parcours professionnel en clinique, j'ai constaté que la prévention, l'éducation à la santé et l'accompagnement vers une meilleure connaissance de soi pouvaient transformer profondément les trajectoires de vie. </p>
            <p><strong>Comprendre le fonctionnement de notre cerveau, c'est comme disposer d'une notice qui nous permet de faire des choix éclairés et d'aligner nos comportements.</strong></p>
            <p>
              C'est pourquoi, depuis quelques années, je propose des programmes d'accompagnement intégratifs, alliant les sciences psychologiques, la pleine conscience et l'éducation à la santé, pour encourager des comportements durables et bénéfiques. Mon rôle est de fournir des outils adaptés afin que chacun puisse trouver ses propres solutions, dans un esprit de co‑création et d'exploration. Mon objectif est d'aider les individus à mieux comprendre leurs propres mécanismes et à s'adapter aux changements de la vie. Je suis convaincue que chaque personne porte en elle ses propres ressources. Mon rôle est de remettre l'humain au cœur de ses décisions, en l'aidant à se reconnecter à ce qui fait sens pour lui.
            </p>
            <div className="intro-signature">
              Véronique
            </div>
          </div>
        </div>
      </section >

      {/* Section combinée Approche, Qualifications, Valeurs */}
      < section className="section combined-details parallax-surface" >
        <video autoPlay muted loop playsInline className="parallax-video">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="details-wrapper">
            {/* Colonne 1: Approche */}
            <div className="full-width-values">
              <h2 className="col-title">Mon approche</h2>
              <div className="philosophy-cards">
                <div className="philosophy-card">
                  <p>J'ai développé une vision de la santé et de la qualité de vie, alliant une perspective à la fois holistique et systémique. Plutôt que d'appliquer des solutions toutes faites, je crois fermement que chaque personne porte en elle ses propres ressources. Mon rôle est de remettre l'humain au cœur de ses décisions, en l'aidant à se reconnecter à ce qui fait sens pour lui.</p>
                  <p>Cette approche repose sur un processus de maturation continue, permettant à chacun d'assimiler ses expériences à son propre rythme. C'est un chemin d'apprentissage et de croissance, où l'autonomie et la responsabilisation sont au cœur du processus. Chacun devient acteur de sa santé et de son bien-être, en apprenant à mieux se connaître et à développer une écoute bienveillante envers soi-même.</p>
                  <p>Je privilégie une alliance bienveillante, respectueuse de la singularité de chacun, et j'intègre des pratiques alternatives non médicamenteuses, qui permettent d'observer et de dépasser les croyances limitantes.</p>
                </div>
              </div>
            </div>

            {/* Colonne 2: Qualifications */}
            <div className="full-width-values">
              <h2 className="col-title">Mes Qualifications</h2>
              <div className="credentials-grid four-cols">
                {credentials.map((credential, index) => {
                  const IconComponent = credential.icon;
                  return (
                    <div key={index} className="credential-card">
                      <div className="credential-icon">
                        <IconComponent size={28} />
                      </div>
                      <div className="credential-content">
                        <h4>{credential.title}</h4>
                        <p className="credential-description">{credential.description}</p>
                        <p className="credential-details">{credential.details}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section Valeurs en pleine largeur */}
            <div className="full-width-values">
              <div className="values-header">
                <h2 className="col-title">Mes Valeurs</h2>
                <p className="col-subtitle oneline">Les principes qui guident mon accompagnement au quotidien</p>
              </div>
              <div className="values-grid values-4-2">
                {values.map((value, index) => (
                  <div key={index} className="value-card">
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section Citation en pleine largeur */}
            <div className="full-width-quote">
              <div className="quote-section rotating">
                <blockquote className={`quote-rotating ${visibleQuote ? 'visible' : ''}`}>
                  « {quotes[currentQuote].text} »
                  <footer>– {quotes[currentQuote].author}</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* CTA */}
      < section className="section cta-about" >
        <div className="container">
          <div className="cta-content">
            <h2>Commençons ensemble</h2>
            <p>
              Vous souhaitez en savoir plus sur mon approche ou prendre rendez-vous ?
              Je serai ravie d'échanger avec vous.
            </p>
            <div className="cta-actions">
              <Link to="/contact-reservation" className="btn btn-primary">
                Prendre rendez-vous
                <CalendarDays size={16} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Découvrir mes services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section >

      {/* Disclaimer */}
      < section className="section disclaimer-section" >
        <div className="container">
          <p>
            <strong>Information importante :</strong> Mes programmes de pleine conscience et accompagnements offrent un appui précieux pour vivre pleinement chaque étape de votre vie, pour soutenir votre santé et votre bien-être. Ils ne remplacent en aucun cas un avis et suivi médical ou traitement prescrit par un professionnel de santé. Pour toute question d'ordre médical, veuillez consulter votre médecin.
          </p>
        </div>
      </section >

      <style>{`
        .invitation-text {
          font-style: italic;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
          font-size: 1.1rem;
        }

        /* === INTRO SECTION === */
        .intro-section {
          background: #fffcea;
          padding: var(--spacing-20) 0;
        }
        .intro-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--spacing-12);
          align-items: center;
        }
        .intro-image img {
          width: 100%;
          height: auto;
          border-radius: 50%;
          box-shadow: var(--shadow-xl);
          border: 6px solid var(--color-white);
        }
        .intro-text h2 {
          color: var(--color-primary);
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: var(--spacing-2);
        }
        .intro-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          font-weight: 600;
          color: var(--color-secondary-dark);
          margin-bottom: var(--spacing-6);
        }
        .intro-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-4); /* Ajout d'espacement */
          text-align: justify;
        }
        .intro-signature {
          font-family: 'Brush Script MT', cursive, 'Playfair Display', serif;
          font-style: italic;
          font-size: 2.2rem;
          color: var(--color-secondary-dark);
          text-align: right;
          margin-top: var(--spacing-8);
          position: relative;
          transform: rotate(-2deg);
        }
        @media (max-width: 768px) {
          .intro-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .intro-image {
            max-width: 250px;
            margin: 0 auto var(--spacing-8) auto;
          }
        }

        .about-page {
          padding-top: 0;
        }

        /* === HERO SECTION AVEC VIDÉO === */
        .hero-about {
          position: relative;
          min-height: 60vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: -2;
        }

        .hero-video img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #fffcea;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero-text h1 {
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 1.1;
          color: #fffcea;
          font-weight: 700;
          text-shadow: 0 4px 20px rgba(0,0,0,0.4);
          margin: 0 0 var(--spacing-6) 0;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          color: rgba(255, 252, 234, 0.9);
          font-weight: 300;
          margin: 0;
          line-height: 1.6;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          letter-spacing: 0.025em;
        }

        /* === SECTION COMBINÉE === */
        .combined-details {
          padding: var(--spacing-20) 0;
        }

        .details-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-10);
          align-items: start;
        }
        @media (max-width: 1024px) {
          .details-wrapper {
            grid-template-columns: 1fr;
            gap: var(--spacing-12);
          }
        }
        
        .philo-col {
          grid-column: 1 / 2;
        }
        .quali-col {
          grid-column: 2 / 3;
        }
        @media (max-width: 1024px) {
          .philo-col, .quali-col {
            grid-column: 1 / -1;
          }
        }

        .full-width-values,
        .full-width-quote {
          grid-column: 1 / -1;
        }

        .col-title {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #fffcea;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
          text-align: center;
          margin-bottom: var(--spacing-10);
        }
        
        .col-subtitle {
          color: rgba(255, 252, 234, 0.9);
          text-align: center;
          max-width: 300px;
          margin: -1rem auto 2rem;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .philosophy-cards {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-12);
          max-width: 760px;
          margin: 0 auto;
        }

        .philosophy-card {
            padding: var(--spacing-10);
        }

        .philosophy-card p {
            margin: 0;
            font-size: 1.12rem;
            line-height: 2;
            text-align: justify;
        }
        .philosophy-card p + p { margin-top: var(--spacing-6); }
        
        .quote-section {
            margin-top: 0;
            padding: var(--spacing-6);
        }

        .quote-section blockquote {
            font-family: var(--font-heading);
            font-style: italic;
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.9);
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
            line-height: 1.7;
            margin: 0;
            text-align: center;
        }
        .quote-section.rotating .quote-rotating {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 600ms ease, transform 600ms ease;
          min-height: 110px;
          display: grid;
          place-items: center;
        }
        .quote-section.rotating .quote-rotating.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .quote-section footer {
            margin-top: var(--spacing-4);
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.8);
            text-align: center;
        }

        .values-header { text-align: center; margin-bottom: var(--spacing-8); }
        .col-subtitle.oneline { max-width: 800px; margin: 0.5rem auto 0; font-size: 1.15rem; }

        .credentials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-6);
        }
        .credentials-grid.four-cols { grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 1024px) { .credentials-grid.four-cols { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .credentials-grid.four-cols { grid-template-columns: 1fr; } }
        
        .credential-card {
            position: relative;
            padding: var(--spacing-5);
            padding-left: calc(var(--spacing-6) + 44px);
            display: block;
            transition: all 0.3s ease;
        }

        .credential-card:hover { }

        .credential-icon {
            position: absolute;
            top: var(--spacing-5);
            left: var(--spacing-5);
            background: rgba(255, 255, 255, 0.15);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .credential-content {
          text-align: left;
        }
        
        .credential-content h4 {
            margin: 0 0 2px;
            font-size: 1.05rem;
            font-weight: 700;
            line-height: 1.3;
        }
        
        .credential-description {
            font-weight: 700;
            margin: 0 0 2px;
            font-size: 0.92rem;
            color: var(--color-secondary-dark);
        }

        .credential-details {
            font-size: 0.85rem;
            margin: 0;
            line-height: 1.5;
            opacity: 0.95;
        }

        .full-width-values {
          margin-top: var(--spacing-12);
        }
        .full-width-quote {
          margin-top: var(--spacing-8);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-6);
          max-width: 1200px;
          margin: 0 auto;
        }
        .values-grid.values-4-2 { grid-template-columns: repeat(4, 1fr); }
        .values-grid.values-4-2 .value-card:nth-last-child(2),
        .values-grid.values-4-2 .value-card:last-child { grid-column: span 2; }
        @media (max-width: 1024px) {
          .values-grid.values-4-2 { grid-template-columns: repeat(2, 1fr); }
          .values-grid.values-4-2 .value-card:nth-last-child(2),
          .values-grid.values-4-2 .value-card:last-child { grid-column: auto; }
        }
        @media (max-width: 640px) {
          .values-grid.values-4-2 { grid-template-columns: 1fr; }
        }

        .value-card {
          padding: var(--spacing-6);
          text-align: center;
          transition: all 0.4s ease;
        }

        .value-card:hover { }

        .value-card h3 {
          font-size: 1.1rem;
          margin-bottom: var(--spacing-2);
          font-weight: 600;
        }

        .value-card p {
          line-height: 1.6;
          margin: 0;
          font-size: 0.9rem;
        }

        /* Styles for cards on parallax */
        .parallax-surface .philosophy-card,
        .parallax-surface .credential-card,
        .parallax-surface .value-card {
            background: linear-gradient(135deg,
              rgba(255, 252, 234, 0.9) 0%,
              rgba(255, 252, 234, 0.7) 100%);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 252, 234, 0.4);
            border-radius: var(--radius-xl);
        }

        .parallax-surface .philosophy-card:hover,
        .parallax-surface .credential-card:hover,
        .parallax-surface .value-card:hover {
            background: linear-gradient(135deg,
              rgba(255, 252, 234, 0.95) 0%,
              rgba(255, 252, 234, 0.8) 100%);
            border-color: rgba(255, 252, 234, 0.6);
        }

        .parallax-surface .philosophy-card p,
        .parallax-surface .credential-card h4,
        .parallax-surface .credential-card p,
        .parallax-surface .value-card h3,
        .parallax-surface .value-card p {
            color: var(--color-primary-dark) !important;
            text-shadow: none !important;
        }
        .parallax-surface .credential-icon {
          color: var(--color-primary-dark);
        }

        .parallax-surface .credential-card .credential-description {
            color: var(--color-secondary-dark) !important;
        }
        
        /* === DISCLAIMER SECTION === */
        .disclaimer-section {
          background: #fffcea;
          padding: var(--spacing-10) 0 var(--spacing-16);
          text-align: center;
          border-top: 1px solid rgba(0,0,0,0.06);
        }
        .disclaimer-section .container {
          max-width: 900px;
        }
        .disclaimer-section p {
          font-size: 1rem;
          color: var(--color-gray-700);
          margin: 0;
          line-height: 1.9;
          font-style: italic;
        }
        .disclaimer-section strong {
          color: var(--color-primary);
          font-style: normal;
          display: block;
          margin-bottom: var(--spacing-2);
          font-size: 1.2rem;
          font-weight: 650;
        }


        /* === SECTION CTA === */
        .cta-about {
          background: #fffcea;
          color: var(--color-primary);
          padding: var(--spacing-20) 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        .cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
        }

        .cta-content p {
          font-size: clamp(1.2rem, 2.5vw, 1.45rem);
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
          line-height: 1.6;
          text-align: left;
        }

        .cta-actions {
          display: flex;
          gap: var(--spacing-6);
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: 1rem 2.25rem;
          border-radius: var(--radius-xl);
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          min-width: 210px;
          justify-content: center;
        }

        .btn-primary {
          background: var(--color-primary);
          color: #fffcea;
          border: 2px solid var(--color-primary);
        }

        .btn-primary:hover {
          background: var(--color-primary-dark);
          border-color: var(--color-primary-dark);
          box-shadow: 0 8px 25px rgba(85, 107, 47, 0.3);
        }

        .btn-outline {
          background: transparent;
          color: var(--color-primary);
          border: 2px solid var(--color-primary);
        }

        .btn-outline:hover {
          background: var(--color-primary);
          color: #fffcea;
          box-shadow: 0 8px 25px rgba(85, 107, 47, 0.2);
        }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
          .presentation-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-10);
          }
          .sidebar-content {
            position: static;
          }
          .values-header {
            flex-direction: column;
            gap: var(--spacing-2);
          }
        }
        
        @media (max-width: 768px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-text h1 {
            font-size: clamp(2.5rem, 8vw, 3.5rem);
          }

          .hero-subtitle {
            font-size: clamp(1.1rem, 3vw, 1.3rem);
          }

          .presentation,
          .values,
          .cta-about {
            padding: var(--spacing-16) 0;
          }

          .section-header {
            margin-bottom: var(--spacing-12);
          }

          .text-content h2 {
            font-size: clamp(2rem, 6vw, 2.5rem);
          }

          .philosophy {
            padding: var(--spacing-6);
          }

          .credentials-sidebar {
            padding: var(--spacing-6);
          }

          .credential-item {
            padding: var(--spacing-3);
          }

          .value-card {
            padding: var(--spacing-6);
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
            gap: var(--spacing-4);
          }

          .btn {
            min-width: 250px;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            padding: 0 1rem;
          }

          /* Container responsive défini dans globals.css */

          .philosophy blockquote {
            font-size: 1.1rem;
          }

          .credential-item {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-3);
          }
        }
      `}</style>
    </div >
  );
};

export default AboutPage;