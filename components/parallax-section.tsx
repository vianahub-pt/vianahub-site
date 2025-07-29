"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ParallaxSectionProps {
  imageUrl: string
  height?: string
  children?: React.ReactNode
}

export function ParallaxSection({ imageUrl, height = "400px", children }: ParallaxSectionProps) {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset
        const element = parallaxRef.current
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + scrolled
        const elementHeight = rect.height
        const windowHeight = window.innerHeight

        // Only apply parallax when element is in viewport
        if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
          const speed = (scrolled - elementTop) * 0.3
          parallaxRef.current.style.transform = `translateY(${speed}px)`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden" style={{ height }}>
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          top: "-10%",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">{children}</div>
        </div>
      )}
    </section>
  )
}
