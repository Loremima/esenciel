import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      {/* Eye of Horus SVG with golden heart */}
      <div className="logo-icon">
        <svg
          width="60"
          height="45"
          viewBox="0 0 60 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Eye of Horus */}
          <path
            d="M6 22.5C6 22.5 12 12 30 12C48 12 54 22.5 54 22.5C54 22.5 48 33 30 33C12 33 6 22.5 6 22.5Z"
            stroke="var(--color-primary)"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="30"
            cy="22.5"
            r="6"
            fill="var(--color-primary)"
          />
          <path
            d="M30 28.5C30 28.5 25 35 20 38C18 39 16 40 16 42"
            stroke="var(--color-primary)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M20 38C20 38 18 35 15 35C12 35 10 37 10 40"
            stroke="var(--color-primary)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M15 35C15 35 13 32 10 32"
            stroke="var(--color-primary)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Golden heart */}
          <path
            d="M42 18C42 16.5 43.5 15 45 15C46.5 15 48 16.5 48 18C48 19.5 45 22 45 22C45 22 42 19.5 42 18Z"
            fill="var(--color-secondary)"
          />
          <path
            d="M48 18C48 16.5 49.5 15 51 15C52.5 15 54 16.5 54 18C54 19.5 51 22 51 22C51 22 48 19.5 48 18Z"
            fill="var(--color-secondary)"
          />
          <path
            d="M42 18C42 20 45 22 48 22C51 22 54 20 54 18"
            fill="var(--color-secondary)"
          />
        </svg>
      </div>

      <div className="logo-text">
        <h1 className="logo-name">Véronique Carrié</h1>
        <p className="logo-tagline">Coach & Formatrice en Santé</p>
      </div>

      <style jsx>{`
        .logo {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          transition: all var(--transition-normal);
        }

        .logo:hover {
          transform: scale(1.02);
        }

        .logo-icon {
          flex-shrink: 0;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }

        .logo-name {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-primary);
          margin: 0;
          line-height: 1.2;
        }

        .logo-tagline {
          font-size: 0.875rem;
          color: var(--color-secondary);
          font-weight: 500;
          margin: 0;
          line-height: 1.2;
        }

        @media (max-width: 768px) {
          .logo-name {
            font-size: 1.25rem;
          }
          
          .logo-tagline {
            font-size: 0.75rem;
          }
          
          .logo-icon svg {
            width: 50px;
            height: 37px;
          }
        }

        @media (max-width: 480px) {
          .logo-text {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;