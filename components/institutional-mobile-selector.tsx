"use client"

import type React from "react"
import { useRouter } from "next/navigation"

const InstitutionalMobileSelector: React.FC = () => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <button onClick={() => handleNavigation("/institutional/about")}>About</button>
      <button onClick={() => handleNavigation("/institutional/contact")}>Contact</button>
      <button onClick={() => handleNavigation("/institutional/services")}>Services</button>
    </div>
  )
}

export default InstitutionalMobileSelector
