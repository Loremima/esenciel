import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { X } from 'lucide-react';
import { SITE } from '../content/site';

/**
 * Tous les liens vers la page sutempo s'ouvrent ici, dans le site : le module
 * de réservation sutempo, aux couleurs du site, sur la bonne prestation.
 * Sans JavaScript, le lien mène toujours à la page sutempo.
 */

type Widget = { mountBookingWidget(root: HTMLElement, config: Record<string, unknown>): Promise<void> };
declare global {
  interface Window { SutempoWidget?: Widget }
}

const { origin, tenantId, widgetKey } = SITE.sutempo;
const PAYMENT_MARKS = ['paid', 'abandoned', 'packPaid', 'packAbandoned'];

// Les couleurs du site, lues par le module sutempo (jetons --pf-*).
const WIDGET_TOKENS = {
  '--pf-bg-raised': '#FBF8F2',
  '--pf-bg-sunken': '#EDE4D3',
  '--pf-ink': '#1B2333',
  '--pf-ink-muted': '#4F5768',
  '--pf-line': '#1B23331f',
  '--pf-line-strong': '#1B23335c',
  '--pf-accent-text': '#8A6417',
  '--pf-focus': '#C9973A',
} as CSSProperties;

let loading: Promise<Widget> | undefined;
function loadWidget(): Promise<Widget> {
  loading ??= new Promise<Widget>((resolve, reject) => {
    document.head.append(Object.assign(document.createElement('link'), { rel: 'stylesheet', href: `${origin}/widget/styles.css` }));
    const script = Object.assign(document.createElement('script'), { src: `${origin}/widget/embed.js`, async: true });
    script.onload = () => (window.SutempoWidget ? resolve(window.SutempoWidget) : reject(new Error('widget')));
    script.onerror = () => reject(new Error('widget'));
    document.head.append(script);
  });
  return loading;
}

function mount(root: HTMLElement, service: string | null) {
  return loadWidget().then((w) =>
    w.mountBookingWidget(root, {
      baseUrl: origin,
      apiKey: widgetKey,
      tenantId,
      locale: 'fr',
      ...(service ? { serviceId: service, lockService: true } : {}),
      presentation: 'native',
      brand: 'host',
      theme: {
        colorScheme: 'light',
        accent: '#121A2B',
        accentInk: '#F6F1E7',
        radius: '16px',
        font: '"Inter Variable", system-ui, sans-serif',
        displayFont: '"Fraunces Variable", Georgia, serif',
      },
    }),
  );
}

export default function BookingDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<{ service: string | null; key: number } | null>(null);
  const [failed, setFailed] = useState(false);
  const slot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const show = (service: string | null) => {
      setFailed(false);
      setOpen({ service, key: Date.now() });
      ref.current?.showModal();
    };
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link || !link.href.startsWith(SITE.booking)) return;
      e.preventDefault();
      show(new URL(link.href).searchParams.get('service'));
    };
    document.addEventListener('click', onClick);
    // Retour du paiement en ligne : la fenêtre se rouvre pour montrer le résultat.
    const query = new URLSearchParams(location.search);
    if (widgetKey && PAYMENT_MARKS.some((m) => query.has(m))) show(null);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!open || !widgetKey || !slot.current) return;
    const root = document.createElement('div');
    slot.current.replaceChildren(root);
    mount(root, open.service).catch(() => setFailed(true));
  }, [open]);

  const close = () => ref.current?.close();
  const frame = new URL('/widget/frame', origin);
  frame.searchParams.set('tenant', tenantId);
  frame.searchParams.set('locale', 'fr');
  if (open?.service) frame.searchParams.set('service', open.service);

  return (
    <dialog
      ref={ref}
      aria-label="Prendre rendez-vous"
      onClick={(e) => e.target === ref.current && close()}
      onClose={() => setOpen(null)}
      className="m-auto h-[100dvh] max-h-[100dvh] w-full max-w-none bg-cream-light p-0 text-ink backdrop:bg-night/70 md:h-auto md:max-h-[90vh] md:max-w-4xl md:rounded-3xl"
    >
      <div className="flex h-full max-h-[inherit] flex-col">
        <div className="flex shrink-0 items-center justify-between border-b border-sand-dark px-5 py-3 md:px-8">
          <p className="font-heading text-2xl font-light">
            Prendre <em className="italic text-gold-dark">rendez-vous</em>
          </p>
          <button type="button" onClick={close} aria-label="Fermer" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-sand">
            <X aria-hidden className="h-5 w-5" />
          </button>
        </div>
        {open && widgetKey && !failed && <div key={open.key} ref={slot} style={WIDGET_TOKENS} className="booking-slot min-h-[60vh] flex-1 overflow-y-auto px-5 py-6 md:px-8" />}
        {open && (!widgetKey || failed) && <iframe src={frame.toString()} title="Réservation en ligne" allow="payment" className="min-h-[70vh] w-full flex-1 border-0" />}
      </div>
    </dialog>
  );
}
