export type PostCategory = 'Selección' | 'Radar' | 'Deep Dive' | 'Archivo';

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string; // SEO-short
  content: string; // JSON del editor de bloques (TipTap/Lexical)
  category: PostCategory;
  featuredImage: {
    url: string;
    alt: string;
    blurDataURL?: string; // Para el efecto blur-up de Next/Image
  };
  readingTime: number; // Cálculo automático basado en el contenido
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  author: string;
  publishedAt: string;
  updatedAt: string;
}
