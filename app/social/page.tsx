"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Share, Users, TrendingUp, Camera, Send } from "lucide-react"

export default function SocialPage() {
  const [selectedPost, setSelectedPost] = useState<any>(null)

  const socialFeed = [
    {
      id: 1,
      user: {
        name: "Emma Chen",
        username: "@emmastyle",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
        verified: true,
      },
      look: {
        name: "Parisian Chic",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
        items: ["Beige Trench", "White Tee", "Straight Jeans", "Loafers"],
      },
      caption: "Channeling effortless Parisian vibes for today's gallery opening ✨",
      likes: 234,
      comments: 18,
      shares: 12,
      timestamp: "2 hours ago",
      location: "Paris, France",
      tags: ["#ParisianStyle", "#EffortlessChic", "#GalleryOpening"],
    },
    {
      id: 2,
      user: {
        name: "Sofia Rodriguez",
        username: "@sofiawardrobe",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        verified: false,
      },
      look: {
        name: "Power Meeting",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
        items: ["Navy Blazer", "White Blouse", "Pencil Skirt", "Pumps"],
      },
      caption: "Closing deals in style 💼 This blazer gives me so much confidence!",
      likes: 156,
      comments: 24,
      shares: 8,
      timestamp: "4 hours ago",
      location: "New York, NY",
      tags: ["#PowerDressing", "#BusinessStyle", "#ConfidenceBoost"],
    },
    {
      id: 3,
      user: {
        name: "Zara Kim",
        username: "@zarafashion",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        verified: true,
      },
      look: {
        name: "Weekend Vibes",
        image: "https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e5?w=400&h=500&fit=crop",
        items: ["Midi Dress", "Denim Jacket", "White Sneakers", "Crossbody Bag"],
      },
      caption: "Perfect weekend look for brunch with the girls! 🥐☕",
      likes: 189,
      comments: 31,
      shares: 15,
      timestamp: "6 hours ago",
      location: "Los Angeles, CA",
      tags: ["#WeekendStyle", "#BrunchLook", "#CasualChic"],
    },
  ]

  const trendingStyles = [
    { name: "Minimalist Chic", posts: 1234, growth: "+23%" },
    { name: "Cottagecore", posts: 987, growth: "+45%" },
    { name: "Dark Academia", posts: 756, growth: "+12%" },
    { name: "Y2K Revival", posts: 654, growth: "+67%" },
    { name: "Sustainable Fashion", posts: 543, growth: "+34%" },
  ]

  const styleInfluencers = [
    {
      name: "Marie Dubois",
      username: "@mariesstyle",
      followers: "125K",
      specialty: "Parisian Minimalism",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      verified: true,
    },
    {
      name: "Alex Thompson",
      username: "@alexwardrobe",
      followers: "89K",
      specialty: "Sustainable Fashion",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      verified: true,
    },
    {
      name: "Luna Martinez",
      username: "@lunalooks",
      followers: "67K",
      specialty: "Vintage Styling",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      verified: false,
    },
  ]

  const myStats = {
    followers: 1247,
    following: 892,
    posts: 156,
    totalLikes: 12456,
    avgLikesPerPost: 79.8,
    topPerformingLook: "Business Casual Friday",
    engagementRate: "4.2%",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Style Community</h1>
          <p className="text-slate-600 mt-2">Share your looks and discover style inspiration from others</p>
        </div>

        <Tabs defaultValue="feed" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="feed">Style Feed</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="influencers">Style Icons</TabsTrigger>
            <TabsTrigger value="my-profile">My Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="bg-white mb-6">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop" />
                        <AvatarFallback>You</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Textarea
                          placeholder="Share your latest look or style inspiration..."
                          className="min-h-[80px]"
                        />
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Camera className="h-4 w-4 mr-2" />
                              Add Photo
                            </Button>
                            <Button size="sm" variant="outline">
                              Tag Items
                            </Button>
                          </div>
                          <Button size="sm">
                            <Send className="h-4 w-4 mr-2" />
                            Share Look
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  {socialFeed.map((post) => (
                    <Card key={post.id} className="bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium text-slate-900">{post.user.name}</h4>
                              {post.user.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  ✓
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-slate-600">{post.user.username}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-slate-500">{post.timestamp}</p>
                            <p className="text-xs text-slate-400">{post.location}</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <img
                            src={post.look.image || "/placeholder.svg"}
                            alt={post.look.name}
                            className="w-full h-96 object-cover rounded-lg cursor-pointer"
                            onClick={() => setSelectedPost(post)}
                          />
                        </div>

                        <div className="mb-4">
                          <h3 className="font-medium text-slate-900 mb-2">{post.look.name}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.look.items.map((item, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-slate-700">{post.caption}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {post.tags.map((tag, index) => (
                              <span key={index} className="text-blue-600 text-sm hover:underline cursor-pointer">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                          <div className="flex items-center space-x-6">
                            <button className="flex items-center space-x-2 text-slate-600 hover:text-red-500 transition-colors">
                              <Heart className="h-5 w-5" />
                              <span className="text-sm">{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-slate-600 hover:text-blue-500 transition-colors">
                              <MessageCircle className="h-5 w-5" />
                              <span className="text-sm">{post.comments}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-slate-600 hover:text-green-500 transition-colors">
                              <Share className="h-5 w-5" />
                              <span className="text-sm">{post.shares}</span>
                            </button>
                          </div>
                          <Button size="sm" variant="outline">
                            Get This Look
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                      My Style Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{myStats.followers.toLocaleString()}</div>
                        <p className="text-xs text-purple-700">Followers</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{myStats.posts}</div>
                        <p className="text-xs text-green-700">Posts</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Avg. Likes:</span>
                        <span className="font-medium">{myStats.avgLikesPerPost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Engagement:</span>
                        <span className="font-medium text-green-600">{myStats.engagementRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Top Look:</span>
                        <span className="font-medium">{myStats.topPerformingLook}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Style Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-yellow-900">#30DayMinimalist</h4>
                          <Badge variant="secondary">Active</Badge>
                        </div>
                        <p className="text-sm text-yellow-700">Create 30 minimalist looks</p>
                        <div className="mt-2 bg-yellow-200 rounded-full h-2">
                          <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                        <p className="text-xs text-yellow-600 mt-1">18/30 days complete</p>
                      </div>

                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-medium text-blue-900">#SustainableStyle</h4>
                        <p className="text-sm text-blue-700">Only thrifted/vintage pieces</p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Join Challenge
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Suggested Connections</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {styleInfluencers.slice(0, 2).map((influencer, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={influencer.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{influencer.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-medium text-slate-900">{influencer.name}</h4>
                            <p className="text-xs text-slate-600">{influencer.specialty}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            Follow
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    Trending Styles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trendingStyles.map((style, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-slate-900">{style.name}</h4>
                          <p className="text-sm text-slate-600">{style.posts.toLocaleString()} posts</p>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {style.growth}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Trending Hashtags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "#MinimalistStyle",
                      "#SustainableFashion",
                      "#VintageVibes",
                      "#PowerDressing",
                      "#CasualChic",
                      "#StreetStyle",
                      "#WorkWear",
                      "#DateNight",
                      "#WeekendLook",
                      "#ColorCoordination",
                    ].map((tag, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-slate-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="influencers" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {styleInfluencers.map((influencer, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-20 w-20 mx-auto mb-4">
                      <AvatarImage src={influencer.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{influencer.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <h3 className="font-semibold text-slate-900">{influencer.name}</h3>
                      {influencer.verified && (
                        <Badge variant="secondary" className="text-xs">
                          ✓
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mb-1">{influencer.username}</p>
                    <p className="text-sm text-slate-500 mb-3">{influencer.specialty}</p>
                    <div className="text-lg font-bold text-slate-900 mb-4">{influencer.followers} followers</div>
                    <Button className="w-full">
                      <Users className="h-4 w-4 mr-2" />
                      Follow
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-profile" className="mt-6">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6 mb-8">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop" />
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Your Style Profile</h2>
                      <p className="text-slate-600 mb-4">Fashion enthusiast sharing daily style inspiration</p>
                      <div className="flex space-x-6 text-sm">
                        <div className="text-center">
                          <div className="font-bold text-slate-900">{myStats.posts}</div>
                          <div className="text-slate-600">Posts</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-slate-900">{myStats.followers.toLocaleString()}</div>
                          <div className="text-slate-600">Followers</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-slate-900">{myStats.following}</div>
                          <div className="text-slate-600">Following</div>
                        </div>
                      </div>
                    </div>
                    <Button>Edit Profile</Button>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square bg-slate-200 rounded-lg"></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {selectedPost && (
          <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{selectedPost.look.name}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src={selectedPost.look.image || "/placeholder.svg"}
                  alt={selectedPost.look.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={selectedPost.user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{selectedPost.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{selectedPost.user.name}</h4>
                      <p className="text-sm text-slate-600">{selectedPost.user.username}</p>
                    </div>
                  </div>
                  <p className="text-slate-700">{selectedPost.caption}</p>
                  <div className="space-y-2">
                    <h5 className="font-medium">Items in this look:</h5>
                    {selectedPost.look.items.map((item: string, index: number) => (
                      <Badge key={index} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full">Get This Look</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </main>
    </div>
  )
}
