import { useEffect, useRef, useState } from 'react';
import { Music, Pause } from 'lucide-react';

// Musique d'ambiance : rien n'est téléchargé tant que le visiteur ne clique
// pas. Le lecteur vit dans la mise en page, donc la musique continue d'une
// page à l'autre.

const SRC = '/media/ambiance.m4a';

export default function MusicPlayer() {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => () => audio.current?.pause(), []);

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

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={playing}
      className="fixed bottom-4 left-4 z-30 flex items-center gap-2 rounded-full border border-sand-dark bg-cream/95 px-3.5 py-2.5 text-sm text-ink-soft shadow-soft backdrop-blur transition-colors hover:text-ink"
    >
      {playing ? <Pause aria-hidden className="h-4 w-4" /> : <Music aria-hidden className="h-4 w-4" />}
      <span className="hidden sm:inline">{playing ? 'Couper la musique' : 'Musique d’ambiance'}</span>
      <span className="sr-only sm:hidden">{playing ? 'Couper la musique' : 'Lancer la musique d’ambiance'}</span>
    </button>
  );
}
