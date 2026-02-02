// TypeScript interfaces matching backend Java models

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category: Category;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
