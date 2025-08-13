"use client"

import type React from "react"
import { useRouter } from "next/navigation"

const IndustrySelector: React.FC = () => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <button onClick={() => handleNavigation("/industry/technology")}>Technology</button>
      <button onClick={() => handleNavigation("/industry/healthcare")}>Healthcare</button>
      <button onClick={() => handleNavigation("/industry/finance")}>Finance</button>
      {/* rest of code here */}
    </div>
  )
}

export default IndustrySelector
