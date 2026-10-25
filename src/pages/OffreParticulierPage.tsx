import type { OffreParticulier } from '../content/offres';
import { NotifyForm } from '../components/NotifyForm';
import { MainButton, Opening, Part, PhoneLine, Steps, TextLink } from '../components/calm';
import { Seo, breadcrumbLd, serviceLd } from '../lib/head';

// Une fiche particulier répond à une question : « Est-ce pour moi, quand, combien ? »
// La réservation en ligne passe d'abord ; la liste d'attente n'est qu'un repli.

export default function OffreParticulierPage({ offre }: { offre: OffreParticulier }) {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Pour vous ou un proche', path: '/particuliers' },
    { name: offre.title, path: offre.path },
  ];
  const facts = [...offre.facts, { label: 'Tarif', value: offre.price }];

  return (
    <>
      <Seo
        title={offre.seo.title}
        description={offre.seo.description}
        path={offre.path}
        jsonLd={[breadcrumbLd(crumbs), serviceLd({ name: offre.title, description: offre.definition, path: offre.path, price: offre.price })]}
      />

      <Opening crumbs={crumbs} title={offre.title} lead={`${offre.short} ${offre.price}.`}>
        <MainButton to={offre.booking}>{offre.bookingLabel}</MainButton>
        <PhoneLine light />
      </Opening>

      <Part large title="Pour qui ?">
        <p>{offre.pourQui}</p>
        <p className="mt-4">{offre.definition}</p>
      </Part>

      <Part large title="Comment ça se passe">
        <Steps items={offre.deroule} />
        <dl className="mt-8 divide-y divide-sand-dark border-y border-sand-dark text-[1rem]">
          {facts.map((f) => (
            <div key={f.label} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="font-medium text-ink">{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
        {offre.note && <p className="mt-6 text-[1rem] text-ink-muted">{offre.note}</p>}
      </Part>

      <Part large id="dates" title="Réserver">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <MainButton to={offre.booking}>{offre.bookingLabel}</MainButton>
          <PhoneLine />
        </div>
        {offre.followUp && <p className="mt-5"><TextLink to={offre.followUp.href}>{offre.followUp.label}</TextLink></p>}
        {offre.waitlist && (
          <div className="mt-10 max-w-md">
            <p className="font-medium text-ink">Pas encore de date qui vous convient ?</p>
            <p className="mt-1 mb-4">Laissez votre e-mail : je vous préviens dès qu’une nouvelle session ouvre.</p>
            <NotifyForm light offre={offre.slug} title={offre.title} />
          </div>
        )}
        <p className="mt-10"><TextLink to="/particuliers">Tous les ateliers</TextLink></p>
      </Part>
    </>
  );
}
