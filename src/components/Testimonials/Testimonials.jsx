import React from 'react';
import { testimonials } from '../../data/testimonialsData';
import { Star } from 'lucide-react';
import './Testimonials.css';

export function Testimonials() {
  return (
    <section className="section dark-section testimonials">
      <div className="reveal">
        <h2 className="section-heading">What Clients Say</h2>
        <p className="section-subheading">Kind words from couples and hosts we cherish.</p>
      </div>

      <div className="testimonial-grid" style={{ marginTop: '54px' }}>
        {testimonials.map((item, index) => (
          <article
            className={`testimonial reveal delay-${index}`}
            key={item.id}
          >
            <div>
              <div className="testimonial-top">
                <span className="testimonial-mark">“</span>
                <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>

              <blockquote>{item.quote}</blockquote>
            </div>

            <div className="testimonial-author">
              <cite>{item.name}</cite>
              {item.role && <span className="testimonial-role">{item.role}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

