import { siteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ContactSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Prenons contact</h2>
              <p className="text-muted-foreground text-lg">
                Une question ? Un projet ? N&apos;hésitez pas à m&apos;écrire via le formulaire ou à m&apos;appeler directement.
              </p>
            </ScrollReveal>

            <div className="grid gap-4">
              <ScrollReveal delay={100}>
                <a href={`tel:${siteData.business.phone}`} className="block group">
                  <Card className="border-none shadow-sm bg-secondary/10 group-hover:bg-primary/5 transition-colors">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Téléphone</p>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors font-medium">
                          {siteData.business.phone}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <a href={`mailto:${siteData.business.email}`} className="block group">
                  <Card className="border-none shadow-sm bg-secondary/10 group-hover:bg-primary/5 transition-colors">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors font-medium">
                          {siteData.business.email}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="border-none shadow-sm bg-secondary/10">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Studio & Déplacements</p>
                      <p className="text-muted-foreground">{siteData.business.address}</p>
                      <p className="text-xs font-medium text-primary mt-1">Intervention : {siteData.business.serviceArea}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* Contact Form Streamlined */}
          <ScrollReveal direction="left" delay={200}>
            <Card className="border shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6 text-green-600 bg-green-50 w-fit px-3 py-1 rounded-full text-sm font-medium">
                  <Clock className="h-4 w-4" />
                  <span>Réponse garantie sous 2h</span>
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-6">Demander un devis gratuit</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-semibold">Prénom & Nom</label>
                      <Input id="firstName" placeholder="Jean Dupont" className="bg-secondary/5 border-border/50 focus:bg-white transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold">Téléphone</label>
                      <Input id="phone" type="tel" placeholder="06 00 00 00 00" className="bg-secondary/5 border-border/50 focus:bg-white transition-colors" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold">Email</label>
                    <Input id="email" type="email" placeholder="jean.dupont@exemple.fr" className="bg-secondary/5 border-border/50 focus:bg-white transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold">Votre projet (Date, Lieu, Type)</label>
                    <Textarea 
                      id="message" 
                      placeholder="Ex: Mariage prévu le 15 juillet prochain à Nancy..." 
                      className="min-h-[120px] bg-secondary/5 border-border/50 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <Button type="button" className="w-full gap-2 h-14 text-base font-bold shadow-lg hover:-translate-y-0.5 transition-transform animate-shine relative overflow-hidden">
                    <Send className="h-4 w-4 relative z-10" />
                    <span className="relative z-10">Envoyer ma demande</span>
                  </Button>
                  
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Vos données sont sécurisées et confidentielles.</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
