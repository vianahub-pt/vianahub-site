"use client"

import type React from "react"
import { useRouter } from "next/navigation"

const Navbar: React.FC = () => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <nav className="navbar">
      <button onClick={() => handleNavigation("/about")} className="nav-link">
        About
      </button>
      <button onClick={() => handleNavigation("/careers")} className="nav-link">
        Careers
      </button>
      <button onClick={() => handleNavigation("/contact")} className="nav-link">
        Contact
      </button>
      {/* rest of code here */}
    </nav>
  )
}

export default Navbar
