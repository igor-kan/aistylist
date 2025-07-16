/**
 * AIStylist - AI-Powered Wardrobe Management and Fashion Styling Platform
 * 
 * Root layout component for a sophisticated AI-driven fashion and wardrobe management
 * application that leverages machine learning for personalized styling recommendations:
 * - AI-powered outfit generation based on personal style preferences
 * - Smart wardrobe organization and inventory management
 * - Weather-aware clothing recommendations and seasonal suggestions
 * - Style trend analysis and personalized fashion insights
 * - Virtual try-on capabilities and fit prediction algorithms
 * 
 * Next.js Architecture Philosophy:
 * Built using Next.js App Router for optimal performance, SEO, and user experience.
 * This approach provides server-side rendering capabilities essential for fashion
 * content discovery while maintaining the interactive client-side experience
 * necessary for real-time styling and wardrobe management features.
 */

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

/**
 * Typography Configuration for Fashion-Forward Design
 * 
 * Inter font selection optimized for fashion and lifestyle applications:
 * - Excellent readability across all device sizes from mobile to desktop
 * - Modern, clean aesthetic that complements fashion content and imagery
 * - Comprehensive character set supporting international fashion brands
 * - Optimal rendering for both body text and user interface elements
 * 
 * Fashion Platform Considerations:
 * - Consistent typography hierarchy for clothing descriptions and styling advice
 * - Accessibility compliance for users with visual impairments
 * - Performance optimization with subset loading for faster page loads
 * - Brand-neutral typeface that doesn't compete with fashion content
 */
const inter = Inter({ subsets: ["latin"] })

/**
 * SEO and Social Media Metadata Configuration
 * 
 * Optimized metadata for fashion and lifestyle content discovery:
 * - Fashion-focused title and description for search engine optimization
 * - Social media sharing optimization for style inspiration content
 * - Mobile-friendly meta tags for responsive fashion browsing experience
 * - Structured data preparation for fashion e-commerce integration
 */
export const metadata: Metadata = {
  title: "AIStylist - AI-Powered Wardrobe Assistant & Fashion Styling Platform",
  description: "Revolutionary AI-driven wardrobe management and fashion styling application. Get personalized outfit recommendations, smart wardrobe organization, and AI-powered style insights tailored to your preferences, lifestyle, and body type.",
  // Additional metadata for enhanced SEO and social sharing:
  keywords: "AI fashion, wardrobe management, personal stylist, outfit recommendations, fashion AI, style assistant",
  authors: [{ name: "Igor Kan", url: "https://igorkan.com" }],
  creator: "Igor Kan",
  openGraph: {
    title: "AIStylist - AI-Powered Fashion & Wardrobe Management",
    description: "Transform your style with AI-powered wardrobe management and personalized fashion recommendations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIStylist - AI Fashion & Style Assistant",
    description: "Revolutionary AI-powered wardrobe management and personalized styling platform.",
    creator: "@1gor_kan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

/**
 * Root Layout Component for AIStylist Platform
 * 
 * Establishes the foundational HTML structure and global styling for the entire
 * AI-powered fashion and wardrobe management application with emphasis on
 * performance, accessibility, and user experience optimization.
 * 
 * Layout Architecture (Fashion Platform Hierarchy):
 * 1. HTML Document Structure - Semantic HTML for fashion content accessibility
 * 2. Global Typography - Inter font for consistent, readable fashion content
 * 3. CSS Foundation - Global styles optimized for fashion imagery and interfaces
 * 4. Children Content - Dynamic page content with AI styling recommendations
 * 5. Developer Attribution - Professional footer with creator information
 * 
 * Fashion Platform Considerations:
 * - Mobile-first responsive design for on-the-go fashion browsing
 * - Optimized for high-resolution fashion imagery and visual content
 * - Accessibility features for inclusive fashion discovery and management
 * - Performance optimization for fast loading of wardrobe and styling interfaces
 * 
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Page content to be rendered within the layout
 * @returns {JSX.Element} Complete HTML document structure for the fashion platform
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 
          Main Application Content Area
          
          Dynamic content rendering for all fashion and wardrobe management features:
          - AI-powered styling recommendations and outfit generation
          - Interactive wardrobe organization and inventory management
          - Personal style analysis and trend discovery interfaces
          - Virtual try-on and fit prediction visualization tools
          - Social sharing and style inspiration community features
        */}
        {children}
        
        {/* 
          Professional Developer Attribution Footer
          
          Provides transparent creator attribution and contact information:
          - Professional portfolio link for project inquiries and collaboration
          - GitHub repository access for technical review and contributions
          - Social media presence for fashion technology updates and insights
          
          Fashion Industry Networking:
          - Establishes developer credibility in fashion technology space
          - Provides contact channels for fashion brand partnerships
          - Demonstrates commitment to open-source fashion technology innovation
        */}
        <footer style={{ 
          textAlign: 'center', 
          marginTop: '20px', 
          padding: '10px', 
          fontSize: '0.8em', 
          color: '#555',
          borderTop: '1px solid #eee',
          backgroundColor: '#fafafa'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            Developed by{' '}
            <strong>Igor Kan</strong> | {' '}
            <a 
              href="https://igorkan.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: '#007bff', 
                textDecoration: 'none',
                borderBottom: '1px dotted #007bff'
              }}
              aria-label="Visit Igor Kan's professional portfolio website"
            >
              Portfolio
            </a> | {' '}
            <a 
              href="https://github.com/igor-kan" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: '#007bff', 
                textDecoration: 'none',
                borderBottom: '1px dotted #007bff'
              }}
              aria-label="View Igor Kan's GitHub profile and open source projects"
            >
              GitHub
            </a> | {' '}
            <a 
              href="https://x.com/1gor_kan" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: '#007bff', 
                textDecoration: 'none',
                borderBottom: '1px dotted #007bff'
              }}
              aria-label="Follow Igor Kan on X (Twitter) for fashion tech updates"
            >
              X (@1gor_kan)
            </a>
          </div>
          <div style={{ fontSize: '0.7em', marginTop: '5px', color: '#777' }}>
            AI-Powered Fashion Technology • Sustainable Style Innovation
          </div>
        </footer>
      </body>
    </html>
  )
}
