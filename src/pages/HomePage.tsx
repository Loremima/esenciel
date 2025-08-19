import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Brain, Flower2, Users, Star, Quote } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServicesPreview from '../components/ServicesPreview';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);

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
      {/* Hero Section */}
      <HeroSection />

      {/* Présentation courte */}
      <section ref={aboutRef} className="section about-preview scroll-animate">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Devenez acteur de votre santé et bien-être</h2>
              <p className="lead-text">
                Psychologue clinicienne spécialisée en <strong>neuropsychologie</strong>, 
                je propose une approche intégrative alliant sciences psychologiques, 
                <strong>pleine conscience</strong> et éducation santé. Ma vision holistique 
                et systémique est centrée sur votre <strong>autonomisation</strong> et votre 
                épanouissement personnel.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <Brain className="stat-icon" />
                  <div>
                    <h4>Neuropsychologie</h4>
                    <p>Approche scientifique</p>
                  </div>
                </div>
                <div className="stat-item">
                  <Flower2 className="stat-icon" />
                  <div>
                    <h4>Pleine Conscience</h4>
                    <p>Mindfulness & MBSR</p>
                  </div>
                </div>
                <div className="stat-item">
                  <Heart className="stat-icon" />
                  <div>
                    <h4>Coaching Santé</h4>
                    <p>Accompagnement holistique</p>
                  </div>
                </div>
              </div>
              <Link to="/qui-suis-je" className="btn btn-outline">
                En savoir plus
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
                alt="Véronique Carrié dans son cabinet"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ServicesPreview />

      {/* Citation inspirante */}
      <section className="section quote-section scroll-animate">
        <div className="container">
          <div className="quote-container">
            <Quote className="quote-icon" />
            <blockquote className="quote-text">
              "Qui regarde dehors rêve, qui regarde en soi s'éveille."
            </blockquote>
            <cite className="quote-author">Carl Gustav Jung</cite>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <TestimonialsSection />

      {/* CTA Final */}
      <CTASection />

      <style jsx>{`
        .homepage {
          padding-top: 80px;
        }

        .about-preview {
          background: var(--color-white);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-12);
          align-items: center;
        }

        .about-text h2 {
          margin-bottom: var(--spacing-6);
          color: var(--color-primary);
        }

        .lead-text {
          font-size: 1.2rem;
          line-height: 1.7;
          margin-bottom: var(--spacing-8);
          color: var(--color-gray-700);
        }

        .lead-text strong {
          color: var(--color-secondary);
          font-weight: 600;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-8);
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          padding: var(--spacing-4);
          background: rgba(85, 107, 47, 0.05);
          border-radius: var(--radius-lg);
          transition: all var(--transition-normal);
        }

        .stat-item:hover {
          background: rgba(85, 107, 47, 0.1);
          transform: translateX(8px);
        }

        .stat-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
        }

        .stat-item h4 {
          margin: 0;
          font-size: 1.1rem;
          color: var(--color-primary);
        }

        .stat-item p {
          margin: 0;
          font-size: 0.95rem;
          color: var(--color-gray-600);
        }

        .about-image {
          position: relative;
        }

        .about-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-xl);
        }

        .about-image::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          right: 20px;
          bottom: 20px;
          background: linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light));
          border-radius: var(--radius-2xl);
          z-index: -1;
        }

        .quote-section {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
          position: relative;
          overflow: hidden;
        }

        .quote-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23556B2F' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
          z-index: 0;
        }

        .quote-container {
          position: relative;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          z-index: 1;
        }

        .quote-icon {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-4);
        }

        .quote-text {
          font-family: var(--font-heading);
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-style: italic;
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
          line-height: 1.3;
        }

        .quote-author {
          font-size: 1.1rem;
          color: var(--color-gray-600);
          font-weight: 500;
        }

        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .scroll-animate.animate-fadeInUp {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-8);
          }

          .about-image {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            gap: var(--spacing-3);
          }

          .stat-item {
            padding: var(--spacing-3);
          }

          .about-image img {
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;