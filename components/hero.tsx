import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-noise bg-foreground text-background pt-20">
      {/* Background Image with Dark Overlay for maximum contrast and emotion */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteData.gallery[0].url}
          alt="Photographie de mariage élégante"
          fill
          className="object-cover opacity-40 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground" />
      </div>

      <div className="container relative z-10 px-4 py-12 mx-auto flex flex-col items-center text-center">
        
        <ScrollReveal delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-8">
            <Star className="h-3.5 w-3.5 text-primary fill-primary" />
            <span className="text-sm font-medium text-white tracking-wide uppercase">Photographe Premium à {siteData.business.city}</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200} className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-balance leading-tight mb-6 text-white">
            Vivez l&apos;instant présent.<br />
            <span className="text-primary italic">Je capture l&apos;éternité.</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={300} className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
            Le jour de votre événement passe en un éclair. Libérez-vous du stress : je m&apos;occupe de figer vos plus beaux souvenirs avec élégance, discrétion et professionnalisme.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={400} className="w-full max-w-md mx-auto flex flex-col gap-4">
          <Link href="/contact" className="w-full">
            <Button size="lg" className="w-full text-base h-14 px-8 relative overflow-hidden animate-shine shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] hover:-translate-y-1 transition-all duration-300 font-bold">
              Vérifier mes disponibilités
            </Button>
          </Link>
          <Link href="/gallery" className="w-full">
            <Button size="lg" variant="outline" className="w-full text-base h-14 px-8 gap-2 bg-white/5 border-white/20 text-white hover:bg-white hover:text-foreground transition-colors duration-300 backdrop-blur-sm">
              Découvrir le portfolio
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={500} className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-white/70 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span>Double sauvegarde garantie</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            <span>100+ avis 5 étoiles</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>Réponse sous 2 heures</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
