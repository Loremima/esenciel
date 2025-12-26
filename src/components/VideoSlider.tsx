import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Youtube } from 'lucide-react';

interface Video {
    title: string;
    url: string;
}

interface VideoSliderProps {
    videos: Video[];
}

const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

const VideoSlider: React.FC<VideoSliderProps> = ({ videos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? videos.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === videos.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const currentVideoId = getYouTubeId(videos[currentIndex].url);

    return (
        <div className="video-slider">
            <div className="video-player">
                {currentVideoId ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${currentVideoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={videos[currentIndex].title}
                    ></iframe>
                ) : (
                    <div className="video-placeholder">
                        <Youtube size={48} />
                        <p>Vidéo invalide ou non disponible.</p>
                    </div>
                )}
            </div>
            <div className="video-controls">
                <button onClick={goToPrevious} className="slider-arrow prev-arrow">
                    <ChevronLeft size={24} />
                </button>
                <div className="video-info">
                    <p className="video-title">{videos[currentIndex].title}</p>
                    <p className="video-counter">{`${currentIndex + 1} / ${videos.length}`}</p>
                </div>
                <button onClick={goToNext} className="slider-arrow next-arrow">
                    <ChevronRight size={24} />
                </button>
            </div>
            <style jsx>{`
        .video-slider {
          max-width: 800px;
          margin: 0 auto;
          background: #1a1a1a;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .video-player {
          position: relative;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
          background-color: #000;
        }
        .video-player iframe,
        .video-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .video-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #888;
        }
        .video-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-4);
          background: #222;
          color: #fff;
        }
        .slider-arrow {
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
          padding: var(--spacing-2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
        }
        .slider-arrow:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .video-info {
          text-align: center;
          flex-grow: 1;
        }
        .video-title {
          margin: 0;
          font-weight: 500;
          font-size: 1rem;
        }
        .video-counter {
          margin: 0;
          font-size: 0.85rem;
          color: #888;
        }
      `}</style>
        </div>
    );
};

export default VideoSlider;
