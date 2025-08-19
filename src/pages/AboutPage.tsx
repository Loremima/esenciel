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
      {/* Hero Section */}
      <section className="hero-about">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Qui suis-je ?</h1>
              <p className="hero-subtitle">
                Psychologue clinicienne passionnée par l'accompagnement humain
              </p>
            </div>
            <div className="hero-image">
              <img
                src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
                alt="Véronique Carrié dans son cabinet"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Présentation détaillée */}
      <section className="section presentation">
        <div className="container">
          <div className="presentation-content">
            <div className="text-content">
              <h2>Mon Parcours</h2>
              <p className="lead-text">
                Véronique Carrié, psychologue clinicienne spécialisée en neuropsychologie, 
                j'ai développé une approche intégrative unique alliant sciences psychologiques, 
                pleine conscience et éducation santé.
              </p>
              
              <p>
                Ma formation universitaire en psychologie clinique, complétée par une spécialisation 
                en neuropsychologie, m'a permis d'acquérir une compréhension approfondie du 
                fonctionnement humain. Cette expertise scientifique, je l'enrichis constamment 
                par des formations en pleine conscience et en approches thérapeutiques innovantes.
              </p>
              
              <p>
                Ma vision holistique et systémique place la personne au centre de l'accompagnement. 
                Je crois fermement en votre capacité à devenir acteur de votre santé et de votre 
                bien-être. Mon rôle est de vous accompagner dans cette démarche d'autonomisation, 
                en vous transmettant les outils et les connaissances nécessaires.
              </p>
              
              <div className="philosophy">
                <h3>Ma Philosophie</h3>
                <blockquote>
                  "Chaque personne possède en elle les ressources nécessaires à son épanouissement. 
                  Mon accompagnement vise à révéler et développer ces ressources naturelles."
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
          padding-top: 80px;
        }

        .hero-about {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
          padding: var(--spacing-16) 0;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-12);
          align-items: center;
        }

        .hero-text h1 {
          margin-bottom: var(--spacing-4);
          color: var(--color-primary);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: var(--color-gray-600);
          font-weight: 400;
          margin: 0;
        }

        .hero-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-xl);
        }

        .presentation {
          background: var(--color-white);
        }

        .presentation-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-12);
        }

        .text-content h2 {
          margin-bottom: var(--spacing-6);
          color: var(--color-primary);
        }

        .lead-text {
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
          line-height: 1.7;
        }

        .text-content p {
          color: var(--color-gray-700);
          line-height: 1.7;
          margin-bottom: var(--spacing-4);
        }

        .philosophy {
          margin-top: var(--spacing-8);
          padding: var(--spacing-6);
          background: rgba(85, 107, 47, 0.05);
          border-radius: var(--radius-xl);
          border-left: 4px solid var(--color-secondary);
        }

        .philosophy h3 {
          margin-bottom: var(--spacing-4);
          color: var(--color-primary);
        }

        .philosophy blockquote {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.1rem;
          color: var(--color-gray-700);
          margin: 0;
          line-height: 1.6;
        }

        .credentials-sidebar {
          background: var(--color-gray-50);
          border-radius: var(--radius-2xl);
          padding: var(--spacing-8);
          height: fit-content;
          position: sticky;
          top: 100px;
        }

        .credentials-sidebar h3 {
          margin-bottom: var(--spacing-6);
          color: var(--color-primary);
          text-align: center;
        }

        .credentials-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-6);
        }

        .credential-item {
          display: flex;
          gap: var(--spacing-4);
          align-items: flex-start;
        }

        .credential-icon {
          background: rgba(218, 165, 32, 0.1);
          color: var(--color-secondary);
          padding: var(--spacing-3);
          border-radius: var(--radius-lg);
          flex-shrink: 0;
        }

        .credential-content h4 {
          margin: 0 0 var(--spacing-1);
          color: var(--color-primary);
          font-size: 1rem;
        }

        .credential-description {
          color: var(--color-secondary);
          font-weight: 600;
          margin: 0 0 var(--spacing-1);
          font-size: 0.9rem;
        }

        .credential-details {
          color: var(--color-gray-600);
          font-size: 0.85rem;
          margin: 0;
          line-height: 1.4;
        }

        .values {
          background: linear-gradient(135deg, var(--color-gray-50) 0%, var(--color-white) 100%);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-12);
        }

        .section-header h2 {
          margin-bottom: var(--spacing-4);
          color: var(--color-primary);
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--color-gray-600);
          max-width: 600px;
          margin: 0 auto;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-6);
        }

        .value-card {
          background: var(--color-white);
          padding: var(--spacing-8);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
          text-align: center;
          transition: all var(--transition-normal);
          border: 1px solid rgba(85, 107, 47, 0.1);
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
          border-color: var(--color-secondary);
        }

        .value-card h3 {
          margin-bottom: var(--spacing-4);
          color: var(--color-primary);
        }

        .value-card p {
          color: var(--color-gray-700);
          line-height: 1.6;
          margin: 0;
        }

        .cta-about {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: var(--color-white);
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-4);
        }

        .cta-content p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--spacing-8);
        }

        .cta-actions {
          display: flex;
          gap: var(--spacing-4);
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
            text-align: center;
          }

          .presentation-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
          }

          .credentials-sidebar {
            position: static;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-image img {
            height: 300px;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .credentials-sidebar {
            padding: var(--spacing-6);
          }

          .value-card {
            padding: var(--spacing-6);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;