import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
    preferredTime: '',
    consent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Cabinet de consultation\nVaureilles\n12110 Aveyron'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '06 25 13 72 50'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'veroniquecarrie27@gmail.com'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lundi - Vendredi: 9h - 18h\nSur rendez-vous'
    }
  ];

  const consultationTypes = [
    {
      icon: Calendar,
      title: 'Présentiel',
      description: 'Consultations au cabinet à Vaureilles dans un cadre chaleureux et confidentiel'
    },
    {
      icon: Mail,
      title: 'Distanciel',
      description: 'Séances par visioconférence sécurisée depuis le confort de votre domicile'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="contact-page">
        <section className="success-section">
          <div className="container">
            <div className="success-card">
              <CheckCircle size={60} className="success-icon" />
              <h1>Merci pour votre message !</h1>
              <p>
                Votre demande a bien été envoyée. Je vous recontacterai dans les plus brefs délais
                pour planifier notre première rencontre.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setIsSubmitted(false)}
              >
                Envoyer un autre message
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
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
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact</h1>
          <p className="hero-subtitle">
            Prenons le temps d'échanger sur vos besoins et objectifs
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        {/* Contact Information */}
        <section className="contact-info-section">
          <div className="container">
            <div className="section-header">
              <h1>Informations de contact</h1>
            </div>
            <div className="contact-grid">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="contact-item">
                    <IconComponent size={24} />
                    <div>
                      <h2>{info.title}</h2>
                      <p>{info.content.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < info.content.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="form-section parallax-surface">
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
              <h1>Prendre rendez-vous</h1>
              <p>Remplissez ce formulaire pour me faire part de votre demande. Je vous recontacterai rapidement pour planifier notre première rencontre.</p>
            </div>
            <div className="form-wrapper">

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service souhaité</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Choisir un service</option>
                      <option value="sante">Santé & qualité de vie</option>
                      <option value="mindfulness">Pleine conscience et présence attentive.</option>
                      <option value="tao">Jeu du Tao</option>
                      <option value="mbsr">Programme MBSR</option>
                      <option value="mbct">Programme MBCT</option>
                      <option value="autre">Autre / À définir</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Objet de votre demande *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Ex: Première consultation, information sur les programmes..."
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="form-textarea"
                    rows={5}
                    placeholder="Décrivez brièvement votre situation et vos attentes..."
                  ></textarea>
                </div>

                <div className="form-group consent-group">
                  <label className="consent-label">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="consent-checkbox"
                    />
                    <span className="checkmark"></span>
                    J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande *
                  </label>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <Send size={18} />
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="consultation-section">
          <div className="container">
            <div className="section-header">
              <h1>Types de consultation</h1>
            </div>
            <div className="consultation-grid">
              {consultationTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <div key={index} className="consultation-card">
                    <IconComponent size={32} />
                    <h2>{type.title}</h2>
                    <p>{type.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .contact-page {
        }

        /* === HERO SECTION === */
        .hero-section {
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
          z-index: 1;
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
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          color: #fffcea;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
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
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          letter-spacing: 0.025em;
        }

        /* === MAIN CONTENT === */
        .main-content {
          background: #fffcea;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* === SECTION HEADERS === */
        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-8);
          width: 100%;
          display: block;
        }

        .section-header h1 {
          font-size: clamp(2rem, 4vw, 2.5rem);
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
        }

        .section-header p {
          font-size: 1.2rem;
          color: var(--color-gray-600);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* === CONTACT INFO SECTION === */
        .contact-info-section {
          padding: var(--spacing-16) 0;
        }

        /* Forcer le flux vertical (titre au-dessus, contenu dessous) */
        .contact-info-section .container,
        .form-section .container,
        .consultation-section .container {
          display: block;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-6);
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: var(--spacing-6);
          background: linear-gradient(135deg, #fffcea 0%, var(--color-gray-50) 100%);
          border-radius: var(--radius-xl);
          border: 1px solid rgba(85, 107, 47, 0.1);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border-color: var(--color-secondary);
        }

        .contact-item svg {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-3);
        }

        .contact-item h2 {
          margin: 0 0 var(--spacing-2);
          color: var(--color-primary);
          font-size: 1.1rem;
          font-weight: 600;
        }

        .contact-item p {
          margin: 0;
          color: var(--color-gray-700);
          line-height: 1.5;
          font-size: 0.95rem;
        }

        /* === FORM SECTION === */
        .form-section {
          padding: var(--spacing-16) 0;
          background: var(--color-gray-50);
          background-image: linear-gradient(rgba(255,255,255,0.0), rgba(255,255,255,0.0));
        }

        .form-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-6);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-4);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .form-group label {
          font-weight: 600;
          color: #fffcea;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .form-input,
        .form-select,
        .form-textarea {
          padding: var(--spacing-3);
          border: 2px solid var(--color-gray-300);
          border-radius: var(--radius-lg);
          font-size: 1rem;
          font-family: var(--font-body);
          transition: all var(--transition-fast);
          background: #fffcea;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(85, 107, 47, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .consent-group {
          margin-top: var(--spacing-4);
        }

        .consent-label {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-3);
          cursor: pointer;
          font-size: 0.95rem;
          color: #fffcea !important;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          line-height: 1.5;
        }

        .consent-checkbox {
          appearance: none;
          width: 20px;
          height: 20px;
          border: 2px solid var(--color-gray-400);
          border-radius: var(--radius-sm);
          position: relative;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .consent-checkbox:checked {
          background: var(--color-primary);
          border-color: var(--color-primary);
        }

        .consent-checkbox:checked::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fffcea;
          font-size: 14px;
          font-weight: bold;
        }

        .submit-btn {
          margin-top: var(--spacing-4);
          padding: var(--spacing-4) var(--spacing-8);
          font-size: 1.1rem;
          align-self: center;
        }

        /* === CONSULTATION SECTION === */
        .consultation-section {
          padding: var(--spacing-16) 0;
        }

        .consultation-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-8);
          max-width: 600px;
          margin: 0 auto;
        }

        .consultation-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: var(--spacing-8);
          background: linear-gradient(135deg, var(--color-white) 0%, #fffcea 100%);
          border-radius: var(--radius-xl);
          border: 1px solid rgba(85, 107, 47, 0.1);
          transition: all 0.3s ease;
        }

        .consultation-card:hover {
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
          border-color: var(--color-secondary);
        }

        .consultation-card svg {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-4);
        }

        .consultation-card h2 {
          margin: 0 0 var(--spacing-3);
          color: var(--color-primary);
          font-size: 1.3rem;
          font-weight: 600;
        }

        .consultation-card p {
          margin: 0;
          color: var(--color-gray-700);
          line-height: 1.6;
        }



        /* === SUCCESS SECTION === */
        .success-section {
          background: #fffcea;
          min-height: 60vh;
          display: flex;
          align-items: center;
          padding: var(--spacing-16) 0;
        }

        .success-card {
          background: var(--color-gray-50);
          border-radius: var(--radius-2xl);
          padding: var(--spacing-12);
          text-align: center;
          max-width: 500px;
          margin: 0 auto;
          box-shadow: var(--shadow-lg);
        }

        .success-icon {
          color: var(--color-success);
          margin-bottom: var(--spacing-6);
        }

        .success-card h1 {
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
        }

        .success-card p {
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-6);
          line-height: 1.6;
        }

        /* === BUTTONS === */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: var(--spacing-3) var(--spacing-6);
          border-radius: var(--radius-lg);
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }

        .btn-primary {
          background: var(--color-primary);
          color: #fffcea;
        }

        .btn-primary:hover {
          background: var(--color-primary-dark);
        }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-4);
          }

          .consultation-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-6);
          }
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-4);
          }

          .form-row {
            grid-template-columns: 1fr;
          }



          .consultation-card {
            padding: var(--spacing-6);
          }

          .urgency-card {
            padding: var(--spacing-6);
          }

          .success-card {
            padding: var(--spacing-8);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;