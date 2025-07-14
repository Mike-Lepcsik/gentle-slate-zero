import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, ShieldCheck, Sparkles } from "lucide-react";

export const AboutSection = () => {
  const values = [
    {
      icon: Leaf,
      title: "100% Naturel",
      description: "Tous nos produits sont formulés avec des ingrédients naturels et biologiques soigneusement sélectionnés."
    },
    {
      icon: Heart,
      title: "Fait avec Amour",
      description: "Chaque produit est créé avec passion et attention pour vous offrir le meilleur de la nature."
    },
    {
      icon: ShieldCheck,
      title: "Testé & Approuvé",
      description: "Nos formules sont testées dermatologiquement et approuvées par nos clients satisfaits."
    },
    {
      icon: Sparkles,
      title: "Résultats Visibles",
      description: "Des ingrédients actifs puissants pour des résultats visibles et une peau éclatante de santé."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline">Notre Mission</Badge>
              <h2 className="text-3xl md:text-5xl font-bold">
                Révéler votre{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  beauté naturelle
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chez Aura Naturelle, nous croyons que la vraie beauté vient de l'harmonie 
                entre votre bien-être intérieur et les soins que vous apportez à votre peau. 
                C'est pourquoi nous avons créé une gamme de produits cosmétiques naturels 
                et biologiques, formulés avec les meilleurs ingrédients que la nature puisse offrir.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre engagement envers la qualité, l'authenticité et le respect de 
                l'environnement guide chacune de nos décisions, pour vous offrir des 
                produits qui prennent soin de vous et de notre planète.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};