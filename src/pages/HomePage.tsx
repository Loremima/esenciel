import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Flower2, Heart, Quote } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesPreview from '../components/ServicesPreview';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Animation au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage">
      <HeroSection />

      {/* About Section */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h3 className="about-main-title">Devenez acteur de votre santé et bien-être</h3>
              <p>
                Psychologue clinicienne spécialisée en <strong>neuropsychologie</strong>, je propose une
                approche intégrative alliant sciences psychologiques, <strong>pleine conscience</strong> et
                éducation santé. Ma vision holistique et systémique est centrée sur votre
                <strong>autonomisation</strong> et votre épanouissement personnel.
              </p>
              <div className="quick-links">
                <div className="quick-link-item">
                  <Brain size={24} />
                  <span>Neuropsychologie<br />Approche scientifique</span>
                </div>
                <div className="quick-link-item">
                  <Flower2 size={24} />
                  <span>Pleine Conscience<br />Mindfulness & MBSR</span>
                </div>
                <div className="quick-link-item">
                  <Heart size={24} />
                  <span>Coaching Santé<br />Accompagnement holistique</span>
                </div>
              </div>
              <Link to="/qui-suis-je" className="btn btn-outline">
                En savoir plus <ArrowRight size={16} />
              </Link>
            </div>
            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
                alt="Véronique Carrié en consultation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ServicesPreview />

      {/* Quote Section */}
      <section className="section quote-section">
        <div className="container">
          <Quote size={48} className="quote-mark" />
          <blockquote>
            "Qui regarde dehors rêve, qui regarde en soi s'éveille."
          </blockquote>
          <cite>Carl Gustav Jung</cite>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      <style jsx>{`
                 /* GENERAL */
         .homepage {
           padding-top: 0;
         }
         .section {
           padding: 6rem 0;
         }
         /* Container défini dans globals.css */
         .btn-outline {
           display: inline-flex;
           align-items: center;
           gap: 0.5rem;
           padding: 0.75rem 1.5rem;
           border: 1px solid var(--color-gray-300);
           color: var(--color-gray-700);
           text-decoration: none;
           border-radius: 0.375rem;
           font-weight: 500;
           transition: all 0.2s ease;
         }
         .btn-outline:hover {
           border-color: var(--color-secondary);
           color: var(--color-secondary);
         }

                 /* ABOUT SECTION */
         .about-preview {
           background-color: #fffcea;
           padding: 4rem 0;
           position: relative;
           z-index: 1;
         }
         .about-content {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 4rem;
           align-items: start;
         }
         .about-text h2 {
           font-size: 0.875rem;
           font-weight: 500;
           color: var(--color-gray-500);
           margin-bottom: 1rem;
           text-transform: uppercase;
           letter-spacing: 0.1em;
         }
         .about-text p {
           font-size: 1.125rem;
           line-height: 1.7;
           color: var(--color-gray-800);
           margin-bottom: 2rem;
         }
         .about-text strong {
           font-weight: 600;
           color: var(--color-secondary);
         }
         .about-main-title {
           font-size: clamp(2rem, 4vw, 2.5rem);
           font-weight: 700;
           color: var(--color-primary);
           margin: 0 auto 2rem auto;
           line-height: 1.2;
           text-align: center;
           max-width: 100%;
         }
         .quick-links {
           display: flex;
           flex-direction: column;
           gap: 0.75rem;
           margin-bottom: 2rem;
         }
         .quick-link-item {
           display: flex;
           align-items: center;
           gap: 1rem;
           padding: 1rem 0;
           border-bottom: 1px solid var(--color-gray-200);
         }
         .quick-link-item:last-child {
           border-bottom: none;
         }
         .quick-link-item svg {
           color: var(--color-secondary);
           flex-shrink: 0;
         }
         .quick-link-item span {
           font-size: 0.875rem;
           line-height: 1.4;
           color: var(--color-gray-700);
         }
         .about-image {
           border-radius: 1rem;
           overflow: hidden;
           box-shadow: 0 10px 30px rgba(0,0,0,0.1);
           aspect-ratio: 4/3;
         }
         .about-image img {
           width: 100%;
           height: 100%;
           object-fit: cover;
         }

                 /* QUOTE SECTION */
                 .quote-section {
          background: #fffcea;
          text-align: center;
          padding: 5rem 0;
          position: relative;
          z-index: 1;
        }
         .quote-mark {
           color: var(--color-secondary);
           margin-bottom: 1.5rem;
           opacity: 0.8;
         }
         .quote-section blockquote {
           font-family: var(--font-heading);
           font-size: clamp(1.5rem, 3vw, 2.25rem);
           font-style: italic;
           line-height: 1.4;
           color: var(--color-primary);
           max-width: 700px;
           margin: 0 auto 1.5rem;
           font-weight: 300;
         }
         .quote-section cite {
           color: var(--color-gray-500);
           font-size: 0.875rem;
           font-weight: 500;
         }
        
                 /* RESPONSIVE */
         @media (max-width: 768px) {
           .about-content {
             grid-template-columns: 1fr;
             gap: 2rem;
           }
           .about-image {
             order: -1;
             margin-bottom: 1rem;
           }
           .section {
             padding: 3rem 0;
           }
           /* Container responsive défini dans globals.css */
         }
      `}</style>
    </div>
  );
};

export default HomePage;