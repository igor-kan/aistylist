import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const RecentLooks = () => {
  const recentLooks = [
    {
      id: 1,
      name: "Office Chic",
      date: "Today",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      rating: 4.8,
      occasion: "Work",
    },
    {
      id: 2,
      name: "Weekend Casual",
      date: "Yesterday",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      rating: 4.5,
      occasion: "Casual",
    },
    {
      id: 3,
      name: "Date Night",
      date: "2 days ago",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop",
      rating: 4.9,
      occasion: "Evening",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Recent Looks</CardTitle>
        <Link href="/looks">
          <Button variant="outline" size="sm">
            View All
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentLooks.map((look) => (
            <div key={look.id} className="space-y-3">
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img
                  src={look.image || "/placeholder.svg"}
                  alt={look.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    ⭐ {look.rating}
                  </Badge>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-slate-900">{look.name}</h3>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>{look.date}</span>
                  <Badge variant="outline">{look.occasion}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
