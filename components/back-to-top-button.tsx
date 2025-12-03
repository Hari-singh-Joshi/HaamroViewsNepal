"use client"

import { ChevronUp } from "lucide-react"

export function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all animate-fade-in"
      title="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  )
}
