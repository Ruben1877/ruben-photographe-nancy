import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { CtaSection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: `Prestations & Tarifs | ${siteData.business.name}`,
  description: "Découvrez l'ensemble de mes prestations photographiques à Nancy : Mariage, Anniversaire, Séminaire, Portrait. Des formules sur-mesure à partir de 90€.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-secondary/20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">Mes Prestations</h1>
            <p className="text-lg text-muted-foreground">
              Des formules adaptées à vos besoins, qu&apos;il s&apos;agisse du plus beau jour de votre vie ou d&apos;un événement d&apos;entreprise majeur.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {siteData.services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  
                  <div className="w-full lg:w-1/2">
                    <ScrollReveal direction={isEven ? "right" : "left"}>
                      <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-6 py-3 rounded-full shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                          <span className="font-bold text-primary text-lg">{service.price}</span>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-8">
                    <ScrollReveal direction={isEven ? "left" : "right"} delay={200}>
                      <div className="inline-flex p-4 rounded-full bg-secondary text-primary mb-4 shadow-sm">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">{service.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-4 mb-8 bg-white p-6 rounded-xl border shadow-sm">
                        {[
                          "Prises de vue en haute définition",
                          "Retouche colorimétrique professionnelle",
                          "Galerie privée en ligne sécurisée",
                          "Déplacement inclus (selon zone)"
                        ].map((benefit, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                            <span className="text-foreground/80 font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href="/contact" className="inline-block">
                        <Button size="lg" className="gap-2 h-14 px-8 shadow-lg hover:-translate-y-1 transition-transform animate-shine relative overflow-hidden">
                          Demander un devis détaillé
                          <ArrowRight className="h-5 w-5" />
                        </Button>
                      </Link>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
