import React from 'react';
import { services } from '../../data/servicesData';
import './Services.css';

export function Services({ onSelectService }) {
  const handleConsultationClick = (eventType) => {
    if (onSelectService) {
      onSelectService(eventType);
    }
  };

  return (
    <section className="section dark-section" id="services">
      <div className="reveal">
        <h2 className="section-heading">What We Do</h2>
        <p className="section-subheading">Choose the service that fits your celebration.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article
            className={`service-card reveal delay-${index > 2 ? 3 : index}`}
            key={service.name}
          >
            <div className="service-image-wrap">
              <img
                src={service.image}
                alt={`${service.name} event by Toshevents`}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="service-content">
              <span className="service-label">{service.label}</span>
              <h3>{service.name}</h3>
              <p>{service.description}</p>

              {service.tags && (
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span className="service-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <a
                className="text-link"
                href="#contact"
                onClick={() => handleConsultationClick(service.eventType)}
              >
                <span>Request a Consultation →</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

