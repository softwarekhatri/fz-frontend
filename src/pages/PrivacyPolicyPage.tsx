import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage: React.FC = () => {
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
            <h1 className="policy-title">Privacy Policy</h1>
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
            At <strong>Poshak Kart</strong>, a fashion and lifestyle e-commerce brand operated by{' '}
            <strong>JAI MAA SHARDA ENTERPRISES</strong> ("Company", "We", "Us", or "Our"), we are committed
            to protecting the privacy and security of our customers and website visitors. This Privacy Policy
            outlines how we collect, use, disclose, and safeguard your personal information when you access
            our website, purchase our products, or interact with our services.
          </p>
          <p>By accessing or using our website, you acknowledge and agree to the terms of this Privacy Policy.</p>

          <div className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <h3>Personal Information</h3>
            <ul>
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Billing Address</li>
              <li>Shipping Address</li>
              <li>Date of Birth (if voluntarily provided)</li>
            </ul>
            <h3>Transaction Information</h3>
            <ul>
              <li>Order Details</li>
              <li>Purchase History</li>
              <li>Payment Status</li>
              <li>Refund and Return Information</li>
            </ul>
            <h3>Technical Information</h3>
            <ul>
              <li>IP Address</li>
              <li>Device Information</li>
              <li>Browser Type and Version</li>
              <li>Operating System</li>
              <li>Website Usage Data</li>
              <li>Cookies and Similar Technologies</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To process, confirm, and deliver your orders.</li>
              <li>To provide customer support and respond to your inquiries.</li>
              <li>To manage returns, refunds, and cancellations.</li>
              <li>To send order updates, invoices, and service-related communications.</li>
              <li>To improve our website functionality, products, and user experience.</li>
              <li>To send promotional offers, discounts, and marketing communications (where permitted).</li>
              <li>To prevent fraud, unauthorised transactions, and misuse of our services.</li>
              <li>To comply with applicable laws, regulations, and legal obligations.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Payment Information</h2>
            <p>All payments made on Poshak Kart are processed through secure and authorized third-party payment gateway providers. We do not store your debit card details, credit card details, CVV, UPI PIN, internet banking credentials, or any other sensitive payment information on our servers.</p>
          </div>

          <div className="policy-section">
            <h2>4. Sharing and Disclosure of Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Payment Gateway Service Providers</li>
              <li>Logistics and Delivery Partners</li>
              <li>Technology and Hosting Service Providers</li>
              <li>Customer Support Service Providers</li>
              <li>Government Authorities and Regulatory Bodies, where required by law</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for their independent marketing purposes.</p>
          </div>

          <div className="policy-section">
            <h2>5. Cookies and Tracking Technologies</h2>
            <p>Our website may use cookies, web beacons, and similar technologies to enhance your browsing experience, remember your preferences, analyze website traffic and usage patterns, and improve website performance and security.</p>
            <p>You may disable cookies through your browser settings; however, certain features of the website may not function properly.</p>
          </div>

          <div className="policy-section">
            <h2>6. Data Security</h2>
            <p>We implement commercially reasonable technical, administrative, and organizational measures to protect your personal information against unauthorized access, loss, misuse, disclosure, alteration, or destruction. While we strive to protect your information, no method of transmission over the internet or electronic storage is entirely secure.</p>
          </div>

          <div className="policy-section">
            <h2>7. Data Retention</h2>
            <p>We retain your personal information only for as long as necessary to:</p>
            <ul>
              <li>Fulfill the purposes outlined in this Privacy Policy;</li>
              <li>Comply with legal, tax, and accounting obligations;</li>
              <li>Resolve disputes and enforce our agreements.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>8. Your Rights</h2>
            <p>Subject to applicable laws, you may have the right to:</p>
            <ul>
              <li>Access your personal information;</li>
              <li>Request correction or update of inaccurate information;</li>
              <li>Request deletion of your personal information;</li>
              <li>Withdraw consent for marketing communications;</li>
              <li>Raise concerns regarding the processing of your information.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>9. Third-Party Websites</h2>
            <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, policies, or content of such third-party platforms.</p>
          </div>

          <div className="policy-section">
            <h2>10. Children's Privacy</h2>
            <p>Our products and services are intended for individuals who are at least eighteen (18) years of age. We do not knowingly collect personal information from minors.</p>
          </div>

          <div className="policy-section">
            <h2>11. Changes to this Privacy Policy</h2>
            <p>We reserve the right to amend, update, or modify this Privacy Policy at any time without prior notice. Your continued use of our website following such changes constitutes your acceptance of the revised Privacy Policy.</p>
          </div>

          <div className="policy-section policy-contact-box">
            <h2>12. Contact Us</h2>
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

export default PrivacyPolicyPage;
