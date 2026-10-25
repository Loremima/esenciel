import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FIRST_MEETING, NAV, SITE } from '../content/site';
import { VIDEO_HERO_ROUTES } from '../routes';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src={light ? '/images/logo-clair-96.png' : '/images/logo-sombre-96.png'}
        alt=""
        width={44}
        height={39}
        className="h-[39px] w-[44px]"
      />
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-[1.5rem] ${light ? 'text-cream' : 'text-ink'}`}>EsenCiel</span>
        <span className={`mt-1 text-[0.7rem] uppercase tracking-[0.2em] ${light ? 'text-cream/70' : 'text-ink-muted'}`}>Véronique Carrié</span>
      </span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();
  // Une rubrique reste active sur toutes ses pages (une fiche action allume « Structures »).
  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);
  // Le bouton principal ouvre la réservation sutempo : séance découverte côté particuliers, appel de 20 min sinon.
  const perso = pathname.startsWith('/particuliers');
  const CtaLink = ({ className }: { className: string }) => (
    <a href={perso ? SITE.decouverte : FIRST_MEETING.structure.href} className={className}>{perso ? 'Séance découverte' : 'Réserver 20 min'}</a>
  );

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Au-dessus d'une vidéo, l'en-tête est transparent tant qu'on n'a pas défilé.
  const overlay = VIDEO_HERO_ROUTES.has(pathname.replace(/\/$/, '') || '/') && !scrolled && !open;

  const linkCls = (active: boolean) =>
    `relative py-2 text-[0.95rem] transition-colors ${overlay ? 'text-cream/85 hover:text-cream' : `hover:text-ink ${active ? 'text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gold' : 'text-ink-soft'}`}`;

  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-night focus:px-4 focus:py-2 focus:text-cream">
        Aller au contenu
      </a>
      <div className={`mx-auto flex h-[3.75rem] max-w-6xl items-center justify-between gap-6 rounded-full pl-4 pr-2 transition-colors sm:pl-6 ${overlay ? 'glass' : 'glass-light'}`}>
        <Link to="/" title="Accueil">
          <Logo light={overlay} />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-6 lg:flex">
          {NAV.map((l) => (
            <Link key={l.to} to={l.to} className={linkCls(isActive(l.to))}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className={linkCls(isActive('/contact'))}>Contact</Link>
          <CtaLink className="rounded-full bg-gold px-5 py-2.5 text-[0.95rem] font-semibold text-night transition-colors hover:bg-gold-light" />
        </nav>

        <button
          type="button"
          className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${overlay ? 'bg-white/10 text-cream' : 'bg-ink/5 text-ink'}`}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
        </button>
      </div>

      <div id="menu-mobile" hidden={!open} className="glass-light mx-auto mt-2 max-w-6xl rounded-3xl lg:hidden">
        <nav aria-label="Navigation mobile" className="flex flex-col px-5 py-4">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`border-b border-sand-dark/60 py-4 text-center font-heading text-2xl ${isActive(l.to) ? 'text-gold-dark' : 'text-ink'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="border-b border-sand-dark/60 py-4 text-center font-heading text-2xl text-ink">Contact</Link>
          <CtaLink className="mt-5 rounded-full bg-gold px-5 py-4 text-center font-semibold text-night" />
        </nav>
      </div>
    </header>
  );
}
