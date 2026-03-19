import { Metadata } from "next";
import Image from "next/image";
import { siteData } from "@/lib/site-data";
import { CtaSection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: `Galerie Portfolio | ${siteData.business.name}`,
  description: "Découvrez mon portfolio photographique : mariages, portraits, séminaires et événements à Nancy. Des clichés classiques, élégants et intemporels.",
};

export default function GalleryPage() {
  const categories = Array.from(new Set(siteData.gallery.map(img => img.category)));

  return (
    <>
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">Portfolio</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un aperçu de mon travail, des émotions capturées et des histoires racontées à travers mon objectif.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {siteData.gallery.map((img, index) => (
              <ScrollReveal key={index} delay={(index % 3) * 150} direction="up">
                <div className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-zoom-in">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-3 shadow-lg">
                      {img.category}
                    </span>
                    <p className="text-white text-sm font-medium leading-snug">{img.alt}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
