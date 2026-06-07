export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatDate = (date: string): string => {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

export const getDiscountPercent = (original: number, price: number): number => {
  if (!original || original <= price) return 0;
  return Math.round(((original - price) / original) * 100);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
};

export const getStatusColor = (status: string): string => {
  const colorMap: Record<string, string> = {
    pending: '#FF9800',
    confirmed: '#2196F3',
    processing: '#FF6B9D',
    shipped: '#9C27B0',
    delivered: '#4CAF50',
    cancelled: '#F44336',
  };
  return colorMap[status] ?? '#9E9E9E';
};

export const getStatusBg = (status: string): string => {
  const bgMap: Record<string, string> = {
    pending: '#FFF8E1',
    confirmed: '#E3F2FD',
    processing: '#FFE4EE',
    shipped: '#F3E5F5',
    delivered: '#E8F5E9',
    cancelled: '#FFEBEE',
  };
  return bgMap[status] ?? '#F5F5F5';
};

export const generateStars = (rating: number): string => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
};

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const slugify = (str: string): string => {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};
