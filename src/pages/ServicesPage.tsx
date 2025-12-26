import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { individualServices, groupServices, collectivePrograms, otherFormats } from '../pages/servicesData';
import ServiceCard from '../components/ServiceCard';
import ParallaxSection from '../components/ParallaxSection';

const ServicesPage: React.FC = () => {
  // Bleu foncé du site
  const primaryDark = '#1F2937';

  return (
    <div className="services-page">
      {/* Hero Section */}
      <ParallaxSection 
        videoSrc="/background.mp4" 
        className="hero-services min-h-[60vh]"
        overlayOpacity={0.4}
      >
        <div className="hero-content">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading drop-shadow-2xl">Nos Services</h1>
          <p className="hero-subtitle text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed opacity-90">
            Un accompagnement sur-mesure pour votre épanouissement et votre vitalité au quotidien.
          </p>
        </div>
      </ParallaxSection>

      {/* Accompagnements individuels - Crème */}
      <section id="individuels" className="section bg-[#fffcea]">
        <div className="container flex flex-col items-center">
          <div className="w-full text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 block">Accompagnement</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: primaryDark }}>Individuels</h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed max-w-3xl mx-auto">
              Un accompagnement sur mesure pour une santé de qualité, une vie optimisée et une pleine conscience au quotidien.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto w-full">
            {individualServices.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                variant="on-nude"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Accompagnements groupe - Video */}
      <ParallaxSection videoSrc="/background.mp4" id="groupes" className="section py-32">
        <div className="container relative z-10 flex flex-col items-center">
          <div className="w-full text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#fffcea]/50 mb-4 block">Expérience collective</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fffcea] mb-6 font-heading drop-shadow-lg">Accompagnements groupe</h2>
            <p className="text-[#fffcea]/90 text-lg font-light leading-relaxed max-w-3xl mx-auto" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
              Une dynamique de partage et d'entraide pour évoluer ensemble.
            </p>
          </div>
          <div className="max-w-xl mx-auto w-full">
            {groupServices.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                isHighlight={service.highlight} 
                variant="on-video"
              />
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Programmes collectifs - Crème */}
      <section id="programmes" className="section bg-[#fffcea]">
        <div className="container flex flex-col items-center">
          <div className="w-full text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 block">Protocoles</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: primaryDark }}>Pleine conscience</h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed max-w-3xl mx-auto">
              Programmes structurés et scientifiquement validés pour transformer votre rapport au stress.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
            {collectivePrograms.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                variant="on-nude"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Offres pour entreprises & collectivités - Video */}
      <ParallaxSection videoSrc="/background.mp4" id="autres" className="section py-32">
        <div className="container relative z-10 flex flex-col items-center">
          <div className="w-full text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#fffcea]/50 mb-4 block">Professionnels</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fffcea] mb-6 font-heading drop-shadow-lg">Entreprises & collectivités</h2>
            <p className="text-[#fffcea]/90 text-lg font-light leading-relaxed max-w-3xl mx-auto" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
              Offrir des espaces pour ralentir, respirer et se recentrer au sein de votre structure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {otherFormats.map(service => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                isHighlight={service.highlight} 
                variant="on-video"
              />
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Final - Fond crème */}
      <section className="section bg-[#fffcea]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{ color: primaryDark }}>Prêt(e) à commencer ?</h2>
            <p className="text-stone-500 text-lg mb-10">
              Contactez-moi pour discuter de vos besoins et trouver l'accompagnement qui vous correspond le mieux.
            </p>
            <Link 
              to="/contact-reservation" 
              className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-xl font-bold transition-all duration-300 shadow-xl hover:opacity-90"
              style={{ backgroundColor: primaryDark }}
            >
              Prendre rendez-vous 
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
