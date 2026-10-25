import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

/** Liste d'attente d'un cycle : prénom + e-mail, envoyé au formulaire de contact. */
export function NotifyForm({ offre, title, message }: { offre: string; title: string; message?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, profil: 'particulier', offre, message: message ?? `Liste d’attente : prévenez-moi des prochaines dates du cycle ${title}.` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return <p role="status" className="rounded-xl bg-cream/10 px-4 py-3 text-cream">C’est noté. Je vous écris dès que les dates sont ouvertes.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <label className="sr-only" htmlFor={`nom-${offre}`}>Prénom</label>
      <input id={`nom-${offre}`} name="nom" required autoComplete="given-name" placeholder="Prénom" className="field text-ink" />
      <label className="sr-only" htmlFor={`email-${offre}`}>E-mail</label>
      <input id={`email-${offre}`} name="email" type="email" required autoComplete="email" placeholder="E-mail" className="field text-ink" />
      <label className="flex gap-2.5 text-xs text-cream/75">
        <input type="checkbox" name="consentement" value="oui" required className="mt-0.5 h-4 w-4 shrink-0 accent-gold" />
        <span>
          J’accepte d’être recontacté·e à ce sujet (<Link to="/confidentialite" className="underline">confidentialité</Link>).
        </span>
      </label>
      {status === 'error' && <p role="alert" className="text-sm text-gold-light">L’envoi n’a pas marché. Appelez-moi ou réessayez.</p>}
      <button type="submit" disabled={status === 'sending'} className="w-full rounded-full bg-cream px-6 py-3 font-medium text-ink hover:bg-cream-light disabled:opacity-60">
        {status === 'sending' ? 'Envoi…' : 'Prévenez-moi des dates'}
      </button>
    </form>
  );
}
