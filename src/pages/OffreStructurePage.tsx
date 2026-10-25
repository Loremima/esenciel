import { FIRST_MEETING } from '../content/site';
import type { OffreStructure } from '../content/offres';
import { LIVRABLES, actionOf } from '../content/actions';
import { MainButton, Opening, Part, PhoneLine, Steps, TextLink } from '../components/calm';
import { Seo, breadcrumbLd, serviceLd } from '../lib/head';

// Une fiche action répond à une question : « Est-ce la bonne action pour mon public ? »

export default function OffreStructurePage({ offre }: { offre: OffreStructure }) {
  const name = offre.title.replace(/[«»]/g, '').trim();
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Structures', path: '/structures' },
    { name, path: offre.path },
  ];
  const a = actionOf(offre.slug);
  const cps = offre.facts.find((f) => f.label === 'Compétences psychosociales')?.value;
  const rdv = FIRST_MEETING.structure.href;

  return (
    <>
      <Seo
        title={offre.seo.title}
        description={offre.seo.description}
        path={offre.path}
        jsonLd={[
          breadcrumbLd(crumbs),
          serviceLd({ name, description: offre.promise, path: offre.path, audience: offre.audience ?? 'Seniors, aidants, professionnels', price: 'Sur devis' }),
        ]}
      />

      <Opening crumbs={crumbs} title={offre.title} lead={offre.promise}>
        <MainButton to={rdv}>Planifier un échange de 20 min</MainButton>
      </Opening>

      {a && (
        <section className="border-b border-sand-dark bg-cream">
          <dl className="container-site grid max-w-[44rem] gap-4 py-8 text-[0.98rem] sm:grid-cols-3">
            <div><dt className="text-ink-muted">Public</dt><dd className="mt-1 text-ink">{a.publicCible}</dd></div>
            <div><dt className="text-ink-muted">Format</dt><dd className="mt-1 text-ink">{a.type}, {a.format}</dd></div>
            <div><dt className="text-ink-muted">Repère de prix</dt><dd className="mt-1 text-ink">{a.prix}</dd></div>
          </dl>
        </section>
      )}

      <Part title="Ce que les participants y gagnent">
        <ul className="space-y-3">
          {offre.objectifs.slice(0, 3).map((o) => (
            <li key={o} className="border-l-2 border-gold pl-4">{o}</li>
          ))}
        </ul>
      </Part>

      <Part title="Le déroulé">
        <Steps items={offre.deroule} />
        {offre.declinaisons && (
          <>
            <p className="mt-8 font-medium text-ink">Une version pour chaque public</p>
            <dl className="mt-3 space-y-2">
              {offre.declinaisons.map((d) => (
                <div key={d.label}><dt className="inline font-medium text-ink">{d.label} : </dt><dd className="inline">{d.value}</dd></div>
              ))}
            </dl>
          </>
        )}
        {offre.note && <p className="mt-8 text-[0.98rem] text-ink-muted">{offre.note}</p>}
      </Part>

      <Part title="Évaluation et documents remis">
        <ul className="list-disc space-y-2 pl-5">
          {LIVRABLES.map((l) => <li key={l}>{l}</li>)}
        </ul>
        {cps && (
          <>
            <p className="mt-6 font-medium text-ink">Compétences psychosociales travaillées</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {cps.split(/\.\s+/).map((c) => c.replace(/\.+$/, '')).filter(Boolean).map((c) => <li key={c}>{c}</li>)}
            </ul>
          </>
        )}
      </Part>

      <Part id="rdv" title="Cette action vous intéresse ?">
        <p>On en parle 20 minutes : votre public, vos dates, votre financement. Je vous envoie ensuite le devis et la fiche-action.</p>
        <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <MainButton to={rdv}>Planifier un échange de 20 min</MainButton>
          <PhoneLine />
        </div>
        <p className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-8">
          <TextLink to={`/contact?profil=structure&offre=${offre.slug}`}>Recevoir la fiche-action par e-mail</TextLink>
          <TextLink to="/structures#actions">Toutes les actions</TextLink>
        </p>
      </Part>
    </>
  );
}
