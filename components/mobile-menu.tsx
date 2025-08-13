"use client"

import { useRouter } from "next/navigation"
import type React from "react"
import { useState } from "react"

const MobileMenu: React.FC = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
    setIsOpen(false) // Close mobile menu after navigation
  }

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
      {isOpen && (
        <div>
          <button onClick={() => handleNavigation("/home")}>Home</button>
          <button onClick={() => handleNavigation("/about")}>About</button>
          <button onClick={() => handleNavigation("/contact")}>Contact</button>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
