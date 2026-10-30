import React from 'react';
import { trust } from '../../data/trustData';
import './Intro.css';

export function Intro() {
  return (
    <section className="section intro" id="about">
      <blockquote className="quote reveal">
        “Every celebration has a story. Our job is to bring yours to life, taking care of every detail from the first conversation to the final moment.”
      </blockquote>

      <div className="trust-grid reveal delay-1">
        {trust.map((item) => (
          <div className="trust-item" key={item.label}>
            <span className="trust-number">{item.number}</span>
            <span className="trust-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

