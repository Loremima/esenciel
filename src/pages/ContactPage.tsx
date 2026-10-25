import { useEffect, useState, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { MainButton, Opening, Part, PhoneLine } from '../components/calm';
import { FIRST_MEETING, SITE } from '../content/site';
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
  const label = 'mb-1.5 block text-[0.98rem] font-medium text-ink';

  return (
    <>
      <Seo
        title="Contact et devis | Véronique Carrié, EsenCiel"
        description="Contactez Véronique Carrié pour une conférence, un atelier ou un cycle de prévention, ou pour une séance individuelle. Réponse sous 48 heures."
        path="/contact"
        jsonLd={[breadcrumbLd(crumbs)]}
      />
      <Opening title="Me contacter" lead="Le plus simple est de m’appeler. Sinon, écrivez-moi : je réponds sous 48 heures." />

      <Part title="Par téléphone">
        <PhoneLine big />
        <p className="mt-3">Si je ne décroche pas, laissez un message : je vous rappelle.</p>
        <p className="mt-2 text-ink-muted">{SITE.zone}, et à distance.</p>
        {profil === 'structure' && (
          <div className="mt-8 border-t border-sand-dark pt-8">
            <p className="font-medium text-ink">Vous êtes une structure ?</p>
            <p className="mt-1 mb-5">Réservez directement un échange de 20 minutes, gratuit.</p>
            <MainButton to={FIRST_MEETING.structure.href}>Planifier un échange de 20 min</MainButton>
          </div>
        )}
      </Part>

      <Part id="formulaire" title="Par écrit">
          <div>
          <div>
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

                <label className="flex gap-3 text-[0.95rem] text-ink-soft">
                  <input type="checkbox" name="consentement" value="oui" required className="mt-0.5 h-5 w-5 shrink-0 accent-ink" />
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
                  className="w-full rounded-full bg-gold px-7 py-4 font-semibold text-night transition-colors hover:bg-gold-light disabled:opacity-60 sm:w-auto"
                >
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer mon message'}
                </button>
              </form>
            )}
          </div>
          </div>
      </Part>
    </>
  );
}
