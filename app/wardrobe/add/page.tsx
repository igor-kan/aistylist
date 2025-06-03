"use client"

import type React from "react"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Camera, Upload, Wand2, Tag, DollarSign, Palette, Shirt } from "lucide-react"

export default function AddItemPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [detectedInfo, setDetectedInfo] = useState<any>(null)

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)
      setIsAnalyzing(true)

      // Simulate AI analysis
      setTimeout(() => {
        setDetectedInfo({
          category: "Tops",
          type: "Blouse",
          color: "Navy Blue",
          brand: "Equipment",
          estimatedValue: 180,
          fabric: "Silk",
          style: "Professional",
          tags: ["Work", "Elegant", "Versatile"],
        })
        setIsAnalyzing(false)
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Add New Item</h1>
            <p className="text-slate-600 mt-2">Upload photos and let AI analyze your clothing</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="h-5 w-5 mr-2" />
                  Photo Upload
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                    {selectedImage ? (
                      <div className="space-y-4">
                        <img
                          src={selectedImage || "/placeholder.svg"}
                          alt="Uploaded item"
                          className="max-w-full h-64 object-cover mx-auto rounded-lg"
                        />
                        {isAnalyzing && (
                          <div className="flex items-center justify-center space-x-2">
                            <Wand2 className="h-4 w-4 animate-spin" />
                            <span className="text-sm text-slate-600">AI analyzing image...</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className="h-12 w-12 text-slate-400 mx-auto" />
                        <div>
                          <p className="text-lg font-medium text-slate-900">Upload a photo</p>
                          <p className="text-sm text-slate-500">Drag and drop or click to browse</p>
                        </div>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">
                      <Camera className="h-4 w-4 mr-2" />
                      Take Photo
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Multiple
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tag className="h-5 w-5 mr-2" />
                  Item Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {detectedInfo && (
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-medium text-purple-900 mb-2 flex items-center">
                        <Wand2 className="h-4 w-4 mr-2" />
                        AI Detected Information
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-purple-700">Category: {detectedInfo.category}</span>
                        <span className="text-purple-700">Type: {detectedInfo.type}</span>
                        <span className="text-purple-700">Color: {detectedInfo.color}</span>
                        <span className="text-purple-700">Brand: {detectedInfo.brand}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {detectedInfo.tags.map((tag: string, index: number) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Item Name</Label>
                      <Input id="name" placeholder="e.g., Navy Silk Blouse" defaultValue={detectedInfo?.type || ""} />
                    </div>
                    <div>
                      <Label htmlFor="brand">Brand</Label>
                      <Input id="brand" placeholder="e.g., Equipment" defaultValue={detectedInfo?.brand || ""} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select defaultValue={detectedInfo?.category?.toLowerCase()}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tops">Tops</SelectItem>
                          <SelectItem value="bottoms">Bottoms</SelectItem>
                          <SelectItem value="dresses">Dresses</SelectItem>
                          <SelectItem value="outerwear">Outerwear</SelectItem>
                          <SelectItem value="shoes">Shoes</SelectItem>
                          <SelectItem value="accessories">Accessories</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="color">Color</Label>
                      <Input id="color" placeholder="e.g., Navy Blue" defaultValue={detectedInfo?.color || ""} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="size">Size</Label>
                      <Input id="size" placeholder="e.g., M, 8, 38" />
                    </div>
                    <div>
                      <Label htmlFor="value">Purchase Price</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="value"
                          placeholder="180"
                          className="pl-10"
                          defaultValue={detectedInfo?.estimatedValue || ""}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any additional details about the item..."
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button className="flex-1">
                      <Shirt className="h-4 w-4 mr-2" />
                      Add to Wardrobe
                    </Button>
                    <Button variant="outline">
                      <Palette className="h-4 w-4 mr-2" />
                      Add & Style
                    </Button>
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
