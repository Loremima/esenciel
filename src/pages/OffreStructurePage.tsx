import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ClipboardCheck, Download, Landmark, Puzzle } from 'lucide-react';
import { SITE } from '../content/site';
import { ALL_STRUCTURE_OFFERS, type OffreStructure } from '../content/offres';
import { BookingSection, HeroVideo, IconSquare, Title } from '../components/funnel';
import { AUDIENCE_MEDIA, MEDIA } from '../content/media';
import { Seo, breadcrumbLd, serviceLd } from '../lib/head';

export default function OffreStructurePage({ offre }: { offre: OffreStructure }) {
  const isConf = offre.kind === 'conference';
  const parent = isConf ? { name: 'Conférences', path: '/conferences' } : { name: 'Structures & financeurs', path: '/structures' };
  const name = offre.title.replace(/[«»]/g, '').trim();
  const crumbs = [{ name: 'Accueil', path: '/' }, parent, { name, path: offre.path }];
  const media = AUDIENCE_MEDIA[offre.slug]?.media ?? MEDIA.ciel;
  const fact = (label: string) => offre.facts.find((f) => f.label === label)?.value;
  const dossier = [
    { icon: Puzzle, label: 'Compétences psychosociales', value: fact('Compétences psychosociales') },
    { icon: ClipboardCheck, label: 'Évaluation', value: fact('Évaluation') },
    { icon: Landmark, label: 'Financements', value: fact('Financements possibles') },
  ];
  const others = ALL_STRUCTURE_OFFERS.filter((o) => o.slug !== offre.slug && o.kind === offre.kind);

  return (
    <>
      <Seo
        title={offre.seo.title}
        description={offre.seo.description}
        path={offre.path}
        jsonLd={[
          breadcrumbLd(crumbs),
          serviceLd({ name, description: offre.promise, path: offre.path, audience: offre.audience ?? 'Seniors, aidants, professionnels', price: 'Sur devis' }),
        ]}
      />

      <HeroVideo media={media} eyebrow={offre.eyebrow} title={offre.title} lead={offre.promise} />

      {/* En bref */}
      <section className="border-b border-sand-dark bg-cream">
        <dl className="container-site grid max-w-3xl grid-cols-3 gap-2 py-8 text-center">
          {offre.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse items-center">
              <dt className="mt-1 text-[0.8rem] leading-tight text-ink-muted md:text-sm">{s.label}</dt>
              <dd className="font-heading text-[1.6rem] leading-none text-gold-dark md:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Ce que le public y gagne */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-site">
          <Title>{isConf ? 'Ce que votre public en retire' : `Ce que vos ${(AUDIENCE_MEDIA[offre.slug]?.label ?? 'participants').toLowerCase()} y gagnent`}</Title>
          <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 md:mt-12 md:grid-cols-4 md:gap-5">
            {offre.gains.map((g) => (
              <li key={g.label} className="flex flex-col items-center gap-4 rounded-3xl bg-cream-light px-3 py-6 text-center">
                <IconSquare icon={g.icon} />
                <span className="max-w-[9rem] text-[0.95rem] font-semibold leading-snug">{g.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Déroulé */}
      <section className="bg-sand py-16 md:py-20">
        <div className="container-site">
          <Title>{isConf ? 'Le déroulé' : 'Les séances'}</Title>
          <ol className="mx-auto mt-8 flex max-w-xl flex-col gap-2.5">
            {offre.deroule.map((s, i) => (
              <li key={s.title} className="flex items-center gap-4 rounded-2xl bg-cream-light px-4 py-3.5 text-left">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-night font-heading text-cream">{i + 1}</span>
                <span className="flex-1">
                  <span className="block font-medium leading-snug">{s.title}</span>
                  {s.text && <span className="block text-sm text-ink-muted">{s.text}</span>}
                </span>
              </li>
            ))}
          </ol>
          {offre.note && <p className="mx-auto mt-6 max-w-xl text-center text-sm text-ink-muted">{offre.note}</p>}
        </div>
      </section>

      {offre.declinaisons && (
        <section className="bg-cream py-16 md:py-20">
          <div className="container-site">
            <Title>Adaptée à votre public</Title>
            <ul className="mx-auto mt-8 grid max-w-4xl gap-3 md:grid-cols-3 md:gap-5">
              {offre.declinaisons.map((d) => (
                <li key={d.label} className="rounded-3xl border border-sand-dark bg-cream-light p-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">{d.label}</p>
                  <p className="mt-2 text-ink-soft">{d.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Pour le dossier de financement */}
      <section className={`${offre.declinaisons ? 'bg-sand' : 'bg-cream'} py-16 md:py-20`}>
        <div className="container-site">
          <Title>Pour votre dossier</Title>
          <ul className="mx-auto mt-8 flex max-w-2xl flex-col gap-3">
            {dossier.filter((d) => d.value).map((d) => (
              <li key={d.label} className="flex items-start gap-4 rounded-3xl border border-sand-dark bg-cream-light p-5 text-left">
                <IconSquare icon={d.icon} soft />
                <span>
                  <span className="block font-semibold">{d.label}</span>
                  <span className="mt-0.5 block text-[0.95rem] text-ink-muted">{d.value}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-ink-muted">{fact('Tarif')}</p>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-cream pb-6 pt-14">
          <div className="container-site flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-ink-muted">{isConf ? 'L’autre conférence' : 'Les autres programmes'}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {others.map((o) => (
                <Link key={o.slug} to={o.path} className="inline-flex items-center gap-2 rounded-full border border-sand-dark bg-cream-light px-5 py-2.5 text-sm font-medium hover:border-ink/40">
                  {isConf ? o.title.replace(/[«»]/g, '').trim() : AUDIENCE_MEDIA[o.slug]?.label ?? o.title} <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <Link to={parent.path} className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink">
              <ArrowLeft aria-hidden className="h-4 w-4" /> {isConf ? 'Toutes les conférences' : 'Toute l’offre structures'}
            </Link>
          </div>
        </section>
      )}

      <BookingSection />

      {/* Barre d'action sur mobile */}
      <div className="sticky bottom-0 z-30 flex gap-2 border-t border-sand-dark bg-cream/95 p-3 backdrop-blur md:hidden">
        <a href={SITE.plaquette} download className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-night/80 px-4 py-3.5 text-sm font-semibold">
          <Download aria-hidden className="h-4 w-4" /> Plaquette
        </a>
        <a href="#rdv" className="inline-flex flex-[1.6] items-center justify-center rounded-full bg-night px-4 py-3.5 text-sm font-semibold text-cream">
          Prendre rendez-vous
        </a>
      </div>
    </>
  );
}
