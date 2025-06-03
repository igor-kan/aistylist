"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Heart, Camera, MapPin, Star, TrendingUp } from "lucide-react"

export default function DailyLogPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [compliments, setCompliments] = useState([3])
  const [confidence, setConfidence] = useState([8])

  const todaysLook = {
    id: 1,
    name: "Business Casual Friday",
    items: ["White Silk Blouse", "Navy Blazer", "Dark Jeans", "Black Pumps"],
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    occasion: "Work",
    weather: "Sunny, 72°F",
    location: "Downtown Office",
  }

  const recentLogs = [
    {
      date: "2024-01-15",
      look: "Business Casual Friday",
      compliments: 4,
      confidence: 9,
      interactions: 12,
      effectiveness: 0.33,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=200&fit=crop",
      notes: "Great response to the new blazer!",
    },
    {
      date: "2024-01-14",
      look: "Date Night Elegance",
      compliments: 7,
      confidence: 10,
      interactions: 8,
      effectiveness: 0.88,
      image: "https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?w=150&h=200&fit=crop",
      notes: "Perfect for the restaurant atmosphere",
    },
    {
      date: "2024-01-13",
      look: "Weekend Brunch",
      compliments: 2,
      confidence: 7,
      interactions: 15,
      effectiveness: 0.13,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150&h=200&fit=crop",
      notes: "Comfortable but maybe too casual",
    },
  ]

  const socialMetrics = {
    totalCompliments: 156,
    avgComplimentsPerLook: 4.2,
    bestPerformingStyle: "Minimalist Chic",
    socialEffectiveness: 0.34,
    confidenceGrowth: "+15%",
    mostComplimented: "Black Blazer",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Daily Look Log</h1>
          <p className="text-slate-600 mt-2">Track your outfits and social feedback to optimize your style</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Today's Look</span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Camera className="h-4 w-4 mr-2" />
                        Log Today's Outfit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Log Today's Look</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <Label>Select Look</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose from your looks" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="business-casual">Business Casual Friday</SelectItem>
                              <SelectItem value="date-night">Date Night Elegance</SelectItem>
                              <SelectItem value="weekend">Weekend Brunch</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label>Occasion</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Where did you wear this?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="work">Work</SelectItem>
                              <SelectItem value="social">Social Event</SelectItem>
                              <SelectItem value="date">Date</SelectItem>
                              <SelectItem value="casual">Casual Outing</SelectItem>
                              <SelectItem value="formal">Formal Event</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label>Location</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Where did you go?" className="pl-10" />
                          </div>
                        </div>

                        <div>
                          <Label>Compliments Received: {compliments[0]}</Label>
                          <Slider
                            value={compliments}
                            onValueChange={setCompliments}
                            max={20}
                            min={0}
                            step={1}
                            className="mt-2"
                          />
                          <div className="flex justify-between text-xs text-slate-500 mt-1">
                            <span>0</span>
                            <span>20+</span>
                          </div>
                        </div>

                        <div>
                          <Label>Confidence Level: {confidence[0]}/10</Label>
                          <Slider
                            value={confidence}
                            onValueChange={setConfidence}
                            max={10}
                            min={1}
                            step={1}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label>Notes</Label>
                          <Textarea
                            placeholder="How did the outfit feel? Any feedback received?"
                            className="min-h-[80px]"
                          />
                        </div>

                        <Button className="w-full">
                          <Heart className="h-4 w-4 mr-2" />
                          Save Look Log
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-6">
                  <img
                    src={todaysLook.image || "/placeholder.svg"}
                    alt={todaysLook.name}
                    className="w-32 h-40 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{todaysLook.name}</h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-slate-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {todaysLook.location}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Badge variant="outline">{todaysLook.occasion}</Badge>
                        <span className="ml-2">{todaysLook.weather}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-slate-900">Items:</h4>
                      <div className="flex flex-wrap gap-2">
                        {todaysLook.items.map((item, index) => (
                          <Badge key={index} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Recent Look Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentLogs.map((log, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex space-x-4">
                        <img
                          src={log.image || "/placeholder.svg"}
                          alt={log.look}
                          className="w-16 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-medium text-slate-900">{log.look}</h4>
                              <p className="text-sm text-slate-500">{new Date(log.date).toLocaleDateString()}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center text-sm text-slate-600">
                                <Heart className="h-4 w-4 mr-1 text-red-500" />
                                {log.compliments}
                              </div>
                              <div className="text-xs text-slate-500">
                                {(log.effectiveness * 100).toFixed(0)}% effective
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-4 text-sm mb-2">
                            <div>
                              <span className="text-slate-600">Confidence: </span>
                              <span className="font-medium">{log.confidence}/10</span>
                            </div>
                            <div>
                              <span className="text-slate-600">Interactions: </span>
                              <span className="font-medium">{log.interactions}</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 mr-1 text-yellow-500" />
                              <span className="font-medium">{(log.effectiveness * 100).toFixed(0)}%</span>
                            </div>
                          </div>

                          {log.notes && <p className="text-sm text-slate-600 italic">"{log.notes}"</p>}
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
                  <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                  Social Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{socialMetrics.totalCompliments}</div>
                      <p className="text-xs text-purple-700">Total Compliments</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{socialMetrics.avgComplimentsPerLook}</div>
                      <p className="text-xs text-green-700">Avg per Look</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Social Effectiveness:</span>
                      <span className="font-medium">{(socialMetrics.socialEffectiveness * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Confidence Growth:</span>
                      <span className="font-medium text-green-600">{socialMetrics.confidenceGrowth}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Best Style:</span>
                      <span className="font-medium">{socialMetrics.bestPerformingStyle}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Most Complimented:</span>
                      <span className="font-medium">{socialMetrics.mostComplimented}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium text-slate-900">Upcoming Events</h4>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 bg-blue-50 rounded border border-blue-200">
                      <p className="font-medium text-blue-900">Team Meeting</p>
                      <p className="text-blue-700">Tomorrow, 2:00 PM</p>
                    </div>
                    <div className="p-2 bg-pink-50 rounded border border-pink-200">
                      <p className="font-medium text-pink-900">Date Night</p>
                      <p className="text-pink-700">Friday, 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Quick Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-green-900">Trending Up</h4>
                    <p className="text-green-700">Your blazer combinations are getting 40% more compliments</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-yellow-900">Opportunity</h4>
                    <p className="text-yellow-700">Try wearing your silk scarf more - it's underutilized</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-900">Weather Alert</h4>
                    <p className="text-blue-700">Rain expected tomorrow - consider waterproof shoes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
