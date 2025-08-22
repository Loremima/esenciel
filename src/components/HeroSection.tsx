import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  const words = ['Ralenti,', 'Respire,', 'Ressens'];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleWords(prev => {
        if (prev < words.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 1000); // Apparition plus posée

    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src="/background.mp4" type="video/mp4" />
        {/* Fallback image si la vidéo ne charge pas */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Paysage serein - MindWayLife"
        />
      </video>

      <div className="overlay" aria-hidden="true"></div>

      <div className="hero-center">
        <div className="brand-title">Véronique Carrié</div>
        <h1 className="animated-slogan">
          {words.map((word, index) => (
            <span
              key={index}
              className={`word ${index < visibleWords ? 'visible' : ''}`}
            >
              {word}
            </span>
          ))}
        </h1>
        <div className="actions">
          <Link to="/contact-reservation" className="btn btn-primary">
            <span>Réserver</span>
          </Link>
          <Link to="/qui-suis-je" className="btn btn-secondary">
            <span>En savoir plus</span>
          </Link>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        .hero-video {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: -2;
        }

        .hero-video img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* voile subtil pour la lisibilité sans masquer l'image */
        .overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.4) 100%
          );
          z-index: -1;
        }

        .hero-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-6);
          text-align: center;
        }

        .brand-title {
          font-family: var(--font-heading);
          font-variant-caps: small-caps;
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #fffcea;
          margin: 0; /* espacement géré par gap du conteneur */
          text-shadow: 0 1px 4px rgba(0,0,0,0.5);
        }

        .hero-main-title {
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 1.1;
          color: var(--color-white);
          font-weight: 700;
          text-shadow: 0 4px 20px rgba(0,0,0,0.4);
          margin: 0; /* espacement géré par gap */
          max-width: 800px;
        }

        .animated-slogan {
          font-size: clamp(1.2rem, 3.2vw, 1.8rem); /* plus petit que le brand-title */
          line-height: 1.2;
          color: #fffcea;
          letter-spacing: 0.05em;
          text-shadow: 0 3px 12px rgba(0,0,0,0.35);
          font-weight: 400;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-4);
          margin: 0; /* espacement géré par gap */
        }

        .animated-slogan .word {
          display: inline-block;
          opacity: 0;
          transform: translateY(10px) scale(0.98);
          filter: blur(8px);
          transition:
            opacity 1200ms ease,
            transform 1200ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 1200ms ease;
          font-size: inherit; /* hérite de .animated-slogan */
          font-family: var(--font-heading);
          color: #fffcea;
          text-shadow: 0 3px 12px rgba(0,0,0,0.35);
          line-height: 1.15;
          font-weight: 600;
        }

        .animated-slogan .word.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        .actions {
          display: flex;
          gap: var(--spacing-4);
          flex-wrap: wrap;
          justify-content: center;
          margin: 0; /* espacement géré par gap */
        }

        .actions .btn {
          position: relative;
          background: rgba(255, 252, 234, 0.1);
          border: 1px solid rgba(255, 252, 234, 0.35);
          color: #fffcea;
          font-weight: 500;
          font-size: 1rem;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          min-width: 180px;
          text-align: center;
          backdrop-filter: blur(10px);
          letter-spacing: 0.025em;
        }

        .actions .btn:hover {
          background: rgba(255, 252, 234, 0.22);
          border-color: rgba(255, 252, 234, 0.6);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .actions .btn span {
          position: relative;
          z-index: 1;
        }
        
        .actions .btn-primary {
          background: #fffcea;
          border-color: #fffcea;
          color: var(--color-primary);
          font-weight: 600;
        }

        .actions .btn-primary:hover {
          background: transparent;
          border-color: #fffcea;
          color: #fffcea;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .actions .btn-secondary {
          background: rgba(255, 252, 234, 0.1);
          border-color: rgba(255, 252, 234, 0.35);
          color: #fffcea;
        }

        .actions .btn-secondary:hover {
          background: rgba(255, 252, 234, 0.22);
          border-color: rgba(255, 252, 234, 0.6);
        }

        .scroll-indicator {
          color: #fffcea;
          animation: bounce 2s infinite ease-in-out;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-15px);
          }
          60% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 768px) {
          .brand-title { font-size: clamp(1.6rem, 6vw, 2.2rem); }
          
          .animated-slogan {
            flex-direction: column;
            gap: var(--spacing-2);
            font-size: clamp(1rem, 4.5vw, 1.4rem);
          }

          .hero-main-title {
            font-size: clamp(2rem, 8vw, 3rem);
          }

          .hero-center {
            gap: var(--spacing-4);
          }

          .actions {
            flex-direction: column;
            gap: var(--spacing-3);
            width: 100%;
            max-width: 280px;
          }

          .actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;