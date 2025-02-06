"use client"
import React from "react" // Import React

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin)
}

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".header-text", {
        duration: 2,
        text: {
          value: "Welcome to Our Creative Universe",
          delimiter: " ",
        },
        ease: "power2.inOut",
      })
    }, headerRef)

    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={headerRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-black to-blue-900"
    >
      <div className="absolute inset-0 bg-black/50" />
      <h1 className="header-text relative z-10 text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center px-4 max-w-4xl mx-auto">
        Welcome to Our Creative Universe
      </h1>
    </header>
  )
}

