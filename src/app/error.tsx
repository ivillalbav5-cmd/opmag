"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Oro y Perfume Error Captured:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-teal text-brand-beige flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl text-center"
      >
        <span className="text-brand-burgundy font-sans uppercase tracking-widest text-sm font-medium mb-6 block">
          SYSTEM DISSONANCE
        </span>
        <h1 className="font-display text-6xl md:text-8xl mb-8 leading-none">
          Ocurrió una grieta.
        </h1>
        <p className="font-sans text-brand-beige/80 text-xl mb-12 max-w-md mx-auto">
          La señal se perdió en la transmisión. Intentemos sintonizar de nuevo.
        </p>
        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-brand-burgundy text-white font-sans text-sm tracking-widest uppercase hover:bg-white hover:text-brand-teal transition-colors duration-300"
        >
          Reconectar
        </button>
      </motion.div>
    </div>
  );
}
