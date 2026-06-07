import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import CartItemComponent from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import LoadingSpinner from '../components/common/LoadingSpinner';
import './CartPage.css';

const EmptyCart: React.FC = () => (
  <motion.div
    className="empty-cart"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="empty-cart-illustration">
      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" strokeWidth="0.8" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    </div>
    <h2>Your cart is empty</h2>
    <p>Looks like you haven't added anything yet. Explore our amazing collection!</p>
    <Link to="/products" className="empty-cart-cta">
      Start Shopping
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  </motion.div>
);

const CartPage: React.FC = () => {
  const { cart, isLoading } = useCart();

  if (isLoading) return <LoadingSpinner overlay text="Loading cart…" />;

  const hasItems = cart && cart.items && cart.items.length > 0;

  return (
    <div className="cart-page page-wrapper">
      <div className="container">
        <div className="cart-page-header">
          <h1 className="cart-page-title">
            Shopping Cart
            {hasItems && (
              <span className="cart-page-count">({cart!.totalItems || cart!.items.length} items)</span>
            )}
          </h1>
          {hasItems && (
            <Link to="/products" className="continue-shopping-link">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Continue Shopping
            </Link>
          )}
        </div>

        {!hasItems ? (
          <EmptyCart />
        ) : (
          <div className="cart-layout">
            {/* Items */}
            <div className="cart-items-wrap">
              <AnimatePresence mode="popLayout">
                {cart!.items.map((item) => (
                  <CartItemComponent key={item._id} item={item} />
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="cart-summary-wrap">
              <CartSummary cart={cart!} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
