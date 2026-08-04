import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const DisclaimerPage: React.FC = () => {
  return (
    <div className="policy-page page-wrapper">
      <div className="policy-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="policy-badge">Legal</span>
            <h1 className="policy-title">Disclaimer</h1>
            <p className="policy-brand">Poshak Kart (A Brand of JAI MAA SHARDA ENTERPRISES)</p>
            <p className="policy-effective">Effective Date: 22/06/2026</p>
          </motion.div>
        </div>
      </div>

      <div className="container policy-body">
        <motion.div className="policy-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <p className="policy-intro">
            Welcome to <strong>Poshak Kart</strong>. This Disclaimer governs your access to and use of
            www.poshakkart.in, including all products, services, content, and information made available
            through our Website. By accessing or using our Website, you acknowledge that you have read,
            understood, and agreed to the terms of this Disclaimer.
          </p>

          <div className="policy-section">
            <h2>1. General Information</h2>
            <p>The information available on Poshak Kart is published in good faith and is intended solely for general information and shopping purposes. While we make every reasonable effort to ensure that all product descriptions, pricing, specifications, images, and other information displayed on our Website are accurate and up to date, we do not guarantee that all information will always be complete, error-free, or current.</p>
            <p>Customers are encouraged to verify product details before making a purchase.</p>
          </div>

          <div className="policy-section">
            <h2>2. Product Information</h2>
            <p>We strive to display our products as accurately as possible. However, customers should note that:</p>
            <ul>
              <li>Product colours may vary slightly due to screen resolution, lighting, or device settings.</li>
              <li>Product measurements may have minor manufacturing variations.</li>
              <li>Packaging or labels may change from time to time without affecting product quality.</li>
              <li>Product availability is subject to stock availability.</li>
            </ul>
            <p>Such variations shall not be considered manufacturing defects.</p>
          </div>

          <div className="policy-section">
            <h2>3. Pricing &amp; Availability</h2>
            <p>Although we regularly review product prices and availability, occasional pricing errors, technical issues, or inventory discrepancies may occur. In such situations, Poshak Kart reserves the right to:</p>
            <ul>
              <li>Correct pricing or product information.</li>
              <li>Refuse or cancel affected orders.</li>
              <li>Issue an appropriate refund where payment has already been received.</li>
            </ul>
            <p>We apologize for any inconvenience caused in such rare situations.</p>
          </div>

          <div className="policy-section">
            <h2>4. Website Availability</h2>
            <p>We aim to keep our Website available and functioning smoothly at all times. However, uninterrupted access cannot be guaranteed. Temporary interruptions may occur due to website maintenance, technical upgrades, internet connectivity issues, server failures, third-party service interruptions, or circumstances beyond our reasonable control.</p>
            <p>We shall not be liable for any temporary unavailability of our Website.</p>
          </div>

          <div className="policy-section">
            <h2>5. Third-Party Services</h2>
            <p>Our Website may integrate or provide access to third-party services including payment gateways, courier companies, logistics providers, communication platforms, or external websites. These services operate independently under their own terms and privacy policies.</p>
            <p>Poshak Kart is not responsible for the content, availability, security, or privacy practices of any third-party platform.</p>
          </div>

          <div className="policy-section">
            <h2>6. Limitation of Liability</h2>
            <p>To the maximum extent permitted under applicable law, Poshak Kart, JAI MAA SHARDA ENTERPRISES, its employees, representatives, affiliates, and service providers shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from use or inability to use the Website, temporary interruption of services, product availability, shipping or delivery delays, technical failures beyond our reasonable control, or unauthorized access by third parties.</p>
            <p>Our total liability, if any, shall not exceed the amount actually paid by the customer for the relevant order.</p>
          </div>

          <div className="policy-section">
            <h2>7. Intellectual Property</h2>
            <p>All trademarks, logos, product images, graphics, text, website content, layouts, icons, and other intellectual property displayed on Poshak Kart are owned by or licensed to JAI MAA SHARDA ENTERPRISES.</p>
            <p>No content from this Website may be copied, reproduced, distributed, modified, published, or commercially used without our prior written permission. Unauthorized use may result in legal action.</p>
          </div>

          <div className="policy-section">
            <h2>8. Customer Responsibility</h2>
            <p>Customers are responsible for:</p>
            <ul>
              <li>Providing accurate personal and delivery information.</li>
              <li>Reviewing product descriptions before placing an order.</li>
              <li>Selecting the correct size, colour, and quantity.</li>
              <li>Keeping account credentials secure.</li>
              <li>Using the Website in accordance with applicable laws.</li>
            </ul>
            <p>Failure to provide accurate information may result in order delays, cancellation, or unsuccessful delivery.</p>
          </div>

          <div className="policy-section">
            <h2>9. Force Majeure</h2>
            <p>Poshak Kart shall not be held responsible for any delay or failure in fulfilling its obligations due to circumstances beyond its reasonable control, including but not limited to natural disasters, floods, earthquakes, fire, pandemic or epidemic, government restrictions, internet or communication failures, transportation disruptions, labour strikes, power outages, or other force majeure events.</p>
            <p>During such situations, our services may be temporarily affected until normal operations resume.</p>
          </div>

          <div className="policy-section">
            <h2>10. Changes to this Disclaimer</h2>
            <p>We reserve the right to revise or update this Disclaimer at any time to reflect changes in our business operations, legal requirements, or Website content. Any updated version will become effective immediately upon publication on our Website. Continued use of the Website constitutes your acceptance of the revised Disclaimer.</p>
          </div>

          <div className="policy-section policy-contact-box">
            <h2>11. Contact Us</h2>
            <p>If you have any questions regarding this Disclaimer or any of our policies, please contact us:</p>
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

export default DisclaimerPage;
