import React from 'react';
import { Sparkles, Heart, Award, ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const credentials = [
    {
      icon: Sparkles,
      title: 'Instructrice MBSR',
      description: 'Mindfulness-Based Stress Reduction',
      details: 'Certification internationale en programmes de pleine conscience',
    },
    {
      icon: Heart,
      title: 'Coach Santé',
      description: 'Approche intégrative',
      details: 'Accompagnement holistique corps-esprit',
    },
    {
      icon: Award,
      title: 'Formation Continue',
      description: 'Expertise en développement',
      details: 'Perfectionnement constant des pratiques',
    },
  ];

  const values = [
    {
      title: 'Bienveillance',
      description: 'Un accompagnement dans le respect et l\'écoute de votre rythme personnel'
    },
    {
      title: 'Autonomisation',
      description: 'Vous rendre acteur de votre bien-être et de votre développement'
    },
    {
      title: 'Approche Intégrative',
      description: 'Allier sciences psychologiques, pleine conscience et éducation santé'
    },
    {
      title: 'Vision Holistique',
      description: 'Prendre en compte la globalité de votre être : corps, esprit, émotions'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section avec vidéo de fond */}
      <section className="hero-about">
        <video
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
              Psychologue clinicienne spécialisée en neuropsychologie<br />
              Approche intégrative, bienveillante et centrée sur l'autonomie
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
            <p className="intro-subtitle">Instructrice MBSR & Coach Santé</p>
            <p> Je m'appelle Véronique Carrié, et ma passion pour l'humain m'a naturellement conduite vers des études en psychologie clinique, avec une spécialité en neuropsychologie, pour explorer les mécanismes cognitifs et émotionnels qui influencent notre comportement, et favoriser une meilleure qualité de vie.
            </p>
            <p>
              Au fil de mon parcours professionnel en clinique, j'ai constaté que la prévention, l'éducation à la santé et l'accompagnement vers une meilleure connaissance de soi pouvaient transformer profondément les trajectoires de vie. Comprendre le fonctionnement, c'est comme disposer d'une notice, un outil précieux pour faire des choix éclairés.
            </p>
            <p>
              C'est pourquoi, depuis quelques années, je propose des programmes d'accompagnement intégratifs, alliant les sciences psychologiques, la pleine conscience et l'éducation à la santé, pour encourager des comportements durables et bénéfiques. Mon rôle est de fournir des outils adaptés afin que chacun puisse trouver ses propres solutions, dans un esprit de co‑création et d'exploration. Mon objectif est d'aider les individus à mieux comprendre leurs propres mécanismes et à s'adapter aux changements de la vie.
            </p>
            <div className="intro-signature">
              Véronique
            </div>
          </div>
        </div>
      </section>

      {/* Section combinée Approche, Qualifications, Valeurs */}
      <section className="section combined-details parallax-surface">
        <video autoPlay muted loop playsInline className="parallax-video">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="details-wrapper">
            {/* Colonne 1: Approche */}
            <div className="full-width-values">
              <h2 className="col-title">Ma philosophie</h2>
              <div className="philosophy-cards">
                <div className="philosophy-card">
                  <p>J'ai développé une vision globale de la santé et de la qualité de vie, alliant une perspective à la fois holistique et systémique. Plutôt que d'appliquer des solutions toutes faites, je crois fermement que chaque personne porte en elle ses propres ressources. Mon rôle est de remettre l'humain au cœur de ses décisions, en l'aidant à se reconnecter à ce qui fait sens pour lui.</p>
                  <p>Cette approche repose sur un processus de maturation continue, permettant à chacun d'assimiler ses expériences à son propre rythme. C'est un chemin d'apprentissage et de croissance, où l'autonomie et la responsabilisation sont au cœur du processus. Chacun devient acteur de sa santé et de son bien-être, en apprenant à mieux se connaître et à développer une écoute bienveillante envers soi-même.</p>
                  <p>Je privilégie une alliance bienveillante, respectueuse de la singularité de chacun, et j'intègre des pratiques alternatives non médicamenteuses, qui permettent d'observer et de dépasser les croyances limitantes.</p>
                </div>
              </div>
            </div>

            {/* Colonne 2: Qualifications */}
            <div className="full-width-values">
              <h2 className="col-title">Mes Qualifications</h2>
              <div className="credentials-grid">
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
              <div className="values-grid">
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
              <div className="quote-section">
                <blockquote>
                  « Celui qui regarde l'extérieur rêve, celui qui regarde à l'intérieur s'éveille. »
                  <footer>– Carl Jung</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-about">
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
      </section>

      {/* Disclaimer */}
      <section className="section disclaimer-section">
        <div className="container">
          <p>
            <strong>Avis de non-responsabilité :</strong> Je ne suis pas médecin. Mes accompagnements et conseils visent au bien-être et au développement personnel, mais ne se substituent en aucun cas à un avis médical, un diagnostic ou un traitement prescrit par un professionnel de la santé. Pour toute question d'ordre médical, veuillez consulter votre médecin.
          </p>
        </div>
      </section>

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
        }
        .intro-signature {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 2rem;
          color: var(--color-secondary-dark);
          margin-top: var(--spacing-6);
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
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
          text-align: center;
          margin-bottom: var(--spacing-10);
        }
        
        .col-subtitle {
          color: rgba(255, 255, 255, 0.8);
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
            text-align: left;
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

        .credential-card {
            padding: var(--spacing-5);
            display: flex;
            align-items: center;
            gap: var(--spacing-5);
            transition: all 0.3s ease;
        }

        .credential-card:hover { }

        .credential-icon {
            background: rgba(255, 255, 255, 0.2);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        .credential-content {
          text-align: left;
        }
        
        .credential-content h4 {
            margin: 0 0 var(--spacing-1);
            font-size: 1.1rem;
            font-weight: 600;
        }
        
        .credential-description {
            font-weight: 600;
            margin: 0 0 var(--spacing-1);
            font-size: 0.9rem;
        }

        .credential-details {
            font-size: 0.85rem;
            margin: 0;
            line-height: 1.5;
            opacity: 0.9;
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
              rgba(255, 255, 255, 0.8) 0%,
              rgba(255, 255, 255, 0.5) 100%);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: var(--radius-xl);
        }

        .parallax-surface .philosophy-card:hover,
        .parallax-surface .credential-card:hover,
        .parallax-surface .value-card:hover {
            background: linear-gradient(135deg,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(255, 255, 255, 0.6) 100%);
            border-color: rgba(255, 255, 255, 0.5);
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
    </div>
  );
};

export default AboutPage;