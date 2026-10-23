import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './Header';
import { SITE } from '../content/site';
import { conferences, particuliers, programmes } from '../content/offres';

export default function Footer() {
  const col = 'space-y-2.5 text-[0.95rem] text-cream/75';
  const a = 'transition-colors hover:text-cream';
  return (
    <footer className="bg-ink text-cream">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs font-heading text-lg leading-snug text-cream/90">{SITE.tagline}</p>
          <ul className="mt-6 space-y-3 text-[0.95rem] text-cream/80">
            <li>
              <a href={SITE.phoneHref} className={`inline-flex items-center gap-2.5 ${a}`}>
                <Phone aria-hidden className="h-4 w-4" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className={`inline-flex items-center gap-2.5 break-all ${a}`}>
                <Mail aria-hidden className="h-4 w-4 shrink-0" /> {SITE.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5">
              <MapPin aria-hidden className="h-4 w-4" /> {SITE.zone}
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-heading text-lg">Structures</p>
          <ul className={col}>
            <li><Link className={a} to="/structures">Structures & financeurs</Link></li>
            {programmes.map((p) => (
              <li key={p.slug}><Link className={a} to={p.path}>Programme {p.audience?.toLowerCase()}</Link></li>
            ))}
            <li><a className={a} href={SITE.plaquette} download>Plaquette (PDF)</a></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-heading text-lg">Conférences</p>
          <ul className={col}>
            {conferences.map((c) => (
              <li key={c.slug}><Link className={a} to={c.path}>{c.title.replace(/[«»]/g, '').trim()}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-heading text-lg">Particuliers</p>
          <ul className={col}>
            {particuliers.map((p) => (
              <li key={p.slug}><Link className={a} to={p.path}>{p.title}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-site flex flex-col gap-4 py-6 text-sm text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} EsenCiel, Véronique Carrié</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link className={a} to="/qui-suis-je">Qui suis-je</Link></li>
            <li><Link className={a} to="/contact">Contact</Link></li>
            <li><Link className={a} to="/mentions-legales">Mentions légales</Link></li>
            <li><Link className={a} to="/confidentialite">Confidentialité</Link></li>
            <li><Link className={a} to="/cgv">Conditions générales de vente</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
