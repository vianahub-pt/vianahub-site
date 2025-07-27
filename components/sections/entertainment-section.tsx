"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslation } from "@/contexts/translation-context"

export function EntertainmentSection() {
  const { t } = useTranslation()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState(800)

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        try {
          // Tenta obter a altura do conteúdo do iframe
          const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document
          if (iframeDocument) {
            const height = iframeDocument.documentElement.scrollHeight
            setIframeHeight(Math.max(height, 800)) // Altura mínima de 800px
          }
        } catch (error) {
          // Se não conseguir acessar o conteúdo (CORS), usa altura responsiva
          const viewportHeight = window.innerHeight
          setIframeHeight(Math.max(viewportHeight * 0.8, 800))
        }
      }
    }

    // Escuta mudanças de tamanho da janela
    window.addEventListener("resize", handleResize)

    // Escuta quando o iframe carrega
    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener("load", handleResize)
    }

    // Executa uma vez no início
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
      if (iframe) {
        iframe.removeEventListener("load", handleResize)
      }
    }
  }, [])

  return (
    <section className="w-full bg-white dark:bg-gray-900" style={{ minHeight: `${iframeHeight + 120}px` }}>
      <div className="container mx-auto px-4">
        <div className="text-center py-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("entertainment.title")} <span className="text-viana-orange">Fox</span>
          </h2>
        </div>

        <div className="w-full">
          <iframe
            ref={iframeRef}
            src="https://www.fox.vianahub.pt/"
            className="w-full border-0"
            style={{ height: `${iframeHeight}px` }}
            title="Entretenimento Fox VianaHub"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
