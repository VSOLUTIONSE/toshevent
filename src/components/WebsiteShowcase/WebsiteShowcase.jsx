import React, { useState } from 'react';
import { Globe, Heart, CalendarCheck, Gift } from 'lucide-react';
import './WebsiteShowcase.css';

const FAAB_URL = 'https://thefaabstory.vercel.app/';

const previewTabs = [
  {
    id: 'story',
    label: 'Our Story',
    text: 'It started in the Team Radiant fellowship group chat, where Abisoye was team lead and Favour a member. From Team Radiant to forever, their next chapter begins November 14th.'
  },
  {
    id: 'details',
    label: 'Wedding Details',
    text: 'Save the Date: November 14, 2026 at 10AM, Powelife Christian Faith International, 153 Shibiri Road, Ojo, Lagos.'
  },
  {
    id: 'registry',
    label: 'Gift Us',
    text: 'Help set our new home: a curated registry of gifts as Abisoye & Favour build their life together.'
  }
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
              As an add-on to any wedding package, we create a bespoke wedding website for you and your partner: a personal space to share your story, schedule, venue, RSVP, and gift registry.{' '}
            </span>
            <a
              className="website-example-link"
              href={FAAB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>theFAABstory</em>
            </a>
            <span> for Abisoye &amp; Favour is one example of where a beautiful beginning can live.</span>
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
          aria-label="Interactive preview of theFAABstory, the bespoke wedding website we built for Abisoye and Favour"
        >
          <div className="browser-bar">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
            <a
              className="browser-address"
              href={FAAB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              thefaabstory.vercel.app
            </a>
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

            <p className="browser-screen-title">theFAABstory</p>
            <span className="browser-screen-sub">Abisoye &amp; Favour · November 14, 2026</span>

            <div className="browser-content-box">
              <p>{currentTab.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

