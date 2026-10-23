import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button, CtaBand, PageHero, Section } from '../components/ui';
import { conferences } from '../content/offres';
import { Seo, breadcrumbLd } from '../lib/head';

export default function ConferencesPage() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Conférences', path: '/conferences' },
  ];
  return (
    <>
      <Seo
        title="Conférences sur le cerveau, le stress et l’avancée en âge | Véronique Carrié"
        description="Deux conférences interactives sur le pilote automatique du cerveau, pour communes, CCAS, associations et établissements. Hérault et Aveyron."
        path="/conferences"
        jsonLd={[breadcrumbLd(crumbs)]}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Conférences"
        title="Deux conférences pour comprendre son cerveau, et reprendre la main"
        lead="Interactives, sans jargon, avec des expériences à vivre en direct. Pour une commune, un CCAS, une association, une résidence ou une équipe de soignants."
      >
        <Button to="/contact?profil=structure" arrow>Organiser une conférence</Button>
      </PageHero>

      <Section tone="white">
        <div className="space-y-6">
          {conferences.map((c, i) => (
            <article key={c.slug} className="card grid gap-6 p-7 md:grid-cols-[5rem_1fr_auto] md:items-center md:p-9">
              <span aria-hidden className="font-heading text-6xl text-gold/60">{i + 1}</span>
              <div>
                <h2 className="text-2xl font-medium leading-snug md:text-3xl">{c.title}</h2>
                <p className="mt-3 max-w-2xl text-ink-soft">{c.promise}</p>
                <p className="mt-3 text-sm text-ink-muted">1 h 30 à 2 h · 15 à 50 personnes · seniors, aidants ou professionnels</p>
              </div>
              <Link to={c.path} className="inline-flex items-center gap-2 self-start rounded-full border border-ink/80 px-5 py-2.5 font-medium transition-colors hover:bg-ink hover:text-cream md:self-center">
                Le programme <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-ink-soft">
          Les deux conférences se suivent naturellement : la première fait comprendre le pilote automatique, la seconde donne des outils pour reprendre la main. Commandées ensemble, elles bénéficient d’un tarif dégressif.
        </p>
      </Section>

      <CtaBand title="Une date en tête ?" text="Semaine bleue, journée des aidants, forum santé, réunion d’équipe : dites-moi votre événement et votre public." primary={{ label: 'Organiser une conférence', to: '/contact?profil=structure' }} />
    </>
  );
}
