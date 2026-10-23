import React, { useState, useEffect } from 'react';
import { useSlowMoVideo } from '../hooks/useSlowMoVideo';
import ParallaxSection from './ParallaxSection';
import GlassButton from './GlassButton';

const HeroSection: React.FC = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  const words = ['Comprendre,', 'Observer,', 'Agir'];
  
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
    <ParallaxSection 
      videoSrc="/background.mp4" 
      className="hero min-h-screen"
      overlayOpacity={0.3}
    >
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
          Piloter son cerveau face aux changements de la vie
        </p>
        <p className="hero-specialty">
          Spécialiste de l'avancée en âge : seniors, aidants et professionnels qui les accompagnent
        </p>
        <div className="actions">
          <GlassButton to="/structures">
            Vous êtes une structure
          </GlassButton>
          <GlassButton to="/services">
            Vous êtes un particulier
          </GlassButton>
        </div>
      </div>

      <style>{`
        /* Styles spécifiques au contenu du Hero qui ne sont pas gérés par ParallaxSection */
        
        .hero-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(1rem, 3vw, 2rem);
          text-align: center;
          max-width: 85vw;
          /* Le centrage est géré par le flex parent de ParallaxSection */
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
          font-size: inherit;
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

        .hero-specialty {
          font-size: clamp(0.95rem, 1.6vw, 1.1rem);
          line-height: 1.5;
          color: rgba(255, 252, 234, 0.85);
          margin: 0;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
          max-width: 560px;
          text-align: center;
        }

        .actions {
          display: flex;
          gap: clamp(1rem, 3vw, 1.5rem);
          flex-wrap: wrap;
          justify-content: center;
          margin: clamp(1rem, 3vw, 2rem) 0 0 0;
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

          .hero-specialty {
            max-width: 380px;
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
        }
      `}</style>
    </ParallaxSection>
  );
};

export default HeroSection;