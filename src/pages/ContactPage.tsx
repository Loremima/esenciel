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
    // Ici, on traiterait l'envoi du formulaire
    console.log('Données du formulaire:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="contact-page">
        <section className="section success-section">
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
      <section className="hero-contact">
        <div className="container">
          <div className="hero-content">
            <h1>Contact & Réservation</h1>
            <p className="hero-subtitle">
              Prenons le temps d'échanger sur vos besoins et objectifs
            </p>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="section contact-content">
        <div className="container">
          <div className="content-grid">
            {/* Formulaire */}
            <div className="form-section">
              <h2>Prendre rendez-vous</h2>
              <p className="form-intro">
                Remplissez ce formulaire pour me faire part de votre demande. 
                Je vous recontacterai rapidement pour planifier notre première rencontre.
              </p>

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
                      <option value="sante">Santé & Qualité de Vie</option>
                      <option value="mindfulness">Pleine Conscience</option>
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
                  <label htmlFor="preferredTime">Créneaux préférés</label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Ex: Mardis après-midi, jeudis matin..."
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

                <div className="form-group consent">
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

            {/* Informations de contact */}
            <div className="info-section">
              <div className="contact-info">
                <h3>Informations de contact</h3>
                
                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    <h4>Adresse</h4>
                    <p>Cabinet de consultation<br />Cransac-les-Thermes<br />12110 Aveyron</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Phone size={24} />
                  <div>
                    <h4>Téléphone</h4>
                    <p>06 XX XX XX XX</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Mail size={24} />
                  <div>
                    <h4>Email</h4>
                    <p>contact@veronique-carrie.fr</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Clock size={24} />
                  <div>
                    <h4>Horaires</h4>
                    <p>Lundi - Vendredi: 9h - 18h<br />Sur rendez-vous</p>
                  </div>
                </div>
              </div>

              <div className="consultation-info">
                <h3>Types de consultation</h3>
                <div className="consultation-types">
                  <div className="consultation-type">
                    <h4>Présentiel</h4>
                    <p>Au cabinet à Cransac-les-Thermes</p>
                  </div>
                  <div className="consultation-type">
                    <h4>Distanciel</h4>
                    <p>Par visioconférence sécurisée</p>
                  </div>
                </div>
              </div>

              <div className="urgency-info">
                <h4>En cas d'urgence</h4>
                <p>
                  Pour toute situation d'urgence psychologique, contactez le 
                  <strong> 3114</strong> (numéro national de prévention du suicide) 
                  ou rendez-vous aux urgences de votre hôpital le plus proche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          padding-top: 80px;
        }

        .hero-contact {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: var(--color-white);
          padding: var(--spacing-16) 0;
          text-align: center;
        }

        .hero-content h1 {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-4);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 500px;
          margin: 0 auto;
        }

        .contact-content {
          background: var(--color-white);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-12);
        }

        .form-section h2 {
          margin-bottom: var(--spacing-4);
          color: var(--color-primary);
        }

        .form-intro {
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-8);
          line-height: 1.6;
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
          color: var(--color-gray-800);
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
          background: var(--color-white);
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

        .consent {
          margin-top: var(--spacing-4);
        }

        .consent-label {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-3);
          cursor: pointer;
          font-size: 0.95rem;
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
          color: var(--color-white);
          font-size: 14px;
          font-weight: bold;
        }

        .submit-btn {
          margin-top: var(--spacing-4);
          padding: var(--spacing-4) var(--spacing-8);
          font-size: 1.1rem;
        }

        .info-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-8);
        }

        .contact-info,
        .consultation-info,
        .urgency-info {
          background: var(--color-gray-50);
          border-radius: var(--radius-xl);
          padding: var(--spacing-6);
        }

        .contact-info h3,
        .consultation-info h3 {
          margin-bottom: var(--spacing-6);
          color: var(--color-primary);
          text-align: center;
        }

        .contact-item {
          display: flex;
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-6);
          align-items: flex-start;
        }

        .contact-item:last-child {
          margin-bottom: 0;
        }

        .contact-item svg {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-item h4 {
          margin: 0 0 var(--spacing-1);
          color: var(--color-primary);
          font-size: 1rem;
        }

        .contact-item p {
          margin: 0;
          color: var(--color-gray-700);
          line-height: 1.5;
        }

        .consultation-types {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }

        .consultation-type {
          padding: var(--spacing-4);
          background: var(--color-white);
          border-radius: var(--radius-lg);
          border-left: 4px solid var(--color-secondary);
        }

        .consultation-type h4 {
          margin: 0 0 var(--spacing-1);
          color: var(--color-primary);
        }

        .consultation-type p {
          margin: 0;
          color: var(--color-gray-700);
          font-size: 0.95rem;
        }

        .urgency-info {
          background: linear-gradient(135deg, rgba(218, 165, 32, 0.1), rgba(218, 165, 32, 0.05));
          border: 1px solid rgba(218, 165, 32, 0.2);
        }

        .urgency-info h4 {
          margin-bottom: var(--spacing-3);
          color: var(--color-secondary-dark);
        }

        .urgency-info p {
          margin: 0;
          color: var(--color-gray-700);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .urgency-info strong {
          color: var(--color-secondary-dark);
          font-weight: 700;
        }

        .success-section {
          background: var(--color-white);
          min-height: 60vh;
          display: flex;
          align-items: center;
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

        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
          }
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }

          .success-card {
            padding: var(--spacing-8);
          }

          .contact-info,
          .consultation-info,
          .urgency-info {
            padding: var(--spacing-4);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;