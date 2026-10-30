import React from 'react';
import { process } from '../../data/processData';
import './Process.css';

export function Process() {
  return (
    <section className="section process">
      <div className="reveal">
        <h2>
          <span>You enjoy the moment.</span>
          <br />
          <em>We’ll handle the details.</em>
        </h2>
      </div>

      <div className="process-grid">
        {process.map((step, index) => (
          <article
            className={`process-step reveal delay-${index}`}
            key={step.number}
          >
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            {step.tip && <span className="process-tip">{step.tip}</span>}
          </article>
        ))}
      </div>
    </section>
  );
}

