import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button, CtaBand, PageHero, Section, SectionHeader } from '../components/ui';
import { SITE } from '../content/site';
import { particuliers, type OffreParticulier } from '../content/offres';
import { Seo, breadcrumbLd } from '../lib/head';

const groupes: { id: OffreParticulier['category']; title: string; intro: string }[] = [
  { id: 'cycle', title: 'Cycles en groupe', intro: 'Des programmes structurés de 8 à 15 séances, issus de méthodes évaluées par la recherche.' },
  { id: 'individuel', title: 'Accompagnement individuel', intro: 'À votre rythme, en présentiel ou à distance.' },
  { id: 'atelier', title: 'Atelier', intro: 'Une demi-journée en petit groupe.' },
];

function OffreCard({ o }: { o: OffreParticulier }) {
  return (
    <article className="card flex flex-col overflow-hidden">
      <img src={o.image.src} alt={o.image.alt} width={600} height={400} loading="lazy" className="h-44 w-full object-cover" />
      <div className="flex flex-1 flex-col p-6">
        {o.method && <p className="eyebrow">{o.method}</p>}
        <h3 className="mt-2 text-2xl font-medium leading-snug">
          <Link to={o.path} className="hover:text-gold-dark">{o.title}</Link>
        </h3>
        <p className="mt-3 flex-1 text-ink-soft">{o.short}</p>
        <p className="mt-4 text-sm text-ink-muted">{o.facts[0].value}</p>
        <p className="mt-1 font-semibold text-ink">{o.price}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Button href={o.booking} className="!px-5 !py-2.5 text-sm">{o.bookingLabel}</Button>
          <Link to={o.path} className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-gold-dark">
            En savoir plus <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ParticuliersPage() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Particuliers', path: '/particuliers' },
  ];
  return (
    <>
      <Seo
        title="Cycles MBSR, MBCT, MBCAS et accompagnement individuel | Véronique Carrié"
        description="Gestion du stress, prévention de la rechute dépressive, bien vivre son avancée en âge, séances individuelles et Jeu du Tao. Hérault, Aveyron et à distance."
        path="/particuliers"
        jsonLd={[breadcrumbLd(crumbs)]}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Particuliers"
        title="Les mêmes outils, pour vous"
        lead="Mieux gérer le stress, prévenir la rechute, accueillir l’avancée en âge ou changer une habitude : des cycles en groupe et des séances individuelles, avec réservation en ligne."
      >
        <Button href={SITE.booking} arrow>Voir l’agenda et réserver</Button>
        <Button to="/contact?profil=particulier" variant="secondary">Poser une question</Button>
      </PageHero>

      {groupes.map((g, i) => (
        <Section key={g.id} tone={i % 2 === 0 ? 'white' : 'cream'} id={g.id}>
          <SectionHeader title={g.title} intro={g.intro} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {particuliers.filter((o) => o.category === g.id).map((o) => (
              <OffreCard key={o.slug} o={o} />
            ))}
          </div>
        </Section>
      ))}

      <Section tone="sand">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="h-section">Les prochaines dates</h2>
          <p className="lead mt-4">
            Les cycles démarrent dès qu’un groupe est complet. Pré-inscrivez-vous en ligne ou appelez-moi au{' '}
            <a href={SITE.phoneHref} className="link-underline whitespace-nowrap">{SITE.phone}</a> : je vous préviens dès qu’une date est fixée.
          </p>
          <p className="mt-6 text-sm text-ink-muted">
            Mes séances relèvent de la prévention et de l’éducation à la santé. Elles ne remplacent pas un suivi médical ou psychologique.
          </p>
        </div>
      </Section>

      <CtaBand title="Vous hésitez entre deux formats ?" text="Expliquez-moi ce que vous traversez : je vous dirai honnêtement ce qui peut vous convenir." primary={{ label: 'Me contacter', to: '/contact?profil=particulier' }} />
    </>
  );
}
