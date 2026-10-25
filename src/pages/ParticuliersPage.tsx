import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { particuliers, type OffreParticulier } from '../content/offres';
import { BookingSection, HeroVideo, LoopVideo, Title } from '../components/funnel';
import { MEDIA } from '../content/media';
import { PHOTOS, type Photo } from '../content/photos';
import { SITE } from '../content/site';
import { NotifyForm } from '../components/NotifyForm';
import { Seo, breadcrumbLd } from '../lib/head';

// Noms courts et repères affichés dans les listes (le détail est sur chaque page).
const CARD: Record<string, { name: string; sub: string; price: string; video?: keyof typeof MEDIA }> = {
  'gestion-du-stress': { name: 'Retrouver du calme face au stress', sub: '8 séances en groupe', price: '330 €' },
  'prevention-rechute-depressive': { name: 'Après une dépression, garder l’équilibre', sub: '8 séances en groupe', price: '330 €' },
  'bien-vivre-son-avancee-en-age': { name: 'Bien vivre son avancée en âge', sub: '15 séances en groupe', price: '420 €' },
  'jeu-du-tao': { name: 'Jeu du Tao', sub: '3 à 4 personnes · une demi-journée', price: '70 €' },
  'sante-et-vitalite': { name: 'Santé et vitalité', sub: 'Séance seule · 90 € puis 60 €', price: '', video: 'bougie' },
  'pleine-conscience': { name: 'Pleine conscience', sub: 'Séance seule · 90 € puis 60 €', price: '' },
};

type Filtre = 'tout' | 'groupe' | 'individuel';

// Les trois portes d'entrée, par situation vécue plutôt que par méthode.
const SITUATIONS: { photo: Photo; title: string; text: string; to: string }[] = [
  { photo: PHOTOS.cerveauForme, title: 'Je veux garder un cerveau en forme', text: 'Après 60 ans : la mémoire, l’attention, et accueillir les changements de l’âge avec plus de sérénité.', to: '/particuliers/bien-vivre-son-avancee-en-age' },
  { photo: PHOTOS.aidant, title: 'J’accompagne un proche', text: 'Souffler, comprendre ce qui se passe, et ne pas s’épuiser. Souvent gratuit pour vous.', to: '#gratuits' },
  { photo: PHOTOS.stress, title: 'Le stress déborde', text: 'Retrouver du calme, mieux dormir, ne plus ruminer, pas à pas et en petit groupe.', to: '/particuliers/gestion-du-stress' },
];

function SituationCard({ photo, title, text, to }: (typeof SITUATIONS)[number]) {
  const inner = (
    <>
      <img src={photo.src} alt={photo.alt} width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full object-cover" />
      <span className="flex flex-1 flex-col p-5 md:p-6">
        <span className="font-heading text-[1.6rem] font-light leading-tight">{title}</span>
        <span className="mt-2 flex-1 text-[1.1rem] leading-relaxed text-ink-soft">{text}</span>
        <span className="mt-4 inline-flex items-center gap-2 text-[1.06rem] font-semibold text-night">
          Voir <ArrowRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </span>
      </span>
    </>
  );
  const cls = 'group flex flex-col overflow-hidden rounded-[22px] border border-sand-dark bg-cream-light text-left shadow-soft transition-transform hover:-translate-y-0.5';
  return to.startsWith('#') ? <a href={to} className={cls}>{inner}</a> : <Link to={to} className={cls}>{inner}</Link>;
}

function GroupRow({ o }: { o: OffreParticulier }) {
  const c = CARD[o.slug];
  return (
    <li className="flex items-center gap-3.5 rounded-[22px] border border-sand-dark bg-cream-light p-3 text-left">
      <Link to={o.path} className="flex min-w-0 flex-1 items-center gap-3.5">
        <img src={o.image.src.replace('.webp', '-144.webp')} alt="" width={144} height={144} loading="lazy" className="h-[72px] w-[72px] shrink-0 rounded-2xl object-cover" />
        <span className="min-w-0">
          <span className="block text-[1.12rem] font-semibold leading-tight">{c.name}</span>
          <span className="block text-base text-ink-muted">{c.sub}</span>
          <span className="mt-1 inline-block font-heading text-lg text-gold-dark">{c.price}</span>
        </span>
      </Link>
      <a
        href={o.booking}
        {...(o.booking.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="shrink-0 rounded-full bg-night px-4 py-3 text-base font-semibold text-cream hover:bg-night/90"
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
        <span className="mt-1.5 block text-base text-gold-light">{c.sub}</span>
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
        title="Ateliers pour garder un cerveau en forme après 60 ans, aidants et stress | Véronique Carrié"
        description="Gestion du stress, prévention de la rechute dépressive, bien vivre son avancée en âge, séances individuelles et Jeu du Tao. Hérault, Aveyron et à distance."
        path="/particuliers"
        jsonLd={[breadcrumbLd(crumbs)]}
      />
      <HeroVideo
        media={MEDIA.soleil}
        eyebrow="Pour vous ou un proche"
        title={<>Garder un cerveau <em>en forme</em>, à tout âge</>}
        lead="Des ateliers en petit groupe et des séances individuelles, dans l’Hérault, l’Aveyron ou à distance."
      >
        <a href={SITE.phoneHref} className="btn bg-cream text-night hover:bg-cream-light">
          <Phone aria-hidden className="h-5 w-5" strokeWidth={1.8} />
          Appelez-moi : {SITE.phone}
        </a>
      </HeroVideo>

      <section className="bg-cream py-14 md:py-20">
        <div className="container-site">
          <Title>Par où <em>commencer ?</em></Title>
          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:mt-12 md:grid-cols-3">
            {SITUATIONS.map((x) => <SituationCard key={x.title} {...x} />)}
          </div>
        </div>
      </section>

      <section id="gratuits" className="bg-night py-14 text-cream md:py-20">
        <div className="container-site grid max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-12">
          <img src={PHOTOS.atelierGratuit.src} alt={PHOTOS.atelierGratuit.alt} width={1200} height={800} loading="lazy" className="aspect-[4/3] w-full rounded-[22px] object-cover" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">Près de chez vous</p>
            <h2 className="mt-3 font-heading text-[2.1rem] font-light leading-tight text-cream md:text-[2.5rem]">Des ateliers <em className="italic text-gold-light">gratuits</em> pour vous</h2>
            <p className="mt-4 text-[1.12rem] leading-relaxed text-cream/90">
              Certains de mes ateliers sont financés par les caisses de retraite, le Département ou votre commune. Pour vous, ils sont gratuits. Laissez votre prénom et votre e-mail : je vous préviens du prochain atelier près de chez vous.
            </p>
            <div className="mt-6 max-w-md">
              <NotifyForm offre="ateliers-gratuits" title="ateliers gratuits" message="Prévenez-moi du prochain atelier gratuit près de chez moi." />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-cream pt-14 md:pt-20">
        <Title>Tous les ateliers et séances</Title>
      </div>

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
            <p className="mt-4 text-center text-base text-ink-muted">En présentiel ou à distance.</p>
          </div>
        </section>
      )}

      <BookingSection initial="particulier" />
      <p className="bg-sand pb-10 text-center text-sm text-ink-muted">
        <span className="container-site block max-w-xl">Mes séances relèvent de la prévention et de l’éducation à la santé. Elles ne remplacent pas un suivi médical ou psychologique.</span>
      </p>
    </>
  );
}
