import { Award, GraduationCap, HeartHandshake, Leaf } from 'lucide-react';
import { Button, CtaBand, PageHero, Section, SectionHeader } from '../components/ui';
import { SITE } from '../content/site';
import { Seo, breadcrumbLd } from '../lib/head';

const parcours = [
  { icon: GraduationCap, title: 'Master 1 de psychologie clinique', text: 'Spécialisation en neuropsychologie du vieillissement : le fonctionnement de l’attention, de la mémoire et des émotions quand on avance en âge.' },
  { icon: Leaf, title: 'Instructrice certifiée MBSR, MBCT et MBCAS', text: 'Les trois programmes de pleine conscience les plus étudiés : gestion du stress, prévention de la rechute dépressive, et avancée en âge.' },
  { icon: Award, title: 'Formatrice en éducation à la santé', text: 'Certifiée en promotion et éducation à la santé, coach en prévention santé et qualité de vie.' },
  { icon: HeartHandshake, title: 'Intervenante de terrain', text: 'J’anime des ateliers de prévention pour le programme Neo Silver, et j’interviens dans l’Hérault et l’Aveyron.' },
];

const valeurs = [
  { title: 'Rigueur', text: 'Des contenus issus de la recherche, expliqués sans jargon.' },
  { title: 'Bienveillance', text: 'Chacun avance à son rythme, sans jugement.' },
  { title: 'Concret', text: 'Des outils que l’on peut utiliser dès le lendemain.' },
  { title: 'Honnêteté', text: 'Je dis clairement ce que je fais, et ce que je ne fais pas.' },
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
        description="Le parcours de Véronique Carrié : psychologie clinique (Master 1), neuropsychologie du vieillissement, pleine conscience et éducation à la santé. Hérault et Aveyron."
        path="/qui-suis-je"
        jsonLd={[breadcrumbLd(crumbs)]}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Qui suis-je"
        title="Véronique Carrié"
        lead="J’aide chacun à mieux comprendre son cerveau pour traverser les changements de la vie : l’âge qui avance, le rôle d’aidant, un métier qui épuise."
        aside={<img src="/images/veronique.webp" alt="Portrait de Véronique Carrié" width={800} height={1000} className="mx-auto w-full max-w-sm rounded-3xl object-cover shadow-soft" />}
      >
        <Button to="/contact" arrow>Me contacter</Button>
      </PageHero>

      <Section tone="white">
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            Au fil de mon parcours dans la prévention et l’accompagnement, j’ai vu combien comprendre son propre fonctionnement pouvait changer une trajectoire de vie. Quand on sait pourquoi le cerveau s’emballe, oublie ou se fatigue, on a moins peur, et on peut agir.
          </p>
          <p>
            C’est le cœur d’EsenCiel : <strong className="font-semibold text-ink">comprendre, observer, agir</strong>. J’associe les apports de la neuropsychologie, les pratiques de pleine conscience et l’éducation à la santé pour transmettre des outils simples, que chacun adapte à sa vie.
          </p>
          <p>
            Je travaille surtout avec les structures qui accompagnent l’avancée en âge (CCAS, centres sociaux, résidences, EHPAD, plateformes de répit) et avec les particuliers qui souhaitent avancer en groupe ou en individuel.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Formation et expérience" title="Mon parcours" />
        <div className="grid gap-5 sm:grid-cols-2">
          {parcours.map((p) => (
            <div key={p.title} className="card flex gap-5 p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-light/30 text-gold-dark">
                <p.icon aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-medium">{p.title}</h3>
                <p className="mt-2 text-ink-soft">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-ink-soft">
          Mes interventions relèvent de la prévention et de l’éducation à la santé. Je ne pratique ni consultation ni psychothérapie : si votre situation le demande, je vous oriente vers les professionnels de santé adaptés.
        </p>
      </Section>

      <Section tone="sand">
        <SectionHeader eyebrow="Ce qui me guide" title="Mes valeurs" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valeurs.map((v) => (
            <div key={v.title} className="border-t-2 border-gold pt-4">
              <h3 className="text-xl font-medium">{v.title}</h3>
              <p className="mt-2 text-ink-soft">{v.text}</p>
            </div>
          ))}
        </div>
        <blockquote className="mx-auto mt-16 max-w-3xl text-center">
          <p className="font-heading text-2xl italic leading-snug text-ink md:text-3xl">
            « Entre le stimulus et la réponse, il y a un espace. Dans cet espace se trouve notre pouvoir de choisir notre réponse. »
          </p>
          <footer className="mt-4 text-ink-muted">Pensée attribuée à Viktor Frankl</footer>
        </blockquote>
      </Section>

      <CtaBand
        title="Travaillons ensemble"
        text={`Une structure à accompagner, ou une démarche personnelle ? Écrivez-moi ou appelez le ${SITE.phone}.`}
        primary={{ label: 'Me contacter', to: '/contact' }}
      />
    </>
  );
}
