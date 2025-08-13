"use client"

import type React from "react"
import { useRouter } from "next/navigation"

const SecurityMobileSelector: React.FC = () => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <button onClick={() => handleNavigation("/security/mobile-selector/option1")}>Option 1</button>
      <button onClick={() => handleNavigation("/security/mobile-selector/option2")}>Option 2</button>
      {/* rest of code here */}
    </div>
  )
}

export default SecurityMobileSelector
