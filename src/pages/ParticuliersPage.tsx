import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { particuliers, type OffreParticulier } from '../content/offres';
import { BookingSection, HeroVideo, Title } from '../components/funnel';
import { NotifyForm } from '../components/NotifyForm';
import { MEDIA } from '../content/media';
import { PHOTOS, type Photo } from '../content/photos';
import { CREDENTIALS, SITE } from '../content/site';
import { Seo, breadcrumbLd } from '../lib/head';

// L'espace particuliers s'organise par situation vécue, pas par méthode :
// on choisit ce qu'on vit, puis on trouve la formule et son prix.

const SITUATIONS: { photo: Photo; title: string; text: string; to: string }[] = [
  { photo: PHOTOS.cerveauForme, title: 'Je veux garder un cerveau en forme', text: 'Après 60 ans : la mémoire, l’attention, et accueillir les changements de l’âge avec plus de sérénité.', to: '/particuliers/bien-vivre-son-avancee-en-age' },
  { photo: PHOTOS.aidant, title: 'J’accompagne un proche', text: 'Souffler, comprendre ce qui se passe, et ne pas s’épuiser. Souvent gratuit pour vous.', to: '#gratuits' },
  { photo: PHOTOS.stress, title: 'Le stress déborde', text: 'Retrouver du calme, mieux dormir, ne plus ruminer, pas à pas et en petit groupe.', to: '/particuliers/gestion-du-stress' },
];

// Ce que l'on achète, dit simplement.
const FORMAT: Record<string, string> = {
  'gestion-du-stress': '8 séances en petit groupe',
  'prevention-rechute-depressive': '8 séances en petit groupe, après un entretien',
  'bien-vivre-son-avancee-en-age': '15 séances en petit groupe, sur 8 mois',
  'jeu-du-tao': 'Une demi-journée, à 3 ou 4',
  'sante-et-vitalite': 'Séances seul avec moi, en présentiel ou à distance',
  'pleine-conscience': 'Séances seul avec moi, en présentiel ou à distance',
};

function SituationCard({ photo, title, text, to }: (typeof SITUATIONS)[number]) {
  const inner = (
    <>
      <img src={photo.src} alt={photo.alt} width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full object-cover" />
      <span className="flex flex-1 flex-col p-5 md:p-6">
        <span className="font-heading text-[1.65rem] font-light leading-tight">{title}</span>
        <span className="mt-2 flex-1 text-[1.12rem] leading-relaxed text-ink-soft">{text}</span>
        <span className="mt-4 inline-flex items-center gap-2 text-[1.06rem] font-semibold text-night">
          Voir <ArrowRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </span>
      </span>
    </>
  );
  const cls = 'group flex flex-col overflow-hidden rounded-[22px] border border-sand-dark bg-cream-light text-left shadow-soft transition-transform hover:-translate-y-0.5';
  return to.startsWith('#') ? <a href={to} className={cls}>{inner}</a> : <Link to={to} className={cls}>{inner}</Link>;
}

function FormuleRow({ o }: { o: OffreParticulier }) {
  return (
    <li>
      <Link to={o.path} className="group flex items-center gap-4 border-b border-sand-dark py-5 text-left">
        <span className="min-w-0 flex-1">
          <span className="block font-heading text-[1.45rem] leading-snug">{o.title}</span>
          <span className="mt-1 block text-[1.06rem] text-ink-soft">{FORMAT[o.slug] ?? o.short}</span>
        </span>
        <span className="w-28 shrink-0 text-right">
          <span className="block font-heading text-[1.3rem] text-gold-dark">{o.category === 'individuel' ? '90 €, puis 60 €' : o.price.replace(' le cycle', '').replace(' par personne', '')}</span>
          <span className="mt-1 inline-flex items-center gap-1 text-[0.98rem] font-semibold text-night">Voir <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
        </span>
      </Link>
    </li>
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
        title="Ateliers pour garder un cerveau en forme après 60 ans, aidants et stress | Véronique Carrié"
        description="Ateliers en petit groupe et séances individuelles : garder un cerveau en forme après 60 ans, souffler quand on accompagne un proche, retrouver du calme. Hérault, Aveyron et à distance."
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

      <section id="gratuits" className="scroll-mt-20 bg-night py-14 text-cream md:py-20">
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

      <section id="formules" className="scroll-mt-20 bg-cream py-14 md:py-20">
        <div className="container-site max-w-3xl">
          <Title>Les formules <em>et les tarifs</em></Title>
          <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">En petit groupe</h3>
          <ul className="mt-2">{groupe.map((o) => <FormuleRow key={o.slug} o={o} />)}</ul>
          <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">Seul avec moi</h3>
          <ul className="mt-2">{solo.map((o) => <FormuleRow key={o.slug} o={o} />)}</ul>
          <p className="mt-6 text-[1.02rem] text-ink-muted">Les séances seul avec moi : 90 € la première, puis 60 €. Les cycles en groupe ouvrent dès qu’il y a assez d’inscrits : laissez votre e-mail sur la page du cycle.</p>
        </div>
      </section>

      <section className="bg-sand py-14 md:py-16">
        <div className="container-site flex max-w-3xl flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <img src="/images/veronique-480.webp" alt="Portrait de Véronique Carrié" width={480} height={600} loading="lazy" className="h-[180px] w-[144px] shrink-0 rounded-arch object-cover" />
          <div>
            <p className="font-heading text-[1.6rem] font-light leading-snug">« Quand on sait pourquoi le cerveau s’emballe, oublie ou se fatigue, on a moins peur, et on peut agir. »</p>
            <p className="mt-3 text-[1.02rem] text-ink-soft">Véronique Carrié. {CREDENTIALS.certifications}. <Link to="/qui-suis-je" className="link-underline">Mon parcours</Link></p>
          </div>
        </div>
      </section>

      <BookingSection lock initial="particulier" tone="cream" title={<>Une question ? <em>Parlons-en</em></>} />
      <p className="bg-cream pb-10 text-center text-[0.95rem] text-ink-muted">
        <span className="container-site block max-w-xl">Mes séances relèvent de la prévention et de l’éducation à la santé. Elles ne remplacent pas un suivi médical ou psychologique.</span>
      </p>
    </>
  );
}
