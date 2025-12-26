import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Newsletter Section - En haut, centrée */}
      <div className="footer__newsletter">
        <div className="footer__container">
          <div className="newsletter__content">
            <h3 className="newsletter__title">Newsletter</h3>
            <p className="newsletter__description">
              Recevez chaque mois des pratiques et des informations pour soutenir votre santé et votre vitalité.
            </p>
            <form className="newsletter__form">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="newsletter__input"
                required
              />
              <button type="submit" className="newsletter__button">
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contenu Principal - Grille 3 colonnes */}
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__grid">
            {/* Colonne 1 : Services */}
            < div className="footer__section">
              <h4 className="footer__section-title">Services</h4>
              <ul className="footer__links">
                <li><Link to="/services#individuels">Santé & vitalité</Link></li>
                <li><Link to="/services#individuels">Pleine conscience & présence attentive</Link></li>
                <li><Link to="/services#groupes">Jeu du Tao</Link></li>
                <li><Link to="/services#programmes">Programmes de pleine conscience</Link></li>
                <li><Link to="/services#programmes">Entreprises & collectivités</Link></li>
              </ul>
            </div>

            {/* Colonne 2 : Informations pratiques */}
            <div className="footer__section">
              <h4 className="footer__section-title">Informations pratiques</h4>
              <ul className="footer__contact">
                <li className="footer__contact-item">
                  <MapPin size={16} />
                  <span>Vaureilles, Aveyron</span>
                </li>
                <li className="footer__contact-item">
                  <Phone size={16} />
                  <span>06 25 13 72 50</span>
                </li>
                <li className="footer__contact-item">
                  <Mail size={16} />
                  <span>esenciel.contact@gmail.com</span>
                </li>
                <li className="footer__contact-item">
                  <Clock size={16} />
                  <span>Lun-Ven: 9h-18h</span>
                </li>
              </ul>
            </div>
            {/* Colonne 3 : Logo et description */}
            <div className="footer__brand">
              <div className="footer__brand-logo">
                <img src="/logo.png" alt="EsenCiel Logo" className="footer__logo-image" />
              </div>
              <div className="footer__brand-text">
                <h1 className="footer__brand-title">EsenCiel</h1>
                <p className="footer__author">by Véronique Carrié</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Légale - En bas */}
      <div className="footer__legal">
        <div className="footer__container">
          <div className="footer__legal-content">
            {/* Liens légaux à gauche */}
            <div className="footer__legal-links">
              <Link to="/mentions-legales">Mentions légales</Link>
              <Link to="/politique-confidentialite">Politique de confidentialité</Link>
              <Link to="/cgv">CGV</Link>
            </div>

            {/* Copyright et crédit à droite */}
            <div className="footer__legal-credits">
              <p className="footer__copyright">
                &copy; {currentYear} EsenCiel. Tous droits réservés.
              </p>
              <p className="footer__credit">
                Site créé avec <Heart size={14} className="footer__heart" /> par Lorenzo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Footer principal */
        .footer {
          background: var(--color-primary);
          color: var(--color-white);
          margin-top: 0;
        }

        /* Container global */
        .footer__container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* === NEWSLETTER SECTION === */
        .footer__newsletter {
          background: var(--color-primary);
          padding: 4rem 0;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .newsletter__content {
          max-width: 600px;
          margin: 0 auto;
        }

        .newsletter__title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4vw, 3rem);
          margin-bottom: 1rem;
          color: #fffcea;
          font-weight: 600;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
        }

        .newsletter__description {
          color: rgba(255, 252, 234, 0.95);
          margin-bottom: 2rem;
          font-size: 1rem;
          line-height: 1.6;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 2rem;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .newsletter__form {
          display: flex;
          max-width: 480px;
          margin: 0 auto;
          gap: 0;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          border-radius: 50px;
          overflow: hidden;
        }

        .newsletter__input {
          flex: 1;
          padding: 1.2rem 1.8rem;
          border: none;
          border-radius: 0;
          font-size: 1rem;
          outline: none;
          color: var(--color-gray-800);
          background-color: #fffcea;
          font-family: var(--font-body);
        }

        .newsletter__input::placeholder {
          color: var(--color-gray-500);
          opacity: 0.8;
        }

        .newsletter__input:focus {
          background-color: white;
        }

        .newsletter__button {
          background: var(--color-primary-dark);
          color: #fffcea;
          border: none;
          padding: 1.2rem 2rem;
          border-radius: 0;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          font-family: var(--font-body);
          white-space: nowrap;
        }

        .newsletter__button:hover {
          background: var(--color-gray-900);
          transform: translateY(-1px);
        }

        /* === CONTENU PRINCIPAL - GRILLE 3 COLONNES === */
        .footer__main {
          padding: 3rem 0;
        }

        .footer__grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        /* Colonne 1 : Logo et description */
        .footer__brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
        }

        .footer__brand-logo {
          display: flex;
          justify-content: center;
        }

        .footer__logo-image {
          width: 60px;
          height: auto;
        }

        .footer__brand-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }
        
        .footer__brand-title {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 3vw, 2.2rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: #fffcea;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          line-height: 1;
        }

        .footer__author {
          font-family: var(--font-body);
          font-size: clamp(0.9rem, 1.5vw, 1rem);
          font-weight: 300;
          font-style: italic;
          color: rgba(255, 252, 234, 0.8);
          margin: 0;
          text-shadow: 0 1px 4px rgba(0,0,0,0.4);
          letter-spacing: 0.05em;
        }

        .footer__description {
          color: #fffcea;
          line-height: 1.7;
          font-size: 0.95rem;
          margin-top: 0;
          margin-bottom: 0;
          text-align: center;
          max-width: 400px;
        }

        /* Colonnes 2 et 3 : Services et Infos */
        .footer__section {
          text-align: left;
        }

        .footer__section-title {
          font-size: 1rem;
          font-weight: 700;
          color: #fffcea;
          margin: 0 0 1.2rem 0;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-family: var(--font-heading);
        }

        .footer__links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer__links a {
          color: #fffcea;
          text-decoration: none;
          transition: color 0.2s ease;
          font-size: 0.875rem;
        }

        .footer__links a:hover {
          color: rgba(255, 252, 234, 0.7);
        }

        .footer__contact {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer__contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #fffcea;
          font-size: 0.875rem;
        }

        .footer__contact-item svg {
          color: #fffcea;
          flex-shrink: 0;
        }

        /* === SECTION LÉGALE === */
        .footer__legal {
          background: var(--color-primary-dark);
          padding: 1.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer__legal-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* Liens légaux à gauche */
        .footer__legal-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .footer__legal-links a {
          color: #fffcea;
          text-decoration: none;
          font-size: 0.8rem;
          transition: color 0.2s ease;
        }

        .footer__legal-links a:hover {
          color: rgba(255, 252, 234, 0.7);
        }

        /* Copyright et crédit à droite */
        .footer__legal-credits {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
        }

        .footer__copyright {
          color: #fffcea;
          font-size: 0.8rem;
          margin: 0;
        }

        .footer__credit {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #fffcea;
          margin: 0;
        }

        .footer__heart {
          color: #fffcea;
        }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
          .footer__grid {
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .footer__newsletter {
            padding: 3rem 0;
          }

          .newsletter__title {
            font-size: clamp(2rem, 8vw, 2.8rem);
            margin-bottom: 1rem;
          }

          .newsletter__description {
            font-size: 1rem;
            margin-bottom: 2rem;
            padding: 0 1rem;
          }

          .newsletter__form {
            flex-direction: column;
            max-width: 320px;
            margin: 0 auto;
            border-radius: 20px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
          }

          .newsletter__input {
            border-radius: 20px 20px 0 0;
            padding: 1.1rem 1.5rem;
            font-size: 0.95rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }

          .newsletter__button {
            border-radius: 0 0 20px 20px;
            padding: 1.1rem;
            font-size: 0.95rem;
          }

          .footer__grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }

          .footer__brand {
            text-align: center;
            align-items: center;
          }

          .footer__brand .footer__description {
            text-align: center;
            max-width: 280px;
          }
          
          .footer__author {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .footer__container {
            padding: 0 1rem;
          }

          .footer__legal-links {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </footer >
  );
};

export default Footer;