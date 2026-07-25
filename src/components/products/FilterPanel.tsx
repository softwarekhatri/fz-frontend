import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductFilters } from '../../types';
import './FilterPanel.css';

interface FilterPanelProps {
  filters: ProductFilters;
  onFiltersChange: (filters: Partial<ProductFilters>) => void;
  onClear: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const CATEGORIES = [
  { label: 'Women', value: 'women', icon: '👗' },
  { label: 'Men', value: 'men', icon: '👔' },
  { label: 'Backpacks', value: 'accessories', icon: '🎒' },
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36', '38', 'UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8', 'Free Size', 'One Size'];

const COLORS = [
  { label: 'Black', value: 'black', hex: '#212121' },
  { label: 'White', value: 'white', hex: '#F5F5F5' },
  { label: 'Red', value: 'red', hex: '#F44336' },
  { label: 'Blue', value: 'blue', hex: '#2196F3' },
  { label: 'Green', value: 'green', hex: '#4CAF50' },
  { label: 'Pink', value: 'pink', hex: '#FF6B9D' },
  { label: 'Yellow', value: 'yellow', hex: '#FFEB3B' },
  { label: 'Purple', value: 'purple', hex: '#9C27B0' },
  { label: 'Orange', value: 'orange', hex: '#FF9800' },
  { label: 'Navy', value: 'navy', hex: '#1A237E' },
];

const SORT_OPTIONS = [
  { label: 'Newest First', value: '-createdAt' },
  { label: 'Price: Low to High', value: 'price' },
  { label: 'Price: High to Low', value: '-price' },
  { label: 'Most Popular', value: '-rating' },
  { label: 'Most Reviewed', value: '-reviewCount' },
  { label: 'Biggest Discount', value: '-discount' },
];

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFiltersChange,
  onClear,
  isOpen = true,
  onClose,
}) => {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    size: true,
    color: true,
    sort: true,
  });

  const [minPrice, setMinPrice] = useState(filters.minPrice?.toString() || '');
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice?.toString() || '');

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const selectedSizes = filters.sizes ? filters.sizes.split(',') : [];
  const selectedColors = filters.colors ? filters.colors.split(',') : [];

  const toggleSize = (size: string) => {
    const current = new Set(selectedSizes);
    if (current.has(size)) current.delete(size);
    else current.add(size);
    onFiltersChange({ sizes: current.size ? [...current].join(',') : undefined, page: 1 });
  };

  const toggleColor = (color: string) => {
    const current = new Set(selectedColors);
    if (current.has(color)) current.delete(color);
    else current.add(color);
    onFiltersChange({ colors: current.size ? [...current].join(',') : undefined, page: 1 });
  };

  const applyPrice = () => {
    onFiltersChange({
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      page: 1,
    });
  };

  const activeFilterCount = [
    filters.category,
    filters.minPrice,
    filters.maxPrice,
    filters.sizes,
    filters.colors,
  ].filter(Boolean).length;

  const content = (
    <div className="filter-panel">
      {/* Header */}
      <div className="filter-header">
        <div className="filter-header-left">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3>Filters</h3>
          {activeFilterCount > 0 && (
            <span className="filter-count-badge">{activeFilterCount}</span>
          )}
        </div>
        <div className="filter-header-right">
          {activeFilterCount > 0 && (
            <button className="filter-clear-btn" onClick={onClear}>
              Clear All
            </button>
          )}
          {onClose && (
            <button className="filter-close-btn" onClick={onClose}>✕</button>
          )}
        </div>
      </div>

      {/* Sort */}
      <div className="filter-section">
        <button className="filter-section-header" onClick={() => toggleSection('sort')}>
          <span>Sort By</span>
          <span className={`filter-chevron ${openSections.sort ? 'open' : ''}`}>▾</span>
        </button>
        <AnimatePresence>
          {openSections.sort && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="filter-section-body"
            >
              <div className="sort-options">
                {SORT_OPTIONS.map((opt) => (
                  <label key={opt.value} className={`sort-option ${filters.sort === opt.value ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="sort"
                      value={opt.value}
                      checked={filters.sort === opt.value}
                      onChange={() => onFiltersChange({ sort: opt.value, page: 1 })}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Category */}
      <div className="filter-section">
        <button className="filter-section-header" onClick={() => toggleSection('category')}>
          <span>Category</span>
          <span className={`filter-chevron ${openSections.category ? 'open' : ''}`}>▾</span>
        </button>
        <AnimatePresence>
          {openSections.category && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="filter-section-body"
            >
              <div className="category-options">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    className={`category-option ${filters.category === cat.value ? 'selected' : ''}`}
                    onClick={() => onFiltersChange({
                      category: filters.category === cat.value ? undefined : cat.value,
                      page: 1,
                    })}
                  >
                    <span className="cat-icon">{cat.icon}</span>
                    {cat.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Price Range */}
      <div className="filter-section">
        <button className="filter-section-header" onClick={() => toggleSection('price')}>
          <span>Price Range</span>
          <span className={`filter-chevron ${openSections.price ? 'open' : ''}`}>▾</span>
        </button>
        <AnimatePresence>
          {openSections.price && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="filter-section-body"
            >
              <div className="price-inputs">
                <div className="price-input-wrap">
                  <span className="price-symbol">₹</span>
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="price-input"
                    min="0"
                  />
                </div>
                <span className="price-separator">–</span>
                <div className="price-input-wrap">
                  <span className="price-symbol">₹</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="price-input"
                    min="0"
                  />
                </div>
                <button className="price-apply-btn" onClick={applyPrice}>Go</button>
              </div>
              <div className="price-quick-ranges">
                {[
                  { label: 'Under ₹500', min: 0, max: 500 },
                  { label: '₹500–₹1500', min: 500, max: 1500 },
                  { label: '₹1500–₹3000', min: 1500, max: 3000 },
                  { label: 'Above ₹3000', min: 3000, max: undefined },
                ].map((r) => (
                  <button
                    key={r.label}
                    className={`quick-range-btn ${
                      filters.minPrice === r.min && filters.maxPrice === r.max ? 'selected' : ''
                    }`}
                    onClick={() => {
                      setMinPrice(r.min.toString());
                      setMaxPrice(r.max?.toString() || '');
                      onFiltersChange({ minPrice: r.min, maxPrice: r.max, page: 1 });
                    }}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sizes */}
      <div className="filter-section">
        <button className="filter-section-header" onClick={() => toggleSection('size')}>
          <span>Size</span>
          {selectedSizes.length > 0 && (
            <span className="filter-count-badge">{selectedSizes.length}</span>
          )}
          <span className={`filter-chevron ${openSections.size ? 'open' : ''}`}>▾</span>
        </button>
        <AnimatePresence>
          {openSections.size && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="filter-section-body"
            >
              <div className="size-grid">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSizes.includes(size) ? 'selected' : ''}`}
                    onClick={() => toggleSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Colors */}
      <div className="filter-section">
        <button className="filter-section-header" onClick={() => toggleSection('color')}>
          <span>Color</span>
          {selectedColors.length > 0 && (
            <span className="filter-count-badge">{selectedColors.length}</span>
          )}
          <span className={`filter-chevron ${openSections.color ? 'open' : ''}`}>▾</span>
        </button>
        <AnimatePresence>
          {openSections.color && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="filter-section-body"
            >
              <div className="color-filter-grid">
                {COLORS.map((color) => (
                  <button
                    key={color.value}
                    className={`color-filter-btn ${selectedColors.includes(color.value) ? 'selected' : ''}`}
                    onClick={() => toggleColor(color.value)}
                    title={color.label}
                  >
                    <span
                      className="color-filter-swatch"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="color-filter-label">{color.label}</span>
                    {selectedColors.includes(color.value) && (
                      <span className="color-check">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  // Mobile: render as bottom sheet overlay
  if (onClose) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="filter-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            <motion.div
              className="filter-drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
            >
              {content}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  return content;
};

export default FilterPanel;
