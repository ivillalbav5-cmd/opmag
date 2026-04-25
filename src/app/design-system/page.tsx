import React from 'react';
import { Palette, Type, Layers, Wand2 } from 'lucide-react';

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-brand-teal text-brand-beige p-8 md:p-16 lg:p-24 selection:bg-brand-burgundy selection:text-brand-beige">
      <header className="mb-16 border-b border-brand-beige/20 pb-8">
        <h1 className="font-display text-5xl md:text-7xl mb-4 text-brand-beige">Design System</h1>
        <p className="font-sans text-brand-beige/70 text-lg md:text-xl max-w-2xl leading-relaxed">
          Oro y Perfume - Manual de marca vivo. Estética 'Tech-Premium' / Disonante.
        </p>
      </header>

      <div className="space-y-24">
        {/* Colors */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Palette className="w-6 h-6 text-brand-burgundy" />
            <h2 className="font-display text-3xl md:text-4xl">Colores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group">
              <div className="h-32 rounded-lg bg-brand-teal border border-brand-beige/20 flex items-end p-4 transition-transform group-hover:-translate-y-2">
                <span className="font-sans font-medium text-sm">#0A1A17</span>
              </div>
              <p className="mt-3 font-display text-xl">Deep Teal</p>
              <p className="font-sans text-brand-beige/60 text-sm">Fondo Principal / Void</p>
            </div>
            <div className="group">
              <div className="h-32 rounded-lg bg-brand-beige flex items-end p-4 transition-transform group-hover:-translate-y-2">
                <span className="font-sans font-medium text-sm text-brand-teal">#F5F5DC</span>
              </div>
              <p className="mt-3 font-display text-xl">Raw Beige</p>
              <p className="font-sans text-brand-beige/60 text-sm">Texto / Contraste</p>
            </div>
            <div className="group">
              <div className="h-32 rounded-lg bg-brand-burgundy flex items-end p-4 transition-transform group-hover:-translate-y-2">
                <span className="font-sans font-medium text-sm text-brand-beige">#800020</span>
              </div>
              <p className="mt-3 font-display text-xl">Cult Burgundy</p>
              <p className="font-sans text-brand-beige/60 text-sm">Acento / Interacción</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Type className="w-6 h-6 text-brand-burgundy" />
            <h2 className="font-display text-3xl md:text-4xl">Tipografía</h2>
          </div>
          <div className="space-y-12">
            <div>
              <div className="mb-4 flex items-baseline justify-between border-b border-brand-beige/20 pb-2">
                <h3 className="font-sans text-brand-beige/60">Squid Boy (Display)</h3>
                <span className="font-sans text-xs text-brand-beige/40">H1, H2, Titles</span>
              </div>
              <div className="space-y-6">
                <p className="font-display text-7xl md:text-8xl leading-none">CULTURA</p>
                <p className="font-display text-5xl md:text-6xl leading-none">URBANA</p>
                <p className="font-display text-3xl md:text-4xl leading-none">ARGENTINA 2026</p>
              </div>
            </div>
            <div>
              <div className="mb-4 flex items-baseline justify-between border-b border-brand-beige/20 pb-2">
                <h3 className="font-sans text-brand-beige/60">Neue Montreal (Sans)</h3>
                <span className="font-sans text-xs text-brand-beige/40">Body, UI, Metadata</span>
              </div>
              <div className="space-y-6 font-sans">
                <p className="text-xl leading-relaxed max-w-3xl">
                  El under no es un lugar, es un estado de saturación. La música se rompe, la moda se desarma, y nosotros estamos ahí para documentar los pedazos.
                </p>
                <p className="text-base text-brand-beige/80 leading-relaxed max-w-3xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <p className="text-sm uppercase tracking-widest text-brand-burgundy font-medium">
                  Metadato / Etiqueta / 12px
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-6 h-6 text-brand-burgundy" />
            <h2 className="font-display text-3xl md:text-4xl">Componentes Core</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Buttons */}
            <div className="space-y-8">
              <h3 className="font-sans text-brand-beige/60 border-b border-brand-beige/20 pb-2">Botones / Interacción</h3>
              <div className="flex flex-wrap gap-6">
                <button className="px-8 py-3 bg-brand-beige text-brand-teal font-sans font-medium uppercase tracking-wide hover:bg-brand-burgundy hover:text-brand-beige transition-colors duration-300">
                  Leer Nota Principal
                </button>
                <button className="px-8 py-3 bg-transparent border border-brand-beige text-brand-beige font-sans font-medium uppercase tracking-wide hover:bg-brand-beige hover:text-brand-teal transition-colors duration-300">
                  Ver Archivo
                </button>
              </div>
            </div>
            {/* Cards */}
            <div className="space-y-8">
              <h3 className="font-sans text-brand-beige/60 border-b border-brand-beige/20 pb-2">Cards / Editorial</h3>
              <div className="p-6 border border-brand-beige/10 bg-brand-teal/50 hover:bg-brand-teal transition-colors duration-500 texture-grain group cursor-pointer relative overflow-hidden">
                <div className="relative z-10">
                  <span className="font-sans text-xs uppercase tracking-widest text-brand-burgundy mb-4 block">Entrevista</span>
                  <h4 className="font-display text-3xl mb-3 group-hover:text-brand-beige/90 transition-colors">La nueva ola del trap</h4>
                  <p className="font-sans text-sm text-brand-beige/70">Una conversación íntima con los productores que están definiendo el sonido del sur.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Effects & Filters */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Wand2 className="w-6 h-6 text-brand-burgundy" />
            <h2 className="font-display text-3xl md:text-4xl">Filtros y Texturas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-sans text-brand-beige/60 border-b border-brand-beige/20 pb-2 mb-4">Duotone Filter (SVG CSS)</h3>
              <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1493225457124-a1a2a5f0f0df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Ejemplo Duotono"
                  className="object-cover w-full h-full filter-duotone"
                />
              </div>
            </div>
            <div>
              <h3 className="font-sans text-brand-beige/60 border-b border-brand-beige/20 pb-2 mb-4">Grain Texture (Overlay)</h3>
              <div className="aspect-video bg-brand-teal border border-brand-beige/20 texture-grain flex items-center justify-center">
                <span className="font-display text-2xl text-brand-beige/50 mix-blend-difference">RUIDO</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
