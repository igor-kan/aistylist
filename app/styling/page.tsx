"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Wand2, Upload, ImageIcon, Palette, User, Sun, Snowflake } from "lucide-react"

export default function StylingPage() {
  const [prompt, setPrompt] = useState("")
  const [selectedArchetype, setSelectedArchetype] = useState("")
  const [bodyShape, setBodyShape] = useState("")
  const [skinTone, setSkinTone] = useState("")
  const [budget, setBudget] = useState([500])
  const [isGenerating, setIsGenerating] = useState(false)

  const styleArchetypes = [
    { id: "minimalist-parisian", name: "Minimalist Parisian", description: "Effortless chic with neutral tones" },
    { id: "cozy-academia", name: "Cozy Academia", description: "Intellectual comfort with warm textures" },
    { id: "lunar-techno", name: "Lunar Techno", description: "Futuristic minimalism with metallic accents" },
    { id: "romantic-vintage", name: "Romantic Vintage", description: "Feminine florals and classic silhouettes" },
    { id: "urban-streetwear", name: "Urban Streetwear", description: "Bold graphics and contemporary cuts" },
    { id: "bohemian-luxe", name: "Bohemian Luxe", description: "Free-spirited elegance with rich textures" },
  ]

  const referenceImages = [
    {
      id: 1,
      title: "Dune Inspired",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200&h=300&fit=crop",
      tags: ["Minimalist", "Earth Tones", "Structured"],
    },
    {
      id: 2,
      title: "Parisian Street Style",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=300&fit=crop",
      tags: ["Chic", "Effortless", "Classic"],
    },
    {
      id: 3,
      title: "Modern Professional",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=300&fit=crop",
      tags: ["Professional", "Clean", "Sophisticated"],
    },
  ]

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsGenerating(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">AI Styling Studio</h1>
          <p className="text-slate-600 mt-2">Create personalized looks with AI-powered style assistance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="prompt" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="prompt">Text Prompt</TabsTrigger>
                <TabsTrigger value="reference">Reference Images</TabsTrigger>
                <TabsTrigger value="archetype">Style Archetype</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              <TabsContent value="prompt" className="mt-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wand2 className="h-5 w-5 mr-2 text-purple-600" />
                      Describe Your Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Textarea
                        placeholder="Describe your desired style... e.g., 'a look inspired by Dune but suitable for rainy Toronto weekdays' or 'elegant minimalism for a gallery opening'"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="min-h-[120px]"
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Occasion</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select occasion" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="work">Work</SelectItem>
                              <SelectItem value="date">Date Night</SelectItem>
                              <SelectItem value="casual">Casual</SelectItem>
                              <SelectItem value="event">Special Event</SelectItem>
                              <SelectItem value="travel">Travel</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label>Weather</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Current weather" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sunny">
                                <div className="flex items-center">
                                  <Sun className="h-4 w-4 mr-2" />
                                  Sunny & Warm
                                </div>
                              </SelectItem>
                              <SelectItem value="rainy">
                                <div className="flex items-center">
                                  <Snowflake className="h-4 w-4 mr-2" />
                                  Rainy & Cool
                                </div>
                              </SelectItem>
                              <SelectItem value="cold">
                                <div className="flex items-center">
                                  <Snowflake className="h-4 w-4 mr-2" />
                                  Cold & Windy
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button onClick={handleGenerate} disabled={isGenerating || !prompt.trim()} className="w-full">
                        {isGenerating ? (
                          <>
                            <Wand2 className="h-4 w-4 mr-2 animate-spin" />
                            Generating Style...
                          </>
                        ) : (
                          <>
                            <Wand2 className="h-4 w-4 mr-2" />
                            Generate Style
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reference" className="mt-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ImageIcon className="h-5 w-5 mr-2 text-blue-600" />
                      Reference Images
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                        <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-lg font-medium text-slate-900">Upload Reference Images</p>
                        <p className="text-sm text-slate-500">
                          Fashion editorials, movie stills, or inspiration photos
                        </p>
                        <Button variant="outline" className="mt-4">
                          <Upload className="h-4 w-4 mr-2" />
                          Choose Files
                        </Button>
                      </div>

                      <div>
                        <h4 className="font-medium text-slate-900 mb-4">Popular References</h4>
                        <div className="grid grid-cols-3 gap-4">
                          {referenceImages.map((ref) => (
                            <div key={ref.id} className="cursor-pointer group">
                              <div className="relative overflow-hidden rounded-lg">
                                <img
                                  src={ref.image || "/placeholder.svg"}
                                  alt={ref.title}
                                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                              </div>
                              <h5 className="font-medium text-sm mt-2">{ref.title}</h5>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {ref.tags.map((tag, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="archetype" className="mt-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Palette className="h-5 w-5 mr-2 text-green-600" />
                      Style Archetypes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {styleArchetypes.map((archetype) => (
                        <div
                          key={archetype.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            selectedArchetype === archetype.id
                              ? "border-purple-500 bg-purple-50"
                              : "border-slate-200 hover:border-slate-300"
                          }`}
                          onClick={() => setSelectedArchetype(archetype.id)}
                        >
                          <h4 className="font-medium text-slate-900">{archetype.name}</h4>
                          <p className="text-sm text-slate-600 mt-1">{archetype.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="mt-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2 text-orange-600" />
                      Personal Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Body Shape</Label>
                          <Select value={bodyShape} onValueChange={setBodyShape}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select body shape" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pear">Pear</SelectItem>
                              <SelectItem value="apple">Apple</SelectItem>
                              <SelectItem value="hourglass">Hourglass</SelectItem>
                              <SelectItem value="rectangle">Rectangle</SelectItem>
                              <SelectItem value="inverted-triangle">Inverted Triangle</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label>Skin Tone</Label>
                          <Select value={skinTone} onValueChange={setSkinTone}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select skin tone" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="warm">Warm</SelectItem>
                              <SelectItem value="cool">Cool</SelectItem>
                              <SelectItem value="neutral">Neutral</SelectItem>
                              <SelectItem value="olive">Olive</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label>Budget Range: ${budget[0]}</Label>
                        <Slider
                          value={budget}
                          onValueChange={setBudget}
                          max={2000}
                          min={50}
                          step={50}
                          className="mt-2"
                        />
                        <div className="flex justify-between text-sm text-slate-500 mt-1">
                          <span>$50</span>
                          <span>$2000+</span>
                        </div>
                      </div>

                      <div>
                        <Label>Color Preferences</Label>
                        <div className="grid grid-cols-4 gap-2 mt-2">
                          {[
                            { name: "Neutrals", color: "bg-slate-300" },
                            { name: "Earth Tones", color: "bg-amber-600" },
                            { name: "Jewel Tones", color: "bg-emerald-600" },
                            { name: "Pastels", color: "bg-pink-300" },
                          ].map((colorGroup) => (
                            <div
                              key={colorGroup.name}
                              className="flex items-center space-x-2 p-2 border border-slate-200 rounded cursor-pointer hover:bg-slate-50"
                            >
                              <div className={`w-4 h-4 rounded-full ${colorGroup.color}`} />
                              <span className="text-sm">{colorGroup.name}</span>
                            </div>
                          ))}
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
                <CardTitle>Generated Styles</CardTitle>
              </CardHeader>
              <CardContent>
                {isGenerating ? (
                  <div className="text-center py-8">
                    <Wand2 className="h-8 w-8 animate-spin mx-auto mb-4 text-purple-600" />
                    <p className="text-slate-600">AI is creating your perfect style...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 border border-slate-200 rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=300&fit=crop"
                        alt="Generated look"
                        className="w-full h-48 object-cover rounded-md mb-3"
                      />
                      <h4 className="font-medium text-slate-900">Minimalist Chic</h4>
                      <p className="text-sm text-slate-600 mb-2">Perfect for your described vision</p>
                      <div className="flex space-x-2">
                        <Button size="sm">Use This Style</Button>
                        <Button size="sm" variant="outline">
                          Customize
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Style Modes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    🎯 Budget Mode
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    🧠 Learn Mode
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    🛠 Optimize Mode
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    🎭 Event/Theme Mode
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
