import React, { useEffect } from 'react';
import { X, MapPin, Users, Calendar } from 'lucide-react';
import './PortfolioModal.css';

export function PortfolioModal({ item, onClose, onInquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="portfolio-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="portfolio-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="portfolio-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="portfolio-modal-image">
          <img src={item.image} alt={item.name} />
        </div>

        <div className="portfolio-modal-body">
          <div className="portfolio-modal-header">
            <div>
              <span className="portfolio-modal-type">{item.type}</span>
              <h3>{item.name}</h3>
            </div>
          </div>

          <div className="portfolio-modal-meta">
            {item.location && (
              <span>
                <MapPin size={15} color="var(--petal)" />
                {item.location}
              </span>
            )}
            {item.guestCount && (
              <span>
                <Users size={15} color="var(--petal)" />
                {item.guestCount}
              </span>
            )}
          </div>

          <p className="portfolio-modal-summary">
            {item.summary || 'A thoughtfully designed celebration tailored to reflect the unique spirit and story of our client.'}
          </p>

          <div className="portfolio-modal-actions">
            <a
              className="button gold"
              href="#contact"
              onClick={() => {
                onClose();
                if (onInquire) onInquire(item.category || item.type);
              }}
            >
              <span>Inquire About Similar Event</span>
            </a>
            <button className="button outline" onClick={onClose}>
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

