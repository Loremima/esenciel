import React from 'react';
import { Brain, Heart, Award, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const credentials = [
    {
      icon: Brain,
      title: 'Psychologue Clinicienne',
      description: 'Spécialisée en neuropsychologie',
      details: 'Formation universitaire approfondie en sciences psychologiques'
    },
    {
      icon: Sparkles,
      title: 'Instructrice MBSR',
      description: 'Mindfulness-Based Stress Reduction',
      details: 'Certification internationale en programmes de pleine conscience'
    },
    {
      icon: Heart,
      title: 'Coach Santé',
      description: 'Approche intégrative',
      details: 'Accompagnement holistique corps-esprit'
    },
    {
      icon: Award,
      title: 'Formation Continue',
      description: 'Expertise en développement',
      details: 'Perfectionnement constant des pratiques'
    }
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

      {/* Présentation détaillée */}
      <section className="section presentation">
        <div className="container">
          <div className="presentation-content">
            <div className="text-content">
              <h2>Qui suis‑je ?</h2>
              <p className="lead-text">
                Je m'appelle Véronique Carrié, et ma passion pour l'humain m'a naturellement conduite vers des études en psychologie clinique, avec une spécialité en neuropsychologie, pour explorer les mécanismes cognitifs et émotionnels qui influencent notre comportement, et favoriser une meilleure qualité de vie.
              </p>

              <p>
                Au fil de mon parcours professionnel en clinique, j’ai constaté que la prévention, l’éducation à la santé et l’accompagnement vers une meilleure connaissance de soi pouvaient transformer profondément les trajectoires de vie. Comprendre le fonctionnement, c’est comme disposer d’une notice, un outil précieux pour faire des choix éclairés.
              </p>

              <p>
                C’est pourquoi, depuis quelques années, je propose des programmes d’accompagnement intégratifs, alliant les sciences psychologiques, la pleine conscience et l’éducation à la santé, pour encourager des comportements durables et bénéfiques. Mon rôle est de fournir des outils adaptés afin que chacun puisse trouver ses propres solutions, dans un esprit de co‑création et d’exploration.
              </p>

              <div className="philosophy">
                <h3>Mon approche</h3>
                <blockquote>
                  J'ai développé une vision globale de la santé et de la qualité de vie, alliant une perspective à la fois holistique et systémique. Plutôt que d'appliquer des solutions toutes faites, je crois fermement que chaque personne porte en elle ses propres ressources. Mon rôle est de remettre l'humain au cœur de ses décisions, en l’aidant à se reconnecter à ce qui fait sens pour lui.
                </blockquote>
                <blockquote>
                  Cette approche repose sur un processus de maturation continue, permettant à chacun d'assimiler ses expériences à son propre rythme. C'est un chemin d'apprentissage et de croissance, où l'autonomie et la responsabilisation sont au cœur du processus.
                </blockquote>
              </div>

              <div className="philosophy">
                <h3>Une citation qui m'accompagne</h3>
                <blockquote>
                  « Celui qui regarde l'extérieur rêve, celui qui regarde à l'intérieur s'éveille. » – Carl Jung
                </blockquote>
              </div>
            </div>

            <div className="credentials-sidebar">
              <h3>Mes Qualifications</h3>
              <div className="credentials-list">
                {credentials.map((credential, index) => {
                  const IconComponent = credential.icon;
                  return (
                    <div key={index} className="credential-item">
                      <div className="credential-icon">
                        <IconComponent size={24} />
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
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section values">
        <div className="container">
          <div className="section-header">
            <h2>Mes Valeurs</h2>
            <p className="section-subtitle">
              Les principes qui guident mon accompagnement au quotidien
            </p>
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
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Découvrir mes services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          padding-top: 0;
        }

        /* === HERO SECTION AVEC VIDÉO === */
        .hero-about {
          position: relative;
          min-height: 100vh;
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

        /* === SECTION PRÉSENTATION === */
        .presentation {
          background: linear-gradient(135deg, #fffcea 0%, var(--color-gray-50) 100%);
          padding: var(--spacing-20) 0;
        }

        /* Container défini dans globals.css */

        .presentation-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-12);
          align-items: start;
        }

        .text-content h2 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: var(--spacing-8);
          line-height: 1.2;
        }

        .lead-text {
          font-size: clamp(1.2rem, 2.5vw, 1.4rem);
          font-weight: 500;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
          line-height: 1.7;
          padding: var(--spacing-6);
          background: rgba(85, 107, 47, 0.05);
          border-radius: var(--radius-xl);
          border-left: 4px solid var(--color-secondary);
        }

        .text-content p {
          color: var(--color-gray-700);
          line-height: 1.8;
          margin-bottom: var(--spacing-6);
          font-size: 1.1rem;
        }

        .philosophy {
          margin-top: var(--spacing-10);
          padding: var(--spacing-8);
          background: linear-gradient(135deg, rgba(85, 107, 47, 0.08) 0%, rgba(85, 107, 47, 0.03) 100%);
          border-radius: var(--radius-2xl);
          border: 1px solid rgba(85, 107, 47, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .philosophy h3 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-6);
          color: var(--color-primary);
          font-weight: 600;
        }

        .philosophy blockquote {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.2rem;
          color: var(--color-gray-700);
          margin: 0 0 var(--spacing-4) 0;
          line-height: 1.7;
          padding: var(--spacing-4) 0;
          border-bottom: 1px solid rgba(85, 107, 47, 0.1);
        }

        .philosophy blockquote:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        /* === SIDEBAR QUALIFICATIONS === */
        .credentials-sidebar {
          background: linear-gradient(135deg, #fffcea 0%, var(--color-gray-50) 100%);
          border-radius: var(--radius-2xl);
          padding: var(--spacing-8);
          height: fit-content;
          position: sticky;
          top: 120px;
          border: 1px solid rgba(85, 107, 47, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }

        .credentials-sidebar h3 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-8);
          color: var(--color-primary);
          text-align: center;
          font-weight: 600;
        }

        .credentials-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-8);
        }

        .credential-item {
          display: flex;
          gap: var(--spacing-4);
          align-items: flex-start;
          padding: var(--spacing-4);
          border-radius: var(--radius-xl);
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .credential-item:hover {
          background: rgba(85, 107, 47, 0.03);
          border-color: rgba(85, 107, 47, 0.1);
          transform: translateY(-2px);
        }

        .credential-icon {
          background: linear-gradient(135deg, rgba(218, 165, 32, 0.15) 0%, rgba(218, 165, 32, 0.05) 100%);
          color: var(--color-secondary);
          padding: var(--spacing-3);
          border-radius: var(--radius-lg);
          flex-shrink: 0;
          border: 1px solid rgba(218, 165, 32, 0.2);
        }

        .credential-content h4 {
          margin: 0 0 var(--spacing-2);
          color: var(--color-primary);
          font-size: 1.1rem;
          font-weight: 600;
        }

        .credential-description {
          color: var(--color-secondary);
          font-weight: 600;
          margin: 0 0 var(--spacing-2);
          font-size: 0.95rem;
        }

        .credential-details {
          color: var(--color-gray-600);
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.5;
        }

        /* === SECTION VALEURS === */
        .values {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          padding: var(--spacing-20) 0;
          color: var(--color-white);
        }

        .section {
          padding: var(--spacing-20) 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-16);
        }

        .section-header h2 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: var(--spacing-6);
          color: #fffcea;
        }

        .section-subtitle {
          font-size: clamp(1.2rem, 2.5vw, 1.4rem);
          color: rgba(255, 252, 234, 0.8);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-8);
        }

        .value-card {
          background: rgba(255, 252, 234, 0.1);
          backdrop-filter: blur(10px);
          padding: var(--spacing-8);
          border-radius: var(--radius-2xl);
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 252, 234, 0.2);
        }

        .value-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 252, 234, 0.15);
          border-color: rgba(255, 252, 234, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .value-card h3 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-4);
          color: #fffcea;
          font-weight: 600;
        }

        .value-card p {
          color: rgba(255, 252, 234, 0.8);
          line-height: 1.7;
          margin: 0;
          font-size: 1.1rem;
        }

        /* === SECTION CTA === */
        .cta-about {
          background: linear-gradient(135deg, #fffcea 0%, var(--color-gray-50) 100%);
          color: var(--color-primary);
          padding: var(--spacing-20) 0;
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
          font-size: clamp(1.2rem, 2.5vw, 1.4rem);
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-10);
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
          padding: 1rem 2.5rem;
          border-radius: var(--radius-xl);
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          min-width: 200px;
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
          transform: translateY(-2px);
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
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(85, 107, 47, 0.2);
        }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
          .presentation-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-10);
          }

          .credentials-sidebar {
            position: static;
            order: -1;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-6);
          }
        }

        @media (max-width: 768px) {

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