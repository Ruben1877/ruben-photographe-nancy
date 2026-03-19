import { Metadata } from "next";
import Image from "next/image";
import { siteData } from "@/lib/site-data";
import { CtaSection } from "@/components/cta-section";
import { Camera, Heart, ShieldCheck, Star } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: `À propos | ${siteData.business.name}`,
  description: `Découvrez l'histoire et l'approche de Ruben, photographe professionnel à ${siteData.business.city} avec ${siteData.business.experience} ans d'expérience.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-background bg-noise overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-foreground">L&apos;homme derrière l&apos;objectif</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Plus qu&apos;un métier, la photographie est ma façon de donner de la valeur au temps qui passe.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Mon Histoire</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Installé au cœur de {siteData.business.city}, j&apos;ai toujours été fasciné par la capacité d&apos;une simple image à raviver des émotions enfouies. 
                  </p>
                  <p>
                    En <strong className="text-foreground">{siteData.business.experience} années d&apos;expérience</strong>, j&apos;ai compris que la technique photographique n&apos;est que 50% du travail. Les 50% restants ? C&apos;est la psychologie, l&apos;empathie, la capacité à mettre les gens à l&apos;aise pour qu&apos;ils baissent la garde et révèlent leur vraie nature.
                  </p>
                  <p>
                    C&apos;est pourquoi je privilégie toujours une approche <strong>documentaire et naturelle</strong>. Pas de poses figées interminables, pas de sourires forcés. Juste vous, tels que vous êtes.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={siteData.gallery[3].url}
                  alt="Portrait du photographe"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The "Signature" Section */}
      <section className="py-24 bg-foreground text-background bg-noise">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-white">Ma Signature Artistique</h2>
            <p className="text-lg text-white/70">Ce qui rend mes reportages uniques.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <Heart className="h-8 w-8 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">L&apos;Émotion Brute</h3>
              <p className="text-white/70 leading-relaxed">Je traque les micro-expressions, les regards volés et les gestes tendres qui racontent la véritable histoire de votre journée.</p>
            </ScrollReveal>
            <ScrollReveal delay={200} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <Star className="h-8 w-8 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Colorimétrie Intemporelle</h3>
              <p className="text-white/70 leading-relaxed">Un traitement des couleurs doux, lumineux et classique qui ne subira pas les effets de mode dans 20 ans.</p>
            </ScrollReveal>
            <ScrollReveal delay={300} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <ShieldCheck className="h-8 w-8 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Fiabilité Extrême</h3>
              <p className="text-white/70 leading-relaxed">Boîtiers professionnels doublés, objectifs de pointe, et une rigueur absolue dans la sauvegarde de vos fichiers.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
