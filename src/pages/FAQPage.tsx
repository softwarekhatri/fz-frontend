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
    a: 'Shopping with Poshak Kart is simple: Browse your favourite products, select the preferred size and colour, click Add to Cart or Buy Now, enter your shipping details, choose your preferred payment method, and complete the payment. You will receive an order confirmation once your order is successfully placed.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept UPI, Debit Cards, Credit Cards, Net Banking, Digital Wallets, and Cash on Delivery (COD) where available. Available payment methods may vary depending on your location and order.',
  },
  {
    q: 'Is my online payment secure?',
    a: 'Yes. All online payments are processed through authorized and secure payment gateway providers using industry-standard encryption technologies. Poshak Kart never stores your card number, CVV, UPI PIN, OTP, or internet banking credentials.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Estimated delivery timelines after dispatch: Metro Cities: 2–5 Business Days, Tier-2 & Tier-3 Cities: 3–7 Business Days, Remote Locations: 5–10 Business Days. These are estimates and may vary due to factors beyond our control.',
  },
  {
    q: 'How can I track my order?',
    a: 'Once your order is dispatched, you will receive an Email and/or SMS with your tracking number and courier partner details. You can use this information to track your order status.',
  },
  {
    q: 'Can I cancel my order?',
    a: 'You may request cancellation of an order before it has been packed or dispatched from our warehouse. Once an order has been dispatched, cancellation may not be possible. Please contact our Customer Support Team at support@poshakkart.in as soon as possible if you wish to cancel.',
  },
  {
    q: 'What is the return policy?',
    a: 'Customers may request a return within 7 days of delivery for eligible products — including wrong products delivered, damaged or defective products, or items significantly different from the description. Products must be unused, unwashed, and in original packaging with all tags intact.',
  },
  {
    q: 'How long does a refund take?',
    a: 'Once a return is approved and the product passes quality inspection, refunds are processed within 5–7 business days to the original payment method. COD refunds via bank transfer may take up to 7 business days after verification.',
  },
  {
    q: 'Do you offer size exchanges?',
    a: 'Yes, we offer size exchanges on eligible products, subject to stock availability. Exchange requests must be submitted within 7 days of delivery. Contact our support team at support@poshakkart.in with your order details.',
  },
  {
    q: 'What should I do if I receive a damaged product?',
    a: 'If you receive a damaged or defective product, please contact us at support@poshakkart.in within 7 days of delivery. Attach clear photographs of the product and packaging, along with your order number. Our team will arrange a return pickup and replacement or refund at no extra cost to you.',
  },
  {
    q: 'What are your customer support hours?',
    a: 'Our Customer Support Team is available Monday to Saturday, 10:00 AM – 7:00 PM (IST). We are closed on Sundays and public holidays. We aim to respond to all queries within 24–48 business hours.',
  },
  {
    q: 'How can I contact Poshak Kart?',
    a: 'You can reach us via email at support@poshakkart.in or through our Contact Us page. Our support team is available Monday to Saturday, 10:00 AM – 7:00 PM (IST).',
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="policy-page page-wrapper">
      <div className="policy-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="policy-badge">Support</span>
            <h1 className="policy-title">Frequently Asked Questions</h1>
            <p className="policy-brand">Poshak Kart (A Brand of JAI MAA SHARDA ENTERPRISES)</p>
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
            Find answers to the most commonly asked questions about shopping, payments, shipping, returns,
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
              <div><span>Email</span><p><a href="mailto:support@poshakkart.in">support@poshakkart.in</a></p></div>
              <div><span>Support Hours</span><p>Monday to Saturday: 10:00 AM – 7:00 PM (IST)</p></div>
              <div><span>Website</span><p><a href="https://www.poshakkart.in" target="_blank" rel="noopener noreferrer">www.poshakkart.in</a></p></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
