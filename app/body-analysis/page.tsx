"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Ruler, Camera, Palette, User, Target, CheckCircle } from "lucide-react"

export default function BodyAnalysisPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bodyShape, setBodyShape] = useState("")
  const [measurements, setMeasurements] = useState({
    bust: "",
    waist: "",
    hips: "",
    height: "",
    weight: "",
  })

  const bodyShapes = [
    {
      id: "pear",
      name: "Pear",
      description: "Hips wider than shoulders, defined waist",
      characteristics: ["Narrow shoulders", "Defined waist", "Fuller hips", "Smaller bust"],
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=300&fit=crop",
      celebrities: ["Beyoncé", "Jennifer Lopez", "Shakira"],
      styling: {
        emphasize: ["Upper body", "Shoulders", "Neckline"],
        balance: ["Add volume to top", "Draw attention upward", "Define waist"],
        avoid: ["Hip-hugging styles", "Tapered pants", "Horizontal stripes on bottom"],
      },
    },
    {
      id: "apple",
      name: "Apple",
      description: "Broader shoulders and bust, less defined waist",
      characteristics: ["Broader shoulders", "Fuller bust", "Less defined waist", "Slimmer hips"],
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=300&fit=crop",
      celebrities: ["Adele", "Rebel Wilson", "Queen Latifah"],
      styling: {
        emphasize: ["Legs", "Arms", "Décolletage"],
        balance: ["Create waist definition", "Elongate torso", "Show off legs"],
        avoid: ["Tight waistbands", "Crop tops", "Horizontal stripes across middle"],
      },
    },
    {
      id: "hourglass",
      name: "Hourglass",
      description: "Balanced shoulders and hips, defined waist",
      characteristics: ["Balanced proportions", "Defined waist", "Curved silhouette", "Equal bust and hip"],
      image: "https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?w=200&h=300&fit=crop",
      celebrities: ["Scarlett Johansson", "Sofia Vergara", "Marilyn Monroe"],
      styling: {
        emphasize: ["Waist", "Natural curves", "Balanced proportions"],
        balance: ["Maintain proportions", "Highlight waist", "Fitted styles"],
        avoid: ["Boxy shapes", "Drop-waist styles", "Oversized clothing"],
      },
    },
    {
      id: "rectangle",
      name: "Rectangle",
      description: "Similar measurements for shoulders, waist, and hips",
      characteristics: ["Straight silhouette", "Minimal waist definition", "Balanced proportions", "Athletic build"],
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=300&fit=crop",
      celebrities: ["Keira Knightley", "Cameron Diaz", "Gwyneth Paltrow"],
      styling: {
        emphasize: ["Create curves", "Add definition", "Layering"],
        balance: ["Create waist illusion", "Add volume", "Use belts"],
        avoid: ["Straight cuts", "Shapeless dresses", "Low-rise pants"],
      },
    },
    {
      id: "inverted-triangle",
      name: "Inverted Triangle",
      description: "Broader shoulders than hips, athletic build",
      characteristics: ["Broad shoulders", "Narrow hips", "Athletic build", "Strong upper body"],
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=300&fit=crop",
      celebrities: ["Angelina Jolie", "Naomi Campbell", "Demi Moore"],
      styling: {
        emphasize: ["Lower body", "Hips", "Legs"],
        balance: ["Add volume to bottom", "Soften shoulders", "Create hip curves"],
        avoid: ["Shoulder pads", "Boat necks", "Horizontal stripes on top"],
      },
    },
  ]

  const colorAnalysis = {
    warm: {
      name: "Warm Undertones",
      description: "Golden, yellow, or peachy undertones",
      bestColors: ["Warm reds", "Orange", "Yellow", "Coral", "Peach", "Warm browns", "Olive green"],
      avoidColors: ["Cool blues", "Purple", "Pink", "Silver", "Black"],
      metals: "Gold jewelry",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=150&fit=crop",
    },
    cool: {
      name: "Cool Undertones",
      description: "Pink, red, or blue undertones",
      bestColors: ["Cool blues", "Purple", "Pink", "Emerald", "True red", "Navy", "Black"],
      avoidColors: ["Orange", "Yellow", "Warm browns", "Coral"],
      metals: "Silver jewelry",
      image: "https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?w=200&h=150&fit=crop",
    },
    neutral: {
      name: "Neutral Undertones",
      description: "Mix of warm and cool undertones",
      bestColors: ["Most colors work", "Soft pastels", "Muted tones", "Earth tones"],
      avoidColors: ["Very bright or neon colors"],
      metals: "Both gold and silver",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=150&fit=crop",
    },
  }

  const analysisSteps = [
    { id: 1, title: "Body Measurements", icon: Ruler },
    { id: 2, title: "Photo Analysis", icon: Camera },
    { id: 3, title: "Color Assessment", icon: Palette },
    { id: 4, title: "Style Profile", icon: User },
    { id: 5, title: "Recommendations", icon: Target },
  ]

  const selectedShape = bodyShapes.find((shape) => shape.id === bodyShape)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Body Analysis Studio</h1>
          <p className="text-slate-600 mt-2">Discover your body shape and get personalized styling recommendations</p>
        </div>

        <Tabs defaultValue="analysis" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analysis">Body Analysis</TabsTrigger>
            <TabsTrigger value="shapes">Body Shapes Guide</TabsTrigger>
            <TabsTrigger value="colors">Color Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="analysis" className="mt-6">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white mb-6">
                <CardHeader>
                  <CardTitle>Analysis Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    {analysisSteps.map((step, index) => (
                      <div key={step.id} className="flex items-center">
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-full ${
                            currentStep >= step.id ? "bg-purple-600 text-white" : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {currentStep > step.id ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <step.icon className="h-5 w-5" />
                          )}
                        </div>
                        {index < analysisSteps.length - 1 && (
                          <div
                            className={`w-16 h-1 mx-2 ${currentStep > step.id ? "bg-purple-600" : "bg-slate-200"}`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <Progress value={(currentStep / analysisSteps.length) * 100} className="mb-2" />
                  <p className="text-sm text-slate-600 text-center">
                    Step {currentStep} of {analysisSteps.length}: {analysisSteps[currentStep - 1]?.title}
                  </p>
                </CardContent>
              </Card>

              {currentStep === 1 && (
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Ruler className="h-5 w-5 mr-2" />
                      Body Measurements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Bust (inches)</label>
                          <input
                            type="number"
                            className="w-full p-3 border border-slate-300 rounded-lg"
                            placeholder="e.g., 36"
                            value={measurements.bust}
                            onChange={(e) => setMeasurements({ ...measurements, bust: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Waist (inches)</label>
                          <input
                            type="number"
                            className="w-full p-3 border border-slate-300 rounded-lg"
                            placeholder="e.g., 28"
                            value={measurements.waist}
                            onChange={(e) => setMeasurements({ ...measurements, waist: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Hips (inches)</label>
                          <input
                            type="number"
                            className="w-full p-3 border border-slate-300 rounded-lg"
                            placeholder="e.g., 38"
                            value={measurements.hips}
                            onChange={(e) => setMeasurements({ ...measurements, hips: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Height (feet)</label>
                          <input
                            type="text"
                            className="w-full p-3 border border-slate-300 rounded-lg"
                            placeholder="e.g., 5'6&quot;"
                            value={measurements.height}
                            onChange={(e) => setMeasurements({ ...measurements, height: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Weight (lbs) - Optional
                          </label>
                          <input
                            type="number"
                            className="w-full p-3 border border-slate-300 rounded-lg"
                            placeholder="e.g., 140"
                            value={measurements.weight}
                            onChange={(e) => setMeasurements({ ...measurements, weight: e.target.value })}
                          />
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-medium text-blue-900 mb-2">Measurement Tips</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Measure over undergarments</li>
                            <li>• Keep tape measure parallel to floor</li>
                            <li>• Don't pull tape too tight</li>
                            <li>• Measure at fullest part of bust/hips</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-6">
                      <Button variant="outline" disabled>
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(2)}>Next: Photo Analysis</Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {currentStep === 2 && (
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Camera className="h-5 w-5 mr-2" />
                      Photo Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-6">
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-12">
                        <Camera className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-slate-900 mb-2">Upload Full Body Photo</h3>
                        <p className="text-slate-600 mb-4">
                          For best results, wear fitted clothing and stand straight against a plain background
                        </p>
                        <Button>
                          <Camera className="h-4 w-4 mr-2" />
                          Take Photo or Upload
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                          <h4 className="font-medium text-green-900 mb-2">✓ Good Photo</h4>
                          <ul className="text-green-700 space-y-1">
                            <li>• Full body visible</li>
                            <li>• Fitted clothing</li>
                            <li>• Good lighting</li>
                            <li>• Plain background</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                          <h4 className="font-medium text-yellow-900 mb-2">⚠ Avoid</h4>
                          <ul className="text-yellow-700 space-y-1">
                            <li>• Baggy clothing</li>
                            <li>• Poor lighting</li>
                            <li>• Busy background</li>
                            <li>• Angled poses</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-medium text-blue-900 mb-2">Privacy</h4>
                          <ul className="text-blue-700 space-y-1">
                            <li>• Photos are encrypted</li>
                            <li>• Used only for analysis</li>
                            <li>• Deleted after 30 days</li>
                            <li>• Never shared</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-6">
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(3)}>Next: Color Assessment</Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {currentStep === 5 && selectedShape && (
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Your Style Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="text-center mb-6">
                          <img
                            src={selectedShape.image || "/placeholder.svg"}
                            alt={selectedShape.name}
                            className="w-32 h-40 object-cover rounded-lg mx-auto mb-4"
                          />
                          <h3 className="text-2xl font-bold text-slate-900">{selectedShape.name} Shape</h3>
                          <p className="text-slate-600">{selectedShape.description}</p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-green-700 mb-2">✓ Emphasize:</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedShape.styling.emphasize.map((item, index) => (
                                <Badge key={index} variant="secondary" className="bg-green-100 text-green-700">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-blue-700 mb-2">⚖ Balance with:</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedShape.styling.balance.map((item, index) => (
                                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-red-700 mb-2">✗ Avoid:</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedShape.styling.avoid.map((item, index) => (
                                <Badge key={index} variant="secondary" className="bg-red-100 text-red-700">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium text-slate-900 mb-3">Style Icons with Your Shape:</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedShape.celebrities.map((celebrity, index) => (
                              <Badge key={index} variant="outline">
                                {celebrity}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                          <h4 className="font-medium text-purple-900 mb-2">Personalized Recommendations</h4>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Based on your measurements and photo analysis</li>
                            <li>• Tailored to your lifestyle and preferences</li>
                            <li>• Updated as your style evolves</li>
                            <li>• Includes specific brand recommendations</li>
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <Button className="w-full">
                            <Target className="h-4 w-4 mr-2" />
                            Get Personalized Shopping List
                          </Button>
                          <Button variant="outline" className="w-full">
                            <Camera className="h-4 w-4 mr-2" />
                            Try Virtual Styling
                          </Button>
                          <Button variant="outline" className="w-full">
                            Save Analysis to Profile
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-8">
                      <Button variant="outline" onClick={() => setCurrentStep(4)}>
                        Previous
                      </Button>
                      <Button onClick={() => setCurrentStep(1)}>Start New Analysis</Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="shapes" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bodyShapes.map((shape) => (
                <Card
                  key={shape.id}
                  className={`bg-white cursor-pointer transition-all hover:shadow-lg ${
                    bodyShape === shape.id ? "ring-2 ring-purple-500" : ""
                  }`}
                  onClick={() => setBodyShape(shape.id)}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <img
                        src={shape.image || "/placeholder.svg"}
                        alt={shape.name}
                        className="w-24 h-32 object-cover rounded-lg mx-auto mb-3"
                      />
                      <h3 className="text-lg font-semibold text-slate-900">{shape.name}</h3>
                      <p className="text-sm text-slate-600">{shape.description}</p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">Characteristics:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {shape.characteristics.map((char, index) => (
                            <li key={index}>• {char}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">Style Icons:</h4>
                        <div className="flex flex-wrap gap-1">
                          {shape.celebrities.slice(0, 2).map((celebrity, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {celebrity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full mt-4"
                      variant={bodyShape === shape.id ? "default" : "outline"}
                      onClick={() => setBodyShape(shape.id)}
                    >
                      {bodyShape === shape.id ? "Selected" : "Select This Shape"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="colors" className="mt-6">
            <div className="space-y-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="h-5 w-5 mr-2" />
                    Color Undertone Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(colorAnalysis).map(([key, analysis]) => (
                      <div key={key} className="border border-slate-200 rounded-lg p-4">
                        <img
                          src={analysis.image || "/placeholder.svg"}
                          alt={analysis.name}
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold text-slate-900 mb-2">{analysis.name}</h3>
                        <p className="text-sm text-slate-600 mb-4">{analysis.description}</p>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-green-700 mb-1">Best Colors:</h4>
                            <div className="flex flex-wrap gap-1">
                              {analysis.bestColors.slice(0, 3).map((color, index) => (
                                <Badge key={index} variant="secondary" className="text-xs bg-green-100 text-green-700">
                                  {color}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-red-700 mb-1">Avoid:</h4>
                            <div className="flex flex-wrap gap-1">
                              {analysis.avoidColors.slice(0, 2).map((color, index) => (
                                <Badge key={index} variant="secondary" className="text-xs bg-red-100 text-red-700">
                                  {color}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-slate-700 mb-1">Jewelry:</h4>
                            <p className="text-sm text-slate-600">{analysis.metals}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Quick Undertone Test</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-medium text-slate-900 mb-4">Simple Tests to Try:</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-medium text-blue-900 mb-2">White Paper Test</h4>
                          <p className="text-sm text-blue-700">
                            Hold white paper next to your face in natural light. If your skin looks yellow/golden, you
                            have warm undertones. If it looks pink/blue, you have cool undertones.
                          </p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                          <h4 className="font-medium text-green-900 mb-2">Vein Test</h4>
                          <p className="text-sm text-green-700">
                            Look at your wrist veins in natural light. Green veins = warm undertones, blue/purple veins
                            = cool undertones, both = neutral.
                          </p>
                        </div>
                        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                          <h4 className="font-medium text-yellow-900 mb-2">Jewelry Test</h4>
                          <p className="text-sm text-yellow-700">
                            Which looks better on you? Gold jewelry typically flatters warm undertones, while silver
                            flatters cool undertones.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 mb-4">Professional Analysis</h3>
                      <div className="space-y-4">
                        <Button className="w-full">
                          <Camera className="h-4 w-4 mr-2" />
                          Take Undertone Photo
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Palette className="h-4 w-4 mr-2" />
                          Virtual Color Draping
                        </Button>
                        <Button variant="outline" className="w-full">
                          Book Color Consultation
                        </Button>
                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                          <h4 className="font-medium text-purple-900 mb-2">AI Color Analysis</h4>
                          <p className="text-sm text-purple-700">
                            Our AI can analyze your skin tone from a photo and recommend your perfect color palette.
                          </p>
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
