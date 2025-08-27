import React from 'react';
import { Clock, Users, Target, Heart, Sparkles } from 'lucide-react';
import VideoCTA from '../components/VideoCTA';
import { useSlowMoVideo } from '../hooks/useSlowMoVideo';

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
      <section className="hero-sante">
        <div className="container">
          <div className="hero-sante-layout">
            <div className="hero-content-sante">
              <h1>Santé et qualité de vie</h1>
              <p className="hero-subtitle-sante">Acteur de sa santé, vers un bien-être durable</p>
              <div className="hero-description-sante">
                <p>
                  Ces accompagnements sont conçus pour vous aider à identifier et à mettre en
                  place des habitudes de vie favorables à votre bien-être global. Grâce à un suivi
                  personnalisé, nous explorerons ensemble les ressources internes qui vous
                  permettront d’adopter des pratiques quotidiennes bénéfiques pour votre santé.
                </p>
              </div>
              <div className="hero-info-grid">
                <div className="info-item-clean">
                  <div className="info-label-clean">Format</div>
                  <div className="info-value-clean">Accompagnement individuel</div>
                  <div className="info-detail-clean">Présentiel ou en visio</div>
                </div>
                <div className="info-item-clean">
                  <div className="info-label-clean">Durée</div>
                  <div className="info-value-clean">1h30 à 2h • puis 1h</div>
                  <div className="info-detail-clean">Première séance + suivis</div>
                </div>
                <div className="info-item-clean">
                  <div className="info-label-clean">Tarifs</div>
                  <div className="info-value-clean">90€ • 60€</div>
                  <div className="info-detail-clean">1ère séance • Séances suivantes</div>
                </div>
              </div>
            </div>
            <div className="hero-video-sante">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="hero-video-element"
              >
                <source src="/vitalité_sainté.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay-sante"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices - même style parallax que les autres pages */}
      <section className="section benefits-section-sante parallax-surface">
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
            <p>Un cadre clair et bienveillant pour des changements concrets et durables</p>
          </div>
          <div className="benefits-grid-simplified">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="benefit-card-simplified">
                  <IconComponent size={28} className="benefit-icon-simplified" />
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
              <div className="info-card-enhanced">
                <h2>Informations pratiques</h2>

                <div className="format-info-section">
                  <div className="format-detail">
                    <Clock size={20} />
                    <div>
                      <strong>Durée :</strong> 1h30–2h première séance, puis 1h
                    </div>
                  </div>
                  <div className="format-detail">
                    <Users size={20} />
                    <div>
                      <strong>Format :</strong> Accompagnement individuel
                    </div>
                  </div>
                  <div className="format-detail">
                    <span>📍</span>
                    <div>
                      <strong>Lieu :</strong> Cabinet à Vaureilles ou en visio
                    </div>
                  </div>
                </div>

                <div className="pricing-section-clean">
                  <h3>Tarifs</h3>
                  <div className="pricing-items">
                    <div className="pricing-item">
                      <div className="price-main">90€</div>
                      <div className="price-desc">Première séance<br /><small>(1h30 à 2h)</small></div>
                    </div>
                    <div className="pricing-item">
                      <div className="price-main">60€</div>
                      <div className="price-desc">Séances suivantes<br /><small>(1h)</small></div>
                    </div>
                  </div>
                  <p className="pricing-note">
                    Entretien personnalisé • Règlement en fin de séance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (video background, texte blanc) */}
      <VideoCTA
        title="Alors ? Prêt(e) à prendre en main votre santé et votre bien-être ?"
        subtitle="Réservez dès maintenant votre premier rendez-vous et engagez-vous dans un accompagnement sur mesure pour créer des changements durables."
        buttonText="Réserver ma première séance"
        buttonLink="/contact-reservation"
      />

      <style>{`
        /* === HERO SECTION SANTÉ === */
        .hero-sante {
          padding: var(--spacing-20) 0;
          background: #fffcea;
          overflow: hidden;
        }

        .hero-sante-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--spacing-12);
          align-items: center;
          min-height: 70vh;
        }

        .hero-content-sante h1 {
          font-size: clamp(3rem, 6vw, 4.5rem);
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
          line-height: 1.1;
          font-weight: 700;
        }

        .hero-subtitle-sante {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
          font-weight: 500;
          line-height: 1.4;
        }

        .hero-description-sante p {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
          max-width: 55ch;
        }

        .hero-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: var(--spacing-6);
          margin-top: var(--spacing-6);
        }

        .info-item-clean {
          padding: var(--spacing-4);
          background: rgba(255, 255, 255, 0.9);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(31, 41, 55, 0.1);
          text-align: center;
          transition: all 0.3s ease;
        }

        /* 
        .info-item-clean:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .info-item-clean.pricing {
          border-color: var(--color-primary);
          background: rgba(255, 255, 255, 0.9);
        } 
        */

        .info-label-clean {
          font-size: 0.8rem;
          color: var(--color-gray-600);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--spacing-1);
          font-weight: 600;
        }

        .info-value-clean {
          font-size: 1.1rem;
          color: var(--color-primary);
          font-weight: 700;
          margin-bottom: var(--spacing-1);
        }

        .info-detail-clean {
          font-size: 0.85rem;
          color: var(--color-gray-600);
          line-height: 1.4;
        }

        .hero-video-sante {
          position: relative;
          height: 600px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .hero-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .video-overlay-sante {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(31, 41, 55, 0.1) 0%, rgba(31, 41, 55, 0.05) 100%);
        }

        /* === BENEFITS SECTION AVEC VIDÉO === */
        .benefits-section-sante {
          padding: var(--spacing-16) 0;
          position: relative;
        }

        .benefits-section-sante .section-header {
          text-align: center;
          margin-bottom: var(--spacing-12);
        }

        .benefits-section-sante .section-header h2 {
          font-size: clamp(2.2rem, 4vw, 3rem);
          color: #fffcea;
          margin-bottom: var(--spacing-4);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
        }

        .benefits-section-sante .section-header p {
          font-size: 1.2rem;
          color: rgba(255, 252, 234, 0.9);
          max-width: 600px;
          margin: 0 auto;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }

        .benefits-section-sante .container {
            padding: 0;
        }

        .benefits-grid-simplified { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
          gap: var(--spacing-8); 
        }
        .benefit-card-simplified { 
          background: rgba(255, 252, 234, 0.95); 
          border: 1px solid rgba(255, 252, 234, 0.3); 
          border-radius: var(--radius-xl); 
          padding: var(--spacing-8); 
          text-align: center; 
          transition: transform 0.3s ease, box-shadow 0.3s ease; 
          backdrop-filter: blur(10px);
          max-width: 100%;
          box-sizing: border-box;
        }
        .benefit-card-simplified:hover { 
          transform: translateY(-4px); 
          box-shadow: 0 12px 32px rgba(0,0,0,0.25); 
          background: rgba(255, 252, 234, 1); 
        }
        .benefit-icon-simplified { 
          color: var(--color-primary); 
          margin-bottom: var(--spacing-4); 
        }
        .benefit-card-simplified h3 { 
          font-size: 1.4rem; 
          color: var(--color-primary); 
          margin-bottom: var(--spacing-3); 
          font-weight: 600; 
          overflow-wrap: break-word;
        }
        .benefit-card-simplified p { 
          color: var(--color-gray-700); 
          line-height: 1.6; 
          font-size: 1rem; 
          overflow-wrap: break-word;
        }

        /* Vidéo statique fond parallax */
        .parallax-video-static { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }

        /* === JOURNEY SECTION === */
        .journey-section { padding: var(--spacing-20) 0; background: #fffcea; }
        .journey-layout { display: grid; grid-template-columns: 2fr 1fr; gap: var(--spacing-6); align-items: start; }
        .journey-content h2 { font-size: clamp(2.5rem, 4.5vw, 3.5rem); color: var(--color-primary); margin-bottom: var(--spacing-6); line-height: 1.2; }
        .journey-intro { font-size: 1.25rem; line-height: 1.7; color: var(--color-gray-700); margin-bottom: var(--spacing-10); max-width: 85ch; }
        .learning-outcomes, .objectives-exploration { margin-bottom: var(--spacing-10); }
        .learning-outcomes h3, .objectives-exploration h3 { font-size: 1.8rem; color: var(--color-primary); margin-bottom: var(--spacing-6); font-weight: 600; }
        .outcomes-grid, .objectives-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--spacing-6); }
        .outcome-item, .objective-item { display: flex; gap: var(--spacing-4); align-items: flex-start; }
        .outcome-icon, .objective-icon { font-size: 1.5rem; flex-shrink: 0; margin-top: 2px; }
        .outcome-icon { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: var(--color-primary); color: white; border-radius: 50%; font-weight: 700; font-size: 0.9rem; }
        .outcome-item h4, .objective-item h4 { font-size: 1.2rem; color: var(--color-primary); margin-bottom: var(--spacing-2); font-weight: 600; }
        .outcome-item p, .objective-item p { color: var(--color-gray-700); line-height: 1.6; font-size: 1rem; }

        /* Enhanced info card with sticky behavior */
        .info-card-enhanced { 
          background: var(--color-primary); 
          border-radius: var(--radius-xl); 
          padding: var(--spacing-8); 
          box-shadow: var(--shadow-lg); 
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 100%;
          max-width: 400px;
          z-index: 10;
          position: sticky;
          top: 2rem;
        }
        
        .info-card-enhanced h2 { 
          font-size: 1.8rem; 
          color: #fffcea; 
          margin-bottom: var(--spacing-6);
          border-bottom: 2px solid #fffcea;
          padding-bottom: var(--spacing-3);
        }

        /* Format info section - cleaner layout */
        .format-info-section {
          margin-bottom: var(--spacing-8);
          padding: var(--spacing-6);
          border-radius: var(--radius-lg);
        }

        .format-detail {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-4);
          color: rgba(255, 252, 234, 0.9);
        }

        .format-detail:last-child {
          margin-bottom: 0;
        }

        .format-detail svg {
          color: #fffcea;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .format-detail span {
          color: #fffcea;
          font-size: 1.2rem;
          margin-top: 1px;
        }

        /* Pricing section - improved clarity */
        .pricing-section-clean {
          border-top: 1px solid rgba(255, 252, 234, 0.3);
          padding-top: var(--spacing-6);
        }

        .pricing-section-clean h3 {
          font-size: 1.4rem;
          color: #fffcea;
          margin-bottom: var(--spacing-5);
          font-weight: 600;
        }

        .pricing-items {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-4);
        }

        .pricing-item {
          text-align: center;
          padding: var(--spacing-5);
          background: transparent;
          border: 2px solid #fffcea;
          border-radius: var(--radius-lg);
          color: #fffcea;
          box-shadow: 0 4px 12px rgba(31, 41, 55, 0.1);
          transition: all 0.3s ease;
        }

        .pricing-item:hover {
          background: #fffcea;
          color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(31, 41, 55, 0.2);
        }

        .price-main {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: var(--spacing-2);
        }

        .price-desc {
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .price-desc small {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .pricing-note {
          font-size: 0.85rem;
          color: rgba(255, 252, 234, 0.8);
          text-align: center;
          line-height: 1.5;
          margin: 0;
          font-style: italic;
        }

        /* Reset and simplify previous styles */
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

        /* Practical Info Revisited */
        .practical-info { background: var(--color-background); }
        .info-grid-revisited {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-8);
          max-width: 900px;
          margin: 0 auto;
        }
        .info-card-revisited {
          background: var(--color-white);
          border-radius: var(--radius-xl);
          padding: var(--spacing-8);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-gray-200);
        }
        .info-card-revisited h2 {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-6);
        }
        .detail-item-revisited { display: flex; align-items: flex-start; gap: var(--spacing-4); color: var(--color-primary); }
        .detail-item-revisited:not(:last-child) { margin-bottom: var(--spacing-5); }
        .detail-item-revisited strong { display: block; font-size: 1.1rem; margin-bottom: 2px; }
        .detail-item-revisited span { font-size: 1rem; color: var(--color-text-secondary); }
        
        .pricing-card .price-item-revisited { display: flex; justify-content: space-between; align-items: baseline; padding: var(--spacing-4) 0; }
        .pricing-card .price-item-revisited:not(:last-child) { border-bottom: 1px solid var(--color-gray-100); }
        .pricing-card .price { font-size: 2.2rem; font-weight: 600; color: var(--color-primary); }
        .pricing-card span { font-size: 1.1rem; color: var(--color-text-secondary); }

        /* CTA on video */
        .cta-section .cta-text h2,
        .cta-section .cta-text p { color: #fffcea; text-shadow: 0 2px 10px rgba(0,0,0,0.45); }

        /* Protocols */
        .protocols-section .accordion { max-width: 1000px; margin: 0 auto; display: grid; gap: var(--spacing-4); }
        .protocols-section details { background: var(--color-white); border: 1px solid var(--color-gray-200); border-radius: var(--radius-lg); padding: var(--spacing-4) var(--spacing-5); }
        .protocols-section summary { cursor: pointer; font-weight: 600; color: var(--color-primary); outline: none; }
        .protocols-section .accordion-body { margin-top: var(--spacing-3); color: var(--color-text-secondary); line-height: 1.75; }
        .protocols-section ul { margin: var(--spacing-3) 0; padding-left: var(--spacing-6); }
        .protocols-section li { list-style: disc; margin: 0 0 var(--spacing-2); }
        .protocols-section .small { font-size: 0.95rem; opacity: 0.9; }
        .protocols-section .sub-accordion { display: grid; gap: var(--spacing-3); }

        /* Coaching details layout */
        .coaching-details-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: var(--spacing-12); align-items: start; }
        .coaching-text h2 { font-size: clamp(2.1rem, 4vw, 2.8rem); color: var(--color-primary); margin-bottom: var(--spacing-4); }
        .coaching-text p { color: var(--color-text-secondary); line-height: 1.8; }
        .coaching-text h3 { margin-top: var(--spacing-8); margin-bottom: var(--spacing-3); color: var(--color-primary); font-size: clamp(1.6rem, 2.2vw, 2rem); letter-spacing: 0.01em; }
        .coaching-text ul { padding-left: var(--spacing-6); }
        .coaching-text li { list-style: disc; margin-bottom: var(--spacing-2); }
        .coaching-aside { display: grid; gap: var(--spacing-6); }
        
        /* Larger objectives and process text */
        .objectives-list-large { padding-left: var(--spacing-6); margin: var(--spacing-6) 0 var(--spacing-10); }
        .objectives-list-large li { list-style: disc; margin-bottom: var(--spacing-4); font-size: 1.25rem; line-height: 1.9; }
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
        .pricing-section { display: grid; gap: var(--spacing-4); }
        .price-row { display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-3) 0; }
        .price-amount { font-size: 2.5rem; font-weight: 700; color: var(--color-primary); }
        .price-label { font-size: 1.1rem; color: var(--color-text-secondary); font-weight: 500; }
        
        @media (max-width: 900px) { .coaching-details-grid { grid-template-columns: 1fr; } }

        /* CTA text on video */
        .cta-section .cta-text h2 {
          color: #fffcea !important;
          font-family: var(--font-heading);
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
        .cta-section .cta-text p {
          color: #fffcea !important;
          text-shadow: 0 1px 6px rgba(0,0,0,0.3);
          opacity: 0.9;
        }

        @media (max-width: 1200px) {
          .journey-layout { grid-template-columns: 1fr; gap: var(--spacing-8); }
        }

        @media (max-width: 1024px) {
          .hero-sante-layout { grid-template-columns: 1fr; gap: var(--spacing-8); text-align: center; }
          .hero-video-sante { height: 400px; order: -1; }
          .hero-description-sante p { margin: 0 auto var(--spacing-8); }
        }

        @media (max-width: 768px) {
          .hero-sante { padding: var(--spacing-12) 0; }
          .hero-video-sante { height: 300px; }
          .hero-info-grid { grid-template-columns: 1fr; gap: var(--spacing-4); }
          
          .benefits-section-sante .section-header {
            margin-bottom: var(--spacing-8);
          }

          .benefits-grid-simplified { 
            grid-template-columns: 1fr; 
            gap: var(--spacing-6); 
            padding: 0 var(--spacing-8);
          }
          .benefit-card-simplified {
            padding: var(--spacing-6);
            margin: 0;
            max-width: 100%;
            box-sizing: border-box;
          }
          .outcomes-grid, .objectives-grid { grid-template-columns: 1fr; }
          .journey-content h2 { text-align: center; }
          .journey-intro { text-align: center; margin-left: auto; margin-right: auto; }
          .pricing-items { grid-template-columns: 1fr 1fr; gap: var(--spacing-3); }
          .info-card-enhanced { position: static !important; top: auto !important; max-width: none !important; }
        }
        @media (max-width: 480px) {
          .benefits-section-sante {
            padding: var(--spacing-12) 0;
          }

          .benefits-section-sante .section-header h2 {
            font-size: clamp(1.8rem, 6vw, 2.5rem);
            padding: 0 var(--spacing-2);
          }

          .benefits-section-sante .section-header p {
            font-size: 1rem;
            padding: 0 var(--spacing-2);
          }

          .benefits-grid-simplified {
            gap: var(--spacing-4);
            padding: 0 var(--spacing-6);
          }

          .benefit-card-simplified {
            padding: var(--spacing-5);
          }

          .benefit-card-simplified h3 {
            font-size: 1.2rem;
          }

          .benefit-card-simplified p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SanteQualiteVieDetailsPage;
