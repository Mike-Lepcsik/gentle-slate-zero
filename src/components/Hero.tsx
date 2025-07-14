import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Leaf, Heart } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container relative px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                100% Naturel & Bio
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                  Aura Naturelle
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Découvrez notre gamme de produits de beauté naturels et biologiques, 
                créés avec amour pour révéler votre beauté authentique.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6">
                <Heart className="mr-2 h-5 w-5" />
                Découvrir nos produits
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Leaf className="mr-2 h-5 w-5" />
                Notre histoire
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Sans parabènes
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Cruelty-free
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Éco-responsable
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full opacity-50 animate-pulse" />
              </div>
              <div className="absolute bottom-8 left-8 text-white/80">
                <p className="text-lg font-medium">Produits naturels</p>
                <p className="text-sm">Pour une beauté authentique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};