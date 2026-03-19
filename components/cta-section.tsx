import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ShieldCheck, Clock, Star } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-foreground text-background bg-noise">
      {/* Premium Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20 opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Quelques dates encore disponibles en 2024/2025
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Ne laissez pas vos souvenirs s&apos;effacer.
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Contactez-moi pour vérifier mes disponibilités. Nous discuterons de votre vision autour d&apos;un café ou par téléphone, sans aucun engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-primary-foreground bg-primary hover:bg-primary/90 font-bold gap-2 h-14 px-10 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(249,115,22,0.3)] animate-shine relative overflow-hidden text-base">
                <Calendar className="h-5 w-5" />
                Obtenir mon devis gratuit
              </Button>
            </Link>
            <Link href={`tel:${siteData.business.phone}`}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white hover:text-foreground gap-2 h-14 px-8 transition-colors text-base">
                <Phone className="h-5 w-5" />
                {siteData.business.phone}
              </Button>
            </Link>
          </div>

          {/* Ultimate Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white/70 text-sm font-medium border-t border-white/10 pt-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full"><Clock className="h-5 w-5 text-primary" /></div>
              <div className="text-left">
                <p className="text-white font-bold">Réactivité</p>
                <p className="text-xs">Réponse sous 2h</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full"><Star className="h-5 w-5 text-primary" /></div>
              <div className="text-left">
                <p className="text-white font-bold">Excellence</p>
                <p className="text-xs">Recommandé à 100%</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full"><ShieldCheck className="h-5 w-5 text-primary" /></div>
              <div className="text-left">
                <p className="text-white font-bold">Sérénité</p>
                <p className="text-xs">Contrat & Assurance</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
