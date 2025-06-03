"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search, Filter, Grid, List, Star, Heart, Eye, Share, Palette, Crown, Gem } from "lucide-react"

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCollection, setSelectedCollection] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const collections = [
    {
      id: "investment",
      name: "Investment Pieces",
      count: 23,
      value: "$8,450",
      description: "Luxury items that appreciate in value",
      color: "bg-purple-100 text-purple-700",
      icon: Crown,
    },
    {
      id: "vintage",
      name: "Vintage Treasures",
      count: 15,
      value: "$3,200",
      description: "Rare and collectible vintage finds",
      color: "bg-amber-100 text-amber-700",
      icon: Star,
    },
    {
      id: "designer",
      name: "Designer Showcase",
      count: 31,
      value: "$12,800",
      description: "High-end designer pieces",
      color: "bg-rose-100 text-rose-700",
      icon: Gem,
    },
    {
      id: "everyday",
      name: "Everyday Essentials",
      count: 67,
      value: "$2,100",
      description: "Daily wardrobe staples",
      color: "bg-blue-100 text-blue-700",
      icon: Heart,
    },
  ]

  const galleryItems = [
    {
      id: 1,
      name: "Vintage Chanel Blazer",
      brand: "Chanel",
      year: "1995",
      rarity: "Rare",
      value: 3200,
      appreciation: "+45%",
      story: "Acquired from a Parisian estate sale. This piece represents Chanel's timeless elegance.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop",
      collection: "vintage",
      tags: ["Iconic", "Investment", "Timeless"],
      likes: 24,
      views: 156,
      condition: "Excellent",
    },
    {
      id: 2,
      name: "Hermès Silk Scarf",
      brand: "Hermès",
      year: "2020",
      rarity: "Limited Edition",
      value: 520,
      appreciation: "+30%",
      story: "Limited edition design by contemporary artist. Only 500 pieces worldwide.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=400&fit=crop",
      collection: "investment",
      tags: ["Limited", "Artistic", "Collectible"],
      likes: 18,
      views: 89,
      condition: "Mint",
    },
    {
      id: 3,
      name: "Issey Miyake Pleats",
      brand: "Issey Miyake",
      year: "2019",
      rarity: "Signature",
      value: 890,
      appreciation: "+12%",
      story: "Innovative pleating technique that revolutionized fashion construction.",
      image: "https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?w=300&h=400&fit=crop",
      collection: "designer",
      tags: ["Innovation", "Architectural", "Modern"],
      likes: 31,
      views: 203,
      condition: "Excellent",
    },
    {
      id: 4,
      name: "Comme des Garçons Avant-Garde",
      brand: "Comme des Garçons",
      year: "2018",
      rarity: "Runway",
      value: 1450,
      appreciation: "+25%",
      story: "Directly from the runway collection. Represents Kawakubo's deconstructionist vision.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop",
      collection: "designer",
      tags: ["Avant-garde", "Runway", "Conceptual"],
      likes: 42,
      views: 287,
      condition: "Museum Quality",
    },
    {
      id: 5,
      name: "Vintage Dior New Look",
      brand: "Christian Dior",
      year: "1952",
      rarity: "Museum Piece",
      value: 15000,
      appreciation: "+200%",
      story: "Original 'New Look' piece from Dior's revolutionary 1947 collection. Museum authenticated.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=400&fit=crop",
      collection: "vintage",
      tags: ["Historic", "Museum", "Revolutionary"],
      likes: 67,
      views: 445,
      condition: "Preserved",
    },
    {
      id: 6,
      name: "Yves Saint Laurent Le Smoking",
      brand: "Yves Saint Laurent",
      year: "1975",
      rarity: "Iconic",
      value: 4500,
      appreciation: "+180%",
      story: "The tuxedo that liberated women's fashion. A symbol of feminine power dressing.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop",
      collection: "vintage",
      tags: ["Feminist", "Power", "Liberation"],
      likes: 53,
      views: 334,
      condition: "Restored",
    },
  ]

  const filteredItems = galleryItems.filter((item) => {
    const matchesCollection = selectedCollection === "all" || item.collection === selectedCollection
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCollection && matchesSearch
  })

  const selectedItem = galleryItems[0] // For modal display

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Fashion Gallery</h1>
          <p className="text-slate-600 mt-2">Curate your wardrobe like a museum collection</p>
        </div>

        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="gallery">Gallery View</TabsTrigger>
            <TabsTrigger value="collections">Collections</TabsTrigger>
            <TabsTrigger value="exhibitions">Exhibitions</TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="mt-6">
            <Card className="bg-white mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Search by name, brand, or style..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>

                    <Select value={selectedCollection} onValueChange={setSelectedCollection}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="All Collections" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Collections</SelectItem>
                        {collections.map((collection) => (
                          <SelectItem key={collection.id} value={collection.id}>
                            {collection.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
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
              </CardContent>
            </Card>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <Card className="bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group">
                        <div className="relative overflow-hidden">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                          <div className="absolute top-3 left-3 right-3 flex justify-between">
                            <Badge variant="secondary" className="bg-black/70 text-white">
                              {item.rarity}
                            </Badge>
                            <div className="flex space-x-1">
                              <Badge variant="secondary" className="bg-green-600 text-white">
                                {item.appreciation}
                              </Badge>
                            </div>
                          </div>

                          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="secondary">
                                  <Heart className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="secondary">
                                  <Share className="h-4 w-4" />
                                </Button>
                              </div>
                              <div className="flex items-center space-x-3 text-white text-sm">
                                <span className="flex items-center">
                                  <Heart className="h-3 w-3 mr-1" />
                                  {item.likes}
                                </span>
                                <span className="flex items-center">
                                  <Eye className="h-3 w-3 mr-1" />
                                  {item.views}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-slate-900">{item.name}</h3>
                                <p className="text-sm text-slate-600">
                                  {item.brand} • {item.year}
                                </p>
                              </div>
                              <span className="text-lg font-bold text-slate-900">${item.value.toLocaleString()}</span>
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

                            <div className="flex items-center justify-between text-xs text-slate-500">
                              <span>Condition: {item.condition}</span>
                              <span className="flex items-center">
                                <Star className="h-3 w-3 mr-1 text-yellow-500" />
                                Museum Quality
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{item.name}</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                        <div>
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-96 object-cover rounded-lg"
                          />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.brand}</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-slate-600">Year: </span>
                                <span className="font-medium">{item.year}</span>
                              </div>
                              <div>
                                <span className="text-slate-600">Rarity: </span>
                                <span className="font-medium">{item.rarity}</span>
                              </div>
                              <div>
                                <span className="text-slate-600">Value: </span>
                                <span className="font-medium">${item.value.toLocaleString()}</span>
                              </div>
                              <div>
                                <span className="text-slate-600">Appreciation: </span>
                                <span className="font-medium text-green-600">{item.appreciation}</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-slate-900 mb-2">Story</h4>
                            <p className="text-sm text-slate-600">{item.story}</p>
                          </div>

                          <div>
                            <h4 className="font-medium text-slate-900 mb-2">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                            <div className="flex items-center space-x-4 text-sm text-slate-600">
                              <span className="flex items-center">
                                <Heart className="h-4 w-4 mr-1" />
                                {item.likes} likes
                              </span>
                              <span className="flex items-center">
                                <Eye className="h-4 w-4 mr-1" />
                                {item.views} views
                              </span>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Heart className="h-4 w-4 mr-2" />
                                Like
                              </Button>
                              <Button size="sm" variant="outline">
                                <Share className="h-4 w-4 mr-2" />
                                Share
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="bg-white">
                    <CardContent className="p-4">
                      <div className="flex space-x-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-24 h-32 object-cover rounded-md"
                        />
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="md:col-span-2">
                            <h3 className="font-semibold text-slate-900">{item.name}</h3>
                            <p className="text-sm text-slate-600">
                              {item.brand} • {item.year}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">{item.story.substring(0, 100)}...</p>
                          </div>
                          <div className="text-sm">
                            <p className="text-slate-600">
                              Value: <span className="font-medium">${item.value.toLocaleString()}</span>
                            </p>
                            <p className="text-slate-600">
                              Appreciation: <span className="font-medium text-green-600">{item.appreciation}</span>
                            </p>
                            <p className="text-slate-600">
                              Condition: <span className="font-medium">{item.condition}</span>
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {item.tags.slice(0, 2).map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-slate-600">
                              <span className="flex items-center">
                                <Heart className="h-3 w-3 mr-1" />
                                {item.likes}
                              </span>
                              <span className="flex items-center">
                                <Eye className="h-3 w-3 mr-1" />
                                {item.views}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="collections" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {collections.map((collection) => (
                <Card key={collection.id} className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${collection.color}`}>
                          <collection.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{collection.name}</CardTitle>
                          <p className="text-sm text-slate-600">{collection.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-slate-900">{collection.count}</div>
                          <p className="text-xs text-slate-600">Items</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-slate-900">{collection.value}</div>
                          <p className="text-xs text-slate-600">Total Value</p>
                        </div>
                      </div>
                      <Button variant="outline">View Collection</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exhibitions" className="mt-6">
            <div className="space-y-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Current Exhibition: "Power Dressing Through the Decades"</CardTitle>
                  <p className="text-slate-600">Explore how fashion became a tool of empowerment</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <img
                        src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop"
                        alt="Power Dressing"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-slate-900">1980s Power Suits</h4>
                        <p className="text-sm text-slate-600">Sharp shoulders, bold silhouettes</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <img
                        src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop"
                        alt="Modern Professional"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-slate-900">Modern Professional</h4>
                        <p className="text-sm text-slate-600">Contemporary power dressing</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <img
                        src="https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?w=300&h=200&fit=crop"
                        alt="Evening Power"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-slate-900">Evening Power</h4>
                        <p className="text-sm text-slate-600">Elegant authority after hours</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button>
                      <Palette className="h-4 w-4 mr-2" />
                      View Full Exhibition
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Upcoming: "Sustainable Luxury"</CardTitle>
                    <p className="text-slate-600">Opening March 15th</p>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=200&fit=crop"
                      alt="Sustainable Fashion"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-slate-600">
                      Explore how luxury fashion is embracing sustainability without compromising on style.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Past Exhibition: "Minimalist Masters"</CardTitle>
                    <p className="text-slate-600">Closed January 30th</p>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=200&fit=crop"
                      alt="Minimalist Fashion"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-slate-600">
                      A retrospective on the pioneers of minimalist fashion and their lasting impact.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
