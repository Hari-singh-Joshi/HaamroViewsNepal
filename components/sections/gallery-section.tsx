"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { ZoomIn } from "lucide-react"

interface GalleryImage {
  id: number
  title: string
  image: string
  category: string
}

export function GallerySection() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((res) => res.json())
      .then((data) => setImages(data.images))
  }, [])

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Photo Gallery</h2>
          <p className="text-lg text-muted-foreground">Visual stories from around the world</p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all break-inside-avoid"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden bg-secondary/50">
                <img
                  src={image.image || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{image.category}</p>
                <h3 className="font-semibold line-clamp-2">{image.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Card className="max-w-4xl w-full overflow-hidden">
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="p-6 bg-background">
                <p className="text-sm text-muted-foreground mb-2">{selectedImage.category}</p>
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
