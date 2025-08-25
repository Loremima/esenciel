import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Minus, Maximize2 } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = document.getElementById('site-bgm') as HTMLAudioElement | null;
    if (!audio) {
      console.error("Audio element #site-bgm not found in the DOM.");
      return;
    }
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handlePause);

    // This handles autoplay policy
    const armPlay = () => {
      if (audio.paused) {
        audio.muted = false;
        audio.play().catch(e => console.error("Audio play failed:", e));
      }
      window.removeEventListener('pointerdown', armPlay);
      window.removeEventListener('keydown', armPlay);
    };
    window.addEventListener('pointerdown', armPlay, { once: true });
    window.addEventListener('keydown', armPlay, { once: true });

    // Check initial state
    if (!audio.paused) {
      setIsPlaying(true);
    }

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handlePause);
      window.removeEventListener('pointerdown', armPlay);
      window.removeEventListener('keydown', armPlay);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio play failed on toggle:", e));
      }
    }
  };



  return (
    <div className={`music-player-bubble ${isMinimized ? 'minimized' : ''}`}>
      {!isMinimized && (
        <div className="song-info">
          <div className="song-title">Beginnings Are Such Delicate Times</div>
          <div className="song-artist">Hans Zimmer</div>
        </div>
      )}
      <button onClick={togglePlay} className="player-control" aria-label={isPlaying ? "Pause music" : "Play music"}>
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>
      <button onClick={() => setIsMinimized(!isMinimized)} className="player-minimize" aria-label={isMinimized ? "Expand music player" : "Minimize music player"}>
        {isMinimized ? <Maximize2 size={14} /> : <Minus size={14} />}
      </button>

      <style>{`
        .music-player-bubble {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 1rem;
          background: rgba(255, 252, 234, 0.25);
          backdrop-filter: blur(16px) saturate(120%);
          border-radius: 9999px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 1px solid rgba(255,255,255,0.2);
          color: var(--color-primary-dark);
          transition: all 0.4s ease;
          animation: slide-in 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .music-player-bubble.minimized {
          padding: 0.5rem;
          gap: 0.5rem;
          background: rgba(255, 252, 234, 0.05);
        }
        @keyframes slide-in {
          from {
            transform: translateX(calc(100% + 2rem));
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .song-info {
          text-align: left;
        }
        .song-title {
          font-size: 0.9rem;
          font-weight: 600;
        }
        .song-artist {
          font-size: 0.8rem;
          opacity: 0.7;
        }
        .player-control, .player-close {
          background: var(--color-primary);
          color: #fffcea;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .player-control:hover {
          background: var(--color-primary-dark);
          transform: scale(1.08);
        }
        .player-minimize {
          background: rgba(0,0,0,0.06);
          color: var(--color-primary-dark);
          border: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .player-minimize:hover {
          background: rgba(0,0,0,0.12);
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
