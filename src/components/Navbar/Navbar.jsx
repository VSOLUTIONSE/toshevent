import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = ['contact', 'portfolio', 'services', 'about', 'home'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`site-nav ${scrolled ? 'scrolled' : ''}`}
        aria-label="Main navigation"
      >
        <a className="logo" href="#home" onClick={closeMenu}>
          <span>TOSHEVENTS</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={isActive ? 'active' : ''}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        <a
          className="button gold"
          href="#contact"
          onClick={(e) => {
            if (onContactClick) {
              onContactClick();
            }
          }}
        >
          <span>Plan Your Event</span>
        </a>

        <button
          className="menu-button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <>
          <div className="mobile-overlay" onClick={closeMenu} aria-hidden="true" />
          <div className="mobile-menu" role="dialog" aria-modal="true">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={isActive ? 'active' : ''}
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
            <a
              className="button gold"
              href="#contact"
              onClick={() => {
                closeMenu();
                if (onContactClick) onContactClick();
              }}
            >
              <span>Plan Your Event</span>
            </a>
          </div>
        </>
      )}
    </>
  );
}

