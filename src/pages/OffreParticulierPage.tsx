import type { OffreParticulier } from '../content/offres';
import { NotifyForm } from '../components/NotifyForm';
import { Btn, CallBtn, Hero, Kicker, SideCard, Steps, TextLink } from '../components/calm';
import { Seo, breadcrumbLd, serviceLd } from '../lib/head';

// Une fiche particulier répond à une question : « Est-ce pour moi, quand, combien ? »
// Le contenu à gauche, la carte de réservation à droite. La liste d'attente n'est qu'un repli.

const KIND: Record<OffreParticulier['category'], string> = { cycle: 'Cycle en petit groupe', individuel: 'Séance individuelle', atelier: 'Atelier en groupe' };

export default function OffreParticulierPage({ offre }: { offre: OffreParticulier }) {
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Pour vous ou un proche', path: '/particuliers' },
    { name: offre.title, path: offre.path },
  ];
  const m = offre.price.match(/^([\d\s,]+\s?€)\s*(.*)$/);
  const price = m ? m[1] : offre.price;
  const priceNote = m ? m[2] : undefined;

  return (
    <>
      <Seo
        title={offre.seo.title}
        description={offre.seo.description}
        path={offre.path}
        jsonLd={[breadcrumbLd(crumbs), serviceLd({ name: offre.title, description: offre.definition, path: offre.path, price: offre.price })]}
      />

      <Hero
        crumbs={crumbs}
        kicker={KIND[offre.category]}
        title={offre.title}
        lead={offre.short}
        actions={
          <>
            <Btn to={offre.booking}>{offre.bookingLabel}</Btn>
            <CallBtn light label="Appeler" />
          </>
        }
        aside={<img src={offre.image.src} alt={offre.image.alt} className="mx-auto aspect-[4/3] w-full max-w-lg rounded-[2rem] object-cover shadow-2xl lg:ml-auto" />}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="min-w-0 space-y-14 text-[1.08rem] leading-relaxed text-ink-soft">
            <div>
              <Kicker>Pour qui ?</Kicker>
              <p className="mt-4 font-heading text-[1.6rem] font-light leading-snug text-ink md:text-[1.9rem]">{offre.pourQui}</p>
              <p className="mt-5 max-w-2xl">{offre.definition}</p>
            </div>
            <div>
              <Kicker>Comment ça se passe</Kicker>
              <div className="mt-6"><Steps row two items={offre.deroule} /></div>
              {offre.note && <p className="mt-8 text-[1rem] text-ink-muted">{offre.note}</p>}
            </div>
            <p className="text-[0.95rem] text-ink-muted">Ces séances relèvent de la prévention et de l’éducation à la santé. Elles ne remplacent pas un suivi médical.</p>
          </div>

          <SideCard
            price={price}
            priceNote={priceNote}
            facts={offre.facts}
            action={
              <>
                <Btn to={offre.booking}>{offre.bookingLabel}</Btn>
                {offre.followUp && <Btn to={offre.followUp.href} variant="outline">{offre.followUp.label}</Btn>}
                <CallBtn label="Appeler" />
              </>
            }
          >
            {offre.waitlist && <p className="mt-5 text-center"><TextLink to="#dates">Être prévenu des dates</TextLink></p>}
          </SideCard>
        </div>
      </section>

      {offre.waitlist && (
        <section id="dates" className="scroll-mt-20 bg-cream pb-16 md:pb-24">
          <div className="container-site grid items-center gap-8 rounded-[2rem] bg-night p-6 text-cream md:grid-cols-2 md:gap-14 md:p-12">
            <div>
              <Kicker light>Prochaines dates</Kicker>
              <h2 className="mt-3 font-heading font-light leading-[1.08] text-cream [font-size:clamp(2rem,3.6vw,2.8rem)]">Pas encore de date ?</h2>
              <p className="mt-4 text-[1.06rem] text-cream/80">Laissez votre e-mail : je vous préviens dès qu’une session ouvre.</p>
            </div>
            <NotifyForm offre={offre.slug} title={offre.title} />
          </div>
          <p className="container-site mt-8"><TextLink to="/particuliers">Tous les ateliers</TextLink></p>
        </section>
      )}
    </>
  );
}
