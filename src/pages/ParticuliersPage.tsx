import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { particuliers, type OffreParticulier } from '../content/offres';
import { NotifyForm } from '../components/NotifyForm';
import { Opening, Part, PhoneLine, Row, TextLink } from '../components/calm';
import { SITE } from '../content/site';
import { Seo, breadcrumbLd } from '../lib/head';

// La page particuliers répond à une question : « Qu'est-ce qui m'aiderait, moi, maintenant ? »
// On part de ce que la personne vit, jamais d'un sigle.

const SITUATIONS = [
  { title: 'Le stress me déborde', text: 'Retrouver du calme, mieux dormir, ne plus ruminer.', to: '/particuliers/gestion-du-stress' },
  { title: 'Je veux garder ma mémoire', text: 'Après 60 ans : l’attention, la mémoire, et vivre les changements de l’âge plus sereinement.', to: '/particuliers/bien-vivre-son-avancee-en-age' },
  { title: 'J’aide un proche', text: 'Souffler et ne pas s’épuiser. Des ateliers souvent gratuits pour vous.', to: '#gratuits' },
];

// Ce que l'on achète, dit simplement.
const FORMAT: Record<string, string> = {
  'gestion-du-stress': '8 séances en petit groupe',
  'prevention-rechute-depressive': '8 séances en petit groupe, après un entretien',
  'bien-vivre-son-avancee-en-age': '15 séances en petit groupe, sur 8 mois',
  'jeu-du-tao': 'Une demi-journée, à 3 ou 4',
  'sante-et-vitalite': 'Seul avec moi, sur place ou à distance',
  'pleine-conscience': 'Seul avec moi, sur place ou à distance',
};

const prix = (o: OffreParticulier) => (o.category === 'individuel' ? '90 €, puis 60 €' : o.price.replace(' le cycle', '').replace(' par personne', ''));

export default function ParticuliersPage() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Pour vous ou un proche', path: '/particuliers' },
  ];
  const solo = particuliers.filter((o) => o.category === 'individuel');
  const groupe = particuliers.filter((o) => o.category !== 'individuel');

  return (
    <>
      <Seo
        title="Ateliers pour garder sa mémoire, apaiser le stress et aider un proche | Véronique Carrié"
        description="Ateliers en petit groupe et séances individuelles : garder sa mémoire après 60 ans, apaiser le stress, souffler quand on aide un proche. Hérault, Aveyron et à distance."
        path="/particuliers"
        jsonLd={[breadcrumbLd(crumbs)]}
      />

      <Opening title={<>Garder un cerveau <em>en forme</em>, à tout âge</>} lead="Des ateliers en petit groupe et des séances avec moi, dans l’Hérault, l’Aveyron ou à distance. Le plus simple : appelez-moi.">
        <PhoneLine light big />
      </Opening>

      <Part large title="Par où commencer ?">
        <ul className="border-t border-sand-dark">
          {SITUATIONS.map((s) => (
            <li key={s.title}>
              <Link to={s.to} className="group flex items-center gap-4 border-b border-sand-dark py-6">
                <span className="flex-1">
                  <span className="block font-heading text-[1.6rem] leading-snug text-ink">{s.title}</span>
                  <span className="mt-1 block">{s.text}</span>
                </span>
                <ArrowRight aria-hidden className="h-6 w-6 shrink-0 text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-ink" />
              </Link>
            </li>
          ))}
        </ul>
      </Part>

      <Part large id="gratuits" title="Des ateliers gratuits près de chez vous">
        <p>Certains de mes ateliers sont financés par les caisses de retraite, le Département ou votre commune. Pour vous, ils sont gratuits. Laissez votre prénom et votre e-mail : je vous préviens du prochain près de chez vous.</p>
        <div className="mt-6 max-w-md">
          <NotifyForm light offre="ateliers-gratuits" title="ateliers gratuits" message="Prévenez-moi du prochain atelier gratuit près de chez moi." />
        </div>
      </Part>

      <Part large id="formules" title="Avec moi">
        <p className="font-medium text-ink">Seul avec moi</p>
        <ul className="mt-2 border-t border-sand-dark">
          {solo.map((o) => <Row key={o.slug} to={o.path} title={o.title} detail={FORMAT[o.slug]} aside={prix(o)} />)}
        </ul>
        <p className="mt-10 font-medium text-ink">En petit groupe</p>
        <ul className="mt-2 border-t border-sand-dark">
          {groupe.map((o) => <Row key={o.slug} to={o.path} title={o.title} detail={FORMAT[o.slug]} aside={prix(o)} />)}
        </ul>
        <p className="mt-6 text-[1rem] text-ink-muted">Avant un cycle, une séance découverte permet de vérifier qu’il vous convient. Elle se réserve en ligne.</p>
      </Part>

      <Part large title="Me joindre">
        <p>Une question, un doute sur ce qui vous conviendrait ? Appelez-moi, ou écrivez-moi.</p>
        <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
          <PhoneLine big />
          <TextLink to="/contact?profil=particulier">M’écrire</TextLink>
          <TextLink to={SITE.booking}>Réserver en ligne</TextLink>
        </div>
        <p className="mt-10 text-[0.95rem] text-ink-muted">Mes séances relèvent de la prévention et de l’éducation à la santé. Elles ne remplacent pas un suivi médical.</p>
      </Part>
    </>
  );
}
