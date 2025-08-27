import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';

interface VideoCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const VideoCTA: React.FC<VideoCTAProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="section cta-section parallax-surface">
      <video autoPlay muted loop playsInline className="parallax-video">
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className="cta-actions">
            <Link to={buttonLink} className="btn btn-glass cta-primary">
              {buttonText} <CalendarDays size={20} />
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        .cta-section.parallax-surface {
          color: #fffcea;
        }
        .cta-section .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .cta-section .cta-text h2 {
          color: #fffcea !important;
          font-family: var(--font-heading);
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
          font-size: clamp(2.2rem, 4.2vw, 3rem);
          margin-bottom: var(--spacing-4);
        }
        .cta-section .cta-text p {
          color: #fffcea !important;
          text-shadow: 0 1px 6px rgba(0,0,0,0.3);
          opacity: 0.95;
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          line-height: 1.7;
          margin-bottom: var(--spacing-8);
        }
        .cta-section .cta-actions {
          display: flex;
          justify-content: center;
        }
        .cta-section .cta-primary {
          padding: 0.8rem 2.2rem;
        }
      `}</style>
    </section>
  );
};

export default VideoCTA;
