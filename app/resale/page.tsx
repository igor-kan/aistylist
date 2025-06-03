"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DollarSign, TrendingUp, MapPin, Camera, Tag, Scissors, Users } from "lucide-react"

export default function ResalePage() {
  const [selectedTab, setSelectedTab] = useState("sell")

  const myListings = [
    {
      id: 1,
      name: "Vintage Chanel Blazer",
      brand: "Chanel",
      originalPrice: 2800,
      listingPrice: 1200,
      condition: "Excellent",
      views: 45,
      likes: 12,
      status: "Active",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=250&fit=crop",
      listedDate: "2024-01-10",
    },
    {
      id: 2,
      name: "Isabel Marant Boots",
      brand: "Isabel Marant",
      originalPrice: 650,
      listingPrice: 320,
      condition: "Very Good",
      views: 28,
      likes: 8,
      status: "Sold",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&h=250&fit=crop",
      listedDate: "2024-01-05",
    },
  ]

  const rentalItems = [
    {
      id: 1,
      name: "Designer Evening Gown",
      brand: "Valentino",
      rentalPrice: 150,
      originalPrice: 3200,
      occasions: ["Wedding", "Gala", "Red Carpet"],
      image: "https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?w=200&h=250&fit=crop",
      available: true,
    },
    {
      id: 2,
      name: "Statement Coat",
      brand: "Max Mara",
      rentalPrice: 80,
      originalPrice: 1890,
      occasions: ["Business", "Event", "Winter"],
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=250&fit=crop",
      available: false,
    },
  ]

  const repairHistory = [
    {
      id: 1,
      item: "Wool Coat",
      service: "Button Replacement",
      tailor: "Master Tailors NYC",
      cost: 25,
      date: "2024-01-08",
      rating: 5,
    },
    {
      id: 2,
      item: "Silk Dress",
      service: "Hem Adjustment",
      tailor: "Precision Alterations",
      cost: 35,
      date: "2023-12-15",
      rating: 4,
    },
  ]

  const localTailors = [
    {
      id: 1,
      name: "Master Tailors NYC",
      specialty: "Luxury Alterations",
      rating: 4.9,
      distance: "0.8 miles",
      price: "$$$",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Precision Alterations",
      specialty: "Quick Repairs",
      rating: 4.6,
      distance: "1.2 miles",
      price: "$$",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Resale Hub</h1>
          <p className="text-slate-600 mt-2">Sell, rent, repair, and maximize the value of your wardrobe</p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sell">Sell Items</TabsTrigger>
            <TabsTrigger value="rent">Rent Out</TabsTrigger>
            <TabsTrigger value="repair">Repair & Care</TabsTrigger>
            <TabsTrigger value="analytics">Value Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="sell" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="bg-white mb-6">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>My Listings</CardTitle>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>
                            <Tag className="h-4 w-4 mr-2" />
                            List New Item
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>List Item for Sale</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div>
                              <Label htmlFor="item-select">Select Item from Wardrobe</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choose an item" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="blazer">Black Blazer</SelectItem>
                                  <SelectItem value="dress">Silk Dress</SelectItem>
                                  <SelectItem value="coat">Wool Coat</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="listing-price">Listing Price</Label>
                              <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <Input id="listing-price" placeholder="320" className="pl-10" />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="condition">Condition</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select condition" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="new">New with Tags</SelectItem>
                                  <SelectItem value="excellent">Excellent</SelectItem>
                                  <SelectItem value="very-good">Very Good</SelectItem>
                                  <SelectItem value="good">Good</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="description">Description</Label>
                              <Textarea
                                id="description"
                                placeholder="Describe the item's condition, fit, and any special details..."
                                className="min-h-[80px]"
                              />
                            </div>
                            <Button className="w-full">
                              <Camera className="h-4 w-4 mr-2" />
                              Add Photos & List
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {myListings.map((listing) => (
                        <div key={listing.id} className="border border-slate-200 rounded-lg p-4">
                          <div className="flex space-x-4">
                            <img
                              src={listing.image || "/placeholder.svg"}
                              alt={listing.name}
                              className="w-20 h-24 object-cover rounded-md"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h4 className="font-medium text-slate-900">{listing.name}</h4>
                                  <p className="text-sm text-slate-600">{listing.brand}</p>
                                </div>
                                <Badge
                                  variant={listing.status === "Sold" ? "default" : "secondary"}
                                  className={listing.status === "Sold" ? "bg-green-600" : ""}
                                >
                                  {listing.status}
                                </Badge>
                              </div>

                              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                                <div>
                                  <span className="text-slate-600">Listed Price: </span>
                                  <span className="font-medium">${listing.listingPrice}</span>
                                </div>
                                <div>
                                  <span className="text-slate-600">Original: </span>
                                  <span className="line-through text-slate-400">${listing.originalPrice}</span>
                                </div>
                                <div>
                                  <span className="text-slate-600">Views: </span>
                                  <span className="font-medium">{listing.views}</span>
                                </div>
                                <div>
                                  <span className="text-slate-600">Likes: </span>
                                  <span className="font-medium">{listing.likes}</span>
                                </div>
                              </div>

                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">
                                  Edit Listing
                                </Button>
                                <Button size="sm" variant="outline">
                                  View Analytics
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                      Selling Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-medium text-green-900">High Demand</h4>
                        <p className="text-green-700">Designer blazers are trending +23% this month</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-medium text-blue-900">Photo Tip</h4>
                        <p className="text-blue-700">Natural lighting increases sales by 40%</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-medium text-purple-900">Pricing</h4>
                        <p className="text-purple-700">Items priced 60-70% of retail sell fastest</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Camera className="h-4 w-4 mr-2" />
                        Bulk Photo Upload
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Price Suggestions
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Market Analysis
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rent" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Available for Rent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rentalItems.map((item) => (
                      <div key={item.id} className="border border-slate-200 rounded-lg p-4">
                        <div className="flex space-x-4">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-20 h-24 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-medium text-slate-900">{item.name}</h4>
                                <p className="text-sm text-slate-600">{item.brand}</p>
                              </div>
                              <Badge variant={item.available ? "default" : "secondary"}>
                                {item.available ? "Available" : "Rented"}
                              </Badge>
                            </div>

                            <div className="mb-3">
                              <p className="text-lg font-bold text-slate-900">${item.rentalPrice}/day</p>
                              <p className="text-sm text-slate-500">Retail: ${item.originalPrice}</p>
                            </div>

                            <div className="flex flex-wrap gap-1 mb-3">
                              {item.occasions.map((occasion, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {occasion}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                Edit Rental
                              </Button>
                              <Button size="sm" variant="outline">
                                Calendar
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Rental Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">$450</div>
                        <p className="text-sm text-purple-700">This Month</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">12</div>
                        <p className="text-sm text-green-700">Total Rentals</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">Popular Occasions</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Weddings</span>
                          <span className="font-medium">45%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Business Events</span>
                          <span className="font-medium">30%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Parties</span>
                          <span className="font-medium">25%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-pink-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Users className="h-4 w-4 mr-2" />
                      Add Item to Rental
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="repair" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Scissors className="h-5 w-5 mr-2" />
                      Repair History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {repairHistory.map((repair) => (
                        <div key={repair.id} className="border border-slate-200 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-medium text-slate-900">{repair.item}</h4>
                              <p className="text-sm text-slate-600">{repair.service}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">${repair.cost}</p>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <span
                                    key={i}
                                    className={`text-xs ${i < repair.rating ? "text-yellow-500" : "text-slate-300"}`}
                                  >
                                    ★
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm text-slate-600">
                            <span>{repair.tailor}</span>
                            <span>{new Date(repair.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Care Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h4 className="font-medium text-yellow-900">Silk Blouse</h4>
                        <p className="text-sm text-yellow-700">Due for professional cleaning</p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Book Cleaning
                        </Button>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-medium text-blue-900">Leather Boots</h4>
                        <p className="text-sm text-blue-700">Recommend conditioning treatment</p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Find Cobbler
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Local Tailors & Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {localTailors.map((tailor) => (
                      <div key={tailor.id} className="border border-slate-200 rounded-lg p-4">
                        <div className="flex space-x-4">
                          <img
                            src={tailor.image || "/placeholder.svg"}
                            alt={tailor.name}
                            className="w-12 h-12 object-cover rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-medium text-slate-900">{tailor.name}</h4>
                                <p className="text-sm text-slate-600">{tailor.specialty}</p>
                              </div>
                              <Badge variant="outline">{tailor.price}</Badge>
                            </div>

                            <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
                              <div className="flex items-center">
                                <span className="text-yellow-500 mr-1">★</span>
                                <span>{tailor.rating}</span>
                              </div>
                              <span className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {tailor.distance}
                              </span>
                            </div>

                            <div className="flex space-x-2">
                              <Button size="sm">Book Service</Button>
                              <Button size="sm" variant="outline">
                                View Profile
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    Value Appreciation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-medium text-green-900">Chanel Blazer</h4>
                      <p className="text-sm text-green-700 mb-2">Purchased: $2,800 → Current: $3,200</p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 font-medium">+14% appreciation</span>
                        <Badge className="bg-green-600">Investment Grade</Badge>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-900">Hermès Scarf</h4>
                      <p className="text-sm text-blue-700 mb-2">Purchased: $400 → Current: $520</p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-medium">+30% appreciation</span>
                        <Badge className="bg-blue-600">High Performer</Badge>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <h4 className="font-medium text-slate-900">Fast Fashion Items</h4>
                      <p className="text-sm text-slate-700 mb-2">Average depreciation: -60%</p>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Consider for donation</span>
                        <Badge variant="outline">Low Value</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Portfolio Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">$12,450</div>
                        <p className="text-sm text-purple-700">Total Value</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">+8.5%</div>
                        <p className="text-sm text-green-700">YTD Growth</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">Top Performers</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Luxury Accessories</span>
                          <span className="font-medium text-green-600">+25%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Designer Outerwear</span>
                          <span className="font-medium text-green-600">+18%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Vintage Pieces</span>
                          <span className="font-medium text-green-600">+12%</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-900 mb-3">Recommendations</h4>
                      <div className="space-y-2 text-sm">
                        <div className="p-2 bg-yellow-50 rounded border border-yellow-200">
                          <span className="text-yellow-800">Consider selling 3 fast-fashion items</span>
                        </div>
                        <div className="p-2 bg-green-50 rounded border border-green-200">
                          <span className="text-green-800">Invest in 1-2 luxury accessories</span>
                        </div>
                      </div>
                    </div>
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
