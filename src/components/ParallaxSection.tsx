import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxSectionProps {
  /**
   * Source de la vidéo (prioritaire sur l'image)
   */
  videoSrc?: string;
  /**
   * Source de l'image (fallback ou principal si pas de vidéo)
   */
  imageSrc?: string;
  /**
   * Contenu à afficher par-dessus le fond parallax
   */
  children?: React.ReactNode;
  /**
   * Opacité de l'overlay sombre (0 à 1)
   * Par défaut: 0.2
   */
  overlayOpacity?: number;
  /**
   * Hauteur de la section
   * Par défaut: "min-h-[70vh]"
   */
  className?: string;
  /**
   * ID pour la navigation
   */
  id?: string;
  /**
   * Vitesse de l'effet parallax (0 = fixe, 1 = scroll normal, < 1 = plus lent)
   * Pour un effet "fond qui bouge lentement", utiliser une valeur négative ou petite
   * Ici, on utilise une approche "window" : le fond bouge moins vite que le scroll
   */
  offset?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  videoSrc,
  imageSrc,
  children,
  overlayOpacity = 0.2,
  className = "min-h-[70vh]",
  id,
  offset = 50 // Décalage en pixels ou pourcentage
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Suivi du scroll pour cet élément spécifique
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transformation douce pour le parallaxe
  // Quand l'élément va du bas de l'écran vers le haut
  // Le fond va bouger légèrement de -15% à +15% pour créer la profondeur
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  
  // Ajout d'un spring pour lisser le mouvement (optionnel, mais agréable)
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section 
      ref={ref} 
      id={id} 
      className={`relative flex items-center justify-center overflow-hidden parallax-surface ${className}`}
    >
      {/* Container du fond avec effet Parallaxe */}
      <motion.div 
        className="absolute inset-0 w-full h-[130%] -top-[15%] z-0 pointer-events-none"
        style={{ y: smoothY }}
      >
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            // Important : empêcher l'interaction avec la vidéo
            style={{ pointerEvents: 'none' }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <img 
            src={imageSrc} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        ) : null}
        
        {/* Overlay pour assurer la lisibilité du texte */}
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        ></div>
      </motion.div>

      {/* Contenu au premier plan */}
      <div className="container relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;

