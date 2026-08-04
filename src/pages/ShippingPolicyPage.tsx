import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const ShippingPolicyPage: React.FC = () => {
  return (
    <div className="policy-page page-wrapper">
      <div className="policy-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="policy-badge">Legal</span>
            <h1 className="policy-title">Shipping &amp; Delivery Policy</h1>
            <p className="policy-brand">Poshak Kart (A Brand of JAI MAA SHARDA ENTERPRISES)</p>
            <p className="policy-effective">Effective Date: 22/06/2026</p>
          </motion.div>
        </div>
      </div>

      <div className="container policy-body">
        <motion.div className="policy-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <p className="policy-intro">
            Thank you for shopping with <strong>Poshak Kart</strong>. We are committed to delivering your orders
            safely, efficiently, and within the estimated delivery timelines. This Shipping &amp; Delivery Policy
            explains how we process, dispatch, ship, and deliver orders placed through www.poshakkart.in.
          </p>

          <div className="policy-section">
            <h2>1. Order Processing</h2>
            <p>Once your order is successfully placed and payment is confirmed (or the order is confirmed in case of eligible Cash on Delivery orders), our team begins processing it for dispatch. Orders are generally processed within <strong>1–2 business days</strong>, excluding Sundays, public holidays, and officially declared holidays.</p>
            <p>During festive seasons, promotional campaigns, sale events, or periods of exceptionally high order volume, order processing may take slightly longer than usual. We appreciate your patience during such periods.</p>
          </div>

          <div className="policy-section">
            <h2>2. Shipping Coverage</h2>
            <p>Currently, Poshak Kart delivers products to most serviceable locations across India through trusted courier and logistics partners. Delivery availability depends on the serviceability of the customer's PIN Code.</p>
            <p>At present, we do not offer international shipping unless specifically announced on our Website.</p>
          </div>

          <div className="policy-section">
            <h2>3. Estimated Delivery Timeline</h2>
            <p>Estimated delivery timelines are provided only for customer convenience and may vary depending on your location and courier partner operations.</p>
            <ul>
              <li><strong>Metro Cities:</strong> 2–5 Business Days</li>
              <li><strong>Tier-2 &amp; Tier-3 Cities:</strong> 3–7 Business Days</li>
              <li><strong>Remote or Rural Locations:</strong> 5–10 Business Days</li>
            </ul>
            <p>These timelines are estimates and should not be considered guaranteed delivery commitments.</p>
          </div>

          <div className="policy-section">
            <h2>4. Shipping Charges</h2>
            <p>Shipping charges, if applicable, will be clearly displayed during the checkout process before you complete your payment. From time to time, Poshak Kart may offer:</p>
            <ul>
              <li>Free Shipping Offers</li>
              <li>Limited-Time Shipping Promotions</li>
              <li>Free Delivery on Minimum Order Value</li>
              <li>Festival or Seasonal Shipping Campaigns</li>
            </ul>
            <p>Such offers will be governed by their respective promotional terms and conditions.</p>
          </div>

          <div className="policy-section">
            <h2>5. Order Tracking</h2>
            <p>Once your order has been dispatched, you will receive a shipment confirmation through Email, SMS, or WhatsApp (where applicable). The communication may include:</p>
            <ul>
              <li>Courier Partner Name</li>
              <li>Tracking Number</li>
              <li>Tracking Link</li>
              <li>Estimated Delivery Date</li>
            </ul>
            <p>Customers can use the tracking details to monitor the delivery status of their shipment.</p>
          </div>

          <div className="policy-section">
            <h2>6. Delivery Attempts</h2>
            <p>Our courier partners generally make multiple delivery attempts before returning a shipment. If delivery cannot be completed due to incorrect delivery address, incorrect mobile number, customer unavailable, or refusal to accept delivery, the shipment may be returned to our warehouse.</p>
            <p>Additional shipping charges may apply if re-dispatch is requested after the order is returned.</p>
          </div>

          <div className="policy-section">
            <h2>7. Customer Responsibility</h2>
            <p>Customers are responsible for providing complete and accurate shipping information while placing an order. This includes:</p>
            <ul>
              <li>Correct Recipient Name</li>
              <li>Complete Delivery Address</li>
              <li>Valid Mobile Number</li>
              <li>Accurate PIN Code</li>
            </ul>
            <p>Poshak Kart shall not be responsible for delays, failed deliveries, or additional shipping costs resulting from incorrect or incomplete information provided by the customer.</p>
          </div>

          <div className="policy-section">
            <h2>8. Delivery Delays</h2>
            <p>While Poshak Kart makes every reasonable effort to deliver orders within the estimated delivery timeline, certain circumstances beyond our control may result in delays. Delivery may be affected due to adverse weather conditions, public holidays or regional restrictions, natural disasters or other force majeure events, transportation or logistics disruptions, government regulations or emergency situations, or unexpected courier operational delays.</p>
            <p>Such delays shall not automatically entitle the customer to compensation or cancellation unless otherwise required under applicable law.</p>
          </div>

          <div className="policy-section">
            <h2>9. Damaged, Open, or Incorrect Deliveries</h2>
            <p>We encourage customers to inspect the package carefully at the time of delivery. If you receive a damaged package, a tampered or opened parcel, an incorrect product, or an item with visible manufacturing defects, please contact our Customer Support within <strong>48 hours</strong> of delivery.</p>
            <p>To help us investigate and resolve your concern quickly, you may be requested to provide:</p>
            <ul>
              <li>Your Order Number</li>
              <li>Clear photographs of the product</li>
              <li>Images of the outer packaging and shipping label</li>
              <li>An unboxing video (recommended)</li>
            </ul>
            <p>Failure to report such issues within the specified timeframe may affect the eligibility of your claim.</p>
          </div>

          <div className="policy-section">
            <h2>10. Partial Shipments</h2>
            <p>If your order contains multiple products, they may be dispatched separately depending on product availability, warehouse operations, or courier logistics. You will not be charged any additional shipping fee for approved split shipments unless specifically communicated during the checkout process.</p>
          </div>

          <div className="policy-section">
            <h2>11. Failed Delivery &amp; Returned Shipments</h2>
            <p>If an order is returned to us because the customer was unavailable after repeated delivery attempts, the delivery address or contact information was incorrect, the shipment was refused without a valid reason, or delivery could not be completed due to customer-related issues, we reserve the right to cancel the order or arrange re-dispatch after confirmation from the customer.</p>
            <p>Additional shipping charges, if applicable, must be paid before re-shipment. Refunds for returned orders, where applicable, shall be processed in accordance with our Refund &amp; Cancellation Policy.</p>
          </div>

          <div className="policy-section">
            <h2>12. Transfer of Risk &amp; Ownership</h2>
            <p>Ownership of the product transfers to the customer only after full payment (where applicable) and successful delivery of the order to the shipping address provided during checkout. The risk of loss or damage passes to the customer upon successful delivery as confirmed by the courier partner.</p>
          </div>

          <div className="policy-section">
            <h2>13. Force Majeure</h2>
            <p>Poshak Kart shall not be held liable for any delay or failure in shipping or delivery arising from circumstances beyond our reasonable control, including but not limited to floods, earthquakes, fire, pandemic or epidemic, government restrictions, internet or communication failures, transportation disruptions, labour strikes, war, civil disturbances, or other force majeure events. During such events, delivery timelines may be extended until normal operations resume.</p>
          </div>

          <div className="policy-section">
            <h2>14. Changes to this Shipping &amp; Delivery Policy</h2>
            <p>We reserve the right to modify, update, or revise this Shipping &amp; Delivery Policy at any time to reflect changes in our business operations, legal requirements, or delivery processes. The revised version will become effective immediately upon publication on our Website. Customers are encouraged to review this Policy periodically for any updates.</p>
          </div>

          <div className="policy-section policy-contact-box">
            <h2>15. Contact Us</h2>
            <p>If you have any questions regarding shipping, delivery, order tracking, or dispatch status, please contact us:</p>
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

export default ShippingPolicyPage;
