"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "./components/Header"
import FilmEditingShowcase from "./components/FilmEditingShowcase"
import PropGallery from "./components/PropGallery"
import Footer from "./components/Footer"
import React from "react" // Import React

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="min-h-screen bg-black text-white">
      <Header />
      <div className="section">
        <FilmEditingShowcase />
      </div>
      <div className="section">
        <PropGallery />
      </div>
      <Footer />
    </main>
  )
}

