import { Hero } from "@/components/hero";
import { TrustSection } from "@/components/trust-section";
import { ServicesSection } from "@/components/services-section";
import { GallerySection } from "@/components/gallery-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteData } from "@/lib/site-data";
import { Camera, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteData.business.name,
    "image": siteData.gallery[0].url,
    "description": siteData.business.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteData.business.address.split(",")[0],
      "addressLocality": siteData.business.city,
      "addressCountry": "FR"
    },
    "telephone": siteData.business.phone,
    "email": siteData.business.email,
    "priceRange": "€€",
    "openingHours": "Mo-Fr 09:00-19:00"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero />
      <TrustSection />

      {/* About / Emotional Hook */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image 
                  src={siteData.gallery[2].url} 
                  alt="Photographe en action"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-playfair text-2xl italic text-white mb-3 leading-snug">
                      &quot;Mon but n&apos;est pas de vous faire poser, mais de vous faire oublier que je suis là.&quot;
                    </p>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary">Ruben, Fondateur</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-bold tracking-wide">
                <Camera className="h-4 w-4" /> À propos de mon approche
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold leading-tight text-foreground">
                Détendez-vous, <br/><span className="text-primary">je m&apos;occupe de tout.</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Je sais à quel point l&apos;organisation d&apos;un événement peut être stressante. Vous avez passé des mois à tout préparer, vous méritez d&apos;en profiter pleinement le jour J.
                </p>
                <p>
                  Basé à {siteData.business.city}, mon rôle dépasse celui de simple photographe. Je suis une présence rassurante, un œil attentif qui veille à capturer les éclats de rire, les larmes de joie et tous ces petits détails que vous n&apos;aurez pas le temps de voir.
                </p>
              </div>
              
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Discrétion absolue",
                  "Lumière naturelle",
                  "Retouches élégantes",
                  "Livraison sur clé USB & Galerie"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
