import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, CalendarDays } from 'lucide-react';

const CTASection: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [visibleWords, setVisibleWords] = useState(0);

  const quotes = [
    {
      text: "Le véritable voyage ne consiste pas à chercher de nouveaux paysages mais à avoir de nouveaux yeux",
      author: "Marcel Proust"
    },
    {
      text: "Connais toi même et tu connaîras l'univers et les Dieux",
      author: "Socrate"
    },
    {
      text: "Entre le stimulus et la réponse, il y a un espace. C'est dans cet espace que réside notre pouvoir de choisir notre réponse. Dans notre réponse résident notre croissance et notre liberté",
      author: "Viktor Frankl"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleWords(0); // Start fade out
      setTimeout(() => {
        setCurrentQuote(prev => (prev + 1) % quotes.length);
        setTimeout(() => setVisibleWords(1), 200); // Fade in new quote
      }, 800); // Wait for fade out to complete
    }, 8000); // Longer duration for better reading

    // Initial animation
    setTimeout(() => setVisibleWords(1), 800);

    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Prêt(e) à commencer votre transformation ?</h2>
            <p className="cta-description">
              Prenez rendez-vous pour un premier entretien personnalisé.
              Ensemble, nous définirons l'accompagnement le plus adapté à vos besoins et objectifs.
            </p>
          </div>

          <div className="cta-actions">
            <div className="cta-quotes">
              <Quote size={48} className="quote-mark-cta" />
              <blockquote className={`animated-quote-cta ${visibleWords ? 'visible' : ''}`}>
                {quotes[currentQuote].text}
              </blockquote>
              <cite className={`animated-author-cta ${visibleWords ? 'visible' : ''}`}>
                {quotes[currentQuote].author}
              </cite>
            </div>
            <Link to="/contact-reservation" className="btn btn-primary cta-primary">
              Prendre rendez-vous
              <CalendarDays size={16} />
            </Link>
            <p className="cta-note">
              Consultations en présentiel à Vaureilles ou en distanciel
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .cta-section {
          background: #fffcea;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .cta-section::before { display: none; }

        .cta-content {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--spacing-16);
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        .cta-text h2 {
          margin-bottom: var(--spacing-8);
          color: var(--color-primary);
          font-size: clamp(2.4rem, 4.5vw, 3rem);
        }

        .cta-description {
          font-size: 1.25rem;
          line-height: 1.85;
          color: var(--color-gray-700);
          margin-bottom: var(--spacing-12);
          max-width: 48ch;
        }

        .cta-quotes {
          margin-top: var(--spacing-8);
          position: relative;
          padding-left: var(--spacing-10);
        }

        .quote-mark-cta {
          color: var(--color-secondary);
          position: absolute;
          top: -0.5em;
          left: -0.2em;
          font-size: 5rem;
          opacity: 0.3;
          z-index: 0;
        }

        .animated-quote-cta {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-style: italic;
          line-height: 1.6;
          color: var(--color-primary-dark);
          margin: 0 auto 1rem;
          font-weight: 400;
          opacity: 0;
          transform: translateY(15px);
          transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1);
          min-height: 120px; /* To avoid layout shift */
          display: flex;
          align-items: center;
          text-align: left;
          position: relative;
        }
        
        .animated-quote-cta.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animated-author-cta {
          color: var(--color-gray-600);
          font-size: 1rem;
          font-weight: 600;
          opacity: 0;
          transform: translateY(10px);
          transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
          display: block;
          text-align: right;
        }
        
        .animated-author-cta.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-8);
          text-align: center;
        }

        .cta-primary {
          font-size: 1.25rem;
          padding: var(--spacing-5) var(--spacing-10);
          box-shadow: var(--shadow-xl);
        }

        .cta-primary:hover {
          box-shadow: 0 25px 50px -12px rgba(85, 107, 47, 0.5);
        }

        .cta-note {
          color: var(--color-gray-600);
          font-size: 1rem;
          font-style: italic;
          max-width: 420px;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .cta-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-12);
            text-align: center;
          }
          .cta-description { max-width: 60ch; margin-left: auto; margin-right: auto; }
        }

        @media (max-width: 768px) {
          .cta-features {
            gap: var(--spacing-3);
          }

          .cta-feature {
            padding: var(--spacing-3);
          }

          .cta-primary {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;