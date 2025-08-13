"use client"

import type React from "react"
import { useRouter } from "next/navigation"

const WhatWeDoSelector: React.FC = () => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <button onClick={() => handleNavigation("/services/design")}>Design</button>
      <button onClick={() => handleNavigation("/services/development")}>Development</button>
      <button onClick={() => handleNavigation("/services/marketing")}>Marketing</button>
      {/* rest of code here */}
    </div>
  )
}

export default WhatWeDoSelector
