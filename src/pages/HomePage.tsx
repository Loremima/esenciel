import { Link } from 'react-router-dom';
import { ArrowRight, BookOpenCheck, ClipboardCheck, MapPin, Microscope } from 'lucide-react';
import { ArchMedia, Button, CtaBand, Section, SectionHeader, accentClasses } from '../components/ui';
import { CREDENTIALS, SITE } from '../content/site';
import { conferences, programmes } from '../content/offres';
import { Seo } from '../lib/head';

const approche = [
  { n: '1', title: 'Comprendre', text: 'Comment fonctionnent l’attention, la mémoire, le stress et nos automatismes, à chaque âge de la vie.' },
  { n: '2', title: 'Observer', text: 'Repérer quand on fonctionne en pilote automatique, dans ses pensées, ses émotions et ses réactions.' },
  { n: '3', title: 'Agir', text: 'S’entraîner à reprendre la main, et installer des habitudes qui protègent sa santé psychique.' },
];

const atouts = [
  { icon: Microscope, title: 'Le cerveau qui avance en âge', text: 'Formée à la neuropsychologie du vieillissement, j’explique les mécanismes avec des mots simples et des expériences à vivre.' },
  { icon: BookOpenCheck, title: 'Des méthodes évaluées', text: 'Mes cycles s’appuient sur les programmes MBSR, MBCT et MBCAS, étudiés par la recherche internationale.' },
  { icon: ClipboardCheck, title: 'Des résultats mesurés', text: 'Questionnaires avant et après, émargement et bilan écrit : de quoi rendre compte à votre financeur.' },
  { icon: MapPin, title: 'Une intervenante de terrain', text: 'J’interviens dans l’Hérault et l’Aveyron, et pour le programme Neo Silver.' },
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="EsenCiel, Véronique Carrié : piloter son cerveau face aux changements de la vie"
        description="Conférences, ateliers et cycles de prévention spécialisés dans l’avancée en âge, pour les seniors, les aidants et les soignants. Hérault et Aveyron."
        path="/"
      />

      {/* Héros */}
      <section className="relative overflow-hidden bg-cream pb-16 pt-10 md:pb-24 md:pt-16">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-sand-dark/40 blur-3xl" />
        <div className="container-site relative grid items-center gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div className="fade-up">
            <p className="eyebrow mb-5">Prévention et éducation à la santé · {SITE.zone}</p>
            <h1 className="h-display">
              Piloter son cerveau face aux <em className="font-normal italic text-gold-dark">changements</em> de la vie
            </h1>
            <p className="lead mt-6 max-w-xl">
              Conférences, ateliers et cycles de prévention, spécialisés dans l’avancée en âge, pour les seniors, les aidants et les professionnels qui les accompagnent.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/structures" arrow>Vous êtes une structure</Button>
              <Button to="/particuliers" variant="secondary">Vous êtes un particulier</Button>
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-sand-dark/80 pt-6">
              <img src="/images/veronique-480.webp" alt="Véronique Carrié" width={56} height={70} className="h-14 w-14 rounded-full object-cover object-top" />
              <p className="text-sm leading-snug text-ink-soft">
                <span className="font-semibold text-ink">Véronique Carrié</span>
                <br />
                {CREDENTIALS.short}. {CREDENTIALS.certifications}.
              </p>
            </div>
          </div>
          <ArchMedia image="/images/hero-herbes.webp" video="/media/hero-herbes.mp4" alt="Herbes dorées dans la lumière du soir" />
        </div>
      </section>

      {/* Le constat et les publics */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Le constat"
          title="Nous vivons une grande partie de nos journées en pilote automatique."
          intro="Ce pilote nous fait gagner de l’énergie. Mais quand la vie change (l’âge qui avance, un proche qui dépend de nous, un métier qui use), il nous joue des tours. Bonne nouvelle : cela s’apprend."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {programmes.map((p) => {
            const a = accentClasses[p.accent];
            return (
              <Link key={p.slug} to={p.path} className={`group flex flex-col rounded-2xl border ${a.border} ${a.bg} p-7 transition-shadow hover:shadow-soft`}>
                <span className={`text-sm font-semibold uppercase tracking-wider ${a.text}`}>{p.audience}</span>
                <p className="mt-4 font-heading text-2xl leading-snug text-ink">{p.quote}</p>
                <p className="mt-3 flex-1 text-ink-soft">{p.promise}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-medium text-ink">
                  {p.title}
                  <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* L'approche */}
      <Section>
        <SectionHeader eyebrow="L’approche" title="Comprendre, observer, agir" center />
        <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
          {approche.map((s) => (
            <li key={s.n} className="relative">
              <span aria-hidden className="font-heading text-6xl font-medium text-gold/60">{s.n}</span>
              <h3 className="mt-2 text-2xl font-medium">{s.title}</h3>
              <p className="mt-3 text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Offre structures */}
      <Section tone="sand">
        <SectionHeader
          eyebrow="Pour les structures"
          title="On commence souvent par une conférence, puis on va plus loin."
          intro="CCAS, centres sociaux, résidences autonomie, EHPAD, plateformes de répit, collectivités : je vous propose des actions prêtes à intégrer dans vos dossiers de financement."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {conferences.map((c) => (
            <Link key={c.slug} to={c.path} className="card group flex flex-col p-7 transition-shadow hover:shadow-lg">
              <span className="eyebrow">{c.eyebrow}</span>
              <h3 className="mt-3 text-2xl font-medium leading-snug">{c.title}</h3>
              <p className="mt-3 flex-1 text-ink-soft">{c.promise}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
                1 h 30 à 2 h · 15 à 50 personnes
                <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/structures" arrow>Voir l’offre structures</Button>
          <Button href={SITE.plaquette} variant="secondary" download>Télécharger la plaquette</Button>
        </div>
      </Section>

      {/* Pourquoi moi */}
      <Section tone="white">
        <SectionHeader eyebrow="Pourquoi travailler avec moi" title="La rigueur du cerveau, la simplicité du terrain" />
        <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {atouts.map((a) => (
            <div key={a.title} className="flex gap-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-light/30 text-gold-dark">
                <a.icon aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-medium">{a.title}</h3>
                <p className="mt-2 text-ink-soft">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Particuliers et présentation */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.3fr]">
          <img src="/images/veronique.webp" alt="Portrait de Véronique Carrié" width={800} height={1000} loading="lazy" className="mx-auto w-full max-w-sm rounded-3xl object-cover shadow-soft" />
          <div>
            <p className="eyebrow mb-3">Qui suis-je</p>
            <h2 className="h-section">Véronique Carrié</h2>
            <p className="lead mt-5">
              J’aide chacun à mieux comprendre son cerveau pour traverser les changements de la vie. Formée en psychologie clinique et en neuropsychologie du vieillissement, instructrice de pleine conscience certifiée, je transmets des outils simples, issus de la recherche, que l’on peut utiliser dès le lendemain.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <Link to="/qui-suis-je" className="link-underline font-medium">Mon parcours</Link>
              <Link to="/particuliers" className="link-underline font-medium">Cycles et séances pour les particuliers</Link>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Un projet pour votre structure ?"
        text="Parlons-en vingt minutes : votre public, vos contraintes, votre financement. Je vous envoie ensuite une proposition écrite."
      />
    </>
  );
}
