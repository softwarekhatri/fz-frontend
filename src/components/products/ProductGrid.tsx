import React from 'react';
import { Product } from '../../types';
import ProductCard from './ProductCard';
import ProductSkeleton from '../common/ProductSkeleton';
import './ProductGrid.css';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  skeletonCount?: number;
  cols?: 2 | 3 | 4;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  isLoading = false,
  skeletonCount = 8,
  cols = 4,
}) => {
  if (isLoading) {
    return (
      <div className={`product-grid product-grid-${cols}`}>
        <ProductSkeleton count={skeletonCount} />
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="product-grid-empty">
        <div className="empty-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <h3>No products found</h3>
        <p>Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div className={`product-grid product-grid-${cols}`}>
      {products.map((product, i) => (
        <ProductCard key={product._id} product={product} index={i} />
      ))}
    </div>
  );
};

export default ProductGrid;
