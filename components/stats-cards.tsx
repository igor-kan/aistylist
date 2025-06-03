import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Heart, ShoppingBag, Star } from "lucide-react"

export const StatsCards = () => {
  const stats = [
    {
      title: "Total Items",
      value: "127",
      change: "+12 this month",
      icon: ShoppingBag,
      color: "text-blue-600",
    },
    {
      title: "Favorite Looks",
      value: "23",
      change: "+3 this week",
      icon: Heart,
      color: "text-pink-600",
    },
    {
      title: "Style Score",
      value: "8.7",
      change: "+0.3 this month",
      icon: Star,
      color: "text-yellow-600",
    },
    {
      title: "Outfit Value",
      value: "$2,340",
      change: "+$180 this month",
      icon: TrendingUp,
      color: "text-green-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-white/60 backdrop-blur-sm border-white/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-full bg-slate-100 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
