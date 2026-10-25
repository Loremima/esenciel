import { Link } from 'react-router-dom';
import { ArrowRight, Check, FileText } from 'lucide-react';
import { CREDENTIALS, SITE } from '../content/site';
import { conferences, programmes, type OffreStructure } from '../content/offres';
import { REPERES_PRIX, cleEnMain, financeurs, objections, votrePart } from '../content/structures';
import { PHOTOS, type Photo } from '../content/photos';
import { BookingSection, FaqSection, HeroVideo, IconSquare, PrimaryCta, ProofGrid, StepsRow, Title } from '../components/funnel';
import { MEDIA } from '../content/media';
import { Seo, breadcrumbLd, faqLd } from '../lib/head';

// La page de référence de l'espace structures : ce que je prends en charge,
// toutes les actions dans un même catalogue, les preuves pour le financeur.

type Action = { offre: OffreStructure; type: string; photo: Photo; publicCible: string; format: string; prix: string };

const ACTIONS: Action[] = [
  { offre: conferences[0], type: 'Conférence', photo: PHOTOS.conference, publicCible: 'Tout public · 15 à 50 personnes', format: '1 h 30 à 2 h', prix: REPERES_PRIX.conference },
  { offre: conferences[1], type: 'Conférence', photo: PHOTOS.atelierGratuit, publicCible: 'Tout public · 15 à 50 personnes', format: '1 h 30 à 2 h', prix: REPERES_PRIX.conference },
  { offre: programmes[0], type: 'Cycle', photo: PHOTOS.structureGroupe, publicCible: 'Seniors · 5 à 12 personnes', format: '12 à 15 séances de 2 h', prix: REPERES_PRIX.seance },
  { offre: programmes[1], type: 'Cycle', photo: PHOTOS.aidant, publicCible: 'Proches aidants · 5 à 12 personnes', format: '6 à 8 séances de 2 h', prix: REPERES_PRIX.seance },
  { offre: programmes[2], type: 'Cycle ou journée', photo: PHOTOS.soignants, publicCible: 'Équipes soignantes · 6 à 12 personnes', format: '6 séances d’1 h 30, ou 1 journée', prix: `${REPERES_PRIX.seance} ou ${REPERES_PRIX.journee}` },
];

function ActionRow({ a }: { a: Action }) {
  return (
    <li>
      <Link to={a.offre.path} className="group grid overflow-hidden rounded-[22px] border border-sand-dark bg-cream-light text-left shadow-soft transition-transform hover:-translate-y-0.5 sm:grid-cols-[220px_1fr]">
        <img src={a.photo.src} alt={a.photo.alt} width={1200} height={800} loading="lazy" className="aspect-[3/2] h-full w-full object-cover sm:aspect-auto" />
        <span className="flex flex-col p-5 md:p-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">{a.type}</span>
          <span className="mt-1.5 font-heading text-[1.45rem] leading-snug md:text-[1.6rem]">{a.offre.title}</span>
          <span className="mt-2 text-ink-soft">{a.offre.promise}</span>
          <span className="mt-4 grid gap-x-6 gap-y-1 text-[0.95rem] sm:grid-cols-3">
            <span><span className="block text-xs uppercase tracking-wider text-ink-muted">Public</span>{a.publicCible}</span>
            <span><span className="block text-xs uppercase tracking-wider text-ink-muted">Format</span>{a.format}</span>
            <span><span className="block text-xs uppercase tracking-wider text-ink-muted">Repère</span>{a.prix}</span>
          </span>
          <span className="mt-4 inline-flex items-center gap-2 font-semibold text-night">
            Le programme détaillé <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </span>
      </Link>
    </li>
  );
}

export default function StructuresPage() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Structures', path: '/structures' },
  ];
  return (
    <>
      <Seo
        title="Actions de prévention pour CCAS, centres sociaux, EHPAD et CFPPA | Véronique Carrié"
        description="Conférences et cycles de prévention sur le cerveau et l’avancée en âge, pour seniors, aidants et soignants. Fiche-action, évaluation et bilan fournis. Hérault et Aveyron."
        path="/structures"
        jsonLd={[breadcrumbLd(crumbs), faqLd(objections)]}
      />

      <HeroVideo
        media={MEDIA.ciel}
        eyebrow="Espace structures"
        title={<>Des actions de prévention <em>prêtes à déposer</em></>}
        lead="Pour les CCAS, centres sociaux, résidences autonomie, EHPAD, SAAD et plateformes de répit de l’Hérault et de l’Aveyron."
      >
        <PrimaryCta to="#rdv" light>Planifier un échange de 20 min</PrimaryCta>
        <a href={SITE.plaquette} download className="text-[0.95rem] text-cream/85 underline decoration-cream/40 underline-offset-4 hover:text-cream">
          Télécharger la plaquette (PDF)
        </a>
      </HeroVideo>

      <ProofGrid />

      {/* Ce que je prends en charge */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container-site grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">Le partage des rôles</p>
            <h2 className="h-section mt-3">Vous fournissez <em>trois choses</em></h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {votrePart.map((v) => (
                <li key={v} className="rounded-full bg-night px-4 py-2 text-[0.95rem] font-semibold text-cream">{v}</li>
              ))}
            </ul>
            <p className="mt-6 text-[1.06rem] text-ink-soft">Je m’occupe de tout le reste, du dossier au bilan. Le dossier de financement reste porté par votre structure, avec moi comme intervenante.</p>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {cleEnMain.map((k) => (
              <li key={k.title} className="flex flex-col items-start gap-3 rounded-[22px] border border-sand-dark bg-cream-light p-5">
                <IconSquare icon={k.icon} />
                <span className="font-semibold leading-snug">{k.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StepsRow />

      {/* Le catalogue unique */}
      <section id="actions" className="scroll-mt-20 bg-cream py-16 md:py-24">
        <div className="container-site max-w-5xl">
          <Title kicker="Le catalogue">Les actions</Title>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[1.06rem] text-ink-soft">Une conférence pour lancer la dynamique, un cycle pour installer de vraies habitudes. Chaque action s’adapte à votre public et à votre budget.</p>
          <ul className="mt-10 grid gap-5">
            {ACTIONS.map((a) => <ActionRow key={a.offre.slug} a={a} />)}
          </ul>
          <p className="mt-6 text-center text-sm text-ink-muted">Repères hors déplacement ({REPERES_PRIX.km}). Devis précis après notre échange, selon le nombre de séances. TVA non applicable.</p>
        </div>
      </section>

      {/* Les preuves pour le financeur */}
      <section className="bg-night py-16 text-cream md:py-24">
        <div className="container-site max-w-5xl">
          <Title light kicker="Pour votre financeur">Un dossier <em>solide</em></Title>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { t: 'Compétences psychosociales', d: 'Chaque action est reliée au référentiel de Santé publique France : compétences cognitives, émotionnelles et sociales.' },
              { t: 'Évaluation avant et après', d: 'Stress perçu (PSS-10), bien-être (WEMWBS court), assiduité, satisfaction et verbatims, réunis dans un bilan écrit.' },
              { t: 'Financements possibles', d: `${financeurs.slice(0, 6).join(', ')}.` },
            ].map((x) => (
              <li key={x.t} className="rounded-[22px] border border-cream/15 p-6">
                <Check aria-hidden className="h-6 w-6 text-gold-light" />
                <p className="mt-3 font-heading text-xl">{x.t}</p>
                <p className="mt-2 text-cream/80">{x.d}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link to="/structures/dossier" className="btn bg-cream text-night hover:bg-cream-light">
              <FileText aria-hidden className="h-5 w-5" strokeWidth={1.8} /> Voir le dossier de financement
            </Link>
          </div>
        </div>
      </section>

      {/* L'intervenante */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-site flex max-w-4xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
          <img src="/images/veronique-480.webp" alt="Portrait de Véronique Carrié" width={480} height={600} loading="lazy" className="h-[220px] w-[176px] shrink-0 rounded-arch object-cover" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">L’intervenante</p>
            <h2 className="mt-2 font-heading text-[2rem] font-light leading-tight">Véronique Carrié</h2>
            <p className="mt-3 text-[1.06rem] text-ink-soft">{CREDENTIALS.short}. {CREDENTIALS.certifications}. {CREDENTIALS.references}.</p>
            <Link to="/qui-suis-je" className="link-underline mt-4 inline-block font-medium">Mon parcours</Link>
          </div>
        </div>
      </section>

      <FaqSection items={objections} />
      <BookingSection lock initial="structure" title={<>Parlons de <em>votre projet</em></>} />
    </>
  );
}
