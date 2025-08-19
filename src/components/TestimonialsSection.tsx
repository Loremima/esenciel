import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Marie L.',
      location: 'Rodez',
      rating: 5,
      text: 'Véronique m\'a accompagnée avec une approche très personnalisée. Grâce aux techniques de pleine conscience, j\'ai retrouvé un équilibre que je pensais perdu. Son professionnalisme et sa bienveillance font toute la différence.',
      service: 'Programme MBSR'
    },
    {
      id: 2,
      name: 'Jean-Pierre M.',
      location: 'Villefranche-de-Rouergue',
      rating: 5,
      text: 'Le Jeu du Tao en groupe a été une révélation. Une expérience enrichissante qui m\'a permis de mieux me connaître et de développer ma confiance en moi. Véronique crée un cadre sécurisant et bienveillant.',
      service: 'Jeu du Tao'
    },
    {
      id: 3,
      name: 'Sophie D.',
      location: 'Cransac-les-Thermes',
      rating: 5,
      text: 'L\'accompagnement en santé et qualité de vie m\'a aidée à reprendre le contrôle de mon bien-être. Véronique allie parfaitement expertise scientifique et approche humaine. Je recommande vivement.',
      service: 'Coaching Santé'
    },
    {
      id: 4,
      name: 'Philippe R.',
      location: 'Decazeville',
      rating: 5,
      text: 'Les séances de pleine conscience m\'ont appris à gérer mon stress autrement. L\'approche de Véronique est à la fois professionnelle et chaleureuse. Un vrai plus dans ma vie quotidienne.',
      service: 'Pleine Conscience'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Témoignages</h2>
          <p className="section-subtitle">
            Découvrez les retours de personnes que j'ai eu la chance d'accompagner
          </p>
        </div>

        <div className="testimonials-container">
          <button 
            className="nav-button prev"
            onClick={goToPrevious}
            aria-label="Témoignage précédent"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="testimonial-card">
            <Quote className="quote-icon" />
            
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="star" />
              ))}
            </div>
            
            <blockquote className="testimonial-text">
              "{testimonials[activeTestimonial].text}"
            </blockquote>
            
            <div className="testimonial-author">
              <div className="author-info">
                <h4>{testimonials[activeTestimonial].name}</h4>
                <p>{testimonials[activeTestimonial].location}</p>
                <span className="service-tag">{testimonials[activeTestimonial].service}</span>
              </div>
            </div>
          </div>

          <button 
            className="nav-button next"
            onClick={goToNext}
            aria-label="Témoignage suivant"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => setActiveTestimonial(index)}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: var(--color-white);
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.02'%3E%3Cpath d='M40 40c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-12);
        }

        .section-header h2 {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-4);
        }

        .section-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .testimonials-container {
          display: flex;
          align-items: center;
          gap: var(--spacing-6);
          margin-bottom: var(--spacing-8);
        }

        .testimonial-card {
          flex: 1;
          background: rgba(255, 255, 255, 0.95);
          color: var(--color-gray-800);
          border-radius: var(--radius-2xl);
          padding: var(--spacing-10);
          text-align: center;
          box-shadow: var(--shadow-xl);
          backdrop-filter: blur(10px);
          transition: all var(--transition-normal);
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .quote-icon {
          color: var(--color-secondary);
          margin: 0 auto var(--spacing-4);
        }

        .stars {
          display: flex;
          justify-content: center;
          gap: var(--spacing-1);
          margin-bottom: var(--spacing-6);
        }

        .star {
          color: var(--color-secondary);
          fill: currentColor;
        }

        .testimonial-text {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-style: italic;
          line-height: 1.5;
          margin-bottom: var(--spacing-6);
          color: var(--color-gray-700);
        }

        .testimonial-author {
          border-top: 1px solid var(--color-gray-200);
          padding-top: var(--spacing-4);
        }

        .author-info h4 {
          margin: 0 0 var(--spacing-1);
          color: var(--color-primary);
          font-size: 1.1rem;
        }

        .author-info p {
          margin: 0 0 var(--spacing-2);
          color: var(--color-gray-600);
          font-size: 0.95rem;
        }

        .service-tag {
          display: inline-block;
          background: rgba(85, 107, 47, 0.1);
          color: var(--color-primary);
          padding: var(--spacing-1) var(--spacing-3);
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .nav-button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: var(--color-white);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-normal);
          backdrop-filter: blur(10px);
        }

        .nav-button:hover {
          background: var(--color-secondary);
          transform: scale(1.1);
        }

        .testimonial-indicators {
          display: flex;
          justify-content: center;
          gap: var(--spacing-2);
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .indicator.active {
          background: var(--color-secondary);
          transform: scale(1.3);
        }

        .indicator:hover {
          background: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 1024px) {
          .nav-button {
            display: none;
          }

          .testimonials-container {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: var(--spacing-6);
            min-height: 350px;
          }

          .testimonial-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;