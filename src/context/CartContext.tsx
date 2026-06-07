import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Cart } from '../types';
import { cartAPI } from '../services/api';
import { useAuth } from './AuthContext';

interface CartContextType {
  cart: Cart | null;
  cartCount: number;
  isLoading: boolean;
  fetchCart: () => Promise<void>;
  addToCart: (productId: string, size: string, color: string, quantity: number) => Promise<void>;
  updateItem: (itemId: string, quantity: number) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  const fetchCart = useCallback(async () => {
    if (!localStorage.getItem('token')) return;
    setIsLoading(true);
    try {
      const res = await cartAPI.getCart();
      setCart(res.data.cart || res.data);
    } catch {
      setCart(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchCart();
    } else {
      setCart(null);
    }
  }, [isAuthenticated, fetchCart]);

  const addToCart = useCallback(
    async (productId: string, size: string, color: string, quantity: number) => {
      const res = await cartAPI.addToCart({ productId, size, color, quantity });
      setCart(res.data.cart || res.data);
    },
    []
  );

  const updateItem = useCallback(async (itemId: string, quantity: number) => {
    const res = await cartAPI.updateItem(itemId, quantity);
    setCart(res.data.cart || res.data);
  }, []);

  const removeItem = useCallback(async (itemId: string) => {
    const res = await cartAPI.removeItem(itemId);
    setCart(res.data.cart || res.data);
  }, []);

  const clearCart = useCallback(async () => {
    await cartAPI.clearCart();
    setCart(null);
  }, []);

  const cartCount = cart?.totalItems ?? cart?.items?.length ?? 0;

  return (
    <CartContext.Provider
      value={{ cart, cartCount, isLoading, fetchCart, addToCart, updateItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
