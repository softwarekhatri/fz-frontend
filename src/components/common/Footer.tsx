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
      {/* ── Newsletter ─────────────────────────────────────── */}
      <div className="footer-newsletter-section">
        <div className="container footer-newsletter-inner">
          <h2 className="newsletter-heading">Stay in Style with Poshak Kart</h2>
          <p className="newsletter-sub">
            Get exclusive deals, style tips, and early access to new arrivals
            delivered to your inbox.
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
                    width="15"
                    height="15"
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
        <div className="footer-top-bar" />
        <div className="footer-dots-row" />
      </div>

      {/* ── Main Columns ───────────────────────────────────── */}
      <div className="footer-main container">
        {/* Brand */}
        <div className="footer-brand">
          <img src="/logo.png" alt="Poshak Kart" className="footer-logo-img" />
          <p className="footer-tagline">
            Poshak Kart — Apni Pehchaan, Apna Andaaz. Your trusted destination
            for quality fashion across India.
          </p>
          <a href="mailto:support@poshakkart.in" className="footer-email">
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            support@poshakkart.in
          </a>
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
              href="https://www.facebook.com/poshakkart26"
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

        {/* Company */}
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
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Customer Service</h4>
          <ul className="footer-links">
            <li>
              <Link to="/returns">Refund &amp; Cancellation</Link>
            </li>
            <li>
              <Link to="/return-exchange">Return &amp; Exchange</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping Policy</Link>
            </li>
            <li>
              <Link to="/payment-policy">Payment Policy</Link>
            </li>
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
              <Link to="/products?isNew=true">New Arrivals</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom Bar ─────────────────────────────────────── */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-bottom-left">
            <p className="footer-copy">
              © 2026 Poshak Kart. All rights reserved.
            </p>
            <p className="footer-address">
              Jai Maa Sharda Enterprises &nbsp;·&nbsp; GSTIN: 10FEFPK9128P1Z4
            </p>
          </div>
          <div className="footer-legal-links">
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
