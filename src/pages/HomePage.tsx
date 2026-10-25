import { Link } from 'react-router-dom';
import { CREDENTIALS } from '../content/site';
import { objections } from '../content/structures';
import { HeroVideo } from '../components/funnel';
import { DoorCard } from '../components/doors';
import { MEDIA } from '../content/media';
import { PHOTOS } from '../content/photos';
import { Seo, faqLd } from '../lib/head';

// L'accueil est un carrefour : il dit qui je suis en une phrase, puis envoie
// chaque visiteur vers son espace (structures ou particuliers).
export default function HomePage() {
  return (
    <>
      <Seo
        title="EsenCiel, Véronique Carrié : prendre soin de son cerveau, à chaque âge de la vie"
        description={`Actions de prévention pour les structures et ateliers pour les particuliers : cerveau, stress et avancée en âge, dans l’Hérault et l’Aveyron. ${CREDENTIALS.certifications}.`}
        path="/"
        jsonLd={[faqLd(objections)]}
      />

      <HeroVideo
        media={MEDIA.ciel}
        kicker="EsenCiel"
        title={<>Prendre soin de son cerveau, <em>à chaque âge</em> de la vie</>}
        lead="J’aide à comprendre son cerveau pour sortir du pilote automatique, dans l’Hérault, l’Aveyron et à distance."
      />

      <section className="bg-cream pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="container-site">
          <h2 className="h-section text-center">Vous êtes…</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:mt-10 md:grid-cols-2 md:gap-7">
            <DoorCard
              to="/structures"
              photo={PHOTOS.structureGroupe}
              kicker="Une structure"
              title="CCAS, centre social, résidence, EHPAD, plateforme de répit"
              text="Des actions de prévention pour vos seniors, vos aidants et vos équipes, avec la fiche-action et le bilan pour votre financeur."
              cta="Espace structures"
            />
            <DoorCard
              to="/particuliers"
              photo={PHOTOS.particulierCouple}
              kicker="Un particulier"
              title="Pour vous ou pour un proche"
              text="Garder un cerveau en forme après 60 ans, souffler quand on accompagne un proche, retrouver du calme face au stress."
              cta="Trouver mon atelier"
            />
          </div>
        </div>
      </section>

      <section className="bg-sand py-14 md:py-20">
        <div className="container-site flex max-w-4xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
          <img src="/images/veronique-480.webp" alt="Portrait de Véronique Carrié" width={480} height={600} loading="lazy" className="h-[220px] w-[176px] shrink-0 rounded-arch object-cover md:h-[260px] md:w-[208px]" />
          <div>
            <h2 className="font-heading text-[2rem] font-light leading-tight">Véronique Carrié</h2>
            <p className="mt-3 text-[1.06rem] text-ink-soft">{CREDENTIALS.short}. {CREDENTIALS.certifications}.</p>
            <p className="mt-3 text-[1.06rem] text-ink-soft">Ma méthode tient en trois mots : <strong className="font-semibold text-ink">comprendre</strong> comment fonctionne son cerveau, <strong className="font-semibold text-ink">observer</strong> ses automatismes, <strong className="font-semibold text-ink">agir</strong> pour reprendre la main.</p>
            <Link to="/qui-suis-je" className="link-underline mt-5 inline-block font-medium">Mon parcours</Link>
          </div>
        </div>
      </section>
    </>
  );
}
