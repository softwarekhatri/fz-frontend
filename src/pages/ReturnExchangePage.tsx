import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const ReturnExchangePage: React.FC = () => {
  return (
    <div className="policy-page page-wrapper">
      <div className="policy-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="policy-badge">Legal</span>
            <h1 className="policy-title">Return &amp; Exchange Policy</h1>
            <p className="policy-brand">Poshak Kart (A Brand of JAI MAA SHARDA ENTERPRISES)</p>
            <p className="policy-effective">Effective Date: 22/06/2026</p>
          </motion.div>
        </div>
      </div>

      <div className="container policy-body">
        <motion.div
          className="policy-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="policy-intro">
            At <strong>Poshak Kart</strong>, customer satisfaction is at the heart of everything we do.
            We strive to deliver quality fashion products that meet your expectations. However, if you receive
            a product that is damaged, defective, incorrect, or does not meet the conditions described on our
            Website, we are committed to providing a fair and transparent return and exchange process.
          </p>

          <div className="policy-section">
            <h2>1. Return Eligibility</h2>
            <p>Customers may request a return for eligible products within <strong>7 days from the date of delivery</strong>, subject to the following conditions:</p>
            <p>A product may qualify for return if:</p>
            <ul>
              <li>You received an incorrect product.</li>
              <li>The product was damaged during transit.</li>
              <li>The product has a verified manufacturing defect.</li>
              <li>The item delivered is significantly different from the product ordered.</li>
              <li>An item is missing from your order.</li>
            </ul>
            <p>To be eligible for a return:</p>
            <ul>
              <li>The product must be unused, unworn, and unwashed.</li>
              <li>All original tags, labels, packaging, and accessories must be intact.</li>
              <li>The original invoice or proof of purchase should be available.</li>
              <li>The product must successfully pass our quality inspection after it is returned.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>2. Exchange Eligibility</h2>
            <p>Poshak Kart offers exchange on eligible products, subject to product availability. Exchange requests may be accepted in the following situations:</p>
            <ul>
              <li>Size Exchange</li>
              <li>Colour Exchange (subject to stock availability)</li>
              <li>Wrong Product Delivered</li>
              <li>Manufacturing Defect</li>
              <li>Damaged Product Received</li>
            </ul>
            <p>Exchange requests should be submitted within <strong>7 days from the date of delivery</strong>.</p>
          </div>

          <div className="policy-section">
            <h2>3. Non-Returnable &amp; Non-Exchangeable Items</h2>
            <p>The following products are generally not eligible for return or exchange:</p>
            <ul>
              <li>Products damaged due to misuse, improper care, or negligence by the customer.</li>
              <li>Products returned without original tags, labels, or packaging.</li>
              <li>Products showing signs of use, washing, alteration, or damage caused by the customer.</li>
              <li>Innerwear, personal hygiene products, or items specifically marked as non-returnable.</li>
              <li>Products purchased during special sales, clearance events, or promotional offers, unless defective or damaged.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. How to Initiate a Return or Exchange</h2>
            <p>To request a return or exchange:</p>
            <ul>
              <li>Contact our Customer Support Team via email at <a href="mailto:support@poshakkart.in">support@poshakkart.in</a> within 7 days of delivery.</li>
              <li>Provide your Order Number, full name, and a clear description of the issue.</li>
              <li>Attach relevant photographs of the product (especially for damaged, defective, or incorrect items).</li>
              <li>Our support team will review your request and respond within 24–48 business hours.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. Return Shipping</h2>
            <ul>
              <li>If the return is due to a damaged, defective, or incorrect product delivered by Poshak Kart, return shipping charges shall be borne by us.</li>
              <li>For exchanges or returns due to other reasons, shipping charges may apply and will be communicated to you by our support team.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>6. Refund on Returns</h2>
            <p>Upon successful return and quality inspection:</p>
            <ul>
              <li>Refunds will be processed to the original payment method within 5–7 business days.</li>
              <li>For COD orders, refunds will be processed via bank transfer after verification of bank details.</li>
            </ul>
          </div>

          <div className="policy-section policy-contact-box">
            <h2>7. Contact Us</h2>
            <p>For return or exchange assistance, please contact:</p>
            <div className="policy-contact-grid">
              <div><span>Business Name</span><p>JAI MAA SHARDA ENTERPRISES</p></div>
              <div><span>Brand Name</span><p>Poshak Kart</p></div>
              <div><span>Registered Address</span><p>Near ICICI Building, East Ram Krishna Nagar, Bypass Road, Patna, Bihar – 800027, India</p></div>
              <div><span>GSTIN</span><p>10FEFPK9128P1Z4</p></div>
              <div><span>Email</span><p><a href="mailto:support@poshakkart.in">support@poshakkart.in</a></p></div>
              <div><span>Support Hours</span><p>Monday to Saturday: 10:00 AM – 7:00 PM (IST)</p></div>
            </div>
          </div>

          <p className="policy-updated">Last Updated: 22/06/2026</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ReturnExchangePage;
