"use client"

import type React from "react"
import { useRouter } from "next/navigation"

const WhatWeDoMobileSelector: React.FC = () => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <button onClick={() => handleNavigation("/services/web-development")}>Web Development</button>
      <button onClick={() => handleNavigation("/services/app-development")}>App Development</button>
      <button onClick={() => handleNavigation("/services/design")}>Design</button>
      {/* rest of code here */}
    </div>
  )
}

export default WhatWeDoMobileSelector
