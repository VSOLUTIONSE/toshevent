# TOSHEVENTS: Luxury Event Planning & Coordination

A modern, responsive, pixel-perfect Vite + React application built for **Toshevents**, a luxury event studio based in Lagos, Nigeria. Specializing in thoughtfully curated weddings, milestone celebrations, and high-profile corporate experiences.

---

## 🌟 Key Features & Optimizations

- **Modern Architecture**: Fully modular component structure (`Navbar`, `Hero`, `Intro`, `Services`, `Portfolio`, `Process`, `Testimonials`, `WebsiteShowcase`, `Booking`, `Footer`).
- **Pixel-Perfect & Responsive**: Meticulously designed for all screen breakpoints: mobile (<640px), tablet (640px-1024px), desktop (>1024px), and ultra-wide screens.
- **Scroll & Reveal System**: Optimized `IntersectionObserver` hook (`useScrollReveal`) with unobserve cleanup for 60fps scrolling performance.
- **Interactive Portfolio Modal**: Dynamic lightbox modal displaying venue, guest count, event summary, and direct inquiry link.
- **Bespoke Wedding Website Mockup**: Interactive browser showcase letting visitors preview story, schedule, and RSVP portals.
- **Interactive Booking & Enquiry Form**:
  - Live client-side validation
  - Auto-prefill sync when clicking service cards or portfolio items
  - Celebration confetti animation upon successful submission
  - Direct WhatsApp deep-linking with pre-formatted message
- **Accessible & SEO Ready**: Semantic HTML5 landmarks, Google Font optimization, custom favicon, and accessibility attributes (`aria-*`, keyboard navigation).
- **Agentation Visual Feedback**: Integrated `agentation` in development mode (`import.meta.env.DEV`) for point-and-click UI annotation and agent-assisted refinement.

---

## 🚀 Getting Started

### 1. Installation
Install the project dependencies:
```bash
npm install
```

### 2. Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build
Create an optimized production bundle:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 🎨 Design System Tokens

| Token | Value | Description |
|---|---|---|
| `--rosewater` | `#F7E9E8` | Soft romantic blush background accent |
| `--petal` | `#E8C3C0` | Primary accent for highlights & borders |
| `--petal-deep` | `#C99791` | Deep warm rose for CTAs and emphasis |
| `--champagne` | `#EFE2D0` | Subtle warm champagne tone |
| `--mist` | `#FBF6F4` | Light canvas background |
| `--charcoal` | `#26211F` | Deep luxury charcoal contrast |
| `--charcoal-soft` | `#38312E` | Soft card charcoal |
| `--taupe` | `#7C6D68` | Refined neutral body copy |
| `--font-family` | `'Poppins', sans-serif` | Clean geometric editorial typography |

---

## 📂 Project Structure

```
toshevent/
├── index.html                     # HTML5 template with SEO & Google Fonts
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies and scripts
├── src/
│   ├── main.jsx                   # React entry point
│   ├── App.jsx                    # Root app orchestrator
│   ├── data/
│   │   ├── servicesData.js        # Services catalog with tags & imagery
│   │   ├── portfolioData.js       # Curated events with metadata
│   │   ├── trustData.js           # Trust stats & milestones
│   │   ├── processData.js         # 4-step planning process
│   │   └── testimonialsData.js    # Client reviews & star ratings
│   ├── hooks/
│   │   └── useScrollReveal.js     # IntersectionObserver animation hook
│   ├── styles/
│   │   ├── variables.css          # Design system CSS custom properties
│   │   └── global.css             # Resets, typography & common classes
│   └── components/
│       ├── Navbar/                # Sticky glassmorphic navigation + mobile drawer
│       ├── Hero/                  # Hero section with animated organic shape
│       ├── Intro/                 # Editorial quote & trust stats
│       ├── Services/              # Asymmetric cards with service selection
│       ├── Portfolio/             # Filterable gallery & detail modal
│       ├── Process/               # Connected milestone timeline
│       ├── Testimonials/          # Luxury testimonial cards
│       ├── WebsiteShowcase/       # Interactive browser mockup
│       ├── Booking/               # Form validation & WhatsApp integration
│       ├── Footer/                # Brand footer & social channels
│       └── Common/                # BackToTop & FloatingWhatsApp buttons
```

