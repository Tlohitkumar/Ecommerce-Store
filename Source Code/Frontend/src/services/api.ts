import axios from 'axios';
import { Category, Product } from '@/types';

// Base URL for the Spring Boot backend
const API_BASE_URL = 'http://localhost:8080';

// Create axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// API object with all endpoint functions
export const api = {
  // Get all categories
  getCategories: async (): Promise<Category[]> => {
    try {
      const response = await axiosInstance.get<Category[]>('/api/categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  // Get all products
  getProducts: async (): Promise<Product[]> => {
    try {
      const response = await axiosInstance.get<Product[]>('/api/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Get products by category ID
  getProductsByCategory: async (categoryId: number): Promise<Product[]> => {
    try {
      const response = await axiosInstance.get<Product[]>(
        `/api/products/category/${categoryId}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching products for category ${categoryId}:`, error);
      throw error;
    }
  },

  // Get single product by ID
  getProductById: async (productId: number): Promise<Product> => {
    try {
      const response = await axiosInstance.get<Product>(`/api/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product ${productId}:`, error);
      throw error;
    }
  },
};

export default axiosInstance;
