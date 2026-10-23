import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { conferences } from '../content/offres';
import { BookingSection, HeroVideo, PrimaryCta } from '../components/funnel';
import { MEDIA } from '../content/media';
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
      <HeroVideo
        media={MEDIA.ciel}
        eyebrow="Conférences"
        title={<>Comprendre son cerveau, <em>et reprendre la main</em></>}
        lead="Interactives, sans jargon, avec des expériences à vivre en direct."
      >
        <PrimaryCta to="#rdv" light>Organiser une conférence</PrimaryCta>
      </HeroVideo>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-site">
          <ol className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 md:gap-5">
            {conferences.map((c, i) => (
              <li key={c.slug}>
                <Link to={c.path} className="group flex h-full flex-col items-center rounded-3xl border border-sand-dark bg-cream-light px-6 py-9 text-center transition-transform hover:-translate-y-0.5">
                  <span className="font-heading text-5xl font-light text-gold">{i + 1}</span>
                  <span className="mt-3 font-heading text-[1.45rem] leading-snug md:text-2xl">{c.title}</span>
                  <span className="mt-3 text-ink-muted">{c.promise}</span>
                  <span className="mt-2 text-sm text-gold-dark">{c.stats[0].value} · {c.stats[1].value} {c.stats[1].label}</span>
                  <span className="mt-5 inline-flex items-center gap-2 font-medium">
                    Le programme <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-ink-muted">
            Les deux se suivent naturellement : la première fait comprendre le pilote automatique, la seconde donne des outils. Commandées ensemble, tarif dégressif.
          </p>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
