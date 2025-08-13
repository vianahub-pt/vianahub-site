"use client"

import type React from "react"
import { useRouter } from "next/navigation"

const EngineeringMobileSelector: React.FC = () => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <button onClick={() => handleNavigation("/engineering/design")}>Design</button>
      <button onClick={() => handleNavigation("/engineering/development")}>Development</button>
      <button onClick={() => handleNavigation("/engineering/project-management")}>Project Management</button>
      {/* rest of code here */}
    </div>
  )
}

export default EngineeringMobileSelector
