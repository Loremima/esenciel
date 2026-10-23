import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { PageHero, Section } from '../components/ui';
import { SITE } from '../content/site';
import { ALL_STRUCTURE_OFFERS, particuliers } from '../content/offres';
import { Seo, breadcrumbLd } from '../lib/head';

type Profil = 'structure' | 'particulier';
type Status = 'idle' | 'sending' | 'sent' | 'error';

// Le formulaire est envoyé à la fonction /api/contact (dossier api/), qui
// transmet le message par e-mail via Resend.
export default function ContactPage() {
  const [profil, setProfil] = useState<Profil>('structure');
  const [offre, setOffre] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  // Préremplissage depuis les liens « Demander un devis » (?profil=…&offre=…).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get('profil');
    if (p === 'structure' || p === 'particulier') setProfil(p);
    const o = params.get('offre');
    if (o) setOffre(o);
  }, []);

  const offres = profil === 'structure' ? ALL_STRUCTURE_OFFERS : particuliers;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];
  const label = 'mb-1.5 block text-sm font-medium text-ink';

  return (
    <>
      <Seo
        title="Contact et devis | Véronique Carrié, EsenCiel"
        description="Contactez Véronique Carrié pour une conférence, un atelier ou un cycle de prévention, ou pour une séance individuelle. Réponse sous 48 heures."
        path="/contact"
        jsonLd={[breadcrumbLd(crumbs)]}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Contact"
        title="Parlons de votre projet"
        lead="Structure : je vous rappelle sous 48 heures pour un échange de 20 minutes, gratuit et sans engagement. Particulier : je vous réponds, moi aussi, sous 48 heures."
      />

      <Section tone="white" className="!pt-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="card p-6 md:p-9">
            {status === 'sent' ? (
              <div role="status" className="py-10 text-center">
                <CheckCircle2 aria-hidden className="mx-auto h-12 w-12 text-sage" />
                <h2 className="mt-4 font-heading text-3xl">Merci, votre message est bien parti.</h2>
                <p className="mt-3 text-ink-soft">Je vous réponds sous 48 heures, par e-mail ou par téléphone.</p>
              </div>
            ) : (
              <form name="contact" method="POST" action="/api/contact" onSubmit={onSubmit} className="space-y-5">
                <p hidden>
                  <label>
                    Ne pas remplir : <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <fieldset>
                  <legend className={label}>Vous êtes</legend>
                  <div className="grid grid-cols-2 gap-3">
                    {(['structure', 'particulier'] as Profil[]).map((p) => (
                      <label key={p} className={`cursor-pointer rounded-xl border px-4 py-3 text-center transition-colors ${profil === p ? 'border-ink bg-ink text-cream' : 'border-sand-dark bg-cream-light text-ink hover:border-ink/50'}`}>
                        <input type="radio" name="profil" value={p} checked={profil === p} onChange={() => { setProfil(p); setOffre(''); }} className="sr-only" />
                        {p === 'structure' ? 'Une structure' : 'Un particulier'}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className={label}>Nom et prénom</label>
                    <input id="nom" name="nom" required autoComplete="name" className="field" />
                  </div>
                  <div hidden={profil !== 'structure'}>
                    <label htmlFor="structure" className={label}>Structure et fonction</label>
                    <input id="structure" name="structure" autoComplete="organization" placeholder="ex. CCAS, coordinatrice prévention" className="field" />
                  </div>
                  <div>
                    <label htmlFor="email" className={label}>E-mail</label>
                    <input id="email" name="email" type="email" required autoComplete="email" className="field" />
                  </div>
                  <div>
                    <label htmlFor="telephone" className={label}>Téléphone <span className="font-normal text-ink-muted">(facultatif)</span></label>
                    <input id="telephone" name="telephone" type="tel" autoComplete="tel" className="field" />
                  </div>
                </div>

                <div hidden={profil !== 'structure'}>
                  <span className={label}>Pour l’appel de 20 minutes, quand vous joindre ?</span>
                  <div className="flex flex-wrap gap-2">
                    {['Le matin', 'L’après-midi', 'Peu importe'].map((c) => (
                      <label key={c} className="cursor-pointer rounded-full border border-sand-dark bg-cream-light px-4 py-2 text-sm text-ink transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-cream">
                        <input type="radio" name="creneau" value={c} className="sr-only" />
                        {c}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="offre" className={label}>Ce qui vous intéresse</label>
                  <select id="offre" name="offre" value={offre} onChange={(e) => setOffre(e.target.value)} className="field">
                    <option value="">Je ne sais pas encore</option>
                    {offres.map((o) => (
                      <option key={o.slug} value={o.slug}>{o.title.replace(/[«»]/g, '').trim()}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={label}>Votre message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="field"
                    placeholder={profil === 'structure' ? 'Votre public, le nombre de participants, vos dates, votre piste de financement…' : 'Ce que vous recherchez, vos disponibilités…'}
                  />
                  <p className="mt-1.5 text-sm text-ink-muted">Inutile de détailler votre santé ici : nous en parlerons de vive voix si besoin.</p>
                </div>

                <label className="flex gap-3 text-sm text-ink-soft">
                  <input type="checkbox" name="consentement" value="oui" required className="mt-1 h-4 w-4 shrink-0 accent-ink" />
                  <span>
                    J’accepte que mes informations soient utilisées pour répondre à ma demande, comme décrit dans la{' '}
                    <Link to="/confidentialite" className="link-underline">politique de confidentialité</Link>.
                  </span>
                </label>

                {status === 'error' && (
                  <p role="alert" className="rounded-xl bg-clay-light px-4 py-3 text-sm text-ink">
                    Le message n’a pas pu partir. Écrivez-moi directement à{' '}
                    <a href={`mailto:${SITE.email}`} className="link-underline">{SITE.email}</a> ou appelez le{' '}
                    <a href={SITE.phoneHref} className="link-underline">{SITE.phone}</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-full bg-ink px-6 py-3.5 font-medium text-cream transition-colors hover:bg-ink-soft disabled:opacity-60 sm:w-auto"
                >
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer mon message'}
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl">En direct</h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <a href={SITE.phoneHref} className="flex items-center gap-4 hover:text-gold-dark">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-light/30 text-gold-dark"><Phone aria-hidden className="h-5 w-5" /></span>
                    <span className="text-lg">{SITE.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 break-all hover:text-gold-dark">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-light/30 text-gold-dark"><Mail aria-hidden className="h-5 w-5" /></span>
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-light/30 text-gold-dark"><MapPin aria-hidden className="h-5 w-5" /></span>
                  J’interviens dans l’Hérault et l’Aveyron
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-sand p-6">
              <CalendarDays aria-hidden className="h-6 w-6 text-gold-dark" />
              <h2 className="mt-3 font-heading text-xl">Particuliers : réservez en ligne</h2>
              <p className="mt-2 text-ink-soft">Séances individuelles et pré-inscriptions aux cycles se réservent directement dans mon agenda.</p>
              <a href={SITE.booking} target="_blank" rel="noopener noreferrer" className="link-underline mt-4 inline-block font-medium">Ouvrir l’agenda</a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
