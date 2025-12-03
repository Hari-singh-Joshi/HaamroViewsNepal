"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, Search, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "#" },
    { label: "News", href: "#featured" },
    { label: "Categories", href: "#trending" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "bg-gradient-to-b from-background to-background/50 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Enhanced Styling */}
          <Link href="#" className="flex items-center gap-2.5 group">
           <div className="w-12 h-12 rounded-lg overflow-hidden">
            <img 
              src="/logo.png" 
              alt="Haamro Views Nepal Logo" 
              className="w-full h-full object-cover"
            />
          </div>

            <div className="flex flex-col">
              <span className="hidden sm:inline font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-none">
                Haamro Views Nepal
              </span>
              <span className="hidden sm:inline text-xs text-muted-foreground font-medium">Premium News</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium relative transition-colors text-muted-foreground hover:text-primary group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right Section with Enhanced Features */}
          <div className="flex items-center gap-3 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg hover:bg-primary/10 transition-colors hidden sm:inline-flex"
            >
              <Search className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg hover:bg-primary/10 transition-colors hidden sm:inline-flex relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Button>

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-lg hover:bg-primary/10 transition-colors"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            )}

            {/* CTA Button */}
            <Button className="hidden md:inline-flex bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-6">
              Subscribe
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-lg hover:bg-primary/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu with Glass Effect */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-in fade-in slide-in-from-top-2 duration-200 border-t border-border/20">
            <div className="space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg">
                Subscribe
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
