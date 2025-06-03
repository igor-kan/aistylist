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
import { Textarea } from "@/components/ui/textarea"
import { VenetianMaskIcon as Mask, Palette, Users, Star, Calendar, MapPin, Scissors, Camera } from "lucide-react"

export default function CosplayPage() {
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  const cosplayCategories = [
    { id: "anime", name: "Anime", icon: "🎌", count: 1234 },
    { id: "movies", name: "Movies", icon: "🎬", count: 987 },
    { id: "games", name: "Video Games", icon: "🎮", count: 756 },
    { id: "comics", name: "Comics", icon: "📚", count: 654 },
    { id: "tv", name: "TV Shows", icon: "📺", count: 543 },
    { id: "historical", name: "Historical", icon: "🏛️", count: 432 },
    { id: "fantasy", name: "Fantasy", icon: "🧙", count: 321 },
    { id: "original", name: "Original", icon: "✨", count: 210 },
  ]

  const popularCosplays = [
    {
      id: 1,
      character: "Nezuko Kamado",
      series: "Demon Slayer",
      difficulty: "Intermediate",
      estimatedCost: "$150-250",
      timeRequired: "2-3 weeks",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      components: ["Pink kimono", "Bamboo muzzle", "Orange obi", "Hair accessories", "Makeup"],
      materials: ["Satin fabric", "Bamboo prop", "Hair extensions", "Face paint"],
      tutorials: 45,
      popularity: 95,
    },
    {
      id: 2,
      character: "Wonder Woman",
      series: "DC Comics",
      difficulty: "Advanced",
      estimatedCost: "$300-500",
      timeRequired: "4-6 weeks",
      image: "https://images.unsplash.com/photo-1531259683007-016a943adb34?w=300&h=400&fit=crop",
      components: ["Armor bodice", "Skirt", "Tiara", "Gauntlets", "Lasso", "Boots"],
      materials: ["EVA foam", "Metallic paint", "Leather", "LED lights"],
      tutorials: 67,
      popularity: 88,
    },
    {
      id: 3,
      character: "Elsa",
      series: "Frozen",
      difficulty: "Beginner",
      estimatedCost: "$100-200",
      timeRequired: "1-2 weeks",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      components: ["Blue dress", "Cape", "Crown", "Gloves", "Shoes"],
      materials: ["Chiffon", "Sequins", "Rhinestones", "Wire"],
      tutorials: 89,
      popularity: 92,
    },
    {
      id: 4,
      character: "Spider-Man",
      series: "Marvel",
      difficulty: "Advanced",
      estimatedCost: "$400-700",
      timeRequired: "6-8 weeks",
      image: "https://images.unsplash.com/photo-1531259683007-016a943adb34?w=300&h=400&fit=crop",
      components: ["Full bodysuit", "Mask", "Web shooters", "Shoes"],
      materials: ["Spandex", "3D printed parts", "Elastic", "Velcro"],
      tutorials: 34,
      popularity: 85,
    },
  ]

  const localMakers = [
    {
      id: 1,
      name: "Cosplay Creations Studio",
      specialty: "Armor & Props",
      rating: 4.9,
      price: "$$$",
      location: "2.1 miles",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      services: ["Custom armor", "3D printing", "Painting", "Electronics"],
    },
    {
      id: 2,
      name: "Fabric Fantasy",
      specialty: "Costume Sewing",
      rating: 4.8,
      price: "$$",
      location: "1.5 miles",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      services: ["Custom sewing", "Pattern making", "Alterations", "Embroidery"],
    },
    {
      id: 3,
      name: "Wig Wizards",
      specialty: "Wig Styling",
      rating: 4.7,
      price: "$$",
      location: "3.2 miles",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&h=100&fit=crop",
      services: ["Wig styling", "Color matching", "Custom cuts", "Maintenance"],
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      name: "Comic Con International",
      date: "2024-07-25",
      location: "San Diego, CA",
      type: "Convention",
      attendees: "130K+",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Anime Expo",
      date: "2024-07-04",
      location: "Los Angeles, CA",
      type: "Convention",
      attendees: "100K+",
      image: "https://images.unsplash.com/photo-1531259683007-016a943adb34?w=400&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Local Cosplay Meetup",
      date: "2024-03-15",
      location: "Central Park, NYC",
      type: "Meetup",
      attendees: "50+",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
    },
  ]

  const filteredCosplays = popularCosplays.filter((cosplay) => {
    const matchesGenre = selectedGenre === "all" || cosplay.series.toLowerCase().includes(selectedGenre)
    const matchesDifficulty = selectedDifficulty === "all" || cosplay.difficulty.toLowerCase() === selectedDifficulty
    return matchesGenre && matchesDifficulty
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Cosplay Studio</h1>
          <p className="text-slate-600 mt-2">Create amazing costumes and bring your favorite characters to life</p>
        </div>

        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="browse">Browse Cosplays</TabsTrigger>
            <TabsTrigger value="create">Create Costume</TabsTrigger>
            <TabsTrigger value="makers">Local Makers</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <Card className="bg-white mb-6">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                      <div className="flex items-center space-x-4">
                        <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                          <SelectTrigger className="w-40">
                            <SelectValue placeholder="All Genres" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Genres</SelectItem>
                            <SelectItem value="anime">Anime</SelectItem>
                            <SelectItem value="movies">Movies</SelectItem>
                            <SelectItem value="games">Video Games</SelectItem>
                            <SelectItem value="comics">Comics</SelectItem>
                          </SelectContent>
                        </Select>

                        <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                          <SelectTrigger className="w-40">
                            <SelectValue placeholder="All Levels" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Levels</SelectItem>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Input placeholder="Search characters..." className="w-64" />
                        <Button>Search</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCosplays.map((cosplay) => (
                    <Card key={cosplay.id} className="bg-white hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img
                          src={cosplay.image || "/placeholder.svg"}
                          alt={cosplay.character}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-3 left-3 right-3 flex justify-between">
                          <Badge
                            variant="secondary"
                            className={
                              cosplay.difficulty === "Beginner"
                                ? "bg-green-100 text-green-700"
                                : cosplay.difficulty === "Intermediate"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                            }
                          >
                            {cosplay.difficulty}
                          </Badge>
                          <div className="flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs">{cosplay.popularity}%</span>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <div className="mb-3">
                          <h3 className="font-semibold text-slate-900">{cosplay.character}</h3>
                          <p className="text-sm text-slate-600">{cosplay.series}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                          <div>
                            <span className="text-slate-600">Cost: </span>
                            <span className="font-medium">{cosplay.estimatedCost}</span>
                          </div>
                          <div>
                            <span className="text-slate-600">Time: </span>
                            <span className="font-medium">{cosplay.timeRequired}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-medium text-slate-900 mb-2">Components:</h4>
                          <div className="flex flex-wrap gap-1">
                            {cosplay.components.slice(0, 3).map((component, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {component}
                              </Badge>
                            ))}
                            {cosplay.components.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{cosplay.components.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-600">{cosplay.tutorials} tutorials available</span>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm">
                                <Mask className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogHeader>
                                <DialogTitle>
                                  {cosplay.character} - {cosplay.series}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                                <div>
                                  <img
                                    src={cosplay.image || "/placeholder.svg"}
                                    alt={cosplay.character}
                                    className="w-full h-64 object-cover rounded-lg mb-4"
                                  />
                                  <div className="space-y-3">
                                    <div>
                                      <h4 className="font-medium text-slate-900 mb-2">Materials Needed:</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {cosplay.materials.map((material, index) => (
                                          <Badge key={index} variant="secondary">
                                            {material}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-medium text-slate-900 mb-2">All Components:</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {cosplay.components.map((component, index) => (
                                          <Badge key={index} variant="outline">
                                            {component}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <h5 className="font-medium text-slate-900">Difficulty</h5>
                                      <p className="text-slate-600">{cosplay.difficulty}</p>
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-slate-900">Estimated Cost</h5>
                                      <p className="text-slate-600">{cosplay.estimatedCost}</p>
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-slate-900">Time Required</h5>
                                      <p className="text-slate-600">{cosplay.timeRequired}</p>
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-slate-900">Popularity</h5>
                                      <p className="text-slate-600">{cosplay.popularity}%</p>
                                    </div>
                                  </div>

                                  <div className="space-y-3">
                                    <Button className="w-full">
                                      <Palette className="h-4 w-4 mr-2" />
                                      Start This Cosplay
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                      <Camera className="h-4 w-4 mr-2" />
                                      View Tutorials ({cosplay.tutorials})
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                      <Users className="h-4 w-4 mr-2" />
                                      Find Local Makers
                                    </Button>
                                  </div>

                                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <h4 className="font-medium text-blue-900 mb-2">AI Assistance</h4>
                                    <p className="text-sm text-blue-700">
                                      Get personalized recommendations for materials, sizing, and modifications based on
                                      your body type and skill level.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Popular Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {cosplayCategories.map((category) => (
                        <div
                          key={category.id}
                          className="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{category.icon}</span>
                            <span className="font-medium text-slate-900">{category.name}</span>
                          </div>
                          <Badge variant="secondary">{category.count}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Trending This Week</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          1
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Nezuko Kamado</p>
                          <p className="text-sm text-slate-600">Demon Slayer</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          2
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Spider-Man</p>
                          <p className="text-sm text-slate-600">Marvel</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          3
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Wonder Woman</p>
                          <p className="text-sm text-slate-600">DC Comics</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="create" className="mt-6">
            <Card className="bg-white max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="h-5 w-5 mr-2" />
                  Create Custom Cosplay
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Character Name</label>
                    <Input placeholder="e.g., Sailor Moon" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Series/Source</label>
                      <Input placeholder="e.g., Sailor Moon" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Difficulty Level</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Reference Images</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                      <Camera className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-600 mb-4">Upload reference images of the character</p>
                      <Button variant="outline">
                        <Camera className="h-4 w-4 mr-2" />
                        Upload Images
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Description & Notes</label>
                    <Textarea
                      placeholder="Describe the character's outfit, special features, or any specific requirements..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Budget Range</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-100">Under $100</SelectItem>
                          <SelectItem value="100-250">$100 - $250</SelectItem>
                          <SelectItem value="250-500">$250 - $500</SelectItem>
                          <SelectItem value="500-plus">$500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Timeline</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need it?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-week">1 week</SelectItem>
                          <SelectItem value="2-weeks">2 weeks</SelectItem>
                          <SelectItem value="1-month">1 month</SelectItem>
                          <SelectItem value="2-months">2+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="flex-1">
                      <Mask className="h-4 w-4 mr-2" />
                      Generate Cosplay Plan
                    </Button>
                    <Button variant="outline">Save Draft</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="makers" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localMakers.map((maker) => (
                <Card key={maker.id} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex space-x-4 mb-4">
                      <img
                        src={maker.image || "/placeholder.svg"}
                        alt={maker.name}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{maker.name}</h3>
                        <p className="text-sm text-slate-600">{maker.specialty}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-slate-600 ml-1">{maker.rating}</span>
                          </div>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm text-slate-600">{maker.location}</span>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm text-slate-600">{maker.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-slate-900 mb-2">Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {maker.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1" size="sm">
                        <Scissors className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        Portfolio
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-6">
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex space-x-6">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.name}
                        className="w-32 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-slate-900">{event.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-slate-600 mt-1">
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(event.date).toLocaleDateString()}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {event.location}
                              </span>
                              <span className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {event.attendees}
                              </span>
                            </div>
                          </div>
                          <Badge variant="secondary">{event.type}</Badge>
                        </div>

                        <div className="flex space-x-3">
                          <Button size="sm">
                            <Calendar className="h-4 w-4 mr-2" />
                            Add to Calendar
                          </Button>
                          <Button size="sm" variant="outline">
                            <Users className="h-4 w-4 mr-2" />
                            Find Group
                          </Button>
                          <Button size="sm" variant="outline">
                            <Mask className="h-4 w-4 mr-2" />
                            Plan Cosplay
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
