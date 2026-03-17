# Development Guide

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles + accessibility
├── components/
│   ├── animations/
│   │   ├── PageTransition.tsx
│   │   └── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   ├── sections/
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LogoMarquee.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ResultsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── FAQSection.tsx
│   │   └── Footer.tsx
│   ├── three/
│   │   ├── HeroCanvas.tsx      # 3D canvas wrapper
│   │   └── HeroOrb.tsx         # Animated 3D orb
│   └── ui/
│       ├── Preloader.tsx       # Loading screen
│       ├── CustomCursor.tsx    # Desktop cursor
│       ├── ScrollProgress.tsx  # Top progress bar
│       ├── BackToTop.tsx       # Scroll to top button
│       ├── SectionDivider.tsx  # Section separators
│       ├── SkipToContent.tsx   # Accessibility
│       ├── ThemeColor.tsx      # Dynamic theme-color
│       └── ThemeToggle.tsx     # Light/dark toggle
├── context/
│   └── ThemeContext.tsx        # Theme state management
├── lib/
│   ├── constants.ts            # Navigation links, etc.
│   └── utils.ts                # Utility functions
└── public/                     # Static assets
```

## Key Features

### Smooth Scroll
The entire site uses Lenis for buttery smooth scrolling. It's initialized in `SmoothScroll.tsx` and wraps the entire app.

### Custom Cursor
Desktop-only custom cursor with trailing effect. Automatically hidden on mobile/touch devices.

### Preloader
Shows on initial page load with sequential letter animation and progress bar.

### Theme System
- Light/dark mode toggle
- Persists to localStorage
- Smooth transitions between themes
- Dynamic theme-color meta tag

### Animations
All animations use Framer Motion with:
- Entry: 0.6-0.8s duration
- Hover: 0.3s duration
- Spring: stiffness 100, damping 15
- Scroll-triggered with useInView

### 3D Elements
- React Three Fiber for 3D orb in hero
- Dynamic import with SSR disabled
- Suspense boundary for loading state
- Disabled on mobile for performance

## Customization

### Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --accent-primary: #E8553D;
  --accent-secondary: #2D5A3D;
  --accent-tertiary: #D4A853;
  /* ... */
}
```

### Content
- Navigation links: `lib/constants.ts`
- Section content: Individual section files
- Metadata: `app/layout.tsx`

### Animations
Adjust timing in individual components or create global constants.

## Performance Tips

1. **Images**: Use Next.js Image component with proper sizing
2. **Fonts**: Already optimized with `display: swap`
3. **3D**: Keep geometry simple, use instancing for multiple objects
4. **Animations**: Only animate transform and opacity
5. **Code Splitting**: Use dynamic imports for heavy components

## Accessibility Checklist

- [ ] All images have alt text
- [ ] All buttons have aria-labels
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG AA
- [ ] Animations respect prefers-reduced-motion
- [ ] Skip to content link present
- [ ] Semantic HTML used throughout

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile Safari: iOS 14+
- Chrome Mobile: Latest

## Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## Environment Variables

None required for basic functionality. Add as needed for:
- Analytics
- Contact form backend
- CMS integration

## Testing

### Manual Testing Checklist
- [ ] All sections render correctly
- [ ] Smooth scroll works
- [ ] Theme toggle works
- [ ] Mobile menu works
- [ ] All animations trigger
- [ ] 3D orb loads
- [ ] Preloader shows once
- [ ] Back to top button appears
- [ ] FAQ accordion works
- [ ] Newsletter form submits
- [ ] All links work
- [ ] Responsive on all breakpoints

### Lighthouse Audit
Run in Chrome DevTools:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit for Performance, Accessibility, Best Practices, SEO

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Troubleshooting

### Smooth scroll not working
- Check if Lenis is properly initialized
- Ensure SmoothScroll wraps the app
- Check for conflicting scroll libraries

### 3D orb not showing
- Check browser console for errors
- Ensure WebGL is supported
- Try disabling browser extensions

### Animations not triggering
- Check if Framer Motion is installed
- Verify useInView is properly configured
- Check for CSS conflicts

### Theme not persisting
- Check localStorage permissions
- Verify ThemeContext is wrapping app
- Check for hydration errors

## Contributing

1. Follow existing code style
2. Test on multiple browsers
3. Ensure accessibility standards
4. Run Lighthouse audit
5. Update documentation

## License

Proprietary - All rights reserved
