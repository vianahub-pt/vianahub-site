"use client"

import { useState, useEffect, useCallback } from "react"

interface UseClientDataOptions<T> {
  url: string
  transform?: (data: any) => T[]
  dependencies?: any[]
}

interface UseClientDataReturn<T> {
  data: T[]
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useClientData<T>({
  url,
  transform,
  dependencies = [],
}: UseClientDataOptions<T>): UseClientDataReturn<T> {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const rawData = await response.json()
      const processedData = transform ? transform(rawData) : rawData

      setData(processedData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }, [url, transform, ...dependencies])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const refetch = useCallback(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error, refetch }
}
