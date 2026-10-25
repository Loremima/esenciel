import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CREDENTIALS, FIRST_MEETING, SITE } from '../content/site';
import { ACTIONS, FORMATS } from '../content/actions';
import { REPERES_PRIX, etapes, financeurs, votrePart } from '../content/structures';
import { Band, Btn, Checks, CtaBand, Hero, Kicker, Steps, TextLink } from '../components/calm';
import { Seo, breadcrumbLd } from '../lib/head';

// La page Structures, façon page produit : la promesse, trois formats avec un prix,
// le catalogue, le déroulé, le dossier. Un seul bouton principal : « Réserver 20 min ».

function Partage() {
  return (
    <div className="glass mx-auto w-full max-w-lg rounded-[2rem] p-6 text-cream md:p-8 lg:ml-auto">
      <Kicker light>Vous fournissez</Kicker>
      <ul className="mt-4 flex flex-wrap gap-2">
        {votrePart.map((v) => <li key={v} className="rounded-full bg-white/10 px-4 py-2 font-heading text-[1.2rem] ring-1 ring-white/20">{v}</li>)}
      </ul>
      <div className="mt-7 border-t border-white/15 pt-6">
        <Kicker light>Je m’occupe du reste</Kicker>
        <div className="mt-4 text-[1.02rem] text-cream/90">
          <Checks light items={['La fiche-action rédigée', 'L’affiche et le texte d’invitation', 'L’animation sur place', 'L’évaluation et le bilan écrit']} />
        </div>
      </div>
    </div>
  );
}

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

      <Hero
        crumbs={crumbs}
        kicker="Pour les structures"
        title={<>La prévention, <em>clé en main.</em></>}
        lead="Conférences et cycles pour vos seniors, vos aidants et vos équipes. Je fournis l’action, la fiche-action et le bilan pour votre financeur."
        actions={
          <>
            <Btn to={rdv}>Réserver 20 min</Btn>
            <Btn to={SITE.plaquette} variant="outline" light download>La plaquette</Btn>
          </>
        }
        aside={<Partage />}
      />

      <Band tone="light" kicker="Les formats" title="Trois formats, un prix clair." intro={`Prix repères, plus ${REPERES_PRIX.km}. TVA non applicable. Devis précis après notre échange.`}>
        <div className="rail gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FORMATS.map((f) => {
            const dark = Boolean(f.highlight);
            return (
              <div key={f.name} className={`relative flex flex-col rounded-[2rem] p-7 md:p-8 ${dark ? 'glow-night text-cream shadow-2xl lg:-my-4 lg:py-12' : 'glass-light text-ink'}`}>
                {f.highlight && <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-[0.8rem] font-semibold text-night">{f.highlight}</span>}
                <p className={`font-heading text-[1.6rem] ${dark ? 'text-cream' : 'text-ink'}`}>{f.name}</p>
                <p className={`mt-1 ${dark ? 'text-cream/75' : 'text-ink-soft'}`}>{f.pitch}</p>
                <p className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className={`whitespace-nowrap font-heading text-[3rem] leading-none ${dark ? 'text-gold-light' : 'text-ink'}`}>{f.price}</span>
                  <span className={dark ? 'text-cream/70' : 'text-ink-muted'}>{f.unit}</span>
                </p>
                <p className={`mt-3 text-[0.95rem] ${dark ? 'text-cream/70' : 'text-ink-muted'}`}>{f.meta}</p>
                <div className={`mt-6 flex-1 border-t pt-6 ${dark ? 'border-cream/15 text-cream/90' : 'border-sand-dark text-ink-soft'}`}>
                  <Checks light={dark} items={f.features} />
                </div>
                <div className="mt-8">
                  <Btn to={rdv} variant={dark ? 'primary' : 'outline'}>En parler</Btn>
                </div>
              </div>
            );
          })}
        </div>
      </Band>

      <Band id="actions" kicker="Le catalogue" title="Cinq actions prêtes à l’emploi.">
        <div className="rail gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ACTIONS.map((a) => (
            <Link key={a.offre.slug} to={a.offre.path} className="reveal group flex flex-col rounded-3xl border border-sand-dark bg-cream-light p-6 transition-transform hover:-translate-y-1 md:p-7">
              <span className="w-fit rounded-full bg-night px-3 py-1 text-[0.8rem] font-semibold text-cream">{a.type}</span>
              <span className="mt-5 font-heading text-[1.45rem] leading-snug text-ink">{a.offre.title.replace(/[«»]/g, '').trim()}</span>
              <span className="mt-3 flex-1 text-ink-soft">{a.offre.promise}</span>
              <span className="mt-6 grid gap-1 border-t border-sand-dark pt-4 text-[0.95rem] text-ink-muted">
                <span>{a.publicCible}</span>
                <span>{a.format}</span>
              </span>
              <span className="mt-4 inline-flex items-center gap-2 font-semibold text-ink">
                Détails <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
          <div className="reveal glow-night flex flex-col justify-between rounded-3xl p-6 text-cream md:p-7">
            <span>
              <span className="w-fit rounded-full bg-gold px-3 py-1 text-[0.8rem] font-semibold text-night">Sur mesure</span>
              <span className="mt-5 block font-heading text-[1.6rem] leading-snug">Un autre public, un autre besoin ?</span>
              <span className="mt-3 block text-cream/80">Chaque action s’adapte à votre public, à vos dates et à votre budget.</span>
            </span>
            <span className="mt-8"><Btn to={rdv}>Réserver 20 min</Btn></span>
          </div>
        </div>
      </Band>

      <Band kicker="Comment ça marche" title="De l’appel au bilan, en quatre étapes.">
        <Steps row items={etapes} />
      </Band>

      <Band tone="night" kicker="Pour le financeur" title="Un dossier qui coche les cases." side={<Btn to="/structures/dossier" variant="outline" light>Le dossier</Btn>}>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <p className="text-[1.12rem] leading-relaxed text-cream/85">
            Chaque action est reliée aux compétences psychosociales de Santé publique France, évaluée avant et après, et suivie d’un bilan écrit. Tout ce qu’un financeur vérifie est réuni sur une page.
          </p>
          <ul className="flex flex-wrap content-start gap-2">
            {financeurs.map((f) => <li key={f} className="glass rounded-full px-4 py-2 text-[0.95rem] text-cream/90">{f}</li>)}
          </ul>
        </div>
      </Band>

      <Band>
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <img src="/images/veronique.webp" alt="Portrait de Véronique Carrié" width={800} height={1000} loading="lazy" className="mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] object-cover" />
          <div>
            <Kicker>Votre intervenante</Kicker>
            <p className="mt-3 font-heading font-light leading-[1.1] text-ink [font-size:clamp(2rem,3.4vw,2.8rem)]">Véronique Carrié</p>
            <p className="mt-5 text-[1.08rem] leading-relaxed text-ink-soft">{CREDENTIALS.short}. {CREDENTIALS.certifications}. {CREDENTIALS.health}.</p>
            <p className="mt-4"><TextLink to="/qui-suis-je">Mon parcours</TextLink></p>
          </div>
        </div>
      </Band>

      <CtaBand title="Parlons de votre projet." text="20 minutes, gratuites : votre public, vos dates, votre piste de financement." primary={{ to: rdv, label: 'Réserver 20 min' }} />
    </>
  );
}
