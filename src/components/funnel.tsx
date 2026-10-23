import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, Download, type LucideIcon } from 'lucide-react';
import { Button, Faq, Section, SectionHeader, accentClasses } from './ui';
import { SITE } from '../content/site';
import { programmes } from '../content/offres';
import { CTA_APPEL, douleurs, echelle, etapes, methode, objections, offreCleEnMain, preuves, publics } from '../content/structures';

// Les briques du parcours structures, partagées par l'accueil et la page Structures.

export function IconTile({ icon: Icon, tone = 'gold', className = '' }: { icon: LucideIcon; tone?: 'gold' | 'ink' | 'light'; className?: string }) {
  const tones = {
    gold: 'bg-gold-light/25 text-gold-dark ring-1 ring-gold/20',
    ink: 'bg-ink text-gold-light',
    light: 'bg-cream/10 text-gold-light ring-1 ring-cream/15',
  };
  return (
    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${tones[tone]} ${className}`}>
      <Icon aria-hidden className="h-[22px] w-[22px]" strokeWidth={1.75} />
    </span>
  );
}

/** Héros plein écran sur la vidéo du ciel. La vidéo ne se charge pas si le visiteur limite les animations ou ses données. */
export function VideoHero({ eyebrow, title, lead, children, footnote }: { eyebrow: string; title: ReactNode; lead: string; children: ReactNode; footnote?: ReactNode }) {
  const [video, setVideo] = useState(false);
  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (!calm && !saveData) setVideo(true);
  }, []);

  return (
    <section className="relative -mt-[4.5rem] flex min-h-[40rem] items-center overflow-hidden bg-ink text-cream [height:100svh] md:min-h-[44rem]">
      <img src="/images/hero-plein-ecran.webp" alt="" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
      {video && (
        <video className="absolute inset-0 h-full w-full object-cover" src="/media/hero-plein-ecran.mp4" poster="/images/hero-plein-ecran.webp" autoPlay muted loop playsInline aria-hidden />
      )}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-ink/75" />
      <div className="container-site fade-up relative pt-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">{eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-4xl font-heading font-medium leading-[1.05] text-cream [font-size:clamp(2.6rem,6.4vw,5.2rem)] [text-shadow:0_2px_24px_rgba(0,0,0,.25)]">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/90 md:text-xl">{lead}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">{children}</div>
        {footnote && <div className="mt-7 text-sm text-cream/80">{footnote}</div>}
      </div>
      <a href="#suite" aria-label="Voir la suite" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-cream/70 hover:text-cream">
        <ChevronDown aria-hidden className="h-7 w-7" />
      </a>
    </section>
  );
}

export function TrustBar() {
  return (
    <div id="suite" className="border-b border-sand-dark/70 bg-cream">
      <ul className="container-site grid grid-cols-2 gap-x-6 gap-y-5 py-7 md:grid-cols-4">
        {preuves.map((p) => (
          <li key={p.text} className="flex items-center gap-3 text-sm leading-snug text-ink-soft">
            <p.icon aria-hidden className="h-6 w-6 shrink-0 text-gold-dark" strokeWidth={1.6} />
            {p.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PainSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Votre réalité"
        title="Un public à accompagner, un budget prévention à engager… et pas le temps de tout monter."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {douleurs.map((d) => (
          <div key={d.title} className="card flex gap-5 p-6 md:block md:p-7">
            <IconTile icon={d.icon} />
            <div>
              <h3 className="text-xl font-medium md:mt-5">{d.title}</h3>
              <p className="mt-2 text-ink-soft">{d.text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 font-heading text-2xl text-ink md:text-3xl">
        C’est exactement ce que je prends en charge. <span className="italic text-gold-dark">De A à Z.</span>
      </p>
    </Section>
  );
}

export function OfferStackSection() {
  return (
    <Section tone="sand">
      <SectionHeader
        eyebrow="Clé en main"
        title="Vous fournissez la salle et le public. Je m’occupe de tout le reste."
        intro="Chaque intervention comprend :"
      />
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <ul className="grid gap-4 sm:grid-cols-2">
          {offreCleEnMain.map((o) => (
            <li key={o.title} className="flex gap-4 rounded-2xl bg-cream-light p-5 shadow-soft">
              <IconTile icon={o.icon} />
              <div>
                <h3 className="font-sans text-[1.02rem] font-semibold">{o.title}</h3>
                <p className="mt-1 text-[0.95rem] leading-snug text-ink-soft">{o.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col rounded-3xl bg-ink p-8 text-cream lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">Votre part</p>
          <ul className="mt-5 space-y-4">
            {['Réserver une salle', 'Inviter votre public', 'Choisir une date'].map((t) => (
              <li key={t} className="flex items-center gap-3 text-lg">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gold-light/20 text-gold-light">
                  <Check aria-hidden className="h-4 w-4" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-cream/15 pt-6 text-cream/75">C’est tout. Le contenu, l’animation, l’évaluation et le bilan sont pour moi.</p>
          <Button to={CTA_APPEL.to} variant="light" arrow className="mt-7">
            {CTA_APPEL.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function AudienceSection({ tone = 'cream' }: { tone?: 'cream' | 'sand' }) {
  return (
    <Section tone={tone} id="programmes">
      <SectionHeader eyebrow="Pour qui" title="Une approche pensée pour chaque public" intro="Le même fil conducteur, des contenus adaptés à ce que vit chacun." />
      <div className="grid gap-5 md:grid-cols-3">
        {publics.map(({ slug, icon }) => {
          const p = programmes.find((x) => x.slug === slug);
          if (!p) return null;
          const a = accentClasses[p.accent];
          const Icon = icon;
          return (
            <Link key={p.slug} to={p.path} className={`group flex flex-col rounded-3xl border ${a.border} ${a.bg} p-7 transition-all hover:-translate-y-1 hover:shadow-soft`}>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-semibold uppercase tracking-wider ${a.text}`}>{p.audience}</span>
                <Icon aria-hidden className={`h-7 w-7 ${a.text}`} strokeWidth={1.6} />
              </div>
              <p className="mt-5 font-heading text-2xl leading-snug text-ink">{p.quote}</p>
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
  );
}

export function LadderSection({ tone = 'cream' }: { tone?: 'cream' | 'sand' }) {
  return (
    <Section tone={tone}>
      <SectionHeader eyebrow="Par où commencer" title="Commencez par une conférence. Allez plus loin si ça prend." />
      <ol className="grid gap-5 md:grid-cols-3">
        {echelle.map((e, i) => (
          <li key={e.title} className="relative flex flex-col rounded-3xl border border-sand-dark/70 bg-cream-light p-7">
            <div className="flex items-center justify-between">
              <IconTile icon={e.icon} tone="ink" />
              <span className="font-heading text-5xl font-medium text-gold/40">{i + 1}</span>
            </div>
            <h3 className="mt-5 text-2xl font-medium">{e.title}</h3>
            <p className="mt-1 text-sm font-medium text-gold-dark">{e.meta}</p>
            <p className="mt-3 flex-1 text-ink-soft">{e.text}</p>
            <Link to={e.to} className="link-underline mt-5 self-start font-medium">
              {e.cta}
            </Link>
            {i < echelle.length - 1 && (
              <ArrowRight aria-hidden className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-cream p-1.5 text-gold-dark shadow-soft md:block" />
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function MethodSection() {
  return (
    <section className="bg-ink py-16 text-cream md:py-24">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">La méthode</p>
          <h2 className="h-section mt-3 text-cream">Apprendre à piloter son cerveau, en trois temps</h2>
          <p className="mt-4 text-lg text-cream/75">Nous vivons une grande partie de nos journées en pilote automatique. Quand la vie change, il nous joue des tours. Bonne nouvelle : cela s’apprend.</p>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {methode.map((m, i) => (
            <li key={m.title} className="rounded-3xl bg-cream/5 p-7 ring-1 ring-cream/10">
              <div className="flex items-center gap-4">
                <IconTile icon={m.icon} tone="light" />
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/50">Temps {i + 1}</span>
              </div>
              <h3 className="mt-5 text-2xl font-medium text-cream">{m.title}</h3>
              <p className="mt-2 text-cream/75">{m.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProcessSection({ tone = 'cream' }: { tone?: 'cream' | 'sand' }) {
  return (
    <Section tone={tone}>
      <SectionHeader eyebrow="Comment ça se passe" title="De votre premier appel au bilan pour le financeur" center />
      <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
        <span aria-hidden className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gold/40 md:block" />
        {etapes.map((e, i) => (
          <li key={e.title} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
            <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink text-gold-light ring-8 ring-cream">
              <e.icon aria-hidden className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark md:mt-5">Étape {i + 1}</p>
              <h3 className="mt-1 text-xl font-medium">{e.title}</h3>
              <p className="mt-2 text-[0.98rem] text-ink-soft">{e.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Button to={CTA_APPEL.to} arrow>{CTA_APPEL.label}</Button>
        <Button href={SITE.plaquette} variant="secondary" download>
          <Download aria-hidden className="h-4 w-4" /> La plaquette (PDF)
        </Button>
      </div>
    </Section>
  );
}

export function ObjectionsSection({ tone = 'cream' }: { tone?: 'cream' | 'sand' }) {
  return (
    <Section tone={tone}>
      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHeader eyebrow="Questions fréquentes" title="Ce que les structures me demandent" />
          <p className="-mt-4 text-ink-soft">
            Une autre question ? Appelez-moi au{' '}
            <a href={SITE.phoneHref} className="link-underline whitespace-nowrap font-medium text-ink">{SITE.phone}</a>.
          </p>
        </div>
        <Faq items={objections} />
      </div>
    </Section>
  );
}

export function ParticuliersBand() {
  return (
    <div className="border-t border-sand-dark/70 bg-cream">
      <div className="container-site flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
        <p className="text-ink-soft">
          <span className="font-heading text-xl text-ink">Vous venez pour vous-même ?</span>
          <br className="sm:hidden" /> Séances individuelles et cycles en petit groupe.
        </p>
        <Link to="/particuliers" className="inline-flex shrink-0 items-center gap-2 font-medium text-ink hover:text-gold-dark">
          Les offres particuliers <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
