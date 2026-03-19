"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Camera, Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
            <Camera className="h-6 w-6 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-playfair font-bold text-xl leading-none tracking-wide text-foreground">
              {siteData.business.name}
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest">
              Photographie
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {siteData.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href={`tel:${siteData.business.phone}`}>
            <Button variant="ghost" className="gap-2 text-foreground/80 hover:text-primary hover:bg-primary/5">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">{siteData.business.phone}</span>
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="relative overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 animate-shine">
              Demander un devis
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu" className={cn(isScrolled ? "text-foreground" : "text-foreground bg-white/50 backdrop-blur-sm")}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
              <SheetTitle className="text-left font-playfair text-2xl mb-8">Menu</SheetTitle>
              <nav className="flex flex-col gap-6">
                {siteData.navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-4 pb-8">
                <Link href={`tel:${siteData.business.phone}`} className="w-full">
                  <Button variant="outline" className="w-full gap-2 border-primary text-primary h-12">
                    <Phone className="h-4 w-4" />
                    {siteData.business.phone}
                  </Button>
                </Link>
                <Link href="/contact" className="w-full">
                  <Button className="w-full h-12 animate-shine relative overflow-hidden">
                    Demander un devis
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
