export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  images: string[];
  sizes: string[];
  colors: string[];
  price: number;
  originalPrice: number;
  discount: number;
  stock: number;
  tags: string[];
  rating: number;
  reviewCount: number;
  featured: boolean;
  isNew: boolean;
  brand: string;
  material: string;
  careInstructions: string;
}

export interface CartItem {
  _id: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

export interface Cart {
  _id: string;
  items: CartItem[];
  totalAmount: number;
  totalItems: number;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface OrderItem {
  product: string;
  name: string;
  image: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

export interface Order {
  _id: string;
  orderNumber: string;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: 'COD';
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  createdAt: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface ProductFilters {
  page?: number;
  limit?: number;
  category?: string;
  subcategory?: string;
  minPrice?: number;
  maxPrice?: number;
  sizes?: string;
  colors?: string;
  sort?: string;
  search?: string;
  featured?: boolean;
  isNew?: boolean;
}
