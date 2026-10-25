import { CREDENTIALS, SITE } from '../content/site';
import { Opening, Part, PhoneLine, TextLink } from '../components/calm';
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

      <Opening title="Véronique Carrié" lead="J’aide à comprendre son cerveau pour traverser les changements de la vie." />

      <Part title="Mon parcours">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <img src="/images/veronique.webp" alt="Portrait de Véronique Carrié" width={800} height={1000} className="h-[250px] w-[200px] shrink-0 rounded-arch object-cover" />
          <ul className="space-y-3">
            {PARCOURS.map((p) => <li key={p} className="border-l-2 border-gold pl-4">{p}</li>)}
          </ul>
        </div>
      </Part>

      <Part>
        <blockquote className="font-heading text-[1.7rem] font-light leading-snug text-ink md:text-[2rem]">
          « Quand on sait pourquoi le cerveau s’emballe, oublie ou se fatigue, on a moins peur, et on peut agir. »
        </blockquote>
      </Part>

      <Part title="Ce que je fais, et ce que je ne fais pas">
        <p>Je conçois et j’anime des conférences et des ateliers de prévention : comprendre comment fonctionnent l’attention, la mémoire, le stress et nos automatismes, puis s’entraîner à reprendre la main.</p>
        <p className="mt-3">Mes interventions relèvent de la prévention et de l’éducation à la santé. Je ne pratique ni consultation ni psychothérapie : si votre situation le demande, je vous oriente vers les professionnels de santé adaptés.</p>
      </Part>

      <Part title="Travailler avec moi">
        <p className="flex flex-col gap-1">
          <TextLink to="/structures">Vous êtes une structure</TextLink>
          <TextLink to="/particuliers">Pour vous ou un proche</TextLink>
        </p>
        <p className="mt-6"><PhoneLine /></p>
        <p className="mt-1 text-ink-muted">{SITE.zone}, et à distance.</p>
      </Part>
    </>
  );
}
