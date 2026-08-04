import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { productAPI } from "../services/api";
import { Product } from "../types";
import ProductGrid from "../components/products/ProductGrid";
import "./HomePage.css";

const HERO_SLIDES = [
  {
    id: 1,
    bg: "/products/heroSlides/NewArrivals.png",
    tag: "New Season Arrivals",
    heading: "Apni Pehchaan,\nApna Andaaz",
    sub: "Discover curated ethnic and contemporary fashion that speaks your personality — bold, beautiful, and uniquely Indian.",
    cta1: "Shop Women",
    cta1Link: "/products?category=women",
    cta2: "Shop Men",
    cta2Link: "/products?category=men",
    link: "/products?isNew=true",
  },
  {
    id: 2,
    bg: "/products/heroSlides/SalwarSuit.png",
    tag: "Limited Edition",
    heading: "Summer Collection\n2026",
    sub: "Vibrant colors, quality fabrics, and timeless silhouettes for the season ahead.",
    cta1: "Explore Now",
    cta1Link: "/products?isNew=true",
    cta2: "View Collection",
    cta2Link: "/products",
    link: "/products?category=women&search=suit",
  },
  {
    id: 3,
    bg: "/products/heroSlides/Saree.png",
    tag: "Exclusive Deals",
    heading: "Up to 50% Off\nPremium Fashion",
    sub: "Your favorite premium fashion at prices that make you smile. Limited time offers.",
    cta1: "Grab Deals",
    cta1Link: "/products?sort=-discount",
    cta2: "All Products",
    cta2Link: "/products",
    link: "/products?category=women&search=saree",
  },
];

const CATEGORIES = [
  {
    name: "New Arrivals",
    image: "/products/categories/newArrivals.png",
    link: "/products?isNew=true",
    count: "1500+ styles",
  },
  {
    name: "Women's Fashion",
    image: "/products/categories/women.png",
    link: "/products?category=women",
    count: "2000+ styles",
  },
  {
    name: "Men's Fashion",
    image: "/products/categories/men.png",
    link: "/products?category=men",
    count: "1500+ styles",
  },
  // {
  //   name: "Backpacks",
  //   image:
  //     "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  //   link: "/products?category=accessories",
  //   count: "20+ styles",
  // },
  // {
  //   name: "Ethnic Wear",
  //   image:
  //     "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
  //   link: "/products?category=women&subcategory=saree",
  //   count: "Sarees & Lehengas",
  // },
  // {
  //   name: "New Arrivals",
  //   image:
  //     "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80",
  //   link: "/products?isNew=true",
  //   count: "Fresh drops",
  // },
];

const WHY_ITEMS = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Free Returns",
    desc: "30-day hassle-free returns on all orders, no questions asked.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Quality Guarantee",
    desc: "Every product is quality-checked before shipping to you.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
      </svg>
    ),
    title: "Secure Payment",
    desc: "Bank-grade encryption. Your payment info is always safe.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Dedicated Support",
    desc: "Our team is available Mon–Sat, 10 AM to 7 PM to assist you.",
  },
];

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featured, setFeatured] = useState<Product[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const [loadingNew, setLoadingNew] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const navigate = useNavigate();

  // Hero auto-play
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Fetch products
  useEffect(() => {
    productAPI
      .getFeatured()
      .then((res) => setFeatured(res.data.products || res.data || []))
      .catch(() => setFeatured([]))
      .finally(() => setLoadingFeatured(false));

    productAPI
      .getNewArrivals()
      .then((res) => setNewArrivals(res.data.products || res.data || []))
      .catch(() => setNewArrivals([]))
      .finally(() => setLoadingNew(false));
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    clearInterval(intervalRef.current);
  };

  return (
    <div className="home-page">
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="hero">
        <AnimatePresence mode="wait">
          {HERO_SLIDES.map((slide, idx) =>
            idx === currentSlide ? (
              <motion.div
                key={slide.id}
                className="hero-slide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link to={slide.link} className="hero-slide-link">
                  <img
                    src={slide.bg}
                    alt={slide.tag}
                    className="hero-slide-img"
                  />
                </Link>
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>

        {/* Dot Navigation */}
        <div className="hero-dots">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="hero-counter">
          <span className="counter-current">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <span className="counter-divider">/</span>
          <span className="counter-total">
            {String(HERO_SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </section>

      {/* ─── Shipping Strip ─────────────────────────────────────── */}
      <div className="shipping-strip">
        <div className="strip-inner">
          {[
            "Free Shipping on Orders ₹999+",
            "Easy Returns & Exchanges",
            "Secure Payment Gateway",
            "COD Available Pan India",
          ].map((text, i) => (
            <React.Fragment key={i}>
              <span className="strip-item">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline
                    points="20 6 9 17 4 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {text}
              </span>
              {i < 3 && <span className="strip-divider">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ─── Categories ─────────────────────────────────────────── */}
      <section className="categories-section container">
        <div className="section-header">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Find your perfect style across all our collections
          </p>
        </div>
        <div className="categories-grid">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Link to={cat.link} className="category-card-link">
                <div className="category-image">
                  <img src={cat.image} alt={cat.name} loading="lazy" />
                </div>
                <div className="category-overlay">
                  <h3 className="category-name">{cat.name}</h3>
                  <p className="category-count">{cat.count}</p>
                  <span className="category-cta">Shop Now →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Featured Products ───────────────────────────────────── */}
      <section className="home-products-section">
        <div className="container">
          <div className="section-header products-section-header">
            <div>
              <h2 className="section-title">Featured Collection</h2>
              <p className="section-subtitle">
                Hand-picked styles our experts love this season
              </p>
            </div>
            <Link to="/products?featured=true" className="view-all-btn">
              View All
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <ProductGrid
            products={featured}
            isLoading={loadingFeatured}
            skeletonCount={8}
            cols={4}
          />
        </div>
      </section>

      {/* ─── Promo Banner ───────────────────────────────────────── */}
      <section className="promo-banner">
        <div className="container promo-banner-inner">
          <div className="promo-text">
            <h2>Season Sale — Up to 50% Off</h2>
            <p>Limited time offer. Don't miss out on your favorite styles.</p>
          </div>
          <Link to="/products?sort=-discount" className="promo-banner-btn">
            Shop the Sale
          </Link>
        </div>
      </section>

      {/* ─── New Arrivals ────────────────────────────────────────── */}
      <section className="home-products-section">
        <div className="container">
          <div className="section-header products-section-header">
            <div>
              <h2 className="section-title">New Arrivals</h2>
              <p className="section-subtitle">
                Just landed — be the first to rock these fresh styles
              </p>
            </div>
            <Link to="/products?isNew=true" className="view-all-btn">
              View All
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <ProductGrid
            products={newArrivals}
            isLoading={loadingNew}
            skeletonCount={4}
            cols={4}
          />
        </div>
      </section>

      {/* ─── Why Choose Us ──────────────────────────────────────── */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Poshak Kart?</h2>
            <p className="section-subtitle">
              We don't just sell clothes — we deliver style, quality, and trust
            </p>
          </div>
          <div className="why-grid">
            {WHY_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                className="why-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="why-icon">{item.icon}</div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trending Brands Strip ───────────────────────────────── */}
      {/* changes in text => Text Removed from P and Data Array */}
      <section className="brands-section">
        <div className="container">
          <p className="brands-label"></p>
          <div className="brands-list">
            {[].map((brand) => (
              <button
                key={brand}
                className="brand-tag"
                onClick={() =>
                  navigate(`/products?search=${encodeURIComponent(brand)}`)
                }
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Newsletter ──────────────────────────────────────────── */}
      <section className="newsletter-section">
        <div className="container newsletter-inner">
          <div className="newsletter-text">
            <h2>Stay in Style with Poshak Kart</h2>
            <p>
              Get exclusive deals, style tips, and early access to new arrivals
              delivered to your inbox.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
