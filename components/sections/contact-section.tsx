"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [mapEmbedded, setMapEmbedded] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for any inquiries or feedback. Schedule a meeting or send us a
            message.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Email Card */}
          <Card className="p-8 border border-border/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm bg-gradient-to-br from-card to-card/50 group cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <Mail className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
              <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground mb-1">contact@Haamro Views Nepal.com</p>
            <p className="text-sm text-muted-foreground">Response within 24 hours</p>
          </Card>

          {/* Phone Card */}
          <Card className="p-8 border border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 backdrop-blur-sm bg-gradient-to-br from-card to-card/50 group cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <Phone className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform" />
              <ArrowRight className="w-5 h-5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground mb-1">+977 9843867481</p>
            <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 6 PM EST</p>
          </Card>

          {/* Office Card */}
          <Card className="p-8 border border-border/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 backdrop-blur-sm bg-gradient-to-br from-card to-card/50 group cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <MapPin className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform" />
              <ArrowRight className="w-5 h-5 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Office</h3>
            <p className="text-muted-foreground mb-1">Bedkot Muncipality-1</p>
            <p className="text-sm text-muted-foreground">Nepal</p>
          </Card>
        </div>

        {/* Contact Form and Calendar Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form - 2 columns */}
          <div className="lg:col-span-2">
            <Card className="p-8 border border-border/50 backdrop-blur-sm bg-gradient-to-br from-card to-card/50">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-border/50">

  {/* Video */}
  <video
    src="/video1.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  />

  {/* Overlay content (optional) */}
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <h3 className="text-white text-3xl font-bold drop-shadow-lg">
      Haamro Views Nepal
    </h3>
  </div>

</div>



            </Card>
          </div>

          {/* Beautiful Calendar */}
          <div>
            <Card className="p-8 border border-border/50 backdrop-blur-sm bg-gradient-to-br from-card to-card/50 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-6 text-center">Schedule a Meeting</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-full mb-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg">
                    Pick a Date
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    className="rounded-lg"
                  />
                </PopoverContent>
              </Popover>
              {date && (
                <div className="w-full text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Selected Date:</p>
                  <p className="font-semibold text-primary">
                    {date.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              )}
              <p className="text-xs text-muted-foreground text-center mt-4">Available Mon-Fri, 9 AM - 6 PM EST</p>
            </Card>
          </div>
        </div>

        <Card className="border border-border/50 backdrop-blur-sm bg-gradient-to-br from-card to-card/50 overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6">Find Us On The Map</h3>
            <div className="relative w-full h-96 rounded-lg overflow-hidden border border-border/50 shadow-lg">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="Haamro Views Nepal Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111683.45396987107!2d80.19054075090258!3d28.984172401651648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1a8a6240e2e2d%3A0x8dfc553f2fe25b62!2sBedkot%2C%20Nepal!5e0!3m2!1sen!2sin!4v1764781811448!5m2!1sen!2sin"
              
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Click the marker to get directions to our office.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
