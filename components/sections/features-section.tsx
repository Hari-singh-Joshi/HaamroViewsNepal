"use client"

import { Card } from "@/components/ui/card"
import { Zap, Shield, Clock, CheckCircle, Globe, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time news updates delivered instantly to your device",
  },
  {
    icon: Shield,
    title: "Trusted Source",
    description: "Verified journalism from award-winning reporters",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Breaking news as it happens, 24/7 coverage",
  },
  {
    icon: CheckCircle,
    title: "Fact Verified",
    description: "Every story undergoes rigorous fact-checking",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Stories from across the world in one place",
  },
  {
    icon: TrendingUp,
    title: "Trending Topics",
    description: "Discover what's trending and why it matters",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Why Choose Haamro Views Nepal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience news the way it should be - fast, accurate, and comprehensive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card
                key={idx}
                className="group p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:bg-secondary/50 cursor-pointer backdrop-blur-sm bg-card/50"
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl group-hover:from-blue-500/40 group-hover:to-purple-600/40 transition-all">
                  <Icon className="w-6 h-6 text-blue-500 group-hover:text-purple-600 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
