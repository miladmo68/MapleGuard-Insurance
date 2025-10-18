# MapleGuard Insurance Website

A modern, accessible insurance website built with Next.js, TypeScript, and TailwindCSS.

## Features

- **Modern Design**: Clean, professional design with mobile-first responsive layout
- **Accessibility**: WCAG 2.2 AA compliant with keyboard navigation and screen reader support
- **Performance**: Optimized for Core Web Vitals with fast loading times
- **SEO**: Comprehensive SEO with meta tags, JSON-LD structured data, and sitemap
- **Multi-step Forms**: Interactive quote forms with validation and progress tracking
- **Product Pages**: Detailed product pages for Auto, Home, Life, Travel, and Business insurance
- **Legal Pages**: Privacy Policy, Terms of Service, and Accessibility Statement
- **Contact & Support**: Contact forms, FAQ, and claims center

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Custom component library with Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: Light/Dark mode support with next-themes

## Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/mapleguard-insurance.git
cd mapleguard-insurance
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local` with your actual values.

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── claims/            # Claims center
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── products/          # Product pages
│   │   ├── auto/          # Auto insurance
│   │   ├── home/          # Home insurance
│   │   ├── life/          # Life insurance
│   │   ├── travel/        # Travel insurance
│   │   └── business/      # Business insurance
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── accessibility/     # Accessibility statement
│   ├── quotes/            # Quote form
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   └── sitemap.ts         # Sitemap generation
├── components/            # React components
│   ├── ui/               # UI component library
│   ├── sections/         # Page sections
│   ├── forms/            # Form components
│   ├── navigation.tsx    # Navigation component
│   ├── footer.tsx        # Footer component
│   └── json-ld.tsx       # Structured data
├── data/                 # Static data
│   └── products.ts       # Product information
├── lib/                  # Utility functions
│   ├── utils.ts          # Common utilities
│   └── design-tokens.ts  # Design system tokens
└── types/                # TypeScript types
    └── index.ts          # Type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Design System

The project uses a comprehensive design system with:

- **Colors**: Primary blue, accent green, and neutral grays
- **Typography**: Inter font family with consistent sizing
- **Spacing**: 4px baseline grid system
- **Components**: Reusable UI components with variants
- **Animations**: Subtle, purposeful animations with reduced motion support

## Accessibility

The website is built with accessibility in mind:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus management
- Skip navigation links

## SEO Features

- Meta tags for all pages
- Open Graph and Twitter Card support
- JSON-LD structured data
- XML sitemap generation
- robots.txt configuration
- Canonical URLs
- Performance optimization

## Performance

- Image optimization with Next.js Image component
- Font optimization with next/font
- Code splitting and lazy loading
- Core Web Vitals optimization
- Lighthouse score optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email hello@mapleguard.ca or call 1-800-MAPLE-01.

## Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- Radix UI for accessible component primitives
- Lucide for the beautiful icon set
- Framer Motion for smooth animations