"use client"

import { useEffect, useRef } from "react"

export function useSounds() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Verificar se estamos no cliente
    if (typeof window === "undefined") return

    // Criar elemento de áudio para música de fundo
    const audio = new Audio()
    audio.loop = true
    audio.volume = 0.15 // Volume baixo (15%)
    audio.preload = "auto"

    // Usar uma música de fundo simples gerada por tons
    const createBackgroundMusic = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        const oscillator1 = audioContext.createOscillator()
        const oscillator2 = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        // Criar uma melodia simples e relaxante
        oscillator1.connect(gainNode)
        oscillator2.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator1.frequency.value = 220 // Nota A3
        oscillator2.frequency.value = 330 // Nota E4
        oscillator1.type = "sine"
        oscillator2.type = "triangle"

        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime) // Volume muito baixo

        return { oscillator1, oscillator2, gainNode, audioContext }
      } catch (error) {
        console.log("Audio context not supported")
        return null
      }
    }

    audioRef.current = audio

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const startMusic = () => {
    if (audioRef.current) {
      // Usar uma URL de música de fundo relaxante
      audioRef.current.src =
        "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT"

      // Como fallback, criar um tom suave
      if (!audioRef.current.src || audioRef.current.src.includes("data:")) {
        // Usar um tom de fundo muito suave
        try {
          const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
          const oscillator = audioContext.createOscillator()
          const gainNode = audioContext.createGain()

          oscillator.connect(gainNode)
          gainNode.connect(audioContext.destination)

          oscillator.frequency.value = 200 // Tom grave e suave
          oscillator.type = "sine"
          gainNode.gain.setValueAtTime(0.02, audioContext.currentTime) // Volume muito baixo

          oscillator.start()

          // Parar após 30 segundos e reiniciar (simular loop)
          setTimeout(() => {
            try {
              oscillator.stop()
              if (audioRef.current) {
                startMusic() // Reiniciar
              }
            } catch (e) {
              console.log("Audio context stopped")
            }
          }, 30000)
        } catch (error) {
          console.log("Background music not supported")
        }
        return
      }

      audioRef.current.play().catch(() => {
        console.log("Background music autoplay blocked")
      })
    }
  }

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  return {
    startMusic,
    stopMusic,
  }
}
