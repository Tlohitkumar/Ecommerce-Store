import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import ProductSkeleton from "@/components/ProductSkeleton";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: api.getProducts,
  });

  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: api.getCategories,
  });

  const featuredProducts = products?.slice(0, 4) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <HeroSection />

        {/* Featured Products */}
        <section className="py-16 md:py-24">
          <div className="container-main">
            <div className="flex items-end justify-between mb-8 md:mb-12">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-2">
                  Featured Products
                </h2>
                <p className="text-muted-foreground">
                  Our handpicked selection of premium items
                </p>
              </div>
              <Link to="/products" className="hidden md:block">
                <Button variant="outline" className="gap-2">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productsLoading ? (
                <>
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                </>
              ) : (
                featuredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))
              )}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link to="/products">
                <Button variant="outline" className="gap-2">
                  View All Products
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-main">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-2">
                Shop by Category
              </h2>
              <p className="text-muted-foreground">
                Find exactly what you're looking for
              </p>
            </div>

            {categoriesLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-40 md:h-48 shimmer rounded-xl" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {categories?.map((category, index) => (
                  <CategoryCard key={category.id} category={category} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Promo Banner */}
        <section className="py-16 md:py-24">
          <div className="container-main">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent/10 via-accent/5 to-transparent border border-accent/20 p-8 md:p-12 lg:p-16">
              <div className="relative z-10 max-w-lg">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full mb-4">
                  Limited Time Offer
                </span>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
                  Get 20% Off Your First Order
                </h3>
                <p className="text-muted-foreground mb-6">
                  Sign up for our newsletter and receive an exclusive discount on your first purchase.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <Button className="h-12 px-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
