import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button, CtaBand, FactList, PageHero, Section, accentClasses } from '../components/ui';
import { CREDENTIALS } from '../content/site';
import { ALL_STRUCTURE_OFFERS, type OffreStructure } from '../content/offres';
import { Seo, breadcrumbLd, serviceLd } from '../lib/head';

export default function OffreStructurePage({ offre }: { offre: OffreStructure }) {
  const a = accentClasses[offre.accent];
  const parent = offre.kind === 'conference'
    ? { name: 'Conférences', path: '/conferences' }
    : { name: 'Structures & financeurs', path: '/structures' };
  const crumbs = [{ name: 'Accueil', path: '/' }, parent, { name: offre.kind === 'conference' ? offre.title.replace(/[«»]/g, '').trim() : offre.title, path: offre.path }];
  const others = ALL_STRUCTURE_OFFERS.filter((o) => o.slug !== offre.slug).slice(0, 3);
  const contactTo = `/contact?profil=structure&offre=${offre.slug}`;

  return (
    <>
      <Seo
        title={offre.seo.title}
        description={offre.seo.description}
        path={offre.path}
        jsonLd={[
          breadcrumbLd(crumbs),
          serviceLd({ name: offre.title.replace(/[«»]/g, '').trim(), description: offre.promise, path: offre.path, audience: offre.audience ?? 'Seniors, aidants, professionnels', price: 'Sur devis' }),
        ]}
      />
      <PageHero crumbs={crumbs} eyebrow={offre.eyebrow} title={offre.title} lead={offre.promise}>
        <Button to={contactTo} arrow>Demander un devis</Button>
        <Button to="/structures" variant="secondary">Toute l’offre structures</Button>
      </PageHero>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <h2 className="h-section">En pratique</h2>
            <div className="mt-8">
              <FactList facts={offre.facts} />
            </div>

            <h2 className="h-section mt-16">Objectifs</h2>
            <ul className="mt-6 space-y-4">
              {offre.objectifs.map((o) => (
                <li key={o} className="flex gap-4 text-ink-soft">
                  <span aria-hidden className={`mt-2.5 h-2 w-2 shrink-0 rounded-full ${a.dot}`} />
                  {o}
                </li>
              ))}
            </ul>

            <h2 className="h-section mt-16">Déroulé</h2>
            <ol className="mt-6 space-y-3">
              {offre.deroule.map((s, i) => (
                <li key={s.title} className="flex gap-4 rounded-xl border border-sand-dark/70 bg-cream px-5 py-4">
                  <span className={`font-heading text-xl ${a.text}`}>{i + 1}</span>
                  <div>
                    <p className="font-medium text-ink">{s.title}</p>
                    {s.text && <p className="text-ink-soft">{s.text}</p>}
                  </div>
                </li>
              ))}
            </ol>
            {offre.note && <p className="mt-6 text-ink-soft">{offre.note}</p>}

            {offre.declinaisons && (
              <>
                <h2 className="h-section mt-16">Adaptée à votre public</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {offre.declinaisons.map((d) => (
                    <div key={d.label} className={`rounded-2xl ${a.bg} p-5`}>
                      <p className={`text-sm font-semibold uppercase tracking-wider ${a.text}`}>{d.label}</p>
                      <p className="mt-2 text-ink-soft">{d.value}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <p className="eyebrow">L’intervenante</p>
              <div className="mt-4 flex items-center gap-4">
                <img src="/images/veronique-480.webp" alt="Véronique Carrié" width={64} height={80} loading="lazy" className="h-16 w-16 rounded-full object-cover object-top" />
                <p className="font-heading text-xl">Véronique Carrié</p>
              </div>
              <ul className="mt-4 space-y-2 text-[0.95rem] text-ink-soft">
                <li>{CREDENTIALS.short}</li>
                <li>{CREDENTIALS.certifications}</li>
                <li>{CREDENTIALS.health}</li>
              </ul>
              <Link to="/qui-suis-je" className="link-underline mt-4 inline-block text-sm font-medium">Mon parcours</Link>
            </div>
            <div className="rounded-2xl bg-ink p-6 text-cream">
              <p className="font-heading text-xl">Un projet chez vous ?</p>
              <p className="mt-2 text-cream/80">Je vous envoie le programme détaillé, un devis et la fiche-action pour votre dossier de financement.</p>
              <Button to={contactTo} variant="light" className="mt-5 w-full" arrow>Demander un devis</Button>
            </div>
          </aside>
        </div>
      </Section>

      <Section>
        <h2 className="h-section mb-8">À découvrir aussi</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to={o.path} className="card group flex flex-col p-6 transition-shadow hover:shadow-lg">
              <span className="eyebrow">{o.eyebrow}</span>
              <p className="mt-3 font-heading text-xl leading-snug">{o.title}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                Voir <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand title="Construisons votre action" text="Dites-moi votre public et vos dates : je vous réponds sous 48 heures avec une proposition." primary={{ label: 'Demander un devis', to: contactTo }} />
    </>
  );
}
