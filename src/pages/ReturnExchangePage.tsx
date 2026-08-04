import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const ReturnExchangePage: React.FC = () => {
  return (
    <div className="policy-page page-wrapper">
      <div className="policy-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="policy-badge">Legal</span>
            <h1 className="policy-title">Return &amp; Exchange Policy</h1>
            <p className="policy-brand">Poshak Kart (A Brand of JAI MAA SHARDA ENTERPRISES)</p>
            <p className="policy-effective">Effective Date: 22/06/2026</p>
          </motion.div>
        </div>
      </div>

      <div className="container policy-body">
        <motion.div className="policy-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <p className="policy-intro">
            At <strong>Poshak Kart</strong>, customer satisfaction is at the heart of everything we do. We strive
            to deliver quality fashion products that meet your expectations. If you receive a product that is
            damaged, defective, incorrect, or does not meet the conditions described on our Website, we are
            committed to providing a fair and transparent return and exchange process.
          </p>

          <div className="policy-section">
            <h2>1. Return Eligibility</h2>
            <p>Customers may request a return for eligible products within <strong>7 days</strong> from the date of delivery, subject to the conditions mentioned in this Policy. A product may qualify for return if:</p>
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
            <p>Exchange requests should normally be submitted within <strong>7 days</strong> from the date of delivery. If the requested size, colour, or product is unavailable, we may offer a suitable alternative, store credit (where applicable), or a refund in accordance with our Refund &amp; Cancellation Policy.</p>
          </div>

          <div className="policy-section">
            <h2>3. Products Not Eligible for Return or Exchange</h2>
            <p>For hygiene, safety, or promotional reasons, certain products may not be eligible for return or exchange unless required by applicable law. These may include:</p>
            <ul>
              <li>Innerwear</li>
              <li>Socks</li>
              <li>Personal Care Products</li>
              <li>Gift Cards</li>
              <li>Customized or Personalized Products</li>
              <li>Products marked as "Final Sale", "Non-Returnable", or "Non-Exchangeable"</li>
            </ul>
            <p>Please review the product description carefully before placing your order.</p>
          </div>

          <div className="policy-section">
            <h2>4. Return &amp; Exchange Process</h2>
            <p>To initiate a return or exchange request, customers should contact our Customer Support within the applicable return period. You may be requested to provide:</p>
            <ul>
              <li>Order Number</li>
              <li>Registered Mobile Number</li>
              <li>Product Images</li>
              <li>Packaging Images</li>
              <li>Shipping Label Images</li>
              <li>Unboxing Video (recommended for damaged or incorrect products)</li>
            </ul>
            <p>After reviewing your request, our support team will guide you through the next steps. Where available, a reverse pickup may be arranged. If pickup service is unavailable in your area, you may be requested to securely self-ship the product to the address communicated by our support team.</p>
          </div>

          <div className="policy-section">
            <h2>5. Product Inspection</h2>
            <p>Every returned product undergoes a quality inspection before a return or exchange is approved. The inspection helps us verify:</p>
            <ul>
              <li>Product condition</li>
              <li>Manufacturing defects</li>
              <li>Original tags and packaging</li>
              <li>Product authenticity</li>
              <li>Reported issue</li>
            </ul>
            <p>If the returned product does not meet the eligibility conditions mentioned in this Policy, the return or exchange request may be declined.</p>
          </div>

          <div className="policy-section">
            <h2>6. Return Shipping</h2>
            <p>Where the return is approved due to an error on the part of Poshak Kart, such as delivery of a wrong, damaged, or defective product, return shipping charges will generally be borne by us.</p>
            <p>Where the return is requested for reasons not attributable to Poshak Kart, return shipping charges, if applicable, may be the responsibility of the customer.</p>
          </div>

          <div className="policy-section">
            <h2>7. Damaged, Defective, or Incorrect Products</h2>
            <p>We recommend that customers inspect their order immediately upon delivery. If you receive a damaged product, a defective product, a wrong item, a missing item, or a product that is significantly different from what was ordered, please notify our Customer Support within <strong>48 hours</strong> of delivery.</p>
            <p>To help us resolve your concern efficiently, you may be requested to provide:</p>
            <ul>
              <li>Order Number</li>
              <li>Clear photographs of the product</li>
              <li>Images of the outer packaging</li>
              <li>Shipping label images</li>
              <li>An unboxing video (recommended)</li>
            </ul>
            <p>Failure to report such issues within the specified period may affect the eligibility of your claim.</p>
          </div>

          <div className="policy-section">
            <h2>8. Exchange Availability</h2>
            <p>All exchanges are subject to product availability at the time your request is reviewed. If the requested size, colour, or product is unavailable, Poshak Kart may, at its discretion:</p>
            <ul>
              <li>Offer an alternative size or colour.</li>
              <li>Provide a similar product of equal value (subject to your approval).</li>
              <li>Process a refund in accordance with our Refund &amp; Cancellation Policy.</li>
            </ul>
            <p>Exchange requests are processed only after the returned product successfully passes our quality inspection.</p>
          </div>

          <div className="policy-section">
            <h2>9. Return or Exchange Rejection</h2>
            <p>A return or exchange request may be declined if:</p>
            <ul>
              <li>The request is submitted after the eligible return period.</li>
              <li>The product has been used, worn, washed, altered, or damaged after delivery.</li>
              <li>Original tags, labels, packaging, or accessories are missing.</li>
              <li>The product fails our quality inspection.</li>
              <li>The claim cannot be verified based on the information provided.</li>
              <li>False or misleading information has been submitted.</li>
            </ul>
            <p>Where a request is rejected, our Customer Support team will communicate the reason to the customer.</p>
          </div>

          <div className="policy-section">
            <h2>10. Fraud Prevention</h2>
            <p>To protect our customers and business from fraudulent activities, Poshak Kart reserves the right to verify return and exchange requests. We may reject a request where we reasonably believe that false claims have been submitted, returned products have been intentionally damaged, multiple abusive return requests have been made, promotional offers have been misused, or fraudulent transactions are suspected.</p>
            <p>Where required, we may cooperate with payment gateway providers, courier partners, and law enforcement authorities in accordance with applicable law.</p>
          </div>

          <div className="policy-section">
            <h2>11. Customer Responsibilities</h2>
            <p>Customers are expected to:</p>
            <ul>
              <li>Carefully review the product description, size chart, and specifications before placing an order.</li>
              <li>Keep the original invoice and product packaging until the return or exchange process is completed.</li>
              <li>Ensure that returned products are packed securely to prevent damage during transit.</li>
              <li>Provide accurate information while submitting a return or exchange request.</li>
            </ul>
            <p>Failure to comply with these responsibilities may affect the processing of your request.</p>
          </div>

          <div className="policy-section">
            <h2>12. Force Majeure</h2>
            <p>Poshak Kart shall not be held liable for delays or inability to process returns or exchanges due to circumstances beyond our reasonable control, including but not limited to natural disasters, floods, earthquakes, fire, pandemic or epidemic, government restrictions, transportation disruptions, internet or communication failures, labour strikes, or other force majeure events. During such situations, processing timelines may be extended until normal business operations resume.</p>
          </div>

          <div className="policy-section">
            <h2>13. Changes to this Policy</h2>
            <p>We may update or revise this Return &amp; Exchange Policy from time to time to reflect changes in our business practices, operational requirements, or applicable laws. The revised Policy will become effective immediately upon being published on our Website. Customers are encouraged to review this page periodically to stay informed about any updates.</p>
          </div>

          <div className="policy-section policy-contact-box">
            <h2>14. Contact Us</h2>
            <p>If you have any questions regarding returns, exchanges, product quality, or this Policy, please contact us:</p>
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

export default ReturnExchangePage;
