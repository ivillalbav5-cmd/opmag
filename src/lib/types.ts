export interface Nota {
  id: string;
  title: string;
  slug: string;
  author: string;
  category: string; // Pilar (ej: Música, Moda, Arte)
  content: string; // JSON stringificado del editor de bloques
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  mainImage: {
    url: string;
    alt: string;
  };
  publishedAt: string;
  updatedAt: string;
}
