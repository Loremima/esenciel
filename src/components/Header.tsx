import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV } from '../content/site';
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
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

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

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-[0.95rem] transition-colors ${overlay ? 'text-cream/85 hover:text-cream' : `hover:text-ink ${isActive ? 'text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gold' : 'text-ink-soft'}`}`;

  return (
    <header className={`sticky top-0 z-40 border-b transition-colors ${overlay ? 'border-transparent bg-transparent' : scrolled || open ? 'border-sand-dark/80 bg-cream/95 backdrop-blur' : 'border-transparent bg-cream'}`}>
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-night focus:px-4 focus:py-2 focus:text-cream">
        Aller au contenu
      </a>
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
        <Link to="/" aria-label="EsenCiel, accueil">
          <Logo light={overlay} />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 md:flex">
          {NAV.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkCls}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className={`rounded-full px-5 py-2.5 text-[0.95rem] font-semibold transition-colors ${overlay ? 'bg-cream text-night hover:bg-cream-light' : 'bg-night text-cream hover:bg-night/90'}`}>
            Prendre rendez-vous
          </Link>
        </nav>

        <button
          type="button"
          className={`grid h-11 w-11 place-items-center rounded-full border md:hidden ${overlay ? 'border-cream/40 text-cream' : 'border-sand-dark text-ink'}`}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
        </button>
      </div>

      <div id="menu-mobile" hidden={!open} className="border-t border-sand-dark/80 bg-cream md:hidden">
        <nav aria-label="Navigation mobile" className="container-site flex flex-col py-4">
          {NAV.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `border-b border-sand-dark/60 py-4 text-center font-heading text-2xl ${isActive ? 'text-gold-dark' : 'text-ink'}`}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="mt-5 rounded-full bg-night px-5 py-4 text-center font-semibold text-cream">
            Prendre rendez-vous
          </Link>
        </nav>
      </div>
    </header>
  );
}
