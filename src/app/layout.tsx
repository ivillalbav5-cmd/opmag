import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import "@/styles/textures.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Oro y Perfume | Magazine Digital",
  description: "Magazine digital de culto sobre la escena urbana argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${figtree.variable} h-full antialiased`}>
      {/* 
        Nota: Agregamos font-sans como default para el body. 
        En producción se deben cargar las fuentes 'Squid Boy'
        mediante @font-face en globals.css o next/font/local si son archivos locales.
      */}
      <body className="min-h-full flex flex-col font-sans bg-brand-teal text-brand-beige">
        {/* SVG Filter for Duotone and other effects */}
        <svg className="hidden" xmlns="http://www.w3.org/2000/svg">
          <filter id="duotone-filter">
            <feColorMatrix
              type="matrix"
              values="0.2126 0.7152 0.0722 0 0
                      0.2126 0.7152 0.0722 0 0
                      0.2126 0.7152 0.0722 0 0
                      0      0      0      1 0"
              result="gray"
            />
            {/* 
              Mapea los grises a los colores de la marca:
              Teal (#0A1A17): R=0.039, G=0.102, B=0.090
              Beige (#F5F5DC): R=0.961, G=0.961, B=0.863
            */}
            <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
              <feFuncR type="table" tableValues="0.039 0.961" />
              <feFuncG type="table" tableValues="0.102 0.961" />
              <feFuncB type="table" tableValues="0.090 0.863" />
            </feComponentTransfer>
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
