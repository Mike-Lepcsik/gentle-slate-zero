import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-muted/50 pt-16 pb-8">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Aura Naturelle
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Révélez votre beauté naturelle avec nos produits cosmétiques biologiques 
              et respectueux de l'environnement.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navigation</h3>
            <ul className="space-y-2">
              {["Accueil", "Produits", "À Propos", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Produits */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Nos Produits</h3>
            <ul className="space-y-2">
              {["Soins du Visage", "Soins du Corps", "Huiles Essentielles", "Savons Naturels", "Coffrets Cadeaux"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">contact@auranaturelle.fr</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Aura Naturelle. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};