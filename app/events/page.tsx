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
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, MapPin, Clock, Users, Palette, Camera, Star } from "lucide-react"

export default function EventsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedEvent, setSelectedEvent] = useState<string>("")

  const eventTypes = [
    { id: "wedding", name: "Wedding", color: "bg-pink-100 text-pink-700", icon: "💒" },
    { id: "business", name: "Business Meeting", color: "bg-blue-100 text-blue-700", icon: "💼" },
    { id: "date", name: "Date Night", color: "bg-red-100 text-red-700", icon: "❤️" },
    { id: "party", name: "Party", color: "bg-purple-100 text-purple-700", icon: "🎉" },
    { id: "formal", name: "Formal Event", color: "bg-slate-100 text-slate-700", icon: "🎭" },
    { id: "casual", name: "Casual Outing", color: "bg-green-100 text-green-700", icon: "☀️" },
    { id: "travel", name: "Travel", color: "bg-orange-100 text-orange-700", icon: "✈️" },
    { id: "funeral", name: "Funeral", color: "bg-gray-100 text-gray-700", icon: "🖤" },
    { id: "graduation", name: "Graduation", color: "bg-yellow-100 text-yellow-700", icon: "🎓" },
    { id: "holiday", name: "Holiday", color: "bg-emerald-100 text-emerald-700", icon: "🎄" },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Sarah's Wedding",
      type: "wedding",
      date: "2024-02-15",
      time: "4:00 PM",
      location: "Central Park, NYC",
      dresscode: "Cocktail Attire",
      weather: "Sunny, 68°F",
      plannedLook: "Floral Midi Dress",
      image: "https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?w=200&h=250&fit=crop",
      notes: "Outdoor ceremony, avoid stilettos",
    },
    {
      id: 2,
      title: "Board Meeting",
      type: "business",
      date: "2024-02-10",
      time: "9:00 AM",
      location: "Corporate Office",
      dresscode: "Business Professional",
      weather: "Cloudy, 45°F",
      plannedLook: "Navy Power Suit",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop",
      notes: "Important presentation, confidence is key",
    },
    {
      id: 3,
      title: "Anniversary Dinner",
      type: "date",
      date: "2024-02-14",
      time: "7:30 PM",
      location: "Le Bernardin",
      dresscode: "Elegant Casual",
      weather: "Clear, 52°F",
      plannedLook: "Black Silk Dress",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=250&fit=crop",
      notes: "Romantic setting, sophisticated look",
    },
  ]

  const eventSuggestions = {
    wedding: {
      dos: ["Midi or maxi dresses", "Pastels or jewel tones", "Comfortable heels", "Light cardigan"],
      donts: ["White or ivory", "Black (unless specified)", "Overly casual", "Attention-grabbing"],
      accessories: ["Statement earrings", "Clutch purse", "Wrap or shawl", "Comfortable shoes for dancing"],
    },
    business: {
      dos: ["Tailored suits", "Conservative colors", "Closed-toe shoes", "Minimal jewelry"],
      donts: ["Short skirts", "Low necklines", "Bright patterns", "Casual fabrics"],
      accessories: ["Professional watch", "Structured bag", "Simple jewelry", "Blazer or cardigan"],
    },
    date: {
      dos: ["Flattering silhouettes", "Confidence-boosting pieces", "Comfortable shoes", "Personal style"],
      donts: ["Overly revealing", "Brand new untested items", "Uncomfortable pieces", "Too formal/casual"],
      accessories: ["Signature scent", "Elegant jewelry", "Small purse", "Conversation starters"],
    },
  }

  const localServices = [
    {
      id: 1,
      name: "Elite Styling Services",
      type: "Personal Stylist",
      rating: 4.9,
      price: "$150/hour",
      specialty: "Event Styling",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      distance: "0.5 miles",
    },
    {
      id: 2,
      name: "Perfect Fit Alterations",
      type: "Tailor",
      rating: 4.8,
      price: "$25-75",
      specialty: "Last-minute alterations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      distance: "0.8 miles",
    },
    {
      id: 3,
      name: "Glamour Hair & Makeup",
      type: "Beauty Services",
      rating: 4.7,
      price: "$80-200",
      specialty: "Event makeup",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&h=100&fit=crop",
      distance: "1.2 miles",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Event Styling</h1>
          <p className="text-slate-600 mt-2">Plan perfect outfits for every occasion</p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="plan">Plan Event</TabsTrigger>
            <TabsTrigger value="guidelines">Style Guidelines</TabsTrigger>
            <TabsTrigger value="services">Local Services</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="bg-white">
                      <CardContent className="p-6">
                        <div className="flex space-x-6">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.plannedLook}
                            className="w-24 h-32 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-semibold text-slate-900">{event.title}</h3>
                                <div className="flex items-center space-x-4 text-sm text-slate-600 mt-1">
                                  <span className="flex items-center">
                                    <CalendarIcon className="h-4 w-4 mr-1" />
                                    {new Date(event.date).toLocaleDateString()}
                                  </span>
                                  <span className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {event.time}
                                  </span>
                                  <span className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    {event.location}
                                  </span>
                                </div>
                              </div>
                              <Badge className={eventTypes.find((t) => t.id === event.type)?.color}>
                                {eventTypes.find((t) => t.id === event.type)?.icon}{" "}
                                {eventTypes.find((t) => t.id === event.type)?.name}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <h4 className="font-medium text-slate-900 mb-1">Dress Code</h4>
                                <p className="text-sm text-slate-600">{event.dresscode}</p>
                              </div>
                              <div>
                                <h4 className="font-medium text-slate-900 mb-1">Weather</h4>
                                <p className="text-sm text-slate-600">{event.weather}</p>
                              </div>
                              <div>
                                <h4 className="font-medium text-slate-900 mb-1">Planned Look</h4>
                                <p className="text-sm text-slate-600">{event.plannedLook}</p>
                              </div>
                              <div>
                                <h4 className="font-medium text-slate-900 mb-1">Notes</h4>
                                <p className="text-sm text-slate-600">{event.notes}</p>
                              </div>
                            </div>

                            <div className="flex space-x-3">
                              <Button size="sm">
                                <Palette className="h-4 w-4 mr-2" />
                                Edit Look
                              </Button>
                              <Button size="sm" variant="outline">
                                <Camera className="h-4 w-4 mr-2" />
                                Try On
                              </Button>
                              <Button size="sm" variant="outline">
                                <Users className="h-4 w-4 mr-2" />
                                Get Feedback
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Events this month:</span>
                        <span className="font-medium">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Looks planned:</span>
                        <span className="font-medium">6</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Most common type:</span>
                        <span className="font-medium">Business</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="plan" className="mt-6">
            <Card className="bg-white max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Plan New Event</CardTitle>
                <p className="text-slate-600">Add an event and get styling suggestions</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="event-title">Event Title</Label>
                      <Input id="event-title" placeholder="e.g., Company Holiday Party" />
                    </div>
                    <div>
                      <Label htmlFor="event-type">Event Type</Label>
                      <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              <span className="flex items-center">
                                <span className="mr-2">{type.icon}</span>
                                {type.name}
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="event-date">Date</Label>
                      <Input id="event-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="event-time">Time</Label>
                      <Input id="event-time" type="time" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input id="location" placeholder="Event venue or address" className="pl-10" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dress-code">Dress Code</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select dress code" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="casual">Casual</SelectItem>
                          <SelectItem value="business-casual">Business Casual</SelectItem>
                          <SelectItem value="business-professional">Business Professional</SelectItem>
                          <SelectItem value="cocktail">Cocktail</SelectItem>
                          <SelectItem value="formal">Formal</SelectItem>
                          <SelectItem value="black-tie">Black Tie</SelectItem>
                          <SelectItem value="white-tie">White Tie</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="weather">Expected Weather</Label>
                      <Input id="weather" placeholder="e.g., Sunny, 72°F" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Special Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special considerations, themes, or requirements..."
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button className="flex-1">
                      <Palette className="h-4 w-4 mr-2" />
                      Create Event & Get Styling
                    </Button>
                    <Button variant="outline">Save Draft</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guidelines" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(eventSuggestions).map(([eventType, guidelines]) => (
                <Card key={eventType} className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="mr-2">{eventTypes.find((t) => t.id === eventType)?.icon}</span>
                      {eventTypes.find((t) => t.id === eventType)?.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">✓ Do Wear:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {guidelines.dos.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-red-700 mb-2">✗ Avoid:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {guidelines.donts.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">Accessories:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {guidelines.accessories.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localServices.map((service) => (
                <Card key={service.id} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{service.name}</h3>
                        <p className="text-sm text-slate-600">{service.type}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-slate-600 ml-1">{service.rating}</span>
                          </div>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm text-slate-600">{service.distance}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-600">Specialty:</span>
                        <span className="text-sm font-medium">{service.specialty}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-slate-600">Price:</span>
                        <span className="text-sm font-medium">{service.price}</span>
                      </div>
                      <Button className="w-full" size="sm">
                        Book Service
                      </Button>
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
