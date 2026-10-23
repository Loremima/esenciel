import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Button, CtaBand, Section } from '../components/ui';
import {
  AudienceSection,
  LadderSection,
  MethodSection,
  ObjectionsSection,
  OfferStackSection,
  PainSection,
  ParticuliersBand,
  ProcessSection,
  TrustBar,
  VideoHero,
} from '../components/funnel';
import { CREDENTIALS, SITE } from '../content/site';
import { CTA_APPEL, objections } from '../content/structures';
import { Seo, faqLd } from '../lib/head';

export default function HomePage() {
  return (
    <>
      <Seo
        title="EsenCiel, Véronique Carrié : piloter son cerveau face aux changements de la vie"
        description="Conférences et ateliers de prévention clés en main pour seniors, aidants et soignants : fiche-action, animation, évaluation et bilan compris. Hérault et Aveyron."
        path="/"
        jsonLd={[faqLd(objections)]}
      />

      <VideoHero
        eyebrow="Prévention santé · seniors, aidants, soignants"
        title={
          <>
            Piloter son cerveau face aux <em className="font-normal italic text-gold-light">changements</em> de la vie
          </>
        }
        lead="Des conférences et des ateliers de prévention clés en main pour vos publics. Finançables, évalués, et sans travail en plus pour votre équipe."
        footnote={
          <Link to="/particuliers" className="underline decoration-cream/40 underline-offset-4 hover:text-cream">
            Vous venez pour vous-même ? Voir les offres particuliers
          </Link>
        }
      >
        <Button to={CTA_APPEL.to} variant="light" arrow>{CTA_APPEL.label}</Button>
        <a
          href={SITE.plaquette}
          download
          className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/50 px-6 py-3 text-[0.95rem] font-medium text-cream backdrop-blur-sm transition-colors hover:bg-cream/10"
        >
          <Download aria-hidden className="h-4 w-4" /> La plaquette (PDF)
        </a>
      </VideoHero>

      <TrustBar />
      <PainSection />
      <OfferStackSection />
      <AudienceSection />
      <MethodSection />
      <LadderSection />
      <ProcessSection tone="sand" />

      {/* Qui suis-je, en bref */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.4fr]">
          <img src="/images/veronique.webp" alt="Portrait de Véronique Carrié" width={800} height={1000} loading="lazy" className="mx-auto w-full max-w-xs rounded-arch object-cover shadow-soft" />
          <div>
            <p className="eyebrow mb-3">Qui suis-je</p>
            <h2 className="h-section">Véronique Carrié</h2>
            <p className="mt-5 border-l-2 border-gold pl-5 font-heading text-2xl leading-snug text-ink">
              J’aide chacun à mieux comprendre son cerveau pour traverser les changements de la vie, avec des outils simples, issus de la recherche, que l’on peut utiliser dès le lendemain.
            </p>
            <p className="mt-5 text-ink-soft">{CREDENTIALS.short}. {CREDENTIALS.certifications}. {CREDENTIALS.references}.</p>
            <Link to="/qui-suis-je" className="link-underline mt-6 inline-block font-medium">Mon parcours</Link>
          </div>
        </div>
      </Section>

      <ObjectionsSection tone="sand" />

      <CtaBand
        title="Et si on en parlait 20 minutes ?"
        text="Votre public, vos dates, votre financement : vous repartez avec une idée claire de ce qui est possible chez vous. Gratuit et sans engagement."
        primary={CTA_APPEL}
      />
      <ParticuliersBand />
    </>
  );
}
