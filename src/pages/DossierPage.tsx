import { Link } from 'react-router-dom';
import { Download, Mail } from 'lucide-react';
import { CREDENTIALS, LEGAL, SITE } from '../content/site';
import { ALL_STRUCTURE_OFFERS } from '../content/offres';
import { financeurs } from '../content/structures';
import { BookingSection } from '../components/funnel';
import { Breadcrumbs } from '../components/ui';
import { Seo, breadcrumbLd } from '../lib/head';

// Le dossier de financement : ce que demande un financeur (CFPPA, caisses de
// retraite, ARS) sur l'intervenante et l'action. C'est la page du QR code de la plaquette.

function Bloc({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-sand-dark py-10 md:grid md:grid-cols-[16rem_1fr] md:gap-10">
      <h2 className="font-heading text-[1.6rem] font-light leading-tight">{title}</h2>
      <div className="mt-4 text-[1.06rem] leading-relaxed text-ink-soft md:mt-0">{children}</div>
    </section>
  );
}

export default function DossierPage() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Structures', path: '/structures' },
    { name: 'Dossier de financement', path: '/structures/dossier' },
  ];
  const cps = ALL_STRUCTURE_OFFERS.map((o) => ({ title: o.title.replace(/[«»]/g, '').trim(), value: o.facts.find((f) => f.label === 'Compétences psychosociales')?.value }));

  return (
    <>
      <Seo
        title="Dossier de financement : intervenante, compétences psychosociales, évaluation | Véronique Carrié"
        description="Les informations utiles pour un dossier CFPPA, Carsat, MSA ou ARS : qualifications de l’intervenante, compétences psychosociales travaillées, protocole d’évaluation, informations administratives."
        path="/structures/dossier"
        jsonLd={[breadcrumbLd(crumbs)]}
      />

      <section className="bg-night pb-14 pt-10 text-cream md:pb-20 md:pt-14">
        <div className="container-site max-w-5xl">
          <div className="[&_a]:text-cream/70 [&_li]:text-cream/70 [&_span]:!text-cream/60"><Breadcrumbs items={crumbs} /></div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">Espace structures</p>
          <h1 className="mt-3 font-heading text-[2.6rem] font-light leading-[1.05] text-cream md:text-[3.6rem]">Dossier de financement</h1>
          <p className="mt-5 max-w-2xl text-[1.12rem] leading-relaxed text-cream/85">Pour la structure qui monte le dossier, et pour le financeur qui l’instruit : tout ce qu’il faut savoir sur l’intervenante et sur l’action.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={SITE.plaquette} download className="btn bg-cream text-night hover:bg-cream-light">
              <Download aria-hidden className="h-5 w-5" strokeWidth={1.8} /> Plaquette (PDF)
            </a>
            <Link to="/contact?profil=structure&offre=fiche-action" className="btn border border-cream/60 text-cream hover:bg-cream/10">
              <Mail aria-hidden className="h-5 w-5" strokeWidth={1.8} /> Recevoir une fiche-action type
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-cream pb-16 md:pb-24">
        <div className="container-site max-w-5xl">
          <Bloc id="intervenante" title="L’intervenante">
            <p><strong className="font-semibold text-ink">Véronique Carrié.</strong> {CREDENTIALS.short}. {CREDENTIALS.certifications}. {CREDENTIALS.health}. {CREDENTIALS.references}.</p>
            <p className="mt-3">Ses interventions relèvent de la prévention et de l’éducation à la santé. Ce ne sont ni des consultations ni de la psychothérapie.</p>
          </Bloc>

          <Bloc id="cps" title="Compétences psychosociales">
            <p>Chaque action est reliée au référentiel des compétences psychosociales de Santé publique France.</p>
            <ul className="mt-4 space-y-3">
              {cps.map((c) => (
                <li key={c.title} className="rounded-2xl border border-sand-dark bg-cream-light p-4">
                  <p className="font-semibold text-ink">{c.title}</p>
                  {c.value && <p className="mt-1 text-[0.98rem]">{c.value}</p>}
                </li>
              ))}
            </ul>
          </Bloc>

          <Bloc id="evaluation" title="Évaluation">
            <ul className="list-disc space-y-2 pl-5">
              <li>Questionnaires avant et après : stress perçu (PSS-10) et bien-être (WEMWBS, version courte à 7 questions).</li>
              <li>Assiduité, avec feuille d’émargement à chaque séance.</li>
              <li>Satisfaction et verbatims des participants.</li>
              <li>Un bilan écrit remis à la structure, prêt à joindre au compte rendu pour le financeur.</li>
            </ul>
          </Bloc>

          <Bloc id="financements" title="Financements possibles">
            <ul className="flex flex-wrap gap-2">
              {financeurs.map((f) => <li key={f} className="rounded-full border border-sand-dark bg-cream-light px-4 py-2 text-[0.95rem] font-medium text-ink">{f}</li>)}
            </ul>
            <p className="mt-4">Les appels à projets des conférences des financeurs (CFPPA) s’ouvrent en général à l’automne, pour des actions menées l’année suivante. Le dossier est porté par la structure ; je fournis le programme, les objectifs, les indicateurs et une fiche-action rédigée.</p>
          </Bloc>

          <Bloc id="administratif" title="Informations administratives">
            <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[12rem_1fr]">
              <dt className="font-semibold text-ink">Statut</dt><dd>{LEGAL.status}</dd>
              <dt className="font-semibold text-ink">SIRET</dt><dd>{LEGAL.siret}</dd>
              <dt className="font-semibold text-ink">TVA</dt><dd>{LEGAL.vat}</dd>
              <dt className="font-semibold text-ink">Facturation</dt><dd>Devis, convention d’intervention, facture (dépôt sur Chorus Pro possible pour les structures publiques)</dd>
              <dt className="font-semibold text-ink">Zone</dt><dd>{SITE.zone}, dans vos locaux</dd>
            </dl>
          </Bloc>
        </div>
      </div>

      <BookingSection lock initial="structure" title={<>Une question sur <em>votre dossier ?</em></>} />
    </>
  );
}
