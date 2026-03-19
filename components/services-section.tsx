import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/lib/site-data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ServicesSection() {
  const previewServices = siteData.services.slice(0, 3);

  return (
    <section className="py-24 bg-background bg-noise">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">Des prestations sur-mesure</h2>
          <p className="text-lg text-muted-foreground">
            Des formules claires, sans surprise, conçues pour s&apos;adapter à l&apos;envergure de votre projet.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {previewServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} delay={index * 150}>
                <Card className="group overflow-hidden border border-border/50 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full bg-white relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20" />
                  
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-3 bg-white/20 backdrop-blur-md w-fit px-4 py-1.5 rounded-full text-sm font-medium border border-white/30 shadow-lg">
                        <Icon className="h-4 w-4" />
                        <span>{service.price}</span>
                      </div>
                      <CardTitle className="font-playfair text-2xl md:text-3xl text-white">{service.title}</CardTitle>
                    </div>
                  </div>
                  
                  <CardContent className="flex-grow pt-8">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Tri et retouches inclus</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Galerie privée en ligne</span>
                      </li>
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="pt-4 pb-8 px-6">
                    <Link href="/contact" className="w-full">
                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 h-12 font-semibold shadow-sm">
                        Demander un devis
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={400} className="mt-16 text-center">
          <Link href="/services">
            <Button variant="ghost" className="gap-2 h-14 px-8 text-base font-semibold hover:bg-secondary/50 transition-colors">
              Voir la grille tarifaire complète
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
