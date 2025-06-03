"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Grid, List, Plus, Upload, Camera, Tag, DollarSign, Calendar } from "lucide-react"

export default function WardrobePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const items = [
    {
      id: 1,
      name: "Silk Blouse",
      brand: "Equipment",
      category: "Tops",
      color: "Ivory",
      size: "M",
      value: 180,
      purchaseDate: "2023-08-15",
      wearCount: 12,
      condition: "Excellent",
      tags: ["Work", "Elegant", "Versatile"],
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 2,
      name: "High-waist Jeans",
      brand: "Citizens of Humanity",
      category: "Bottoms",
      color: "Dark Wash",
      size: "28",
      value: 220,
      purchaseDate: "2023-09-02",
      wearCount: 8,
      condition: "Excellent",
      tags: ["Casual", "Weekend", "Comfortable"],
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 3,
      name: "Wool Coat",
      brand: "Max Mara",
      category: "Outerwear",
      color: "Camel",
      size: "S",
      value: 890,
      purchaseDate: "2023-10-20",
      wearCount: 5,
      condition: "Like New",
      tags: ["Winter", "Investment", "Classic"],
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 4,
      name: "Ankle Boots",
      brand: "Isabel Marant",
      category: "Shoes",
      color: "Black",
      size: "38",
      value: 450,
      purchaseDate: "2023-07-10",
      wearCount: 15,
      condition: "Good",
      tags: ["Versatile", "Edgy", "Comfortable"],
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 5,
      name: "Cashmere Sweater",
      brand: "Everlane",
      category: "Tops",
      color: "Navy",
      size: "S",
      value: 120,
      purchaseDate: "2023-11-05",
      wearCount: 6,
      condition: "Excellent",
      tags: ["Cozy", "Luxury", "Timeless"],
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 6,
      name: "Midi Dress",
      brand: "Reformation",
      category: "Dresses",
      color: "Floral",
      size: "M",
      value: 180,
      purchaseDate: "2023-06-18",
      wearCount: 4,
      condition: "Excellent",
      tags: ["Summer", "Feminine", "Date Night"],
      image: "/placeholder.svg?height=200&width=150",
    },
  ]

  const categories = ["all", "Tops", "Bottoms", "Dresses", "Outerwear", "Shoes", "Accessories"]

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Digital Wardrobe</h1>
            <p className="text-slate-600 mt-2">Manage and organize your clothing collection</p>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Bulk Upload
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Item
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
                    placeholder="Search items, brands, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
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
                Showing {filteredItems.length} of {items.length} items
              </p>
              <div className="flex items-center space-x-4 text-sm text-slate-600">
                <span>Total Value: ${items.reduce((sum, item) => sum + item.value, 0).toLocaleString()}</span>
                <span>
                  Avg. Wear Count: {Math.round(items.reduce((sum, item) => sum + item.wearCount, 0) / items.length)}
                </span>
              </div>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg bg-slate-100 aspect-[3/4] mb-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.condition}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="flex space-x-1">
                          <Button size="sm" variant="secondary" className="flex-1">
                            <Camera className="h-4 w-4 mr-1" />
                            Photo
                          </Button>
                          <Button size="sm" variant="secondary" className="flex-1">
                            <Tag className="h-4 w-4 mr-1" />
                            Tag
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-slate-900">{item.name}</h4>
                          <p className="text-sm text-slate-500">{item.brand}</p>
                        </div>
                        <span className="text-sm font-medium text-slate-900">${item.value}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>
                          {item.color} • Size {item.size}
                        </span>
                        <span>{item.wearCount} wears</span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {item.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{item.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-20 bg-slate-100 rounded-md object-cover mr-4"
                    />

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                      <div className="md:col-span-2">
                        <h4 className="font-medium text-slate-900">{item.name}</h4>
                        <p className="text-sm text-slate-500">{item.brand}</p>
                        <Badge variant="outline" className="text-xs mt-1">
                          {item.category}
                        </Badge>
                      </div>

                      <div className="text-sm text-slate-600">
                        <p>{item.color}</p>
                        <p>Size {item.size}</p>
                      </div>

                      <div className="text-sm text-slate-600">
                        <p className="flex items-center">
                          <DollarSign className="h-3 w-3 mr-1" />${item.value}
                        </p>
                        <p>{item.wearCount} wears</p>
                      </div>

                      <div className="text-sm text-slate-600">
                        <p className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(item.purchaseDate).toLocaleDateString()}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {item.condition}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 3).map((tag, index) => (
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
