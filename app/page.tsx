import { Suspense } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { WardrobeOverview } from "@/components/wardrobe-overview"
import { RecentLooks } from "@/components/recent-looks"
import { AIStyleSuggestions } from "@/components/ai-style-suggestions"
import { QuickActions } from "@/components/quick-actions"
import { StatsCards } from "@/components/stats-cards"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your AI Style Assistant
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Curate, style, and optimize your wardrobe with AI-powered insights and personalized recommendations
          </p>
        </div>

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Suspense fallback={<div className="h-64 bg-white rounded-xl animate-pulse" />}>
              <WardrobeOverview />
            </Suspense>

            <Suspense fallback={<div className="h-64 bg-white rounded-xl animate-pulse" />}>
              <RecentLooks />
            </Suspense>
          </div>

          <div className="space-y-8">
            <QuickActions />

            <Suspense fallback={<div className="h-64 bg-white rounded-xl animate-pulse" />}>
              <AIStyleSuggestions />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  )
}
