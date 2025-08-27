import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSlowMoVideo } from '../hooks/useSlowMoVideo';

const HeroSection: React.FC = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  const words = ['Ralenti,', 'Respire,', 'Ressens'];
  const videoRef = useSlowMoVideo();

  useEffect(() => {
    const audio = document.getElementById('site-bgm') as HTMLAudioElement | null;
    if (!audio) return;

    // Essayer de jouer immédiatement
    const tryAutoplay = async () => {
      try {
        audio.muted = false;
        audio.volume = 0.3; // Volume modéré
        await audio.play();
      } catch (error) {
        // Si l'autoplay échoue, fallback sur interaction utilisateur
        const armPlay = () => {
          audio.muted = false;
          audio.play().catch(() => { });
          window.removeEventListener('pointerdown', armPlay);
          window.removeEventListener('keydown', armPlay);
        };
        window.addEventListener('pointerdown', armPlay, { once: true });
        window.addEventListener('keydown', armPlay, { once: true });
      }
    };

    tryAutoplay();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleWords(prev => {
        if (prev < words.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 2000); // Apparition plus contemplative

    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="hero">
      <video
        ref={videoRef}
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
        <h1 className="main-brand-title">EsenCiel</h1>
        <p className="by-author">by Véronique Carrié</p>
        <div className="animated-slogan">
          {words.map((word, index) => (
            <span
              key={index}
              className={`word ${index < visibleWords ? 'visible' : ''}`}
            >
              {word}
            </span>
          ))}
        </div>
        <p className="hero-tagline">
          Retrouvez votre équilibre naturel grâce à la pleine conscience
        </p>
        <div className="actions">
          <Link to="/qui-suis-je" className="btn btn-info">
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
          gap: clamp(1rem, 3vw, 2rem);
          text-align: center;
          max-width: 85vw;
        }

        .main-brand-title {
          font-family: var(--font-heading);
          font-size: clamp(4rem, 12vw, 8rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: #fffcea;
          margin: 0;
          text-shadow: 0 4px 20px rgba(0,0,0,0.3);
          line-height: 0.9;
          font-style: normal;
        }

        .by-author {
          font-family: var(--font-body);
          font-size: clamp(1rem, 2vw, 1.4rem);
          font-weight: 300;
          font-style: italic;
          color: rgba(255, 252, 234, 0.8);
          margin: 0;
          text-shadow: 0 1px 4px rgba(0,0,0,0.4);
          letter-spacing: 0.05em;
          margin-top: -0.5rem;
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
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          line-height: 1.3;
          color: rgba(255, 252, 234, 0.9);
          letter-spacing: 0.15em;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
          font-weight: 400;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: clamp(0.5rem, 2vw, 1rem);
          margin: 0.5rem 0 clamp(1rem, 2vw, 1.5rem) 0;
          font-family: var(--font-body);
        }

        .hero-tagline {
          font-size: clamp(1.1rem, 2.2vw, 1.4rem);
          line-height: 1.4;
          color: rgba(255, 252, 234, 0.95);
          font-weight: 400;
          margin: 0;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
          max-width: 500px;
          text-align: center;
          letter-spacing: 0.03em;
          font-family: var(--font-body);
        }

        .animated-slogan .word {
          display: inline-block;
          opacity: 0;
          transform: translateY(10px) scale(0.98);
          filter: blur(8px);
          transition:
            opacity 1800ms ease,
            transform 1800ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 1800ms ease;
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
          gap: clamp(1rem, 3vw, 1.5rem);
          flex-wrap: wrap;
          justify-content: center;
          margin: clamp(1rem, 3vw, 2rem) 0 0 0;
        }

        .actions .btn {
          position: relative;
          background: rgba(255, 252, 234, 0.05);
          border: 1px solid rgba(255, 252, 234, 0.2);
          color: rgba(255, 252, 234, 0.9);
          font-weight: 300;
          font-size: clamp(0.9rem, 1.8vw, 1rem);
          padding: clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem);
          border-radius: 30px;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          min-width: clamp(140px, 25vw, 160px);
          text-align: center;
          backdrop-filter: blur(20px);
          letter-spacing: 0.05em;
          font-family: var(--font-body);
        }

        .actions .btn:hover {
          background: rgba(255, 252, 234, 0.12);
          border-color: rgba(255, 252, 234, 0.4);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }
        
        .actions .btn span {
          position: relative;
          z-index: 1;
        }
        
        .actions .btn-primary {
          background: rgba(255, 252, 234, 0.9);
          border-color: rgba(255, 252, 234, 0.9);
          color: var(--color-primary);
          font-weight: 400;
        }

        .actions .btn-primary:hover {
          background: rgba(255, 252, 234, 1);
          border-color: rgba(255, 252, 234, 1);
          color: var(--color-primary);
          box-shadow: 0 8px 25px rgba(255, 252, 234, 0.2);
          transform: translateY(-2px);
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
          .main-brand-title { 
            font-size: clamp(4rem, 18vw, 6rem);
            line-height: 0.85;
          }

          .by-author {
            font-size: clamp(1.1rem, 4.5vw, 1.5rem);
            margin-top: -0.3rem;
          }
          
          .animated-slogan {
            flex-direction: row;
            gap: clamp(0.3rem, 1.5vw, 0.8rem);
            font-size: clamp(1.4rem, 5vw, 1.8rem);
            margin: 0.5rem 0 clamp(1rem, 3vw, 1.5rem) 0;
          }

          .hero-tagline {
            font-size: clamp(1.2rem, 4.5vw, 1.4rem);
            max-width: 380px;
            line-height: 1.3;
          }

          .hero-center {
            gap: clamp(0.8rem, 2.5vw, 1.5rem);
            max-width: 95vw;
          }

          .actions {
            flex-direction: column;
            gap: clamp(0.8rem, 2vw, 1rem);
            width: 100%;
            max-width: 250px;
            margin-top: clamp(1.5rem, 4vw, 2rem);
          }

          .actions .btn {
            width: 100%;
            padding: clamp(0.9rem, 3vw, 1.1rem) clamp(1.5rem, 4vw, 2rem);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;