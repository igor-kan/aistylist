# Aistylist - AI-Powered Platform

## Project Overview
> **Enterprise-Grade AI Fashion Assistant**: Transform your wardrobe into an intelligent styling ecosystem with machine learning-powered recommendations, comprehensive garment cataloging, and personalized fashion analytics.

## Technology Stack
- **Framework**: Next.js
- **Language**: TypeScript
- **Runtime**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Form Management**: React Hook Form + Zod validation
- **Deployment**: GitHub Pages

## Key Features
- Modern responsive web application
- TypeScript for type safety
- Accessible UI components with Radix UI
- Advanced form handling and validation
- Interactive data visualization
- Dark/light theme switching

## Core Dependencies
- **UI Framework**: Radix UI component suite
- **Styling**: class-variance-authority, clsx, tailwind-merge
- **Forms**: react-hook-form with Zod validation
- **Recharts**: Data visualization and charts
- **Date Fns**: Date manipulation utilities
- **Lucide React**: Icon library
- **Next Themes**: Theme management
- **Sonner**: Toast notifications
- **Cmdk**: Command palette
- **Vaul**: Mobile-optimized modals

## Development Commands
```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Deploy to GitHub Pages
npm run deploy

```

## Project Structure
```
aistylist/
├── app/                     # Next.js App Router
├── components/              # React components
├── lib/                     # Utility functions
├── hooks/                   # Custom React hooks
├── public/                  # Static assets
├── styles/                  # Stylesheets
├── next.config.mjs          # Configuration
├── tailwind.config.ts       # Configuration
├── tsconfig.json            # Configuration
└── package.json             # Dependencies
```

## Deployment
- **Platform**: GitHub Pages
- **URL**: https://igor-kan.github.io/aistylist
- **Build**: Static site generation
- **CI/CD**: Automated deployment via gh-pages

## Development Notes
- Uses Next.js App Router for modern React development
- Implements comprehensive form validation with Zod
- Includes accessibility features through Radix UI
- Supports dark/light theme switching

## Next.js Features
- **App Router**: Modern routing system
- **Server Components**: Optimized rendering
- **Static Site Generation**: Pre-rendered pages
- **Image Optimization**: Automatic image processing
- **API Routes**: Serverless API endpoints

## Testing & Quality
- TypeScript for type safety

## AI Fashion Features
- **Machine Learning Recommendations**: Advanced algorithms analyze personal style preferences, body type, and lifestyle factors
- **Weather Integration**: Real-time weather data integration for climate-appropriate styling suggestions
- **Color Theory Application**: Sophisticated color harmony analysis ensuring cohesive outfit combinations
- **Style Evolution Tracking**: Monitor and adapt to changing personal style preferences over time
- **Wardrobe Analytics**: Comprehensive insights into garment utilization, cost-per-wear calculations, and style gaps

## Fashion Technology Capabilities
- **Smart Cataloging**: Digital wardrobe creation with detailed garment metadata and categorization
- **Outfit History**: Track and rediscover successful outfit combinations
- **Seasonal Rotation**: Intelligent wardrobe planning across climate changes
- **Brand Integration**: Future marketplace integrations for seamless shopping experiences
- **Social Sharing**: Community-driven style sharing and trend identification

## Target User Segments
- **Fashion Enthusiasts**: Personal style optimization and trend discovery
- **Professional Stylists**: Enterprise-grade tools for client management and styling workflows
- **Busy Professionals**: Quick, intelligent outfit recommendations for daily wear
- **Fashion Students**: Educational tools for learning color theory and style principles

## Future Enhancements
- **Computer Vision**: Automatic garment recognition and categorization from photos
- **AR Try-On**: Virtual fitting and visualization capabilities
- **Sustainability Scoring**: Environmental impact tracking for conscious fashion choices
- **Professional Marketplace**: Platform for stylist services and fashion consultations
- **AI Style Coach**: Personalized fashion education and improvement recommendations
- **Biometric Integration**: Body measurement tracking for optimal fit recommendations



## 🧭 Claude Code Navigation

### Quick Commands
**Development Scripts:**
- `dev`: next dev
- `build`: next build
- `start`: next start
- `lint`: next lint
- `deploy`: gh-pages -d out

**Key Files:**
- `package.json` - Dependencies and scripts configuration
- `README.md` - Project documentation and setup guide
- `CLAUDE.md` - Comprehensive development guide for Claude
- `next.config.mjs` - Next.js framework configuration
- `tailwind.config.ts` - Tailwind CSS styling configuration
- `tsconfig.json` - TypeScript compiler configuration
- `components.json` - shadcn/ui components configuration

**Key Directories:**
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `lib/` - Utility functions and shared logic
- `hooks/` - Custom React hooks
- `public/` - Static assets (images, icons, etc.)
- `styles/` - CSS and styling files

**Claude Code Files:**
- `.claude/project-context.md` - Project overview and structure
- `.claude/coding-standards.md` - Development guidelines and patterns
- `.claude/commands/` - Custom Claude commands for common tasks
- `.claude/context/` - Domain-specific development context


### Quick Reference

**Common Tasks:**
- Start development: `npm run dev` or `bun dev`
- Build project: `npm run build` or `bun build`
- Lint code: `npm run lint` or `bun lint`
- Deploy: `npm run deploy` or `bun deploy`

**File Patterns:**
- Components: `components/**/*.tsx`
- Pages: `app/**/*.tsx` or `pages/**/*.tsx`
- Utilities: `lib/**/*.ts`
- Styles: `**/*.css` or use Tailwind classes
- Tests: `**/*.test.ts` or `**/*.spec.ts`

**Development Tips:**
- Use TypeScript for type safety
- Follow existing component patterns
- Utilize shadcn/ui components
- Implement responsive design with Tailwind
- Test changes before committing

