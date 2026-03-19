import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function GallerySection() {
  const previewImages = siteData.gallery.slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Un aperçu de mon univers</h2>
            <p className="text-muted-foreground">
              Découvrez quelques-uns de mes clichés récents. Mon style classique met en valeur l&apos;émotion brute et la beauté naturelle de chaque instant.
            </p>
          </div>
          <Link href="/gallery" className="shrink-0">
            <Button variant="outline" className="gap-2 hover:bg-primary hover:text-white transition-colors">
              Voir la galerie complète
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {previewImages.map((img, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 100}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                index === 0 || index === 3 ? "md:col-span-2 lg:col-span-2 h-[300px] md:h-[400px]" : "h-[300px] md:h-[400px]"
              }`}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-foreground shadow-lg">
                {img.category}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
