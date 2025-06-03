import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, TrendingUp, Calendar } from "lucide-react"

export const AIStyleSuggestions = () => {
  const suggestions = [
    {
      type: "trending",
      title: "Trending: Oversized Blazers",
      description: "Perfect for your upcoming work meetings",
      confidence: 92,
      icon: TrendingUp,
      color: "bg-blue-500",
    },
    {
      type: "weather",
      title: "Weather-Based",
      description: "Light layers for today's 72°F weather",
      confidence: 88,
      icon: Calendar,
      color: "bg-green-500",
    },
    {
      type: "ai",
      title: "AI Recommendation",
      description: "Try pairing your vintage denim with silk scarves",
      confidence: 85,
      icon: Sparkles,
      color: "bg-purple-500",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-500" />
          AI Style Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="p-4 border border-slate-200 rounded-lg space-y-3">
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${suggestion.color}`}>
                <suggestion.icon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="font-medium text-slate-900">{suggestion.title}</h4>
                <p className="text-sm text-slate-600">{suggestion.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {suggestion.confidence}% confidence
                </Badge>
              </div>
            </div>
            <Button size="sm" className="w-full">
              Apply Suggestion
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
