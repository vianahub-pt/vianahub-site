"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"

interface ParallaxSectionProps {
  imageUrl: string
  height?: string
  children?: React.ReactNode
}

export function ParallaxSection({ imageUrl, height = "60vh", children }: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (parallaxRef.current) {
      const speed = scrollY * 0.5
      parallaxRef.current.style.transform = `translateY(${speed}px)`
    }
  }, [scrollY])

  return (
    <section className="relative overflow-hidden" style={{ height }}>
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">{children}</div>
        </div>
      )}
    </section>
  )
}
