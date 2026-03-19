import { siteData } from "@/lib/site-data";
import { Award, Camera, MapPin, Users } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CountUp } from "@/components/count-up";

export function StatsSection() {
  const stats = [
    {
      icon: Award,
      end: siteData.business.experience,
      suffix: " ans",
      label: "D'expérience"
    },
    {
      icon: Camera,
      end: 500,
      suffix: "+",
      label: "Événements couverts"
    },
    {
      icon: MapPin,
      end: 100,
      suffix: " km",
      label: `Autour de ${siteData.business.city}`
    },
    {
      icon: Users,
      end: 100,
      suffix: "%",
      label: "Clients satisfaits"
    }
  ];

  return (
    <section className="py-16 bg-white border-y relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={index} delay={index * 100} className="flex flex-col items-center text-center px-4">
                <div className="mb-4 p-4 bg-secondary/30 rounded-full text-primary group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-2">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                  {stat.label}
                </span>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
