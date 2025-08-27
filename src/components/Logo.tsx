import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'footer';
  isScrolled?: boolean;
  theme?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'navbar', isScrolled = false, theme = 'dark' }) => {
  const logoSrc = theme === 'dark' ? '/logo_black.png' : '/logo.png';

  return (
    <div className={`logo logo--${variant} ${isScrolled ? 'logo--scrolled' : ''}`}>
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
        }

        /* Navbar variant - La couleur est maintenant gérée par le Header.tsx */
        .logo--navbar .logo__name {
          /* La couleur est définie par .brand-name dans Header.tsx */
          transition: all 0.3s ease;
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
