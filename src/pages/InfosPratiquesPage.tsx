import React from 'react';
import { Brain, Heart, Lightbulb, Target, BookOpen, Users, Compass } from 'lucide-react';

const InfosPratiquesPage: React.FC = () => {
  const definitions = [
    {
      id: 'pleine-conscience',
      icon: Brain,
      title: 'La pleine conscience ou Mindfulness',
      content: `C'est une qualité de présence qui se manifeste lorsqu'on porte une attention intentionnelle, sans jugement, à l'expérience du moment présent. Elle repose sur l'acceptation et la bienveillance, et aide à mieux gérer les événements de la vie et à améliorer la relation avec soi-même et les autres.`
    },
    {
      id: 'meditation',
      icon: Compass,
      title: 'La méditation',
      content: `C'est un ensemble de pratiques mentales et corporelles qui consistent à focaliser son attention sur un objet particulier (pensées, émotions, sensations, respiration). L'entraînement à la pleine conscience via la méditation permet de centrer son attention sur le moment présent, de manière douce et régulière.`
    },
    {
      id: 'qualite-vie',
      icon: Heart,
      title: 'La qualité de vie',
      content: `C'est l'ensemble des conditions qui influencent le bien-être physique, mental et social d'une personne. Elle inclut des facteurs objectifs (environnement, santé, sécurité, accès aux ressources) et subjectifs (satisfaction, relations sociales). Une bonne qualité de vie résulte d'un équilibre entre ces différentes dimensions. La pratique de la pleine conscience est un atout précieux pour améliorer sa qualité de vie, car elle aide à mieux gérer le stress, à être plus présent et à renforcer le bien-être général.`
    },
    {
      id: 'coaching-sante',
      icon: Target,
      title: 'Le coaching en santé',
      content: `Le coaching en santé est une pratique qui accompagne les personnes dans l'amélioration de leur mode de vie et de leur bien-être. Il s'agit d'une approche personnalisée qui aide à fixer et atteindre des objectifs concrets, qu'il s'agisse de mieux gérer son stress, d'adopter de nouvelles habitudes alimentaires ou d'optimiser son activité physique. Le coach en santé guide ses clients dans un processus de transformation, en les motivant et en leur apportant un soutien adapté à leurs besoins spécifiques.`
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Lectures recommandées',
      items: [
        'Où tu vas, tu es - Jon Kabat-Zinn',
        'L\'art du calme intérieur - Eckhart Tolle',
        'Méditer jour après jour - Christophe André',
        'La pleine conscience - Thich Nhat Hanh'
      ]
    },
    {
      icon: Users,
      title: 'Applications utiles',
      items: [
        'Insight Timer (méditations guidées)',
        'Headspace (programmes structurés)',
        'Petit BamBou (méditation française)',
        'Calm (relaxation et sommeil)'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Conseils pratiques',
      items: [
        'Commencez par 5 minutes de méditation par jour',
        'Créez un espace dédié à la pratique',
        'Pratiquez à heure fixe pour créer une habitude',
        'Soyez bienveillant avec vous-même'
      ]
    }
  ];

  return (
    <div className="infos-pratiques-page">
      {/* Hero Section avec vidéo de fond */}
      <section className="hero-infos">
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
          <h1>Infos pratiques</h1>
          <p className="hero-subtitle">
            Tout ce qu'il faut savoir pour mieux comprendre et approfondir votre démarche
          </p>
        </div>
      </section>

      {/* Définitions */}
      <section className="section definitions-section">
        <div className="container">
          <div className="section-header">
            <h1>Quelques définitions</h1>
            <p>Pour mieux comprendre les concepts clés de mon approche</p>
          </div>

          <div className="definitions-grid">
            {definitions.map((definition) => {
              const IconComponent = definition.icon;
              return (
                <div key={definition.id} className="definition-card">
                  <div className="definition-header">
                    <h2>{definition.title}</h2>
                    <div className="definition-icon">
                      <IconComponent size={32} />
                    </div>
                  </div>
                  <p className="definition-content">{definition.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ressources */}
      <section className="section resources-section parallax-surface">
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
          <div className="section-header">
            <h1>Ressources pour approfondir</h1>
            <p>Outils et références pour enrichir votre pratique</p>
          </div>

          <div className="resources-grid">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div key={index} className="resource-card beige-highlight">
                  <div className="resource-header">
                    <div className="resource-icon">
                      <IconComponent size={24} />
                    </div>
                    <h2>{resource.title}</h2>
                  </div>
                  <ul className="resource-list">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ ou conseils supplémentaires */}
      <section className="section tips-section">
        <div className="container">
          <div className="tips-content">
            <h1>Pour bien commencer</h1>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-icon">🧘‍♀️</div>
                </div>
                <div className="timeline-content">
                  <h2>Première séance</h2>
                  <p>Venez comme vous êtes, aucune expérience préalable n'est nécessaire. Nous prendrons le temps d'échanger sur vos attentes et besoins.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-icon">📅</div>
                </div>
                <div className="timeline-content">
                  <h2>Fréquence</h2>
                  <p>La régularité est plus importante que la durée. Mieux vaut 10 minutes par jour qu'une heure par semaine.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-icon">🎯</div>
                </div>
                <div className="timeline-content">
                  <h2>Objectifs</h2>
                  <p>Fixons ensemble des objectifs réalistes et adaptés à votre rythme de vie. Chaque petit pas compte.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-icon">💝</div>
                </div>
                <div className="timeline-content">
                  <h2>Bienveillance</h2>
                  <p>Soyez patient et bienveillant avec vous-même. Il n'y a pas de "mauvaise" méditation, seulement de l'expérience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .infos-pratiques-page {
          padding-top: 0;
        }

        /* === HERO SECTION AVEC VIDÉO === */
        .hero-infos {
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
          max-width: 700px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero-icon {
          color: #fffcea;
          margin-bottom: var(--spacing-6);
          filter: drop-shadow(0 4px 16px rgba(0,0,0,0.3));
        }

        .hero-content h1 {
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
          line-height: 1.6;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          letter-spacing: 0.025em;
        }

        .section {
          padding: var(--spacing-20) 0;
        }

        /* Container défini dans globals.css */

        .definitions-section {
          background: #fffcea;
        }

        .resources-section {
          background: var(--color-gray-50);
        }

        .tips-section {
          background: #fffcea;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-12);
          width: 100%;
          display: block;
        }

        /* Forcer le flux vertical: titre AU-DESSUS, contenu en dessous */
        .definitions-section .container,
        .resources-section .container,
        .tips-section .container {
          display: block;
        }

        .section-header h1 {
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
          font-size: clamp(2rem, 4vw, 2.5rem);
        }

        .section-header p {
          font-size: 1.2rem;
          color: var(--color-gray-600);
          max-width: 600px;
          margin: 0 auto;
        }

        .definitions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-8);
        }

        .definition-card {
          background: #fffcea;
          border-radius: var(--radius-2xl);
          padding: var(--spacing-8);
          box-shadow: var(--shadow-md);
          transition: all var(--transition-normal);
          border: 1px solid var(--color-gray-200);
        }

        .definition-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--color-secondary);
        }

        .definition-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: var(--spacing-6);
          gap: var(--spacing-4);
        }

        .definition-header h2 {
          color: var(--color-primary);
          margin: 0;
          font-size: 1.4rem;
          font-weight: 600;
          order: 1;
        }

        .definition-icon {
          background: linear-gradient(135deg, rgba(230, 126, 34, 0.15) 0%, rgba(230, 126, 34, 0.05) 100%);
          color: var(--color-secondary);
          padding: var(--spacing-4);
          border-radius: var(--radius-xl);
          border: 1px solid rgba(230, 126, 34, 0.2);
          order: 2;
        }

        .definition-content {
          color: var(--color-gray-700);
          line-height: 1.7;
          margin: 0;
          font-size: 1.05rem;
          text-align: center;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-6);
        }

        .resource-card {
          background: #fffcea;
          border-radius: var(--radius-xl);
          padding: var(--spacing-6);
          box-shadow: var(--shadow-md);
          transition: all var(--transition-normal);
        }

        .resource-card:hover {
          box-shadow: var(--shadow-md);
        }

        .resource-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-4);
        }

        .resource-icon {
          background: rgba(44, 62, 80, 0.1);
          color: var(--color-primary);
          padding: var(--spacing-2);
          border-radius: var(--radius-md);
        }

        .resource-header h2 {
          color: var(--color-primary);
          margin: 0;
          font-size: 1.1rem;
        }

        .resource-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .resource-list li {
          padding: var(--spacing-2) 0;
          color: var(--color-gray-700);
          border-bottom: 1px solid var(--color-gray-200);
          position: relative;
          padding-left: var(--spacing-4);
        }

        .resource-list li:last-child {
          border-bottom: none;
        }

        .resource-list li::before {
          content: "•";
          color: var(--color-secondary);
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .tips-content {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .tips-content h1 {
          color: var(--color-primary);
          margin-bottom: var(--spacing-8);
          font-size: clamp(2rem, 4vw, 2.5rem);
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-6);
        }

        /* Timeline stylisée */
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: var(--spacing-8) 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--color-secondary) 0%, var(--color-secondary-light) 50%, var(--color-secondary) 100%);
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: var(--spacing-12);
          display: flex;
          align-items: center;
        }

        .timeline-item:nth-child(odd) {
          flex-direction: row;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .timeline-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--color-white) 0%, #fffcea 100%);
          border: 3px solid var(--color-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .timeline-content {
          width: calc(50% - 50px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 252, 234, 0.9) 100%);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: var(--radius-xl);
          padding: var(--spacing-6);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-left: auto;
          margin-right: var(--spacing-8);
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-right: auto;
          margin-left: var(--spacing-8);
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          top: 50%;
          width: 0;
          height: 0;
          border: 12px solid transparent;
          transform: translateY(-50%);
        }

        .timeline-item:nth-child(odd) .timeline-content::before {
          left: -24px;
          border-right-color: rgba(255, 255, 255, 0.9);
        }

        .timeline-item:nth-child(even) .timeline-content::before {
          right: -24px;
          border-left-color: rgba(255, 255, 255, 0.9);
        }

        .timeline-content h2 {
          color: var(--color-primary-dark);
          margin: 0 0 var(--spacing-3) 0;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .timeline-content p {
          color: var(--color-gray-800);
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive timeline */
        @media (max-width: 768px) {
          .timeline::before {
            left: 30px;
          }

          .timeline-marker {
            left: 30px;
          }

          .timeline-item,
          .timeline-item:nth-child(even) {
            flex-direction: row;
          }

          .timeline-content {
            width: calc(100% - 80px);
            margin-left: var(--spacing-8) !important;
            margin-right: 0 !important;
          }

          .timeline-content::before {
            left: -24px !important;
            right: auto !important;
            border-right-color: rgba(255, 255, 255, 0.9) !important;
            border-left-color: transparent !important;
          }
        }

        @media (max-width: 1024px) {
          .definitions-grid {
            grid-template-columns: 1fr;
          }

          .resources-grid {
            grid-template-columns: 1fr;
          }

          .tips-grid {
            grid-template-columns: 1fr;
          }

          .definition-header,
          .resource-header {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .definitions-grid {
            grid-template-columns: 1fr;
          }

          .resources-grid {
            grid-template-columns: 1fr;
          }

          .tips-grid {
            grid-template-columns: 1fr;
          }

          .definition-header,
          .resource-header {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default InfosPratiquesPage;
