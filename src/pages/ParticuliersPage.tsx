import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { particuliers, type OffreParticulier } from '../content/offres';
import { MEDIA } from '../content/media';
import { PHOTOS } from '../content/photos';
import { NotifyForm } from '../components/NotifyForm';
import { Band, Btn, CallBtn, CtaBand, Hero, Kicker } from '../components/calm';
import { SITE } from '../content/site';
import { Seo, breadcrumbLd } from '../lib/head';

// La page particuliers répond à une question : « Par où je commence ? »
// 1. Tout le monde commence par la séance découverte. 2. On choisit selon son besoin :
// le groupe est conseillé, l'individuel reste possible. Jamais de sigle en titre.

const byId = (slug: string) => particuliers.find((o) => o.slug === slug)!;

const BESOINS: { id: string; label: string; groupe?: OffreParticulier; solo: OffreParticulier }[] = [
  { id: 'stress', label: 'Le stress me déborde', groupe: byId('gestion-du-stress'), solo: byId('pleine-conscience') },
  { id: 'memoire', label: 'Je veux garder ma mémoire', groupe: byId('bien-vivre-son-avancee-en-age'), solo: byId('sante-et-vitalite') },
  { id: 'rechute', label: 'Après une dépression', groupe: byId('prevention-rechute-depressive'), solo: byId('pleine-conscience') },
  { id: 'aidant', label: 'J’aide un proche', solo: byId('pleine-conscience') },
];

const ETAPES = [
  { title: 'Séance découverte', text: 'Offerte, en visio. On fait le point ensemble.' },
  { title: 'On choisit ensemble', text: 'En petit groupe ou en individuel, selon vous.' },
  { title: 'Vous commencez', text: 'Près de chez vous ou à distance.' },
];

// Ce que l'on achète, dit simplement.
const FORMAT: Record<string, string> = {
  'gestion-du-stress': '8 séances en petit groupe',
  'prevention-rechute-depressive': '8 séances en petit groupe, après un entretien',
  'bien-vivre-son-avancee-en-age': '15 séances en petit groupe, sur 8 mois',
  'jeu-du-tao': 'Une demi-journée, à 3 ou 4',
  'sante-et-vitalite': 'Séance individuelle',
  'pleine-conscience': 'Séance individuelle',
};

const prix = (o: OffreParticulier) => (o.category === 'individuel' ? '90 €, puis 60 €' : o.price.replace(' le cycle', '').replace(' par personne', ' / pers.'));

function Etapes() {
  return (
    <ol className="glass mx-auto w-full max-w-md rounded-[2rem] p-6 md:p-8 lg:ml-auto">
      <li className="mb-5"><Kicker light>Par où commencer ?</Kicker></li>
      {ETAPES.map((e, i) => (
        <li key={e.title} className="grid grid-cols-[2.6rem_1fr] gap-3 border-t border-white/15 py-4 first-of-type:border-0">
          <span className={`grid h-10 w-10 place-items-center rounded-full font-heading text-[1.2rem] ${i === 0 ? 'bg-gold text-night' : 'bg-white/10 text-cream ring-1 ring-white/20'}`}>{i + 1}</span>
          <span>
            <span className="block font-heading text-[1.3rem] text-cream">{e.title}</span>
            <span className="block text-cream/75">{e.text}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

function Selecteur() {
  const [id, setId] = useState(BESOINS[0].id);
  const b = BESOINS.find((x) => x.id === id)!;
  const g = b.groupe;

  return (
    <div>
      <div role="tablist" aria-label="Ce qui vous amène" className="flex flex-wrap gap-2">
        {BESOINS.map((x) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            id={`tab-${x.id}`}
            aria-selected={x.id === id}
            aria-controls="besoin-panel"
            onClick={() => setId(x.id)}
            className={`min-h-[48px] rounded-full px-5 text-[1rem] font-semibold transition-colors ${x.id === id ? 'bg-night text-cream' : 'glass-light text-ink hover:bg-white'}`}
          >
            {x.label}
          </button>
        ))}
      </div>

      <div id="besoin-panel" role="tabpanel" aria-labelledby={`tab-${id}`} className="glass-light mt-6 overflow-hidden rounded-[2rem]">
        <div className="grid md:grid-cols-[1fr_1.15fr]">
          <div className="relative aspect-[16/10] md:aspect-auto">
            <img
              key={id}
              src={g ? g.image.src : PHOTOS.aidant.src}
              alt={g ? g.image.alt : PHOTOS.aidant.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="p-6 md:p-10">
            <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-[0.85rem] font-semibold text-gold-dark">Conseillé : en petit groupe</span>
            {g ? (
              <>
                <h3 className="mt-4 font-heading text-[1.9rem] leading-tight text-ink md:text-[2.2rem]">{g.title}</h3>
                <p className="mt-3 text-[1.06rem] text-ink-soft">{g.short}</p>
                <p className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-heading text-[2rem] leading-none text-ink">{prix(g)}</span>
                  <span className="text-ink-muted">{FORMAT[g.slug]}</span>
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Btn to={SITE.decouverte}>Séance découverte</Btn>
                  <Btn to={g.path} variant="outline">Détails</Btn>
                </div>
              </>
            ) : (
              <>
                <h3 className="mt-4 font-heading text-[1.9rem] leading-tight text-ink md:text-[2.2rem]">Des ateliers gratuits pour les aidants</h3>
                <p className="mt-3 text-[1.06rem] text-ink-soft">Souvent financés par les caisses de retraite, le Département ou votre commune. Je vous préviens du prochain près de chez vous.</p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Btn to="#gratuits">Être prévenu</Btn>
                  <Btn to={SITE.decouverte} variant="outline">Séance découverte</Btn>
                </div>
              </>
            )}
            <Link to={b.solo.path} className="group mt-8 flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
              <span>
                <span className="block text-[0.9rem] text-ink-muted">Vous préférez seul·e ?</span>
                <span className="block font-semibold text-ink">{b.solo.title} · <span className="whitespace-nowrap">{prix(b.solo)}</span></span>
              </span>
              <ArrowRight aria-hidden className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-ink" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ParticuliersPage() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Pour vous ou un proche', path: '/particuliers' },
  ];

  return (
    <>
      <Seo
        title="Ateliers pour garder sa mémoire, apaiser le stress et aider un proche | Véronique Carrié"
        description="Ateliers en petit groupe et séances individuelles : garder sa mémoire après 60 ans, apaiser le stress, souffler quand on aide un proche. Hérault, Aveyron et à distance."
        path="/particuliers"
        jsonLd={[breadcrumbLd(crumbs)]}
      />

      <Hero
        crumbs={crumbs}
        media={MEDIA.soleil}
        kicker="Pour vous ou un proche"
        title={<>Un cerveau en forme, <em>à tout âge.</em></>}
        lead="Des ateliers en petit groupe et des séances individuelles, dans l’Hérault, l’Aveyron ou en visio."
        actions={
          <>
            <Btn to={SITE.decouverte}>Séance découverte</Btn>
            <CallBtn light label="Appeler" />
          </>
        }
        aside={<Etapes />}
      />

      <Band tone="light" kicker="Votre besoin" title="Qu’est-ce qui vous amène ?">
        <Selecteur />
      </Band>

      <Band kicker="Tous les ateliers" title="Le catalogue, d’un coup d’œil.">
        <ul className="grid gap-x-10 border-t border-sand-dark md:grid-cols-2">
          {particuliers.map((o) => (
            <li key={o.slug} className="border-b border-sand-dark">
              <Link to={o.path} className="group flex items-center gap-4 py-5">
                <img src={o.image.src} alt="" loading="lazy" className="h-16 w-16 shrink-0 rounded-2xl object-cover" />
                <span className="min-w-0 flex-1">
                  <span className="block font-heading text-[1.25rem] leading-snug text-ink">{o.title}</span>
                  <span className="block text-[0.95rem] text-ink-muted">{FORMAT[o.slug]}</span>
                </span>
                <span className="shrink-0 font-semibold text-ink">{prix(o)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Band>

      <section id="gratuits" className="scroll-mt-24 bg-cream pb-16 md:pb-24">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-[2rem] bg-night p-3 md:p-6">
            <img src={PHOTOS.atelierGratuit.src} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="glass relative grid items-center gap-8 rounded-[1.6rem] bg-night/60 p-6 text-cream md:grid-cols-2 md:gap-14 md:p-12">
              <div>
                <Kicker light>Ateliers gratuits</Kicker>
                <h2 className="mt-3 font-heading font-light leading-[1.08] text-cream [font-size:clamp(2rem,3.6vw,2.9rem)]">Près de chez vous, et gratuits.</h2>
                <p className="mt-4 text-[1.06rem] text-cream/85">Certains ateliers sont financés par les caisses de retraite, le Département ou votre commune. Laissez votre e-mail : je vous préviens du prochain.</p>
              </div>
              <NotifyForm offre="ateliers-gratuits" title="ateliers gratuits" message="Prévenez-moi du prochain atelier gratuit près de chez moi." />
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Un doute sur ce qui vous convient ?" text="Réservez la séance découverte : elle est offerte, et on choisit ensemble." primary={{ to: SITE.decouverte, label: 'Séance découverte' }} />

      <p className="container-site -mt-10 pb-12 text-[0.95rem] text-ink-muted">Mes séances relèvent de la prévention et de l’éducation à la santé. Elles ne remplacent pas un suivi médical.</p>
    </>
  );
}
