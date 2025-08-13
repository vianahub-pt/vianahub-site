"use client"

import type React from "react"
import { useRouter } from "next/navigation"

const InstitutionalSelector: React.FC = () => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <button onClick={() => handleNavigation("/institution1")}>Institution 1</button>
      <button onClick={() => handleNavigation("/institution2")}>Institution 2</button>
      <button onClick={() => handleNavigation("/institution3")}>Institution 3</button>
      {/* rest of code here */}
    </div>
  )
}

export default InstitutionalSelector
