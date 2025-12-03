"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  quote: string
  rating: number
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data.testimonials))
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground">Join thousands of satisfied readers worldwide</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg backdrop-blur-sm bg-card/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
