import { CREDENTIALS, SITE } from '../content/site';
import { objections } from '../content/structures';
import {
  AudienceVideos,
  BookingSection,
  FormatsList,
  HeroVideo,
  KeyTiles,
  MethodBand,
  PrimaryCta,
  ProofGrid,
  VeroniqueIntro,
} from '../components/funnel';
import { MEDIA } from '../content/media';
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
        lead="Conférences et ateliers pour seniors, aidants et soignants."
      >
        <PrimaryCta to="#rdv" light>Prendre rendez-vous</PrimaryCta>
        <a href={SITE.plaquette} download className="text-[0.95rem] text-cream/85 underline decoration-cream/40 underline-offset-4 hover:text-cream">
          Télécharger la plaquette
        </a>
      </HeroVideo>

      <ProofGrid />
      <KeyTiles />
      <AudienceVideos />
      <MethodBand />
      <FormatsList />
      <VeroniqueIntro />
      <BookingSection />
    </>
  );
}
