import { Nota } from "./types";
import { Metadata } from "next";

export function generateNotaSEO(nota: Nota, siteUrl: string = "https://oroyperfumemag.vercel.app"): Metadata {
  return {
    title: `${nota.seo.title} | Oro y Perfume`,
    description: nota.seo.description,
    keywords: nota.seo.keywords,
    openGraph: {
      title: nota.seo.title,
      description: nota.seo.description,
      url: `${siteUrl}/nota/${nota.slug}`,
      siteName: "Oro y Perfume",
      images: [
        {
          url: nota.mainImage.url,
          width: 1200,
          height: 630,
          alt: nota.mainImage.alt,
        },
      ],
      locale: "es_AR",
      type: "article",
      authors: [nota.author],
      publishedTime: nota.publishedAt,
      modifiedTime: nota.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: nota.seo.title,
      description: nota.seo.description,
      images: [nota.mainImage.url],
    },
  };
}

export function generateNotaJsonLd(nota: Nota, siteUrl: string = "https://oroyperfumemag.vercel.app") {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: nota.title,
    image: [nota.mainImage.url],
    datePublished: nota.publishedAt,
    dateModified: nota.updatedAt,
    author: [{
      "@type": "Person",
      name: nota.author,
    }],
    publisher: {
      "@type": "Organization",
      name: "Oro y Perfume",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`
      }
    },
    description: nota.seo.description,
  };
}
