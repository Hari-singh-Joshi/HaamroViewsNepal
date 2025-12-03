"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NewsItem {
  id: number
  title: string
  excerpt: string
  category: string
  image: string
  date: string
  author: string
  readTime: string
}

export function HighlightNewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    fetch("/data/news.json")
      .then(res => res.json())
      .then(data => setNews(data.featured || []))
  }, [])

  const featured = news[0]
  const secondary = news.slice(1)

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold mb-12">Highlight Stories</h2>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* FEATURED CARD */}
          {featured && (
            <Card className="relative lg:col-span-2 overflow-hidden border hover:shadow-xl transition-all">
              
              {/* IMAGE */}
              <div className="relative h-96">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />

                {/* IMAGE GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* CONTENT OVERLAY */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                <div className="flex gap-2 mb-4">
                  <Badge className="bg-blue-500">{featured.category}</Badge>
                  <Badge variant="outline" className="text-white border-white">
                    {featured.readTime}
                  </Badge>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-2 line-clamp-2">
                  {featured.title}
                </h3>

                <p className="text-white/80 line-clamp-2 mb-4">
                  {featured.excerpt}
                </p>

                <div className="flex justify-between text-sm text-white/70">
                  <span>{featured.author}</span>
                  <span>{featured.date}</span>
                </div>
              </div>
            </Card>
          )}

          {/* SECONDARY CARDS */}
          <div className="flex flex-col gap-6">
            {secondary.map(item => (
              <Card 
                key={item.id}
                className="relative overflow-hidden border hover:shadow-lg transition-all"
              >
                {/* IMAGE */}
                <div className="relative h-48 md:h-60">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* TEXT OVERLAY */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                  <Badge className="bg-purple-500 mb-1">{item.category}</Badge>
                  <h4 className="font-semibold line-clamp-2 text-sm">{item.title}</h4>
                </div>
              </Card>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
