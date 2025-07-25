"use client"

import { useState, useEffect } from "react"
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Updated gallery type with array of images
type GalleryType = {
  title: string
  description: string
  images: {
    path: string
    description: string
  }[]
}

interface GallerySectionProps {
  gallery: GalleryType
}

export default function GallerySection({ gallery }: GallerySectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  const images = gallery.images

  // Calculate items per view based on screen size
  const [itemsPerView, setItemsPerView] = useState(3)

  // Adjusted calculation to ensure last card is fully visible
  const maxCarouselIndex = Math.max(0, images.length - itemsPerView)

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    // Initial call
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setIsDialogOpen(true)
  }

  const handlePrevImage = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection("left")

    setCurrentImageIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1
      return newIndex
    })
  }

  const handleNextImage = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection("right")

    setCurrentImageIndex((prev) => {
      const newIndex = prev === images.length - 1 ? 0 : prev + 1
      return newIndex
    })
  }

  const handleCarouselPrev = () => {
    setCarouselIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleCarouselNext = () => {
    setCarouselIndex((prev) => Math.min(prev + 1, maxCarouselIndex))
  }

  // Reset animation state after transition completes
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
        setDirection(null)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isDialogOpen) return

      if (e.key === "ArrowLeft") {
        handlePrevImage()
      } else if (e.key === "ArrowRight") {
        handleNextImage()
      } else if (e.key === "Escape") {
        setIsDialogOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isDialogOpen])

  const currentImage = images[currentImageIndex]

  return (
    <section id="gallery" className="section-padding bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">{gallery.title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{gallery.description}</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Custom Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${carouselIndex * (100 / itemsPerView)}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 px-2" style={{ width: `${100 / itemsPerView}%` }}>
                  <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white m-1">
                    <div
                      className="relative cursor-pointer transition-transform duration-200 active:scale-95"
                      onClick={() => handleImageClick(index)}
                    >
                      <img
                        src={image.path || "/placeholder.svg"}
                        alt={image.description}
                        className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-slate-600 line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            onClick={handleCarouselPrev}
            disabled={carouselIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            onClick={handleCarouselNext}
            disabled={carouselIndex >= maxCarouselIndex}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxCarouselIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === carouselIndex ? "bg-slate-900 scale-125" : "bg-slate-300 hover:bg-slate-400"
                }`}
                onClick={() => setCarouselIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none animate-in fade-in-0 zoom-in-95 duration-300">
            <div className="relative animate-in slide-in-from-bottom-4 duration-500">
              <div className="relative overflow-hidden rounded-lg">
                <div className="flex items-center justify-center bg-black/80 rounded-lg">
                  <img
                    key={currentImageIndex} // Force re-render for animation
                    src={currentImage?.path || "/placeholder.svg"}
                    alt={currentImage?.description}
                    className={`w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl
                      ${isAnimating ? "transition-all duration-500 ease-in-out" : "animate-in zoom-in-95 duration-700"}
                      ${isAnimating && direction === "left" ? "animate-slide-from-right" : ""}
                      ${isAnimating && direction === "right" ? "animate-slide-from-left" : ""}
                    `}
                  />
                </div>

                {/* Close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white transition-all duration-200 hover:scale-110 active:scale-95"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>

                {/* Navigation buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 transition-all duration-200 hover:scale-110 active:scale-95"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 transition-all duration-200 hover:scale-110 active:scale-95"
                  onClick={handleNextImage}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>

              {currentImage && (
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg mt-4 animate-in slide-in-from-bottom-2 duration-500 delay-200">
                  <p className="text-slate-700 text-center">{currentImage.description}</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Add keyframe animations */}
      <style jsx global>{`
        @keyframes slideFromRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideFromLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-slide-from-right {
          animation: slideFromRight 0.5s ease-in-out;
        }
        
        .animate-slide-from-left {
          animation: slideFromLeft 0.5s ease-in-out;
        }
      `}</style>
    </section>
  )
}
