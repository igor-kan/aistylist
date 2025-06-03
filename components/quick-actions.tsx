import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Palette, ShoppingBag, BarChart3, Calendar, Users } from "lucide-react"
import Link from "next/link"

export const QuickActions = () => {
  const actions = [
    {
      title: "Add Item",
      description: "Upload new clothing",
      icon: Camera,
      href: "/wardrobe",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "Create Look",
      description: "Style new outfit",
      icon: Palette,
      href: "/styling",
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      title: "Shop",
      description: "Find new pieces",
      icon: ShoppingBag,
      href: "/shopping",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      title: "Analytics",
      description: "View style stats",
      icon: BarChart3,
      href: "/analytics",
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      title: "Plan Outfit",
      description: "Schedule looks",
      icon: Calendar,
      href: "/events",
      color: "bg-pink-500 hover:bg-pink-600",
    },
    {
      title: "Social",
      description: "Share & discover",
      icon: Users,
      href: "/social",
      color: "bg-indigo-500 hover:bg-indigo-600",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <Link key={action.title} href={action.href}>
              <Button
                variant="outline"
                className={`w-full h-auto p-4 flex flex-col items-center gap-2 text-white border-0 ${action.color} transition-colors`}
              >
                <action.icon className="w-6 h-6" />
                <div className="text-center">
                  <div className="font-medium text-sm">{action.title}</div>
                  <div className="text-xs opacity-90">{action.description}</div>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
