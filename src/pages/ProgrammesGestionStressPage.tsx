import React from 'react';
import { Clock, Users, Calendar, ArrowRight, Heart, Brain, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoCTA from '../components/VideoCTA';

const ProgrammesGestionStressPage: React.FC = () => {
  const programs = [
    {
      id: 'gestion-stress',
      title: 'Gestion du stress par la pleine conscience',
      subtitle: 'Cycle de 8 semaines',
      description: 'Le programme classique de réduction du stress basé sur la pleine conscience. Idéal pour débuter et transformer son rapport au stress.',
      duration: '8 semaines (2h30/semaine)',
      format: 'Groupe (5-10 pers.)',
      link: '/gestion-stress'
    },
    {
      id: 'prevention-rechute',
      title: 'Prévention des rechutes dépressives',
      subtitle: 'Approche intégrative',
      description: 'Spécifiquement conçu pour consolider le bien-être après un épisode difficile et prévenir les rechutes.',
      duration: '8 semaines (2h30/semaine)',
      format: 'Groupe (5-10 pers.)',
      link: '/prevention-rechutes-depressives'
    }
  ];

  return (
    <div className="gestion-stress-programs-page">
      {/* Hero Section */}
      <section className="hero-programs bg-[#fffcea] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Programmes de pleine conscience</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-12">
            Des parcours structurés et validés scientifiquement pour cultiver une présence attentive et durable.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {programs.map((program) => (
              <div key={program.id} className="bg-[#fffcea] rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="mb-6">
                  <span className="text-secondary font-bold tracking-widest uppercase text-xs">{program.subtitle}</span>
                  <h2 className="text-2xl font-bold text-primary mt-2">{program.title}</h2>
                </div>
                <p className="text-stone-600 mb-8 flex-grow">{program.description}</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-primary font-medium">
                    <Clock size={18} />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary font-medium">
                    <Users size={18} />
                    <span>{program.format}</span>
                  </div>
                </div>
                <Link 
                  to={program.link} 
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-dark transition-all"
                >
                  Voir le programme détaillé
                  <ArrowRight size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoCTA
        title="Besoin d'aide pour choisir ?"
        subtitle="Contactez-moi pour un entretien préalable afin de déterminer le parcours le plus adapté à votre situation."
        buttonText="Me contacter"
        buttonLink="/contact-reservation"
      />
    </div>
  );
};

export default ProgrammesGestionStressPage;
