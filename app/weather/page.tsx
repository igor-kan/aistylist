"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cloud, Sun, CloudRain, Wind, Droplets, Eye } from "lucide-react"

export default function WeatherPage() {
  const [location, setLocation] = useState("New York, NY")
  const [currentWeather, setCurrentWeather] = useState({
    temperature: 72,
    condition: "sunny",
    humidity: 45,
    windSpeed: 8,
    uvIndex: 6,
    feelsLike: 75,
  })

  const [forecast, setForecast] = useState([
    {
      day: "Today",
      high: 75,
      low: 62,
      condition: "sunny",
      precipitation: 0,
      outfit: "Light layers, breathable fabrics",
    },
    {
      day: "Tomorrow",
      high: 68,
      low: 55,
      condition: "cloudy",
      precipitation: 20,
      outfit: "Light jacket, closed-toe shoes",
    },
    {
      day: "Wednesday",
      high: 58,
      low: 45,
      condition: "rainy",
      precipitation: 80,
      outfit: "Waterproof coat, boots, umbrella",
    },
    {
      day: "Thursday",
      high: 52,
      low: 38,
      condition: "windy",
      precipitation: 10,
      outfit: "Warm layers, wind-resistant outer",
    },
    {
      day: "Friday",
      high: 78,
      low: 65,
      condition: "sunny",
      precipitation: 0,
      outfit: "Summer dress, sandals, sun hat",
    },
  ])

  const weatherOutfits = {
    sunny: {
      icon: Sun,
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      recommendations: [
        "Light, breathable fabrics like cotton and linen",
        "Bright colors and pastels",
        "Sandals or breathable sneakers",
        "Sun hat and sunglasses",
        "Light cardigan for air conditioning",
      ],
      avoid: ["Heavy fabrics", "Dark colors", "Closed shoes without ventilation"],
      looks: [
        {
          name: "Sunny Day Casual",
          items: ["White cotton tee", "Denim shorts", "Canvas sneakers", "Straw hat"],
          image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=250&fit=crop",
        },
        {
          name: "Summer Professional",
          items: ["Linen blazer", "Cotton blouse", "Midi skirt", "Block heels"],
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop",
        },
      ],
    },
    rainy: {
      icon: CloudRain,
      color: "text-blue-500",
      bg: "bg-blue-50",
      recommendations: [
        "Waterproof or water-resistant outerwear",
        "Quick-dry fabrics",
        "Closed-toe shoes with good grip",
        "Umbrella or hooded jacket",
        "Darker colors to hide water spots",
      ],
      avoid: ["Suede or leather", "White or light colors", "Open-toe shoes"],
      looks: [
        {
          name: "Rainy Day Chic",
          items: ["Trench coat", "Ankle boots", "Crossbody bag", "Scarf"],
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=250&fit=crop",
        },
        {
          name: "Cozy Rain Look",
          items: ["Wool sweater", "Dark jeans", "Rain boots", "Beanie"],
          image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=250&fit=crop",
        },
      ],
    },
    cloudy: {
      icon: Cloud,
      color: "text-gray-500",
      bg: "bg-gray-50",
      recommendations: [
        "Layering pieces for temperature changes",
        "Medium-weight fabrics",
        "Versatile colors like navy, gray, beige",
        "Comfortable walking shoes",
        "Light jacket or cardigan",
      ],
      avoid: ["Too many layers", "Heavy winter coats", "Flip-flops"],
      looks: [
        {
          name: "Cloudy Day Layers",
          items: ["Cardigan", "Basic tee", "Straight jeans", "Loafers"],
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=250&fit=crop",
        },
      ],
    },
    windy: {
      icon: Wind,
      color: "text-teal-500",
      bg: "bg-teal-50",
      recommendations: [
        "Fitted clothing to avoid billowing",
        "Wind-resistant materials",
        "Secure accessories",
        "Hair ties or headbands",
        "Closed jackets and coats",
      ],
      avoid: ["Loose, flowing fabrics", "Hats without chin straps", "Umbrellas"],
      looks: [
        {
          name: "Wind-Proof Style",
          items: ["Fitted blazer", "Skinny jeans", "Ankle boots", "Crossbody bag"],
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=250&fit=crop",
        },
      ],
    },
  }

  const getWeatherIcon = (condition: string) => {
    const weather = weatherOutfits[condition as keyof typeof weatherOutfits]
    return weather ? weather.icon : Sun
  }

  const getWeatherColor = (condition: string) => {
    const weather = weatherOutfits[condition as keyof typeof weatherOutfits]
    return weather ? weather.color : "text-yellow-500"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Weather-Based Styling</h1>
          <p className="text-slate-600 mt-2">Get outfit recommendations based on real-time weather conditions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-white mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Current Weather</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter location"
                      className="w-48"
                    />
                    <Button size="sm">Update</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-4">
                    {(() => {
                      const WeatherIcon = getWeatherIcon(currentWeather.condition)
                      return <WeatherIcon className={`h-16 w-16 ${getWeatherColor(currentWeather.condition)}`} />
                    })()}
                    <div>
                      <div className="text-4xl font-bold text-slate-900">{currentWeather.temperature}°F</div>
                      <div className="text-slate-600 capitalize">{currentWeather.condition}</div>
                      <div className="text-sm text-slate-500">Feels like {currentWeather.feelsLike}°F</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 flex-1">
                    <div className="flex items-center space-x-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-slate-600">Humidity: {currentWeather.humidity}%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wind className="h-4 w-4 text-teal-500" />
                      <span className="text-sm text-slate-600">Wind: {currentWeather.windSpeed} mph</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Sun className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-slate-600">UV Index: {currentWeather.uvIndex}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4 text-purple-500" />
                      <span className="text-sm text-slate-600">Visibility: Good</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">Today's Outfit Recommendation</h4>
                  <p className="text-blue-700">{forecast[0].outfit}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>5-Day Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {forecast.map((day, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-slate-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        {(() => {
                          const WeatherIcon = getWeatherIcon(day.condition)
                          return <WeatherIcon className={`h-8 w-8 ${getWeatherColor(day.condition)}`} />
                        })()}
                        <div>
                          <div className="font-medium text-slate-900">{day.day}</div>
                          <div className="text-sm text-slate-600 capitalize">{day.condition}</div>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="font-medium text-slate-900">
                          {day.high}° / {day.low}°
                        </div>
                        <div className="text-sm text-slate-600">{day.precipitation}% rain</div>
                      </div>

                      <div className="text-right max-w-xs">
                        <div className="text-sm text-slate-600">{day.outfit}</div>
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
                <CardTitle>Weather Styling Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={currentWeather.condition} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="sunny">Sunny</TabsTrigger>
                    <TabsTrigger value="rainy">Rainy</TabsTrigger>
                  </TabsList>

                  {Object.entries(weatherOutfits).map(([condition, data]) => (
                    <TabsContent key={condition} value={condition} className="mt-4">
                      <div className={`p-4 rounded-lg ${data.bg} border border-slate-200`}>
                        <div className="flex items-center space-x-2 mb-3">
                          <data.icon className={`h-5 w-5 ${data.color}`} />
                          <h4 className="font-medium text-slate-900 capitalize">{condition} Weather</h4>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium text-green-700 mb-1">✓ Recommended:</h5>
                            <ul className="text-xs text-slate-600 space-y-1">
                              {data.recommendations.map((rec, index) => (
                                <li key={index}>• {rec}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-sm font-medium text-red-700 mb-1">✗ Avoid:</h5>
                            <ul className="text-xs text-slate-600 space-y-1">
                              {data.avoid.map((avoid, index) => (
                                <li key={index}>• {avoid}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Weather-Appropriate Looks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weatherOutfits[currentWeather.condition as keyof typeof weatherOutfits]?.looks.map((look, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg p-3">
                      <div className="flex space-x-3">
                        <img
                          src={look.image || "/placeholder.svg"}
                          alt={look.name}
                          className="w-16 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900 mb-1">{look.name}</h4>
                          <div className="space-y-1">
                            {look.items.map((item, itemIndex) => (
                              <Badge key={itemIndex} variant="outline" className="text-xs mr-1">
                                {item}
                              </Badge>
                            ))}
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
                <CardTitle>Seasonal Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-green-900">Spring Transition</h4>
                    <p className="text-green-700">Time to rotate lighter pieces to the front of your wardrobe</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-900">Layering Season</h4>
                    <p className="text-blue-700">Perfect weather for showcasing your layering skills</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-yellow-900">UV Protection</h4>
                    <p className="text-yellow-700">Don't forget sun protection accessories</p>
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
