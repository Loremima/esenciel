import { Link } from 'react-router-dom';
import { Mic } from 'lucide-react';
import { SITE } from '../content/site';
import { conferences } from '../content/offres';
import { objections } from '../content/structures';
import {
  AudienceVideos,
  BookingSection,
  FaqSection,
  FundersChips,
  HeroVideo,
  KeyTiles,
  PrimaryCta,
  ProofGrid,
  StepsRow,
  Title,
} from '../components/funnel';
import { MEDIA } from '../content/media';
import { Seo, breadcrumbLd, faqLd } from '../lib/head';

export default function StructuresPage() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Structures & financeurs', path: '/structures' },
  ];
  return (
    <>
      <Seo
        title="Ateliers et conférences de prévention pour CCAS, EHPAD et CFPPA | Véronique Carrié"
        description="Conférences, cycles et journées de prévention sur le cerveau et l’avancée en âge, pour seniors, aidants et soignants. Fiche-action et évaluation incluses. Hérault et Aveyron."
        path="/structures"
        jsonLd={[breadcrumbLd(crumbs), faqLd(objections)]}
      />

      <HeroVideo
        media={MEDIA.ciel}
        eyebrow="Structures et financeurs"
        title={<>La prévention, <em>clés en main</em></>}
        lead="Pour les CCAS, résidences, EHPAD, SAAD et plateformes de répit."
      >
        <PrimaryCta to="#rdv" light>Prendre rendez-vous</PrimaryCta>
        <a href={SITE.plaquette} download className="text-[0.95rem] text-cream/85 underline decoration-cream/40 underline-offset-4 hover:text-cream">
          Télécharger la plaquette
        </a>
      </HeroVideo>

      <ProofGrid />
      <StepsRow />
      <KeyTiles tone="sand" />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-site">
          <Title kicker="Pour démarrer">Deux conférences</Title>
          <div className="mx-auto mt-8 grid max-w-4xl gap-3 md:mt-12 md:grid-cols-2 md:gap-5">
            {conferences.map((c) => (
              <Link key={c.slug} to={c.path} className="group flex flex-col items-center gap-3 rounded-3xl border border-sand-dark bg-cream-light px-6 py-8 text-center transition-transform hover:-translate-y-0.5">
                <Mic aria-hidden className="h-7 w-7 text-gold-dark" strokeWidth={1.5} />
                <span className="font-heading text-[1.35rem] leading-snug md:text-2xl">{c.title}</span>
                <span className="text-sm text-gold-dark">{c.stats[0].value} · {c.stats[1].value} {c.stats[1].label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AudienceVideos kicker="Pour aller plus loin" title="Trois programmes" />
      <FundersChips />
      <FaqSection items={objections} />
      <BookingSection />
    </>
  );
}
