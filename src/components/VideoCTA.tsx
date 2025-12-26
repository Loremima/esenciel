import React from 'react';
import ParallaxSection from './ParallaxSection';
import GlassButton from './GlassButton';

interface VideoCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const VideoCTA: React.FC<VideoCTAProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <ParallaxSection 
      videoSrc="/background.mp4" 
      className="cta-section py-32"
      overlayOpacity={0.3}
    >
      <div className="cta-content text-center">
        <div className="cta-text">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="cta-actions flex justify-center mt-8">
          <GlassButton to={buttonLink}>
            {buttonText}
          </GlassButton>
        </div>
      </div>
      <style>{`
        .cta-section .cta-content {
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
      `}</style>
    </ParallaxSection>
  );
};

export default VideoCTA;
