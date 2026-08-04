import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { productAPI } from '../services/api';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { formatPrice, getDiscountPercent } from '../utils/helpers';
import ImageZoom from '../components/products/ImageZoom';
import ProductGrid from '../components/products/ProductGrid';
import LoadingSpinner from '../components/common/LoadingSpinner';
import './ProductDetailPage.css';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={() => setOpen(!open)}>
        {title}
        <span className={`accordion-chevron ${open ? 'open' : ''}`}>▾</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="accordion-body"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [sizeError, setSizeError] = useState('');
  const [colorError, setColorError] = useState('');
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<'idle' | 'checking' | 'available' | 'invalid'>('idle');
  const [deliveryDate, setDeliveryDate] = useState('');

  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    setSelectedSize('');
    setSelectedColor('');
    setQuantity(1);

    productAPI.getProduct(id)
      .then((res) => {
        const p: Product = res.data.product || res.data;
        setProduct(p);
        if (p.sizes?.length) setSelectedSize(p.sizes[0]);
        if (p.colors?.length) setSelectedColor(p.colors[0]);
        // Fetch related
        return productAPI.getProducts({ category: p.category, limit: 4 });
      })
      .then((res) => {
        setRelated((res.data.products || res.data || []).filter((r: Product) => r._id !== id).slice(0, 4));
      })
      .catch(() => toast.error('Product not found'))
      .finally(() => setIsLoading(false));
  }, [id]);

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to add to cart');
      navigate('/login');
      return;
    }
    let valid = true;
    if (!selectedSize) { setSizeError('Please select a size'); valid = false; }
    else setSizeError('');
    if (!selectedColor) { setColorError('Please select a color'); valid = false; }
    else setColorError('');
    if (!valid) return;

    try {
      setAdding(true);
      await addToCart(product!._id, selectedSize, selectedColor, quantity);
      toast.success('Added to cart! 🛍️');
    } catch {
      toast.error('Failed to add to cart');
    } finally {
      setAdding(false);
    }
  };

  const checkPincode = () => {
    const trimmed = pincode.trim();
    if (!/^\d{6}$/.test(trimmed)) {
      setPincodeStatus('invalid');
      return;
    }
    setPincodeStatus('checking');
    setTimeout(() => {
      // Calculate delivery date: 5–7 business days from today
      const date = new Date();
      let added = 0;
      while (added < 6) {
        date.setDate(date.getDate() + 1);
        const day = date.getDay();
        if (day !== 0 && day !== 6) added++;
      }
      const formatted = date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
      setDeliveryDate(formatted);
      setPincodeStatus('available');
    }, 600);
  };

  if (isLoading) return <LoadingSpinner overlay text="Loading product…" />;
  if (!product) return (
    <div className="page-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    </div>
  );

  const discount = product.discount || getDiscountPercent(product.originalPrice, product.price);

  return (
    <div className="product-detail-page page-wrapper">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/products">Products</Link>
          {product.category && (
            <>
              <span>›</span>
              <Link to={`/products?category=${product.category}`}>{product.category}</Link>
            </>
          )}
          <span>›</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        {/* Main Detail */}
        <div className="product-detail-grid">
          {/* Left: Image Zoom */}
          <div className="product-detail-images">
            <ImageZoom images={product.images} alt={product.name} />
          </div>

          {/* Right: Info */}
          <div className="product-detail-info">
            {/* Brand & Name */}
            <div className="pdp-brand">{product.brand}</div>
            <h1 className="pdp-name">{product.name}</h1>

            {/* Rating */}
            {product.rating > 0 && (
              <div className="pdp-rating">
                <div className="pdp-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`star ${i < Math.round(product.rating) ? 'star-filled' : 'star-empty'}`}>★</span>
                  ))}
                </div>
                <span className="pdp-rating-text">{product.rating.toFixed(1)} ({product.reviewCount} reviews)</span>
              </div>
            )}

            {/* Pricing */}
            <div className="pdp-pricing">
              <span className="pdp-price">{formatPrice(product.price)}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="pdp-original">{formatPrice(product.originalPrice)}</span>
                  <span className="pdp-discount-badge">{discount}% OFF</span>
                </>
              )}
            </div>
            {product.originalPrice > product.price && (
              <p className="pdp-savings">You save {formatPrice(product.originalPrice - product.price)}</p>
            )}

            {/* Color Selector */}
            {product.colors?.length > 0 && (
              <div className="pdp-section">
                <div className="pdp-section-label">
                  Color: <strong>{selectedColor}</strong>
                </div>
                <div className="color-selector">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`color-sel-btn ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => { setSelectedColor(color); setColorError(''); }}
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
                {colorError && <p className="pdp-field-error">{colorError}</p>}
              </div>
            )}

            {/* Size Selector */}
            {product.sizes?.length > 0 && (
              <div className="pdp-section">
                <div className="pdp-section-label">
                  <span>Size: <strong>{selectedSize}</strong></span>
                  <button className="size-guide-trigger" onClick={() => setSizeGuideOpen(true)}>
                    Size Guide
                  </button>
                </div>
                <div className="size-selector">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-sel-btn ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => { setSelectedSize(size); setSizeError(''); }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {sizeError && <p className="pdp-field-error">{sizeError}</p>}
              </div>
            )}

            {/* Quantity */}
            <div className="pdp-section">
              <div className="pdp-section-label">Quantity</div>
              <div className="pdp-qty">
                <button className="pdp-qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={quantity <= 1}>−</button>
                <span className="pdp-qty-val">{quantity}</span>
                <button className="pdp-qty-btn" onClick={() => setQuantity(Math.min(product.stock, quantity + 1))} disabled={quantity >= product.stock}>+</button>
                <span className="pdp-stock-info">
                  {product.stock > 0 ? (
                    product.stock < 10 ? (
                      <span className="low-stock">Only {product.stock} left!</span>
                    ) : (
                      <span className="in-stock">In Stock</span>
                    )
                  ) : (
                    <span className="out-of-stock">Out of Stock</span>
                  )}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pdp-ctas">
              <motion.button
                className={`add-to-cart-btn ${adding ? 'loading' : ''}`}
                onClick={handleAddToCart}
                disabled={adding || product.stock === 0}
                whileTap={{ scale: 0.97 }}
              >
                {adding ? (
                  <>
                    <span className="btn-spinner" />
                    Adding…
                  </>
                ) : product.stock === 0 ? (
                  'Out of Stock'
                ) : (
                  <>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" />
                      <path d="M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Add to Cart
                  </>
                )}
              </motion.button>
            </div>

            {/* Pincode Checker */}
            <div className="pdp-pincode-section">
              <div className="pdp-section-label">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Check Delivery
              </div>
              <div className="pincode-input-row">
                <input
                  type="text"
                  className="pincode-input"
                  placeholder="Enter 6-digit pincode"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setPincode(val);
                    if (pincodeStatus !== 'idle') setPincodeStatus('idle');
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && checkPincode()}
                />
                <button
                  className="pincode-check-btn"
                  onClick={checkPincode}
                  disabled={pincodeStatus === 'checking' || pincode.length === 0}
                >
                  {pincodeStatus === 'checking' ? 'Checking…' : 'Check'}
                </button>
              </div>
              <AnimatePresence mode="wait">
                {pincodeStatus === 'available' && (
                  <motion.div
                    key="available"
                    className="pincode-result pincode-available"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Delivery available to <strong>{pincode}</strong> — arrives by <strong>{deliveryDate}</strong>
                  </motion.div>
                )}
                {pincodeStatus === 'invalid' && (
                  <motion.div
                    key="invalid"
                    className="pincode-result pincode-invalid"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Please enter a valid 6-digit pincode
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Badges */}
            <div className="pdp-badges">
              <div className="pdp-badge">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Free delivery above ₹999
              </div>
              <div className="pdp-badge">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <polyline points="1 4 1 10 7 10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.51 15a9 9 0 1 0 .49-4" strokeLinecap="round" />
                </svg>
                30-day easy returns
              </div>
              <div className="pdp-badge">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Quality Guaranteed
              </div>
            </div>

            {/* Accordions */}
            <div className="pdp-accordions">
              <AccordionItem title="Product Description" defaultOpen>
                <p className="accordion-text">{product.description}</p>
              </AccordionItem>

              <AccordionItem title="Material & Care">
                <div className="accordion-text">
                  <p><strong>Material:</strong> {product.material}</p>
                  <br />
                  <p><strong>Care Instructions:</strong></p>
                  <p>{product.careInstructions}</p>
                </div>
              </AccordionItem>

              <AccordionItem title="Delivery & Returns">
                <div className="accordion-text">
                  <p>• <strong>Standard Delivery:</strong> 5–7 business days</p>
                  <p>• <strong>Express Delivery:</strong> 2–3 business days</p>
                  <p>• <strong>Free Returns:</strong> Within 30 days of delivery</p>
                  <p>• <strong>COD Available:</strong> On orders above ₹299</p>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="related-section">
            <h2 className="related-title">You May Also Like</h2>
            <ProductGrid products={related} cols={4} />
          </section>
        )}
      </div>

      {/* Size Guide Modal */}
      <AnimatePresence>
        {sizeGuideOpen && (
          <>
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSizeGuideOpen(false)}
            />
            <motion.div
              className="size-guide-modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="modal-header">
                <h3>Size Guide</h3>
                <button onClick={() => setSizeGuideOpen(false)} className="modal-close">✕</button>
              </div>
              <div className="size-guide-table-wrap">
                <table className="size-guide-table">
                  <thead>
                    <tr>
                      <th>Size</th><th>Chest (in)</th><th>Waist (in)</th><th>Hip (in)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['XS', '32–33', '24–25', '34–35'],
                      ['S', '34–35', '26–27', '36–37'],
                      ['M', '36–37', '28–29', '38–39'],
                      ['L', '38–40', '30–32', '40–42'],
                      ['XL', '41–43', '33–35', '43–45'],
                      ['XXL', '44–46', '36–38', '46–48'],
                    ].map(([size, ...vals]) => (
                      <tr key={size} className={selectedSize === size ? 'highlighted-row' : ''}>
                        <td><strong>{size}</strong></td>
                        {vals.map((v, i) => <td key={i}>{v}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetailPage;
