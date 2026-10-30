import React from 'react';
import './Hero.css';

export function Hero({ onPlanClick }) {
  const handleScrollCue = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <video
        className="hero-video"
        src="https://zecdvcub3srmcwgz.public.blob.vercel-storage.com/hero-vid.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero-content">
        <p className="eyebrow hero-enter">
          <span>Event Studio · Lagos</span>
        </p>

        <h1 className="hero-enter">
          <span>Beautifully Planned.</span>
          <br />
          <span className="accent">Seamlessly Executed.</span>
        </h1>

        <p className="hero-copy hero-enter">
          Thoughtfully curated weddings, milestone celebrations and corporate events, brought to life with care, creativity and precision.
        </p>

        <div className="hero-buttons hero-enter">
          <a className="button gold" href="#portfolio">
            <span>Explore Our Events</span>
          </a>
          <a
            className="button outline"
            href="#contact"
            onClick={(e) => {
              if (onPlanClick) {
                onPlanClick();
              }
            }}
          >
            <span>Plan Your Event</span>
          </a>
        </div>
      </div>

      <button
        type="button"
        className="scroll-cue"
        aria-label="Scroll to introduction"
        onClick={handleScrollCue}
      />
    </section>
  );
}

