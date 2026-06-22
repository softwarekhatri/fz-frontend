import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const RefundPolicyPage: React.FC = () => {
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
            <h1 className="policy-title">Refund & Cancellation Policy</h1>
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
            At <strong>Poshak Kart</strong>, operated by <strong>JAI MAA SHARDA ENTERPRISES</strong>,
            customer satisfaction is our priority. This Refund & Cancellation Policy outlines the terms
            governing order cancellations, returns, replacements, and refunds for products purchased
            through our website.
          </p>
          <p>By placing an order on our website, you agree to the terms set forth in this policy.</p>

          <div className="policy-section">
            <h2>1. Order Cancellation</h2>
            <h3>Cancellation Before Shipment</h3>
            <p>Customers may request cancellation of an order before it has been processed or dispatched from our warehouse. Upon successful cancellation, the amount paid will be refunded to the original payment method.</p>
            <h3>Cancellation After Shipment</h3>
            <p>Once an order has been dispatched, cancellation requests may not be accepted. In such cases, customers may initiate a return request in accordance with our Return Policy, subject to eligibility.</p>
            <p>Poshak Kart reserves the right to cancel any order due to:</p>
            <ul>
              <li>Product unavailability;</li>
              <li>Pricing or technical errors;</li>
              <li>Suspected fraudulent or unauthorized transactions;</li>
              <li>Incomplete or unverifiable customer information;</li>
              <li>Any circumstances beyond our reasonable control.</li>
            </ul>
            <p>In such cases, the entire amount paid by the customer will be refunded.</p>
          </div>

          <div className="policy-section">
            <h2>2. Return Eligibility</h2>
            <p>Customers may request a return only under the following circumstances:</p>
            <ul>
              <li>Wrong product delivered;</li>
              <li>Damaged or defective product received;</li>
              <li>Product received significantly different from the description displayed on the website;</li>
              <li>Missing items in the delivered package.</li>
            </ul>
            <p>To be eligible for a return, the product must:</p>
            <ul>
              <li>Be unused, unwashed, and undamaged;</li>
              <li>Have all original tags, labels, packaging, and accessories intact;</li>
              <li>Be returned in its original condition.</li>
            </ul>
            <p>Return requests must be initiated within <strong>7 days</strong> from the date of delivery.</p>
          </div>

          <div className="policy-section">
            <h2>3. Non-Returnable Products</h2>
            <p>The following items are generally not eligible for return or refund:</p>
            <ul>
              <li>Products damaged due to misuse, improper handling, or negligence by the customer;</li>
              <li>Products returned without original tags or packaging;</li>
              <li>Products showing signs of use, washing, or alteration;</li>
              <li>Innerwear, personal hygiene items, and products marked as non-returnable on the product page;</li>
              <li>Products purchased during special sale events, clearance sales, or promotional offers, unless defective or damaged.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. Refund Process</h2>
            <p>Upon approval of the return request:</p>
            <ul>
              <li>Refunds shall be initiated after successful inspection and verification of the returned product.</li>
              <li>Refunds will be processed to the original payment method used during purchase.</li>
              <li>In cases of Cash on Delivery (COD) orders, customers may be required to provide valid bank account details for processing refunds.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. Refund Timeline</h2>
            <p>Once approved, refunds are generally processed within:</p>
            <ul>
              <li><strong>Prepaid Orders:</strong> 5 to 7 business days;</li>
              <li><strong>UPI, Net Banking, Wallets, and Cards:</strong> Depending upon banking and payment gateway processing timelines;</li>
              <li><strong>COD Orders:</strong> Up to 7 business days after verification of bank details.</li>
            </ul>
            <p>Actual credit timelines may vary depending on the customer's bank or payment service provider.</p>
          </div>

          <div className="policy-section">
            <h2>6. Replacement Policy</h2>
            <p>Where applicable and subject to product availability, customers may opt for replacement instead of a refund for:</p>
            <ul>
              <li>Damaged products;</li>
              <li>Defective products;</li>
              <li>Incorrect products delivered.</li>
            </ul>
            <p>Replacement requests are subject to verification and approval by our support team.</p>
          </div>

          <div className="policy-section">
            <h2>7. Return Shipping</h2>
            <p>In cases involving damaged, defective, or incorrect products delivered by Poshak Kart, return shipping charges, if applicable, shall be borne by us.</p>
            <p>For returns requested due to reasons other than our error, shipping charges may be deducted or borne by the customer, as applicable.</p>
          </div>

          <div className="policy-section">
            <h2>8. Fraud Prevention</h2>
            <p>Poshak Kart reserves the right to refuse refunds, returns, or replacements if:</p>
            <ul>
              <li>Excessive return requests indicate misuse of the policy;</li>
              <li>Fraudulent activities are suspected;</li>
              <li>Returned products fail inspection or do not meet eligibility criteria.</li>
            </ul>
          </div>

          <div className="policy-section policy-contact-box">
            <h2>9. Contact Us</h2>
            <p>For cancellation, return, replacement, or refund-related assistance, please contact:</p>
            <div className="policy-contact-grid">
              <div><span>Business Name</span><p>JAI MAA SHARDA ENTERPRISES</p></div>
              <div><span>Brand Name</span><p>Poshak Kart</p></div>
              <div><span>Registered Address</span><p>Near ICICI Building, East Ram Krishna Nagar, Bypass Road, Patna, Bihar – 800027</p></div>
              <div><span>GSTIN</span><p>10FEFPK9128P1Z4</p></div>
              <div><span>Email</span><p><a href="mailto:support@poshakkart.in">support@poshakkart.in</a></p></div>
              <div><span>Website</span><p><a href="https://www.poshakkart.in" target="_blank" rel="noopener noreferrer">www.poshakkart.in</a></p></div>
            </div>
          </div>

          <p className="policy-updated">Last Updated: 22/06/2026</p>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
