"use client"

import type React from "react"
import { useRouter } from "next/navigation"

const EngineeringSelector: React.FC = () => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <button onClick={() => handleNavigation("/engineering/design")}>Design</button>
      <button onClick={() => handleNavigation("/engineering/development")}>Development</button>
      <button onClick={() => handleNavigation("/engineering/testing")}>Testing</button>
      {/* rest of code here */}
    </div>
  )
}

export default EngineeringSelector
