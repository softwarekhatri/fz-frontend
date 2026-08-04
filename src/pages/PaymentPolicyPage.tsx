import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const PaymentPolicyPage: React.FC = () => {
  return (
    <div className="policy-page page-wrapper">
      <div className="policy-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="policy-badge">Legal</span>
            <h1 className="policy-title">Payment Policy</h1>
            <p className="policy-brand">Poshak Kart (A Brand of JAI MAA SHARDA ENTERPRISES)</p>
            <p className="policy-effective">Effective Date: 22/06/2026</p>
          </motion.div>
        </div>
      </div>

      <div className="container policy-body">
        <motion.div className="policy-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <p className="policy-intro">
            Welcome to <strong>Poshak Kart</strong>. This Payment Policy explains the terms and conditions
            governing payments made on www.poshakkart.in. Our objective is to provide customers with a secure,
            transparent, and convenient payment experience while ensuring the safety of every transaction.
            By placing an order on our Website, you agree to this Payment Policy and all other applicable
            policies published on our Website.
          </p>

          <div className="policy-section">
            <h2>1. Accepted Payment Methods</h2>
            <p>To make shopping convenient, Poshak Kart may offer one or more of the following payment options, depending on availability:</p>
            <ul>
              <li>Unified Payments Interface (UPI)</li>
              <li>Credit Cards</li>
              <li>Debit Cards</li>
              <li>Net Banking</li>
              <li>Digital Wallets</li>
              <li>Cash on Delivery (COD) (where available)</li>
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
              <li>Order Confirmation</li>
              <li>Payment Confirmation</li>
              <li>Invoice or Payment Receipt</li>
              <li>Order Tracking Updates (after dispatch)</li>
            </ul>
            <p>If payment is unsuccessful, the order may not be processed until the payment is completed successfully.</p>
          </div>

          <div className="policy-section">
            <h2>4. Failed or Pending Transactions</h2>
            <p>Occasionally, payments may remain pending or fail due to reasons beyond our control, including banking network issues, UPI server delays, payment gateway interruptions, internet connectivity problems, incorrect payment details, or technical issues at the customer's bank.</p>
            <p>If your account is debited but the order is not confirmed, please contact our Customer Support with your payment reference number. We will coordinate with the payment gateway provider to verify the transaction and assist you in resolving the issue.</p>
          </div>

          <div className="policy-section">
            <h2>5. Pricing &amp; Taxes</h2>
            <p>All product prices displayed on the Website are in Indian Rupees (INR). Prices shown on the Website are generally inclusive or exclusive of applicable taxes as clearly indicated during checkout. Shipping charges, handling charges, or other applicable fees (if any) will be displayed before you complete your payment.</p>
          </div>

          <div className="policy-section">
            <h2>6. Payment Verification</h2>
            <p>To ensure the safety of our customers and prevent fraudulent transactions, Poshak Kart reserves the right to verify certain payments before processing an order. Where necessary, we may:</p>
            <ul>
              <li>Contact the customer for verification.</li>
              <li>Request additional information.</li>
              <li>Delay shipment until payment verification is completed.</li>
              <li>Cancel orders involving suspected unauthorized or fraudulent transactions.</li>
            </ul>
            <p>These measures help maintain a secure shopping environment for all customers.</p>
          </div>

          <div className="policy-section">
            <h2>7. Cash on Delivery (COD)</h2>
            <p>For the convenience of our customers, Cash on Delivery (COD) may be available for selected products and serviceable PIN Codes. Please note:</p>
            <ul>
              <li>COD availability depends on the delivery location, product category, and order value.</li>
              <li>Certain products or promotional offers may not be eligible for COD.</li>
              <li>Poshak Kart reserves the right to enable, disable, or restrict COD services without prior notice.</li>
              <li>Customers are requested to keep the exact payable amount ready, where possible, at the time of delivery.</li>
              <li>Repeated refusal of COD orders may result in temporary or permanent restriction of the COD payment option for future purchases.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>8. Refund of Payments</h2>
            <p>Approved refunds will be processed in accordance with our Refund &amp; Cancellation Policy. Generally:</p>
            <ul>
              <li>Refunds for prepaid orders will be initiated to the original payment method.</li>
              <li>Eligible refunds are normally processed within 5–7 business days after approval.</li>
              <li>For Cash on Delivery (COD) orders, refunds may be processed through Bank Transfer, UPI, or any other mutually agreed payment method after successful verification.</li>
            </ul>
            <p>The time taken for the refunded amount to reflect in your account depends on your bank or payment service provider and may vary accordingly.</p>
          </div>

          <div className="policy-section">
            <h2>9. Payment Security &amp; Customer Responsibility</h2>
            <p>While Poshak Kart uses secure payment infrastructure, customers also play an important role in protecting their financial information. Customers are advised to:</p>
            <ul>
              <li>Never share their OTP, UPI PIN, CVV, card details, or Internet Banking credentials with anyone.</li>
              <li>Ensure that payments are made only through the official Poshak Kart Website.</li>
              <li>Verify the payment confirmation before closing the payment page.</li>
              <li>Immediately report any suspected unauthorized transaction to their bank as well as our Customer Support Team.</li>
            </ul>
            <p>Poshak Kart shall not be responsible for losses arising from negligence, unauthorized sharing of payment credentials, phishing attacks, or fraudulent activities occurring outside our official payment systems.</p>
          </div>

          <div className="policy-section">
            <h2>10. Fraud Prevention</h2>
            <p>To maintain a safe and secure shopping environment, Poshak Kart continuously monitors transactions for suspicious or unusual activity. We reserve the right to verify customer identity before processing certain transactions, request additional verification documents where necessary, hold or cancel orders involving suspected fraudulent activity, and restrict future purchases or payment methods for customers found misusing our services.</p>
            <p>Where required, we may cooperate with banks, payment gateway providers, financial institutions, or law enforcement authorities in accordance with applicable laws.</p>
          </div>

          <div className="policy-section">
            <h2>11. Chargebacks &amp; Payment Disputes</h2>
            <p>If you experience any payment-related issue, we encourage you to contact our Customer Support Team before initiating a chargeback or payment dispute through your bank or payment service provider. We are committed to resolving genuine concerns fairly and promptly.</p>
            <p>Where a chargeback is found to be fraudulent, abusive, or unsupported by valid evidence, Poshak Kart reserves the right to contest the dispute with supporting transaction records, suspend or restrict customer accounts, and refuse future orders where permitted under applicable law.</p>
          </div>

          <div className="policy-section">
            <h2>12. Changes to this Payment Policy</h2>
            <p>Poshak Kart may revise or update this Payment Policy from time to time to reflect changes in payment methods, technology, legal requirements, or business operations. The updated version will become effective immediately upon publication on our Website. Customers are encouraged to review this Policy periodically to remain informed about any changes.</p>
          </div>

          <div className="policy-section policy-contact-box">
            <h2>13. Contact Us</h2>
            <p>If you have any questions regarding payments, payment failures, refunds, billing, or this Payment Policy, please contact us:</p>
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

export default PaymentPolicyPage;
