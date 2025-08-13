"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import styles from "./navbar.module.css"

const Navbar: React.FC = () => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <nav className={styles.navbar}>
      <button onClick={() => handleNavigation("/about")} className={styles.navLink}>
        About
      </button>
      <button onClick={() => handleNavigation("/careers")} className={styles.navLink}>
        Careers
      </button>
      <button onClick={() => handleNavigation("/contact")} className={styles.navLink}>
        Contact
      </button>
      {/* rest of code here */}
    </nav>
  )
}

export default Navbar
