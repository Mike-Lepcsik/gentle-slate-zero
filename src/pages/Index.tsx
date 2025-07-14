import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Sparkles, Heart, ShieldCheck } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
