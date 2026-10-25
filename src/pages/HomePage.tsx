import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CREDENTIALS, SITE } from '../content/site';
import { MEDIA } from '../content/media';
import { PHOTOS, type Photo } from '../content/photos';
import { Opening, Part, TextLink } from '../components/calm';
import { Seo } from '../lib/head';

// L'accueil répond à une question : « Est-ce pour moi, et par où j'entre ? »

function Door({ to, photo, title, text }: { to: string; photo: Photo; title: string; text: string }) {
  return (
    <Link to={to} className="group block">
      <img src={photo.src} alt={photo.alt} width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full rounded-2xl object-cover" />
      <span className="mt-5 flex items-center gap-2 font-heading text-[1.6rem] leading-tight text-ink">
        {title} <ArrowRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </span>
      <span className="mt-2 block text-ink-soft">{text}</span>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <Seo
        title="EsenCiel, Véronique Carrié : prendre soin de son cerveau, à chaque âge de la vie"
        description={`${SITE.market}, dans l’Hérault, l’Aveyron et à distance. ${CREDENTIALS.certifications}.`}
        path="/"
      />

      <Opening media={MEDIA.ciel} title={<>Prendre soin de son cerveau, <em>à chaque âge</em> de la vie</>} lead={`${SITE.market}.`} />

      <Part wide>
        <div className="grid gap-12 md:grid-cols-2 md:gap-10">
          <Door
            to="/structures"
            photo={PHOTOS.structureGroupe}
            title="Vous êtes une structure"
            text="CCAS, CFPPA, résidence, EHPAD, centre social : des actions de prévention prêtes à déposer, avec le bilan pour votre financeur."
          />
          <Door
            to="/particuliers"
            photo={PHOTOS.particulierCouple}
            title="Pour vous ou un proche"
            text="Garder sa mémoire, apaiser le stress, souffler quand on aide un proche : des ateliers près de chez vous."
          />
        </div>
      </Part>

      <Part>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
          <img src="/images/veronique-480.webp" alt="Portrait de Véronique Carrié" width={480} height={600} loading="lazy" className="h-[180px] w-[144px] shrink-0 rounded-arch object-cover" />
          <div>
            <p className="font-heading text-[1.6rem] text-ink">Véronique Carrié</p>
            <p className="mt-2">{CREDENTIALS.short}. {CREDENTIALS.certifications}.</p>
            <p className="mt-4"><TextLink to="/qui-suis-je">Mon parcours</TextLink></p>
          </div>
        </div>
      </Part>
    </>
  );
}
