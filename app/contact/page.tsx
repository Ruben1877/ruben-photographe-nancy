import { Metadata } from "next";
import { siteData } from "@/lib/site-data";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Contact & Devis | ${siteData.business.name}`,
  description: `Contactez Ruben Photographe à ${siteData.business.city} pour vos projets de photographie (mariage, événement, portrait). Devis gratuit.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-background bg-noise">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-foreground">Discutons de votre projet</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Remplissez ce court formulaire pour vérifier mes disponibilités. Je vous réponds personnellement sous 2 heures.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground/80">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Sans engagement
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Devis détaillé gratuit
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />

      <section className="py-20 bg-secondary/10 border-t">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-playfair font-bold">Zone d&apos;intervention</h2>
            <p className="text-lg text-muted-foreground">
              Basé au <strong>{siteData.business.address}</strong>, j&apos;interviens principalement à <strong>{siteData.business.city}</strong> et dans tout le Grand Est.
            </p>
            
            <div className="w-full h-[350px] bg-white rounded-2xl shadow-xl border flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-30 transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center transform group-hover:-translate-y-2 transition-transform duration-500 border border-white/50">
                <p className="font-playfair font-bold text-3xl mb-2 text-foreground">{siteData.business.city}</p>
                <p className="text-sm font-bold text-primary uppercase tracking-widest">Studio & Déplacements</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
