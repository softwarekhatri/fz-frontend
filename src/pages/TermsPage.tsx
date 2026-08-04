import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const TermsPage: React.FC = () => {
  return (
    <div className="policy-page page-wrapper">
      <div className="policy-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="policy-badge">Legal</span>
            <h1 className="policy-title">Terms &amp; Conditions</h1>
            <p className="policy-brand">Poshak Kart (A Brand of JAI MAA SHARDA ENTERPRISES)</p>
            <p className="policy-effective">Effective Date: 22/06/2026</p>
          </motion.div>
        </div>
      </div>

      <div className="container policy-body">
        <motion.div className="policy-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <p className="policy-intro">
            Welcome to <strong>Poshak Kart</strong>, an online fashion and lifestyle shopping platform operated by{' '}
            <strong>JAI MAA SHARDA ENTERPRISES</strong>. These Terms &amp; Conditions govern your access to and use
            of our website, products, and services available through www.poshakkart.in. By accessing, browsing,
            creating an account, or placing an order on our Website, you acknowledge that you have read,
            understood, and agreed to be legally bound by these Terms.
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
            <p>We strive to display our products as accurately as possible, including descriptions, images, pricing, colours, sizes, and specifications. However:</p>
            <ul>
              <li>Actual product colours may vary depending on your screen settings.</li>
              <li>Product measurements may have minor manufacturing variations.</li>
              <li>Product availability is subject to stock availability.</li>
              <li>Images displayed on the Website are for illustrative purposes and may slightly differ from the actual product.</li>
            </ul>
            <p>We reserve the right to modify, discontinue, or update any product without prior notice.</p>
          </div>

          <div className="policy-section">
            <h2>4. Pricing &amp; Payments</h2>
            <p>All prices displayed on the Website are in Indian Rupees (INR) unless otherwise specified. Prices may change without prior notice. While we make every effort to ensure pricing accuracy, occasional typographical or technical errors may occur. In such cases, we reserve the right to cancel or refuse any order placed at an incorrect price and process an appropriate refund where applicable.</p>
            <p>Payments are processed through authorized third-party payment gateway providers. Poshak Kart does not store your card details, UPI PIN, CVV, OTP, or internet banking credentials.</p>
          </div>

          <div className="policy-section">
            <h2>5. Order Acceptance</h2>
            <p>Placing an order on our Website constitutes an offer to purchase the selected products. Your order shall be considered confirmed only after successful payment authorization (where applicable), verification of order details, and acceptance of the order by Poshak Kart.</p>
            <p>We reserve the right to refuse or cancel any order for reasons including, but not limited to:</p>
            <ul>
              <li>Product unavailability</li>
              <li>Pricing or technical errors</li>
              <li>Suspected fraudulent activity</li>
              <li>Payment verification issues</li>
              <li>Incorrect customer information</li>
              <li>Legal or regulatory requirements</li>
            </ul>
            <p>If an order is cancelled after payment has been successfully received, the applicable refund will be processed in accordance with our Refund &amp; Cancellation Policy.</p>
          </div>

          <div className="policy-section">
            <h2>6. Shipping &amp; Delivery</h2>
            <p>Orders will be processed and shipped in accordance with our Shipping &amp; Delivery Policy. Estimated delivery timelines are indicative only and may vary due to courier partner delays, weather conditions, public holidays, government restrictions, remote delivery locations, or other circumstances beyond our reasonable control. Customers are responsible for providing accurate delivery information while placing an order.</p>
          </div>

          <div className="policy-section">
            <h2>7. Returns, Exchanges &amp; Refunds</h2>
            <p>Returns, exchanges, cancellations, and refunds are governed by our separate policies available on the Website. Customers are encouraged to review these policies before placing an order to understand the applicable conditions, timelines, and eligibility requirements.</p>
          </div>

          <div className="policy-section">
            <h2>8. Customer Responsibilities</h2>
            <p>While using our Website, you agree that you will not:</p>
            <ul>
              <li>Provide false or misleading information.</li>
              <li>Attempt unauthorized access to our systems.</li>
              <li>Use the Website for unlawful or fraudulent purposes.</li>
              <li>Upload malicious software or harmful content.</li>
              <li>Copy, reproduce, distribute, or misuse Website content without written permission.</li>
              <li>Interfere with the security or functionality of the Website.</li>
            </ul>
            <p>Failure to comply with these responsibilities may result in suspension or termination of your access to our services.</p>
          </div>

          <div className="policy-section">
            <h2>9. Intellectual Property Rights</h2>
            <p>All content available on the Poshak Kart Website, including but not limited to logos, trademarks, brand names, product images, graphics, designs, icons, text, videos, software, website layout, and other materials, is the exclusive property of Poshak Kart, JAI MAA SHARDA ENTERPRISES, or its respective licensors and is protected under applicable intellectual property laws.</p>
            <p>You may not reproduce, copy, modify, distribute, publish, transmit, display, or commercially exploit any content from our Website without obtaining our prior written permission. Unauthorized use of our intellectual property may result in legal action.</p>
          </div>

          <div className="policy-section">
            <h2>10. Promotional Offers &amp; Discount Coupons</h2>
            <p>From time to time, Poshak Kart may offer promotional discounts, coupon codes, gift vouchers, or special campaigns. Unless otherwise stated:</p>
            <ul>
              <li>Promotional offers are valid only for the specified period.</li>
              <li>Only one promotional offer may be applied per eligible order.</li>
              <li>Offers cannot be exchanged for cash.</li>
              <li>Promotional offers may not be combined with other discounts unless specifically permitted.</li>
            </ul>
            <p>We reserve the right to modify, suspend, or withdraw any promotional offer without prior notice. Any misuse of promotional offers may result in cancellation of the order or suspension of customer accounts.</p>
          </div>

          <div className="policy-section">
            <h2>11. User Reviews &amp; Feedback</h2>
            <p>Customers may voluntarily submit product reviews, ratings, suggestions, or feedback. By submitting such content, you confirm that the information provided is accurate and genuine, the content does not violate any applicable law or third-party rights, and the content is not abusive, defamatory, misleading, or offensive.</p>
            <p>By submitting reviews or feedback, you grant Poshak Kart a non-exclusive, royalty-free right to use, reproduce, publish, or display such content for business and promotional purposes. We reserve the right to remove any content that violates these Terms.</p>
          </div>

          <div className="policy-section">
            <h2>12. Limitation of Liability</h2>
            <p>To the maximum extent permitted under applicable law, Poshak Kart and JAI MAA SHARDA ENTERPRISES shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of use or inability to use the Website, temporary interruption of services, delay in order processing or delivery, product availability, technical failures beyond our reasonable control, or unauthorized access caused by third-party actions.</p>
            <p>Our maximum liability, if any, shall not exceed the amount actually paid by the customer for the relevant order.</p>
          </div>

          <div className="policy-section">
            <h2>13. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Poshak Kart, JAI MAA SHARDA ENTERPRISES, its employees, affiliates, representatives, service providers, and business partners against any claims, liabilities, losses, damages, expenses, or legal costs arising from your violation of these Terms, misuse of the Website, violation of applicable laws, or infringement of third-party rights.</p>
          </div>

          <div className="policy-section">
            <h2>14. Force Majeure</h2>
            <p>Poshak Kart shall not be held responsible for any delay or failure to perform its obligations due to events beyond its reasonable control, including but not limited to natural disasters, floods, earthquakes, fire, pandemic or epidemic, government restrictions, labour strikes, internet or telecommunications failures, transportation disruptions, or power outages. During such events, our obligations may be suspended for the duration of the disruption.</p>
          </div>

          <div className="policy-section">
            <h2>15. Governing Law &amp; Jurisdiction</h2>
            <p>These Terms &amp; Conditions shall be governed by and interpreted in accordance with the laws of India. Any dispute arising out of or relating to these Terms, the Website, or any transaction with Poshak Kart shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Patna, Bihar</strong>, unless otherwise required by applicable law.</p>
          </div>

          <div className="policy-section">
            <h2>16. Changes to These Terms</h2>
            <p>We may revise or update these Terms &amp; Conditions from time to time to reflect changes in our business operations, legal requirements, or services. Any revised version will be published on this page with the updated Last Updated date. Your continued use of our Website after such changes constitutes your acceptance of the revised Terms.</p>
          </div>

          <div className="policy-section policy-contact-box">
            <h2>17. Contact Information</h2>
            <p>For any questions, complaints, feedback, or queries regarding these Terms &amp; Conditions, please contact us:</p>
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

export default TermsPage;
