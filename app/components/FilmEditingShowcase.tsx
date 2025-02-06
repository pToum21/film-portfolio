"use client"
import React from "react" // Import React

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"

export default function FilmEditingShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Film Editing Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Cinematic Masterpiece", description: "A visually stunning film with seamless transitions" },
            { title: "Action-Packed Thriller", description: "Fast-paced editing that keeps viewers on the edge" },
            { title: "Emotional Documentary", description: "Powerful storytelling through careful editing" },
          ].map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={`https://placehold.co/600x400/png?text=${project.title}`}
                  alt={project.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  fill
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

