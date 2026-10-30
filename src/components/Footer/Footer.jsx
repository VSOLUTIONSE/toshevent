import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <a className="logo" href="#home">
          <span>TOSHEVENTS</span>
        </a>

        <div className="footer-links">
          <a href="#services">
            <span>Services</span>
          </a>
          <a href="#portfolio">
            <span>Portfolio</span>
          </a>
          <a href="#about">
            <span>About</span>
          </a>
          <a href="#contact">
            <span>Contact</span>
          </a>
        </div>

        <div className="socials">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 8h3V4h-3c-3.1 0-5 1.9-5 5v3H6v4h3v5h4v-5h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
            </svg>
          </a>
          <a
            href="https://wa.me/2348033730336"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
              <path d="M8.5 8.5c.3-.5.6-.5.9-.5l.5 1.2c.1.3.1.5-.1.7l-.4.4c.5 1 1.3 1.8 2.4 2.3l.4-.5c.2-.2.4-.2.7-.1l1.2.5c.3.1.3.3.2.6-.3.8-.8 1.1-1.4 1.1-2.8-.2-5.3-2.6-5.8-5.3-.1-.3 0-.4.1-.4Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© {new Date().getFullYear()} Toshevents. All rights reserved.</p>
        <p className="footer-tagline">Crafted with precision in Lagos, Nigeria.</p>
      </div>
    </footer>
  );
}

