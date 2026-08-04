import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="policy-page page-wrapper">
      <div className="policy-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="policy-badge">Legal</span>
            <h1 className="policy-title">Cookie Policy</h1>
            <p className="policy-brand">Poshak Kart (A Brand of JAI MAA SHARDA ENTERPRISES)</p>
            <p className="policy-effective">Effective Date: 22/06/2026</p>
          </motion.div>
        </div>
      </div>

      <div className="container policy-body">
        <motion.div className="policy-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <p className="policy-intro">
            Welcome to <strong>Poshak Kart</strong>. This Cookie Policy explains how Poshak Kart, a brand
            operated by <strong>JAI MAA SHARDA ENTERPRISES</strong>, uses cookies and similar technologies
            when you visit or interact with www.poshakkart.in. By continuing to browse or use our Website,
            you agree to the use of cookies in accordance with this Cookie Policy.
          </p>

          <div className="policy-section">
            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files that are stored on your computer, mobile device, or web browser when you visit a website. These files help websites recognize your device, remember your preferences, improve performance, and enhance your overall browsing experience.</p>
            <p>Cookies do not normally contain information that directly identifies you personally, but they may be linked with information you voluntarily provide while using our Website.</p>
          </div>

          <div className="policy-section">
            <h2>2. Why We Use Cookies</h2>
            <p>Poshak Kart uses cookies to improve the functionality, security, and performance of our Website. Cookies may be used for the following purposes:</p>
            <ul>
              <li>Remembering your login and account preferences.</li>
              <li>Keeping products in your shopping cart.</li>
              <li>Improving website speed and performance.</li>
              <li>Understanding visitor behaviour and website usage.</li>
              <li>Providing a personalized shopping experience.</li>
              <li>Enhancing website security and preventing fraudulent activity.</li>
              <li>Measuring the effectiveness of marketing campaigns.</li>
              <li>Improving our products and customer services.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Types of Cookies We Use</h2>
            <p>Depending on your interaction with our Website, we may use different categories of cookies.</p>
            <h3>Essential Cookies</h3>
            <p>These cookies are necessary for the proper functioning of our Website. They help with user authentication, secure login sessions, shopping cart functionality, checkout process, and website security. Without these cookies, certain Website features may not function correctly.</p>
            <h3>Performance &amp; Analytics Cookies</h3>
            <p>These cookies help us understand how visitors interact with our Website by collecting anonymous information such as pages visited, time spent on pages, website performance, navigation behaviour, and error reports. This information helps us continuously improve our Website and customer experience.</p>
            <h3>Functional Cookies</h3>
            <p>These cookies remember your preferences to provide a more personalized browsing experience. For example, they may remember language preferences, recently viewed products, login preferences, and device settings.</p>
            <h3>Marketing Cookies</h3>
            <p>Where applicable, marketing cookies may be used to display relevant advertisements, measure advertising performance, limit repetitive advertisements, and improve promotional campaigns. These cookies do not provide us with access to your confidential financial information.</p>
          </div>

          <div className="policy-section">
            <h2>4. Third-Party Cookies</h2>
            <p>Some cookies placed on our Website may be provided by trusted third-party service providers such as website analytics providers, payment gateway partners, customer communication platforms, and advertising and marketing service providers.</p>
            <p>These third parties manage their cookies in accordance with their own privacy policies. Poshak Kart does not control how third-party cookies are used.</p>
          </div>

          <div className="policy-section">
            <h2>5. Managing Cookies</h2>
            <p>Most web browsers allow users to control, restrict, or disable cookies through browser settings. You may:</p>
            <ul>
              <li>Accept all cookies.</li>
              <li>Reject non-essential cookies.</li>
              <li>Delete previously stored cookies.</li>
              <li>Configure browser settings according to your preferences.</li>
            </ul>
            <p>Please note that disabling certain cookies may affect the functionality of our Website, including login, shopping cart, and checkout features.</p>
          </div>

          <div className="policy-section">
            <h2>6. Cookie Security</h2>
            <p>Cookies used by Poshak Kart are intended to improve user experience and Website functionality. They are not designed to store sensitive payment information such as Credit Card Number, Debit Card Number, CVV, UPI PIN, OTP, or Internet Banking Password.</p>
            <p>Sensitive payment information is processed securely by authorized payment gateway providers and is never stored in cookies by Poshak Kart.</p>
          </div>

          <div className="policy-section">
            <h2>7. Updates to this Cookie Policy</h2>
            <p>We may update or revise this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our business practices. The revised version will become effective immediately upon publication on our Website. We encourage users to review this page periodically to stay informed about how we use cookies.</p>
          </div>

          <div className="policy-section policy-contact-box">
            <h2>8. Contact Us</h2>
            <p>If you have any questions regarding this Cookie Policy or our use of cookies, please contact us:</p>
            <div className="policy-contact-grid">
              <div><span>Business Name</span><p>JAI MAA SHARDA ENTERPRISES</p></div>
              <div><span>Brand Name</span><p>Poshak Kart</p></div>
              <div><span>Registered Address</span><p>Near ICICI Building, East Ram Krishna Nagar, Bypass Road, Patna, Bihar – 800027</p></div>
              <div><span>GSTIN</span><p>10FEFPK9128P1Z4</p></div>
              <div><span>Email</span><p><a href="mailto:support@poshakkart.in">support@poshakkart.in</a></p></div>
              <div><span>Website</span><p><a href="https://www.poshakkart.in" target="_blank" rel="noopener noreferrer">www.poshakkart.in</a></p></div>
              <div><span>Business Hours</span><p>Monday – Saturday: 10:00 AM to 7:00 PM (IST). Sunday &amp; Public Holidays: Closed.</p></div>
            </div>
          </div>

          <p className="policy-updated">Last Updated: 22/06/2026</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
