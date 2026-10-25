import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { particuliers, type OffreParticulier } from '../content/offres';
import { BookingSection, HeroVideo, LoopVideo, Title } from '../components/funnel';
import { MEDIA } from '../content/media';
import { Seo, breadcrumbLd } from '../lib/head';

// Noms courts et repères affichés dans les listes (le détail est sur chaque page).
const CARD: Record<string, { name: string; sub: string; price: string; video?: keyof typeof MEDIA }> = {
  'gestion-du-stress': { name: 'Gestion du stress', sub: 'MBSR · 8 séances', price: '330 €' },
  'prevention-rechute-depressive': { name: 'Prévenir la rechute dépressive', sub: 'MBCT · 8 séances', price: '330 €' },
  'bien-vivre-son-avancee-en-age': { name: 'Bien vivre son avancée en âge', sub: 'MBCAS · 15 séances', price: '420 €' },
  'jeu-du-tao': { name: 'Jeu du Tao', sub: '3 à 4 personnes · 4 à 5 h', price: '70 €' },
  'sante-et-vitalite': { name: 'Santé et vitalité', sub: '90 € puis 60 €', price: '', video: 'bougie' },
  'pleine-conscience': { name: 'Pleine conscience', sub: '90 € puis 60 €', price: '' },
};

type Filtre = 'tout' | 'groupe' | 'individuel';

function GroupRow({ o }: { o: OffreParticulier }) {
  const c = CARD[o.slug];
  return (
    <li className="flex items-center gap-3.5 rounded-[22px] border border-sand-dark bg-cream-light p-3 text-left">
      <Link to={o.path} className="flex min-w-0 flex-1 items-center gap-3.5">
        <img src={o.image.src.replace('.webp', '-144.webp')} alt="" width={144} height={144} loading="lazy" className="h-[72px] w-[72px] shrink-0 rounded-2xl object-cover" />
        <span className="min-w-0">
          <span className="block font-semibold leading-tight">{c.name}</span>
          <span className="block text-[0.82rem] text-ink-muted">{c.sub}</span>
          <span className="mt-1 inline-block font-heading text-lg text-gold-dark">{c.price}</span>
        </span>
      </Link>
      <a
        href={o.booking}
        {...(o.booking.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="shrink-0 rounded-full bg-night px-4 py-3 text-sm font-semibold text-cream hover:bg-night/90"
      >
        {o.booking.startsWith('http') ? 'Réserver' : 'Me prévenir'}
      </a>
    </li>
  );
}

function SoloCard({ o }: { o: OffreParticulier }) {
  const c = CARD[o.slug];
  return (
    <Link to={o.path} className="group relative flex h-[260px] flex-col justify-end overflow-hidden rounded-[22px] text-center text-cream md:h-[340px]">
      {c.video ? (
        <LoopVideo media={MEDIA[c.video]} />
      ) : (
        <img src={o.image.src} alt="" width={600} height={800} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      )}
      <span aria-hidden className="absolute inset-0 bg-gradient-to-b from-night/0 from-30% to-night/90" />
      <span className="relative p-4 md:p-6">
        <span className="block font-heading text-xl leading-tight md:text-2xl">{c.name}</span>
        <span className="mt-1.5 block text-[0.82rem] text-gold-light">{c.sub}</span>
        <span className="mt-2 hidden items-center gap-1.5 text-sm text-cream/85 md:inline-flex">
          Découvrir <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </span>
    </Link>
  );
}

export default function ParticuliersPage() {
  const [filtre, setFiltre] = useState<Filtre>('tout');
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Particuliers', path: '/particuliers' },
  ];
  const groupe = particuliers.filter((o) => o.category !== 'individuel');
  const solo = particuliers.filter((o) => o.category === 'individuel');
  const filtres: { id: Filtre; label: string }[] = [
    { id: 'tout', label: 'Tout' },
    { id: 'groupe', label: 'En groupe' },
    { id: 'individuel', label: 'Individuel' },
  ];

  return (
    <>
      <Seo
        title="Cycles MBSR, MBCT, MBCAS et accompagnement individuel | Véronique Carrié"
        description="Gestion du stress, prévention de la rechute dépressive, bien vivre son avancée en âge, séances individuelles et Jeu du Tao. Hérault, Aveyron et à distance."
        path="/particuliers"
        jsonLd={[breadcrumbLd(crumbs)]}
      />
      <HeroVideo media={MEDIA.soleil} eyebrow="Particuliers" title={<>Prendre soin de soi, <em>à son rythme</em></>} lead="En petit groupe ou en individuel." />

      <div className="bg-cream pt-6">
        <div role="tablist" aria-label="Filtrer les offres" className="container-site flex justify-center gap-2">
          {filtres.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filtre === f.id}
              onClick={() => setFiltre(f.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 ${filtre === f.id ? 'bg-night text-cream' : 'border border-sand-dark text-ink hover:border-ink/40'}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {filtre !== 'individuel' && (
        <section id="cycle" className={`bg-cream pt-10 md:pt-14 ${filtre === 'groupe' ? 'pb-16 md:pb-20' : 'pb-4'}`}>
          <div className="container-site">
            <Title>En petit groupe</Title>
            <ul className="mx-auto mt-7 grid max-w-4xl gap-2.5 md:grid-cols-2 md:gap-4">
              {groupe.map((o) => <GroupRow key={o.slug} o={o} />)}
            </ul>
          </div>
        </section>
      )}

      {filtre !== 'groupe' && (
        <section id="individuel" className="bg-cream pb-16 pt-10 md:pb-20 md:pt-14">
          <div className="container-site">
            <Title>En individuel</Title>
            <div className="mx-auto mt-7 grid max-w-4xl grid-cols-2 gap-2.5 md:gap-5">
              {solo.map((o) => <SoloCard key={o.slug} o={o} />)}
            </div>
            <p className="mt-4 text-center text-sm text-ink-muted">En présentiel ou à distance.</p>
          </div>
        </section>
      )}

      <BookingSection initial="particulier" />
      <p className="bg-sand pb-10 text-center text-xs text-ink-muted">
        <span className="container-site block max-w-xl">Mes séances relèvent de la prévention et de l’éducation à la santé. Elles ne remplacent pas un suivi médical ou psychologique.</span>
      </p>
    </>
  );
}
