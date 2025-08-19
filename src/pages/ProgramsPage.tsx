import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Users, Calendar, Clock, ArrowRight, CheckCircle, Award, BookOpen } from 'lucide-react';

const ProgramsPage: React.FC = () => {
  const programs = [
    {
      id: 'mbsr',
      title: 'MBSR - Réduction du Stress',
      subtitle: 'Mindfulness-Based Stress Reduction',
      description: 'Programme de 8 semaines pour apprendre à gérer le stress par la pleine conscience',
      duration: '8 semaines',
      frequency: '1 séance / semaine',
      sessionDuration: '2h30 par séance',
      groupSize: '5 à 10 personnes',
      price: "Tarif communiqué lors de l'inscription",
      includes: [
        '8 séances de groupe de 2h30',
        'Journée de retraite en silence',
        'Support audio des méditations',
        'Manuel du participant',
        'Suivi personnalisé'
      ],
      benefits: [
        'Réduction significative du stress',
        'Amélioration du sommeil',
        'Meilleure gestion des émotions',
        'Renforcement du système immunitaire',
        'Développement de la résilience'
      ]
    },
    {
      id: 'mbct',
      title: 'MBCT - Thérapie Cognitive',
      subtitle: 'Mindfulness-Based Cognitive Therapy',
      description: 'Programme de 8 semaines combinant pleine conscience et thérapie cognitive',
      duration: '8 semaines',
      frequency: '1 séance / semaine',
      sessionDuration: '2h par séance',
      groupSize: '5 à 10 personnes',
      price: "Tarif communiqué lors de l'inscription",
      includes: [
        '8 séances de groupe de 2h',
        'Exercices de thérapie cognitive',
        'Pratiques de pleine conscience',
        'Manuel et ressources',
        'Accompagnement personnalisé'
      ],
      benefits: [
        'Prévention des rechutes dépressives',
        'Meilleure relation aux pensées',
        'Diminution de la rumination',
        'Développement de la compassion',
        'Outils concrets au quotidien'
      ]
    }
  ];

  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="hero-programs">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Programmes MBSR & MBCT</h1>
              <p className="hero-subtitle">
                Programmes de 8 semaines basés sur la pleine conscience, scientifiquement validés
              </p>
              <p className="hero-description">
                Développés dans les universités américaines, ces programmes ont fait leurs preuves
                dans l'amélioration du bien-être et la gestion du stress. Je suis instructrice certifiée
                pour vous accompagner dans cette transformation en profondeur.
              </p>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <Award size={32} />
                <div>
                  <h3>Certification</h3>
                  <p>Instructrice qualifiée</p>
                </div>
              </div>
              <div className="stat-card">
                <Users size={32} />
                <div>
                  <h3>100+</h3>
                  <p>Participants accompagnés</p>
                </div>
              </div>
              <div className="stat-card">
                <BookOpen size={32} />
                <div>
                  <h3>Scientifique</h3>
                  <p>Approche validée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes détaillés */}
      <section className="section programs-detailed">
        <div className="container">
          <div className="programs-list">
            {programs.map((program, index) => (
              <div key={program.id} className="program-card">
                <div className="program-header">
                  <div className="program-icon">
                    <Brain size={40} />
                  </div>
                  <div className="program-title-group">
                    <h2>{program.title}</h2>
                    <p className="program-subtitle">{program.subtitle}</p>
                  </div>
                  <div className="program-price">
                    <span className="price-value">{program.price}</span>
                  </div>
                </div>

                <p className="program-description">{program.description}</p>

                <div className="program-details">
                  <div className="detail-item">
                    <Calendar size={18} />
                    <span>{program.duration}</span>
                  </div>
                  <div className="detail-item">
                    <Clock size={18} />
                    <span>{program.sessionDuration}</span>
                  </div>
                  <div className="detail-item">
                    <Users size={18} />
                    <span>{program.groupSize}</span>
                  </div>
                </div>

                <div className="program-content">
                  <div className="content-section">
                    <h4>Le programme inclut</h4>
                    <ul className="includes-list">
                      {program.includes.map((item, i) => (
                        <li key={i} className="include-item">
                          <CheckCircle size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="content-section">
                    <h4>Bénéfices</h4>
                    <ul className="benefits-list">
                      {program.benefits.map((benefit, i) => (
                        <li key={i} className="benefit-item">
                          <span className="benefit-bullet"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="program-actions">
                  <Link to="/contact-reservation" className="btn btn-primary">
                    S'inscrire au programme
                    <ArrowRight size={16} />
                  </Link>
                  <button className="btn btn-outline">
                    Demander des informations
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="section info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>Modalités pratiques</h3>
              <ul className="info-list">
                <li>Sessions en présentiel à Vaureilles</li>
                <li>Possibilité de sessions en distanciel</li>
                <li>Groupes limités pour un suivi optimal</li>
                <li>Matériel et supports fournis</li>
                <li>Accompagnement entre les séances</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>À qui s'adressent ces programmes ?</h3>
              <ul className="info-list">
                <li>Personnes en situation de stress chronique</li>
                <li>Recherche d'équilibre et de sérénité</li>
                <li>Souhait de développer sa résilience</li>
                <li>Prévention du burn-out</li>
                <li>Amélioration de la qualité de vie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-programs">
        <div className="container">
          <div className="cta-content">
            <h2>Prochaines sessions</h2>
            <p>
              Les programmes MBSR et MBCT démarrent plusieurs fois par an.
              Contactez-moi pour connaître les prochaines dates disponibles.
            </p>
            <Link to="/contact-reservation" className="btn btn-secondary">
              Réserver ma place
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .programs-page {
          padding-top: 80px;
        }

        .hero-programs {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: var(--color-white);
          padding: var(--spacing-20) 0;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-12);
          align-items: center;
        }

        .hero-text h1 {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-6);
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--spacing-6);
          line-height: 1.5;
        }

        .hero-description {
          font-size: clamp(1rem, 2vw, 1.1rem);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          max-width: 800px;
        }

        .hero-stats {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          background: rgba(255, 255, 255, 0.1);
          padding: var(--spacing-4);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(10px);
        }

        .stat-card svg {
          color: var(--color-secondary);
          flex-shrink: 0;
        }

        .stat-card h3 {
          margin: 0;
          color: var(--color-secondary);
          font-size: 1.2rem;
        }

        .stat-card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        .programs-detailed {
          background: var(--color-white);
        }

        .programs-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-12);
        }

        .program-card {
          background: var(--color-gray-50);
          border-radius: var(--radius-2xl);
          padding: var(--spacing-10);
          box-shadow: var(--shadow-lg);
          transition: all var(--transition-normal);
        }

        .program-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .program-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-6);
          margin-bottom: var(--spacing-6);
        }

        .program-icon {
          background: rgba(85, 107, 47, 0.1);
          color: var(--color-primary);
          padding: var(--spacing-4);
          border-radius: var(--radius-xl);
          flex-shrink: 0;
        }

        .program-title-group {
          flex: 1;
        }

        .program-title-group h2 {
          margin: 0 0 var(--spacing-1);
          color: var(--color-primary);
        }

        .program-subtitle {
          color: var(--color-secondary);
          font-weight: 600;
          margin: 0;
        }

        .program-price {
          text-align: right;
        }

        .price-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-secondary);
        }

        .program-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
        }

        .program-details {
          display: flex;
          gap: var(--spacing-6);
          margin-bottom: var(--spacing-8);
          flex-wrap: wrap;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          color: var(--color-gray-600);
          font-weight: 500;
        }

        .detail-item svg {
          color: var(--color-secondary);
        }

        .program-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-8);
          margin-bottom: var(--spacing-8);
        }

        .content-section h4 {
          margin-bottom: var(--spacing-4);
          color: var(--color-primary);
        }

        .includes-list,
        .benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .include-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          color: var(--color-gray-700);
        }

        .include-item svg {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          color: var(--color-gray-700);
        }

        .benefit-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-secondary);
          flex-shrink: 0;
        }

        .program-actions {
          display: flex;
          gap: var(--spacing-4);
          justify-content: center;
        }

        .info-section {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-8);
        }

        .info-card {
          background: var(--color-white);
          padding: var(--spacing-8);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
        }

        .info-card h3 {
          margin-bottom: var(--spacing-4);
          color: var(--color-primary);
        }

        .info-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
        }

        .info-list li {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-3);
          color: var(--color-gray-700);
        }

        .info-list li::before {
          content: '•';
          color: var(--color-secondary);
          font-weight: bold;
          margin-top: 2px;
        }

        .cta-programs {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: var(--color-white);
          text-align: center;
        }

        .cta-content h2 {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-4);
        }

        .cta-content p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--spacing-6);
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
            text-align: center;
          }

          .program-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-6);
          }

          .info-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .program-card {
            padding: var(--spacing-6);
          }

          .program-header {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-4);
          }

          .program-details {
            justify-content: center;
            gap: var(--spacing-4);
          }

          .program-actions {
            flex-direction: column;
          }

          .hero-stats {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--spacing-4);
          }
        }
      `}</style>
    </div>
  );
};

export default ProgramsPage;