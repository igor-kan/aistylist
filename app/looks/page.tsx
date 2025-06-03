"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Heart, Share, Eye, Wand2, Filter, Grid, List } from "lucide-react"

export default function LooksPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedOccasion, setSelectedOccasion] = useState("all")

  const looks = [
    {
      id: 1,
      name: "Casual Friday",
      occasion: "Work",
      date: "2024-01-15",
      likes: 12,
      views: 45,
      rating: 4.5,
      weather: "Sunny, 72°F",
      compliments: 4,
      image: "/placeholder.svg?height=300&width=200",
      tags: ["Comfortable", "Professional", "Versatile"],
      items: ["White blouse", "Navy blazer", "Dark jeans", "Loafers"],
    },
    {
      id: 2,
      name: "Date Night Elegance",
      occasion: "Dinner",
      date: "2024-01-14",
      likes: 18,
      views: 67,
      rating: 5.0,
      weather: "Clear, 68°F",
      compliments: 7,
      image: "/placeholder.svg?height=300&width=200",
      tags: ["Elegant", "Romantic", "Sophisticated"],
      items: ["Black dress", "Heels", "Statement earrings", "Clutch"],
    },
    {
      id: 3,
      name: "Weekend Brunch",
      occasion: "Social",
      date: "2024-01-13",
      likes: 8,
      views: 32,
      rating: 4.0,
      weather: "Cloudy, 65°F",
      compliments: 2,
      image: "/placeholder.svg?height=300&width=200",
      tags: ["Casual", "Trendy", "Comfortable"],
      items: ["Sweater", "High-waist jeans", "Sneakers", "Crossbody bag"],
    },
    {
      id: 4,
      name: "Business Meeting",
      occasion: "Work",
      date: "2024-01-12",
      likes: 15,
      views: 52,
      rating: 4.8,
      weather: "Rainy, 58°F",
      compliments: 5,
      image: "/placeholder.svg?height=300&width=200",
      tags: ["Formal", "Confident", "Power Dressing"],
      items: ["Blazer", "Trousers", "Blouse", "Pumps", "Watch"],
    },
    {
      id: 5,
      name: "Art Gallery Opening",
      occasion: "Event",
      date: "2024-01-11",
      likes: 22,
      views: 89,
      rating: 4.7,
      weather: "Cool, 62°F",
      compliments: 8,
      image: "/placeholder.svg?height=300&width=200",
      tags: ["Artistic", "Creative", "Statement"],
      items: ["Midi skirt", "Turtleneck", "Ankle boots", "Statement necklace"],
    },
    {
      id: 6,
      name: "Gym to Coffee",
      occasion: "Casual",
      date: "2024-01-10",
      likes: 6,
      views: 28,
      rating: 3.8,
      weather: "Sunny, 70°F",
      compliments: 1,
      image: "/placeholder.svg?height=300&width=200",
      tags: ["Athleisure", "Comfortable", "Practical"],
      items: ["Leggings", "Sports bra", "Oversized hoodie", "Sneakers"],
    },
  ]

  const occasions = ["all", "Work", "Social", "Dinner", "Event", "Casual"]

  const filteredLooks = looks.filter((look) => {
    const matchesSearch =
      look.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      look.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesOccasion = selectedOccasion === "all" || look.occasion === selectedOccasion
    return matchesSearch && matchesOccasion
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My Looks</h1>
            <p className="text-slate-600 mt-2">Browse and manage your outfit combinations</p>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Wand2 className="h-4 w-4 mr-2" />
              AI Suggest
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Look
            </Button>
          </div>
        </div>

        <Card className="bg-white mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search looks or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>

                <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    {occasions.map((occasion) => (
                      <SelectItem key={occasion} value={occasion}>
                        {occasion === "all" ? "All Occasions" : occasion}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-600">
                Showing {filteredLooks.length} of {looks.length} looks
              </p>
              <div className="flex items-center space-x-4 text-sm text-slate-600">
                <span>
                  Avg. Rating: {(looks.reduce((sum, look) => sum + look.rating, 0) / looks.length).toFixed(1)}/5
                </span>
                <span>Total Compliments: {looks.reduce((sum, look) => sum + look.compliments, 0)}</span>
              </div>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLooks.map((look) => (
                  <div key={look.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg bg-slate-100 aspect-[2/3] mb-4">
                      <img
                        src={look.image || "/placeholder.svg"}
                        alt={look.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <Badge variant="secondary">{look.occasion}</Badge>
                        <div className="flex items-center space-x-1 text-white text-sm">
                          <span>⭐</span>
                          <span>{look.rating}</span>
                        </div>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="secondary" className="flex-1">
                            <Heart className="h-4 w-4 mr-1" />
                            {look.likes}
                          </Button>
                          <Button size="sm" variant="secondary" className="flex-1">
                            <Share className="h-4 w-4 mr-1" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-slate-900">{look.name}</h4>
                          <p className="text-sm text-slate-500">{new Date(look.date).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right text-sm text-slate-500">
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {look.views}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {look.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {look.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{look.tags.length - 2}
                          </Badge>
                        )}
                      </div>

                      <div className="text-xs text-slate-500">
                        <p>
                          {look.weather} • {look.compliments} compliments
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredLooks.map((look) => (
                  <div
                    key={look.id}
                    className="flex items-center p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <img
                      src={look.image || "/placeholder.svg"}
                      alt={look.name}
                      className="w-20 h-28 bg-slate-100 rounded-md object-cover mr-4"
                    />

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                      <div className="md:col-span-2">
                        <h4 className="font-medium text-slate-900">{look.name}</h4>
                        <p className="text-sm text-slate-500">{new Date(look.date).toLocaleDateString()}</p>
                        <Badge variant="outline" className="text-xs mt-1">
                          {look.occasion}
                        </Badge>
                      </div>

                      <div className="text-sm text-slate-600">
                        <p className="flex items-center mb-1">
                          <span className="mr-1">⭐</span>
                          {look.rating}/5
                        </p>
                        <p>{look.compliments} compliments</p>
                      </div>

                      <div className="text-sm text-slate-600">
                        <p className="flex items-center mb-1">
                          <Heart className="h-3 w-3 mr-1" />
                          {look.likes}
                        </p>
                        <p className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {look.views}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {look.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
