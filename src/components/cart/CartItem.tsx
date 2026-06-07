import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/helpers';
import './CartItem.css';

interface CartItemProps {
  item: CartItemType;
}

const PLACEHOLDER = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80';

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  const { updateItem, removeItem } = useCart();
  const [updating, setUpdating] = useState(false);
  const [removing, setRemoving] = useState(false);

  const handleQuantity = async (newQty: number) => {
    if (newQty < 1) return;
    setUpdating(true);
    try {
      await updateItem(item._id, newQty);
    } finally {
      setUpdating(false);
    }
  };

  const handleRemove = async () => {
    setRemoving(true);
    try {
      await removeItem(item._id);
    } finally {
      setRemoving(false);
    }
  };

  const imageUrl = item.product?.images?.[0] || PLACEHOLDER;
  const total = (item.price || item.product?.price || 0) * item.quantity;

  return (
    <motion.div
      className={`cart-item ${removing ? 'removing' : ''}`}
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="cart-item-image">
        <img
          src={imageUrl}
          alt={item.product?.name}
          onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER; }}
        />
      </div>

      {/* Details */}
      <div className="cart-item-details">
        <div className="cart-item-header">
          <div>
            <p className="cart-item-brand">{item.product?.brand}</p>
            <h4 className="cart-item-name">{item.product?.name}</h4>
          </div>
          <button
            className="cart-item-remove"
            onClick={handleRemove}
            disabled={removing}
            aria-label="Remove item"
          >
            {removing ? (
              <span className="mini-spinner" />
            ) : (
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <polyline points="3 6 5 6 21 6" strokeLinecap="round" />
                <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 11v6M14 11v6" strokeLinecap="round" />
                <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Attributes */}
        <div className="cart-item-attrs">
          <span className="cart-attr">
            <span className="attr-label">Size:</span> {item.size}
          </span>
          <span className="cart-attr-divider">|</span>
          <span className="cart-attr">
            <span className="attr-label">Color:</span>
            <span
              className="color-dot"
              style={{ backgroundColor: item.color?.toLowerCase() || '#ccc' }}
            />
            {item.color}
          </span>
        </div>

        {/* Price + Qty Row */}
        <div className="cart-item-bottom">
          <div className="qty-control">
            <button
              className="qty-btn"
              onClick={() => handleQuantity(item.quantity - 1)}
              disabled={item.quantity <= 1 || updating}
            >
              −
            </button>
            <span className={`qty-value ${updating ? 'updating' : ''}`}>{item.quantity}</span>
            <button
              className="qty-btn"
              onClick={() => handleQuantity(item.quantity + 1)}
              disabled={updating}
            >
              +
            </button>
          </div>

          <div className="cart-item-pricing">
            <span className="cart-item-price">{formatPrice(total)}</span>
            {item.quantity > 1 && (
              <span className="cart-item-unit-price">
                {formatPrice(item.price || item.product?.price || 0)} each
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItemComponent;
