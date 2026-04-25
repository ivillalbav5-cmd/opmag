import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Post } from '@/lib/models/post';
import { generateNotaSEO, generateNotaJsonLd } from '@/lib/seo';
import Image from 'next/image';

// Función mock para simular la obtención de datos (a reemplazar con base de datos real)
async function getPostBySlug(slug: string): Promise<Post | null> {
  // Simulación
  if (slug === 'not-found') return null;
  
  return {
    id: '1',
    title: 'La Nueva Ola del Under',
    slug: slug,
    excerpt: 'Descubrimos a los nuevos exponentes del sonido urbano en Buenos Aires.',
    content: '{"type":"doc","content":[{"type":"heading","attrs":{"level":1},"content":[{"type":"text","text":"El resurgir de la escena"}]}]}',
    category: 'Deep Dive',
    featuredImage: {
      url: '', // Simulamos sin imagen para testear el fallback
      alt: 'Escena urbana',
    },
    readingTime: 5,
    seo: {
      title: 'La Nueva Ola del Under',
      description: 'Descubrimos a los nuevos exponentes del sonido urbano en Buenos Aires. Un análisis profundo de la movida 2026.',
      keywords: ['música', 'urbano', 'argentina', 'trap', 'under'],
    },
    author: 'Nacho Villalba',
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

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

  return generateNotaSEO(postWithFallbackImage as any);
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const fallbackImageUrl = '/images/og-default-burgundy.png';
  const imageUrl = post.featuredImage?.url || fallbackImageUrl;

  const jsonLd = generateNotaJsonLd({
    ...post,
    mainImage: {
      url: imageUrl,
      alt: post.featuredImage?.alt || post.title,
    }
  } as any);

  return (
    <article className="min-h-screen pt-24 pb-16">
      {/* JSON-LD Injected */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Header */}
      <header className="mb-12 text-center max-w-4xl mx-auto px-4 relative z-10">
        <span className="text-brand-burgundy font-sans uppercase tracking-widest text-sm font-medium mb-4 block">
          {post.category} • {post.readingTime} MIN READ
        </span>
        <h1 className="font-display text-5xl md:text-7xl mb-6 leading-none">
          {post.title}
        </h1>
        <p className="font-sans text-brand-beige/80 text-xl max-w-2xl mx-auto">
          {post.excerpt}
        </p>
      </header>

      {/* Grilla Editorial */}
      <div className="editorial-grid">
        <div className="full-bleed aspect-[21/9] bg-zinc-900 relative mb-12">
           {/* Fallback visual cuando la imagen no carga, usaría Image de next en producción */}
           <div className="absolute inset-0 flex items-center justify-center bg-brand-burgundy/10 border-y border-brand-burgundy/20">
              <span className="font-display text-4xl text-brand-burgundy/50">OP MAG</span>
           </div>
        </div>

        {/* Contenido Simulado */}
        <div className="prose prose-invert prose-p:font-sans prose-headings:font-display prose-headings:text-brand-burgundy prose-a:text-brand-burgundy mx-auto w-full">
          <h2>El resurgir de la escena</h2>
          <p>El under no es un lugar, es un estado de saturación. La música se rompe, la moda se desarma, y nosotros estamos ahí para documentar los pedazos.</p>
          <p>Escrito por: {post.author}</p>
        </div>
      </div>
    </article>
  );
}
