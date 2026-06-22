import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
// @ts-ignore
import "./ContactPage.css";

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    toast.success(
      "Your message has been sent! We'll respond within 24–48 business hours.",
    );
    setForm({ name: "", email: "", subject: "", message: "" });
    setSubmitting(false);
  };

  return (
    <div className="contact-page page-wrapper">
      <div className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="contact-badge">Get in Touch</span>
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-sub">
              Poshak Kart — A Brand of JAI MAA SHARDA ENTERPRISES
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container contact-body">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2>We're Here to Help</h2>
            <p>
              At Poshak Kart, we value our customers and are committed to
              providing prompt assistance and a seamless shopping experience.
            </p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon">📧</div>
                <div>
                  <h4>Email Support</h4>
                  <a href="mailto:support@poshakkart.in">
                    support@poshakkart.in
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">🕐</div>
                <div>
                  <h4>Support Hours</h4>
                  <p>Monday to Saturday: 10:00 AM – 7:00 PM (IST)</p>
                  <p>Sunday &amp; Public Holidays: Closed</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div>
                  <h4>Registered Office</h4>
                  <p>
                    Near ICICI Building, East Ram Krishna Nagar,
                    <br />
                    Bypass Road, Patna, Bihar – 800027, India
                  </p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">🌐</div>
                <div>
                  <h4>Website</h4>
                  <a
                    href="https://www.poshakkart.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.poshakkart.in
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-assist">
              <h4>We Can Assist You With</h4>
              <ul>
                {[
                  "Order Status and Tracking",
                  "Payments and Billing Queries",
                  "Shipping and Delivery Information",
                  "Returns, Refunds, and Cancellations",
                  "Product Information and Availability",
                  "Account-Related Assistance",
                ].map((item) => (
                  <li key={item}>
                    <span>✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-response-time">
              <p>
                Our customer support team strives to respond to all queries
                within <strong>24 to 48 business hours</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2>Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    disabled={submitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    disabled={submitting}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  disabled={submitting}
                >
                  <option value="">Select a topic</option>
                  <option value="order">Order Status / Tracking</option>
                  <option value="payment">Payments &amp; Billing</option>
                  <option value="shipping">Shipping &amp; Delivery</option>
                  <option value="returns">Returns &amp; Refunds</option>
                  <option value="product">Product Inquiry</option>
                  <option value="account">Account Assistance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your query in detail..."
                  rows={5}
                  required
                  disabled={submitting}
                />
              </div>
              <button
                type="submit"
                className="contact-submit-btn"
                disabled={submitting}
              >
                {submitting ? (
                  <span className="contact-spinner" />
                ) : (
                  <>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
