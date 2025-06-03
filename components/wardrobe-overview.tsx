"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export function WardrobeOverview() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

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
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Wardrobe Overview</CardTitle>
        <Link href="/wardrobe">
          <Button variant="outline" size="sm">
            View All
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="categories" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="recent">Recent Items</TabsTrigger>
          </TabsList>

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
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">{category.count}</span>
                    </div>
                  </div>
                  <p className="font-medium text-slate-700">{category.category}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-6">
            <div className={viewMode === "grid" ? "grid grid-cols-2 md:grid-cols-4 gap-4" : "space-y-4"}>
              {recentItems.map((item) => (
                <div
                  key={item.id}
                  className={`border border-slate-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer ${
                    viewMode === "list" ? "flex items-center p-4 space-x-4" : "p-4"
                  }`}
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className={`bg-slate-100 rounded-md object-cover ${
                      viewMode === "list" ? "w-16 h-16" : "w-full h-32 mb-3"
                    }`}
                  />
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
