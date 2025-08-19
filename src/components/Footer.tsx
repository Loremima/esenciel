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
              Recevez mes conseils bien-être et les dernières actualités
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
            {/* Colonne 1 : Logo et description */}
            <div className="footer__brand">
              <Logo variant="footer" />
              <p className="footer__description">
                Accompagnement personnalisé pour votre bien-être et votre
                épanouissement personnel. Une approche intégrative alliant sciences
                psychologiques et pleine conscience.
              </p>
            </div>

            {/* Colonne 2 : Services */}
            <div className="footer__section">
              <h4 className="footer__section-title">Services</h4>
              <ul className="footer__links">
                <li><Link to="/services#individuels">Santé & Qualité de Vie</Link></li>
                <li><Link to="/services#individuels">Pleine Conscience</Link></li>
                <li><Link to="/services#groupes">Jeu du Tao</Link></li>
                <li><Link to="/services#programmes">Programmes MBSR/MBCT</Link></li>
              </ul>
            </div>

            {/* Colonne 3 : Informations pratiques */}
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
                  <span>veroniquecarrie27@gmail.com</span>
                </li>
                <li className="footer__contact-item">
                  <Clock size={16} />
                  <span>Lun-Ven: 9h-18h</span>
                </li>
              </ul>
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
                &copy; {currentYear} Véronique Carrié. Tous droits réservés.
              </p>
              <p className="footer__credit">
                Site créé avec <Heart size={14} className="footer__heart" /> par Lorenzo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
          padding: 3.5rem 0;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .newsletter__content {
          max-width: 500px;
          margin: 0 auto;
        }

        .newsletter__title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--color-white);
          font-weight: 300;
          margin: 0 0 1rem 0;
        }

        .newsletter__description {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
          font-size: 1rem;
          margin: 0 0 2rem 0;
        }

        .newsletter__form {
          display: flex;
          max-width: 450px;
          margin: 0 auto;
          gap: 0;
        }

        .newsletter__input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 50px 0 0 50px;
          font-size: 0.9rem;
          outline: none;
          color: var(--color-gray-700);
        }

        .newsletter__input::placeholder {
          color: var(--color-gray-500);
          opacity: 1;
        }

        .newsletter__button {
          background: var(--color-secondary);
          color: var(--color-white);
          border: none;
          padding: 1rem 1.5rem;
          border-radius: 0 50px 50px 0;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
          font-size: 0.9rem;
        }

        .newsletter__button:hover {
          background: var(--color-secondary-dark);
        }

        /* === CONTENU PRINCIPAL - GRILLE 3 COLONNES === */
        .footer__main {
          padding: 4rem 0;
        }

        .footer__grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        /* Colonne 1 : Logo et description */
        .footer__brand {
          text-align: left;
        }

        .footer__description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 0.9rem;
          margin-top: 1.5rem;
          margin-bottom: 0;
        }

        /* Colonnes 2 et 3 : Services et Infos */
        .footer__section {
          text-align: left;
        }

        .footer__section-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-white);
          margin: 0 0 1.5rem 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
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
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s ease;
          font-size: 0.875rem;
        }

        .footer__links a:hover {
          color: var(--color-secondary);
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
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
        }

        .footer__contact-item svg {
          color: var(--color-secondary);
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
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.8rem;
          transition: color 0.2s ease;
        }

        .footer__legal-links a:hover {
          color: var(--color-secondary);
        }

        /* Copyright et crédit à droite */
        .footer__legal-credits {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
        }

        .footer__copyright {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
          margin: 0;
        }

        .footer__credit {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .footer__heart {
          color: var(--color-secondary);
        }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
          .footer__grid {
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .footer__grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }

          .footer__brand {
            text-align: center;
          }

          .footer__section {
            text-align: center;
          }

          .footer__contact-item {
            justify-content: center;
          }

          .newsletter__form {
            flex-direction: column;
            max-width: 300px;
          }

          .newsletter__input,
          .newsletter__button {
            border-radius: 50px;
          }

          .footer__legal-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .footer__legal-credits {
            align-items: center;
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
    </footer>
  );
};

export default Footer;