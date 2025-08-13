"use client"

import { useRouter } from "next/navigation"
import type React from "react"

const Footer: React.FC = () => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <footer>
      <button onClick={() => handleNavigation("/")}>Home</button>
      <button onClick={() => handleNavigation("/about")}>About</button>
      <button onClick={() => handleNavigation("/contact")}>Contact</button>
    </footer>
  )
}

export default Footer
