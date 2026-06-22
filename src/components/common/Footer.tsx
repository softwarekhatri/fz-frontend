import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./Footer.css";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubscribing(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("You're subscribed! Check your inbox for a welcome gift 🎁");
    setEmail("");
    setSubscribing(false);
  };

  return (
    <footer className="footer">
      <div className="footer-top-bar" />
      <div className="footer-main container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="/logo.png"
              alt="Poshak Kart"
              className="footer-logo-img"
            />
          </div>
          <p className="footer-tagline">
            Poshak Kart – Apni Pehchaan, Apna Andaaz. Your trusted destination
            for quality fashion across India.
          </p>
          <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Pinterest"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.76 1.23-5.22 1.23-5.22s-.31-.63-.31-1.57c0-1.47.85-2.57 1.91-2.57.9 0 1.33.68 1.33 1.49 0 .91-.58 2.27-.88 3.53-.25 1.06.53 1.92 1.57 1.92 1.88 0 3.14-2.43 3.14-5.29 0-2.18-1.48-3.84-3.93-3.84-2.88 0-4.71 2.16-4.71 4.59 0 .83.24 1.42.62 1.87.18.21.2.3.13.54l-.2.83c-.07.27-.28.37-.51.27-1.4-.57-2.05-2.1-2.05-3.82 0-2.83 2.4-6.24 7.16-6.24 3.84 0 6.39 2.79 6.39 5.8 0 3.97-2.2 6.93-5.42 6.93-1.08 0-2.1-.58-2.45-1.24l-.66 2.53c-.24.92-.88 2.07-1.31 2.77.99.3 2.03.47 3.1.47 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Company</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Customer Service</h4>
          <ul className="footer-links">
            <li>
              <Link to="/returns">Refund & Cancellation</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping Policy</Link>
            </li>
            <li>
              <Link to="/contact">Help Center</Link>
            </li>
            <li>
              <a href="mailto:support@poshakkart.in">support@poshakkart.in</a>
            </li>
            {/* <li><span>Mon–Sat: 10 AM – 7 PM</span></li> */}
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Categories</h4>
          <ul className="footer-links">
            <li>
              <Link to="/products?category=women">Women</Link>
            </li>
            <li>
              <Link to="/products?category=men">Men</Link>
            </li>
            <li>
              <Link to="/products?category=kids">Kids</Link>
            </li>
            <li>
              <Link to="/products?isNew=true">New Arrivals</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4 className="footer-col-title">Stay in Style</h4>
          <p className="newsletter-desc">
            Subscribe to get exclusive deals, style inspiration and latest
            arrivals from Poshak Kart.
          </p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribing}
            />
            <button
              type="submit"
              className="newsletter-btn"
              disabled={subscribing}
            >
              {subscribing ? (
                <span className="newsletter-spinner" />
              ) : (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Subscribe
                </>
              )}
            </button>
          </form>
          <p className="newsletter-privacy">No spam. Unsubscribe anytime.</p>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Poshak Kart. A Brand of JAI MAA
            SHARDA ENTERPRISES. All rights reserved.
          </p>
          <p className="footer-address">
            Near ICICI Building, East Ram Krishna Nagar, Bypass Road, Patna,
            Bihar – 800027 | GSTIN: 10FEFPK9128P1Z4
          </p>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/returns">Refund Policy</Link>
          </div>
          <div className="footer-payment-icons">
            <span className="payment-icon">VISA</span>
            <span className="payment-icon">MC</span>
            <span className="payment-icon">UPI</span>
            <span className="payment-icon">COD</span>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
