import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { orderAPI } from '../services/api';
import { Order } from '../types';
import { formatPrice, formatDate, getStatusColor, getStatusBg } from '../utils/helpers';
import LoadingSpinner from '../components/common/LoadingSpinner';
import './OrdersPage.css';

const OrderCard: React.FC<{ order: Order; index: number; onCancel: (id: string) => void }> = ({
  order,
  index,
  onCancel,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [cancelling, setCancelling] = useState(false);

  const handleCancel = async () => {
    if (!window.confirm('Are you sure you want to cancel this order?')) return;
    setCancelling(true);
    try {
      await orderAPI.cancelOrder(order._id);
      onCancel(order._id);
      toast.success('Order cancelled successfully');
    } catch {
      toast.error('Failed to cancel order');
    } finally {
      setCancelling(false);
    }
  };

  const canCancel = ['pending', 'confirmed'].includes(order.status);

  return (
    <motion.div
      className="order-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      {/* Card Header */}
      <div className="order-card-header">
        <div className="order-card-left">
          <div className="order-meta">
            <span className="order-number">#{order.orderNumber}</span>
            <span className="order-date">{formatDate(order.createdAt)}</span>
          </div>
          <span
            className="order-status-badge"
            style={{
              color: getStatusColor(order.status),
              background: getStatusBg(order.status),
            }}
          >
            ● {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
        </div>

        <div className="order-card-right">
          {/* Item thumbnails */}
          <div className="order-item-previews">
            {order.items.slice(0, 3).map((item, i) => (
              <div key={i} className="item-preview">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&q=80';
                  }}
                />
              </div>
            ))}
            {order.items.length > 3 && (
              <div className="item-preview item-preview-more">+{order.items.length - 3}</div>
            )}
          </div>

          <div className="order-total-wrap">
            <span className="order-total">{formatPrice(order.totalAmount)}</span>
            <span className="order-payment">COD</span>
          </div>

          <button className="order-expand-btn" onClick={() => setExpanded(!expanded)}>
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
            >
              <polyline points="6 9 12 15 18 9" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="order-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="order-details-inner">
              {/* Items */}
              <div className="order-items-list">
                <h4 className="order-detail-title">Order Items</h4>
                {order.items.map((item, i) => (
                  <div key={i} className="order-item-detail">
                    <div className="order-item-img">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&q=80';
                        }}
                      />
                    </div>
                    <div className="order-item-info-detail">
                      <p className="order-item-name">{item.name}</p>
                      <p className="order-item-attrs">
                        Size: {item.size} · Color: {item.color} · Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="order-item-price-detail">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              {/* Shipping Address */}
              <div className="order-shipping-detail">
                <h4 className="order-detail-title">Delivered to</h4>
                <div className="shipping-addr-box">
                  <p className="addr-name">{order.shippingAddress.fullName}</p>
                  <p>{order.shippingAddress.addressLine1}</p>
                  {order.shippingAddress.addressLine2 && <p>{order.shippingAddress.addressLine2}</p>}
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state} -{' '}
                    {order.shippingAddress.pincode}
                  </p>
                  <p className="addr-phone">📞 {order.shippingAddress.phone}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            {canCancel && (
              <div className="order-actions">
                <button
                  className="cancel-order-btn"
                  onClick={handleCancel}
                  disabled={cancelling}
                >
                  {cancelling ? 'Cancelling…' : 'Cancel Order'}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    orderAPI.getOrders()
      .then((res) => setOrders(res.data.orders || res.data || []))
      .catch(() => setOrders([]))
      .finally(() => setIsLoading(false));
  }, []);

  const handleCancelOrder = (orderId: string) => {
    setOrders((prev) =>
      prev.map((o) => (o._id === orderId ? { ...o, status: 'cancelled' } : o))
    );
  };

  if (isLoading) return <LoadingSpinner overlay text="Loading orders…" />;

  return (
    <div className="orders-page page-wrapper">
      <div className="container">
        <div className="orders-page-header">
          <h1 className="orders-page-title">My Orders</h1>
          {orders.length > 0 && (
            <p className="orders-count">{orders.length} order{orders.length !== 1 ? 's' : ''}</p>
          )}
        </div>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <div className="empty-orders-icon">
              <svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.8">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" strokeLinecap="round" />
                <rect x="9" y="3" width="6" height="4" rx="1" ry="1" />
              </svg>
            </div>
            <h2>No orders yet</h2>
            <p>When you place your first order, it will appear here.</p>
            <a href="/products" className="start-shopping-btn">Start Shopping</a>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order, i) => (
              <OrderCard key={order._id} order={order} index={i} onCancel={handleCancelOrder} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
