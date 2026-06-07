import axios from "axios";
import { ProductFilters } from "../types";

// In production (Vercel), set VITE_API_URL to your deployed backend URL
// e.g. https://fz-backend.vercel.app/api
const api = axios.create({
  baseURL: "https://fz-backend.vercel.app/api",
  headers: { "Content-Type": "application/json" },
});

// Request interceptor — attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor — handle 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

// ─── Auth ──────────────────────────────────────────────
export const authAPI = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post("/auth/register", data),

  verifyEmail: (data: { email: string; otp: string }) =>
    api.post("/auth/verify-email", data),

  resendOTP: (email: string) => api.post("/auth/resend-otp", { email }),

  login: (data: { email: string; password: string }) =>
    api.post("/auth/login", data),

  getMe: () => api.get("/auth/me"),

  updateProfile: (data: { name?: string; password?: string }) =>
    api.put("/auth/profile", data),
};

// ─── Products ──────────────────────────────────────────
export const productAPI = {
  getProducts: (filters?: ProductFilters) =>
    api.get("/products", { params: filters }),

  getProduct: (id: string) => api.get(`/products/${id}`),

  getFeatured: () => api.get("/products/featured"),

  getNewArrivals: () => api.get("/products/new-arrivals"),

  getCategories: () => api.get("/products/categories"),

  getSearchSuggestions: (q: string) =>
    api.get("/products/search-suggestions", { params: { q } }),
};

// ─── Cart ───────────────────────────────────────────────
export const cartAPI = {
  getCart: () => api.get("/cart"),

  addToCart: (data: {
    productId: string;
    size: string;
    color: string;
    quantity: number;
  }) => api.post("/cart/add", data),

  updateItem: (itemId: string, quantity: number) =>
    api.put(`/cart/${itemId}`, { quantity }),

  removeItem: (itemId: string) => api.delete(`/cart/${itemId}`),

  clearCart: () => api.delete("/cart"),
};

// ─── Orders ─────────────────────────────────────────────
export const orderAPI = {
  createOrder: (data: {
    shippingAddress: {
      fullName: string;
      phone: string;
      addressLine1: string;
      addressLine2?: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
    };
    paymentMethod: "COD";
  }) => api.post("/orders", data),

  getOrders: () => api.get("/orders"),

  getOrder: (id: string) => api.get(`/orders/${id}`),

  cancelOrder: (id: string) => api.put(`/orders/${id}/cancel`),
};

export default api;
