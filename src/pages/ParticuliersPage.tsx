import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { particuliers, type OffreParticulier } from '../content/offres';
import { PHOTOS } from '../content/photos';
import { NotifyForm } from '../components/NotifyForm';
import { Band, Btn, CallBtn, CtaBand, Hero, Kicker } from '../components/calm';
import { SITE } from '../content/site';
import { Seo, breadcrumbLd } from '../lib/head';

// La page particuliers répond à une question : « Qu'est-ce qui m'aiderait, moi, maintenant ? »
// On part de ce que la personne vit, jamais d'un sigle.

const SITUATIONS = [
  { title: 'Le stress me déborde', text: 'Retrouver du calme, mieux dormir, ne plus ruminer.', to: '/particuliers/gestion-du-stress', photo: PHOTOS.stress },
  { title: 'Je veux garder ma mémoire', text: 'Après 60 ans : l’attention, la mémoire, et les changements de l’âge.', to: '/particuliers/bien-vivre-son-avancee-en-age', photo: PHOTOS.cerveauForme },
  { title: 'J’aide un proche', text: 'Souffler et ne pas s’épuiser. Des ateliers souvent gratuits pour vous.', to: '#gratuits', photo: PHOTOS.aidant },
];

// Ce que l'on achète, dit simplement.
const FORMAT: Record<string, string> = {
  'gestion-du-stress': '8 séances en petit groupe',
  'prevention-rechute-depressive': '8 séances, après un entretien',
  'bien-vivre-son-avancee-en-age': '15 séances sur 8 mois',
  'jeu-du-tao': 'Une demi-journée, à 3 ou 4',
  'sante-et-vitalite': 'Séance individuelle',
  'pleine-conscience': 'Séance individuelle',
};

const prix = (o: OffreParticulier) => (o.category === 'individuel' ? '90 €, puis 60 €' : o.price.replace(' le cycle', '').replace(' par personne', ' / pers.'));

function Atelier({ o, wide }: { o: OffreParticulier; wide?: boolean }) {
  return (
    <Link to={o.path} className={`group flex overflow-hidden rounded-3xl border border-sand-dark bg-cream transition-transform hover:-translate-y-1 ${wide ? 'flex-col sm:flex-row' : 'flex-col'}`}>
      <img src={o.image.src} alt={o.image.alt} loading="lazy" className={`w-full object-cover ${wide ? 'aspect-[16/10] sm:aspect-auto sm:w-2/5' : 'aspect-[16/10]'}`} />
      <span className="flex flex-1 flex-col p-6">
        <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-gold-dark">{FORMAT[o.slug]}</span>
        <span className="mt-3 flex-1 font-heading text-[1.4rem] leading-snug text-ink">{o.title}</span>
        <span className="mt-5 flex items-center justify-between border-t border-sand-dark pt-4">
          <span className="font-semibold text-ink">{prix(o)}</span>
          <ArrowRight aria-hidden className="h-5 w-5 text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-ink" />
        </span>
      </span>
    </Link>
  );
}

export default function ParticuliersPage() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Pour vous ou un proche', path: '/particuliers' },
  ];
  const groupe = particuliers.filter((o) => o.category !== 'individuel');
  const solo = particuliers.filter((o) => o.category === 'individuel');

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
        kicker="Pour vous ou un proche"
        title={<>Un cerveau en forme, <em>à tout âge.</em></>}
        lead="Des ateliers en petit groupe et des séances individuelles, dans l’Hérault, l’Aveyron ou en visio. La première séance découverte est offerte."
        actions={
          <>
            <Btn to={SITE.decouverte}>Séance découverte</Btn>
            <CallBtn light label="Appeler" />
          </>
        }
        aside={<img src={PHOTOS.particulierCouple.src} alt={PHOTOS.particulierCouple.alt} className="mx-auto aspect-[4/5] w-full max-w-md rounded-[2rem] object-cover shadow-2xl lg:ml-auto" />}
      />

      <Band kicker="Par où commencer ?" title="Qu’est-ce qui vous amène ?">
        <div className="grid gap-5 md:grid-cols-3">
          {SITUATIONS.map((s) => (
            <Link key={s.title} to={s.to} className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-3xl bg-night p-6 text-cream">
              <img src={s.photo.src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105" />
              <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-transparent" />
              <span className="relative font-heading text-[1.7rem] leading-tight">{s.title}</span>
              <span className="relative mt-2 text-cream/85">{s.text}</span>
              <span className="relative mt-4 inline-flex items-center gap-2 font-semibold text-gold-light">
                Voir <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Band>

      <Band id="formules" tone="light" kicker="Les ateliers" title="En petit groupe." side={<p className="text-ink-muted">Séance découverte offerte avant chaque cycle.</p>}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groupe.map((o) => <Atelier key={o.slug} o={o} />)}
        </div>
        <h3 className="mt-16 font-heading font-light text-ink [font-size:clamp(1.7rem,3vw,2.4rem)]">Ou en séance individuelle.</h3>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {solo.map((o) => <Atelier key={o.slug} o={o} wide />)}
        </div>
      </Band>

      <section id="gratuits" className="scroll-mt-20 bg-cream py-16 md:py-24">
        <div className="container-site">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] bg-night p-6 text-cream md:grid-cols-2 md:gap-14 md:p-12">
          <img src={PHOTOS.atelierGratuit.src} alt={PHOTOS.atelierGratuit.alt} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <div>
            <Kicker light>Ateliers gratuits</Kicker>
            <h2 className="mt-3 font-heading font-light leading-[1.08] text-cream [font-size:clamp(2rem,3.6vw,2.9rem)]">Près de chez vous, et gratuits.</h2>
            <p className="mt-4 text-[1.06rem] text-cream/80">Certains ateliers sont financés par les caisses de retraite, le Département ou votre commune. Laissez votre e-mail : je vous préviens du prochain.</p>
            <div className="mt-6 max-w-md">
              <NotifyForm offre="ateliers-gratuits" title="ateliers gratuits" message="Prévenez-moi du prochain atelier gratuit près de chez moi." />
            </div>
          </div>
        </div>
        </div>
      </section>

      <CtaBand title="Un doute sur ce qui vous convient ?" text="Appelez-moi ou réservez la séance découverte. C’est moi qui réponds." primary={{ to: SITE.decouverte, label: 'Séance découverte' }} />

      <p className="container-site -mt-10 pb-12 text-[0.95rem] text-ink-muted">Mes séances relèvent de la prévention et de l’éducation à la santé. Elles ne remplacent pas un suivi médical.</p>
    </>
  );
}
