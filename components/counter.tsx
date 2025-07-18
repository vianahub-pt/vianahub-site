"use client"

import { useCounterAnimation } from "@/hooks/use-counter-animation"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export function Counter({ end, duration = 2000, suffix = "", className = "" }: CounterProps) {
  const { count, ref } = useCounterAnimation({ end, duration })

  return (
    <div ref={ref} className={className}>
      {count}
      {suffix}
    </div>
  )
}
