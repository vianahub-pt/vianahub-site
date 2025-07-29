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
        const element = parallaxRef.current.parentElement
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = scrolled + rect.top
          const elementHeight = rect.height
          const windowHeight = window.innerHeight

          // Apply parallax effect when element is in viewport
          if (rect.top < windowHeight && rect.bottom > 0) {
            const speed = -(scrolled - elementTop) * 0.5
            parallaxRef.current.style.transform = `translate3d(0, ${speed}px, 0)`
          }
        }
      }
    }

    handleScroll() // Initial call
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden" style={{ height }}>
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          height: `calc(100% + 200px)`,
          top: "-100px",
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
