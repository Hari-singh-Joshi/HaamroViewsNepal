"use client"

import { useEffect, useState } from "react"

interface Partner {
  id: number
  name: string
  logo: string
}

export function PartnersMarquee() {
  const [partners, setPartners] = useState<Partner[]>([])

  useEffect(() => {
    fetch("/data/partners.json")
      .then((res) => res.json())
      .then((data) => setPartners(data.partners))
  }, [])

  // Duplicate partners for infinite marquee effect
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-16 px-4 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-12 text-muted-foreground">
          Trusted By Leading Organizations
        </h2>

        {/* Marquee Container */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-8">
            {duplicatedPartners.map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-all"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="w-28 h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
