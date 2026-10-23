import { Link } from 'react-router-dom';
import { ArrowRight, Download, Landmark, ShieldCheck } from 'lucide-react';
import { Button, CtaBand, PageHero, Section, SectionHeader } from '../components/ui';
import { AudienceSection, IconTile, ObjectionsSection, OfferStackSection, ProcessSection, TrustBar } from '../components/funnel';
import { SITE } from '../content/site';
import { conferences } from '../content/offres';
import { CTA_APPEL, objections } from '../content/structures';
import { Seo, breadcrumbLd, faqLd } from '../lib/head';

const cps = [
  { famille: 'Compétences cognitives', items: 'Conscience de soi, maîtrise de soi, prise de décision' },
  { famille: 'Compétences émotionnelles', items: 'Identifier ses émotions, réguler son stress' },
  { famille: 'Compétences sociales', items: 'Lien social, demander de l’aide, communication, empathie' },
];

const financeurs = [
  'Conférence des financeurs de la prévention de la perte d’autonomie (CFPPA)',
  'CARSAT et MSA (actions collectives « bien vieillir »)',
  'Caisses de retraite complémentaire (Agirc-Arrco)',
  'Contrats locaux de santé et ARS',
  'Plateformes d’accompagnement et de répit',
  'Budget qualité de vie au travail de l’employeur',
];

export default function StructuresPage() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Structures & financeurs', path: '/structures' },
  ];
  return (
    <>
      <Seo
        title="Ateliers et conférences de prévention pour CCAS, EHPAD et CFPPA | Véronique Carrié"
        description="Conférences, cycles et journées de prévention sur le cerveau et l’avancée en âge, pour seniors, aidants et soignants. Évaluation incluse. Hérault et Aveyron."
        path="/structures"
        jsonLd={[breadcrumbLd(crumbs), faqLd(objections)]}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Structures & financeurs"
        title={<>Des actions de prévention <em className="font-normal italic text-gold-dark">clés en main</em>, de la fiche-action au bilan</>}
        lead="Pour les CCAS, centres sociaux, résidences autonomie, EHPAD, SAAD, plateformes de répit et collectivités de l’Hérault et de l’Aveyron. Vous fournissez la salle et le public, je m’occupe du reste."
      >
        <Button to={CTA_APPEL.to} arrow>{CTA_APPEL.label}</Button>
        <Button href={SITE.plaquette} variant="secondary" download>
          <Download aria-hidden className="h-4 w-4" /> Plaquette (PDF)
        </Button>
      </PageHero>

      <TrustBar />
      <OfferStackSection />

      <Section>
        <SectionHeader
          eyebrow="Pour démarrer"
          title="Deux conférences interactives"
          intro="Une première porte d’entrée, facile à organiser et à financer, qui donne envie au public d’aller plus loin."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {conferences.map((c) => (
            <Link key={c.slug} to={c.path} className="card group flex flex-col p-7 transition-all hover:-translate-y-1 hover:shadow-lg">
              <span className="eyebrow">{c.eyebrow}</span>
              <h3 className="mt-3 text-2xl font-medium leading-snug">{c.title}</h3>
              <p className="mt-3 flex-1 text-ink-soft">{c.promise}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-medium">
                Programme détaillé <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <AudienceSection tone="sand" />
      <ProcessSection />

      <Section tone="sand">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <IconTile icon={ShieldCheck} className="mb-5" />
            <p className="eyebrow mb-3">Le cadre</p>
            <h2 className="h-section">Les compétences psychosociales</h2>
            <p className="lead mt-4">
              Toutes mes actions s’appuient sur le référentiel des compétences psychosociales de Santé publique France (2022), le vocabulaire commun des appels à projets de prévention.
            </p>
            <dl className="mt-8 space-y-4">
              {cps.map((c) => (
                <div key={c.famille} className="border-l-2 border-gold pl-4">
                  <dt className="font-semibold">{c.famille}</dt>
                  <dd className="text-ink-soft">{c.items}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <IconTile icon={Landmark} className="mb-5" />
            <p className="eyebrow mb-3">Les financements</p>
            <h2 className="h-section">Des actions finançables</h2>
            <p className="lead mt-4">Mes interventions s’intègrent aux dispositifs que vous connaissez déjà :</p>
            <ul className="mt-8 space-y-3">
              {financeurs.map((f) => (
                <li key={f} className="flex gap-3 text-ink-soft">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-soft">
              L’évaluation est comprise : stress perçu (PSS-10), bien-être (WEMWBS court), assiduité, satisfaction et bilan écrit.
            </p>
          </div>
        </div>
      </Section>

      <ObjectionsSection />

      <CtaBand
        title="Parlons de votre public"
        text="Un appel de vingt minutes suffit pour savoir si une conférence ou un cycle a du sens chez vous, et comment le financer."
        primary={CTA_APPEL}
      />
    </>
  );
}
