import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const ShippingPolicyPage: React.FC = () => {
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
            <h1 className="policy-title">Shipping & Delivery Policy</h1>
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
            At <strong>Poshak Kart</strong>, we are committed to delivering your orders safely, securely,
            and in a timely manner. This Shipping & Delivery Policy outlines the terms and conditions
            related to order processing, shipping, and delivery of products purchased through our website.
          </p>

          <div className="policy-section">
            <h2>1. Order Processing</h2>
            <ul>
              <li>All orders are processed and dispatched after successful order confirmation and payment verification.</li>
              <li>Orders are generally dispatched within <strong>24 to 48 working hours</strong> from the time of order placement.</li>
              <li>Orders placed on Sundays or public holidays will be processed on the next working day.</li>
              <li>During sale events, festive seasons, or high-order volumes, dispatch timelines may be slightly extended.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>2. Shipping Coverage</h2>
            <p>Poshak Kart currently delivers products across <strong>India</strong>. Delivery availability is subject to serviceability of the customer's PIN code by our courier partners.</p>
          </div>

          <div className="policy-section">
            <h2>3. Estimated Delivery Timeline</h2>
            <p>Estimated delivery timelines after dispatch are:</p>
            <ul>
              <li><strong>Metro Cities:</strong> 2 to 5 Business Days</li>
              <li><strong>Non-Metro Cities:</strong> 3 to 7 Business Days</li>
              <li><strong>Remote Locations:</strong> 5 to 10 Business Days</li>
            </ul>
            <p>Delivery timelines are estimates and may vary due to factors beyond our reasonable control, including weather conditions, natural calamities, public holidays, courier operational delays, or government restrictions.</p>
          </div>

          <div className="policy-section">
            <h2>4. Shipping Charges</h2>
            <ul>
              <li>Shipping charges, if applicable, will be displayed during checkout before payment confirmation.</li>
              <li>Poshak Kart may offer <strong>free shipping on selected products, promotional campaigns, or prepaid orders</strong>, as notified on the website from time to time.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. Order Tracking</h2>
            <p>Once your order has been shipped, you will receive an <strong>Email and/or SMS confirmation</strong> containing:</p>
            <ul>
              <li>Order Tracking Number</li>
              <li>Courier Partner Details</li>
              <li>Estimated Delivery Information</li>
            </ul>
            <p>Customers can track their orders using the tracking information provided.</p>
          </div>

          <div className="policy-section">
            <h2>6. Delivery Attempts</h2>
            <p>Our delivery partners generally make multiple delivery attempts before returning the package.</p>
            <p>In case delivery cannot be completed due to:</p>
            <ul>
              <li>Incorrect or incomplete address;</li>
              <li>Customer unavailability;</li>
              <li>Incorrect contact information;</li>
              <li>Refusal to accept the order;</li>
            </ul>
            <p>the package may be returned to our warehouse, and additional shipping charges may apply for re-dispatch.</p>
          </div>

          <div className="policy-section">
            <h2>7. Damaged or Tampered Packages</h2>
            <p>Customers are advised to inspect the package at the time of delivery. If the package appears damaged, opened, or tampered with, please refuse delivery and immediately contact our customer support team with relevant photographs and order details.</p>
          </div>

          <div className="policy-section">
            <h2>8. Delays Beyond Our Control</h2>
            <p>While we strive to ensure timely delivery, Poshak Kart shall not be held liable for delays caused by circumstances beyond our reasonable control, including but not limited to:</p>
            <ul>
              <li>Natural disasters;</li>
              <li>Floods or severe weather conditions;</li>
              <li>Government restrictions;</li>
              <li>Transportation disruptions;</li>
              <li>Strikes or unforeseen courier operational issues.</li>
            </ul>
          </div>

          <div className="policy-section policy-contact-box">
            <h2>9. Contact Us</h2>
            <p>For any shipping or delivery-related assistance, please contact:</p>
            <div className="policy-contact-grid">
              <div><span>Business Name</span><p>JAI MAA SHARDA ENTERPRISES</p></div>
              <div><span>Brand Name</span><p>Poshak Kart</p></div>
              <div><span>Registered Address</span><p>Near ICICI Building, East Ram Krishna Nagar, Bypass Road, Patna, Bihar – 800027, India</p></div>
              <div><span>GSTIN</span><p>10FEFPK9128P1Z4</p></div>
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

export default ShippingPolicyPage;
