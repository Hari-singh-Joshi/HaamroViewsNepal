"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setVideoLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">

        <video
          autoPlay
          muted
          loop
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: "url(/one.png)",
          }}
        >
            <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Stay Informed. Stay Connected.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance max-w-2xl mx-auto">
          Your trusted source for real-time news, verified journalism, and global insights
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-full px-8 h-12 font-semibold transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            onClick={() => document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })}
          >
            Read Latest News
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 h-12 font-semibold bg-transparent"
          >
            Subscribe Now
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  )
}
