import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PrivacyPolicyPage.css';

const faqs = [
  {
    q: 'What is Poshak Kart?',
    a: 'Poshak Kart is an online fashion and lifestyle shopping platform operated by JAI MAA SHARDA ENTERPRISES. We offer a carefully selected range of quality fashion products at competitive prices with secure payment options and reliable delivery across India.',
  },
  {
    q: 'How can I place an order?',
    a: 'Shopping with Poshak Kart is simple: Browse your favourite products, select the preferred size, colour, and quantity, click Add to Cart or Buy Now, enter your shipping details, choose your preferred payment method, and complete the payment or confirm your Cash on Delivery order (if available). You will receive an order confirmation once your order is successfully placed.',
  },
  {
    q: 'Do I need an account to place an order?',
    a: 'Depending on the checkout options available, you may be able to shop as a guest or create an account for a faster and more personalized shopping experience, including order tracking and order history.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We may accept UPI, Debit Cards, Credit Cards, Net Banking, Digital Wallets, and Cash on Delivery (COD) where available. Other payment methods may also be displayed during checkout. Available payment methods may vary depending on your location and order.',
  },
  {
    q: 'Is my online payment secure?',
    a: 'Yes. All online payments are processed through authorized and secure payment gateway providers using industry-standard encryption technologies. Poshak Kart never stores your card number, CVV, UPI PIN, OTP, or internet banking credentials.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Estimated delivery timelines are: Metro Cities: 2–5 Business Days, Tier-2 & Tier-3 Cities: 3–7 Business Days, Remote Locations: 5–10 Business Days. Actual delivery timelines may vary depending on courier operations and your delivery location.',
  },
  {
    q: 'How can I track my order?',
    a: 'Once your order has been dispatched, you will receive tracking details via Email, SMS, or WhatsApp (where applicable). You can use the tracking link or tracking number to monitor the status of your shipment.',
  },
  {
    q: 'Can I cancel my order?',
    a: 'Yes. Orders may generally be cancelled before they are packed or dispatched. Once an order has been shipped, cancellation may not be possible. Please refer to our Refund & Cancellation Policy for detailed information.',
  },
  {
    q: 'Can I return or exchange a product?',
    a: 'Yes. Eligible products may be returned or exchanged within the applicable return period, subject to our Return & Exchange Policy. Products must generally be unused, unwashed, and returned with original tags and packaging.',
  },
  {
    q: 'When will I receive my refund?',
    a: 'Approved refunds are normally processed within 5–7 business days after successful verification. The time taken for the amount to reflect in your account depends on your bank or payment service provider.',
  },
  {
    q: 'What should I do if I receive a damaged or incorrect product?',
    a: 'Please contact our Customer Support within 48 hours of delivery. To help us resolve your request quickly, you may be asked to provide your Order Number, Product Images, Packaging Images, Shipping Label Images, and an Unboxing Video (recommended).',
  },
  {
    q: 'Are shipping charges applicable?',
    a: 'Shipping charges, if any, will be displayed during checkout before payment. From time to time, Poshak Kart may also offer free shipping on selected products or minimum order values during promotional campaigns.',
  },
  {
    q: 'Can I change my delivery address after placing an order?',
    a: 'Address changes may be possible only before your order has been packed or dispatched. Please contact our Customer Support immediately if you need to update your delivery information.',
  },
  {
    q: 'Are all products genuine?',
    a: 'Yes. We make every effort to provide quality products that match the descriptions and images displayed on our Website. However, minor variations in colour or appearance may occur due to lighting conditions, photography, or screen settings.',
  },
  {
    q: 'How can I contact Customer Support?',
    a: 'You can contact us by email at support@poshakkart.in. Our Customer Support Team is available Monday to Saturday, 10:00 AM – 7:00 PM (IST). We are closed on Sundays and Public Holidays. Our team aims to respond to genuine customer queries within 24–48 business hours.',
  },
  {
    q: 'Can Poshak Kart update this FAQ?',
    a: 'Yes. Poshak Kart reserves the right to update or modify this FAQ at any time to reflect changes in our products, services, business operations, or applicable legal requirements. The latest version will always be available on our Website.',
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="policy-page page-wrapper">
      <div className="policy-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="policy-badge">Support</span>
            <h1 className="policy-title">Frequently Asked Questions</h1>
            <p className="policy-brand">Poshak Kart (A Brand of JAI MAA SHARDA ENTERPRISES)</p>
          </motion.div>
        </div>
      </div>

      <div className="container policy-body">
        <motion.div className="policy-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <p className="policy-intro">
            Find answers to the most commonly asked questions about shopping, payments, shipping, returns, refunds,
            and customer support. If you don't find the answer you're looking for, feel free to{' '}
            <a href="/contact">contact our Customer Support Team</a>.
          </p>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button
                  className={`faq-question ${openIndex === idx ? 'open' : ''}`}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-chevron">{openIndex === idx ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="policy-section policy-contact-box" style={{ marginTop: '2rem' }}>
            <h2>Still Have Questions?</h2>
            <p>Our Customer Support Team is happy to help.</p>
            <div className="policy-contact-grid">
              <div><span>Business Name</span><p>JAI MAA SHARDA ENTERPRISES</p></div>
              <div><span>Brand Name</span><p>Poshak Kart</p></div>
              <div><span>Email</span><p><a href="mailto:support@poshakkart.in">support@poshakkart.in</a></p></div>
              <div><span>Support Hours</span><p>Monday – Saturday: 10:00 AM – 7:00 PM (IST)</p></div>
              <div><span>Website</span><p><a href="https://www.poshakkart.in" target="_blank" rel="noopener noreferrer">www.poshakkart.in</a></p></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
