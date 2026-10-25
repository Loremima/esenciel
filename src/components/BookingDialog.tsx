import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { SITE } from '../content/site';

/**
 * Tous les liens vers la page sutempo s'ouvrent ici, dans le site : le module
 * de réservation en fenêtre, sur la bonne prestation. Sans JavaScript, le lien
 * mène toujours à la page sutempo.
 */
export default function BookingDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link || !link.href.startsWith(SITE.booking)) return;
      e.preventDefault();
      const frame = new URL(SITE.bookingFrame);
      const service = new URL(link.href).searchParams.get('service');
      if (service) frame.searchParams.set('service', service);
      setSrc(frame.toString());
      ref.current?.showModal();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      aria-label="Prendre rendez-vous"
      onClick={(e) => e.target === ref.current && close()}
      onClose={() => setSrc(null)}
      className="m-auto h-[100dvh] max-h-[100dvh] w-full max-w-none bg-cream-light p-0 backdrop:bg-night/70 md:h-[88vh] md:max-h-[52rem] md:max-w-4xl md:rounded-3xl"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-sand-dark px-5 py-3">
          <p className="font-heading text-xl">Prendre rendez-vous</p>
          <button type="button" onClick={close} aria-label="Fermer" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-sand">
            <X aria-hidden className="h-5 w-5" />
          </button>
        </div>
        {src && <iframe src={src} title="Réservation en ligne" allow="payment" className="w-full flex-1 border-0" />}
      </div>
    </dialog>
  );
}
