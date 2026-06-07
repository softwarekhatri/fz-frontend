import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './ImageZoom.css';

interface ImageZoomProps {
  images: string[];
  alt: string;
}

const PLACEHOLDER = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80';

const ImageZoom: React.FC<ImageZoomProps> = ({ images, alt }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const mainImageRef = useRef<HTMLDivElement>(null);

  const safeImages = images?.length ? images : [PLACEHOLDER];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mainImageRef.current) return;
    const rect = mainImageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.classList.add('no-scroll');
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? safeImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === safeImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <div className="image-zoom-root">
      {/* Main Image */}
      <div
        ref={mainImageRef}
        className={`image-zoom-main ${zoom ? 'zoomed' : ''}`}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={handleMouseMove}
        onClick={() => openLightbox(activeIndex)}
        style={zoom ? {
          '--zoom-x': `${zoomPos.x}%`,
          '--zoom-y': `${zoomPos.y}%`,
        } as React.CSSProperties : {}}
      >
        <img
          src={safeImages[activeIndex] || PLACEHOLDER}
          alt={alt}
          className="image-zoom-img"
          draggable={false}
          onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER; }}
        />
        <div className="zoom-hint">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
          Hover to zoom
        </div>
        <button className="fullscreen-btn" onClick={(e) => { e.stopPropagation(); openLightbox(activeIndex); }} aria-label="View fullscreen">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Thumbnail Strip */}
      {safeImages.length > 1 && (
        <div className="thumbnail-strip">
          {safeImages.map((img, i) => (
            <button
              key={i}
              className={`thumbnail-btn ${activeIndex === i ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              <img
                src={img}
                alt={`${alt} ${i + 1}`}
                draggable={false}
                onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER; }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
              <button className="lightbox-nav lightbox-prev" onClick={prevImage} aria-label="Previous">‹</button>

              <motion.img
                key={lightboxIndex}
                src={safeImages[lightboxIndex] || PLACEHOLDER}
                alt={alt}
                className="lightbox-img"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER; }}
              />

              <button className="lightbox-nav lightbox-next" onClick={nextImage} aria-label="Next">›</button>

              <div className="lightbox-counter">
                {lightboxIndex + 1} / {safeImages.length}
              </div>

              {/* Dot indicators */}
              <div className="lightbox-dots">
                {safeImages.map((_, i) => (
                  <button
                    key={i}
                    className={`lightbox-dot ${i === lightboxIndex ? 'active' : ''}`}
                    onClick={() => setLightboxIndex(i)}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageZoom;
