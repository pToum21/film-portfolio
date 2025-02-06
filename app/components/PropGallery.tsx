"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import React from "react" // Import React


export default function PropGallery() {
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".prop-item", {
        opacity: 0,
        scale: 0.8,
        rotation: -15,
        stagger: 0.2,
        duration: 1,
        ease: "back.out(1.7)",
      })
    }, galleryRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={galleryRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Application Prop Creations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Futuristic Weapon", "Alien Artifact", "Steampunk Gadget", "Magical Amulet"].map((item, index) => (
            <div
              key={index}
              className="prop-item group relative aspect-square rounded-xl overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="relative w-full h-full">
                <Image
                  src={`https://placehold.co/400x400/png?text=${item}`}
                  alt={item}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  fill
                  priority={index === 0}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">{item}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

