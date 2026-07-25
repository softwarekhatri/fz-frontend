import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const TermsPage: React.FC = () => {
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
            <h1 className="policy-title">Terms &amp; Conditions</h1>
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
            Welcome to <strong>Poshak Kart</strong>, an online fashion and lifestyle shopping platform
            operated by <strong>JAI MAA SHARDA ENTERPRISES</strong>. These Terms &amp; Conditions govern
            your access to and use of our website, products, and services available through{' '}
            <a href="https://www.poshakkart.in" target="_blank" rel="noopener noreferrer">www.poshakkart.in</a>.
          </p>
          <p>
            By accessing, browsing, creating an account, or placing an order on our Website, you acknowledge
            that you have read, understood, and agreed to be legally bound by these Terms &amp; Conditions,
            along with our Privacy Policy, Shipping &amp; Delivery Policy, Refund &amp; Cancellation Policy,
            Return &amp; Exchange Policy, and all other applicable policies published on our Website.
          </p>

          <div className="policy-section">
            <h2>1. Eligibility to Use</h2>
            <p>By using our Website, you represent and warrant that:</p>
            <ul>
              <li>You are legally capable of entering into a binding contract under applicable Indian laws.</li>
              <li>The information provided by you is true, accurate, complete, and up to date.</li>
              <li>You will use the Website only for lawful purposes.</li>
              <li>You will not misuse, disrupt, or interfere with the normal operation of the Website.</li>
            </ul>
            <p>We reserve the right to refuse access or services where we reasonably believe that these Terms have been violated.</p>
          </div>

          <div className="policy-section">
            <h2>2. Account Registration</h2>
            <p>Certain features of our Website may require you to create a customer account. When creating an account, you agree to:</p>
            <ul>
              <li>Provide accurate and complete registration information.</li>
              <li>Maintain the confidentiality of your login credentials.</li>
              <li>Update your information whenever necessary.</li>
              <li>Accept responsibility for all activities conducted through your account.</li>
            </ul>
            <p>If you believe your account has been accessed without authorization, please notify us immediately.</p>
          </div>

          <div className="policy-section">
            <h2>3. Products &amp; Product Information</h2>
            <p>We strive to display our products as accurately as possible, including descriptions, images, prices, and specifications. However:</p>
            <ul>
              <li>Product colours may vary slightly due to screen resolution or device settings.</li>
              <li>Product measurements may have minor manufacturing variations.</li>
              <li>Product availability is subject to stock availability.</li>
              <li>We reserve the right to modify or discontinue products without prior notice.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. Pricing &amp; Payment</h2>
            <ul>
              <li>All prices listed on the Website are in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.</li>
              <li>We reserve the right to modify prices at any time without prior notice.</li>
              <li>An order is confirmed only upon successful payment authorization or confirmation of eligible Cash on Delivery order.</li>
              <li>In case of pricing errors, we reserve the right to cancel affected orders and issue full refunds.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. Order Placement &amp; Acceptance</h2>
            <p>Placing an order on our Website constitutes an offer to purchase. We reserve the right to accept or decline any order at our discretion, including cancellation due to:</p>
            <ul>
              <li>Product unavailability or stock discrepancies.</li>
              <li>Pricing or technical errors.</li>
              <li>Suspected fraudulent or unauthorized activity.</li>
              <li>Incomplete or incorrect customer information.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>6. Shipping &amp; Delivery</h2>
            <p>Order processing, shipping timelines, delivery estimates, and related terms are governed by our{' '}
              <a href="/shipping">Shipping &amp; Delivery Policy</a>. Delivery timelines are estimates and may
              vary due to factors beyond our reasonable control.</p>
          </div>

          <div className="policy-section">
            <h2>7. Returns, Refunds &amp; Cancellations</h2>
            <p>Returns, refunds, and cancellations are governed by our{' '}
              <a href="/returns">Refund &amp; Cancellation Policy</a> and{' '}
              <a href="/return-exchange">Return &amp; Exchange Policy</a>.
              By placing an order, you acknowledge and agree to the applicable terms.</p>
          </div>

          <div className="policy-section">
            <h2>8. Intellectual Property</h2>
            <p>All content on this Website, including but not limited to text, graphics, logos, images, product descriptions, and design elements, is the property of JAI MAA SHARDA ENTERPRISES or its content providers and is protected under applicable intellectual property laws.</p>
            <p>You may not reproduce, distribute, display, or use any content from our Website without our prior written consent.</p>
          </div>

          <div className="policy-section">
            <h2>9. Prohibited Activities</h2>
            <p>Users are prohibited from:</p>
            <ul>
              <li>Using the Website for any unlawful or fraudulent purpose.</li>
              <li>Submitting false, misleading, or inaccurate information.</li>
              <li>Interfering with the security or functionality of the Website.</li>
              <li>Attempting to gain unauthorized access to any part of the Website or our systems.</li>
              <li>Engaging in any activity that may harm Poshak Kart's reputation or business.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>10. Limitation of Liability</h2>
            <p>To the extent permitted by applicable law, JAI MAA SHARDA ENTERPRISES shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our Website or services, including but not limited to loss of revenue, data, or business opportunities.</p>
            <p>Our total liability, in any event, shall not exceed the amount paid by you for the specific order giving rise to the claim.</p>
          </div>

          <div className="policy-section">
            <h2>11. Governing Law &amp; Jurisdiction</h2>
            <p>These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Patna, Bihar, India.</p>
          </div>

          <div className="policy-section">
            <h2>12. Amendments</h2>
            <p>We reserve the right to amend, update, or modify these Terms &amp; Conditions at any time without prior notice. Your continued use of the Website following any such changes constitutes your acceptance of the revised Terms.</p>
          </div>

          <div className="policy-section policy-contact-box">
            <h2>13. Contact Us</h2>
            <div className="policy-contact-grid">
              <div><span>Business Name</span><p>JAI MAA SHARDA ENTERPRISES</p></div>
              <div><span>Brand Name</span><p>Poshak Kart</p></div>
              <div><span>Registered Address</span><p>Near ICICI Building, East Ram Krishna Nagar, Bypass Road, Patna, Bihar – 800027, India</p></div>
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

export default TermsPage;
