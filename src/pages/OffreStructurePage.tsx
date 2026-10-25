import { FIRST_MEETING } from '../content/site';
import type { OffreStructure } from '../content/offres';
import { LIVRABLES, actionOf } from '../content/actions';
import { Btn, CallBtn, Checks, CtaBand, Hero, Kicker, SideCard, Steps, TextLink } from '../components/calm';
import { Seo, breadcrumbLd, serviceLd } from '../lib/head';

// Une fiche action répond à une question : « Est-ce la bonne action pour mon public ? »
// Le contenu à gauche, la carte « Réserver 20 min » à droite.

export default function OffreStructurePage({ offre }: { offre: OffreStructure }) {
  const name = offre.title.replace(/[«»]/g, '').trim();
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Structures', path: '/structures' },
    { name, path: offre.path },
  ];
  const a = actionOf(offre.slug);
  const cps = offre.facts.find((f) => f.label === 'Compétences psychosociales')?.value;
  const rdv = FIRST_MEETING.structure.href;
  const [price, ...rest] = (a?.prix ?? 'Sur devis').split(/ (?=la |par )|, ou /);

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

      <Hero
        crumbs={crumbs}
        kicker={a?.type ?? 'Action de prévention'}
        title={offre.title}
        lead={offre.promise}
        actions={
          <>
            <Btn to={rdv}>Réserver 20 min</Btn>
            <Btn to={`/contact?profil=structure&offre=${offre.slug}`} variant="outline" light>La fiche-action</Btn>
          </>
        }
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="min-w-0 space-y-14 text-[1.06rem] leading-relaxed text-ink-soft">
            <div>
              <Kicker>Ce que les participants y gagnent</Kicker>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {offre.objectifs.slice(0, 3).map((o, i) => (
                  <li key={o} className="rounded-3xl border border-sand-dark bg-cream-light p-5">
                    <span className="font-heading text-[2rem] leading-none text-gold-dark">{String(i + 1).padStart(2, '0')}</span>
                    <span className="mt-3 block text-ink">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Kicker>Le déroulé</Kicker>
              <div className="mt-6"><Steps row two items={offre.deroule} /></div>
              {offre.declinaisons && (
                <div className="mt-10 rounded-3xl bg-cream-light p-6">
                  <p className="font-semibold text-ink">Une version pour chaque public</p>
                  <dl className="mt-3 space-y-2">
                    {offre.declinaisons.map((d) => (
                      <div key={d.label}><dt className="inline font-medium text-ink">{d.label} : </dt><dd className="inline">{d.value}</dd></div>
                    ))}
                  </dl>
                </div>
              )}
              {offre.note && <p className="mt-6 text-[0.98rem] text-ink-muted">{offre.note}</p>}
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <Kicker>Ce que vous recevez</Kicker>
                <div className="mt-5"><Checks items={LIVRABLES} /></div>
              </div>
              {cps && (
                <div>
                  <Kicker>Compétences psychosociales</Kicker>
                  <div className="mt-5">
                    <Checks items={cps.split(/\.\s+/).map((c) => c.replace(/\.+$/, '')).filter(Boolean)} />
                  </div>
                </div>
              )}
            </div>
            <p><TextLink to="/structures#actions">Toutes les actions</TextLink></p>
          </div>

          <SideCard
            price={price}
            priceNote={[...rest, 'repère, hors déplacement'].join(' · ')}
            facts={a ? [{ label: 'Public', value: a.publicCible }, { label: 'Format', value: a.format }] : []}
            action={
              <>
                <Btn to={rdv}>Réserver 20 min</Btn>
                <CallBtn label="Appeler" />
              </>
            }
          />
        </div>
      </section>

      <CtaBand title="Cette action vous intéresse ?" text="20 minutes pour regarder votre public, vos dates et votre financement. Devis et fiche-action ensuite." primary={{ to: rdv, label: 'Réserver 20 min' }} />
    </>
  );
}
