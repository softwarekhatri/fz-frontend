import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const RefundPolicyPage: React.FC = () => {
  return (
    <div className="policy-page page-wrapper">
      <div className="policy-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="policy-badge">Legal</span>
            <h1 className="policy-title">Refund &amp; Cancellation Policy</h1>
            <p className="policy-brand">Poshak Kart (A Brand of JAI MAA SHARDA ENTERPRISES)</p>
            <p className="policy-effective">Effective Date: 22/06/2026</p>
          </motion.div>
        </div>
      </div>

      <div className="container policy-body">
        <motion.div className="policy-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <p className="policy-intro">
            At <strong>Poshak Kart</strong>, customer satisfaction is one of our highest priorities. We understand
            that there may be situations where you need to cancel an order, request a refund, or report an issue
            with a purchased product. This Refund &amp; Cancellation Policy explains the conditions, procedures,
            and timelines applicable to cancellations, refunds, and related requests made through www.poshakkart.in.
          </p>

          <div className="policy-section">
            <h2>1. Order Cancellation</h2>
            <p>Customers may request cancellation of an order before it has been packed or dispatched from our warehouse. Once an order has been packed, shipped, or handed over to our courier partner, cancellation requests may no longer be accepted.</p>
            <p>Poshak Kart also reserves the right to cancel any order under circumstances including, but not limited to:</p>
            <ul>
              <li>Product becoming unavailable.</li>
              <li>Pricing or technical errors on the Website.</li>
              <li>Payment authorization failure.</li>
              <li>Suspected fraudulent or unauthorized transactions.</li>
              <li>Incomplete or incorrect customer information.</li>
              <li>Compliance with legal or regulatory requirements.</li>
            </ul>
            <p>If an order is cancelled by Poshak Kart after successful payment, the eligible refund will be processed to the original payment method in accordance with this Policy.</p>
          </div>

          <div className="policy-section">
            <h2>2. Refund Eligibility</h2>
            <p>Refunds may be approved under the following circumstances:</p>
            <ul>
              <li>The order is cancelled before dispatch.</li>
              <li>The product delivered is damaged during transit.</li>
              <li>A wrong product has been delivered.</li>
              <li>The product has a verified manufacturing defect.</li>
              <li>The order cannot be fulfilled due to product unavailability.</li>
              <li>The shipment is lost during transit and confirmed by the courier partner.</li>
            </ul>
            <p>All refund requests are subject to verification and approval by our support team.</p>
          </div>

          <div className="policy-section">
            <h2>3. Non-Refundable Situations</h2>
            <p>Refunds may not be approved in situations including, but not limited to:</p>
            <ul>
              <li>Change of mind after successful delivery.</li>
              <li>Incorrect size or colour selected by the customer where accurate product information was available.</li>
              <li>Minor colour variations caused by screen or lighting differences.</li>
              <li>Damage caused after delivery due to improper use, washing, or handling.</li>
              <li>Products returned without original tags, packaging, or accessories.</li>
              <li>Products found to be used, altered, or damaged after delivery.</li>
            </ul>
            <p>Nothing in this section shall limit any rights available to consumers under applicable law.</p>
          </div>

          <div className="policy-section">
            <h2>4. Refund Process</h2>
            <p>If your refund request is approved:</p>
            <ul>
              <li>The refund will normally be initiated within 5–7 business days after successful verification.</li>
              <li>Refunds for prepaid orders will generally be credited to the original payment method.</li>
              <li>For eligible Cash on Delivery (COD) orders, refunds may be processed through bank transfer, UPI, or any other mutually agreed payment method after verification.</li>
              <li>The actual time required for the refunded amount to reflect in your account depends on your bank or payment service provider and is beyond our direct control.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. Return Required for Refund</h2>
            <p>In cases where a refund is linked to a product return, the refund will generally be processed only after:</p>
            <ul>
              <li>The returned product is received by our team.</li>
              <li>The product successfully passes our quality inspection.</li>
              <li>The return request satisfies the eligibility conditions specified in our Return &amp; Exchange Policy.</li>
            </ul>
            <p>Products that fail quality inspection may not qualify for a refund.</p>
          </div>

          <div className="policy-section">
            <h2>6. Shipping Charges</h2>
            <p>Shipping charges, if applicable, are generally non-refundable unless:</p>
            <ul>
              <li>An incorrect product was delivered.</li>
              <li>The product was damaged before delivery.</li>
              <li>The order could not be fulfilled due to an error on the part of Poshak Kart.</li>
            </ul>
            <p>Any applicable refund of shipping charges will be determined after reviewing the specific circumstances of the order.</p>
          </div>

          <div className="policy-section">
            <h2>7. Failed Delivery &amp; Cancelled Shipments</h2>
            <p>If an order cannot be delivered due to reasons attributable to the customer, including but not limited to incorrect or incomplete delivery address, incorrect contact number, customer unavailable after multiple delivery attempts, or refusal to accept the shipment without a valid reason, the order may be returned to our warehouse.</p>
            <p>In such cases, Poshak Kart reserves the right to:</p>
            <ul>
              <li>Cancel the order.</li>
              <li>Deduct applicable shipping or handling charges (where permitted).</li>
              <li>Re-dispatch the order upon customer request after payment of any additional shipping charges, if applicable.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>8. Refund Rejection</h2>
            <p>A refund request may be declined if:</p>
            <ul>
              <li>The request is submitted after the applicable return or refund period.</li>
              <li>The returned product is found to be used, washed, altered, damaged, or incomplete.</li>
              <li>Original tags, labels, packaging, or accessories are missing.</li>
              <li>The issue reported by the customer cannot be verified during inspection.</li>
              <li>False, misleading, or fraudulent information has been provided.</li>
              <li>The product falls under the non-refundable category as mentioned in our policies.</li>
            </ul>
            <p>Where a refund request is rejected, our Customer Support team will communicate the reason for such decision to the customer.</p>
          </div>

          <div className="policy-section">
            <h2>9. Fraud Prevention</h2>
            <p>To maintain a safe and trustworthy shopping environment, Poshak Kart actively monitors transactions and refund requests for suspicious or fraudulent activity. We reserve the right to refuse refunds, cancel orders, suspend customer accounts, or conduct additional verification where we reasonably believe that fraudulent transactions have been attempted, multiple abusive refund requests have been submitted, false claims have been made, or payment fraud is suspected.</p>
            <p>Where required, we may cooperate with payment gateway providers, financial institutions, or law enforcement authorities in accordance with applicable law.</p>
          </div>

          <div className="policy-section">
            <h2>10. Chargebacks &amp; Payment Disputes</h2>
            <p>Customers are encouraged to contact Poshak Kart before initiating a payment dispute or chargeback with their bank or payment service provider. We are committed to resolving genuine concerns fairly and promptly.</p>
            <p>Where a chargeback is initiated without prior communication or is found to be fraudulent or unjustified, we reserve the right to contest the chargeback with supporting documentation, suspend future purchases or customer accounts, and take appropriate action as permitted under applicable law.</p>
          </div>

          <div className="policy-section">
            <h2>11. Force Majeure</h2>
            <p>Poshak Kart shall not be liable for any delay or inability to process cancellations or refunds arising from circumstances beyond our reasonable control, including but not limited to natural disasters, floods, earthquakes, fire, pandemic or epidemic, government restrictions or regulatory actions, banking or payment network failures, internet or communication disruptions, labour strikes or transportation interruptions, or other force majeure events.</p>
            <p>During such events, refunds or cancellations may take longer than the usual processing time.</p>
          </div>

          <div className="policy-section">
            <h2>12. Changes to this Policy</h2>
            <p>We may revise or update this Refund &amp; Cancellation Policy from time to time to reflect changes in our business operations, legal requirements, or customer service practices. The revised version will become effective immediately upon publication on our Website. Customers are encouraged to review this Policy periodically to stay informed about any updates.</p>
          </div>

          <div className="policy-section policy-contact-box">
            <h2>13. Contact Us</h2>
            <p>If you have any questions regarding cancellations, refunds, payments, or this Policy, please contact us:</p>
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

export default RefundPolicyPage;
