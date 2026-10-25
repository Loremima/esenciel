import { CREDENTIALS, FIRST_MEETING, LEGAL, SITE } from '../content/site';
import { ACTIONS } from '../content/actions';
import { financeurs } from '../content/structures';
import { Btn, Hero, Part, PhoneLine, TextLink } from '../components/calm';
import { Seo, breadcrumbLd } from '../lib/head';

// Le dossier de financement répond à une question : « Puis-je financer cette intervenante ? »
// C'est la page du QR code de la plaquette, pour le financeur : rien à réserver ici.

export default function DossierPage() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Structures', path: '/structures' },
    { name: 'Dossier de financement', path: '/structures/dossier' },
  ];

  return (
    <>
      <Seo
        title="Dossier de financement : intervenante, compétences psychosociales, évaluation | Véronique Carrié"
        description="Les informations utiles pour un dossier CFPPA, Carsat, MSA ou ARS : qualifications de l’intervenante, compétences psychosociales travaillées, protocole d’évaluation, informations administratives."
        path="/structures/dossier"
        jsonLd={[breadcrumbLd(crumbs)]}
      />

      <Hero
        crumbs={crumbs}
        kicker="Pour le financeur"
        title={<>Le dossier, <em>en une page.</em></>}
        lead="Pour la structure qui monte le dossier et pour le financeur qui l’instruit : l’intervenante, les actions, l’évaluation, l’administratif."
        actions={
          <>
            <Btn to={FIRST_MEETING.structure.href}>Réserver 20 min</Btn>
            <Btn to={SITE.plaquette} variant="outline" light download>La plaquette</Btn>
          </>
        }
        aside={
          <dl className="grid gap-px overflow-hidden rounded-[2rem] bg-cream/15 text-[0.98rem] sm:grid-cols-2">
            {[
              ['Intervenante', `Véronique Carrié, ${CREDENTIALS.certifications.charAt(0).toLowerCase() + CREDENTIALS.certifications.slice(1)}`],
              ['Référentiel', 'Compétences psychosociales, Santé publique France'],
              ['Évaluation', 'Avant et après (PSS-10, WEMWBS), émargement, bilan écrit'],
              ['SIRET', LEGAL.siret],
            ].map(([k, v]) => (
              <div key={k} className="bg-night-deep p-6">
                <dt className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-gold-light">{k}</dt>
                <dd className="mt-2 text-cream">{v}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <Part title="L’intervenante">
        <p><strong className="font-semibold text-ink">Véronique Carrié.</strong> {CREDENTIALS.short}. {CREDENTIALS.certifications}. {CREDENTIALS.health}. {CREDENTIALS.references}.</p>
        <p className="mt-3">Ses interventions relèvent de la prévention et de l’éducation à la santé. Ce ne sont ni des soins ni un suivi individuel.</p>
      </Part>

      <Part title="Compétences psychosociales">
        <p>Chaque action est reliée au référentiel des compétences psychosociales de Santé publique France.</p>
        <dl className="mt-5 divide-y divide-sand-dark border-y border-sand-dark">
          {ACTIONS.map((a) => (
            <div key={a.offre.slug} className="py-4">
              <dt className="font-medium text-ink">{a.offre.title.replace(/[«»]/g, '').trim()}</dt>
              <dd className="mt-1">{a.offre.facts.find((f) => f.label === 'Compétences psychosociales')?.value}</dd>
            </div>
          ))}
        </dl>
      </Part>

      <Part title="Évaluation">
        <ul className="list-disc space-y-2 pl-5">
          <li>Questionnaires avant et après : stress perçu (PSS-10) et bien-être (WEMWBS, version courte à 7 questions).</li>
          <li>Assiduité, avec feuille d’émargement à chaque séance.</li>
          <li>Satisfaction et verbatims des participants.</li>
          <li>Un bilan écrit remis à la structure, prêt à joindre au compte rendu.</li>
        </ul>
      </Part>

      <Part title="Informations administratives">
        <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[11rem_1fr]">
          <dt className="font-medium text-ink">Statut</dt><dd>{LEGAL.status}</dd>
          <dt className="font-medium text-ink">SIRET</dt><dd>{LEGAL.siret}</dd>
          <dt className="font-medium text-ink">TVA</dt><dd>{LEGAL.vat}</dd>
          <dt className="font-medium text-ink">Facturation</dt><dd>Devis, convention d’intervention, facture (Chorus Pro possible pour les structures publiques)</dd>
          <dt className="font-medium text-ink">Financements</dt><dd>{financeurs.join(', ')}</dd>
          <dt className="font-medium text-ink">Zone</dt><dd>{SITE.zone}, dans vos locaux</dd>
        </dl>
      </Part>

      <Part title="Documents et questions">
        <p className="flex flex-col gap-1">
          <TextLink to={SITE.plaquette} download>La plaquette (PDF)</TextLink>
          <TextLink to="/contact?profil=structure&offre=fiche-action">Une fiche-action type</TextLink>
          <TextLink to={FIRST_MEETING.structure.href}>Réserver 20 min</TextLink>
        </p>
        <p className="mt-6">Une question sur un dossier en cours : <PhoneLine /></p>
      </Part>
    </>
  );
}
