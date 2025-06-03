"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { Palette, Wand2, Save, Share, Calendar, MapPin, Thermometer } from "lucide-react"

export default function CreateLookPage() {
  const [selectedItems, setSelectedItems] = useState<any[]>([])
  const [lookName, setLookName] = useState("")
  const [occasion, setOccasion] = useState("")

  const wardrobeItems = [
    {
      id: "1",
      name: "White Silk Blouse",
      category: "Tops",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=200&fit=crop",
    },
    {
      id: "2",
      name: "Black Blazer",
      category: "Outerwear",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=150&h=200&fit=crop",
    },
    {
      id: "3",
      name: "Dark Wash Jeans",
      category: "Bottoms",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=150&h=200&fit=crop",
    },
    {
      id: "4",
      name: "Black Pumps",
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=150&h=200&fit=crop",
    },
    {
      id: "5",
      name: "Statement Necklace",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=150&h=200&fit=crop",
    },
    {
      id: "6",
      name: "Leather Handbag",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=200&fit=crop",
    },
  ]

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    if (result.destination.droppableId === "selected-items") {
      const item = wardrobeItems.find((item) => item.id === result.draggableId)
      if (item && !selectedItems.find((selected) => selected.id === item.id)) {
        setSelectedItems([...selectedItems, item])
      }
    }
  }

  const removeItem = (itemId: string) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== itemId))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Create New Look</h1>
          <p className="text-slate-600 mt-2">Drag and drop items to create your perfect outfit</p>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="wardrobe" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="wardrobe">My Wardrobe</TabsTrigger>
                  <TabsTrigger value="ai-suggest">AI Suggestions</TabsTrigger>
                  <TabsTrigger value="shopping">Shop Missing</TabsTrigger>
                </TabsList>

                <TabsContent value="wardrobe" className="mt-6">
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle>Wardrobe Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Droppable droppableId="wardrobe-items" direction="horizontal">
                        {(provided) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                          >
                            {wardrobeItems.map((item, index) => (
                              <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`cursor-grab active:cursor-grabbing ${
                                      snapshot.isDragging ? "opacity-50" : ""
                                    }`}
                                  >
                                    <div className="border border-slate-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                                      <img
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.name}
                                        className="w-full h-32 object-cover rounded-md mb-2"
                                      />
                                      <h4 className="font-medium text-sm text-slate-900">{item.name}</h4>
                                      <Badge variant="outline" className="text-xs mt-1">
                                        {item.category}
                                      </Badge>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="ai-suggest" className="mt-6">
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Wand2 className="h-5 w-5 mr-2 text-purple-600" />
                        AI Style Suggestions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
                          <h4 className="font-medium text-purple-900 mb-2">Business Casual</h4>
                          <p className="text-sm text-purple-700 mb-3">Perfect for your 2 PM meeting</p>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              Use This Look
                            </Button>
                            <Button size="sm" variant="ghost">
                              Customize
                            </Button>
                          </div>
                        </div>
                        <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                          <h4 className="font-medium text-blue-900 mb-2">Date Night Chic</h4>
                          <p className="text-sm text-blue-700 mb-3">Elegant for dinner at 7 PM</p>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              Use This Look
                            </Button>
                            <Button size="sm" variant="ghost">
                              Customize
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="shopping" className="mt-6">
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle>Complete Your Look</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 border border-slate-200 rounded-lg">
                          <h4 className="font-medium text-slate-900">Missing: Statement Earrings</h4>
                          <p className="text-sm text-slate-600 mb-2">To complete your elegant look</p>
                          <div className="flex space-x-2">
                            <Button size="sm">Shop Now</Button>
                            <Button size="sm" variant="outline">
                              Save for Later
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="h-5 w-5 mr-2" />
                    Your Look
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Droppable droppableId="selected-items">
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="min-h-[300px] border-2 border-dashed border-slate-300 rounded-lg p-4"
                      >
                        {selectedItems.length === 0 ? (
                          <div className="text-center text-slate-500 py-12">
                            <Palette className="h-12 w-12 mx-auto mb-4 text-slate-400" />
                            <p>Drag items here to create your look</p>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-3">
                            {selectedItems.map((item, index) => (
                              <div key={item.id} className="relative group">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  className="w-full h-24 object-cover rounded-md"
                                />
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  ×
                                </button>
                                <p className="text-xs text-slate-600 mt-1">{item.name}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Look Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="look-name">Look Name</Label>
                      <Input
                        id="look-name"
                        placeholder="e.g., Business Casual Friday"
                        value={lookName}
                        onChange={(e) => setLookName(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="occasion">Occasion</Label>
                      <Select value={occasion} onValueChange={setOccasion}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select occasion" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="work">Work</SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                          <SelectItem value="date">Date Night</SelectItem>
                          <SelectItem value="event">Special Event</SelectItem>
                          <SelectItem value="travel">Travel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Context</Label>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <Thermometer className="h-4 w-4" />
                        <span>72°F, Sunny</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <Calendar className="h-4 w-4" />
                        <span>Today, 2:00 PM Meeting</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <MapPin className="h-4 w-4" />
                        <span>Downtown Office</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1">
                        <Save className="h-4 w-4 mr-2" />
                        Save Look
                      </Button>
                      <Button variant="outline">
                        <Share className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </DragDropContext>
      </main>
    </div>
  )
}
