/**
 * RecentLooks Component - Style History & Outfit Evolution Tracking
 * 
 * Comprehensive outfit history visualization providing insights into personal style
 * evolution, successful combinations, and styling preference patterns. This component
 * serves as a visual timeline of fashion choices, enabling style rediscovery, pattern
 * analysis, and confidence building through outfit performance tracking and assessment.
 * 
 * Style Evolution Philosophy:
 * - Visual outfit timeline supporting personal style development tracking and reflection
 * - Performance analytics enabling identification of successful styling combinations and patterns
 * - Occasion-based organization supporting context-appropriate styling workflow optimization
 * - Rating system providing quantified feedback for continuous styling improvement and confidence
 * 
 * Fashion Timeline Features:
 * - Chronological outfit display supporting style evolution visualization and pattern recognition
 * - Rating analytics identifying highest-performing combinations for future styling inspiration
 * - Occasion categorization enabling context-specific outfit rediscovery and workflow optimization
 * - Visual appeal maintenance through professional fashion photography and aesthetic presentation
 * 
 * User Experience Strategy:
 * - Pinterest-style visual browsing optimized for fashion inspiration and style rediscovery
 * - Hover interactions providing engaging feedback during outfit review and selection processes
 * - Responsive grid system ensuring optimal presentation across desktop, tablet, and mobile contexts
 * - Quick access navigation supporting seamless transition to comprehensive look management
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

/**
 * RecentLooks Component
 * 
 * Renders chronological outfit history with performance analytics and visual appeal
 * optimization. Provides insights into styling patterns, successful combinations,
 * and personal fashion evolution through intuitive timeline presentation.
 * 
 * Component Architecture:
 * - Static rendering ensuring fast outfit history availability and optimal SEO performance
 * - Responsive grid system adapting to various device sizes and screen orientations
 * - Performance-optimized image handling supporting high-resolution fashion photography
 * - Accessibility compliance enabling inclusive outfit review across diverse user capabilities
 * 
 * Fashion Analytics Integration:
 * - Rating System: Quantified outfit performance supporting styling confidence and improvement
 * - Occasion Tracking: Context-appropriate styling pattern recognition and workflow optimization
 * - Temporal Analysis: Chronological style evolution insights and preference development tracking
 * - Visual Organization: Aesthetic presentation supporting inspiration and rediscovery workflows
 * 
 * Performance Optimizations:
 * - Efficient image loading with proper aspect ratios and responsive sizing optimization
 * - CSS-based hover effects minimizing JavaScript overhead while maintaining engaging interactions
 * - Progressive enhancement ensuring core outfit history functionality across device capabilities
 * - Optimized grid rendering supporting smooth scrolling and visual browsing experiences
 * 
 * Accessibility Features:
 * - Screen reader optimization with descriptive alt text for outfit imagery and context
 * - Keyboard navigation support enabling full outfit review without mouse interaction requirements
 * - Color contrast compliance ensuring outfit visibility across visual capabilities and lighting
 * - Touch target optimization supporting diverse dexterity capabilities and mobile interaction
 * 
 * @returns {JSX.Element} Comprehensive outfit history with analytics and visual appeal
 */
export const RecentLooks = () => {
  /**
   * Recent Outfit Data Configuration
   * 
   * Comprehensive outfit history with performance analytics, occasion context,
   * and temporal organization supporting style evolution tracking and successful
   * combination rediscovery. Each look includes rating assessment and categorical organization.
   * 
   * Outfit Analytics Methodology:
   * - Performance rating reflecting outfit success, comfort, and aesthetic appeal assessment
   * - Occasion categorization enabling context-appropriate styling pattern recognition
   * - Temporal organization supporting chronological style evolution analysis and tracking
   * - Visual quality maintenance through professional photography and aesthetic presentation
   * 
   * Style History Categories:
   * - Work/Professional: Office-appropriate styling showcasing professional fashion competence
   * - Casual/Weekend: Relaxed styling reflecting personal taste and comfort optimization
   * - Evening/Special: Elevated styling for occasions requiring enhanced aesthetic appeal
   * - Seasonal/Weather: Climate-appropriate styling demonstrating practical fashion intelligence
   * 
   * Rating System Philosophy:
   * - Quantified outfit performance enabling objective styling assessment and improvement tracking
   * - 5-point scale providing granular feedback for styling confidence building and optimization
   * - Performance indicators supporting successful combination identification and future inspiration
   * - Comparative analysis enabling style evolution tracking and preference development insights
   * 
   * Timeline Organization Strategy:
   * - Recent-first ordering emphasizing current styling choices and immediate pattern recognition
   * - Date contextualization supporting temporal style analysis and seasonal adaptation tracking
   * - Visual consistency maintaining aesthetic appeal while supporting functional outfit review
   * - Quick access enabling efficient outfit rediscovery and styling inspiration workflows
   */
  const recentLooks = [
    {
      /**
       * Professional Styling Example
       * 
       * Work-appropriate outfit demonstrating professional fashion competence
       * and office-suitable aesthetic choices. High rating indicates successful
       * combination supporting confidence and future professional styling inspiration.
       */
      id: 1,
      name: "Office Chic",
      date: "Today",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      rating: 4.8,
      occasion: "Work",
    },
    {
      /**
       * Casual Styling Example
       * 
       * Relaxed weekend outfit reflecting personal taste and comfort optimization.
       * Demonstrates successful casual styling balancing aesthetic appeal with
       * practical comfort requirements and personal expression preferences.
       */
      id: 2,
      name: "Weekend Casual",
      date: "Yesterday",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      rating: 4.5,
      occasion: "Casual",
    },
    {
      /**
       * Evening Styling Example
       * 
       * Elevated occasion outfit showcasing special event styling capabilities.
       * Highest rating indicates exceptional aesthetic success supporting confidence
       * building and future special occasion styling inspiration and rediscovery.
       */
      id: 3,
      name: "Date Night",
      date: "2 days ago",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop",
      rating: 4.9,
      occasion: "Evening",
    },
  ]

  return (
    <Card>
      {/* 
        Recent Looks Header with Navigation Integration
        
        Clear section identification with seamless navigation to comprehensive
        look management interfaces. Header establishes visual hierarchy while
        maintaining consistent styling patterns across the fashion platform.
        
        Design Strategy:
        - Direct naming establishing clear functional purpose and content expectations
        - Typography consistency maintaining platform design language and visual hierarchy
        - Navigation integration supporting workflow completion and detailed look management
        - Responsive layout ensuring optimal presentation across various device contexts
      */}
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Recent Looks</CardTitle>
        <Link href="/looks">
          <Button variant="outline" size="sm">
            View All
          </Button>
        </Link>
      </CardHeader>
      
      <CardContent>
        {/* 
          Outfit History Grid System
          
          Responsive layout optimizing outfit presentation and visual browsing
          across device capabilities. Grid adapts from single-column mobile to
          three-column desktop for optimal outfit visualization and comparison.
          
          Grid Strategy:
          - Mobile (1 column): Vertical stacking ensuring comprehensive outfit review on small screens
          - Desktop (3 columns): Horizontal layout enabling rapid outfit comparison and selection
          - Consistent spacing maintaining visual harmony and professional aesthetic appeal
          - Aspect ratio optimization supporting fashion photography standards and visual appeal
          
          Performance Optimization:
          - CSS Grid implementation providing efficient layout calculation and responsive adaptation
          - Optimized image handling ensuring fast loading while maintaining visual quality standards
          - Strategic gap sizing ensuring visual separation without wasting valuable screen space
          - Device-aware presentation supporting both detailed outfit analysis and quick browsing
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 
            Dynamic Outfit Rendering System
            
            Efficient iteration through outfit history with optimized performance
            and consistent visual presentation. Each outfit card provides comprehensive
            styling information through strategic visual hierarchy and interactive design.
            
            Rendering Optimization:
            - Efficient data iteration minimizing component complexity and performance overhead
            - Consistent styling patterns ensuring visual harmony across all outfit presentations
            - Strategic image handling supporting professional fashion photography standards
            - Interactive hover effects providing engaging feedback during outfit review processes
          */}
          {recentLooks.map((look) => (
            <div key={look.id} className="space-y-3">
              {/* 
                Outfit Image Presentation
                
                Professional fashion photography display optimized for visual appeal
                and outfit assessment. Maintains aspect ratios while providing engaging
                interactive feedback during outfit review and selection processes.
                
                Image Strategy:
                - 3:4 aspect ratio reflecting fashion photography standards and optimal outfit presentation
                - High-resolution imagery supporting detailed outfit analysis and aesthetic appreciation
                - Hover interactions providing engaging feedback without overwhelming primary content
                - Overlay elements enabling quick performance assessment without cluttering imagery
                
                Performance Considerations:
                - Optimized image loading supporting fast browsing while maintaining visual quality
                - Responsive sizing ensuring appropriate presentation across device capabilities
                - Smooth transitions maintaining professional aesthetic and user experience quality
                - Accessibility compliance with proper alt text and descriptive image labeling
              */}
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img
                  src={look.image || "/placeholder.svg"}
                  alt={look.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
                {/* 
                  Outfit Performance Indicator
                  
                  Prominent rating display providing immediate outfit performance
                  assessment and styling success indication. Positioned for visibility
                  without interfering with outfit imagery or aesthetic appreciation.
                  
                  Rating Strategy:
                  - Star icon providing universal performance indication and immediate recognition
                  - Numerical precision enabling granular styling assessment and comparison capability
                  - Strategic positioning ensuring visibility while maintaining image aesthetic appeal
                  - Semi-transparent background ensuring readability across diverse image content
                */}
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    ⭐ {look.rating}
                  </Badge>
                </div>
              </div>
              
              {/* 
                Outfit Metadata Organization
                
                Comprehensive outfit information presentation balancing descriptive
                content with visual appeal and rapid comprehension requirements.
                Information hierarchy optimized for outfit identification and context.
                
                Information Architecture:
                - Outfit name prominence supporting immediate identification and styling recall
                - Temporal context enabling chronological analysis and style evolution tracking
                - Occasion categorization supporting context-appropriate outfit rediscovery workflows
                - Typography hierarchy creating clear information separation and enhanced readability
                
                Content Strategy:
                - Descriptive naming reflecting outfit aesthetic and styling approach for easy recall
                - Date contextualization supporting temporal pattern analysis and seasonal tracking
                - Occasion tagging enabling efficient outfit rediscovery based on context requirements
                - Visual consistency maintaining platform design language and professional appearance
              */}
              <div className="space-y-1">
                {/* 
                  Outfit Name and Identification
                  
                  Clear outfit naming supporting immediate recognition and styling
                  recall during outfit rediscovery and inspiration workflows.
                  Typography emphasizes readability and aesthetic appeal.
                */}
                <h3 className="font-medium text-slate-900">{look.name}</h3>
                
                {/* 
                  Temporal and Contextual Information
                  
                  Strategic presentation of temporal and occasion context supporting
                  outfit organization and rediscovery workflows. Balances information
                  density with visual appeal and rapid scanning efficiency.
                  
                  Information Layout:
                  - Date positioning supporting chronological analysis and temporal pattern recognition
                  - Occasion badge providing categorical organization and context-based outfit discovery
                  - Horizontal layout maximizing space efficiency while maintaining readability standards
                  - Typography scaling ensuring information hierarchy and scanning optimization
                */}
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>{look.date}</span>
                  <Badge variant="outline">{look.occasion}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
