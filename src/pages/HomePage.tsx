import { CREDENTIALS } from '../content/site';
import { objections } from '../content/structures';
import { Link } from 'react-router-dom';
import { BookingSection, HeroVideo, MethodBand, ProofGrid, VeroniqueIntro } from '../components/funnel';
import { DoorCard } from '../components/doors';
import { MEDIA } from '../content/media';
import { PHOTOS } from '../content/photos';
import { Seo, faqLd } from '../lib/head';

export default function HomePage() {
  return (
    <>
      <Seo
        title="EsenCiel, Véronique Carrié : prendre soin de son cerveau, à chaque âge de la vie"
        description={`Conférences et ateliers de prévention clés en main pour seniors, aidants et soignants, dans l’Hérault et l’Aveyron. ${CREDENTIALS.certifications}.`}
        path="/"
        jsonLd={[faqLd(objections)]}
      />

      <HeroVideo
        full
        media={MEDIA.ciel}
        kicker="EsenCiel"
        title={<>Prendre soin de son cerveau, <em>à chaque âge</em> de la vie</>}
        lead="Ateliers et conférences dans l’Hérault et l’Aveyron, avec Véronique Carrié."
      >
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link to="/structures" className="btn bg-cream text-night hover:bg-cream-light">Je travaille dans une structure</Link>
          <Link to="/particuliers" className="btn border border-cream/60 text-cream hover:bg-cream/10">Pour moi ou un proche</Link>
        </div>
      </HeroVideo>

      <ProofGrid />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-site">
          <h2 className="h-section text-center">Vous venez <em>pour qui ?</em></h2>
          <div className="mx-auto mt-9 grid max-w-5xl gap-5 md:mt-12 md:grid-cols-2 md:gap-7">
            <DoorCard
              to="/structures"
              photo={PHOTOS.structureGroupe}
              kicker="Structures"
              title="Vous accompagnez des seniors, des aidants ou des soignants"
              text="CCAS, centre social, résidence, EHPAD, plateforme de répit : je conçois et j’anime l’action de prévention, et je vous fournis la fiche-action et le bilan pour votre financeur."
              cta="Voir l’offre pour les structures"
            />
            <DoorCard
              to="/particuliers"
              photo={PHOTOS.particulierCouple}
              kicker="Pour vous ou un proche"
              title="Garder un cerveau en forme et l’esprit serein"
              text="Après 60 ans, quand on accompagne un proche, ou quand le stress déborde : des ateliers en petit groupe, dont certains gratuits, et des séances individuelles."
              cta="Trouver mon atelier"
            />
          </div>
        </div>
      </section>

      <MethodBand />
      <div className="pt-16 md:pt-24 bg-cream" />
      <VeroniqueIntro />
      <BookingSection />
    </>
  );
}
