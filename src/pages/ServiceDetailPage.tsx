import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Euro, CheckCircle, Phone, Calendar } from 'lucide-react';

interface ServiceDetailPageProps {
  service: 'sante' | 'mindfulness' | 'tao';
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service }) => {
  const serviceData = {
    sante: {
      title: 'Santé & Qualité de Vie',
      subtitle: 'Acteur de sa santé : vers un bien-être durable',
      description:
        "Ces accompagnements sont conçus pour vous aider à identifier et à mettre en place des habitudes de vie favorables à votre bien‑être global. Grâce à un suivi personnalisé, nous explorerons vos ressources internes et lèverons les obstacles qui freinent vos intentions afin d'ancrer des pratiques durables.",
      longDescription: `L’accompagnement vise à vous offrir un soutien continu pour instaurer et maintenir de nouvelles habitudes de vie. Par un travail conjoint, nous clarifierons vos objectifs, identifierons les leviers de motivation et construirons des actions alignées à vos valeurs pour une amélioration durable de votre qualité de vie.`,
      process: [
        "Première rencontre : clarification des objectifs et plan d'action personnalisé",
        'Séances régulières : actions concrètes et ajustements selon vos besoins',
        'Suivi personnalisé : mobilisation des ressources et consolidation des acquis',
        'Bilan final : synthèse et pérennisation des changements'
      ],
      benefits: [
        "Prise de conscience des habitudes impactant le bien‑être",
        'Identification des freins et des blocages',
        'Mobilisation des ressources personnelles',
        'Mise en place d’actions adaptées et alignées',
        'Motivation soutenue sur le long terme'
      ],
      duration: '1h à 1h30 par séance',
      price: 'Sur devis',
      frequency: 'Selon vos besoins',
      modalities: ['Cabinet', 'Visioconférence']
    },
    mindfulness: {
      title: 'Pleine Conscience',
      subtitle: 'Ralentir pour mieux se retrouver',
      description:
        "Cet accompagnement vous invite à ralentir, à vous poser et à respirer pour cultiver une présence plus profonde. Les outils de pleine conscience vous aident à clarifier vos pensées, apaiser le cœur et vous aligner avec votre essence.",
      longDescription:
        "Processus progressif et flexible pour devenir plus autonome dans la gestion de votre bien‑être : pratiques guidées, exercices expérientiels et réflexions personnelles pour observer pensées, émotions et réponses automatisées avec bienveillance et transformer vos modes d’action.",
      process: [
        'Découverte des fondements et pratiques guidées adaptées',
        'Observation bienveillante et clarification mentale',
        'Intégration dans le quotidien et consolidation',
        'Suivi pour ancrer la pratique dans la durée'
      ],
      benefits: [
        'Écoute plus attentive de soi',
        "Reconnexion à l’instant présent et aux besoins profonds",
        'Libération de l’espace mental et émotionnel',
        'Autonomie et meilleure qualité de vie',
        'Choix de vie plus éclairés et alignés'
      ],
      duration: '45 min à 1h par séance',
      price: 'Sur devis',
      frequency: 'À définir ensemble',
      modalities: ['Individuel', 'Groupe', 'En ligne']
    },
    tao: {
      title: 'Jeu du Tao du Mieux‑Être',
      subtitle: 'Devenez le héros de votre propre légende – Jeu collectif',
      description:
        "Expérience interactive et immersive invitant à clarifier sa quête personnelle, avec l’appui du collectif. Un chemin d’introspection vers un équilibre de vie durable.",
      longDescription:
        "Dans un cadre bienveillant, chaque participant explore quatre mondes symboliques (Terre, Eau, Feu, Air) au travers de questions et d’échanges pour mettre au jour ses ressources, ses freins et ses aspirations, et ajuster ses choix de vie de manière plus éclairée.",
      process: [
        'Accueil et présentation du cadre',
        'Échauffement créatif et mise en confiance',
        'Exploration guidée à travers les 4 mondes',
        "Temps de partage et d'échanges",
        'Synthèse et ancrage des découvertes'
      ],
      benefits: [
        'Clarification des aspirations personnelles',
        'Introspection facilitée et harmonisation',
        'Ressources activées et décisions plus alignées',
        'Intelligence et entraide collective',
        'Outils concrets pour le quotidien'
      ],
      duration: '4 à 5 heures',
      price: '70€ par personne',
      frequency: 'Sessions ponctuelles',
      modalities: ['Jusqu’à 4 participants', 'Présentiel ou en ligne']
    }
  } as const;

  const currentService = serviceData[service];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="hero-service-detail hero-services">
        <div className="hero-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>{currentService.title}</h1>
              <p className="hero-subtitle">{currentService.subtitle}</p>
              <p className="hero-description">{currentService.description}</p>
              <Link to="/contact-reservation" className="btn btn-secondary">
                Réserver une séance
                <Calendar size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu détaillé */}
      <section className="section service-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <h2>En quoi consiste cet accompagnement ?</h2>
              <div className="text-content">
                {currentService.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>

              <h3>Déroulement des séances</h3>
              <div className="process-list">
                {currentService.process.map((step, index) => (
                  <div key={index} className="process-step">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">
                      <p>{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3>Bénéfices attendus</h3>
              <div className="benefits-grid">
                {currentService.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <CheckCircle size={20} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="sidebar">
              <div className="info-card">
                <h3>Informations pratiques</h3>

                <div className="info-item">
                  <Clock size={20} />
                  <div>
                    <span className="info-label">Durée</span>
                    <span className="info-value">{currentService.duration}</span>
                  </div>
                </div>

                <div className="info-item">
                  <Euro size={20} />
                  <div>
                    <span className="info-label">Tarif</span>
                    <span className="info-value">{currentService.price}</span>
                  </div>
                </div>

                <div className="info-item">
                  <Users size={20} />
                  <div>
                    <span className="info-label">Modalités</span>
                    <span className="info-value">{currentService.modalities.join(', ')}</span>
                  </div>
                </div>

                <div className="cta-buttons">
                  <Link to="/contact-reservation" className="btn btn-primary">
                    Prendre rendez-vous
                    <ArrowRight size={16} />
                  </Link>
                  <a href="tel:+336 25 13 72 50" className="btn btn-outline">
                    <Phone size={16} />
                    Appeler
                  </a>
                </div>
              </div>

              {/* Autres services */}
              <div className="related-services">
                <h4>Autres services</h4>
                <div className="related-links">
                  {service !== 'sante' && (
                    <Link to="/sante-qualite-vie" className="related-link">
                      Santé & Qualité de Vie
                    </Link>
                  )}
                  {service !== 'mindfulness' && (
                    <Link to="/pleine-conscience" className="related-link">
                      Pleine Conscience
                    </Link>
                  )}
                  {service !== 'tao' && (
                    <Link to="/jeu-du-tao" className="related-link">
                      Jeu du Tao
                    </Link>
                  )}
                  <Link to="/programmes-mbsr-mbct" className="related-link">
                    Programmes de pleine conscience
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;