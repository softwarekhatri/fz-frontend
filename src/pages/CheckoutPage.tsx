import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { orderAPI } from '../services/api';
import { useCart } from '../context/CartContext';
import { ShippingAddress } from '../types';
import { formatPrice } from '../utils/helpers';
import './CheckoutPage.css';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Odisha', 'Punjab', 'Rajasthan', 'Tamil Nadu',
  'Telangana', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
];

type Step = 1 | 2 | 3;

const CheckoutPage: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [address, setAddress] = useState<ShippingAddress>({
    fullName: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
  });
  const [errors, setErrors] = useState<Partial<ShippingAddress>>({});
  const [isPlacing, setIsPlacing] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const validate = (): boolean => {
    const newErrors: Partial<ShippingAddress> = {};
    if (!address.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!address.phone.trim() || !/^\d{10}$/.test(address.phone)) newErrors.phone = 'Valid 10-digit phone required';
    if (!address.addressLine1.trim()) newErrors.addressLine1 = 'Address is required';
    if (!address.city.trim()) newErrors.city = 'City is required';
    if (!address.state.trim()) newErrors.state = 'State is required';
    if (!address.pincode.trim() || !/^\d{6}$/.test(address.pincode)) newErrors.pincode = 'Valid 6-digit pincode required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFieldChange = (field: keyof ShippingAddress, value: string) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleContinueToReview = () => {
    if (validate()) setStep(2);
  };

  const handlePlaceOrder = async () => {
    setIsPlacing(true);
    try {
      const res = await orderAPI.createOrder({
        shippingAddress: address,
        paymentMethod: 'COD',
      });
      const order = res.data.order || res.data;
      setOrderNumber(order.orderNumber || order._id);
      await clearCart();
      setStep(3);
      toast.success('Order placed successfully! 🎉');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Failed to place order');
    } finally {
      setIsPlacing(false);
    }
  };

  const subtotal = cart?.totalAmount || 0;
  const delivery = subtotal >= 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + tax;

  const stepLabels = ['Address', 'Review', 'Confirm'];

  return (
    <div className="checkout-page page-wrapper">
      <div className="container">
        {/* Step Indicator */}
        <div className="checkout-steps">
          {stepLabels.map((label, i) => {
            const num = (i + 1) as Step;
            const isCompleted = step > num;
            const isActive = step === num;
            return (
              <React.Fragment key={label}>
                <div className={`step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                  <div className="step-circle">
                    {isCompleted ? (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : num}
                  </div>
                  <span className="step-label">{label}</span>
                </div>
                {i < stepLabels.length - 1 && (
                  <div className={`step-connector ${step > num ? 'filled' : ''}`} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {step < 3 && (
          <div className="checkout-layout">
            {/* Main Content */}
            <div className="checkout-main">
              <AnimatePresence mode="wait">
                {/* ─── Step 1: Address ─────────────────────────── */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="checkout-card"
                  >
                    <h2 className="checkout-card-title">Shipping Address</h2>
                    <div className="checkout-form">
                      <div className="form-row-2">
                        <div className="form-group">
                          <label>Full Name *</label>
                          <input
                            type="text"
                            value={address.fullName}
                            onChange={(e) => handleFieldChange('fullName', e.target.value)}
                            placeholder="Your full name"
                            className={errors.fullName ? 'error' : ''}
                          />
                          {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
                        </div>
                        <div className="form-group">
                          <label>Phone Number *</label>
                          <input
                            type="tel"
                            value={address.phone}
                            onChange={(e) => handleFieldChange('phone', e.target.value.replace(/\D/g, ''))}
                            placeholder="10-digit mobile number"
                            maxLength={10}
                            className={errors.phone ? 'error' : ''}
                          />
                          {errors.phone && <span className="error-msg">{errors.phone}</span>}
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Address Line 1 *</label>
                        <input
                          type="text"
                          value={address.addressLine1}
                          onChange={(e) => handleFieldChange('addressLine1', e.target.value)}
                          placeholder="House / Flat / Floor / Street"
                          className={errors.addressLine1 ? 'error' : ''}
                        />
                        {errors.addressLine1 && <span className="error-msg">{errors.addressLine1}</span>}
                      </div>

                      <div className="form-group">
                        <label>Address Line 2 (Optional)</label>
                        <input
                          type="text"
                          value={address.addressLine2}
                          onChange={(e) => handleFieldChange('addressLine2', e.target.value)}
                          placeholder="Landmark, Area, Colony"
                        />
                      </div>

                      <div className="form-row-3">
                        <div className="form-group">
                          <label>City *</label>
                          <input
                            type="text"
                            value={address.city}
                            onChange={(e) => handleFieldChange('city', e.target.value)}
                            placeholder="City"
                            className={errors.city ? 'error' : ''}
                          />
                          {errors.city && <span className="error-msg">{errors.city}</span>}
                        </div>
                        <div className="form-group">
                          <label>State *</label>
                          <select
                            value={address.state}
                            onChange={(e) => handleFieldChange('state', e.target.value)}
                            className={errors.state ? 'error' : ''}
                          >
                            <option value="">Select State</option>
                            {INDIAN_STATES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          {errors.state && <span className="error-msg">{errors.state}</span>}
                        </div>
                        <div className="form-group">
                          <label>Pincode *</label>
                          <input
                            type="text"
                            value={address.pincode}
                            onChange={(e) => handleFieldChange('pincode', e.target.value.replace(/\D/g, ''))}
                            placeholder="6-digit pincode"
                            maxLength={6}
                            className={errors.pincode ? 'error' : ''}
                          />
                          {errors.pincode && <span className="error-msg">{errors.pincode}</span>}
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Country</label>
                        <input type="text" value="India" disabled className="input-disabled" />
                      </div>
                    </div>

                    <button className="checkout-continue-btn" onClick={handleContinueToReview}>
                      Continue to Review
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </motion.div>
                )}

                {/* ─── Step 2: Review ──────────────────────────── */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="checkout-card"
                  >
                    <h2 className="checkout-card-title">Review Order</h2>

                    {/* Address Summary */}
                    <div className="review-section">
                      <div className="review-section-header">
                        <h4>Delivering to</h4>
                        <button className="edit-btn" onClick={() => setStep(1)}>Edit</button>
                      </div>
                      <div className="address-summary">
                        <p className="address-name">{address.fullName}</p>
                        <p>{address.addressLine1}</p>
                        {address.addressLine2 && <p>{address.addressLine2}</p>}
                        <p>{address.city}, {address.state} - {address.pincode}</p>
                        <p>{address.country}</p>
                        <p className="address-phone">📞 {address.phone}</p>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="review-section">
                      <h4 className="review-section-title">Payment Method</h4>
                      <div className="payment-cod-badge">
                        <div className="cod-icon">💵</div>
                        <div>
                          <p className="cod-title">Cash on Delivery</p>
                          <p className="cod-sub">Pay when your order arrives</p>
                        </div>
                        <div className="cod-check">✓</div>
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="review-section">
                      <h4 className="review-section-title">Order Items ({cart?.items?.length || 0})</h4>
                      <div className="review-items">
                        {cart?.items?.map((item) => (
                          <div key={item._id} className="review-item">
                            <div className="review-item-img">
                              <img
                                src={item.product?.images?.[0] || ''}
                                alt={item.product?.name}
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                              />
                            </div>
                            <div className="review-item-info">
                              <p className="review-item-name">{item.product?.name}</p>
                              <p className="review-item-attrs">
                                Size: {item.size} · Color: {item.color} · Qty: {item.quantity}
                              </p>
                            </div>
                            <span className="review-item-price">{formatPrice(item.price * item.quantity)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="checkout-step2-actions">
                      <button className="checkout-back-btn" onClick={() => setStep(1)}>
                        ← Back
                      </button>
                      <button
                        className="checkout-place-btn"
                        onClick={handlePlaceOrder}
                        disabled={isPlacing}
                      >
                        {isPlacing ? (
                          <>
                            <span className="btn-spinner" style={{ borderColor: 'rgba(255,255,255,0.35)', borderTopColor: '#fff' }} />
                            Placing Order…
                          </>
                        ) : (
                          <>Place Order — {formatPrice(total)}</>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Order Summary Sidebar */}
            <aside className="checkout-sidebar">
              <div className="checkout-summary-card">
                <h3 className="checkout-summary-title">Price Details</h3>
                <div className="checkout-summary-rows">
                  <div className="checkout-summary-row">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="checkout-summary-row">
                    <span>Delivery</span>
                    <span className={delivery === 0 ? 'free-text' : ''}>
                      {delivery === 0 ? 'FREE' : formatPrice(delivery)}
                    </span>
                  </div>
                  <div className="checkout-summary-row">
                    <span>GST (5%)</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                  <div className="checkout-summary-divider" />
                  <div className="checkout-summary-row checkout-summary-total">
                    <span>Total Amount</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                <p className="checkout-savings">
                  {delivery === 0 ? '✓ You qualify for free delivery!' : `Add ${formatPrice(999 - subtotal)} more for free delivery`}
                </p>
              </div>
            </aside>
          </div>
        )}

        {/* ─── Step 3: Confirmation ─────────────────────────────── */}
        {step === 3 && (
          <motion.div
            className="order-confirmed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 14 }}
          >
            <div className="confirmed-checkmark">
              <svg viewBox="0 0 52 52" className="checkmark-svg">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark-path" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
            <h2 className="confirmed-title">Order Confirmed!</h2>
            <p className="confirmed-sub">
              Thank you for shopping with FashionZone. Your order has been placed successfully.
            </p>
            {orderNumber && (
              <div className="order-number-box">
                <p className="order-number-label">Order Number</p>
                <p className="order-number-val">#{orderNumber}</p>
              </div>
            )}
            <div className="confirmed-info">
              <div className="info-item">
                <span className="info-icon">📦</span>
                <span>Order will be processed within 24 hours</span>
              </div>
              <div className="info-item">
                <span className="info-icon">🚚</span>
                <span>Expected delivery: 5–7 business days</span>
              </div>
              <div className="info-item">
                <span className="info-icon">💵</span>
                <span>Payment: Cash on Delivery — {formatPrice(total)}</span>
              </div>
            </div>
            <div className="confirmed-actions">
              <Link to="/orders" className="btn-view-orders">View My Orders</Link>
              <Link to="/products" className="btn-continue-shopping">Continue Shopping</Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
