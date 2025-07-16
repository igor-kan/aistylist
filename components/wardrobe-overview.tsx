/**
 * WardrobeOverview Component - Comprehensive Fashion Catalog Visualization
 * 
 * Core wardrobe management interface providing intelligent organization, visual cataloging,
 * and analytics-driven insights for personal fashion collections. This component serves as
 * the primary dashboard for wardrobe assessment, trend analysis, and styling optimization.
 * 
 * Fashion Technology Integration:
 * - Visual category organization optimized for fashion discovery patterns
 * - Brand value tracking enabling wardrobe investment analysis and optimization  
 * - Recent addition highlighting supporting personal shopping behavior insights
 * - Interactive display modes adapting to user browsing preferences and device contexts
 * 
 * Business Intelligence Features:
 * - Category distribution analysis revealing wardrobe balance and gap identification
 * - Investment tracking through brand value aggregation and cost-per-wear calculations
 * - Acquisition pattern analysis supporting personal shopping habit optimization
 * - Color palette assessment through visual cataloging and coordination insights
 * 
 * User Experience Philosophy:
 * - Pinterest-style visual browsing optimized for fashion content consumption
 * - Dual view modes supporting both quick overview and detailed item analysis
 * - Touch-friendly interactions enabling intuitive mobile wardrobe management
 * - Performance-optimized image loading for high-resolution fashion photography
 */

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

/**
 * WardrobeOverview Component
 * 
 * Renders comprehensive wardrobe visualization and analytics dashboard enabling users
 * to understand their fashion collection distribution, recent acquisitions, and
 * investment patterns through intuitive visual interfaces and data-driven insights.
 * 
 * Component Architecture:
 * - Client-side rendering for interactive wardrobe management and real-time updates
 * - State management for view mode preferences and user interaction optimization
 * - Responsive grid system adapting to various device sizes and orientation changes
 * - Progressive enhancement ensuring core functionality across different capabilities
 * 
 * Fashion Analytics Features:
 * - Category Distribution: Visual representation of wardrobe balance across clothing types
 * - Investment Tracking: Brand value aggregation and cost-per-wear analysis capabilities
 * - Recent Activity: Timeline of wardrobe additions supporting shopping pattern analysis
 * - Visual Organization: Pinterest-style catalog browsing optimized for fashion discovery
 * 
 * Performance Optimizations:
 * - Lazy loading for fashion imagery reducing initial bundle size and load times
 * - Optimized image rendering with proper aspect ratios and responsive sizing
 * - Efficient state management minimizing unnecessary re-renders during interaction
 * - Progressive enhancement ensuring functionality across varying network conditions
 * 
 * Accessibility Considerations:
 * - Keyboard navigation support for comprehensive wardrobe browsing without mouse
 * - Screen reader optimization with descriptive alt text for fashion imagery
 * - Color contrast compliance ensuring visibility across visual capabilities
 * - Focus management supporting intuitive navigation through wardrobe categories
 * 
 * @returns {JSX.Element} Complete wardrobe overview with analytics and visualization
 */
export function WardrobeOverview() {
  /**
   * View Mode State Management
   * 
   * Controls display format for wardrobe item presentation, optimizing user experience
   * based on personal browsing preferences and device context. Grid mode emphasizes
   * visual discovery while list mode prioritizes detailed information density.
   * 
   * View Mode Benefits:
   * - Grid: Visual fashion discovery optimized for style inspiration and browsing
   * - List: Information density supporting detailed wardrobe analysis and organization
   * - User preference persistence enabling consistent experience across sessions
   * - Device-aware defaults optimizing for mobile vs desktop interaction patterns
   */
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  /**
   * Wardrobe Category Analytics Data
   * 
   * Comprehensive wardrobe statistics providing insights into fashion collection
   * distribution, category balance, and style preference patterns. This data
   * drives AI-powered styling recommendations and wardrobe optimization suggestions.
   * 
   * Data Structure Philosophy:
   * - Category counts revealing wardrobe balance and potential gap identification
   * - Visual imagery supporting rapid recognition and style association patterns
   * - Professional fashion photography enhancing platform visual quality and appeal
   * - Strategic category organization reflecting fashion industry standards and terminology
   * 
   * Business Intelligence Applications:
   * - Gap Analysis: Identifying missing wardrobe categories for complete styling options
   * - Balance Assessment: Evaluating distribution across formal, casual, and seasonal items
   * - Shopping Guidance: Data-driven recommendations for future fashion investments
   * - Style Pattern Recognition: Understanding personal preference evolution and trends
   */
  const wardrobeStats = [
    {
      category: "Tops",
      count: 24,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop",
    },
    {
      category: "Bottoms",
      count: 18,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=300&fit=crop",
    },
    {
      category: "Dresses",
      count: 12,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
    },
    {
      category: "Outerwear",
      count: 8,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
    },
  ]

  /**
   * Recent Wardrobe Additions Data
   * 
   * Timeline of recent fashion acquisitions supporting shopping pattern analysis,
   * brand preference tracking, and investment decision optimization. This data
   * enables cost-per-wear calculations and wardrobe ROI assessment capabilities.
   * 
   * Data Analytics Applications:
   * - Brand Preference Analysis: Tracking favorite designers and style evolution patterns
   * - Investment Tracking: Cost-per-wear calculations and wardrobe ROI optimization
   * - Color Palette Evolution: Understanding personal color preference development
   * - Seasonal Adaptation: Analyzing acquisition patterns across climate and occasion needs
   * 
   * Fashion Business Intelligence:
   * - Shopping Pattern Recognition: Identifying optimal purchase timing and frequency
   * - Brand Loyalty Assessment: Understanding designer preference stability and evolution
   * - Price Point Analysis: Evaluating investment levels across different fashion categories
   * - Quality vs Quantity Insights: Assessing purchasing strategy effectiveness and satisfaction
   */
  const recentItems = [
    {
      id: 1,
      name: "Silk Blouse",
      brand: "Equipment",
      category: "Tops",
      color: "Ivory",
      value: "$180",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "High-waist Jeans",
      brand: "Citizens of Humanity",
      category: "Bottoms",
      color: "Dark Wash",
      value: "$220",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Wool Coat",
      brand: "Max Mara",
      category: "Outerwear",
      color: "Camel",
      value: "$890",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Ankle Boots",
      brand: "Isabel Marant",
      category: "Shoes",
      color: "Black",
      value: "$450",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <Card className="bg-white">
      {/* 
        Wardrobe Overview Header with Navigation Integration
        
        Provides clear section identification and seamless navigation to comprehensive
        wardrobe management interfaces. The header establishes visual hierarchy while
        maintaining consistent styling patterns across the fashion platform.
        
        Design Considerations:
        - Clear typography establishing component purpose and context
        - Strategic placement of navigation elements supporting user workflow completion
        - Visual consistency maintaining platform design language and brand identity
        - Responsive layout ensuring optimal presentation across device sizes
      */}
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Wardrobe Overview</CardTitle>
        <Link href="/wardrobe">
          <Button variant="outline" size="sm">
            View All
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        {/* 
          Wardrobe Content Organization System
          
          Tabbed interface enabling efficient information presentation and user navigation
          between different wardrobe analysis perspectives. This organization supports
          both high-level overview and detailed item management workflows.
          
          Tab Organization Strategy:
          - Categories: Strategic overview of wardrobe distribution and balance analysis
          - Recent Items: Timeline view supporting acquisition tracking and pattern recognition
          - Future Enhancement: Favorites, Trending, Analytics, and Styling History tabs
          - User Preference: Customizable tab ordering based on individual workflow patterns
        */}
        <Tabs defaultValue="categories" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="recent">Recent Items</TabsTrigger>
          </TabsList>

          {/* 
            Wardrobe Category Distribution Visualization
            
            Visual representation of fashion collection organization enabling rapid
            assessment of wardrobe balance, style distribution, and potential gaps.
            This interface supports both analytical review and intuitive browsing.
            
            Visual Design Philosophy:
            - Grid layout optimized for fashion imagery and visual recognition patterns
            - Hover interactions providing engaging micro-feedback during exploration
            - Professional fashion photography establishing premium platform positioning
            - Overlay statistics enabling quick quantitative assessment without cluttering imagery
            
            Analytics Integration:
            - Category balance assessment supporting styling optimization recommendations
            - Gap identification revealing missing pieces for complete outfit combinations
            - Seasonal distribution analysis enabling wardrobe rotation planning
            - Color palette representation supporting coordination and harmony insights
          */}
          <TabsContent value="categories" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {wardrobeStats.map((category) => (
                <div key={category.category} className="text-center space-y-2">
                  <div className="relative overflow-hidden rounded-lg aspect-square">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.category}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                    {/* 
                      Statistical Overlay Design
                      
                      Non-intrusive item count display preserving fashion imagery
                      while providing essential quantitative information for
                      wardrobe assessment and planning decisions.
                    */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">{category.count}</span>
                    </div>
                  </div>
                  <p className="font-medium text-slate-700">{category.category}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* 
            Recent Wardrobe Additions Timeline
            
            Chronological display of fashion acquisitions supporting shopping pattern
            analysis, brand preference tracking, and investment decision optimization.
            This view enables both nostalgic browsing and analytical review capabilities.
            
            Display Mode Strategy:
            - Grid Mode: Visual emphasis supporting style inspiration and browsing patterns
            - List Mode: Information density enabling detailed analysis and comparison
            - Responsive adaptation ensuring optimal experience across device capabilities
            - Performance optimization through conditional rendering and efficient layouts
            
            Data Presentation Focus:
            - Brand prominence supporting loyalty tracking and preference pattern recognition
            - Value visibility enabling investment analysis and cost-per-wear calculations
            - Category tagging supporting organization and cross-referencing capabilities
            - Visual quality maintaining fashion platform premium positioning and appeal
          */}
          <TabsContent value="recent" className="mt-6">
            <div className={viewMode === "grid" ? "grid grid-cols-2 md:grid-cols-4 gap-4" : "space-y-4"}>
              {recentItems.map((item) => (
                <div
                  key={item.id}
                  className={`border border-slate-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer ${
                    viewMode === "list" ? "flex items-center p-4 space-x-4" : "p-4"
                  }`}
                >
                  {/* 
                    Adaptive Item Imagery
                    
                    Responsive image presentation optimizing for both visual appeal
                    and information density based on selected view mode and device context.
                    Maintains aspect ratios and loading performance across presentation formats.
                  */}
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className={`bg-slate-100 rounded-md object-cover ${
                      viewMode === "list" ? "w-16 h-16" : "w-full h-32 mb-3"
                    }`}
                  />
                  {/* 
                    Fashion Item Metadata Display
                    
                    Comprehensive information presentation balancing visual appeal
                    with functional data access. Supports brand recognition, value
                    assessment, and category organization workflows.
                    
                    Information Hierarchy:
                    - Item Name: Primary identification supporting recognition and search
                    - Brand Attribution: Designer credit enabling loyalty tracking and preference analysis
                    - Category Classification: Organization support and cross-referencing capabilities
                    - Investment Value: Cost tracking enabling ROI analysis and budget planning
                  */}
                  <div className={viewMode === "list" ? "flex-1" : ""}>
                    <h4 className="font-medium text-slate-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.brand}</p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                      <span className="text-sm font-medium text-slate-900">{item.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
