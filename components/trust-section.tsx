import { ShieldCheck, HardDrive, Clock, HeartHandshake } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function TrustSection() {
  const guarantees = [
    {
      icon: HardDrive,
      title: "Sécurité absolue",
      desc: "Matériel en double et sauvegarde instantanée sur deux cartes mémoires. Vos souvenirs sont en sécurité."
    },
    {
      icon: HeartHandshake,
      title: "Accompagnement",
      desc: "Plus qu'un prestataire, je suis votre conseiller. Je vous guide pour des photos naturelles et sans gêne."
    },
    {
      icon: Clock,
      title: "Livraison rapide",
      desc: "Quelques clichés livrés en 48h pour vos remerciements, et la galerie complète sous 3 semaines maximum."
    },
    {
      icon: ShieldCheck,
      title: "Contrat clair",
      desc: "Pas de frais cachés. Un devis transparent, un contrat professionnel et une assurance responsabilité civile."
    }
  ];

  return (
    <section className="py-20 bg-secondary/10 border-b">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-playfair font-bold mb-4">La tranquillité d&apos;esprit avant tout</h2>
          <p className="text-muted-foreground">
            Engager un photographe professionnel, c&apos;est s&apos;offrir le luxe de vivre son événement sans se soucier du reste.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
