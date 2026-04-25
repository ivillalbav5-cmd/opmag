import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-screen texture-grain">
      <h1 className="font-display text-6xl md:text-8xl text-brand-beige mb-6">
        ORO Y PERFUME
      </h1>
      <p className="font-sans text-xl text-brand-beige/80 max-w-2xl mb-12">
        La revista digital de culto sobre la escena urbana argentina.
      </p>
      
      <Link 
        href="/design-system" 
        className="px-8 py-3 bg-brand-burgundy text-brand-beige font-sans font-medium uppercase tracking-widest hover:bg-brand-beige hover:text-brand-teal transition-colors duration-300"
      >
        Ver Design System
      </Link>
    </main>
  );
}
