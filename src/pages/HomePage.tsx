import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CREDENTIALS, FIRST_MEETING, SITE } from '../content/site';
import { MEDIA } from '../content/media';
import { methode } from '../content/structures';
import { Band, Btn, Checks, CtaBand, Hero, Kicker, TextLink } from '../components/calm';
import { ColorTest } from '../components/ColorTest';
import { Seo } from '../lib/head';

// L'accueil, la page vitrine : un titre court, les preuves, deux portes, la méthode, Véronique.


function Signature() {
  return (
    <Link to="/qui-suis-je" className="group inline-flex items-center gap-3">
      <img src="/images/veronique-480.webp" alt="" width={480} height={600} className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white/30" />
      <span className="leading-tight">
        <span className="block font-heading text-[1.15rem] text-cream group-hover:text-gold-light">Véronique Carrié</span>
        <span className="block text-[0.92rem] text-cream/75">Instructrice certifiée MBSR, MBCT et MBCAS</span>
      </span>
    </Link>
  );
}

function Door({ to, dark, kicker, title, points, note, cta }: { to: string; dark?: boolean; kicker: string; title: string; points: string[]; note: string; cta: string }) {
  return (
    <Link to={to} className={`group flex flex-col rounded-[2rem] p-7 transition-transform hover:-translate-y-1 md:p-10 ${dark ? 'glow-night text-cream' : 'glass-light text-ink'}`}>
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
        media={MEDIA.ciel}
        full
        note={<Signature />}
      />

      <Band tone="light" kicker="Deux façons de travailler ensemble" title="Pour qui ?">
        <div className="reveal grid gap-5 md:grid-cols-2">
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

      <Band tone="night">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Kicker light>La méthode</Kicker>
            <h2 className="mt-3 font-heading font-light leading-[1.05] text-cream [font-size:clamp(2.2rem,4.2vw,3.4rem)]">Sortir du pilote <em className="italic text-gold-light">automatique.</em></h2>
            <ol className="mt-10 space-y-7">
              {methode.map((m, i) => (
                <li key={m.title} className="grid grid-cols-[3.2rem_1fr] gap-4">
                  <span className="font-heading text-[2.2rem] leading-none text-gold-light">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="block font-heading text-[1.45rem] text-cream">{m.title}</span>
                    <span className="mt-1 block text-[1.04rem] text-cream/75">{m.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="reveal"><ColorTest /></div>
        </div>
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
