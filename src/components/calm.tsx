import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { LoopVideo } from './funnel';
import { Breadcrumbs } from './ui';
import type { Media } from '../content/media';
import { SITE } from '../content/site';

// Les briques du site, façon page produit : toute la largeur, deux colonnes,
// des titres courts, des boutons de 2 ou 3 mots, une seule couleur d'accent (l'or).

type Crumb = { name: string; path: string };

const isInternal = (to: string) => to.startsWith('/') && !to.startsWith('//');

/** Bouton. `primary` (or) pour l'action principale, `outline` pour la secondaire. */
export function Btn({ to, children, variant = 'primary', light, download }: { to: string; children: ReactNode; variant?: 'primary' | 'outline'; light?: boolean; download?: boolean }) {
  const base = 'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 text-[0.98rem] font-semibold transition-colors';
  const look =
    variant === 'primary'
      ? 'bg-gold text-night hover:bg-gold-light'
      : light
        ? 'border border-cream/40 text-cream hover:bg-cream/10'
        : 'border border-ink/30 text-ink hover:border-ink hover:bg-night hover:text-cream';
  const cls = `${base} ${look}`;
  if (isInternal(to) && !download) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={to} className={cls} download={download}>{children}</a>;
}

/** Le bouton « Appeler », avec le numéro visible. */
export function CallBtn({ light, label }: { light?: boolean; label?: string }) {
  return (
    <a href={SITE.phoneHref} className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border px-6 text-[0.98rem] font-semibold transition-colors ${light ? 'border-cream/40 text-cream hover:bg-cream/10' : 'border-ink/30 text-ink hover:border-ink'}`}>
      <Phone aria-hidden className="h-4 w-4" /> {label ?? SITE.phone}
    </a>
  );
}

/** Un lien texte avec une flèche. */
export function TextLink({ to, children, light, download }: { to: string; children: ReactNode; light?: boolean; download?: boolean }) {
  const cls = `group inline-flex min-h-[44px] items-center gap-1.5 font-semibold ${light ? 'text-cream hover:text-gold-light' : 'text-ink hover:text-gold-dark'}`;
  const inner = <>{children}<ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>;
  if (isInternal(to) && !download) return <Link to={to} className={cls}>{inner}</Link>;
  return <a href={to} className={cls} download={download}>{inner}</a>;
}

/** Le numéro de téléphone, en clair. */
export function PhoneLine({ light, big }: { light?: boolean; big?: boolean }) {
  return (
    <a href={SITE.phoneHref} className={`inline-flex min-h-[44px] items-center gap-2.5 font-heading ${big ? 'text-[1.9rem]' : 'text-[1.3rem]'} ${light ? 'text-cream hover:text-gold-light' : 'text-ink hover:text-gold-dark'}`}>
      <Phone aria-hidden className={big ? 'h-6 w-6' : 'h-5 w-5'} strokeWidth={1.6} /> {SITE.phone}
    </a>
  );
}

/** Petite étiquette au-dessus d'un titre. */
export function Kicker({ children, light }: { children: ReactNode; light?: boolean }) {
  return <p className={`text-[0.8rem] font-semibold uppercase tracking-[0.16em] ${light ? 'text-gold-light' : 'text-gold-dark'}`}>{children}</p>;
}

const H1 = 'font-heading font-light leading-[1.02] [font-size:clamp(2.6rem,5.8vw,4.6rem)] [letter-spacing:-0.02em] [text-wrap:balance] [&_em]:italic [&_em]:text-gold-light';

/** Ouverture en deux colonnes : le message à gauche, un visuel ou une carte à droite. */
export function Hero({ kicker, title, lead, actions, aside, crumbs, media }: { kicker?: string; title: ReactNode; lead?: ReactNode; actions?: ReactNode; aside?: ReactNode; crumbs?: Crumb[]; media?: Media }) {
  return (
    <section className="relative -mt-[4.5rem] overflow-hidden bg-night text-cream">
      {media && (
        <>
          <LoopVideo media={media} priority />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-night via-night/85 to-night/30" />
        </>
      )}
      <div className={`container-site relative grid items-center gap-10 pb-14 pt-28 md:pb-20 md:pt-36 ${aside ? 'lg:grid-cols-[1.15fr_1fr] lg:gap-16' : ''}`}>
        <div className="min-w-0">
          {crumbs && (
            <div className="mb-4 hidden sm:block [&_a]:text-cream/60 [&_a:hover]:text-cream [&_li]:text-cream/60 [&_span]:!text-cream/60">
              <Breadcrumbs items={crumbs} />
            </div>
          )}
          {kicker && <Kicker light>{kicker}</Kicker>}
          <h1 className={`${H1} ${kicker ? 'mt-4' : ''} text-cream`}>{title}</h1>
          {lead && <p className="mt-6 max-w-xl text-[1.12rem] leading-relaxed text-cream/85 md:text-[1.2rem]">{lead}</p>}
          {actions && <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>}
        </div>
        {aside && <div className="min-w-0">{aside}</div>}
      </div>
    </section>
  );
}

/** Une section pleine largeur avec un titre court, aligné à gauche. */
export function Band({ title, kicker, intro, id, tone = 'cream', side, children }: { title?: ReactNode; kicker?: string; intro?: ReactNode; id?: string; tone?: 'cream' | 'light' | 'night'; side?: ReactNode; children?: ReactNode }) {
  const tones = { cream: 'bg-cream text-ink', light: 'bg-cream-light text-ink', night: 'bg-night text-cream' };
  const dark = tone === 'night';
  return (
    <section id={id} className={`scroll-mt-20 py-16 md:py-24 ${tones[tone]}`}>
      <div className="container-site">
        {(title || kicker) && (
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
            <div className="max-w-2xl">
              {kicker && <Kicker light={dark}>{kicker}</Kicker>}
              {title && <h2 className={`font-heading font-light leading-[1.08] [font-size:clamp(2rem,3.8vw,3.1rem)] [text-wrap:balance] ${kicker ? 'mt-3' : ''} ${dark ? 'text-cream' : 'text-ink'}`}>{title}</h2>}
              {intro && <p className={`mt-4 text-[1.08rem] leading-relaxed ${dark ? 'text-cream/80' : 'text-ink-soft'}`}>{intro}</p>}
            </div>
            {side}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/** Section de texte : le titre à gauche, le texte à droite (dossier, pages de service). */
export function Part({ title, id, large, children }: { title?: ReactNode; id?: string; large?: boolean; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 bg-cream py-12 md:py-16">
      <div className={`container-site grid gap-6 md:grid-cols-[16rem_1fr] md:gap-12 ${large ? 'text-[1.125rem]' : 'text-[1.06rem]'} leading-relaxed text-ink-soft`}>
        {title ? <h2 className="font-heading text-[1.7rem] font-light leading-tight text-ink md:text-[1.9rem]">{title}</h2> : <span className="hidden md:block" />}
        <div className="min-w-0 max-w-[46rem]">{children}</div>
      </div>
    </section>
  );
}

/** Carte. */
export function Card({ children, dark, className = '' }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <div className={`rounded-3xl p-6 md:p-8 ${dark ? 'bg-night text-cream' : 'border border-sand-dark bg-cream-light text-ink'} ${className}`}>{children}</div>;
}

/** Liste à coches. */
export function Checks({ items, light }: { items: ReactNode[]; light?: boolean }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <Check aria-hidden className={`mt-1 h-4 w-4 shrink-0 ${light ? 'text-gold-light' : 'text-gold-dark'}`} strokeWidth={2.5} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** Étapes numérotées, en ligne sur grand écran. */
export function Steps({ items, row, light, two }: { items: { title: string; text?: string }[]; row?: boolean; light?: boolean; two?: boolean }) {
  return (
    <ol className={row ? `grid gap-8 sm:grid-cols-2 ${two ? '' : 'lg:grid-cols-4'} lg:gap-6` : 'space-y-5'}>
      {items.map((s, i) => (
        <li key={s.title} className={row ? `border-t pt-5 ${light ? 'border-cream/20' : 'border-ink/15'}` : 'grid grid-cols-[2rem_1fr] gap-3'}>
          <span className={`block font-heading leading-none ${row ? 'text-[2.4rem]' : 'text-[1.35rem]'} ${light ? 'text-gold-light' : 'text-gold-dark'}`}>{row ? String(i + 1).padStart(2, '0') : i + 1}</span>
          <span className={row ? 'mt-4 block' : ''}>
            <span className={`block font-semibold ${light ? 'text-cream' : 'text-ink'} ${row ? 'text-[1.1rem]' : ''}`}>{s.title}</span>
            {s.text && <span className={`mt-1 block ${light ? 'text-cream/75' : 'text-ink-soft'}`}>{s.text}</span>}
          </span>
        </li>
      ))}
    </ol>
  );
}

/** Le bandeau final de chaque page : une question, deux boutons. */
export function CtaBand({ title, text, primary }: { title: ReactNode; text?: ReactNode; primary: { to: string; label: string } }) {
  return (
    <section className="bg-cream pb-16 md:pb-24">
      <div className="container-site">
        <div className="grid items-center gap-8 rounded-[2rem] bg-night px-6 py-12 text-cream md:grid-cols-[1.4fr_1fr] md:px-14 md:py-16">
          <div>
            <h2 className="font-heading font-light leading-[1.08] text-cream [font-size:clamp(2rem,3.8vw,3rem)] [text-wrap:balance]">{title}</h2>
            {text && <p className="mt-4 max-w-lg text-[1.08rem] text-cream/80">{text}</p>}
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Btn to={primary.to}>{primary.label}</Btn>
            <CallBtn light label="Appeler" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Carte collante de réservation, à droite des fiches. */
export function SideCard({ price, priceNote, facts, action, children }: { price: string; priceNote?: string; facts: { label: string; value: string }[]; action: ReactNode; children?: ReactNode }) {
  return (
    <aside className="lg:sticky lg:top-24">
      <Card>
        <p className="font-heading text-[2.2rem] leading-none text-ink">{price}</p>
        {priceNote && <p className="mt-2 text-[0.95rem] text-ink-muted">{priceNote}</p>}
        <dl className="mt-6 divide-y divide-sand-dark border-y border-sand-dark text-[0.98rem]">
          {facts.map((f) => (
            <div key={f.label} className="flex justify-between gap-4 py-3">
              <dt className="shrink-0 text-ink-muted">{f.label}</dt>
              <dd className="text-right text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 grid gap-3">{action}</div>
        {children}
      </Card>
    </aside>
  );
}
