import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Post } from '@/lib/models/post';
import { generateNotaSEO, generateNotaJsonLd } from '@/lib/seo';

// Función mock para simular la obtención de datos (a reemplazar con base de datos real)
async function getPostBySlug(slug: string): Promise<Post | null> {
  // Simulación
  if (slug === 'not-found') return null;
  
  return {
    id: '1',
    title: 'El Renacimiento del Trap: Texturas y Sonidos de 2026',
    slug: slug,
    excerpt: 'Cómo la escena urbana argentina abandonó el minimalismo digital para abrazar el ruido analógico, el grunge de los 90s y la alta costura.',
    content: `
      <h2>De la saturación digital a lo tangible</h2>
      <p>Hace apenas unos años, la industria buscaba la limpieza extrema. Voces perfectas, baterías electrónicas estériles y videos en 4K sin un solo grano de ruido. Pero la saturación llegó. El nuevo sonido de 2026 es sucio, pesado y visceral. Es un choque entre la alta costura europea y el barro del conurbano.</p>
      
      <blockquote>
        "No queremos sonar limpios. Queremos sonar a que algo está a punto de romperse. El lujo no es lo impecable, el lujo es lo que tiene textura."
      </blockquote>
      
      <p>La nueva ola de productores está pasando sus másters por cintas de casete y pedales de guitarra oxidados. Las portadas de los discos vuelven a ser fotos analógicas quemadas. Es un statement estético: en un mundo donde la IA puede crear perfección gratuita, el error humano es el nuevo diamante.</p>
      
      <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1920&auto=format&fit=crop" class="w-full rounded-lg my-8 contained-image" alt="Concierto underground" />
      
      <h2>El Noise como elemento curatorial</h2>
      <p>El uso del ruido no es accidental. Es curatorial. Las marcas de lujo como Balenciaga o Rick Owens han adoptado esta postura brutalista hace tiempo, pero ahora la música latinoamericana la está exportando con un sabor propio. El trap dejó de ser solo un género musical para convertirse en una escuela de diseño interdisciplinaria.</p>
    `,
    category: 'Deep Dive',
    featuredImage: {
      url: '', 
      alt: 'Trap 2026',
    },
    readingTime: 4,
    seo: {
      title: 'El Renacimiento del Trap',
      description: 'Cómo la escena urbana argentina abandonó el minimalismo digital para abrazar el ruido analógico, el grunge de los 90s y la alta costura.',
      keywords: ['música', 'urbano', 'argentina', 'trap', 'renacimiento', 'noise'],
    },
    author: 'Nacho Villalba',
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

import { Nota } from '@/lib/types';
import ScrollProgress from '@/components/magazine/ScrollProgress';
import ShareButton from '@/components/magazine/ShareButton';
import CommunityCTA from '@/components/magazine/CommunityCTA';
import AdSlot from '@/components/ads/AdSlot';

// Generación dinámica de metadatos SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post no encontrado | Oro y Perfume',
    };
  }

  // Fallback a imagen por defecto si no hay url de imagen
  const fallbackImageUrl = '/images/og-default-burgundy.png';
  const postWithFallbackImage = {
    ...post,
    mainImage: {
      url: post.featuredImage?.url || fallbackImageUrl,
      alt: post.featuredImage?.alt || post.title,
    }
  };

  return generateNotaSEO(postWithFallbackImage as unknown as Nota);
}

export const dynamicParams = true;

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const fallbackImageUrl = '/images/og-default-burgundy.png';
  const imageUrl = post.featuredImage?.url || fallbackImageUrl;
  const postUrl = `https://oroyperfumemag.vercel.app/${slug}`;

  const jsonLd = generateNotaJsonLd({
    ...post,
    mainImage: {
      url: imageUrl,
      alt: post.featuredImage?.alt || post.title,
    }
  } as unknown as Nota);

  // Inyección Dinámica de Anuncio In-Article
  const paragraphs = post.content.split('</p>');
  let contentNodes;

  if (paragraphs.length > 2) {
    const middleIndex = Math.floor(paragraphs.length / 2);
    // Reparar los tags </p>
    const firstHalf = paragraphs.slice(0, middleIndex).join('</p>') + '</p>';
    const secondHalf = paragraphs.slice(middleIndex).join('</p>');

    contentNodes = (
      <>
        <div dangerouslySetInnerHTML={{ __html: firstHalf }} />
        {/* Ad-Integration Premium */}
        <AdSlot position="in-article" />
        <div dangerouslySetInnerHTML={{ __html: secondHalf }} />
      </>
    );
  } else {
    contentNodes = <div dangerouslySetInnerHTML={{ __html: post.content }} />;
  }

  return (
    <>
      <ScrollProgress />
      <article className="min-h-screen pt-24 pb-32">
        {/* JSON-LD Injected */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Header */}
        <header className="mb-16 text-center max-w-5xl mx-auto px-4 relative z-10">
          <span className="text-brand-burgundy font-sans uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-6 block">
            {post.category} • {post.readingTime} MIN READ
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.85] uppercase">
            {post.title}
          </h1>
          <p className="font-sans text-brand-beige/80 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 border-t border-brand-beige/10 pt-8 max-w-xl mx-auto">
            <div className="flex items-center gap-4 text-brand-beige/60 font-sans tracking-widest text-sm uppercase">
              <span>POR {post.author}</span>
              <span>•</span>
              <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
            <ShareButton title={post.title} url={postUrl} />
          </div>
        </header>

        {/* Grilla Editorial & Contenido Dinámico */}
        <div className="editorial-grid relative">
          
          <div className="prose prose-invert max-w-3xl mx-auto w-full prose-p:font-sans prose-p:text-xl prose-p:leading-loose prose-p:text-brand-beige/90 prose-headings:font-display prose-headings:text-brand-burgundy prose-a:text-brand-burgundy prose-blockquote:font-display prose-blockquote:text-brand-burgundy prose-blockquote:text-3xl md:prose-blockquote:text-5xl prose-blockquote:-ml-8 md:prose-blockquote:-ml-24 prose-blockquote:border-l-4 prose-blockquote:border-brand-burgundy prose-blockquote:pl-8 prose-blockquote:my-16 prose-blockquote:not-italic prose-blockquote:leading-tight prose-img:rounded-sm">
            {contentNodes}
          </div>
          
        </div>

        {/* CTA a Comunidad */}
        <CommunityCTA />
        
        {/* Sticky Footer Ad para Mobile */}
        <div className="block md:hidden">
          <AdSlot position="sticky-footer" />
        </div>
      </article>
    </>
  );
}
