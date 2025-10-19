# MapleGuard Insurance Website - Project Context

## 🏢 Project Overview

**MapleGuard Insurance** is a comprehensive, production-quality insurance website built with Next.js 15, TypeScript, and TailwindCSS. The project implements a complete visual design system, interactions, animations, and fully responsive behavior at a professional, global standard.

### 🎯 Brand Identity
- **Company**: MapleGuard Insurance
- **Tagline**: "Smarter coverage. Faster claims."
- **Voice**: Trustworthy, transparent, Canadian-friendly
- **Visual Style**: Modern, clean, friendly
- **Modes**: Light and dark theme support

## 🏗️ Architecture & Technology Stack

### Core Technologies
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Custom component library (shadcn-style primitives)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Theme Management**: next-themes

### Key Features
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Accessibility**: WCAG 2.2 AA compliance
- ✅ **SEO Optimized**: Meta tags, JSON-LD, sitemap
- ✅ **Performance**: Optimized for Core Web Vitals
- ✅ **Internationalization**: i18n scaffolding for future RTL support
- ✅ **Dark Mode**: System preference detection
- ✅ **Animations**: Subtle, purposeful micro-interactions

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page
│   ├── not-found.tsx            # 404 page
│   ├── sitemap.ts               # Dynamic sitemap generation
│   ├── products/                # Product pages
│   │   ├── page.tsx             # Products overview
│   │   ├── auto/page.tsx        # Auto insurance
│   │   ├── home/page.tsx        # Home insurance
│   │   ├── life/page.tsx        # Life insurance
│   │   ├── travel/page.tsx      # Travel insurance
│   │   └── business/page.tsx    # Business insurance
│   ├── quotes/page.tsx          # Multi-step quote form
│   ├── claims/page.tsx          # Claims information
│   ├── agents/page.tsx          # Agents directory
│   ├── locations/page.tsx       # Branch locations
│   ├── careers/page.tsx         # Job listings
│   ├── about/page.tsx           # About us
│   ├── contact/page.tsx         # Contact form
│   ├── faq/page.tsx             # FAQ page
│   ├── privacy/page.tsx         # Privacy policy
│   ├── terms/page.tsx           # Terms of service
│   └── accessibility/page.tsx   # Accessibility statement
├── components/                   # Reusable components
│   ├── ui/                      # Base UI components
│   │   ├── button.tsx           # Button component
│   │   ├── card.tsx             # Card component
│   │   ├── input.tsx            # Input component
│   │   ├── textarea.tsx         # Textarea component
│   │   ├── select.tsx           # Select component
│   │   ├── accordion.tsx        # Accordion component
│   │   ├── badge.tsx            # Badge component
│   │   ├── separator.tsx        # Separator component
│   │   └── progress.tsx         # Progress component
│   ├── sections/                # Page sections
│   │   ├── hero.tsx             # Hero section
│   │   ├── products-grid.tsx    # Products grid
│   │   ├── why-choose-us.tsx    # Why choose us
│   │   ├── how-claims-work.tsx  # Claims process
│   │   ├── discounts.tsx        # Discounts section
│   │   ├── testimonials.tsx     # Customer testimonials
│   │   ├── faq.tsx              # FAQ section
│   │   ├── cta-banner.tsx       # Call-to-action banner
│   │   ├── product-hero.tsx     # Product page hero
│   │   ├── coverage-details.tsx # Coverage details
│   │   ├── add-ons.tsx          # Add-ons section
│   │   ├── sample-rates.tsx     # Sample rates
│   │   └── product-faq.tsx      # Product-specific FAQ
│   ├── forms/                   # Form components
│   │   ├── quote-form.tsx       # Main quote form
│   │   └── steps/               # Form steps
│   │       ├── product-selection.tsx
│   │       ├── personal-info.tsx
│   │       ├── risk-details.tsx
│   │       ├── coverage-level.tsx
│   │       ├── add-ons.tsx
│   │       └── review.tsx
│   ├── navigation.tsx            # Main navigation
│   ├── footer.tsx               # Footer component
│   ├── theme-provider.tsx       # Theme provider
│   └── json-ld.tsx              # JSON-LD structured data
├── lib/                         # Utility functions
│   ├── utils.ts                 # Common utilities
│   └── design-tokens.ts         # Design system tokens
├── types/                       # TypeScript types
│   └── index.ts                 # Type definitions
└── data/                        # Static data
    └── products.ts              # Product information
```

## 🎨 Design System

### Color Palette
- **Primary**: Trustworthy blue (#3B82F6)
- **Accent**: Maple green (#10B981)
- **Neutral**: Slate/gray scale
- **Semantic**: Success, warning, error colors

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Inter SemiBold (600)
- **Body**: Inter Regular (400)
- **Scale**: Consistent 4px spacing scale

### Spacing & Layout
- **Grid**: 12-column responsive grid
- **Spacing**: 4px base unit (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96)
- **Breakpoints**: Mobile-first (sm, md, lg, xl, 2xl)
- **Containers**: Max-width with responsive padding

### Motion & Animation
- **Duration**: 200-400ms for most interactions
- **Easing**: Standard easing curves
- **Reduced Motion**: Respects user preferences
- **Micro-interactions**: Hover, focus, and state changes

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18.0 or higher
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd mapleguard-insurance

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🌐 Pages & Features

### Home Page
- **Hero Section**: Compelling value proposition
- **Products Grid**: All insurance products
- **Why Choose Us**: Key differentiators
- **How Claims Work**: Process explanation
- **Discounts**: Available savings
- **Testimonials**: Customer reviews
- **FAQ**: Common questions
- **CTA Banner**: Call-to-action

### Product Pages (5 total)
- **Auto Insurance**: Comprehensive auto coverage
- **Home Insurance**: Property protection
- **Life Insurance**: Life and health coverage
- **Travel Insurance**: Travel protection
- **Business Insurance**: Commercial coverage

Each product page includes:
- Product hero with key benefits
- Coverage details and highlights
- Add-ons and optional coverage
- Sample rates and pricing
- Product-specific FAQ
- Strong call-to-action

### Quote Form
- **Multi-step Process**: 6 steps total
- **Product Selection**: Choose insurance type
- **Personal Information**: Contact and basic info
- **Risk Details**: Specific risk factors
- **Coverage Level**: Coverage amount selection
- **Add-ons**: Optional coverage selection
- **Review & Submit**: Final review and submission

### Additional Pages
- **Agents Directory**: Searchable agent listings
- **Locations**: Branch locations with map
- **Careers**: Job listings and company info
- **About Us**: Company information
- **Contact**: Contact form and information
- **FAQ**: Comprehensive FAQ section
- **Legal Pages**: Privacy, Terms, Accessibility

## 🔧 Customization Guide

### Branding
1. **Colors**: Update CSS variables in `src/app/globals.css`
2. **Typography**: Modify font imports and Tailwind config
3. **Logo**: Replace logo components in navigation and footer
4. **Content**: Update text content in component files

### Content Management
1. **Products**: Modify `src/data/products.ts`
2. **FAQ**: Update FAQ data in page components
3. **Testimonials**: Update testimonial data
4. **Agents**: Update agent information in agents page
5. **Locations**: Update location data in locations page

### Styling
1. **Design Tokens**: Update `src/lib/design-tokens.ts`
2. **Tailwind Config**: Modify `tailwind.config.ts`
3. **Component Styles**: Update individual component files
4. **Global Styles**: Modify `src/app/globals.css`

### Functionality
1. **Forms**: Update form validation schemas
2. **API Endpoints**: Add backend integration
3. **Analytics**: Implement tracking events
4. **Internationalization**: Add new languages

## 🧪 Testing

### Manual Testing Checklist
- [ ] **Responsiveness**: Test on mobile, tablet, desktop
- [ ] **Accessibility**: Screen reader, keyboard navigation
- [ ] **Performance**: Lighthouse scores, Core Web Vitals
- [ ] **Cross-browser**: Chrome, Firefox, Safari, Edge
- [ ] **Forms**: Validation, submission, error handling
- [ ] **Navigation**: All links, mobile menu, breadcrumbs
- [ ] **SEO**: Meta tags, structured data, sitemap

### Automated Testing
```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build verification
npm run build
```

## 📈 Performance Optimization

### Implemented Optimizations
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts with display=swap
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Webpack bundle analyzer
- **Caching**: Static generation where possible
- **Lazy Loading**: Component and image lazy loading

### Performance Targets
- **LCP**: < 2.5 seconds
- **CLS**: ≈ 0
- **TBT**: < 200ms
- **TTI**: < 3.8 seconds
- **Lighthouse Score**: ≥ 90

## 🔍 SEO Implementation

### Meta Tags
- Dynamic title and description per page
- OpenGraph and Twitter Card support
- Canonical URLs
- Language and locale settings

### Structured Data
- Organization JSON-LD
- LocalBusiness schema
- BreadcrumbList schema
- Article schema (for blog posts)

### Technical SEO
- `robots.txt` configuration
- Dynamic sitemap generation
- 404 error handling
- Redirect management

## 🌍 Internationalization (i18n)

### Current Implementation
- English (en) as default language
- RTL support scaffolding
- Language switcher component
- Locale-aware routing

### Future Expansion
- Persian (fa) language support
- Additional language support
- Currency and date formatting
- Cultural adaptations

## 🚀 Deployment

### Recommended Platform
- **Vercel**: Optimized for Next.js
- **Environment Variables**: Configure production settings
- **Domain**: Set up custom domain
- **SSL**: Automatic HTTPS

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://mapleguard.ca
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📊 Analytics & Tracking

### Implemented Tracking
- Vercel Analytics integration
- Google Analytics 4 ready
- Event tracking for:
  - Quote form completions
  - CTA button clicks
  - Page views and scroll depth
  - Form interactions

### Custom Events
- `quote_started`: User begins quote process
- `quote_completed`: Quote form submitted
- `cta_clicked`: Call-to-action clicked
- `agent_contacted`: Agent contact initiated

## 🔒 Security Considerations

### Implemented Security
- Form validation and sanitization
- CSRF protection
- XSS prevention
- Content Security Policy ready
- Rate limiting preparation

### Best Practices
- Environment variable protection
- Secure form handling
- Input validation with Zod
- Error boundary implementation

## 🐛 Troubleshooting

### Common Issues
1. **Node.js Version**: Ensure Node.js 18.18.0+
2. **Dependencies**: Run `npm install` if packages missing
3. **Build Errors**: Check TypeScript errors with `npm run type-check`
4. **Styling Issues**: Verify TailwindCSS configuration

### Debug Mode
```bash
# Enable debug logging
DEBUG=* npm run dev

# Check build output
npm run build -- --debug
```

## 📚 Next Steps

### Immediate Actions
1. **Content Review**: Update all placeholder content
2. **Image Assets**: Add real images and logos
3. **API Integration**: Connect forms to backend
4. **Analytics Setup**: Configure tracking
5. **Testing**: Comprehensive testing across devices

### Future Enhancements
1. **Blog System**: Implement MDX-based blog
2. **User Portal**: Customer account management
3. **Payment Integration**: Online payment processing
4. **Live Chat**: Customer support integration
5. **Mobile App**: React Native companion app

### Maintenance
1. **Regular Updates**: Keep dependencies current
2. **Performance Monitoring**: Track Core Web Vitals
3. **Security Updates**: Regular security patches
4. **Content Updates**: Keep information current
5. **SEO Monitoring**: Track search rankings

## 📞 Support

For technical support or questions about this project:
- **Documentation**: This file and inline code comments
- **Issues**: Create GitHub issues for bugs
- **Features**: Submit feature requests
- **Contributions**: Follow contribution guidelines

---

**MapleGuard Insurance Website** - Built with ❤️ using Next.js, TypeScript, and TailwindCSS

