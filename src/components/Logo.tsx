import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'footer';
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ variant = 'navbar', isScrolled = false }) => {
  return (
    <div className={`logo logo--${variant} ${isScrolled ? 'logo--scrolled' : ''}`}>
      <img
        src="/logo.png"
        alt="MindWayLife Logo"
        className="logo__image"
      />

      <div className="logo__text">
        <h1 className="logo__name">Véronique Carrié</h1>
      </div>

      <style jsx>{`
        .logo {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          transition: all var(--transition-normal);
        }

        .logo__image {
          width: 50px;
          height: auto;
          flex-shrink: 0;
        }

        .logo__text {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }

        .logo__name {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.2;
        }

        /* Navbar variant - Logo blanc par défaut */
        .logo--navbar .logo__name {
          color: #fffcea !important;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        /* Navbar variant - Logo noir quand scrollé */
        .logo--navbar.logo--scrolled .logo__name {
          color: #1F2937 !important;
          text-shadow: none;
        }

        /* Footer variant - Logo blanc */
        .logo--footer .logo__name {
          color: #fffcea !important;
        }

        @media (max-width: 768px) {
          .logo__name {
            font-size: 1.25rem;
          }
          
          .logo__image {
            width: 40px;
          }
        }

        @media (max-width: 480px) {
          .logo__text {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;