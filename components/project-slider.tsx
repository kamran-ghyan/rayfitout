"use client"

import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    id: 1,
    image: "/modern-wooden-slat-screens-room-dividers-geometric.png",
    title: "Architectural Screening",
    description: "Modern wooden slat systems with clean geometric lines",
  },
  {
    id: 2,
    image: "/modern-interior-wood-paneled-walls-cabinetry-brown.png",
    title: "Integrated Millwork",
    description: "Seamless integration of wood and stone elements",
  },
  {
    id: 3,
    image: "/luxury-modern-kitchen-aluminum-frames-glass-panels.png",
    title: "Kitchen Systems",
    description: "Contemporary aluminum framing with glass integration",
  },
  {
    id: 4,
    image: "/modern-office-space-aluminum-partitions-glass-wall.png",
    title: "Commercial Solutions",
    description: "Professional aluminum partition systems",
  },
]

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-white relative z-10">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">PROJECT SHOWCASE</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of sophisticated aluminum systems integrated into modern architectural spaces
          </p>
        </div>

        <div className="relative">
          {/* Main slider container */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="relative h-[500px] md:h-[600px]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority={project.id === 1}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-light mb-2">{project.title}</h3>
                      <p className="text-lg opacity-90">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
