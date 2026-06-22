import React from 'react';
import { motion } from 'framer-motion';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page page-wrapper">
      <div className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-badge">About Us</span>
            <h1 className="about-hero-title">Poshak Kart</h1>
            <p className="about-hero-sub">A Brand of JAI MAA SHARDA ENTERPRISES</p>
            <p className="about-hero-tagline">Apni Pehchaan, Apna Andaaz</p>
          </motion.div>
        </div>
      </div>

      <div className="container about-body">
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Welcome to <strong>Poshak Kart</strong>, your trusted destination for quality fashion and lifestyle
            products. Operated by <strong>JAI MAA SHARDA ENTERPRISES</strong>, Poshak Kart is dedicated to
            bringing stylish, affordable, and high-quality fashion products to customers across India.
          </p>
          <p>
            At Poshak Kart, we believe that fashion is more than just clothing — it is a reflection of
            personality, confidence, and individuality. Our mission is to make the latest trends and
            premium-quality products accessible to everyone while ensuring an exceptional shopping experience.
          </p>
          <p>
            We carefully curate our collections to offer a wide range of products that combine style, comfort,
            and value. Whether you are looking for everyday essentials or fashionable pieces for special
            occasions, Poshak Kart strives to meet the diverse needs and preferences of modern consumers.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="about-card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To provide customers across India with high-quality, fashionable, and affordable products
              through a secure, reliable, and customer-centric online shopping experience.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="about-card-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>
              To become one of India's most trusted and preferred fashion e-commerce brands by delivering
              exceptional products, outstanding customer service, and a seamless digital shopping experience.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="about-card-icon">🤝</div>
            <h3>Our Commitment</h3>
            <p>
              Customer satisfaction is at the heart of everything we do. Every order placed with Poshak Kart
              is handled with care to ensure a convenient, secure, and enjoyable shopping journey.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="about-why"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Why Choose Poshak Kart?</h2>
          <ul className="about-why-list">
            {[
              'Premium Quality Products',
              'Trendy and Affordable Fashion',
              'Secure Payment Options',
              'Fast and Reliable Delivery Across India',
              'Easy Returns and Dedicated Customer Support',
              'Customer-Centric Shopping Experience',
            ].map((item) => (
              <li key={item}>
                <span className="about-check">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="about-business-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Business Information</h2>
          <div className="about-info-grid">
            <div><span>Business Name</span><p>JAI MAA SHARDA ENTERPRISES</p></div>
            <div><span>Brand Name</span><p>Poshak Kart</p></div>
            <div><span>GSTIN</span><p>10FEFPK9128P1Z4</p></div>
            <div><span>Email</span><p><a href="mailto:support@poshakkart.in">support@poshakkart.in</a></p></div>
            <div><span>Website</span><p><a href="https://www.poshakkart.in" target="_blank" rel="noopener noreferrer">www.poshakkart.in</a></p></div>
            <div><span>Registered Address</span><p>Near ICICI Building, East Ram Krishna Nagar, Bypass Road, Patna, Bihar – 800027, India</p></div>
          </div>
        </motion.div>

        <motion.div
          className="about-promise"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Our Promise</h2>
          <p className="about-promise-text">
            <strong>Poshak Kart – Apni Pehchaan, Apna Andaaz.</strong>
          </p>
          <p>At Poshak Kart, we don't just sell products — we deliver style, quality, and trust to customers across India.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
