"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`tel:${siteData.business.phone}`}
      className={cn(
        "md:hidden fixed bottom-6 right-4 z-50 flex items-center gap-3 h-14 px-6 rounded-full bg-primary text-primary-foreground shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:scale-105 active:scale-95 group animate-pulse-ring",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
      aria-label="Appeler Ruben"
    >
      <Phone className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
      <span className="font-semibold text-sm whitespace-nowrap relative z-10">Appeler Ruben</span>
    </a>
  );
}
