import React from 'react';
import './FloatingActions.css';

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href="https://wa.me/2348000000000?text=Hello%20Toshevents!%20I'd%20like%20to%20inquire%20about%20event%20planning."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat directly on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
        <path d="M8.5 8.5c.3-.5.6-.5.9-.5l.5 1.2c.1.3.1.5-.1.7l-.4.4c.5 1 1.3 1.8 2.4 2.3l.4-.5c.2-.2.4-.2.7-.1l1.2.5c.3.1.3.3.2.6-.3.8-.8 1.1-1.4 1.1-2.8-.2-5.3-2.6-5.8-5.3-.1-.3 0-.4.1-.4Z" />
      </svg>
    </a>
  );
}
