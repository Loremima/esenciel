import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ variant = 'navbar' }) => {
  return (
    <div className={`logo logo--${variant}`}>
      <img
        src="/logo.png"
        alt="MindWayLife Logo"
        className="logo__image"
      />

      <div className="logo__text">
        <h1 className="logo__name">MindWayLife</h1>
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

        /* Navbar variant - Logo noir */
        .logo--navbar .logo__name {
          color: #1F2937 !important;
        }

        /* Footer variant - Logo blanc */
        .logo--footer .logo__name {
          color: #FFFFFF !important;
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