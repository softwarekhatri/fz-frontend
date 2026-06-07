import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'));
const OrdersPage = React.lazy(() => import('./pages/OrdersPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SignupPage = React.lazy(() => import('./pages/SignupPage'));
const VerifyEmailPage = React.lazy(() => import('./pages/VerifyEmailPage'));

// Auth-gated redirect (for login/signup when already logged in)
const PublicOnlyRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <LoadingSpinner overlay />;
  if (isAuthenticated) return <Navigate to="/" replace />;
  return <>{children}</>;
};

// Layout with Header + Footer
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

// Auth layout (no header/footer)
const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);

const AppRoutes: React.FC = () => (
  <React.Suspense fallback={<LoadingSpinner overlay text="Loading…" />}>
    <Routes>
      {/* Public routes with header/footer */}
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/products"
        element={
          <MainLayout>
            <ProductsPage />
          </MainLayout>
        }
      />
      <Route
        path="/products/:id"
        element={
          <MainLayout>
            <ProductDetailPage />
          </MainLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <MainLayout>
            <CartPage />
          </MainLayout>
        }
      />

      {/* Protected routes */}
      <Route
        path="/checkout"
        element={
          <MainLayout>
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          </MainLayout>
        }
      />
      <Route
        path="/orders"
        element={
          <MainLayout>
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          </MainLayout>
        }
      />

      {/* Auth routes (no header/footer, redirect if logged in) */}
      <Route
        path="/login"
        element={
          <AuthLayout>
            <PublicOnlyRoute>
              <LoginPage />
            </PublicOnlyRoute>
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout>
            <PublicOnlyRoute>
              <SignupPage />
            </PublicOnlyRoute>
          </AuthLayout>
        }
      />
      <Route
        path="/verify-email"
        element={
          <AuthLayout>
            <VerifyEmailPage />
          </AuthLayout>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </React.Suspense>
);

const App: React.FC = () => (
  <AuthProvider>
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  </AuthProvider>
);

export default App;
