import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";

export const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Sérum Visage Éclat",
      description: "Sérum anti-âge aux huiles essentielles de rose et vitamine C",
      price: "45€",
      rating: 4.9,
      badge: "Bestseller",
      image: "gradient-to-br from-rose-100 to-pink-200"
    },
    {
      id: 2,
      name: "Crème Hydratante Bio",
      description: "Crème nourrissante à l'aloe vera et beurre de karité",
      price: "32€",
      rating: 4.8,
      badge: "Nouveau",
      image: "gradient-to-br from-green-100 to-emerald-200"
    },
    {
      id: 3,
      name: "Huile Corps Relaxante",
      description: "Huile de massage aux huiles essentielles de lavande",
      price: "38€",
      rating: 4.7,
      badge: "Bio",
      image: "gradient-to-br from-purple-100 to-violet-200"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-sm">
            Nos Produits Phares
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Découvrez nos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              essentiels beauté
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de nos produits les plus appréciés, formulés avec des ingrédients naturels de qualité premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className={`h-48 bg-${product.image} rounded-t-lg relative overflow-hidden`}>
                  <Badge className="absolute top-4 left-4 z-10">
                    {product.badge}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white hover:text-red-500 transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.rating})
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {product.price}
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button className="w-full group-hover:bg-primary/90 transition-colors">
                  Ajouter au panier
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Voir tous nos produits
          </Button>
        </div>
      </div>
    </section>
  );
};