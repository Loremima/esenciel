import { CREDENTIALS, FIRST_MEETING, SITE } from '../content/site';
import { ACTIONS } from '../content/actions';
import { REPERES_PRIX, etapes } from '../content/structures';
import { MainButton, Opening, Part, PhoneLine, Row, Steps, TextLink } from '../components/calm';
import { Seo, breadcrumbLd } from '../lib/head';

// La page Structures répond à une question : « Que pouvez-vous faire pour mon public,
// et comment je le finance ? » Cinq sections, un seul bouton : l'échange de 20 min.

export default function StructuresPage() {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Structures', path: '/structures' },
  ];
  const rdv = FIRST_MEETING.structure.href;

  return (
    <>
      <Seo
        title="Actions de prévention pour CCAS, CFPPA, résidences et EHPAD | Véronique Carrié"
        description="Conférences et cycles de prévention sur le cerveau, le stress et l’avancée en âge, pour seniors, aidants et soignants. Fiche-action, évaluation et bilan fournis. Hérault et Aveyron."
        path="/structures"
        jsonLd={[breadcrumbLd(crumbs)]}
      />

      <Opening
        title={<>Des actions de prévention <em>prêtes à déposer</em></>}
        lead="Pour les CCAS, CFPPA, résidences autonomie, EHPAD et centres sociaux de l’Hérault et de l’Aveyron. Je fournis l’action, la fiche-action et le bilan."
      >
        <MainButton to={rdv}>Planifier un échange de 20 min</MainButton>
      </Opening>

      <Part id="actions" title="Les actions">
        <ul className="border-t border-sand-dark">
          {ACTIONS.map((a) => (
            <Row
              key={a.offre.slug}
              to={a.offre.path}
              title={a.offre.title}
              detail={<>{a.type} · {a.publicCible} · {a.format}<span className="mt-1 block text-ink sm:hidden">{a.prix}</span></>}
              aside={<span className="hidden text-[0.98rem] sm:block">{a.prix.replace(' la conférence', '').replace(' la séance de 2 h', ' / séance')}</span>}
            />
          ))}
        </ul>
        <p className="mt-5 text-[0.95rem] text-ink-muted">
          Prix repères, plus {REPERES_PRIX.km} de déplacement. Devis précis après notre échange. TVA non applicable.
        </p>
      </Part>

      <Part title="Comment ça se passe">
        <Steps items={etapes} />
        <p className="mt-8 border-l-2 border-gold pl-4 text-ink">Vous fournissez une salle, un public et une date. Je m’occupe du reste.</p>
      </Part>

      <Part title="Votre intervenante">
        <div className="mb-5 flex items-center gap-5">
          <img src="/images/veronique-480.webp" alt="Portrait de Véronique Carrié" width={480} height={600} loading="lazy" className="h-[120px] w-[96px] shrink-0 rounded-arch object-cover" />
          <p><strong className="font-semibold text-ink">Véronique Carrié.</strong> {CREDENTIALS.short}. {CREDENTIALS.certifications}. {CREDENTIALS.health}.</p>
        </div>
        <p className="mt-3">Chaque action est reliée aux compétences psychosociales et évaluée avant et après. Tout ce qu’un financeur vérifie est réuni sur une page.</p>
        <p className="mt-5"><TextLink to="/structures/dossier">Le dossier de financement</TextLink></p>
      </Part>

      <Part id="rdv" title="Parlons de votre projet">
        <p>20 minutes, gratuites : votre public, vos dates, votre piste de financement.</p>
        <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <MainButton to={rdv}>Planifier un échange de 20 min</MainButton>
          <PhoneLine />
        </div>
        <p className="mt-6"><TextLink to={SITE.plaquette} download>Télécharger la plaquette (PDF)</TextLink></p>
      </Part>
    </>
  );
}
