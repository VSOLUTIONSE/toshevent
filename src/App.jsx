import React, { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Intro } from './components/Intro/Intro';
import { Services } from './components/Services/Services';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Process } from './components/Process/Process';
import { Testimonials } from './components/Testimonials/Testimonials';
import { WebsiteShowcase } from './components/WebsiteShowcase/WebsiteShowcase';
import { Booking } from './components/Booking/Booking';
import { Footer } from './components/Footer/Footer';
import { BackToTop } from './components/Common/BackToTop';
import { FloatingWhatsApp } from './components/Common/FloatingWhatsApp';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Agentation } from 'agentation';

export default function App() {
  const [selectedEventType, setSelectedEventType] = useState('');

  // Observe and reveal elements on scroll including dynamic updates
  useScrollReveal();

  const handleSelectService = (eventType) => {
    setSelectedEventType(eventType);
    const bookingEl = document.getElementById('contact');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireFromPortfolio = (category) => {
    let eventType = 'Wedding';
    if (category.toLowerCase().includes('corporate')) eventType = 'Corporate';
    else if (category.toLowerCase().includes('social') || category.toLowerCase().includes('milestone')) eventType = 'Birthday';
    else if (category.toLowerCase().includes('wedding')) eventType = 'Wedding';
    else eventType = 'Other';

    setSelectedEventType(eventType);
    const bookingEl = document.getElementById('contact');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="toshevents-site">
      <Navbar onContactClick={() => handleSelectService('')} />
      
      <main>
        <Hero onPlanClick={() => handleSelectService('')} />
        <Intro />
        <Services onSelectService={handleSelectService} />
        <Portfolio onInquire={handleInquireFromPortfolio} />
        <Process />
        <Testimonials />
        <WebsiteShowcase onAddWebsite={() => handleSelectService('Wedding')} />
        <Booking
          prefilledType={selectedEventType}
          onResetPrefill={() => setSelectedEventType('')}
        />
      </main>

      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
      {import.meta.env.DEV && <Agentation />}
    </div>
  );
}
