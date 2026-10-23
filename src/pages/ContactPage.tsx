import { useEffect, useState, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { BookingCard, IconSquare, Title } from '../components/funnel';
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
  const { search } = useLocation();

  // Préremplissage depuis les liens du site (?profil=…&offre=…).
  useEffect(() => {
    const params = new URLSearchParams(search);
    const p = params.get('profil');
    if (p === 'structure' || p === 'particulier') setProfil(p);
    const o = params.get('offre');
    if (o) setOffre(o);
  }, [search]);

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
      <section className="bg-sand pb-14 pt-10 md:pb-20 md:pt-16">
        <div className="container-site">
          <h1 className="h-display text-center">Prendre <em>rendez-vous</em></h1>
          <p className="mb-8 mt-3 text-center text-ink-muted">Choisissez ce qui vous correspond.</p>
          <BookingCard initial={profil} />
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="container-site">
          <Title>Ou directement</Title>
          <div className="mx-auto mt-7 grid max-w-md grid-cols-2 gap-2.5">
            <a href={SITE.phoneHref} className="flex flex-col items-center gap-2.5 rounded-[22px] border border-sand-dark bg-cream-light px-2.5 py-6 text-center hover:border-ink/40">
              <IconSquare icon={Phone} round />
              <span className="font-semibold">Appeler</span>
              <span className="text-[0.82rem] text-ink-muted">{SITE.phone}</span>
            </a>
            <a href="#formulaire" className="flex flex-col items-center gap-2.5 rounded-[22px] border border-sand-dark bg-cream-light px-2.5 py-6 text-center hover:border-ink/40">
              <IconSquare icon={Mail} round />
              <span className="font-semibold">Écrire</span>
              <span className="text-[0.82rem] text-ink-muted">Réponse sous 48 h</span>
            </a>
          </div>
          <p className="mt-7 flex items-center justify-center gap-2 text-sm text-ink-muted">
            <MapPin aria-hidden className="h-[18px] w-[18px] text-gold-dark" /> J’interviens dans l’Hérault et l’Aveyron
          </p>
        </div>
      </section>

      <section id="formulaire" className="bg-cream pb-16 md:pb-24">
        <div className="container-site">
          <Title className="mb-3">Être rappelé, ou m’écrire</Title>
          <p className="mx-auto mb-8 max-w-md text-center text-ink-muted">Structure : je vous rappelle sous 48 heures pour 20 minutes, gratuites. Particulier : je vous réponds sous 48 heures.</p>
          <div className="mx-auto max-w-2xl">
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
                      <label key={p} className={`cursor-pointer rounded-xl border px-4 py-3 text-center transition-colors ${profil === p ? 'border-ink bg-night text-cream' : 'border-sand-dark bg-cream-light text-ink hover:border-ink/50'}`}>
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
                      <label key={c} className="cursor-pointer rounded-full border border-sand-dark bg-cream-light px-4 py-2 text-sm text-ink transition-colors has-[:checked]:border-ink has-[:checked]:bg-night has-[:checked]:text-cream">
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
                  className="w-full rounded-full bg-night px-6 py-3.5 font-medium text-cream transition-colors hover:bg-night/90 disabled:opacity-60 sm:w-auto"
                >
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer mon message'}
                </button>
              </form>
            )}
          </div>

          </div>
        </div>
      </section>
    </>
  );
}
