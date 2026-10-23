import { useEffect, useRef, useState } from 'react';
import { Maximize2, Minus, Pause, Play } from 'lucide-react';

// Lecteur de musique d'ambiance : la bulle en verre dépoli de l'ancien site.
// Rien n'est téléchargé tant que le visiteur ne clique pas sur lecture. Le
// lecteur vit dans la mise en page, donc la musique continue d'une page à l'autre.

const SRC = '/media/ambiance.m4a';

export default function MusicPlayer() {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => () => audio.current?.pause(), []);
  // Sur téléphone, la bulle démarre réduite pour ne pas masquer le contenu.
  useEffect(() => {
    if (window.matchMedia('(max-width: 639px)').matches) setMinimized(true);
  }, []);

  const toggle = async () => {
    if (!audio.current) {
      audio.current = new Audio(SRC);
      audio.current.loop = true;
      audio.current.volume = 0.45;
      audio.current.addEventListener('pause', () => setPlaying(false));
      audio.current.addEventListener('play', () => setPlaying(true));
    }
    if (audio.current.paused) {
      try {
        await audio.current.play();
      } catch {
        setPlaying(false);
      }
    } else {
      audio.current.pause();
    }
  };

  const round = 'grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform hover:scale-105';

  return (
    <div className="player-in fixed bottom-4 right-4 z-30 flex items-center gap-3 rounded-full border border-white/50 bg-cream/75 py-2 pl-2 pr-2 text-ink shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl md:bottom-8 md:right-8">
      <button type="button" onClick={toggle} aria-pressed={playing} aria-label={playing ? 'Mettre la musique en pause' : 'Lancer la musique d’ambiance'} className={`${round} bg-ink text-cream`}>
        {playing ? <Pause aria-hidden size={18} /> : <Play aria-hidden size={18} className="translate-x-px" />}
      </button>
      {!minimized && (
        <div className="min-w-0 pr-1 leading-tight">
          <p className="text-[0.9rem] font-semibold">Beginnings Are Such Delicate Times</p>
          <p className="text-[0.8rem] opacity-70">Hans Zimmer</p>
        </div>
      )}
      <button type="button" onClick={() => setMinimized((m) => !m)} aria-label={minimized ? 'Agrandir le lecteur' : 'Réduire le lecteur'} className={`${round} bg-black/5 text-ink-soft`}>
        {minimized ? <Maximize2 aria-hidden size={14} /> : <Minus aria-hidden size={14} />}
      </button>
    </div>
  );
}
