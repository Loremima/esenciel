import { useRef, useState } from 'react';
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

export function ColorTest() {
  const [trials, setTrials] = useState<Trial[]>([]);
  const [step, setStep] = useState(-1); // -1 : pas commencé
  const [times, setTimes] = useState<number[]>([]);
  const [errors, setErrors] = useState(0);
  const [miss, setMiss] = useState(false);
  const t0 = useRef(0);

  const start = () => {
    setTrials(makeTrials());
    setTimes([]);
    setErrors(0);
    setStep(0);
    t0.current = performance.now();
  };

  const answer = (i: number) => {
    const trial = trials[step];
    if (i !== trial.ink) {
      setErrors((e) => e + 1);
      setMiss(true);
      setTimeout(() => setMiss(false), 350);
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

  return (
    <div className="glass rounded-[2rem] p-6 text-cream md:p-10">
      {step < 0 && (
        <div className="text-center">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-gold-light">L’expérience des couleurs · 20 secondes</p>
          <p className="mx-auto mt-5 max-w-md font-heading text-[1.7rem] leading-snug md:text-[2rem]">Choisissez la couleur de l’encre. Pas le mot.</p>
          <p className="mt-6 font-heading text-[3rem] font-semibold tracking-wide md:text-[4rem]" aria-hidden>
            <span style={{ color: COLORS[1].hex }}>ROUGE</span>
          </p>
          <p className="mt-2 text-cream/70">Ici, la bonne réponse est « Bleu ».</p>
          <button type="button" onClick={start} className="mt-8 inline-flex min-h-[48px] items-center rounded-full bg-gold px-7 font-semibold text-night transition-colors hover:bg-gold-light">
            Essayer
          </button>
        </div>
      )}

      {step >= 0 && !done && (
        <div className="text-center">
          <div className="flex justify-center gap-1.5" aria-hidden>
            {Array.from({ length: ROUNDS * 2 }, (_, i) => (
              <span key={i} className={`h-1.5 w-6 rounded-full ${i < step ? 'bg-gold-light' : 'bg-white/20'}`} />
            ))}
          </div>
          <p aria-live="polite" className={`mt-10 font-heading text-[3.4rem] font-semibold tracking-wide transition-transform md:text-[5rem] ${miss ? 'translate-x-2' : ''}`} style={{ color: COLORS[trials[step].ink].hex }}>
            {COLORS[trials[step].word].name.toUpperCase()}
          </p>
          <p className="sr-only">Couleur de l’encre : {COLORS[trials[step].ink].name}</p>
          <div className="mx-auto mt-10 grid max-w-md grid-cols-2 gap-3">
            {COLORS.map((c, i) => (
              <button key={c.name} type="button" onClick={() => answer(i)} className="min-h-[52px] rounded-2xl bg-white/10 text-[1.05rem] font-semibold text-cream ring-1 ring-white/20 transition-colors hover:bg-white/20">
                {c.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {done && (
        <div className="text-center" role="status">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-gold-light">Votre résultat</p>
          {more > 5 ? (
            <>
              <p className="mt-4 font-heading text-[4rem] leading-none text-gold-light md:text-[5.5rem]">+{more} %</p>
              <p className="mx-auto mt-4 max-w-lg font-heading text-[1.5rem] leading-snug md:text-[1.8rem]">de temps quand le mot ment.</p>
              <p className="mx-auto mt-4 max-w-lg text-cream/80">Votre cerveau lit avant de regarder : c’est le pilote automatique. Il nous fait gagner du temps, et parfois nous piège. La bonne nouvelle : l’attention s’entraîne.</p>
            </>
          ) : (
            <>
              <p className="mt-4 font-heading text-[2.6rem] leading-tight text-gold-light md:text-[3.2rem]">Bien joué.</p>
              <p className="mx-auto mt-4 max-w-lg text-cream/80">Votre attention a gardé la main{errors ? `, malgré ${errors} erreur${errors > 1 ? 's' : ''}` : ''}. Avec la fatigue, le stress ou l’âge, le pilote automatique reprend vite le dessus. L’attention, ça s’entraîne.</p>
            </>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link to="/structures" className="inline-flex min-h-[44px] items-center rounded-full bg-gold px-6 font-semibold text-night hover:bg-gold-light">Pour votre public</Link>
            <button type="button" onClick={start} className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-cream hover:text-gold-light">
              <RotateCcw aria-hidden className="h-4 w-4" /> Rejouer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
