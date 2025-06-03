"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Heart, ExternalLink, TrendingUp, DollarSign, Star, Filter } from "lucide-react"

export default function ShoppingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState("all")
  const [category, setCategory] = useState("all")

  const missingItems = [
    {
      id: 1,
      name: "White Button-Down Shirt",
      reason: "Complete 5 professional looks",
      priority: "High",
      budget: "$80-150",
      matches: [
        {
          store: "Everlane",
          price: 88,
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop",
          link: "https://everlane.com",
        },
        {
          store: "Equipment",
          price: 148,
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop",
          link: "https://equipment.fr",
        },
      ],
    },
    {
      id: 2,
      name: "Black Midi Skirt",
      reason: "Versatile piece for work and events",
      priority: "Medium",
      budget: "$60-120",
      matches: [
        {
          store: "COS",
          price: 79,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=200&h=250&fit=crop",
          link: "https://cosstores.com",
        },
        {
          store: "& Other Stories",
          price: 65,
          rating: 4.1,
          image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=200&h=250&fit=crop",
          link: "https://stories.com",
        },
      ],
    },
  ]

  const investmentPieces = [
    {
      id: 1,
      name: "Cashmere Coat",
      brand: "Max Mara",
      currentPrice: 1890,
      projectedValue: 2200,
      appreciation: "+16%",
      timeframe: "5 years",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=250&fit=crop",
      link: "https://maxmara.com",
    },
    {
      id: 2,
      name: "Silk Blouse",
      brand: "Equipment",
      currentPrice: 248,
      projectedValue: 280,
      appreciation: "+13%",
      timeframe: "3 years",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop",
      link: "https://equipment.fr",
    },
  ]

  const resaleFinds = [
    {
      id: 1,
      name: "Vintage Chanel Blazer",
      originalPrice: 3200,
      currentPrice: 1800,
      savings: 44,
      condition: "Excellent",
      platform: "Vestiaire Collective",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=250&fit=crop",
      link: "https://vestiairecollective.com",
    },
    {
      id: 2,
      name: "Isabel Marant Boots",
      originalPrice: 650,
      currentPrice: 320,
      savings: 51,
      condition: "Very Good",
      platform: "TheRealReal",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop",
      link: "https://therealreal.com",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Smart Shopping Assistant</h1>
          <p className="text-slate-600 mt-2">AI-powered recommendations to complete your wardrobe</p>
        </div>

        <div className="mb-6">
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <Input
                    placeholder="Search items, brands, or styles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64"
                  />
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="tops">Tops</SelectItem>
                      <SelectItem value="bottoms">Bottoms</SelectItem>
                      <SelectItem value="dresses">Dresses</SelectItem>
                      <SelectItem value="outerwear">Outerwear</SelectItem>
                      <SelectItem value="shoes">Shoes</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="under-50">Under $50</SelectItem>
                      <SelectItem value="50-100">$50-100</SelectItem>
                      <SelectItem value="100-200">$100-200</SelectItem>
                      <SelectItem value="200-500">$200-500</SelectItem>
                      <SelectItem value="over-500">Over $500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="missing" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="missing">Missing Items</TabsTrigger>
            <TabsTrigger value="investment">Investment Pieces</TabsTrigger>
            <TabsTrigger value="resale">Resale Finds</TabsTrigger>
            <TabsTrigger value="lists">Shopping Lists</TabsTrigger>
          </TabsList>

          <TabsContent value="missing" className="mt-6">
            <div className="space-y-6">
              {missingItems.map((item) => (
                <Card key={item.id} className="bg-white">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <p className="text-sm text-slate-600">{item.reason}</p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={item.priority === "High" ? "default" : "secondary"}
                          className={item.priority === "High" ? "bg-red-600" : ""}
                        >
                          {item.priority} Priority
                        </Badge>
                        <p className="text-sm text-slate-600 mt-1">{item.budget}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.matches.map((match, index) => (
                        <div key={index} className="border border-slate-200 rounded-lg p-4">
                          <div className="flex space-x-4">
                            <img
                              src={match.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-20 h-24 object-cover rounded-md"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-slate-900">{match.store}</h4>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                  <span className="text-sm text-slate-600">{match.rating}</span>
                                </div>
                              </div>
                              <p className="text-lg font-bold text-slate-900 mb-2">${match.price}</p>
                              <div className="flex space-x-2">
                                <Button size="sm" asChild>
                                  <a href={match.link} target="_blank" rel="noopener noreferrer">
                                    <ShoppingCart className="h-4 w-4 mr-1" />
                                    Shop Now
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                  </a>
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Heart className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="investment" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {investmentPieces.map((piece) => (
                <Card key={piece.id} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <img
                        src={piece.image || "/placeholder.svg"}
                        alt={piece.name}
                        className="w-24 h-32 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{piece.name}</h3>
                        <p className="text-sm text-slate-600 mb-2">{piece.brand}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Current Price:</span>
                            <span className="font-medium">${piece.currentPrice.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Projected Value ({piece.timeframe}):</span>
                            <span className="font-medium">${piece.projectedValue.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Appreciation:</span>
                            <span className="font-medium text-green-600 flex items-center">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {piece.appreciation}
                            </span>
                          </div>
                        </div>

                        <Button size="sm" className="w-full" asChild>
                          <a href={piece.link} target="_blank" rel="noopener noreferrer">
                            <DollarSign className="h-4 w-4 mr-2" />
                            Invest Now
                            <ExternalLink className="h-3 w-3 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resale" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resaleFinds.map((item) => (
                <Card key={item.id} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-24 h-32 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{item.name}</h3>
                        <p className="text-sm text-slate-600 mb-2">{item.platform}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Original Price:</span>
                            <span className="line-through text-slate-400">${item.originalPrice}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Current Price:</span>
                            <span className="font-medium text-green-600">${item.currentPrice}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">You Save:</span>
                            <span className="font-medium text-green-600">{item.savings}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Condition:</span>
                            <Badge variant="secondary">{item.condition}</Badge>
                          </div>
                        </div>

                        <Button size="sm" className="w-full" asChild>
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Shop Resale
                            <ExternalLink className="h-3 w-3 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="lists" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">Work Wardrobe</CardTitle>
                  <p className="text-sm text-slate-600">Professional essentials</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">White button-down</span>
                      <Badge variant="outline">$80-150</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Black blazer</span>
                      <Badge variant="outline">$120-250</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Midi skirt</span>
                      <Badge variant="outline">$60-120</Badge>
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-4">
                    Shop List
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">Date Night</CardTitle>
                  <p className="text-sm text-slate-600">Elegant evening pieces</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Little black dress</span>
                      <Badge variant="outline">$100-300</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Statement earrings</span>
                      <Badge variant="outline">$40-80</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Heeled sandals</span>
                      <Badge variant="outline">$80-200</Badge>
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-4">
                    Shop List
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-dashed border-slate-300">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                      <ShoppingCart className="h-6 w-6 text-slate-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">Create New List</h3>
                      <p className="text-sm text-slate-600">Organize items by occasion or style</p>
                    </div>
                    <Button size="sm">Create List</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
