import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { api } from "@/services/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductSkeleton from "@/components/ProductSkeleton";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CategoryProducts = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const categoryIdNum = Number(categoryId);

  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["products", "category", categoryIdNum],
    queryFn: () => api.getProductsByCategory(categoryIdNum),
    enabled: !isNaN(categoryIdNum),
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: api.getCategories,
  });

  const category = categories?.find((c) => c.id === categoryIdNum);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 md:py-12">
        <div className="container-main">
          {/* Back Button */}
          <Link to="/categories">
            <Button variant="ghost" size="sm" className="gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Categories
            </Button>
          </Link>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">
              {category?.name || "Category"}
            </h1>
            <p className="text-muted-foreground">
              {products?.length || 0} products in this category
            </p>
          </div>

          {/* Products Grid */}
          {productsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : products?.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No products found in this category
              </p>
              <Link to="/products">
                <Button>Browse All Products</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products?.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryProducts;
