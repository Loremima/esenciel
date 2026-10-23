import React from 'react';
import { Brain, FlaskConical, ClipboardCheck, MapPin, Eye, Lightbulb, Footprints, Mic2, Phone, Mail, ArrowRight } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import GlassButton from '../components/GlassButton';

// Page destinée aux structures et financeurs (cible du QR code de la plaquette)
const StructuresPage: React.FC = () => {
  const primaryDark = '#1F2937';

  const strengths = [
    {
      icon: Brain,
      title: 'Une expertise du cerveau',
      description: "Formée en psychologie clinique, spécialité neuropsychologie. Je n'anime pas seulement des exercices : j'explique les mécanismes."
    },
    {
      icon: FlaskConical,
      title: 'Des programmes évalués',
      description: 'Des pratiques issues de programmes validés scientifiquement (MBSR, MBCT, MBCAS), dont je suis instructrice certifiée.'
    },
    {
      icon: ClipboardCheck,
      title: 'Une évaluation systématique',
      description: 'Questionnaires avant et après chaque action, et bilan écrit remis à la structure et au financeur.'
    },
    {
      icon: MapPin,
      title: 'Une intervenante de terrain',
      description: "J'interviens dans l'Hérault et l'Aveyron, auprès des seniors, des aidants et des professionnels du soin."
    }
  ];

  const approach = [
    { icon: Lightbulb, title: 'Comprendre', description: 'Comment fonctionnent l’attention, la mémoire, le stress et les émotions.' },
    { icon: Eye, title: 'Observer', description: 'Repérer ses propres automatismes au quotidien : sortir du pilote automatique.' },
    { icon: Footprints, title: 'Agir', description: 'Adopter des habitudes qui protègent la santé cognitive et émotionnelle.' }
  ];

  const conferences = [
    {
      title: '« Quand mon cerveau n’en fait qu’à sa tête »',
      description: "Comprendre les mécanismes qui font fonctionner notre cerveau en pilote automatique, et pourquoi c'est utile… et parfois piégeant. Avec une expérience en direct : lire des noms de couleurs écrits dans une autre couleur.",
      skills: 'Conscience de soi, compréhension de son fonctionnement'
    },
    {
      title: '« Qui pilote ma vie : ma conscience ou mes automatismes ? »',
      description: 'Passer de la compréhension à l’action : repérer ses automatismes de pensée, d’émotion et de comportement face au stress, et apprendre à reprendre la main.',
      skills: 'Maîtrise de soi, régulation du stress et des émotions, prise de décision'
    }
  ];

  const audiences = [
    {
      title: 'Seniors',
      question: '« Mon cerveau change, que puis-je faire ? »',
      offer: 'Programme « Bien vivre son avancée en âge » : 15 séances sur 8 mois, en groupe de 5 à 10 personnes.',
      vocabulary: 'Prévention, bien vieillir, santé cognitive'
    },
    {
      title: 'Aidants',
      question: '« Je m’épuise à aider. »',
      offer: 'Conférences adaptées à la charge mentale de l’aidant, et cycle de régulation du stress construit avec votre structure.',
      vocabulary: 'Soutien aux aidants, répit, santé mentale'
    },
    {
      title: 'Soignants et professionnels',
      question: '« Comment je tiens ? »',
      offer: 'Cycle ou formation « Prendre soin de soi quand on prend soin des autres », sur le lieu de travail.',
      vocabulary: 'Qualité de vie au travail, prévention de l’épuisement'
    }
  ];

  const skillsGrid = [
    { family: 'Cognitives', skills: 'Conscience de soi, maîtrise de soi, prise de décision' },
    { family: 'Émotionnelles', skills: 'Identifier ses émotions, les réguler, gérer son stress' },
    { family: 'Sociales', skills: 'Communication, empathie, lien social' }
  ];

  const funders = [
    'Conférences des financeurs de la prévention de la perte d’autonomie (Hérault, Aveyron)',
    'CARSAT et MSA, actions collectives « bien vieillir »',
    'ARS Occitanie et contrats locaux de santé',
    'Budgets qualité de vie au travail et formation des employeurs'
  ];

  return (
    <div className="structures-page">
      <ParallaxSection
        videoSrc="/background.mp4"
        className="hero-structures min-h-[80vh] pt-28 pb-16"
        overlayOpacity={0.45}
      >
        <div className="hero-content text-center">
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>Piloter son cerveau face aux changements de la vie</h1>
          <p className="hero-subtitle" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.3rem)' }}>
            Conférences, ateliers et formations pour les structures, spécialisés dans l'avancée en âge : seniors, aidants et professionnels qui les accompagnent.
          </p>
          <p className="text-[#fffcea]/80 text-sm md:text-base mt-4 max-w-3xl mx-auto">
            Véronique Carrié · Psychologie clinique et neuropsychologie · Instructrice certifiée MBSR, MBCT, MBCAS · Hérault et Aveyron
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <GlassButton to="/contact-reservation" icon={ArrowRight}>
              Échanger sur votre projet
            </GlassButton>
            <a href="tel:+33625137250" className="btn-glass-shared">
              <span className="btn-glass-shared__text">06 25 13 72 50</span>
              <Phone size={20} className="btn-glass-shared__icon" />
            </a>
          </div>
        </div>
      </ParallaxSection>

      {/* Pourquoi travailler avec moi */}
      <section className="section bg-[#fffcea]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: primaryDark }}>Pourquoi travailler avec moi</h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed">
              Des actions de prévention sérieuses, évaluées et adaptées à votre public.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {strengths.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white/60 rounded-3xl p-8 border border-stone-200/60">
                <Icon size={28} className="mb-4" style={{ color: primaryDark }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: primaryDark }}>{title}</h3>
                <p className="text-stone-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approche en 3 temps */}
      <section className="section bg-white/40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: primaryDark }}>L'approche en 3 temps</h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed">
              Développer les compétences psychosociales en s'appuyant sur les neurosciences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {approach.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="text-center p-6">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#fffcea] border border-stone-200">
                  <Icon size={24} style={{ color: primaryDark }} />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400">0{index + 1}</span>
                <h3 className="text-2xl font-bold mt-2 mb-2" style={{ color: primaryDark }}>{title}</h3>
                <p className="text-stone-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conférences : porte d'entrée */}
      <section id="conferences" className="section bg-[#fffcea]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 block">Pour commencer</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: primaryDark }}>Deux conférences</h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed">
              1 h 30 à 2 h, de 15 à 50 personnes, interactives et déclinées pour chaque public.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {conferences.map(({ title, description, skills }) => (
              <div key={title} className="bg-white/60 rounded-3xl p-8 border border-stone-200/60 flex flex-col">
                <Mic2 size={28} className="mb-4" style={{ color: primaryDark }} />
                <h3 className="text-xl font-bold mb-3" style={{ color: primaryDark }}>{title}</h3>
                <p className="text-stone-600 leading-relaxed mb-6 flex-grow">{description}</p>
                <p className="text-sm text-stone-500"><strong>Compétences travaillées :</strong> {skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publics */}
      <ParallaxSection videoSrc="/background.mp4" id="publics" className="section py-24" overlayOpacity={0.5}>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#fffcea] mb-6 font-heading drop-shadow-lg">Trois publics, un même fil rouge</h2>
            <p className="text-[#fffcea]/90 text-lg font-light leading-relaxed">
              Les changements liés à l'avancée en âge touchent la personne âgée, ses proches et ceux qui l'accompagnent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {audiences.map(({ title, question, offer, vocabulary }) => (
              <div key={title} className="bg-[#fffcea]/95 rounded-3xl p-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-2" style={{ color: primaryDark }}>{title}</h3>
                <p className="italic text-stone-500 mb-4">{question}</p>
                <p className="text-stone-700 leading-relaxed mb-4 flex-grow">{offer}</p>
                <p className="text-xs uppercase tracking-wider text-stone-400">{vocabulary}</p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Compétences psychosociales + évaluation */}
      <section className="section bg-[#fffcea]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading" style={{ color: primaryDark }}>Compétences psychosociales</h2>
            <p className="text-stone-600 mb-6">Selon le référentiel de Santé publique France (2022).</p>
            <div className="space-y-4">
              {skillsGrid.map(({ family, skills }) => (
                <div key={family} className="bg-white/60 rounded-2xl p-5 border border-stone-200/60">
                  <h3 className="font-bold mb-1" style={{ color: primaryDark }}>{family}</h3>
                  <p className="text-stone-600">{skills}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading" style={{ color: primaryDark }}>Évaluation et financements</h2>
            <p className="text-stone-600 mb-6">
              Chaque action est évaluée par des questionnaires avant et après (stress perçu, bien-être, satisfaction). Je vous remets un bilan écrit, utilisable pour votre financeur.
            </p>
            <h3 className="font-bold mb-3" style={{ color: primaryDark }}>Financements mobilisables</h3>
            <ul className="space-y-2 text-stone-600 list-disc pl-5 mb-6">
              {funders.map(funder => <li key={funder}>{funder}</li>)}
            </ul>
            <p className="text-stone-700 font-medium">
              Je peux vous aider à rédiger la fiche-action de votre dossier.
            </p>
          </div>
        </div>
      </section>

      {/* Contact direct */}
      <section className="section bg-white/40">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading" style={{ color: primaryDark }}>Parlons de votre projet</h2>
          <p className="text-stone-600 text-lg mb-8">
            Public, nombre de participants, période, financement envisagé : un premier échange suffit pour construire une proposition.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg mb-10" style={{ color: primaryDark }}>
            <a href="tel:+33625137250" className="inline-flex items-center justify-center gap-2 font-medium hover:opacity-80">
              <Phone size={20} /> 06 25 13 72 50
            </a>
            <a href="mailto:esenciel.contact@gmail.com" className="inline-flex items-center justify-center gap-2 font-medium hover:opacity-80">
              <Mail size={20} /> esenciel.contact@gmail.com
            </a>
          </div>
          <p className="text-stone-500 text-sm">J'interviens dans l'Hérault et l'Aveyron, et à distance pour certains formats.</p>
        </div>
      </section>
    </div>
  );
};

export default StructuresPage;
