import React from "react";
import TextureOverlay from "@/components/ui/TextureOverlay";

export default function MagazineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-brand-teal text-brand-beige">
      <TextureOverlay />
      {children}
    </div>
  );
}
