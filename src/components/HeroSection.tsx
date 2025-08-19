import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

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
    }, 800); // Chaque mot apparaît après 800ms

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

      <div className="hero-top">
        <img src="/logo.png" alt="MindWayLife" className="brand-mark" />
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
      </div>

      <div className="hero-bottom">
        <div className="actions">
          <Link to="/contact-reservation" className="btn btn-primary">
            <span>Réserver</span>
          </Link>
          <Link to="/qui-suis-je" className="btn btn-secondary">
            <span>En savoir plus</span>
          </Link>
        </div>

      </div>

      <style jsx>{`
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

        .hero-top {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-6);
        }

        .hero-bottom {
          position: absolute;
          bottom: var(--spacing-8);
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-6);
          width: 100%;
        }

        .brand-mark {
          width: 120px;
          height: auto;
          filter: drop-shadow(0 4px 16px rgba(0,0,0,0.3));
        }

        .hero-main-title {
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 1.1;
          color: var(--color-white);
          font-weight: 700;
          text-shadow: 0 4px 20px rgba(0,0,0,0.4);
          margin: 0;
          max-width: 800px;
        }

        .animated-slogan {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          line-height: 1.2;
          color: var(--color-white);
          letter-spacing: 0.05em;
          text-shadow: 0 4px 20px rgba(0,0,0,0.4);
          font-weight: 300;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-4);
          margin: 0;
        }

        .word {
          opacity: 0;
          transform: scale(0.8);
          filter: blur(8px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: inline-block;
        }

        .word.visible {
          opacity: 1;
          transform: scale(1);
          filter: blur(0px);
        }

        .actions {
          display: flex;
          gap: var(--spacing-4);
          flex-wrap: wrap;
          justify-content: center;
        }

        .actions .btn {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: var(--color-white);
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
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .actions .btn span {
          position: relative;
          z-index: 1;
        }
        
        .actions .btn-primary {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(255, 255, 255, 0.95);
          color: var(--color-primary);
          font-weight: 600;
        }

        .actions .btn-primary:hover {
          background: var(--color-white);
          border-color: var(--color-white);
          color: var(--color-primary);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }

        .actions .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          color: var(--color-white);
        }

        .actions .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .scroll-indicator {
          color: rgba(255, 255, 255, 0.7);
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
          .brand-mark { width: 60px; }
          
          .animated-slogan {
            flex-direction: column;
            gap: var(--spacing-2);
            font-size: clamp(1.2rem, 5vw, 1.5rem);
          }

          .hero-main-title {
            font-size: clamp(2rem, 8vw, 3rem);
          }

          .hero-top {
            top: var(--spacing-6);
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