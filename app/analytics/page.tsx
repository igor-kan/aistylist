"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { TrendingUp, Heart, DollarSign, Award, Target, Zap } from "lucide-react"

export default function AnalyticsPage() {
  const wearFrequencyData = [
    { category: "Tops", wears: 45, items: 12 },
    { category: "Bottoms", wears: 38, items: 8 },
    { category: "Dresses", wears: 22, items: 6 },
    { category: "Outerwear", wears: 15, items: 5 },
    { category: "Shoes", wears: 52, items: 10 },
    { category: "Accessories", wears: 28, items: 15 },
  ]

  const valueData = [
    { name: "Investment Pieces", value: 4500, color: "#8b5cf6" },
    { name: "Everyday Items", value: 3200, color: "#06b6d4" },
    { name: "Seasonal", value: 2100, color: "#10b981" },
    { name: "Accessories", value: 1800, color: "#f59e0b" },
  ]

  const complimentTrendData = [
    { month: "Jul", compliments: 12, looks: 8 },
    { month: "Aug", compliments: 18, looks: 12 },
    { month: "Sep", compliments: 25, looks: 15 },
    { month: "Oct", compliments: 22, looks: 14 },
    { month: "Nov", compliments: 31, looks: 18 },
    { month: "Dec", compliments: 28, looks: 16 },
    { month: "Jan", compliments: 35, looks: 20 },
  ]

  const topPerformingItems = [
    { name: "Black Blazer", wears: 15, compliments: 8, efficiency: 0.53 },
    { name: "White Silk Blouse", wears: 12, compliments: 6, efficiency: 0.5 },
    { name: "Dark Wash Jeans", wears: 18, compliments: 7, efficiency: 0.39 },
    { name: "Camel Coat", wears: 8, compliments: 5, efficiency: 0.63 },
    { name: "Black Ankle Boots", wears: 20, compliments: 6, efficiency: 0.3 },
  ]

  const styleInsights = [
    {
      title: "Most Complimented Style",
      value: "Minimalist Chic",
      description: "68% of your highest-rated looks",
      icon: Award,
      color: "text-purple-600",
    },
    {
      title: "Best ROI Category",
      value: "Outerwear",
      description: "$0.85 compliment per dollar spent",
      icon: Target,
      color: "text-green-600",
    },
    {
      title: "Underutilized Items",
      value: "23 pieces",
      description: "Worn less than 3 times",
      icon: Zap,
      color: "text-orange-600",
    },
    {
      title: "Style Consistency",
      value: "87%",
      description: "Alignment with personal style",
      icon: TrendingUp,
      color: "text-blue-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Style Analytics</h1>
          <p className="text-slate-600 mt-2">Insights into your wardrobe performance and style patterns</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {styleInsights.map((insight, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{insight.title}</p>
                    <p className="text-2xl font-bold text-slate-900">{insight.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{insight.description}</p>
                  </div>
                  <insight.icon className={`h-8 w-8 ${insight.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="performance" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="wardrobe">Wardrobe Analysis</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-pink-600" />
                    Compliment Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={complimentTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="compliments" stroke="#8b5cf6" strokeWidth={2} />
                      <Line type="monotone" dataKey="looks" stroke="#06b6d4" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Top Performing Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topPerformingItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-slate-200 rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium text-slate-900">{item.name}</h4>
                          <p className="text-sm text-slate-500">
                            {item.wears} wears • {item.compliments} compliments
                          </p>
                        </div>
                        <Badge variant="secondary">{(item.efficiency * 100).toFixed(0)}% efficiency</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="wardrobe" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-blue-600" />
                    Wear Frequency by Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={wearFrequencyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="wears" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                    Wardrobe Value Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={valueData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {valueData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Color Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { color: "Black", percentage: 32, hex: "#000000" },
                      { color: "Navy", percentage: 18, hex: "#1e3a8a" },
                      { color: "White", percentage: 15, hex: "#ffffff" },
                      { color: "Beige", percentage: 12, hex: "#f5f5dc" },
                      { color: "Gray", percentage: 23, hex: "#6b7280" },
                    ].map((color, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-4 h-4 rounded-full border border-slate-300"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="text-sm font-medium">{color.color}</span>
                        </div>
                        <span className="text-sm text-slate-500">{color.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Seasonal Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { season: "Spring", items: 45, trend: "+12%" },
                      { season: "Summer", items: 38, trend: "+8%" },
                      { season: "Fall", items: 52, trend: "+15%" },
                      { season: "Winter", items: 41, trend: "+5%" },
                    ].map((season, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-slate-200 rounded-lg"
                      >
                        <div>
                          <span className="font-medium">{season.season}</span>
                          <p className="text-sm text-slate-500">{season.items} items worn</p>
                        </div>
                        <Badge variant="secondary" className="text-green-600">
                          {season.trend}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Style Evolution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">87%</div>
                      <p className="text-sm text-slate-600">Style Consistency Score</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Minimalist</span>
                        <span>68%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: "68%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Classic</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Trendy</span>
                        <span>23%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-pink-600 h-2 rounded-full" style={{ width: "23%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Optimization Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Declutter Low-Performers",
                        description: "8 items worn less than twice in 6 months",
                        action: "Review & Donate",
                        impact: "High",
                        color: "text-red-600",
                      },
                      {
                        title: "Invest in Versatile Pieces",
                        description: "Add 2-3 neutral blazers for work looks",
                        action: "Shop Investment",
                        impact: "Medium",
                        color: "text-orange-600",
                      },
                      {
                        title: "Maximize Existing Items",
                        description: "12 pieces could be styled differently",
                        action: "Try New Combos",
                        impact: "Low",
                        color: "text-green-600",
                      },
                    ].map((rec, index) => (
                      <div key={index} className="p-4 border border-slate-200 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-slate-900">{rec.title}</h4>
                          <Badge variant="outline" className={rec.color}>
                            {rec.impact} Impact
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">{rec.description}</p>
                        <Badge variant="secondary">{rec.action}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Shopping Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        item: "White Button-Down Shirt",
                        reason: "Missing versatile basic",
                        budget: "$80-150",
                        priority: "High",
                      },
                      {
                        item: "Black Midi Skirt",
                        reason: "Complete formal looks",
                        budget: "$60-120",
                        priority: "Medium",
                      },
                      {
                        item: "Statement Necklace",
                        reason: "Elevate simple outfits",
                        budget: "$40-80",
                        priority: "Low",
                      },
                      {
                        item: "Comfortable Flats",
                        reason: "Alternative to heels",
                        budget: "$100-200",
                        priority: "Medium",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-4 border border-slate-200 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-slate-900">{item.item}</h4>
                          <Badge
                            variant={item.priority === "High" ? "default" : "secondary"}
                            className={item.priority === "High" ? "bg-purple-600" : ""}
                          >
                            {item.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{item.reason}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-900">{item.budget}</span>
                          <Badge variant="outline">Shop Now</Badge>
                        </div>
                      </div>
                    ))}
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
