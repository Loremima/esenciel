import { CREDENTIALS, SITE } from '../content/site';
import { Band, Btn, Card, CtaBand, Hero } from '../components/calm';
import { Seo, breadcrumbLd } from '../lib/head';

// Qui suis-je répond à une question : « À qui vais-je avoir affaire ? »

const PARCOURS = [
  CREDENTIALS.short,
  CREDENTIALS.certifications,
  `${CREDENTIALS.health}`,
  `${CREDENTIALS.references}, dans l’Hérault et l’Aveyron`,
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

      <Hero
        crumbs={crumbs}
        kicker="Qui suis-je"
        title={<>Véronique <em>Carrié.</em></>}
        lead="J’aide à comprendre son cerveau pour traverser les changements de la vie."
        actions={
          <>
            <Btn to="/structures">Structures</Btn>
            <Btn to="/particuliers" variant="outline" light>Particuliers</Btn>
          </>
        }
        aside={<img src="/images/veronique.webp" alt="Portrait de Véronique Carrié" width={800} height={1000} className="mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] object-cover shadow-2xl lg:ml-auto" />}
      />

      <Band kicker="Mon parcours" title="Formation et certifications.">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PARCOURS.map((p, i) => (
            <li key={p} className="rounded-3xl border border-sand-dark bg-cream-light p-6 text-ink">
              <span className="font-heading text-[2rem] leading-none text-gold-dark">{String(i + 1).padStart(2, '0')}</span>
              <span className="mt-4 block">{p}</span>
            </li>
          ))}
        </ul>
      </Band>

      <Band tone="night">
        <blockquote className="max-w-4xl font-heading font-light leading-[1.12] text-cream [font-size:clamp(2rem,4vw,3.2rem)] [text-wrap:balance]">
          « Quand on sait pourquoi le cerveau s’emballe, oublie ou se fatigue, on a moins peur, et on peut agir. »
        </blockquote>
      </Band>

      <Band kicker="Mon cadre" title="Ce que je fais, et ce que je ne fais pas.">
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <p className="font-heading text-[1.5rem] text-ink">Je fais</p>
            <p className="mt-3 text-ink-soft">Je conçois et j’anime des conférences et des ateliers de prévention : comprendre comment fonctionnent l’attention, la mémoire, le stress et nos automatismes, puis s’entraîner à reprendre la main.</p>
          </Card>
          <Card>
            <p className="font-heading text-[1.5rem] text-ink">Je ne fais pas</p>
            <p className="mt-3 text-ink-soft">Mes interventions relèvent de la prévention et de l’éducation à la santé. Je ne pratique ni consultation ni psychothérapie : si votre situation le demande, je vous oriente vers les professionnels de santé adaptés.</p>
          </Card>
        </div>
      </Band>

      <CtaBand title="Travaillons ensemble." text={`${SITE.zone}, et à distance.`} primary={{ to: '/contact', label: 'Me contacter' }} />
    </>
  );
}
