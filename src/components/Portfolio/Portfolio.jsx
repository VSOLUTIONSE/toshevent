import React, { useState } from 'react';
import { portfolio } from '../../data/portfolioData';
import { PortfolioModal } from './PortfolioModal';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Portfolio.css';

const categories = ['All', 'Weddings', 'Social', 'Corporate'];

export function Portfolio({ onInquire }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  useScrollReveal([activeCategory]);

  const filteredItems = portfolio.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section className="section" id="portfolio">
      <div className="portfolio-head reveal">
        <div>
          <h2 className="section-heading">Our Work</h2>
          <p className="section-subheading portfolio-subheading">
            A few moments we’re proud to have shaped.
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="portfolio-grid">
        {filteredItems.map((item, index) => (
          <article
            className={`portfolio-card ${item.tall ? 'tall' : ''} reveal delay-${index}`}
            key={item.id}
            onClick={() => setSelectedItem(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedItem(item);
              }
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              decoding="async"
            />
            <span className="portfolio-type">{item.type}</span>

            <div className="portfolio-info">
              <h3>{item.name}</h3>
              <p>{item.type}</p>
              <span className="portfolio-view-hint">Click to view details →</span>
            </div>
          </article>
        ))}
      </div>

      <a
        className="button outline-dark portfolio-button reveal"
        href="#contact"
        onClick={() => {
          if (onInquire) onInquire('Full Portfolio');
        }}
      >
        <span>View Full Portfolio →</span>
      </a>

      {selectedItem && (
        <PortfolioModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onInquire={onInquire}
        />
      )}
    </section>
  );
}

