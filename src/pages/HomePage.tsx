import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesPreview from '../components/ServicesPreview';
import VideoCTA from '../components/VideoCTA';

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

      {/* Welcome Section */}
      <section className="section welcome-section bg-[#fffcea]">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h2 className="welcome-title">Bienvenue sur EsenCiel 🌅</h2>
              <p className="welcome-intro">
                Un espace dédié à la pleine conscience au service de votre bien-être authentique.
              </p>
              <p className="welcome-description">
                Ici, je vous propose des accompagnements et des ressources pour vous aider à cultiver l'équilibre, l'harmonie et la sérénité au quotidien.
              </p>
              <p className="welcome-description">
                Prenez le temps de découvrir, de vous recentrer et d'avancer à votre rythme, afin de vous rapprocher d'un mode de vie plus conscient et plus épanouissant.
              </p>
              <Link to="/qui-suis-je" className="btn btn-outline">
                Mon approche <ArrowRight size={16} />
              </Link>
            </div>
            <div className="welcome-video">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="zen-video parallax-video pointer-events-none"
              >
                <source src="/hero_video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ServicesPreview />

      {/* Testimonials */}
      <div className="testimonials-homepage-wrapper">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <VideoCTA
        title="Prêt(e) à transformer votre quotidien ?"
        subtitle="Prenez rendez-vous pour un premier entretien personnalisé. Ensemble, nous définirons l'accompagnement le plus adapté à vos besoins et objectifs."
        buttonText="Prendre rendez-vous"
        buttonLink="/contact-reservation"
      />

      <style>{`
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
           color: var(--color-primary);
           text-decoration: none;
           border-radius: 0.375rem;
           font-weight: 500;
           transition: all 0.2s ease;
         }
         .btn-outline:hover {
           border-color: var(--color-secondary);
           color: var(--color-secondary);
         }

                 /* WELCOME SECTION */
         .welcome-section {
           padding: 6rem 0;
           position: relative;
           z-index: 1;
         }
         .welcome-content {
           display: grid;
           grid-template-columns: 1.8fr 1fr;
           gap: 4rem;
           align-items: center;
           max-width: 1200px;
           margin: 0 auto;
         }
         .welcome-title {
           font-size: clamp(2.5rem, 5vw, 3.5rem);
           font-weight: 700;
           color: var(--color-primary);
           margin: 0 0 2.5rem 0;
         }
         .welcome-intro {
           font-size: 1.25rem;
           line-height: 1.6;
           color: var(--color-primary);
           margin-bottom: 2rem;
           padding: 1.5rem 2rem;
           background: rgba(255, 255, 255, 0.7);
           border-radius: var(--radius-xl);
           display: inline-block;
           position: relative;
           border-left: 5px solid var(--color-secondary);
           box-shadow: 0 4px 15px rgba(0,0,0,0.05);
         }
         .welcome-description,
         .welcome-invitation {
           font-size: 1.15rem;
           line-height: 1.8;
           color: var(--color-gray-700);
           margin-bottom: 1.5rem;
         }
         .welcome-description { text-align: justify; }
         .welcome-invitation {
           font-style: italic;
           margin-bottom: 2.5rem;
         }
         .welcome-video {
           border-radius: 1.5rem;
           overflow: hidden;
           box-shadow: 0 20px 40px rgba(0,0,0,0.15);
           aspect-ratio: 9/16;
           background: var(--color-gray-100);
           max-width: 300px;
           margin: 0 auto;
           border: 3px solid rgba(255, 255, 255, 0.8);
           transition: all 0.3s ease;
         }
         
         .welcome-video:hover {
           transform: translateY(-5px);
           box-shadow: 0 25px 50px rgba(0,0,0,0.2);
         }
         .zen-video {
           width: 100%;
           height: 100%;
           object-fit: cover;
         }

                 /* RESPONSIVE */
         /* TESTIMONIALS HOMEPAGE SPECIFIC */
         .testimonials-homepage-wrapper {
           background: #fffcea;
         }
         .testimonials-homepage-wrapper .section-header h2 {
           color: var(--color-primary) !important;
           text-shadow: none !important;
         }
         .testimonials-homepage-wrapper .section-subtitle {
           color: var(--color-gray-700) !important;
           text-shadow: none !important;
         }

         @media (max-width: 768px) {
           .welcome-content {
             grid-template-columns: 1fr;
             gap: 2rem;
           }
           .welcome-video {
             order: -1;
             margin-bottom: 2rem;
             max-width: 250px;
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