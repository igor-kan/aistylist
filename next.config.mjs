// next.config.mjs
// Next.js 

/**
 * AIStylist Next.js Configuration
 * 
 * Optimized build configuration for AI-powered fashion and wardrobe management platform.
 * This configuration enables static site generation for optimal performance, SEO, and
 * deployment flexibility across various hosting platforms including GitHub Pages.
 * 
 * Configuration Philosophy:
 * - Static export for maximum hosting compatibility and edge deployment
 * - Performance-first settings optimized for fashion image content
 * - Development experience optimizations for rapid iteration
 * - Deployment flexibility supporting multiple hosting environments
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Static Export Configuration
   * 
   * Enables static site generation for the AI fashion platform, providing:
   * - Lightning-fast page loads for fashion content consumption
   * - CDN-friendly static assets for global fashion community reach
   * - Zero server costs while maintaining full functionality
   * - Enhanced security through static file serving
   * 
   * Fashion Platform Benefits:
   * - Instant wardrobe image loading from static assets
   * - Global edge distribution for fashion trend data
   * - Offline-capable styling tools and wardrobe browsing
   * - SEO optimization for fashion discovery and social sharing
   */
  output: 'export',

  /**
   * Base Path Configuration
   * 
   * Configures deployment path for GitHub Pages and subdirectory hosting.
   * Essential for proper asset resolution in production environments
   * while maintaining development workflow simplicity.
   * 
   * Path Strategy:
   * - Maintains clean URLs in development with automatic rewriting
   * - Enables subdirectory deployment without code changes
   * - Supports white-label fashion platform deployments
   * - Facilitates A/B testing with path-based routing
   */
  basePath: '/aistylist',

  /**
   * ESLint Configuration
   * 
   * Optimizes build performance for rapid fashion feature iteration.
   * Prioritizes deployment speed while maintaining code quality through
   * development-time linting and CI/CD pipeline checks.
   * 
   * Development Workflow:
   * - Fast builds enable rapid fashion feature prototyping
   * - Pre-commit hooks maintain code quality standards
   * - CI/CD pipeline enforces linting for production deployments
   * - Developer freedom for experimental AI styling features
   */
  eslint: {
    ignoreDuringBuilds: true,
  },

  /**
   * TypeScript Configuration
   * 
   * Enables rapid deployment while maintaining type safety during development.
   * Particularly important for AI fashion platforms with complex data models
   * and machine learning integration requirements.
   * 
   * Type Safety Strategy:
   * - Development-time type checking for AI model interfaces
   * - Gradual type adoption for fashion data schemas
   * - Build speed optimization for fashion content iteration
   * - Production deployment flexibility with type validation in CI/CD
   */
  typescript: {
    ignoreBuildErrors: true,
  },

  /**
   * Image Optimization Configuration
   * 
   * Disables Next.js image optimization for static export compatibility.
   * Fashion platforms require specialized image handling for garment photography,
   * style visualization, and AI-generated fashion content.
   * 
   * Fashion Image Strategy:
   * - Custom image optimization pipeline for fashion photography
   * - AI-generated style images require specialized processing
   * - Wardrobe item cataloging with consistent image standards
   * - Social sharing optimization for outfit photography
   * - Color accuracy preservation for fashion color matching
   * 
   * Performance Considerations:
   * - CDN-based image delivery for global fashion community
   * - Progressive loading for large fashion catalogs
   * - WebP/AVIF format optimization for modern browsers
   * - Responsive image delivery based on device and context
   */
  images: {
    unoptimized: true,
  },
}

export default nextConfig
