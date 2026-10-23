import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck, ChevronRight, Clock, Phone, type LucideIcon } from 'lucide-react';
import { Faq } from './ui';
import { CREDENTIALS, FIRST_MEETING, SITE } from '../content/site';
import { programmes } from '../content/offres';
import { AUDIENCE_MEDIA, type Media } from '../content/media';
import { cleEnMain, echelle, etapes, financeurs, methode, objections, preuves } from '../content/structures';

// Les blocs du site, pensés mobile d'abord : centrés, peu de texte, des vidéos d'ambiance.

/** Faux tant que le visiteur limite les animations ou ses données (et pendant le prérendu). */
function useMotionOk() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    setOk(!calm && !saveData);
  }, []);
  return ok;
}

/** Image fixe, remplacée par une vidéo en boucle quand elle arrive à l'écran. */
export function LoopVideo({ media, className = '', priority = false }: { media: Media; className?: string; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionOk = useMotionOk();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!motionOk || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        io.disconnect();
      }
    }, { rootMargin: '200px' });
    // La vidéo du héros attend la fin du chargement : l'image s'affiche d'abord, vite.
    const start = () => io.observe(el);
    if (!priority || document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => {
      window.removeEventListener('load', start);
      io.disconnect();
    };
  }, [motionOk, priority]);

  return (
    <div ref={ref} aria-hidden className={`absolute inset-0 ${className}`}>
      <img
        src={media.poster}
        alt=""
        width={960}
        height={540}
        loading={priority ? 'eager' : 'lazy'}
        {...{ fetchpriority: priority ? 'high' : 'auto' }}
        className="h-full w-full object-cover"
      />
      {visible && <video className="absolute inset-0 h-full w-full object-cover" src={media.video} poster={media.poster} autoPlay muted loop playsInline />}
    </div>
  );
}

/** Héros sur vidéo, sous l'en-tête transparent. `full` : plein écran (accueil). */
export function HeroVideo({
  media,
  kicker,
  eyebrow,
  title,
  lead,
  children,
  full,
}: {
  media: Media;
  kicker?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  full?: boolean;
}) {
  return (
    <section className={`relative -mt-[4.5rem] flex flex-col justify-end overflow-hidden bg-night text-cream md:justify-center ${full ? 'min-h-[40rem] [height:100svh]' : 'min-h-[34rem] md:min-h-[36rem]'}`}>
      <LoopVideo media={media} priority />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-night/55 via-night/20 to-night/90 md:via-night/35 md:to-night/70" />
      <div className="container-site fade-up relative pb-24 pt-28 text-center md:pb-16">
        {kicker && <p className="font-heading text-2xl tracking-wide">{kicker}</p>}
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">{eyebrow}</p>}
        <h1 className="mx-auto mt-4 max-w-4xl font-heading font-light leading-[1.02] text-cream [font-size:clamp(2.7rem,6.6vw,5.4rem)] [letter-spacing:-0.02em] [&_em]:italic [&_em]:text-gold-light">
          {title}
        </h1>
        {lead && <p className="mx-auto mt-5 max-w-xl text-[1.06rem] leading-relaxed text-cream/90 md:text-xl">{lead}</p>}
        {children && <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-4 sm:max-w-none">{children}</div>}
      </div>
    </section>
  );
}

export function PrimaryCta({ to, children, light, className = '' }: { to: string; children: ReactNode; light?: boolean; className?: string }) {
  const cls = `btn w-full sm:w-auto ${light ? 'bg-cream text-night hover:bg-cream-light' : 'bg-night text-cream hover:bg-night/90'} ${className}`;
  const content = (
    <>
      <CalendarCheck aria-hidden className="h-5 w-5" strokeWidth={1.8} />
      {children}
    </>
  );
  if (to.startsWith('#')) return <a href={to} className={cls}>{content}</a>;
  return <Link to={to} className={cls}>{content}</Link>;
}

/** Titre de section centré. */
export function Title({ children, kicker, light, className = '' }: { children: ReactNode; kicker?: string; light?: boolean; className?: string }) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      {kicker && <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${light ? 'text-gold-light' : 'text-gold-dark'}`}>{kicker}</p>}
      <h2 className={`h-section ${light ? 'text-cream [&_em]:!text-gold-light' : ''}`}>{children}</h2>
    </div>
  );
}

export function IconSquare({ icon: Icon, round, soft }: { icon: LucideIcon; round?: boolean; soft?: boolean }) {
  return (
    <span className={`grid h-[52px] w-[52px] shrink-0 place-items-center ${round ? 'rounded-full' : 'rounded-2xl'} ${soft ? 'bg-sand text-gold-dark' : 'bg-night text-gold-light'}`}>
      <Icon aria-hidden className="h-6 w-6" strokeWidth={1.6} />
    </span>
  );
}

export function ProofGrid() {
  return (
    <div id="suite" className="border-b border-sand-dark bg-cream">
      <ul className="container-site grid grid-cols-2 gap-x-4 gap-y-7 py-9 md:grid-cols-4">
        {preuves.map((p) => (
          <li key={p.text} className="flex flex-col items-center gap-2.5 text-center text-sm leading-snug text-ink">
            <p.icon aria-hidden className="h-7 w-7 text-gold-dark" strokeWidth={1.5} />
            {p.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function KeyTiles({ tone = 'cream' }: { tone?: 'cream' | 'sand' }) {
  return (
    <section className={`${tone === 'sand' ? 'bg-sand' : 'bg-cream'} py-16 md:py-24`}>
      <div className="container-site">
        <Title>Vous, une salle.<br /><em>Moi, tout le reste.</em></Title>
        <ul className="mx-auto mt-9 grid max-w-5xl grid-cols-2 gap-3 md:mt-12 md:grid-cols-4 md:gap-5">
          {cleEnMain.map((c) => (
            <li key={c.title} className="flex flex-col items-center gap-4 rounded-3xl bg-cream-light px-3 py-6 text-center md:py-9">
              <IconSquare icon={c.icon} />
              <span className="max-w-[9rem] text-[0.95rem] font-semibold leading-snug">{c.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AudienceCard({ slug, big }: { slug: string; big?: boolean }) {
  const p = programmes.find((x) => x.slug === slug);
  const a = AUDIENCE_MEDIA[slug];
  if (!p || !a) return null;
  return (
    <Link
      to={p.path}
      className={`group relative flex flex-col justify-end overflow-hidden rounded-3xl text-center text-cream ${big ? 'col-span-2 h-[300px] md:col-span-1' : 'h-[240px]'} md:h-[440px]`}
    >
      <LoopVideo media={a.media} className="transition-transform duration-700 group-hover:scale-105" />
      <span aria-hidden className="absolute inset-0 bg-gradient-to-b from-night/0 from-30% to-night/85" />
      <span className={`relative ${big ? 'p-6' : 'p-4'} md:p-7`}>
        <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-light md:text-xs">{a.label}</span>
        <span className={`mt-2 block font-heading leading-tight ${big ? 'text-2xl' : 'text-[1.2rem]'} md:text-[1.7rem]`}>{p.quote}</span>
        <span className="mt-3 hidden items-center gap-1.5 text-sm font-medium text-cream/85 md:inline-flex">
          Le programme <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </span>
    </Link>
  );
}

export function AudienceVideos({ title = 'Pour qui ?', kicker }: { title?: ReactNode; kicker?: string }) {
  return (
    <section id="programmes" className="bg-cream pb-16 md:pb-24">
      <div className="container-site">
        <Title kicker={kicker}>{title}</Title>
        <div className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-3 md:gap-5">
          <AudienceCard slug="seniors" big />
          <AudienceCard slug="aidants" />
          <AudienceCard slug="professionnels" />
        </div>
      </div>
    </section>
  );
}

export function MethodBand() {
  return (
    <section className="bg-night py-14 text-cream md:py-20">
      <div className="container-site">
        <Title light>Sortir du <em>pilote automatique</em></Title>
        <ol className="mx-auto mt-9 grid max-w-4xl grid-cols-3 gap-2 md:mt-12 md:gap-10">
          {methode.map((m) => (
            <li key={m.title} className="flex flex-col items-center gap-3 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full border border-gold-light/45 text-gold-light md:h-20 md:w-20">
                <m.icon aria-hidden className="h-7 w-7" strokeWidth={1.5} />
              </span>
              <span className="font-heading text-[1.2rem] md:text-2xl">{m.title}</span>
              <span className="hidden max-w-xs text-cream/70 md:block">{m.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FormatsList() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container-site">
        <Title>Trois formats</Title>
        <ul className="mx-auto mt-8 flex max-w-5xl flex-col gap-2.5 md:mt-12 md:grid md:grid-cols-3 md:gap-5">
          {echelle.map((e, i) => (
            <li key={e.title}>
              <Link
                to={e.to}
                className={`group flex h-full items-center gap-4 rounded-[22px] px-5 py-[18px] text-left transition-transform hover:-translate-y-0.5 md:flex-col md:items-center md:gap-5 md:px-7 md:py-9 md:text-center ${i === 0 ? 'bg-night text-cream' : 'border border-sand-dark bg-cream-light text-ink'}`}
              >
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-[14px] ${i === 0 ? 'bg-gold-light/15 text-gold-light' : 'bg-sand text-gold-dark'}`}>
                  <e.icon aria-hidden className="h-[22px] w-[22px]" strokeWidth={1.6} />
                </span>
                <span className="flex-1">
                  <span className="block font-heading text-[1.35rem] md:text-2xl">{e.title}</span>
                  <span className={`block text-[0.82rem] md:mt-1 md:text-sm ${i === 0 ? 'text-gold-light' : 'text-gold-dark'}`}>{e.meta}</span>
                </span>
                <ChevronRight aria-hidden className={`h-5 w-5 shrink-0 md:hidden ${i === 0 ? 'text-cream/60' : 'text-ink-muted'}`} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function VeroniqueIntro() {
  return (
    <section className="bg-cream pb-16 md:pb-24">
      <div className="container-site flex flex-col items-center text-center">
        <img src="/images/veronique-480.webp" alt="Portrait de Véronique Carrié" width={480} height={600} loading="lazy" className="h-[275px] w-[220px] rounded-arch object-cover md:h-[340px] md:w-[272px]" />
        <h2 className="mt-6 font-heading text-[2rem] font-light">Véronique Carrié</h2>
        <p className="mt-2 max-w-sm text-ink-muted">Comprendre son cerveau pour traverser les changements de la vie.</p>
        <p className="mt-3 max-w-md text-sm text-ink-muted">{CREDENTIALS.short}. {CREDENTIALS.certifications}.</p>
        <Link to="/qui-suis-je" className="link-underline mt-5 font-medium">Mon parcours</Link>
      </div>
    </section>
  );
}

type Profil = keyof typeof FIRST_MEETING;

/** Choix du premier rendez-vous. Les créneaux s'ouvrent dans l'agenda en ligne. */
export function BookingCard({ initial = 'structure' }: { initial?: Profil }) {
  const [profil, setProfil] = useState<Profil>(initial);
  useEffect(() => setProfil(initial), [initial]);
  const m = FIRST_MEETING[profil];
  const external = m.href.startsWith('http');
  const btn = 'btn mt-6 w-full bg-night text-cream hover:bg-night/90';

  return (
    <div className="mx-auto w-full max-w-md rounded-[28px] bg-cream-light p-5 text-left shadow-soft md:p-7">
      <div role="radiogroup" aria-label="Vous êtes" className="grid grid-cols-2 gap-1 rounded-full bg-sand p-1">
        {(Object.keys(FIRST_MEETING) as Profil[]).map((k) => (
          <button
            key={k}
            type="button"
            role="radio"
            aria-checked={profil === k}
            onClick={() => setProfil(k)}
            className={`rounded-full px-2 py-3 text-sm font-semibold transition-colors ${profil === k ? 'bg-night text-cream' : 'text-ink hover:bg-cream-light/60'}`}
          >
            {FIRST_MEETING[k].label}
          </button>
        ))}
      </div>
      <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm font-semibold text-gold-dark">
        <Clock aria-hidden className="h-4 w-4" /> {m.info}
      </p>
      <p className="mt-3 text-center text-ink-muted">{m.text}</p>
      {external ? (
        <a href={m.href} target="_blank" rel="noopener noreferrer" className={btn}>
          <CalendarCheck aria-hidden className="h-5 w-5" strokeWidth={1.8} /> {m.cta}
        </a>
      ) : (
        <Link to={m.href} className={btn}>
          <CalendarCheck aria-hidden className="h-5 w-5" strokeWidth={1.8} /> {m.cta}
        </Link>
      )}
      <a href={SITE.phoneHref} className="mt-4 flex items-center justify-center gap-2 text-sm text-ink-muted hover:text-ink">
        <Phone aria-hidden className="h-4 w-4" /> Ou appelez-moi : <span className="font-medium text-ink">{SITE.phone}</span>
      </a>
    </div>
  );
}

export function BookingSection({ initial = 'structure', tone = 'sand' }: { initial?: Profil; tone?: 'sand' | 'cream' }) {
  return (
    <section id="rdv" className={`${tone === 'sand' ? 'bg-sand' : 'bg-cream'} py-14 md:py-20`}>
      <div className="container-site">
        <Title className="mb-7">Prendre <em>rendez-vous</em></Title>
        <BookingCard initial={initial} />
      </div>
    </section>
  );
}

export function StepsRow() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container-site">
        <Title>En 4 étapes</Title>
        <ol className="relative mx-auto mt-9 grid max-w-xs gap-7 md:mt-12 md:max-w-5xl md:grid-cols-4 md:gap-6">
          <span aria-hidden className="absolute bottom-6 left-[26px] top-6 w-px bg-gold/40 md:bottom-auto md:left-[12.5%] md:right-[12.5%] md:top-[26px] md:h-px md:w-auto" />
          {etapes.map((e) => (
            <li key={e.title} className="relative flex items-center gap-4 md:flex-col md:text-center">
              <span className="relative rounded-full ring-8 ring-cream">
                <IconSquare icon={e.icon} round />
              </span>
              <span>
                <span className="block font-semibold leading-snug">{e.title}</span>
                <span className="mt-1 hidden text-[0.95rem] text-ink-muted md:block">{e.text}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FundersChips({ tone = 'sand' }: { tone?: 'sand' | 'cream' }) {
  return (
    <section className={`${tone === 'sand' ? 'bg-sand' : 'bg-cream'} py-14 md:py-20`}>
      <div className="container-site">
        <Title>Finançable par</Title>
        <ul className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-2">
          {financeurs.map((f) => (
            <li key={f} className="rounded-full border border-sand-dark bg-cream-light px-4 py-2 text-sm font-medium">{f}</li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-md text-center text-sm text-ink-muted">Fiche-action et évaluation (stress perçu, bien-être, satisfaction) fournies pour votre dossier.</p>
      </div>
    </section>
  );
}

export function FaqSection({ title = 'Questions', items = objections }: { title?: string; items?: { q: string; a: string }[] }) {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container-site">
        <Title>{title}</Title>
        <div className="mx-auto mt-8 max-w-2xl">
          <Faq items={items} />
        </div>
      </div>
    </section>
  );
}
