"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type MenuType = "what-we-do" | "industry" | "engineering" | "security" | "institutional" | "language" | null

interface MenuContextType {
  activeMenu: MenuType
  setActiveMenu: (menu: MenuType) => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export function MenuProvider({ children }: { children: ReactNode }) {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null)

  return <MenuContext.Provider value={{ activeMenu, setActiveMenu }}>{children}</MenuContext.Provider>
}

export function useMenuContext() {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error("useMenuContext must be used within a MenuProvider")
  }
  return context
}

// Add alias for backward compatibility
export const useMenu = useMenuContext
