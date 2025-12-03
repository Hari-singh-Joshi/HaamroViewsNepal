"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { HighlightNewsSection } from "@/components/sections/highlight-news-section"
import { TrendingCarousel } from "@/components/sections/trending-carousel"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FAQSection } from "@/components/sections/faq-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { PartnersMarquee } from "@/components/sections/partners-marquee"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"
import { StickyContactIcons } from "@/components/sticky-contact-icons"
import { BackToTopButton } from "@/components/back-to-top-button"

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HighlightNewsSection />
      <TrendingCarousel />
      <TestimonialsSection />
      <FAQSection />
      <GallerySection />
     
      <AboutSection />
      <ContactSection />
      <FooterSection />
      <StickyContactIcons />
      {showBackToTop && <BackToTopButton />}
    </main>
  )
}
