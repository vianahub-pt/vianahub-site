"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/contexts/translation-context"
import type { WhatWeDo } from "@/app/what-we-do/page"

interface ServiceCardProps {
  service: WhatWeDo
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const { t } = useTranslation()

  return (
    <Card
      className="service-card relative overflow-hidden rounded-tl-none rounded-tr-[25%] rounded-bl-[25%] rounded-br-none border-2 border-viana-blue/50 bg-black/50 text-viana-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl data-[visible=true]:scale-100"
      style={{ transitionDelay: `${index * 200}ms` }}
      data-index={index}
    >
      <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="flex items-center justify-center gap-3">
          {service.icon}
          <CardTitle className="text-2xl font-bold">{t(service.title)}</CardTitle>
        </div>
        <CardDescription className="text-md font-bold text-viana-orange">{t(service.description)}</CardDescription>
        <Button variant="secondary">{t("services.cta")}</Button>
      </CardContent>
    </Card>
  )
}

export default function ServicesSection() {
  const { t } = useTranslation()
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const services: WhatWeDo[] = [
    {
      title: "services.agile.title",
      description: "services.agile.description",
      icon: <path stroke="none" d="M0 0h24v24H0z" fill="none" />,
    },
    {
      title: "services.development.title",
      description: "services.development.description",
      icon: <path stroke="none" d="M0 0h24v24H0z" fill="none" />,
    },
    {
      title: "services.chatbot.title",
      description: "services.chatbot.description",
      icon: <path stroke="none" d="M0 0h24v24H0z" fill="none" />,
    },
    {
      title: "services.landing.title",
      description: "services.landing.description",
      icon: <path stroke="none" d="M0 0h24v24H0z" fill="none" />,
    },
    {
      title: "services.outsourcing.title",
      description: "services.outsourcing.description",
      icon: <path stroke="none" d="M0 0h24v24H0z" fill="none" />,
    },
    {
      title: "services.integration.title",
      description: "services.integration.description",
      icon: <path stroke="none" d="M0 0h24v24H0z" fill="none" />,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[Number(entry.target.dataset.index)] = true
              return newVisible
            })
          } else {
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[Number(entry.target.dataset.index)] = false
              return newVisible
            })
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      },
    )

    const serviceCards = sectionRef.current?.querySelectorAll(".service-card")
    serviceCards?.forEach((card) => {
      observer.observe(card)
    })

    return () => {
      serviceCards?.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section className="py-12" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">{t("services.title")}</h2>
        <p className="mb-4 text-center text-gray-300">{t("services.subtitle")}</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
