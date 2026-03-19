import { siteData } from "@/lib/site-data";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Mots de mes clients</h2>
          <p className="text-muted-foreground">
            La satisfaction de ceux qui m&apos;ont fait confiance est ma plus belle récompense.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <Card className="bg-white border-none shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full cursor-default">
                <CardContent className="p-8 flex flex-col h-full relative">
                  <Quote className="h-10 w-10 text-primary/10 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 italic mb-8 flex-grow leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="mt-auto border-t pt-4">
                    <p className="font-bold font-playfair text-lg">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{testimonial.city}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
