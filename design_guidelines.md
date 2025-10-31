# QuantumDev Website Design Guidelines

## Design Approach

**Primary Direction:** Liquid Glass Aesthetic with AI-Themed Visual Language
**Reference Inspiration:** Modern tech leaders (Vercel, Linear, Stripe) for structure, heavily customized with futuristic glassmorphism treatment

**Core Philosophy:** Create a cutting-edge, premium software company presence that positions QuantumDev as a sophisticated Asian technology leader through immersive visual design, smooth animations, and professional credibility markers.

---

## Typography System

**Font Families:**
- Primary: Inter or DM Sans (clean, modern sans-serif via Google Fonts)
- Accent: Orbitron or Audiowide for tech-focused headings and hero text (AI aesthetic)

**Hierarchy:**
- Hero Headlines: 3xl to 6xl, bold weight, accent font for dramatic impact
- Section Headers: 2xl to 4xl, semibold, primary font
- Subheadings: xl to 2xl, medium weight
- Body Text: base to lg, regular weight, excellent readability
- Captions/Labels: sm to base, medium weight

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Container Strategy:**
- Full-width sections with inner max-w-7xl containers
- Content sections: max-w-6xl for balanced reading
- Hero: Full viewport width with centered max-w-6xl content

**Vertical Rhythm:**
- Section padding: py-16 mobile, py-24 tablet, py-32 desktop
- Component spacing: mb-8 to mb-16 between major blocks
- Micro spacing: gap-4 to gap-8 within component groups

---

## Glassmorphism Implementation

**Glass Effect Specifications:**
- Backdrop blur: Strong blur effect (backdrop-blur-xl or backdrop-blur-2xl)
- Background opacity: Semi-transparent overlays (bg-opacity-10 to bg-opacity-20)
- Borders: Subtle 1px borders with slight transparency
- Shadows: Soft, layered shadows for depth (shadow-xl with custom glow)

**Application Areas:**
- Navigation bar: Fixed glass panel with subtle transparency
- Service cards: Frosted glass containers with hover lift effects
- Testimonial cards: Glass panels with gradient border accents
- Portfolio items: Glass overlays revealing on hover
- Modal/overlay elements: Strong glassmorphism for focus

---

## Component Library

### Navigation
- Fixed glass navbar with blur backdrop
- Logo left, navigation center, contact CTA right
- Mobile: Hamburger menu with smooth slide-in glass panel

### Hero Section
- Full viewport height (80-90vh) with dynamic particle animation background
- Centered content with bold headline using accent font
- Subtitle emphasizing "Asia's Premier Software Solutions Provider"
- Dual CTA buttons (primary: solid, secondary: glass outline)
- Animated scroll indicator at bottom

### Services Showcase
- Grid layout: 1 column mobile, 2 columns tablet, 3 columns desktop (5 services total)
- Interactive glass cards with icon, title, brief description
- Hover: Subtle lift animation, enhanced glow effect, color accent reveal
- Each card: Icon top, service name (bold), 2-3 line description

### Portfolio Section
- Tabbed interface: "Mobile Apps" and "Websites" categories
- Masonry grid layout for visual interest (2-3 columns desktop)
- Each item: Project thumbnail, title, tech stack tags, glass hover overlay
- Click opens modal with full details, embedded demo videos, project description
- Professional presentation with case study format

### Testimonials
- Carousel slider with 3 visible cards (1 mobile, 2 tablet, 3 desktop)
- Glass card design with client photo, company logo, quote, name/title
- Auto-rotate with smooth fade/slide animations
- Navigation dots below with progress indicators

### Team Section
- Founders highlighted prominently: Large glass cards with photos, names, titles, brief bios
- Team members grid: 3-4 columns with smaller cards (photos, names, roles)
- Consistent glass treatment with subtle hover effects

### Client Companies
- Logo grid: 4-6 columns responsive, grayscale logos with color on hover
- Glass container background for cohesive section

### FAQ Section
- Accordion-style interface with 6-8 common questions
- Glass panel background with smooth expand/collapse animations
- Plus/minus icon transition on toggle

### Contact Section
- Split layout: Contact form left, contact info + map right (stacked mobile)
- Phone number prominently displayed: +923196931391
- Glass form inputs with focus states
- Location, email, social links in glass info card

### Footer
- Multi-column layout: Company info, quick links, services, contact
- Newsletter signup with glass input field
- Social media icons with glass hover effects
- Copyright and additional legal links

---

## Animation Guidelines

**Core Principles:** Smooth, professional, purposeful animations that enhance user experience without distraction

**Permitted Animations:**
- Hero particle/background effects: Subtle floating elements, gentle gradients shifts
- Scroll-triggered reveals: Fade-up entrance for sections (stagger for cards)
- Hover interactions: Lift, glow enhancement, color transitions (200-300ms duration)
- Carousel/slider: Smooth transitions with easing functions
- Accordion expand/collapse: Height transitions with opacity fade
- Glass effect intensification on interaction
- Loading states: Skeleton screens or subtle pulse effects

**Restricted:**
- Avoid excessive parallax scrolling
- No distracting auto-play animations
- Keep particle effects subtle and performant

---

## Images Strategy

**Hero Section:**
- YES - Large hero background: Abstract AI/technology visualization (neural networks, data flows, circuit patterns) with gradient overlay for text legibility
- Blur background behind CTA buttons

**Portfolio:**
- High-quality screenshots of mobile app UIs and website designs
- Mockups in device frames (phones, laptops) for professional presentation
- Embedded demo videos with play overlays

**Team Section:**
- Professional headshots of founders Tayyab Nawaz and Zain Khalid
- Team member photos (can use placeholder if needed initially)
- Consistent style: Clean backgrounds, professional attire

**Client Logos:**
- Company partner logos in consistent sizing
- PNG format with transparency

**Testimonials:**
- Client company logos or client photos
- Small circular avatars

**Video Integration:**
- Portfolio case study videos embedded with custom glass-styled video players
- Thumbnail previews with play button overlays

---

## Accessibility & Performance

**Standards:**
- WCAG AA compliance minimum
- Keyboard navigation for all interactive elements
- Focus states using glass outline treatment
- Sufficient text contrast despite glass effects (test thoroughly)
- Optimized images (WebP format, lazy loading)
- Smooth 60fps animations with GPU acceleration
- Progressive enhancement for glassmorphism (fallbacks for older browsers)

---

## Multi-Column Strategy

**Where to Use:**
- Services: 3-column grid (desktop)
- Portfolio: 3-column masonry (desktop)
- Testimonials: 3-card carousel view
- Team: 4-column grid for members
- Client logos: 6-column grid
- FAQ: Single column for readability
- Footer: 4-column layout

**Responsive Breakpoints:**
- Mobile: Single column stacking
- Tablet: 2 columns maximum
- Desktop: 3-4 columns as specified

---

## Page Completeness

This website includes 8-10 major sections creating a comprehensive, professional presence:
1. Hero with animated background
2. Services showcase (5 services)
3. About/Company statement
4. Portfolio gallery (categorized)
5. Testimonials carousel
6. Team section (founders + members)
7. Client companies
8. FAQ accordion
9. Contact section
10. Rich footer

Each section is fully-featured, purposeful, and contributes to positioning QuantumDev as a premium software solutions provider.