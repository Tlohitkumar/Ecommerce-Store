import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/50 blur-[120px]" />
      </div>

      <div className="container-main relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            New Collection 2026
          </div>

          {/* Headline */}
          <h1 
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6 animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            Discover Premium
            <br />
            <span className="text-accent">Curated Products</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-white/70 max-w-xl mb-8 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            Explore our handpicked collection of premium products designed to elevate your everyday experience.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <Link to="/products">
              <Button 
                size="lg" 
                className="h-14 px-8 text-base font-medium bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              >
                Shop Collection
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/categories">
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 text-base font-medium border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Browse Categories
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div 
            className="flex gap-8 md:gap-12 mt-12 pt-8 border-t border-white/10 animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-white">500+</div>
              <div className="text-sm text-white/60">Products</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-white">50k+</div>
              <div className="text-sm text-white/60">Customers</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-semibold text-white">4.9★</div>
              <div className="text-sm text-white/60">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
