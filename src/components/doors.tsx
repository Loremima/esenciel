import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Photo } from '../content/photos';

/** Une grande carte photo qui mène vers une des deux portes du site. */
export function DoorCard({ to, photo, kicker, title, text, cta }: { to: string; photo: Photo; kicker: string; title: string; text: string; cta: string }) {
  return (
    <Link to={to} className="group flex flex-col overflow-hidden rounded-[22px] border border-sand-dark bg-cream-light text-left shadow-soft transition-transform hover:-translate-y-0.5">
      <img src={photo.src} alt={photo.alt} width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full object-cover" />
      <span className="flex flex-1 flex-col p-6 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">{kicker}</span>
        <span className="mt-2 font-heading text-[1.7rem] font-light leading-tight md:text-[2rem]">{title}</span>
        <span className="mt-3 flex-1 text-[1.06rem] leading-relaxed text-ink-soft">{text}</span>
        <span className="mt-6 inline-flex items-center gap-2 font-semibold text-night">
          {cta} <ArrowRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </span>
      </span>
    </Link>
  );
}
