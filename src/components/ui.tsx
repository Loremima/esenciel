import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Phone } from 'lucide-react';
import type { Accent, Fact } from '../content/offres';
import { SITE } from '../content/site';

type ButtonProps = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'light' | 'ghost';
  arrow?: boolean;
  className?: string;
  download?: boolean;
};

const variants = {
  primary: 'bg-ink text-cream hover:bg-ink-soft',
  secondary: 'border border-ink/80 text-ink hover:bg-ink hover:text-cream',
  light: 'bg-cream text-ink hover:bg-white',
  ghost: 'text-ink hover:text-gold-dark px-0',
};

export function Button({ to, href, children, variant = 'primary', arrow, className = '', download }: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-medium transition-colors ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden className="h-4 w-4" />}
    </>
  );
  if (to) return <Link to={to} className={cls}>{content}</Link>;
  const external = href?.startsWith('http');
  return (
    <a href={href} className={cls} download={download} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {content}
    </a>
  );
}

export function Section({ children, tone = 'cream', className = '', id }: { children: ReactNode; tone?: 'cream' | 'sand' | 'white' | 'ink'; className?: string; id?: string }) {
  const tones = {
    cream: 'bg-cream',
    sand: 'bg-sand',
    white: 'bg-cream-light',
    ink: 'bg-ink text-cream',
  };
  return (
    <section id={id} className={`${tones[tone]} py-16 md:py-24 ${className}`}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, intro, center }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; center?: boolean }) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="h-section">{title}</h2>
      {intro && <p className="lead mt-4">{intro}</p>}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="mb-6 text-sm text-ink-muted">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1">
            {i > 0 && <ChevronRight aria-hidden className="h-3.5 w-3.5" />}
            {i < items.length - 1 ? (
              <Link to={it.path} className="hover:text-ink">{it.name}</Link>
            ) : (
              <span aria-current="page" className="text-ink-soft">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  aside,
  crumbs,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  crumbs?: { name: string; path: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-cream pb-14 pt-8 md:pb-20 md:pt-12">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-gold-light/20 blur-3xl" />
      <div className={`container-site relative ${aside ? 'grid items-center gap-10 md:grid-cols-[1.25fr_1fr] md:gap-14' : ''}`}>
        <div className="fade-up">
          {crumbs && <Breadcrumbs items={crumbs} />}
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="h-display max-w-3xl">{title}</h1>
          {lead && <p className="lead mt-6 max-w-2xl">{lead}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {aside && <div className="fade-up">{aside}</div>}
      </div>
    </section>
  );
}

export function FactList({ facts }: { facts: Fact[] }) {
  return (
    <dl className="divide-y divide-sand-dark/80 rounded-2xl border border-sand-dark/80 bg-cream-light">
      {facts.map((f) => (
        <div key={f.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6 md:px-6">
          <dt className="text-sm font-semibold text-ink">{f.label}</dt>
          <dd className="text-[0.98rem] text-ink-soft">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-sand-dark/80 border-y border-sand-dark/80">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-heading text-lg font-medium text-ink [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink/30 text-sm transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-prose text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ title, text, primary }: { title: string; text: string; primary?: { label: string; to: string } }) {
  return (
    <section className="bg-ink py-16 text-cream md:py-20">
      <div className="container-site grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="h-section text-cream">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-cream/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Button to={primary?.to ?? '/contact'} variant="light" arrow>
            {primary?.label ?? 'Échanger sur votre projet'}
          </Button>
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-[0.95rem] font-medium text-cream transition-colors hover:bg-cream/10">
            <Phone aria-hidden className="h-4 w-4" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export const accentClasses: Record<Accent, { bg: string; text: string; border: string; dot: string }> = {
  gold: { bg: 'bg-gold-light/25', text: 'text-gold-dark', border: 'border-gold/40', dot: 'bg-gold' },
  clay: { bg: 'bg-clay-light', text: 'text-clay', border: 'border-clay/30', dot: 'bg-clay' },
  sage: { bg: 'bg-sage-light', text: 'text-sage', border: 'border-sage/30', dot: 'bg-sage' },
};

/** Image en arche, avec une vidéo d'ambiance chargée seulement sur grand écran. */
export function ArchMedia({ image, alt, video, className = '' }: { image: string; alt: string; video?: string; className?: string }) {
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    if (!video) return;
    const wide = window.matchMedia('(min-width: 768px)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (wide && !calm && !saveData) setShowVideo(true);
  }, [video]);

  return (
    <div className={`relative mx-auto aspect-[2/3] w-full max-w-[17rem] md:max-w-sm overflow-hidden rounded-arch bg-sand shadow-soft ${className}`}>
      <img src={image} alt={alt} width={600} height={900} className="absolute inset-0 h-full w-full object-cover" />
      {showVideo && video && (
        <video className="absolute inset-0 h-full w-full object-cover" src={video} poster={image} autoPlay muted loop playsInline preload="none" aria-hidden />
      )}
    </div>
  );
}
