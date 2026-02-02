import { Category } from "@/types";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
  index?: number;
}

// Category-specific styling
const categoryStyles: Record<string, { gradient: string; icon: string }> = {
  Electronics: {
    gradient: "from-blue-500/20 to-purple-500/20",
    icon: "💻",
  },
  Clothing: {
    gradient: "from-pink-500/20 to-rose-500/20",
    icon: "👔",
  },
  "Home & Garden": {
    gradient: "from-green-500/20 to-emerald-500/20",
    icon: "🏡",
  },
  Sports: {
    gradient: "from-orange-500/20 to-amber-500/20",
    icon: "⚽",
  },
  Books: {
    gradient: "from-violet-500/20 to-indigo-500/20",
    icon: "📚",
  },
};

const defaultStyle = {
  gradient: "from-gray-500/20 to-slate-500/20",
  icon: "🛍️",
};

const CategoryCard = ({ category, index = 0 }: CategoryCardProps) => {
  const style = categoryStyles[category.name] || defaultStyle;

  return (
    <Link
      to={`/category/${category.id}`}
      className="group block animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`relative h-40 md:h-48 rounded-xl overflow-hidden bg-gradient-to-br ${style.gradient} border border-border/50 transition-all duration-300 hover:border-accent/50 hover:shadow-lg`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <span className="text-4xl mb-3">{style.icon}</span>
          <h3 className="font-serif text-xl font-medium mb-1">{category.name}</h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-accent transition-colors">
            <span>Shop Now</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
