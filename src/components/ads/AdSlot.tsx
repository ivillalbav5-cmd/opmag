"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AdSlotProps {
  position: 'in-article' | 'sidebar' | 'sticky-footer';
  className?: string;
}

export default function AdSlot({ position, className = "" }: AdSlotProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulamos el tiempo de carga del Ad de Google para mantener el esqueleto
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Estilos y dimensiones basadas en la posición para evitar Layout Shift (CLS)
  const positionStyles = {
    'in-article': 'w-full max-w-3xl mx-auto h-[250px] my-12', // Standard In-Article banner
    'sidebar': 'w-[300px] h-[600px] mx-auto sticky top-24',  // Half-page ad
    'sticky-footer': 'fixed bottom-0 left-0 right-0 h-[60px] md:h-[90px] w-full z-50', // Mobile sticky anchor
  };

  return (
    <div className={`relative ${positionStyles[position]} ${className}`}>
      {/* Esqueleto (Placeholder) - Se mantiene hasta que carga el Ad */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#0D2420] border border-brand-burgundy/20 animate-pulse flex items-center justify-center">
           <span className="font-sans text-xs tracking-widest text-brand-beige/30 uppercase">Publicidad</span>
        </div>
      )}

      {/* Ad Container con Animación de entrada "Ad-Integration Premium" */}
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-[#0D2420] border border-brand-burgundy/20 flex items-center justify-center overflow-hidden"
        >
          {/* MOCK AD CONTENT - Aquí iría la tag real de AdSense */}
          <div className="text-center p-4">
            <span className="font-display text-2xl md:text-3xl text-brand-burgundy/50 block mb-2">ADVERTORIAL</span>
            <span className="font-sans text-brand-beige/50 text-xs tracking-widest uppercase">Placeholder dinámico 2026</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
