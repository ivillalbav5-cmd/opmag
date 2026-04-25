import React from 'react';

export default function CommunityCTA() {
  return (
    <div className="my-24 p-8 md:p-12 border-2 border-brand-beige/10 hover:border-brand-burgundy transition-colors duration-500 text-center max-w-4xl mx-auto group bg-brand-teal/50">
      <h3 className="font-display text-4xl md:text-6xl text-brand-beige mb-4 group-hover:text-brand-burgundy transition-colors duration-500">
        El under no muere.
      </h3>
      <p className="font-sans text-brand-beige/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Únete a nuestro ecosistema radial. Discusiones profundas, acceso anticipado y cultura sin filtros en nuestra comunidad privada.
      </p>
      <a 
        href="#"
        className="inline-block border border-brand-beige text-brand-beige font-sans uppercase tracking-[0.2em] px-8 py-4 text-sm hover:bg-brand-burgundy hover:border-brand-burgundy hover:text-white transition-all duration-300"
      >
        Ingresar al Canal
      </a>
    </div>
  );
}
