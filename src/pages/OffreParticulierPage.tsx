import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import { Breadcrumbs, Button, CtaBand, FactList, Section } from '../components/ui';
import { CREDENTIALS, SITE } from '../content/site';
import { particuliers, type OffreParticulier } from '../content/offres';
import { Seo, breadcrumbLd, serviceLd } from '../lib/head';
import { NotifyForm } from '../components/NotifyForm';

export default function OffreParticulierPage({ offre }: { offre: OffreParticulier }) {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Pour vous ou un proche', path: '/particuliers' },
    { name: offre.title, path: offre.path },
  ];
  const others = particuliers.filter((o) => o.slug !== offre.slug && o.category === offre.category).slice(0, 2);
  const facts = [...offre.facts, ...(offre.method ? [{ label: 'Méthode', value: offre.method }] : []), { label: 'Tarif', value: offre.price }];
  const kicker = offre.category === 'individuel' ? 'Seul avec moi' : offre.category === 'atelier' ? 'Atelier en petit groupe' : 'Cycle en petit groupe';
  const online = offre.booking.startsWith('http');

  return (
    <>
      <Seo
        title={offre.seo.title}
        description={offre.seo.description}
        path={offre.path}
        jsonLd={[breadcrumbLd(crumbs), serviceLd({ name: offre.title, description: offre.definition, path: offre.path, price: offre.price })]}
      />
      <section className="bg-night pb-14 pt-8 text-cream md:pb-20 md:pt-12">
        <div className="container-site grid items-center gap-10 md:grid-cols-[1.25fr_1fr] md:gap-14">
          <div>
            <div className="[&_a]:text-cream/70 [&_li]:text-cream/70 [&_span]:!text-cream/60"><Breadcrumbs items={crumbs} /></div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">{kicker}</p>
            <h1 className="mt-3 font-heading text-[2.5rem] font-light leading-[1.05] text-cream md:text-[3.4rem]">{offre.title}</h1>
            <p className="mt-5 max-w-xl text-[1.15rem] leading-relaxed text-cream/90">{offre.short}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={online ? offre.booking : '#dates'} variant="light" arrow className="!px-7 !py-4 !text-base">{offre.bookingLabel}</Button>
              <Button href={SITE.phoneHref} variant="ghost" className="!text-cream !text-base">Ou appelez-moi : {SITE.phone}</Button>
            </div>
          </div>
          <img src={offre.image.src} alt={offre.image.alt} width={600} height={800} className="mx-auto aspect-[4/5] w-full max-w-xs rounded-arch object-cover md:max-w-sm" />
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <h2 className="h-section">De quoi s’agit-il ?</h2>
            <p className="mt-5 text-[1.15rem] leading-relaxed text-ink-soft">{offre.definition}</p>

            <h2 className="h-section mt-14">Pour qui ?</h2>
            <p className="mt-5 text-[1.15rem] leading-relaxed text-ink-soft">{offre.pourQui}</p>

            <h2 className="h-section mt-14">Le chemin</h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {offre.deroule.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-sand-dark/70 bg-cream p-5">
                  <span className="font-heading text-2xl text-gold-dark">{i + 1}</span>
                  <p className="mt-1 text-[1.08rem] font-medium text-ink">{s.title}</p>
                  {s.text && <p className="mt-1 text-[1.06rem] text-ink-soft">{s.text}</p>}
                </li>
              ))}
            </ol>

            {offre.note && (
              <p className="mt-8 flex gap-3 rounded-2xl bg-sand p-5 text-ink-soft">
                <Info aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                {offre.note}
              </p>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div>
              <h2 className="mb-4 font-heading text-2xl">Infos pratiques</h2>
              <FactList facts={facts} />
            </div>
            <div id="dates" className="scroll-mt-28 rounded-2xl bg-night p-6 text-cream">
              <p className="font-heading text-xl">{online ? 'Réserver' : 'Prochaines dates'}</p>
              <p className="mt-2 text-cream/80">
                {online ? 'La réservation se fait en ligne, en quelques clics.' : 'Laissez votre e-mail : vous êtes prévenu en premier à l’ouverture des inscriptions.'}
              </p>
              {online ? (
                <Button href={offre.booking} variant="light" className="mt-5 w-full" arrow>{offre.bookingLabel}</Button>
              ) : (
                <div className="mt-5"><NotifyForm offre={offre.slug} title={offre.title.replace(/[«»]/g, '').trim()} /></div>
              )}
              {offre.followUp && (
                <a href={offre.followUp.href} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center text-sm text-cream/80 underline underline-offset-4 hover:text-cream">
                  {offre.followUp.label}
                </a>
              )}
            </div>
            <p className="text-sm text-ink-muted">
              Avec Véronique Carrié. {CREDENTIALS.certifications}. <Link to="/qui-suis-je" className="link-underline">Mon parcours</Link>
            </p>
          </aside>
        </div>
      </Section>

      {others.length > 0 && (
        <Section>
          <h2 className="h-section mb-8">Vous pourriez aussi aimer</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} to={o.path} className="card group flex items-center gap-5 p-5 transition-shadow hover:shadow-lg">
                <img src={o.image.src} alt="" width={96} height={96} loading="lazy" className="h-24 w-24 shrink-0 rounded-xl object-cover" />
                <div>
                  <p className="font-heading text-xl leading-snug">{o.title}</p>
                  <p className="mt-1 text-sm text-ink-muted">{o.price}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium">
                    Découvrir <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CtaBand title="Une question avant de vous inscrire ?" text="Écrivez-moi ou appelez-moi : on regarde ensemble si ce format vous correspond." primary={{ label: 'Me contacter', to: `/contact?profil=particulier&offre=${offre.slug}` }} />
    </>
  );
}
