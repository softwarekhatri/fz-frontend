import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../../types';
import { formatPrice } from '../../utils/helpers';
import './CartSummary.css';

interface CartSummaryProps {
  cart: Cart;
  showCheckoutBtn?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart, showCheckoutBtn = true }) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const navigate = useNavigate();

  const subtotal = cart.totalAmount || 0;
  const promoDiscount = promoApplied ? Math.round(subtotal * 0.2) : 0;
  const afterPromo = subtotal - promoDiscount;
  const delivery = afterPromo >= 999 ? 0 : 99;
  const tax = Math.round(afterPromo * 0.05);
  const total = afterPromo + delivery + tax;

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'FASHION20') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try FASHION20');
      setPromoApplied(false);
    }
  };

  const removePromo = () => {
    setPromoApplied(false);
    setPromoCode('');
    setPromoError('');
  };

  return (
    <div className="cart-summary">
      <h3 className="summary-title">Order Summary</h3>

      <div className="summary-rows">
        <div className="summary-row">
          <span>Subtotal ({cart.totalItems || cart.items?.length || 0} items)</span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        {promoApplied && (
          <div className="summary-row summary-row-discount">
            <span>Promo (FASHION20)</span>
            <span>−{formatPrice(promoDiscount)}</span>
          </div>
        )}

        <div className="summary-row">
          <span className="delivery-label">
            Delivery
            {delivery === 0 && <span className="free-badge">FREE</span>}
          </span>
          <span className={delivery === 0 ? 'free-text' : ''}>
            {delivery === 0 ? 'Free' : formatPrice(delivery)}
          </span>
        </div>

        {delivery > 0 && (
          <p className="delivery-hint">
            Add {formatPrice(999 - afterPromo)} more for free delivery
          </p>
        )}

        <div className="summary-row">
          <span>GST (5%)</span>
          <span>{formatPrice(tax)}</span>
        </div>
      </div>

      <div className="summary-divider" />

      <div className="summary-total">
        <span>Total</span>
        <span className="total-amount">{formatPrice(total)}</span>
      </div>

      {/* Promo Code */}
      <div className="promo-section">
        {promoApplied ? (
          <div className="promo-applied">
            <span className="promo-success">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              FASHION20 applied! You save {formatPrice(promoDiscount)}
            </span>
            <button className="promo-remove" onClick={removePromo}>Remove</button>
          </div>
        ) : (
          <>
            <div className="promo-input-row">
              <input
                type="text"
                placeholder="Promo code"
                value={promoCode}
                onChange={(e) => {
                  setPromoCode(e.target.value.toUpperCase());
                  setPromoError('');
                }}
                className={`promo-input ${promoError ? 'promo-input-error' : ''}`}
                onKeyDown={(e) => e.key === 'Enter' && applyPromo()}
              />
              <button className="promo-apply-btn" onClick={applyPromo}>Apply</button>
            </div>
            {promoError && <p className="promo-error">{promoError}</p>}
            <p className="promo-hint">Try code: <strong>FASHION20</strong></p>
          </>
        )}
      </div>

      {/* Savings Banner */}
      {promoApplied && (
        <div className="savings-banner">
          <span>🎉 You're saving <strong>{formatPrice(promoDiscount)}</strong> on this order!</span>
        </div>
      )}

      {showCheckoutBtn && (
        <button className="checkout-btn" onClick={() => navigate('/checkout')}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Proceed to Checkout
        </button>
      )}

      {/* Trust Badges */}
      <div className="trust-badges">
        <div className="trust-badge">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
          </svg>
          Secure Checkout
        </div>
        <div className="trust-badge">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.99 15 19.79 19.79 0 011.96 6.43 2 2 0 013.94 4.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 12a16 16 0 006.29 6.29l1.09-1.09a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 19.07z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          24/7 Support
        </div>
        <div className="trust-badge">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Easy Returns
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
