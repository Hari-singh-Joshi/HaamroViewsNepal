"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TrendingItem {
  id: number
  title: string
  category: string
  image: string
}

export function TrendingCarousel() {
  const [trending, setTrending] = useState<TrendingItem[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((data) => setTrending(data.trending))
  }, [])

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (trending.length || 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [trending.length])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="trending" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Trending Now</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} className="rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} className="rounded-full">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {trending.map((item, idx) => (
            <Card
              key={item.id}
              className={`flex-shrink-0 w-80 overflow-hidden group cursor-pointer border-border transition-all snap-start ${
                idx === activeIndex ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
            </Card>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {trending.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? "bg-primary w-8" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
