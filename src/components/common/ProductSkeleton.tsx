import React from 'react';
import './ProductSkeleton.css';

interface ProductSkeletonProps {
  count?: number;
}

const ProductSkeleton: React.FC<ProductSkeletonProps> = ({ count = 8 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="product-skeleton" style={{ animationDelay: `${i * 0.05}s` }}>
          <div className="skeleton skeleton-image" />
          <div className="skeleton-body">
            <div className="skeleton skeleton-brand" />
            <div className="skeleton skeleton-title" />
            <div className="skeleton skeleton-title skeleton-title-short" />
            <div className="skeleton-price-row">
              <div className="skeleton skeleton-price" />
              <div className="skeleton skeleton-price skeleton-price-orig" />
            </div>
            <div className="skeleton-colors">
              {[1, 2, 3].map((c) => (
                <div key={c} className="skeleton skeleton-color-dot" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductSkeleton;
