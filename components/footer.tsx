import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { Camera, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-primary" />
              <span className="font-playfair font-bold text-xl tracking-wide">
                {siteData.business.name}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {siteData.business.tagline}
              <br /><br />
              Photographe professionnel au service de vos plus beaux souvenirs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair font-semibold text-lg">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {siteData.navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-playfair font-semibold text-lg">Contact & Accès</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>{siteData.business.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={`tel:${siteData.business.phone}`} className="hover:text-primary transition-colors">
                  {siteData.business.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href={`mailto:${siteData.business.email}`} className="hover:text-primary transition-colors">
                  {siteData.business.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>{siteData.business.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} {siteData.business.name}. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/legal" className="hover:text-primary transition-colors">Mentions légales</Link>
            <span>•</span>
            <span>Créé avec passion à {siteData.business.city}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
