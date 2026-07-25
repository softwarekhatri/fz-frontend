import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const PaymentPolicyPage: React.FC = () => {
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
            <h1 className="policy-title">Payment Policy</h1>
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
            Welcome to <strong>Poshak Kart</strong>. This Payment Policy explains the terms and conditions
            governing payments made on our website. Our objective is to provide customers with a secure,
            transparent, and convenient payment experience while ensuring the safety of every transaction.
          </p>

          <div className="policy-section">
            <h2>1. Accepted Payment Methods</h2>
            <p>To make shopping convenient, Poshak Kart may offer one or more of the following payment options:</p>
            <ul>
              <li>Unified Payments Interface (UPI)</li>
              <li>Credit Cards (Visa, MasterCard, RuPay, and others)</li>
              <li>Debit Cards</li>
              <li>Net Banking</li>
              <li>Digital Wallets</li>
              <li>Cash on Delivery (COD) — where available</li>
              <li>Other payment methods displayed during checkout</li>
            </ul>
            <p>The availability of a payment method may vary depending on your location, order value, or technical limitations.</p>
          </div>

          <div className="policy-section">
            <h2>2. Secure Payment Processing</h2>
            <p>All online payments made through Poshak Kart are processed using secure and authorized third-party payment gateway providers. For your security:</p>
            <ul>
              <li>Payment transactions are encrypted using industry-standard security protocols.</li>
              <li>Sensitive payment information is processed directly by our payment partners.</li>
              <li>Poshak Kart does not store your Credit Card Number, Debit Card Number, CVV, UPI PIN, OTP, or Internet Banking credentials.</li>
              <li>Customers are advised never to share confidential payment credentials with anyone.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Payment Confirmation</h2>
            <p>An order will be considered confirmed only after successful payment authorization or successful placement of an eligible Cash on Delivery order. After successful payment, customers will generally receive:</p>
            <ul>
              <li>Order Confirmation via Email/SMS</li>
              <li>Payment Confirmation</li>
              <li>Invoice or Payment Receipt</li>
              <li>Order Tracking Updates (after dispatch)</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. Failed or Pending Transactions</h2>
            <ul>
              <li>If a payment fails or remains in a pending state, the order may not be processed.</li>
              <li>If an amount is debited from your account but the order confirmation is not received, please wait up to <strong>24 business hours</strong> before contacting your bank or our Customer Support Team.</li>
              <li>In most cases, failed transactions are automatically reversed by the bank or payment gateway within 3–7 business days.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. Cash on Delivery (COD)</h2>
            <ul>
              <li>Cash on Delivery (COD) is available for eligible orders and locations, as indicated during checkout.</li>
              <li>COD orders are subject to a maximum order value limit, which may change from time to time.</li>
              <li>Customers placing COD orders must be available at the delivery address to accept and make payment.</li>
              <li>Poshak Kart reserves the right to withdraw the COD option from customers with a history of unaccepted or returned COD orders.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>6. Pricing &amp; Taxes</h2>
            <ul>
              <li>All product prices displayed on the Website are in Indian Rupees (INR) and are inclusive of applicable GST unless stated otherwise.</li>
              <li>Shipping charges, if applicable, will be clearly displayed during checkout before payment.</li>
              <li>Poshak Kart reserves the right to modify product prices and applicable charges at any time without prior notice.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>7. Refunds</h2>
            <p>Refunds for eligible orders will be processed in accordance with our <a href="/returns">Refund &amp; Cancellation Policy</a>. Refunds will generally be credited to the original payment method within 5–7 business days after approval.</p>
          </div>

          <div className="policy-section policy-contact-box">
            <h2>8. Contact Us</h2>
            <p>For payment-related assistance, please contact:</p>
            <div className="policy-contact-grid">
              <div><span>Business Name</span><p>JAI MAA SHARDA ENTERPRISES</p></div>
              <div><span>Brand Name</span><p>Poshak Kart</p></div>
              <div><span>Email</span><p><a href="mailto:support@poshakkart.in">support@poshakkart.in</a></p></div>
              <div><span>Support Hours</span><p>Monday to Saturday: 10:00 AM – 7:00 PM (IST)</p></div>
              <div><span>Website</span><p><a href="https://www.poshakkart.in" target="_blank" rel="noopener noreferrer">www.poshakkart.in</a></p></div>
            </div>
          </div>

          <p className="policy-updated">Last Updated: 22/06/2026</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentPolicyPage;
