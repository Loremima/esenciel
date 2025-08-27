import React from 'react';

interface LogoProps {
  isScrolled?: boolean;
  theme?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false, theme = 'dark' }) => {
  const logoSrc = theme === 'dark' ? '/logo_black.png' : '/logo.png';

  return (
    <div className={`logo ${isScrolled ? 'logo--scrolled' : ''} logo--theme-${theme}`}>
      <img
        src={logoSrc}
        alt="MindWayLife Logo"
        className="logo__image"
      />

      <div className="logo__text">
        <h1 className="logo__name brand-name">EsenCiel</h1>
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
          transition: color 0.3s ease;
        }

        /* Gestion de la couleur du texte en fonction du thème */
        .logo--theme-dark .logo__name {
          color: var(--color-primary);
        }

        .logo--theme-light .logo__name {
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
