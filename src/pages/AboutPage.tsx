import { Award, GraduationCap, MapPin, Presentation } from 'lucide-react';
import { BookingSection, IconSquare, LoopVideo, Title } from '../components/funnel';
import { MEDIA } from '../content/media';
import { Seo, breadcrumbLd } from '../lib/head';

const parcours = [
  { icon: GraduationCap, title: 'Master 1 de psychologie clinique', text: 'Neuropsychologie du vieillissement' },
  { icon: Award, title: 'Instructrice certifiée', text: 'MBSR, MBCT, MBCAS' },
  { icon: Presentation, title: 'Formatrice', text: 'Éducation et promotion de la santé' },
  { icon: MapPin, title: 'Sur le terrain', text: 'Neo Silver, Hérault, Aveyron' },
];

const valeurs = [
  { title: 'Rigueur', text: 'Issu de la recherche' },
  { title: 'Bienveillance', text: 'Sans jugement' },
  { title: 'Concret', text: 'Utile dès demain' },
  { title: 'Honnêteté', text: 'Ce que je fais, et pas' },
];

export default function AboutPage() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Qui suis-je', path: '/qui-suis-je' },
  ];
  return (
    <>
      <Seo
        title="Véronique Carrié, formée en neuropsychologie du vieillissement et instructrice MBSR, MBCT, MBCAS"
        description="Le parcours de Véronique Carrié : psychologie clinique (Master 1), neuropsychologie du vieillissement, pleine conscience et éducation à la santé. Hérault et Aveyron."
        path="/qui-suis-je"
        jsonLd={[breadcrumbLd(crumbs)]}
      />

      <section className="relative -mt-[4.5rem] overflow-hidden bg-night pb-14 pt-28 text-center text-cream md:pb-20 md:pt-32">
        <LoopVideo media={MEDIA.ciel} className="opacity-55" priority />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-night/30 to-night/95" />
        <div className="container-site fade-up relative flex flex-col items-center">
          <img src="/images/veronique.webp" alt="Portrait de Véronique Carrié" width={800} height={1000} className="h-[288px] w-[230px] rounded-arch border-4 border-gold-light/50 object-cover md:h-[360px] md:w-[288px]" />
          <h1 className="mt-6 font-heading font-light text-cream [font-size:clamp(2.5rem,5vw,3.8rem)]">Véronique Carrié</h1>
          <p className="mt-3 max-w-md text-cream/85 md:text-lg">Comprendre son cerveau pour traverser les changements de la vie.</p>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-site">
          <Title>Mon parcours</Title>
          <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-2.5 md:mt-12 md:grid-cols-4 md:gap-5">
            {parcours.map((p) => (
              <li key={p.title} className="flex flex-col items-center gap-2.5 rounded-[22px] bg-cream-light px-2.5 py-6 text-center">
                <IconSquare icon={p.icon} />
                <span className="text-sm font-semibold leading-tight">{p.title}</span>
                <span className="text-[0.82rem] leading-tight text-ink-muted">{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sand px-7 py-16 text-center md:py-20">
        <span aria-hidden className="block font-heading text-7xl leading-[0.5] text-gold">“</span>
        <p className="mx-auto mt-4 max-w-2xl font-heading text-[1.65rem] font-light leading-snug md:text-4xl">
          Quand on sait pourquoi le cerveau s’emballe, oublie ou se fatigue, on a moins peur, et on peut agir.
        </p>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-site">
          <Title>Ma façon de faire</Title>
          <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-2.5 md:mt-12 md:grid-cols-4 md:gap-5">
            {valeurs.map((v) => (
              <li key={v.title} className="rounded-[20px] border border-sand-dark px-2 py-5 text-center">
                <span className="block font-heading text-[1.4rem]">{v.title}</span>
                <span className="mt-1 block text-[0.82rem] text-ink-muted">{v.text}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-ink-muted">
            Mes interventions relèvent de la prévention et de l’éducation à la santé. Je ne pratique ni consultation ni psychothérapie : si votre situation le demande, je vous oriente vers les professionnels de santé adaptés.
          </p>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
