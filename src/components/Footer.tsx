import { Link } from 'react-router-dom';
import { Logo } from './Header';
import { SITE } from '../content/site';

// Le pied de page, le même partout : qui, comment me joindre, les rubriques, les mentions.
export default function Footer() {
  const a = 'transition-colors hover:text-cream';
  return (
    <footer className="bg-night-deep text-cream">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs font-heading text-lg leading-snug text-cream/90">{SITE.tagline}</p>
        </div>
        <ul className="space-y-2.5 text-[0.98rem] text-cream/75">
          <li><a href={SITE.phoneHref} className={a}>{SITE.phone}</a></li>
          <li><a href={`mailto:${SITE.email}`} className={`break-all ${a}`}>{SITE.email}</a></li>
          <li>{SITE.zone}, et à distance</li>
        </ul>
        <ul className="space-y-2.5 text-[0.98rem] text-cream/75">
          <li><Link className={a} to="/structures">Structures</Link></li>
          <li><Link className={a} to="/structures/dossier">Dossier de financement</Link></li>
          <li><Link className={a} to="/particuliers">Pour vous ou un proche</Link></li>
          <li><Link className={a} to="/qui-suis-je">Qui suis-je</Link></li>
          <li><Link className={a} to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-site flex flex-col gap-3 py-6 text-sm text-cream/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} EsenCiel, Véronique Carrié</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link className={a} to="/mentions-legales">Mentions légales</Link></li>
            <li><Link className={a} to="/confidentialite">Confidentialité</Link></li>
            <li><Link className={a} to="/cgv">Conditions générales de vente</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
