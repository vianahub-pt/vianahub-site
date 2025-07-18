"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className={cn("py-4 bg-gray-50", className)}>
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
              {item.href ? (
                <Link href={item.href} className="hover:text-viana-orange transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-viana-black font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
