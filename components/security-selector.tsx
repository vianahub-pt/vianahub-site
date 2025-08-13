"use client"

import type React from "react"
import { useRouter } from "next/navigation"

const SecuritySelector: React.FC = () => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <button onClick={() => handleNavigation("/security/option1")}>Option 1</button>
      <button onClick={() => handleNavigation("/security/option2")}>Option 2</button>
      <button onClick={() => handleNavigation("/security/option3")}>Option 3</button>
    </div>
  )
}

export default SecuritySelector
