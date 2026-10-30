import React, { useState } from 'react';
import { Globe, Heart, CalendarCheck, Gift } from 'lucide-react';
import './WebsiteShowcase.css';

const previewTabs = [
  { id: 'story', label: 'Our Story', text: 'How a chance meeting in Victoria Island turned into forever.' },
  { id: 'schedule', label: 'Weekend Schedule', text: 'Traditional Ceremony · Sunset Vows · Grand Ballroom Gala' },
  { id: 'rsvp', label: 'Live RSVP', text: 'Digital RSVP portal with real-time guest diet & music requests.' }
];

export function WebsiteShowcase({ onAddWebsite }) {
  const [activeTab, setActiveTab] = useState('story');
  const currentTab = previewTabs.find((t) => t.id === activeTab) || previewTabs[0];

  return (
    <section className="section website" id="bespoke-website">
      <div className="website-grid">
        <div className="website-copy reveal">
          <h2>Their love story deserves a place of its own.</h2>
          <p>
            <span>
              As an add-on to any wedding package, we create a bespoke wedding website for you and your partner: a personal space to share your story, schedule, venue, RSVP, and gift registry.
            </span>{' '}
            <em>The Faab Story</em>
            <span> is one example of where a beautiful beginning can live.</span>
          </p>

          <div className="website-features">
            <span className="website-feature-tag">
              <Heart size={13} color="var(--petal-deep)" />
              Love Story Timeline
            </span>
            <span className="website-feature-tag">
              <CalendarCheck size={13} color="var(--petal-deep)" />
              Digital RSVP System
            </span>
            <span className="website-feature-tag">
              <Gift size={13} color="var(--petal-deep)" />
              Curated Gift Registry
            </span>
          </div>

          <a
            className="text-link"
            href="#contact"
            onClick={() => {
              if (onAddWebsite) onAddWebsite('Wedding Website Add-On');
            }}
          >
            <span>Add to Your Wedding Package →</span>
          </a>
        </div>

        <div
          className="browser reveal delay-1"
          aria-label="Interactive preview of The Faab Story bespoke wedding website"
        >
          <div className="browser-bar">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-address">thefaabstory.com</span>
          </div>

          <div className="browser-screen">
            <div className="browser-nav-pills" role="tablist">
              {previewTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`browser-nav-pill ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <p className="browser-screen-title">The Faab Story</p>
            <span className="browser-screen-sub">Lagos · December 2025</span>

            <div className="browser-content-box">
              <p>{currentTab.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

