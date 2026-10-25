import { Link, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './Header';
import { SITE } from '../content/site';
import { conferences, particuliers, programmes } from '../content/offres';
import { espaceOf } from '../lib/espace';

function Col({ title, desktop, children }: { title: string; desktop?: boolean; children: ReactNode }) {
  return (
    <div className={desktop ? 'hidden md:block' : ''}>
      <p className="mb-4 font-heading text-lg">{title}</p>
      <ul className="space-y-2.5 text-[0.95rem] text-cream/75">{children}</ul>
    </div>
  );
}

export default function Footer() {
  const espace = espaceOf(useLocation().pathname);
  const a = 'transition-colors hover:text-cream';
  return (
    <footer className="bg-night-deep text-cream">
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

        {espace !== 'particuliers' && (
          <Col title={espace === 'structures' ? 'Espace structures' : 'Structures'}>
            <li><Link className={a} to="/structures">L’offre pour les structures</Link></li>
            <li><a className={a} href="/structures#actions">Les actions</a></li>
            <li><Link className={a} to="/structures/dossier">Dossier de financement</Link></li>
            <li><a className={a} href={SITE.plaquette} download>Plaquette (PDF)</a></li>
          </Col>
        )}
        {espace === 'structures' && (
          <Col title="Les actions" desktop>
            {[...conferences, ...programmes].map((o) => (
              <li key={o.slug}><Link className={a} to={o.path}>{o.title.replace(/[«»]/g, '').trim()}</Link></li>
            ))}
          </Col>
        )}
        {espace !== 'structures' && (
          <Col title="Pour vous ou un proche">
            <li><Link className={a} to="/particuliers">Par où commencer</Link></li>
            <li><a className={a} href="/particuliers#gratuits">Ateliers gratuits près de chez vous</a></li>
            <li><a className={a} href="/particuliers#formules">Tarifs</a></li>
          </Col>
        )}
        {espace === 'particuliers' && (
          <Col title="Ateliers et séances" desktop>
            {particuliers.map((p) => (
              <li key={p.slug}><Link className={a} to={p.path}>{p.title}</Link></li>
            ))}
          </Col>
        )}
        {espace !== 'commun' && (
          <Col title={espace === 'structures' ? 'Vous êtes un particulier ?' : 'Vous êtes une structure ?'}>
            <li>
              <Link className={a} to={espace === 'structures' ? '/particuliers' : '/structures'}>
                {espace === 'structures' ? 'Ateliers pour vous ou un proche' : 'L’offre pour les structures'}
              </Link>
            </li>
          </Col>
        )}
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
