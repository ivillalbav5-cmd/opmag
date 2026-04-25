"use client";

import { Share2 } from "lucide-react";

export default function ShareButton({ title, url }: { title: string; url: string }) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Oro y Perfume`,
          url: url,
        });
      } catch (error) {
        console.log("Error compartiendo", error);
      }
    } else {
      // Fallback para desktop: Copiar al portapapeles
      navigator.clipboard.writeText(url);
      alert("Enlace copiado al portapapeles");
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2 mt-4 border border-brand-beige/20 text-brand-beige/80 hover:text-brand-beige hover:border-brand-burgundy transition-colors uppercase font-sans tracking-widest text-xs"
    >
      <Share2 size={14} />
      <span>Compartir</span>
    </button>
  );
}
