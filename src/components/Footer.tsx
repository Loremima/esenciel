import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo et description */}
          <div className="footer-section">
            <Logo />
            <p className="footer-description">
              Accompagnement personnalisé pour votre bien-être et votre épanouissement personnel. 
              Une approche intégrative alliant sciences psychologiques et pleine conscience.
            </p>
            <div className="social-links">
              <span className="social-text">Suivez-moi</span>
              <div className="social-icons">
                <a href="#" className="social-link" aria-label="Facebook">
                  <Heart size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Services rapides */}
          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><Link to="/sante-qualite-vie">Santé & Qualité de Vie</Link></li>
              <li><Link to="/pleine-conscience">Pleine Conscience</Link></li>
              <li><Link to="/jeu-du-tao">Jeu du Tao</Link></li>
              <li><Link to="/programmes-mbsr-mbct">Programmes MBSR/MBCT</Link></li>
            </ul>
          </div>

          {/* Informations pratiques */}
          <div className="footer-section">
            <h3 className="footer-title">Informations pratiques</h3>
            <ul className="footer-info">
              <li className="info-item">
                <MapPin size={18} />
                <span>Cransac-les-Thermes, Aveyron</span>
              </li>
              <li className="info-item">
                <Phone size={18} />
                <span>06 XX XX XX XX</span>
              </li>
              <li className="info-item">
                <Mail size={18} />
                <span>contact@veronique-carrie.fr</span>
              </li>
              <li className="info-item">
                <Clock size={18} />
                <span>Lun-Ven: 9h-18h</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-title">Newsletter</h3>
            <p className="newsletter-text">
              Recevez mes conseils bien-être et les dernières actualités
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-secondary">
                S'abonner
              </button>
            </form>
            <p className="newsletter-disclaimer">
              Conformément au RGPD, vos données restent confidentielles.
            </p>
          </div>
        </div>

        {/* Séparateur */}
        <div className="footer-divider"></div>

        {/* Bas de page */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {currentYear} Véronique Carrié. Tous droits réservés.</p>
            <div className="legal-links">
              <Link to="/mentions-legales">Mentions légales</Link>
              <Link to="/politique-confidentialite">Politique de confidentialité</Link>
              <Link to="/cgv">CGV</Link>
            </div>
          </div>
          <p className="footer-credit">
            Site créé avec <Heart size={16} className="heart-icon" /> par Véronique Carrié
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: var(--color-white);
          padding: var(--spacing-16) 0 var(--spacing-8);
          margin-top: var(--spacing-20);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-8);
          margin-bottom: var(--spacing-12);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }

        .footer-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-secondary);
          margin-bottom: var(--spacing-2);
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: var(--spacing-4);
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .social-text {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .social-icons {
          display: flex;
          gap: var(--spacing-3);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(218, 165, 32, 0.2);
          border-radius: 50%;
          color: var(--color-secondary);
          text-decoration: none;
          transition: all var(--transition-normal);
        }

        .social-link:hover {
          background: var(--color-secondary);
          color: var(--color-white);
          transform: translateY(-2px);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--color-secondary);
        }

        .footer-info {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          color: rgba(255, 255, 255, 0.9);
        }

        .newsletter-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          margin-bottom: var(--spacing-3);
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
        }

        .newsletter-input {
          padding: var(--spacing-3);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.1);
          color: var(--color-white);
          font-size: 1rem;
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--color-secondary);
          background: rgba(255, 255, 255, 0.15);
        }

        .newsletter-disclaimer {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          margin-top: var(--spacing-2);
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          margin: var(--spacing-8) 0;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--spacing-4);
        }

        .footer-legal {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }

        .footer-legal p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          margin: 0;
        }

        .legal-links {
          display: flex;
          gap: var(--spacing-4);
          flex-wrap: wrap;
        }

        .legal-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color var(--transition-fast);
        }

        .legal-links a:hover {
          color: var(--color-secondary);
        }

        .footer-credit {
          display: flex;
          align-items: center;
          gap: var(--spacing-1);
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          margin: 0;
        }

        .heart-icon {
          color: var(--color-secondary);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-6);
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .legal-links {
            justify-content: center;
          }

          .newsletter-form {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;