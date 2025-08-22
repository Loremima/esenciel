import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Euro, CheckCircle, Users, Calendar, CalendarDays } from 'lucide-react';

const ProgrammesMBSRPage: React.FC = () => {
  const mbsrPrograms = [
    {
      id: 'mbsr-mbct',
      title: 'Programmes MBSR & MBCT',
      subtitle: 'Programmes de 8 semaines basés sur la pleine conscience',
      description: 'Programmes scientifiquement validés développés dans les universités américaines pour améliorer le bien-être et la gestion du stress.',
      duration: '8 semaines',
      price: 'Sur devis',
      groupSize: 'Groupes de 8 à 12 personnes',
      features: [
        'Méditations guidées progressives',
        'Techniques de mindfulness au quotidien',
        'Gestion du stress et des émotions',
        'Support audio et ressources',
        'Suivi personnalisé',
        'Certificat de participation'
      ],
      link: '/programmes-mbsr-mbct'
    }
  ];

  return (
    <div className="mbsr-programs-page">
      {/* Hero Section */}
      <section className="hero-mbsr">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <h1>Programmes de pleine conscience </h1>
          <p className="hero-subtitle">
            Entrainement basés sur la pleine conscience, scientifiquement validés.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="section programs-list">
        <div className="container">
          <div className="section-header">
            <h2>Nos programmes structurés</h2>
            <p>Des programmes complets et progressifs pour une transformation durable de votre rapport au stress et aux émotions</p>
          </div>

          <div className="programs-grid">
            {mbsrPrograms.map((program) => {
              return (
                <div key={program.id} className="card program-card">
                  <div className="program-header no-icon">
                    <div>
                      <h3>{program.title}</h3>
                      <p className="program-subtitle">{program.subtitle}</p>
                    </div>
                  </div>

                  <p className="program-description">{program.description}</p>

                  <div className="program-features">
                    {program.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="program-details">
                    <div className="detail-item">
                      <Calendar size={16} />
                      <span>{program.duration}</span>
                    </div>
                    <div className="detail-item">
                      <Euro size={16} />
                      <span>{program.price}</span>
                    </div>
                    <div className="detail-item">
                      <Users size={16} />
                      <span>{program.groupSize}</span>
                    </div>
                  </div>

                  <Link to={program.link} className="btn btn-primary">
                    Découvrir le programme
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section info-section parallax-surface">
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
          <div className="info-content">
            <h2>Pourquoi choisir nos Programmes de pleine conscience  ?</h2>
            <div className="info-grid">
              <div className="info-card">
                <h3>Scientifiquement validés</h3>
                <p>Développés dans les universités américaines, ces programmes ont fait leurs preuves dans l'amélioration du bien-être.</p>
              </div>
              <div className="info-card">
                <h3>Instructrice certifiée</h3>
                <p>Je suis instructrice certifiée avec une formation approfondie en programmes de pleine conscience.</p>
              </div>
              <div className="info-card">
                <h3>Approche progressive</h3>
                <p>Un parcours structuré sur 8 semaines pour une intégration durable des pratiques.</p>
              </div>
              <div className="info-card">
                <h3>Groupe bienveillant</h3>
                <p>Un cadre sécurisant qui favorise les échanges et le partage d'expériences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt(e) à vous engager dans un programme complet ?</h2>
            <p>
              Contactez-moi pour connaître les prochaines sessions et réserver votre place
              dans nos programmes MBSR ou MBCT.
            </p>
            <Link to="/contact-reservation" className="btn btn-primary">
              M'inscrire
              <CalendarDays size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgrammesMBSRPage;
