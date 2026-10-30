import React, { useState, useEffect } from 'react';
import { Check, Send, Loader2, MessageCircle } from 'lucide-react';
import './Booking.css';

export function Booking({ prefilledType, onResetPrefill }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    location: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Set today as minimum selectable date
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (prefilledType) {
      setFormData((prev) => ({
        ...prev,
        eventType: prefilledType === 'Wedding Website Add-On' ? 'Wedding' : prefilledType
      }));
    }
  }, [prefilledType]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact number';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first invalid input
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);

    // Simulate refined concierge dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      guestCount: '',
      location: '',
      date: '',
      message: ''
    });
    setIsSubmitted(false);
    if (onResetPrefill) onResetPrefill();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Toshevents Atelier! My name is ${formData.name || 'a prospective client'}. I am planning a ${
      formData.eventType || 'signature celebration'
    }${formData.guestCount ? ` for approximately ${formData.guestCount} guests` : ''}${
      formData.location ? ` in ${formData.location}` : ''
    }${formData.date ? ` on ${formData.date}` : ''} and would like to reserve a private consultation.`
  );

  return (
    <section className="section booking" id="contact">
      <div className="booking-inner">
        <h2 className="reveal">Reserve Your Atelier Consultation.</h2>
        <p className="booking-sub reveal">
          We accept a strictly limited number of commissions each season to ensure absolute devotion to every detail. Tell us about your celebration.
        </p>

        <div className="booking-buttons reveal">
          <a
            className="button outline whatsapp-link"
            href={`https://wa.me/2348120000000?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct consultation on WhatsApp Concierge"
          >
            <MessageCircle size={16} />
            <span>Direct WhatsApp Concierge</span>
          </a>
          <a
            className="button gold"
            href="mailto:concierge@toshevents.com?subject=Private%20Event%20Commission%20Inquiry"
          >
            <span>Email Direct Concierge</span>
          </a>
        </div>

        {isSubmitted ? (
          <div className="booking-form form-success reveal" role="status" aria-live="polite">
            <div className="form-success-icon">
              <Check size={32} />
            </div>
            <h3>Inquiry Received with Distinction</h3>
            <p>
              Thank you, {formData.name}. Your celebration dossier has been assigned to our Senior Planning Director. We will contact you at {formData.phone || formData.email} within 24 hours to schedule your private design consultation.
            </p>
            <button className="button gold" type="button" onClick={handleReset}>
              <span>Submit Another Commission</span>
            </button>
          </div>
        ) : (
          <form className="booking-form reveal" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Dr. & Mrs. Adeleke / Chief Folake"
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'error-name' : undefined}
                required
              />
              {errors.name && (
                <span id="error-name" className="field-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="client@luxuryestate.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'error-email' : undefined}
                required
              />
              {errors.email && (
                <span id="error-email" className="field-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone / WhatsApp *</label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 800 000 0000"
                autoComplete="tel"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'error-phone' : undefined}
                required
              />
              {errors.phone && (
                <span id="error-phone" className="field-error">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="eventType">Celebration Genre</label>
              <select
                id="eventType"
                value={formData.eventType}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Wedding">Royal Nuptials & Traditional Wedding</option>
                <option value="Birthday">Milestone Jubilee (50th, 60th, 70th)</option>
                <option value="Corporate">Presidential Summit & Corporate Gala</option>
                <option value="Private Estate">Private Estate Soirée</option>
                <option value="Other">Other Bespoke Commission</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="guestCount">Anticipated Guest Count</label>
              <select
                id="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select scale
                </option>
                <option value="Intimate (<150 guests)">
                  Intimate (&lt;150 guests)
                </option>
                <option value="150 - 400 guests">150 - 400 guests</option>
                <option value="400 - 800 guests">400 - 800 guests</option>
                <option value="800 - 1,500+ guests">800 - 1,500+ guests</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="location">Preferred Location / Venue</label>
              <select
                id="location"
                value={formData.location}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select venue region
                </option>
                <option value="Victoria Island / Ikoyi">Victoria Island / Ikoyi</option>
                <option value="Banana Island / Lekki">Banana Island / Lekki</option>
                <option value="Abuja FCT">Abuja FCT</option>
                <option value="Destination (Zanzibar, Dubai, London)">International Destination</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="date">Target Date / Season</label>
              <input
                id="date"
                type="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="form-field full">
              <label htmlFor="message">Your Celebration Vision</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share any special cultural customs, floral aspirations, or preliminary venue preferences..."
              />
            </div>

            <div className="form-footer">
              <button
                className="button gold form-submit"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Transmitting Dossier...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Private Commission</span>
                    <Send size={14} />
                  </>
                )}
              </button>
              <span className="form-note">
                Strict confidentiality assured for all private and corporate commissions.
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
