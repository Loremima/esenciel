import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CREDENTIALS, FIRST_MEETING, SITE } from '../content/site';
import { MEDIA } from '../content/media';
import { methode } from '../content/structures';
import { Band, Btn, Checks, CtaBand, Hero, TextLink } from '../components/calm';
import { LoopVideo } from '../components/funnel';
import { Seo } from '../lib/head';

// L'accueil, la page vitrine : un titre court, les preuves, deux portes, la méthode, Véronique.

const PREUVES = ['Formée en neuropsychologie du vieillissement', 'Certifiée MBSR, MBCT et MBCAS', 'Intervenante Neo Silver', 'Hérault, Aveyron et visio'];

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-night-deep shadow-2xl lg:ml-auto">
      <LoopVideo media={MEDIA.herbes} priority />
      <div className="absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-2xl bg-night/80 p-3 pr-5 backdrop-blur">
        <img src="/images/veronique-480.webp" alt="Portrait de Véronique Carrié" width={480} height={600} className="h-16 w-14 shrink-0 rounded-xl object-cover" />
        <span className="min-w-0 leading-snug">
          <span className="block font-heading text-[1.15rem] text-cream">Véronique Carrié</span>
          <span className="block text-[0.9rem] text-cream/75">{CREDENTIALS.certifications}</span>
        </span>
      </div>
    </div>
  );
}

function Door({ to, dark, kicker, title, points, note, cta }: { to: string; dark?: boolean; kicker: string; title: string; points: string[]; note: string; cta: string }) {
  return (
    <Link to={to} className={`group flex flex-col rounded-[2rem] p-7 transition-transform hover:-translate-y-1 md:p-10 ${dark ? 'bg-night text-cream' : 'border border-sand-dark bg-cream-light text-ink'}`}>
      <span className={`text-[0.8rem] font-semibold uppercase tracking-[0.16em] ${dark ? 'text-gold-light' : 'text-gold-dark'}`}>{kicker}</span>
      <span className={`mt-4 font-heading font-light leading-[1.08] [font-size:clamp(1.9rem,3vw,2.5rem)] ${dark ? 'text-cream' : 'text-ink'}`}>{title}</span>
      <span className={`mt-6 flex-1 text-[1.06rem] ${dark ? 'text-cream/85' : 'text-ink-soft'}`}><Checks light={dark} items={points} /></span>
      <span className={`mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-6 ${dark ? 'border-cream/15' : 'border-sand-dark'}`}>
        <span className={dark ? 'text-cream/70' : 'text-ink-muted'}>{note}</span>
        <span className={`inline-flex items-center gap-2 font-semibold ${dark ? 'text-gold-light' : 'text-ink'}`}>
          {cta} <ArrowRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </span>
      </span>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <Seo
        title="EsenCiel, Véronique Carrié : prendre soin de son cerveau, à chaque âge de la vie"
        description={`${SITE.market}, dans l’Hérault, l’Aveyron et à distance. ${CREDENTIALS.certifications}.`}
        path="/"
      />

      <Hero
        kicker={SITE.tagline}
        title={<>Votre cerveau, <em>mode d’emploi.</em></>}
        lead={`${SITE.market}.`}
        actions={
          <>
            <Btn to="/structures">Je suis une structure</Btn>
            <Btn to="/particuliers" variant="outline" light>Pour moi ou un proche</Btn>
          </>
        }
        aside={<HeroVisual />}
      />

      <section className="border-b border-sand-dark bg-cream">
        <ul className="container-site grid grid-cols-2 gap-x-6 gap-y-3 py-6 text-[0.95rem] text-ink-soft md:flex md:justify-between">
          {PREUVES.map((p) => <li key={p} className="flex items-center gap-2"><span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{p}</li>)}
        </ul>
      </section>

      <Band kicker="Deux façons de travailler ensemble" title="Pour qui ?">
        <div className="grid gap-5 md:grid-cols-2">
          <Door
            to="/structures"
            dark
            kicker="Structures"
            title="Des actions de prévention prêtes à déposer."
            points={['Conférences et cycles pour seniors, aidants et soignants', 'La fiche-action rédigée pour votre dossier', 'L’évaluation et le bilan pour votre financeur']}
            note="Dès 350 €"
            cta="Voir l’offre"
          />
          <Door
            to="/particuliers"
            kicker="Particuliers"
            title="Des ateliers pour garder un cerveau en forme."
            points={['Garder sa mémoire après 60 ans', 'Apaiser le stress, mieux dormir', 'Souffler quand on aide un proche']}
            note="Séance découverte gratuite"
            cta="Trouver mon atelier"
          />
        </div>
      </Band>

      <Band tone="night" kicker="La méthode" title="Sortir du pilote automatique.">
        <ol className="grid gap-10 md:grid-cols-3">
          {methode.map((m, i) => (
            <li key={m.title} className="border-t border-cream/20 pt-6">
              <span className="font-heading text-[2.6rem] leading-none text-gold-light">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-4 font-heading text-[1.6rem] text-cream">{m.title}</p>
              <p className="mt-2 text-[1.06rem] text-cream/75">{m.text}</p>
            </li>
          ))}
        </ol>
      </Band>

      <Band>
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <img src="/images/veronique.webp" alt="Portrait de Véronique Carrié" width={800} height={1000} loading="lazy" className="mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] object-cover" />
          <div>
            <blockquote className="font-heading font-light leading-[1.15] text-ink [font-size:clamp(1.8rem,3.2vw,2.6rem)] [text-wrap:balance]">
              « Quand on sait pourquoi le cerveau s’emballe, oublie ou se fatigue, on a moins peur, et on peut agir. »
            </blockquote>
            <p className="mt-6 text-[1.06rem] text-ink-soft"><strong className="font-semibold text-ink">Véronique Carrié.</strong> {CREDENTIALS.short}. {CREDENTIALS.certifications}.</p>
            <p className="mt-4"><TextLink to="/qui-suis-je">Mon parcours</TextLink></p>
          </div>
        </div>
      </Band>

      <CtaBand title="Un projet, une question ?" text="Structures : 20 minutes au téléphone pour regarder votre projet. Particuliers : appelez-moi, tout simplement." primary={{ to: FIRST_MEETING.structure.href, label: 'Réserver 20 min' }} />
    </>
  );
}
