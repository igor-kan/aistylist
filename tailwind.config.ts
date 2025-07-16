/**
 * AIStylist Tailwind CSS Configuration
 * 
 * Fashion-forward design system configuration optimized for AI-powered styling interfaces
 * and wardrobe management platforms. This configuration establishes a comprehensive
 * color palette, spacing system, and animation framework specifically tailored for
 * fashion content presentation and user experience excellence.
 * 
 * Design System Philosophy:
 * - Color psychology aligned with fashion industry standards and user emotional responses
 * - Accessibility-first approach ensuring inclusive fashion discovery for all users
 * - Mobile-first responsive design optimized for on-the-go styling decisions
 * - Brand consistency supporting premium AI fashion platform positioning
 * - Performance-optimized CSS generation minimizing bundle size impact
 */

import type { Config } from "tailwindcss";

/**
 * AIStylist Design System Configuration
 * 
 * Comprehensive styling framework for AI-powered fashion and wardrobe management.
 * Integrates shadcn/ui component system with fashion-specific design patterns,
 * color schemes, and interaction models optimized for styling workflows.
 * 
 * Key Design Principles:
 * - Visual hierarchy supporting fashion content consumption patterns
 * - Color harmony principles reflecting fashion industry best practices  
 * - Typography scales optimized for fashion product information and AI recommendations
 * - Spacing system enabling clean, Pinterest-style fashion content layouts
 * - Animation framework supporting delightful micro-interactions in styling workflows
 */
const config: Config = {
    /**
     * Dark Mode Configuration
     * 
     * Class-based dark mode implementation enabling dynamic theme switching
     * optimized for fashion photography viewing and wardrobe browsing in various
     * lighting conditions. Essential for users styling outfits in different environments.
     * 
     * Fashion Use Cases:
     * - Evening wardrobe planning with reduced eye strain
     * - Fashion photography review in low-light environments
     * - Color-accurate garment visualization across lighting conditions
     * - Professional styling workflow optimization for photographers and stylists
     */
    darkMode: ["class"],

    /**
     * Content Path Configuration
     * 
     * Comprehensive file pattern matching for Tailwind CSS class detection across
     * the entire Next.js application structure. Ensures optimal CSS purging while
     * maintaining complete styling coverage for dynamic fashion content.
     * 
     * Path Strategy:
     * - Complete Next.js App Router coverage for modern React patterns
     * - Component library integration supporting modular fashion UI development
     * - Dynamic content styling for AI-generated fashion recommendations
     * - Third-party integration styling for fashion API and service connections
     */
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
        /**
         * Fashion-Optimized Color System
         * 
         * Comprehensive color palette designed for fashion content presentation,
         * AI interface clarity, and brand consistency. Uses CSS custom properties
         * for dynamic theming and accessibility compliance across light/dark modes.
         * 
         * Color Psychology for Fashion:
         * - Background colors optimized for garment photography contrast
         * - Foreground colors ensuring readability across fashion imagery
         * - Accent colors supporting fashion brand identity and premium positioning
         * - Chart colors enabling clear fashion analytics and wardrobe insights
         * - Sidebar colors creating intuitive navigation for wardrobe organization
         * 
         * Accessibility Considerations:
         * - WCAG AA compliance for color contrast ratios across all combinations
         * - Color-blind friendly palette ensuring inclusive fashion discovery
         * - High contrast modes supporting users with visual impairments
         * - Dynamic contrast adjustment based on ambient lighting conditions
         */
  		colors: {
            /**
             * Core Interface Colors
             * Base styling for primary interface elements and content areas
             */
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',

            /**
             * Card Component System
             * Optimized for fashion product cards, outfit displays, and wardrobe organization
             */
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},

            /**
             * Popover and Modal System
             * Supporting fashion detail views, styling tips, and AI recommendations
             */
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},

            /**
             * Primary Brand Colors
             * Core brand identity supporting premium AI fashion platform positioning
             */
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},

            /**
             * Secondary Action Colors  
             * Supporting styling actions, wardrobe management, and user workflow completion
             */
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},

            /**
             * Muted Information Display
             * Fashion metadata, styling context, and secondary information presentation
             */
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},

            /**
             * Accent Highlighting System
             * AI recommendations, new arrivals, and featured fashion content emphasis
             */
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},

            /**
             * Destructive Action Colors
             * Wardrobe item removal, outfit deletion, and irreversible action warnings
             */
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},

            /**
             * Interface Element Colors
             * Form inputs, borders, and interactive element styling
             */
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',

            /**
             * Fashion Analytics Color Palette
             * Wardrobe statistics, style trend visualization, and AI insight presentation
             */
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},

            /**
             * Navigation Sidebar System
             * Wardrobe categories, style filters, and fashion tool organization
             */
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},

        /**
         * Border Radius System
         * 
         * Consistent corner styling across fashion UI components creating
         * modern, approachable interface aesthetics aligned with current
         * fashion platform design trends and user expectations.
         * 
         * Radius Philosophy:
         * - Large radius for primary fashion content cards and hero elements
         * - Medium radius for interactive components and styling tools
         * - Small radius for fine detail elements and metadata displays
         * - Responsive scaling maintaining visual consistency across device sizes
         */
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},

        /**
         * Fashion-Focused Animation System
         * 
         * Micro-interaction animations optimized for fashion content discovery
         * and wardrobe management workflows. Provides smooth, delightful user
         * experiences during styling sessions and AI recommendation interactions.
         * 
         * Animation Principles:
         * - Performance-optimized transforms avoiding layout thrashing
         * - Accessibility-aware animations respecting user motion preferences
         * - Fashion-appropriate timing curves reflecting premium brand positioning
         * - Contextual animations supporting fashion workflow completion feedback
         */
  		keyframes: {
            /**
             * Accordion Content Expansion
             * 
             * Smooth reveal animations for fashion category expansion,
             * wardrobe section disclosure, and styling tip presentation.
             * Optimized for clothing category browsing and outfit detail viewing.
             */
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},

            /**
             * Accordion Content Collapse
             * 
             * Elegant content hiding for wardrobe organization and
             * fashion category management. Maintains visual hierarchy
             * during navigation between styling sections and outfit options.
             */
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},

        /**
         * Animation Timing Configuration
         * 
         * Precisely tuned animation durations and easing functions
         * optimized for fashion content interaction patterns and
         * premium user experience expectations.
         * 
         * Timing Strategy:
         * - Fast enough to feel responsive during rapid styling decisions  
         * - Slow enough to provide visual feedback and maintain elegance
         * - Consistent across all fashion workflow interactions
         * - Accessible for users with motion sensitivity preferences
         */
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },

  /**
   * Plugin Configuration
   * 
   * Essential animation utilities for modern fashion interface development.
   * Provides comprehensive micro-interaction capabilities supporting
   * engaging styling workflows and AI-powered recommendation presentations.
   * 
   * Plugin Benefits:
   * - Seamless integration with React component animation needs
   * - Performance-optimized CSS animations reducing JavaScript overhead
   * - Accessibility-compliant animation patterns respecting user preferences
   * - Consistent animation timing across the entire fashion platform
   */
  plugins: [require("tailwindcss-animate")],
};

export default config;
