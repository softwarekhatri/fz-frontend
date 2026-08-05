import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { formatPrice, getDiscountPercent } from '../../utils/helpers';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const PLACEHOLDER = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80';

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const [wished, setWished] = useState(false);
  const [adding, setAdding] = useState(false);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  const discount = product.discount || getDiscountPercent(product.originalPrice, product.price);
  const imageUrl = product.images?.[0] || PLACEHOLDER;

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWished(!wished);
    toast.success(wished ? 'Removed from wishlist' : 'Added to wishlist ❤️');
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      toast.error('Please login to add items to cart');
      return;
    }
    if (!product.sizes?.length || !product.colors?.length) {
      toast.error('Please select size and color on product page');
      return;
    }
    try {
      setAdding(true);
      await addToCart(product._id, product.sizes[0], product.colors[0], 1);
      toast.success('Added to cart!');
    } catch {
      toast.error('Failed to add to cart');
    } finally {
      setAdding(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`star ${i < Math.round(rating) ? 'star-filled' : 'star-empty'}`}>★</span>
    ));
  };

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
    >
      <Link to={`/products/${product._id}`} className="product-card-link">
        {/* Image Container */}
        <div className="product-image-wrap">
          <img
            src={imageUrl}
            alt={product.name}
            className="product-image"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER; }}
          />

          {/* Hover second image */}
          {product.images?.[1] && (
            <img
              src={product.images[1]}
              alt={product.name}
              className="product-image product-image-hover"
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER; }}
            />
          )}

          {/* Badges */}
          <div className="product-badges">
            {product.isNew && <span className="product-badge badge-new">NEW</span>}
            {discount > 0 && <span className="product-badge badge-sale">{discount}% OFF</span>}
          </div>

          {/* Wishlist */}
          <button
            className={`wishlist-btn ${wished ? 'wished' : ''}`}
            onClick={handleWishlist}
            aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={wished ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>

          {/* Quick Add to Cart */}
          <div className="product-actions">
            <button
              className={`quick-add-btn ${adding ? 'loading' : ''}`}
              onClick={handleAddToCart}
              disabled={adding || product.stock === 0}
            >
              {product.stock === 0 ? 'Out of Stock' : adding ? 'Adding…' : '+ Quick Add'}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="product-info">
          <p className="product-brand">{product.brand}</p>
          <h3 className="product-name">{product.name}</h3>

          {/* Rating */}
          {product.rating > 0 && (
            <div className="product-rating">
              <div className="stars">{renderStars(product.rating)}</div>
              <span className="rating-count">({product.reviewCount})</span>
            </div>
          )}

          {/* Price */}
          <div className="product-pricing">
            <span className="product-price">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="product-original-price">{formatPrice(product.originalPrice)}</span>
            )}
            {discount > 0 && (
              <span className="discount-badge">{discount}% off</span>
            )}
          </div>
          <p className="product-tax-note">Inclusive of All Taxes</p>

          {/* Color Swatches */}
          {product.colors?.length > 0 && (
            <div className="color-swatches">
              {product.colors.slice(0, 4).map((color) => (
                <span
                  key={color}
                  className="color-swatch"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="color-more">+{product.colors.length - 4}</span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
