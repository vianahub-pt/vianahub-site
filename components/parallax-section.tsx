"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface ParallaxSectionProps {
  imageUrl: string
  height?: string
  children?: React.ReactNode
}

export default function ParallaxSection({ imageUrl, height = "60vh", children }: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden" style={{ height }}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${scrollY * 0.5}px)`,
          height: "120%",
          top: "-10%",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">{children}</div>
        </div>
      )}
    </div>
  )
}
