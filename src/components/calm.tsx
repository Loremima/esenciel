import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { LoopVideo } from './funnel';
import { Breadcrumbs } from './ui';
import type { Media } from '../content/media';
import { SITE } from '../content/site';

// Les briques communes à toutes les pages. Règles : un fond ivoire, la nuit
// seulement pour l'ouverture, une colonne de texte étroite, un seul bouton or par page.

type Crumb = { name: string; path: string };

/** L'ouverture d'une page : fond nuit, titre, une phrase, au plus un bouton. */
export function Opening({ title, lead, crumbs, media, children }: { title: ReactNode; lead?: ReactNode; crumbs?: Crumb[]; media?: Media; children?: ReactNode }) {
  return (
    <section className={`relative -mt-[4.5rem] overflow-hidden bg-night text-cream ${media ? 'flex min-h-[38rem] items-end [height:92svh] md:items-center' : ''}`}>
      {media && (
        <>
          <LoopVideo media={media} priority />
          <div aria-hidden className="absolute inset-0 bg-night/45" />
        </>
      )}
      <div className={`container-site relative max-w-3xl pb-16 pt-32 md:pb-20 md:pt-40 ${media ? 'text-center' : ''}`}>
        {crumbs && (
          <div className="[&_a]:text-cream/60 [&_a:hover]:text-cream [&_li]:text-cream/60 [&_span]:!text-cream/60">
            <Breadcrumbs items={crumbs} />
          </div>
        )}
        <h1 className="font-heading font-light leading-[1.05] text-cream [font-size:clamp(2.4rem,5.4vw,4.2rem)] [letter-spacing:-0.015em] [&_em]:italic [&_em]:text-gold-light">
          {title}
        </h1>
        {lead && <p className={`mt-5 max-w-xl text-[1.12rem] leading-relaxed text-cream/85 md:text-xl ${media ? 'mx-auto' : ''}`}>{lead}</p>}
        {children && <div className={`mt-8 flex flex-col gap-4 sm:flex-row sm:items-center ${media ? 'justify-center' : ''}`}>{children}</div>}
      </div>
    </section>
  );
}

/** Une section de page : un titre et une colonne de texte. */
export function Part({ title, id, wide, large, children }: { title?: ReactNode; id?: string; wide?: boolean; large?: boolean; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 bg-cream py-14 md:py-20">
      <div className={`container-site ${wide ? 'max-w-4xl' : 'max-w-[44rem]'} ${large ? 'text-[1.125rem]' : 'text-[1.06rem]'} leading-relaxed text-ink-soft`}>
        {title && <h2 className="mb-6 font-heading text-[1.9rem] font-light leading-tight text-ink md:text-[2.3rem]">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

/** Le bouton principal de la page, le seul en or. Un lien vers l'agenda ouvre la réservation. */
export function MainButton({ to, children }: { to: string; children: ReactNode }) {
  const cls = 'inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-night transition-colors hover:bg-gold-light';
  if (to.startsWith('/') && !to.startsWith('//')) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={to} className={cls}>{children}</a>;
}

/** Un lien texte avec une flèche, pour les actions secondaires. */
export function TextLink({ to, children, light, download }: { to: string; children: ReactNode; light?: boolean; download?: boolean }) {
  const cls = `group inline-flex items-center gap-1.5 font-medium underline decoration-1 underline-offset-4 ${light ? 'text-cream decoration-cream/40 hover:decoration-cream' : 'text-ink decoration-ink/30 hover:decoration-ink'}`;
  const inner = <>{children}<ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>;
  if (to.startsWith('/') && !download) return <Link to={to} className={cls}>{inner}</Link>;
  return <a href={to} className={cls} download={download}>{inner}</a>;
}

/** Le numéro de téléphone, en clair. */
export function PhoneLine({ light, big }: { light?: boolean; big?: boolean }) {
  return (
    <a href={SITE.phoneHref} className={`inline-flex items-center gap-2.5 font-heading ${big ? 'text-[1.9rem]' : 'text-[1.3rem]'} ${light ? 'text-cream hover:text-gold-light' : 'text-ink hover:text-gold-dark'}`}>
      <Phone aria-hidden className={big ? 'h-6 w-6' : 'h-5 w-5'} strokeWidth={1.6} /> {SITE.phone}
    </a>
  );
}

/** Une ligne de liste cliquable : titre, détail, et à droite un repère (prix, statut). */
export function Row({ to, title, detail, aside }: { to: string; title: ReactNode; detail?: ReactNode; aside?: ReactNode }) {
  const inner = (
    <>
      <span className="min-w-0 flex-1">
        <span className="block font-heading text-[1.35rem] leading-snug text-ink">{title}</span>
        {detail && <span className="mt-1 block text-ink-soft">{detail}</span>}
      </span>
      {aside && <span className="shrink-0 text-right text-ink">{aside}</span>}
      <ArrowRight aria-hidden className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-ink" />
    </>
  );
  const cls = 'group flex items-center gap-4 border-b border-sand-dark py-5';
  return <li>{to.startsWith('/') ? <Link to={to} className={cls}>{inner}</Link> : <a href={to} className={cls}>{inner}</a>}</li>;
}

/** Une liste numérotée sobre. */
export function Steps({ items }: { items: { title: string; text?: string }[] }) {
  return (
    <ol className="space-y-5">
      {items.map((s, i) => (
        <li key={s.title} className="grid grid-cols-[2rem_1fr] gap-3">
          <span className="font-heading text-[1.35rem] leading-none text-gold-dark">{i + 1}</span>
          <span>
            <span className="block font-medium text-ink">{s.title}</span>
            {s.text && <span className="mt-0.5 block">{s.text}</span>}
          </span>
        </li>
      ))}
    </ol>
  );
}
