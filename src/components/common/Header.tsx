import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { productAPI } from "../../services/api";
import useDebounce from "../../hooks/useDebounce";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./Header.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "New Arrivals", path: "/products?isNew=true" },
  { label: "Women", path: "/products?category=women" },
  { label: "Men", path: "/products?category=men" },
  // { label: "Backpacks", path: "/products?category=accessories" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [prevCount, setPrevCount] = useState(0);
  const [cartBounce, setCartBounce] = useState(false);

  const debouncedSearch = useDebounce(searchQuery, 300);
  const [recentSearches, setRecentSearches] = useLocalStorage<string[]>(
    "recent-searches",
    [],
  );

  const { user, isAuthenticated, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cart count bounce animation
  useEffect(() => {
    if (cartCount > prevCount) {
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 600);
    }
    setPrevCount(cartCount);
  }, [cartCount, prevCount]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  // Search suggestions
  useEffect(() => {
    if (debouncedSearch.trim().length < 2) {
      setSuggestions([]);
      return;
    }
    productAPI
      .getSearchSuggestions(debouncedSearch)
      .then((res) => {
        setSuggestions(res.data.suggestions || res.data || []);
        setSuggestionsOpen(true);
      })
      .catch(() => setSuggestions([]));
  }, [debouncedSearch]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSuggestionsOpen(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = useCallback(
    (q: string) => {
      const query = q || searchQuery;
      if (!query.trim()) return;
      setRecentSearches((prev) => {
        const filtered = prev.filter((s) => s !== query);
        return [query, ...filtered].slice(0, 5);
      });
      setSuggestionsOpen(false);
      setSearchOpen(false);
      setSearchQuery("");
      navigate(`/products?search=${encodeURIComponent(query)}`);
    },
    [searchQuery, navigate, setRecentSearches],
  );

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch(searchQuery);
    if (e.key === "Escape") {
      setSuggestionsOpen(false);
      setSearchOpen(false);
    }
  };

  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      <header className={`header ${scrolled ? "header-scrolled" : ""} ${isTransparent ? "header-transparent" : ""}`}>
        <div className="header-inner container">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <img
              src="/logo.png"
              alt="Poshak Kart"
              className="header-logo-img"
            />
            {/* <div className="header-logo-text-wrap">
              <span className="logo-text">Poshak Kart</span>
              <span className="logo-tagline">Apni Pehchaan, Apna Andaaz</span>
            </div> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="header-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname + location.search === link.path ? "nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="header-actions">
            {/* Search */}
            <div className="search-container" ref={searchRef}>
              <button
                className="header-icon-btn"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <path
                    d="M21 21l-4.35-4.35"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    className="search-dropdown"
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="search-input-row">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="search-icon"
                      >
                        <circle cx="11" cy="11" r="8" strokeWidth="2" />
                        <path
                          d="M21 21l-4.35-4.35"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <input
                        autoFocus
                        type="text"
                        className="search-input"
                        placeholder="Search kurtas, sarees, fashion…"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setSuggestionsOpen(true);
                        }}
                        onKeyDown={handleSearchKeyDown}
                      />
                      {searchQuery && (
                        <button
                          className="search-clear"
                          onClick={() => setSearchQuery("")}
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    {/* Suggestions */}
                    <AnimatePresence>
                      {suggestionsOpen && suggestions.length > 0 && (
                        <motion.ul
                          className="suggestions-list"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {suggestions.map((s, i) => (
                            <li key={i}>
                              <button
                                className="suggestion-item"
                                onClick={() => handleSearch(s)}
                              >
                                <svg
                                  width="14"
                                  height="14"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <circle
                                    cx="11"
                                    cy="11"
                                    r="8"
                                    strokeWidth="2"
                                  />
                                  <path
                                    d="M21 21l-4.35-4.35"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                {s}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    {/* Recent Searches */}
                    {!searchQuery && recentSearches.length > 0 && (
                      <div className="recent-searches">
                        <p className="recent-label">Recent</p>
                        <ul>
                          {recentSearches.map((s, i) => (
                            <li key={i}>
                              <button
                                className="suggestion-item recent-item"
                                onClick={() => handleSearch(s)}
                              >
                                <svg
                                  width="14"
                                  height="14"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <polyline
                                    points="1 4 1 10 7 10"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M3.51 15a9 9 0 1 0 .49-4"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                {s}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="header-icon-btn cart-btn"
              aria-label="Shopping cart"
            >
              <img
                src="/cart.png"
                alt="Cart"
                className={`cart-icon-img ${cartBounce ? "cart-bounce" : ""}`}
              />
              {cartCount > 0 && (
                <span
                  className={`cart-badge ${cartBounce ? "cart-badge-bounce" : ""}`}
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="user-menu-wrap" ref={userMenuRef}>
                <button
                  className="user-avatar-btn"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  aria-label="User menu"
                >
                  <span className="user-avatar">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`chevron ${userMenuOpen ? "chevron-up" : ""}`}
                  >
                    <polyline
                      points="6 9 12 15 18 9"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      className="user-dropdown"
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div className="user-dropdown-header">
                        <p className="user-name">{user?.name}</p>
                        <p className="user-email">{user?.email}</p>
                      </div>
                      <div className="user-dropdown-divider" />
                      <Link to="/orders" className="user-dropdown-item">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <rect
                            x="9"
                            y="3"
                            width="6"
                            height="4"
                            rx="1"
                            ry="1"
                            strokeWidth="2"
                          />
                        </svg>
                        My Orders
                      </Link>
                      <div className="user-dropdown-divider" />
                      <button
                        className="user-dropdown-item user-dropdown-logout"
                        onClick={handleLogout}
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <polyline
                            points="16 17 21 12 16 7"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <line
                            x1="21"
                            y1="12"
                            x2="9"
                            y2="12"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn-login">
                  Login
                </Link>
                <Link to="/signup" className="btn-signup">
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Hamburger */}
            <button
              className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
            >
              <div className="mobile-drawer-header">
                <span className="logo-text" style={{ fontSize: "1.25rem" }}>
                  Poshak Kart
                </span>
                <button
                  className="drawer-close"
                  onClick={() => setMenuOpen(false)}
                >
                  ✕
                </button>
              </div>

              {isAuthenticated && (
                <div className="mobile-user-info">
                  <div className="user-avatar">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="user-name">{user?.name}</p>
                    <p className="user-email">{user?.email}</p>
                  </div>
                </div>
              )}

              <nav className="mobile-nav">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mobile-drawer-divider" />

              {isAuthenticated ? (
                <div className="mobile-auth">
                  <Link
                    to="/orders"
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Orders
                  </Link>
                  <button
                    className="mobile-logout-btn"
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="mobile-auth">
                  <Link
                    to="/login"
                    className="btn-login"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="btn-signup"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
