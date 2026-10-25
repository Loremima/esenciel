import { useRef, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw } from 'lucide-react';

// « L'expérience des couleurs », celle de la conférence : le visiteur doit choisir la couleur
// de l'encre, pas lire le mot. Quand le mot ment, on ralentit : c'est le pilote automatique.

const COLORS = [
  { name: 'Rouge', hex: '#F87171' },
  { name: 'Bleu', hex: '#60A5FA' },
  { name: 'Vert', hex: '#4ADE80' },
  { name: 'Jaune', hex: '#FACC15' },
];
const ROUNDS = 4; // par phase : d'abord le mot dit vrai, puis il ment

// L'affiche de départ : des mots qui mentent tous sur leur couleur.
const POSTER: [number, number][] = [[0, 1], [3, 2], [1, 0], [2, 3], [0, 3], [1, 2]];

type Trial = { word: number; ink: number };

function makeTrials(): Trial[] {
  const pick = () => Math.floor(Math.random() * COLORS.length);
  const easy = Array.from({ length: ROUNDS }, () => { const c = pick(); return { word: c, ink: c }; });
  const hard = Array.from({ length: ROUNDS }, () => {
    const word = pick();
    let ink = pick();
    while (ink === word) ink = pick();
    return { word, ink };
  });
  return [...easy, ...hard];
}

const glow = (hex: string): CSSProperties => ({ color: hex, textShadow: `0 0 36px ${hex}66` });
const sec = (ms: number) => `${(ms / 1000).toFixed(2).replace('.', ',')} s`;

export function ColorTest() {
  const [trials, setTrials] = useState<Trial[]>([]);
  const [step, setStep] = useState(-1); // -1 : pas commencé
  const [times, setTimes] = useState<number[]>([]);
  const [miss, setMiss] = useState(false);
  const t0 = useRef(0);

  const start = () => {
    setTrials(makeTrials());
    setTimes([]);
    setStep(0);
    t0.current = performance.now();
  };

  const answer = (i: number) => {
    if (i !== trials[step].ink) {
      setMiss(true);
      setTimeout(() => setMiss(false), 400);
      return;
    }
    const dt = performance.now() - t0.current;
    setTimes((t) => [...t, dt]);
    setStep((s) => s + 1);
    t0.current = performance.now();
  };

  const done = step >= ROUNDS * 2;
  const avg = (a: number[]) => a.reduce((x, y) => x + y, 0) / Math.max(a.length, 1);
  const easy = avg(times.slice(0, ROUNDS));
  const hard = avg(times.slice(ROUNDS));
  const more = Math.round(((hard - easy) / easy) * 100);
  const max = Math.max(easy, hard, 1);

  return (
    <div className="glass relative overflow-hidden rounded-[2rem] p-6 text-cream md:p-10">
      {/* Les quatre encres, en halos derrière le texte. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(16rem_12rem_at_8%_8%,#F8717150,transparent_70%),radial-gradient(16rem_12rem_at_92%_12%,#60A5FA50,transparent_70%),radial-gradient(16rem_12rem_at_12%_96%,#4ADE8040,transparent_70%),radial-gradient(16rem_12rem_at_92%_92%,#FACC1540,transparent_70%)]" />
      <div className="relative">
        {step < 0 && (
          <div className="text-center">
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-gold-light">L’expérience des couleurs</p>
            <div aria-hidden className="mx-auto mt-6 grid max-w-sm grid-cols-2 gap-x-6 gap-y-1 font-heading text-[2rem] font-semibold tracking-wide sm:grid-cols-3 sm:text-[1.7rem]">
              {POSTER.map(([w, ink], i) => (
                <span key={i} style={glow(COLORS[ink].hex)} className={i > 3 ? 'hidden sm:block' : ''}>{COLORS[w].name.toUpperCase()}</span>
              ))}
            </div>
            <p className="mx-auto mt-7 max-w-sm font-heading text-[1.7rem] leading-snug md:text-[2rem]">Choisissez la couleur de l’encre. <em className="italic text-gold-light">Pas le mot.</em></p>
            <p className="mt-3 text-cream/70">8 mots, 20 secondes.</p>
            <button type="button" onClick={start} className="mt-7 inline-flex min-h-[52px] items-center rounded-full bg-gold px-8 text-[1.02rem] font-semibold text-night shadow-[0_10px_30px_-10px_rgba(201,151,58,0.8)] transition-colors hover:bg-gold-light">
              Essayer
            </button>
          </div>
        )}

        {step >= 0 && !done && (
          <div className="text-center">
            <div className="mx-auto flex max-w-xs gap-1.5" aria-hidden>
              {Array.from({ length: ROUNDS * 2 }, (_, i) => (
                <span key={i} className={`h-1 flex-1 rounded-full transition-colors ${i < step ? 'bg-gold-light' : 'bg-white/15'}`} />
              ))}
            </div>
            <p className="mt-3 text-[0.9rem] text-cream/60">{step < ROUNDS ? 'Échauffement' : 'Maintenant, le mot ment'}</p>
            <p
              aria-live="polite"
              className={`mt-6 font-heading text-[3.6rem] font-semibold tracking-wide transition-transform duration-150 md:text-[5.5rem] ${miss ? 'translate-x-3' : ''}`}
              style={glow(COLORS[trials[step].ink].hex)}
            >
              {COLORS[trials[step].word].name.toUpperCase()}
            </p>
            <p className="sr-only">Couleur de l’encre : {COLORS[trials[step].ink].name}</p>
            <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-3">
              {COLORS.map((c, i) => (
                <button key={c.name} type="button" onClick={() => answer(i)} className="flex min-h-[56px] items-center justify-center rounded-2xl bg-white/[0.08] text-[1.05rem] font-semibold text-cream ring-1 ring-white/15 transition-colors hover:bg-white/15 active:scale-[0.98]">
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {done && (
          <div role="status">
            <p className="text-center text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-gold-light">Votre résultat</p>
            <p className="mt-3 text-center font-heading text-[3.6rem] leading-none text-gold-light md:text-[4.6rem]">{more > 0 ? `+${more} %` : 'Bravo'}</p>
            <p className="mt-2 text-center text-cream/80">{more > 0 ? 'de temps quand le mot ment' : 'votre attention a gardé la main'}</p>
            <dl className="mx-auto mt-8 max-w-md space-y-4">
              {[
                { label: 'Le mot dit vrai', ms: easy, color: 'bg-cream/50' },
                { label: 'Le mot ment', ms: hard, color: 'bg-gold-light' },
              ].map((r) => (
                <div key={r.label}>
                  <div className="flex justify-between text-[0.95rem]"><dt className="text-cream/75">{r.label}</dt><dd className="font-semibold tabular-nums">{sec(r.ms)}</dd></div>
                  <div className="mt-1.5 h-2.5 rounded-full bg-white/10"><div className={`h-full rounded-full ${r.color}`} style={{ width: `${(r.ms / max) * 100}%` }} /></div>
                </div>
              ))}
            </dl>
            <p className="mx-auto mt-7 max-w-md text-center text-cream/80">Votre cerveau lit avant de regarder : c’est le pilote automatique. Il fait gagner du temps, et parfois il piège. L’attention, elle, s’entraîne.</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link to="/structures" className="inline-flex min-h-[48px] items-center rounded-full bg-gold px-6 font-semibold text-night hover:bg-gold-light">Pour votre public</Link>
              <button type="button" onClick={start} className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-cream hover:text-gold-light">
                <RotateCcw aria-hidden className="h-4 w-4" /> Rejouer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
