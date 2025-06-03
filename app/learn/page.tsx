"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Award, Play, Clock, ChevronRight } from "lucide-react"

export default function LearnPage() {
  const [completedLessons, setCompletedLessons] = useState(new Set([1, 2, 3]))

  const styleSchools = [
    {
      id: 1,
      name: "Minimalist Mastery",
      description: "Learn the art of effortless elegance through simplicity",
      lessons: 8,
      duration: "2 hours",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=200&fit=crop",
      completed: 3,
      topics: ["Color Theory", "Capsule Wardrobes", "Quality over Quantity", "Timeless Pieces"],
    },
    {
      id: 2,
      name: "Body Shape Science",
      description: "Understand your body and dress to enhance your natural silhouette",
      lessons: 12,
      duration: "3 hours",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop",
      completed: 0,
      topics: ["Body Geometry", "Proportion Theory", "Fit Analysis", "Styling Techniques"],
    },
    {
      id: 3,
      name: "Fashion History",
      description: "Journey through decades of style evolution and cultural impact",
      lessons: 15,
      duration: "4 hours",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=200&fit=crop",
      completed: 0,
      topics: ["1920s-2020s Evolution", "Cultural Influences", "Designer Legacies", "Trend Cycles"],
    },
  ]

  const currentLesson = {
    title: "Understanding Color Temperature",
    school: "Minimalist Mastery",
    progress: 65,
    timeLeft: "8 minutes",
    content: {
      theory: "Color temperature refers to the warmth or coolness of colors and how they interact with your skin tone.",
      practical:
        "Warm undertones pair best with gold jewelry and earth tones, while cool undertones complement silver and jewel tones.",
      example:
        "Hold a white piece of paper next to your face in natural light. If your skin appears more yellow/golden, you have warm undertones. If it appears more pink/blue, you have cool undertones.",
    },
  }

  const fashionHistory = [
    {
      decade: "1920s",
      title: "The Flapper Revolution",
      description: "Women's liberation through fashion - shorter hemlines, dropped waists, and boyish silhouettes",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=150&fit=crop",
      keyPieces: ["Drop-waist dresses", "T-bar shoes", "Cloche hats", "Long pearl necklaces"],
      influence: "Broke Victorian constraints, introduced androgynous style",
    },
    {
      decade: "1950s",
      title: "New Look Elegance",
      description: "Christian Dior's 'New Look' emphasized feminine curves with cinched waists and full skirts",
      image: "https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?w=200&h=150&fit=crop",
      keyPieces: ["Circle skirts", "Fitted bodices", "Petticoats", "Kitten heels"],
      influence: "Post-war femininity, luxury fabric usage",
    },
    {
      decade: "1960s",
      title: "Youth Quake",
      description: "Mini skirts, mod fashion, and youth culture revolutionized traditional dress codes",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=150&fit=crop",
      keyPieces: ["Mini skirts", "Shift dresses", "Go-go boots", "Geometric patterns"],
      influence: "Youth-driven fashion, breaking age-based dress rules",
    },
    {
      decade: "1990s",
      title: "Minimalist Grunge",
      description: "Contrast between minimalist luxury and anti-fashion grunge movement",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=150&fit=crop",
      keyPieces: ["Slip dresses", "Flannel shirts", "Combat boots", "Chokers"],
      influence: "High-low fashion mix, casual luxury",
    },
  ]

  const bodyShapeGuide = [
    {
      shape: "Pear",
      description: "Hips wider than shoulders, defined waist",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=200&fit=crop",
      doWear: ["A-line skirts", "Boat necklines", "Statement tops", "High-waisted bottoms"],
      avoid: ["Hip-hugging styles", "Tapered pants", "Horizontal stripes on bottom"],
      celebrities: ["Beyoncé", "Jennifer Lopez", "Shakira"],
    },
    {
      shape: "Apple",
      description: "Broader shoulders and bust, less defined waist",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=150&h=200&fit=crop",
      doWear: ["Empire waists", "V-necks", "A-line dresses", "Straight-leg pants"],
      avoid: ["Tight waistbands", "Crop tops", "Horizontal stripes across middle"],
      celebrities: ["Adele", "Rebel Wilson", "Queen Latifah"],
    },
    {
      shape: "Hourglass",
      description: "Balanced shoulders and hips, defined waist",
      image: "https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?w=150&h=200&fit=crop",
      doWear: ["Fitted styles", "Wrap dresses", "High-waisted bottoms", "Belted outfits"],
      avoid: ["Boxy shapes", "Drop-waist styles", "Oversized clothing"],
      celebrities: ["Scarlett Johansson", "Sofia Vergara", "Marilyn Monroe"],
    },
    {
      shape: "Rectangle",
      description: "Similar measurements for shoulders, waist, and hips",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150&h=200&fit=crop",
      doWear: ["Peplum tops", "Layered looks", "Ruffles and textures", "Belts to create waist"],
      avoid: ["Straight, boxy cuts", "Shapeless dresses", "Low-rise pants"],
      celebrities: ["Keira Knightley", "Cameron Diaz", "Gwyneth Paltrow"],
    },
  ]

  const achievements = [
    { name: "Style Scholar", description: "Completed 5 lessons", icon: "🎓", unlocked: true },
    { name: "History Buff", description: "Learned about 3 fashion eras", icon: "📚", unlocked: true },
    { name: "Body Positive", description: "Mastered body shape styling", icon: "💪", unlocked: false },
    { name: "Color Expert", description: "Completed color theory course", icon: "🎨", unlocked: true },
    { name: "Trend Forecaster", description: "Predicted 5 fashion trends", icon: "🔮", unlocked: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Style Academy</h1>
          <p className="text-slate-600 mt-2">Master the art and science of fashion through expert-curated lessons</p>
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Style Schools</TabsTrigger>
            <TabsTrigger value="history">Fashion History</TabsTrigger>
            <TabsTrigger value="body">Body Analysis</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {styleSchools.map((school) => (
                    <Card key={school.id} className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="relative">
                        <img
                          src={school.image || "/placeholder.svg"}
                          alt={school.name}
                          className="w-full h-32 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary">{school.difficulty}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-slate-900 mb-2">{school.name}</h3>
                        <p className="text-sm text-slate-600 mb-3">{school.description}</p>

                        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                          <span className="flex items-center">
                            <BookOpen className="h-3 w-3 mr-1" />
                            {school.lessons} lessons
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {school.duration}
                          </span>
                        </div>

                        <div className="mb-3">
                          <div className="flex justify-between text-xs text-slate-600 mb-1">
                            <span>Progress</span>
                            <span>
                              {school.completed}/{school.lessons}
                            </span>
                          </div>
                          <Progress value={(school.completed / school.lessons) * 100} className="h-2" />
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {school.topics.slice(0, 2).map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                          {school.topics.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{school.topics.length - 2} more
                            </Badge>
                          )}
                        </div>

                        <Button className="w-full" size="sm">
                          {school.completed > 0 ? "Continue" : "Start Course"}
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Play className="h-5 w-5 mr-2 text-purple-600" />
                      Continue Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-slate-900">{currentLesson.title}</h4>
                        <p className="text-sm text-slate-600">{currentLesson.school}</p>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-slate-600 mb-1">
                          <span>Progress</span>
                          <span>{currentLesson.progress}%</span>
                        </div>
                        <Progress value={currentLesson.progress} className="h-2" />
                      </div>

                      <div className="flex items-center text-sm text-slate-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {currentLesson.timeLeft} remaining
                      </div>

                      <Button className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        Resume Lesson
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 mr-2 text-yellow-600" />
                      Recent Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {achievements
                        .filter((a) => a.unlocked)
                        .slice(0, 3)
                        .map((achievement, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <span className="text-2xl">{achievement.icon}</span>
                            <div>
                              <h5 className="font-medium text-slate-900">{achievement.name}</h5>
                              <p className="text-xs text-slate-600">{achievement.description}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Learning Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">12</div>
                        <p className="text-xs text-purple-700">Lessons Completed</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">4.8</div>
                        <p className="text-xs text-green-700">Avg Quiz Score</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <div className="space-y-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Fashion Through the Decades</CardTitle>
                  <p className="text-slate-600">Explore how fashion evolved and shaped culture</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {fashionHistory.map((era, index) => (
                      <div
                        key={index}
                        className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="flex space-x-4">
                          <img
                            src={era.image || "/placeholder.svg"}
                            alt={era.decade}
                            className="w-20 h-16 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="outline">{era.decade}</Badge>
                              <h4 className="font-medium text-slate-900">{era.title}</h4>
                            </div>
                            <p className="text-sm text-slate-600 mb-3">{era.description}</p>

                            <div className="space-y-2">
                              <div>
                                <h5 className="text-xs font-medium text-slate-700">Key Pieces:</h5>
                                <div className="flex flex-wrap gap-1">
                                  {era.keyPieces.slice(0, 2).map((piece, i) => (
                                    <Badge key={i} variant="secondary" className="text-xs">
                                      {piece}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h5 className="text-xs font-medium text-slate-700">Cultural Impact:</h5>
                                <p className="text-xs text-slate-600">{era.influence}</p>
                              </div>
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

          <TabsContent value="body" className="mt-6">
            <div className="space-y-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Body Shape Styling Guide</CardTitle>
                  <p className="text-slate-600">Learn to dress for your unique body shape with confidence</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bodyShapeGuide.map((guide, index) => (
                      <div key={index} className="border border-slate-200 rounded-lg p-4">
                        <div className="flex space-x-4 mb-4">
                          <img
                            src={guide.image || "/placeholder.svg"}
                            alt={guide.shape}
                            className="w-16 h-20 object-cover rounded-md"
                          />
                          <div>
                            <h4 className="font-semibold text-slate-900">{guide.shape} Shape</h4>
                            <p className="text-sm text-slate-600">{guide.description}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium text-green-700 mb-1">✓ Do Wear:</h5>
                            <div className="flex flex-wrap gap-1">
                              {guide.doWear.map((item, i) => (
                                <Badge key={i} variant="secondary" className="text-xs bg-green-50 text-green-700">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="text-sm font-medium text-red-700 mb-1">✗ Avoid:</h5>
                            <div className="flex flex-wrap gap-1">
                              {guide.avoid.map((item, i) => (
                                <Badge key={i} variant="secondary" className="text-xs bg-red-50 text-red-700">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="text-sm font-medium text-slate-700 mb-1">Style Icons:</h5>
                            <p className="text-xs text-slate-600">{guide.celebrities.join(", ")}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className={`${achievement.unlocked ? "bg-white" : "bg-slate-50"} border-2 ${achievement.unlocked ? "border-green-200" : "border-slate-200"}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`text-4xl mb-3 ${achievement.unlocked ? "" : "grayscale opacity-50"}`}>
                      {achievement.icon}
                    </div>
                    <h3 className={`font-semibold mb-2 ${achievement.unlocked ? "text-slate-900" : "text-slate-500"}`}>
                      {achievement.name}
                    </h3>
                    <p className={`text-sm ${achievement.unlocked ? "text-slate-600" : "text-slate-400"}`}>
                      {achievement.description}
                    </p>
                    {achievement.unlocked && <Badge className="mt-3 bg-green-600">Unlocked</Badge>}
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
