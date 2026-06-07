import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { productAPI } from '../services/api';
import { Product, Pagination, ProductFilters } from '../types';
import ProductGrid from '../components/products/ProductGrid';
import FilterPanel from '../components/products/FilterPanel';
import './ProductsPage.css';

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 12, total: 0, pages: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const getFiltersFromParams = useCallback((): ProductFilters => ({
    page: Number(searchParams.get('page')) || 1,
    limit: 12,
    category: searchParams.get('category') || undefined,
    subcategory: searchParams.get('subcategory') || undefined,
    minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    sizes: searchParams.get('sizes') || undefined,
    colors: searchParams.get('colors') || undefined,
    sort: searchParams.get('sort') || '-createdAt',
    search: searchParams.get('search') || undefined,
    featured: searchParams.get('featured') === 'true' ? true : undefined,
    isNew: searchParams.get('isNew') === 'true' ? true : undefined,
  }), [searchParams]);

  const filters = getFiltersFromParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await productAPI.getProducts(filters);
        const data = res.data;
        setProducts(data.products || data || []);
        if (data.pagination) setPagination(data.pagination);
      } catch {
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchParams]);

  const updateFilters = (newFilters: Partial<ProductFilters>) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value === undefined || value === null || value === '') {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({ sort: '-createdAt' });
  };

  const activeChips = [
    filters.category && { key: 'category', label: `Category: ${filters.category}` },
    filters.search && { key: 'search', label: `Search: "${filters.search}"` },
    filters.minPrice && { key: 'minPrice', label: `Min: ₹${filters.minPrice}` },
    filters.maxPrice && { key: 'maxPrice', label: `Max: ₹${filters.maxPrice}` },
    filters.sizes && { key: 'sizes', label: `Sizes: ${filters.sizes}` },
    filters.colors && { key: 'colors', label: `Colors: ${filters.colors}` },
    filters.isNew && { key: 'isNew', label: 'New Arrivals' },
    filters.featured && { key: 'featured', label: 'Featured' },
  ].filter(Boolean) as { key: string; label: string }[];

  const removeChip = (key: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    setSearchParams(params);
  };

  const pageTitle = filters.search
    ? `Results for "${filters.search}"`
    : filters.category
    ? `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}'s Fashion`
    : filters.isNew
    ? 'New Arrivals'
    : filters.featured
    ? 'Featured Collection'
    : 'All Products';

  return (
    <div className="products-page page-wrapper">
      <div className="container">
        {/* Page Header */}
        <div className="products-page-header">
          <div>
            <h1 className="products-page-title">{pageTitle}</h1>
            {!isLoading && (
              <p className="products-count">
                {pagination.total > 0
                  ? `Showing ${Math.min((filters.page! - 1) * 12 + 1, pagination.total)}–${Math.min(filters.page! * 12, pagination.total)} of ${pagination.total} products`
                  : 'No products found'}
              </p>
            )}
          </div>

          {/* Mobile Filter Btn */}
          <button
            className="mobile-filter-btn"
            onClick={() => setFilterDrawerOpen(true)}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Filters
            {activeChips.length > 0 && (
              <span className="mobile-filter-count">{activeChips.length}</span>
            )}
          </button>
        </div>

        {/* Active Filter Chips */}
        <AnimatePresence>
          {activeChips.length > 0 && (
            <motion.div
              className="active-chips"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {activeChips.map((chip) => (
                <span key={chip.key} className="filter-chip">
                  {chip.label}
                  <button onClick={() => removeChip(chip.key)} className="chip-remove">✕</button>
                </span>
              ))}
              <button className="chip-clear-all" onClick={clearFilters}>Clear All</button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Layout */}
        <div className="products-layout">
          {/* Desktop Filter Sidebar */}
          <aside className="filter-sidebar desktop-only">
            <FilterPanel
              filters={filters}
              onFiltersChange={updateFilters}
              onClear={clearFilters}
            />
          </aside>

          {/* Mobile Filter Drawer */}
          <FilterPanel
            filters={filters}
            onFiltersChange={(f) => { updateFilters(f); setFilterDrawerOpen(false); }}
            onClear={() => { clearFilters(); setFilterDrawerOpen(false); }}
            isOpen={filterDrawerOpen}
            onClose={() => setFilterDrawerOpen(false)}
          />

          {/* Products Area */}
          <main className="products-main">
            <ProductGrid
              products={products}
              isLoading={isLoading}
              skeletonCount={12}
              cols={3}
            />

            {/* Pagination */}
            {!isLoading && pagination.pages > 1 && (
              <div className="pagination">
                <button
                  className="page-btn"
                  disabled={filters.page === 1}
                  onClick={() => updateFilters({ page: (filters.page || 1) - 1 })}
                >
                  ‹ Prev
                </button>

                {Array.from({ length: Math.min(pagination.pages, 7) }).map((_, i) => {
                  const page = i + 1;
                  return (
                    <button
                      key={page}
                      className={`page-btn ${filters.page === page ? 'page-active' : ''}`}
                      onClick={() => updateFilters({ page })}
                    >
                      {page}
                    </button>
                  );
                })}

                {pagination.pages > 7 && <span className="page-ellipsis">…</span>}

                <button
                  className="page-btn"
                  disabled={filters.page === pagination.pages}
                  onClick={() => updateFilters({ page: (filters.page || 1) + 1 })}
                >
                  Next ›
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
