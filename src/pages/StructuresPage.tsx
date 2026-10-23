import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { Button, CtaBand, Faq, PageHero, Section, SectionHeader, accentClasses } from '../components/ui';
import { CREDENTIALS, SITE } from '../content/site';
import { conferences, programmes } from '../content/offres';
import { Seo, breadcrumbLd, faqLd } from '../lib/head';

const etapes = [
  { title: 'Un échange de 20 minutes', text: 'Votre public, vos objectifs, vos contraintes de salle et de calendrier, votre piste de financement.' },
  { title: 'Une proposition écrite', text: 'Programme adapté, devis, et si besoin la fiche-action à glisser dans votre dossier (CFPPA, CARSAT, contrat local de santé…).' },
  { title: 'L’intervention', text: 'Dans vos locaux. Je m’occupe du contenu et de l’animation ; vous mobilisez le public.' },
  { title: 'Le bilan', text: 'Questionnaires avant et après, feuille d’émargement et bilan écrit, prêts pour votre rapport au financeur.' },
];

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

const faq = [
  { q: 'Combien coûte une intervention ?', a: 'Chaque intervention fait l’objet d’un devis, selon le format, le nombre de séances et le déplacement. Je vous l’envoie après notre premier échange.' },
  { q: 'Pouvez-vous m’aider à monter un dossier de financement ?', a: 'Oui. Je vous fournis le programme, les objectifs, les compétences psychosociales travaillées, les indicateurs d’évaluation et une fiche-action rédigée. Le dossier reste porté par votre structure.' },
  { q: 'Quelle est votre formation ?', a: `${CREDENTIALS.short}. ${CREDENTIALS.certifications}. ${CREDENTIALS.health}. ${CREDENTIALS.references}.` },
  { q: 'Où intervenez-vous ?', a: 'Dans l’Hérault et l’Aveyron, dans vos locaux. Au-delà, contactez-moi : c’est souvent possible.' },
  { q: 'Combien de participants ?', a: 'De 15 à 50 personnes pour une conférence, de 5 à 12 pour un cycle, pour que chacun puisse pratiquer et échanger.' },
  { q: 'S’agit-il de soins ou de consultations ?', a: 'Non. Mes interventions relèvent de la prévention et de l’éducation à la santé. Elles ne remplacent pas un suivi médical ou psychologique.' },
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
        jsonLd={[breadcrumbLd(crumbs), faqLd(faq)]}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Structures & financeurs"
        title="Des actions de prévention clés en main, pensées pour l’avancée en âge"
        lead="Pour les CCAS, centres sociaux, résidences autonomie, EHPAD, SAAD, plateformes de répit, collectivités et financeurs de la prévention, dans l’Hérault et l’Aveyron."
      >
        <Button to="/contact?profil=structure" arrow>Échanger sur votre projet</Button>
        <Button href={SITE.plaquette} variant="secondary" download>
          <Download aria-hidden className="h-4 w-4" /> Plaquette (PDF)
        </Button>
      </PageHero>

      <Section tone="white">
        <SectionHeader
          eyebrow="Pour démarrer"
          title="Deux conférences interactives"
          intro="Une première porte d’entrée, facile à organiser et à financer, qui donne envie au public d’aller plus loin."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {conferences.map((c) => (
            <Link key={c.slug} to={c.path} className="card group flex flex-col p-7 transition-shadow hover:shadow-lg">
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

      <Section>
        <SectionHeader eyebrow="Pour aller plus loin" title="Un programme par public" />
        <div className="grid gap-5 md:grid-cols-3">
          {programmes.map((p) => {
            const a = accentClasses[p.accent];
            const format = p.facts.find((f) => f.label === 'Format')?.value.split('.')[0];
            return (
              <Link key={p.slug} to={p.path} className={`group flex flex-col rounded-2xl border ${a.border} bg-cream-light p-7 transition-shadow hover:shadow-soft`}>
                <span className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider ${a.text}`}>
                  <span aria-hidden className={`h-2 w-2 rounded-full ${a.dot}`} />
                  {p.audience}
                </span>
                <h3 className="mt-4 text-2xl font-medium leading-snug">{p.title}</h3>
                <p className="mt-3 flex-1 text-ink-soft">{p.promise}</p>
                <p className="mt-5 text-sm text-ink-muted">{format}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-medium">
                  Voir le programme <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeader eyebrow="Comment ça se passe" title="De votre premier appel au bilan pour le financeur" />
        <ol className="grid gap-6 md:grid-cols-4">
          {etapes.map((e, i) => (
            <li key={e.title} className="rounded-2xl bg-cream-light p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-heading text-lg text-cream">{i + 1}</span>
              <h3 className="mt-4 text-xl font-medium">{e.title}</h3>
              <p className="mt-2 text-[0.98rem] text-ink-soft">{e.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
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

      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
          <SectionHeader eyebrow="Questions fréquentes" title="Ce que les structures me demandent" />
          <Faq items={faq} />
        </div>
      </Section>

      <CtaBand
        title="Parlons de votre public"
        text="Un appel de vingt minutes suffit pour savoir si une conférence ou un cycle a du sens chez vous, et comment le financer."
        primary={{ label: 'Échanger sur votre projet', to: '/contact?profil=structure' }}
      />
    </>
  );
}
