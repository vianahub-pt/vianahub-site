"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/contexts/translation-context"
import { GraduationCap, Banknote, Building2, Heart, Factory, ShoppingCart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function IndustriesSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const industries = [
    {
      icon: <GraduationCap className="h-8 w-8 text-viana-orange" />,
      title: t("industries.education.title"),
      description: t("industries.education.description"),
      href: "/industry/education",
    },
    {
      icon: <Banknote className="h-8 w-8 text-viana-orange" />,
      title: t("industries.financial.title"),
      description: t("industries.financial.description"),
      href: "/industry/financial",
    },
    {
      icon: <Building2 className="h-8 w-8 text-viana-orange" />,
      title: t("industries.government.title"),
      description: t("industries.government.description"),
      href: "/industry/government",
    },
    {
      icon: <Heart className="h-8 w-8 text-viana-orange" />,
      title: t("industries.healthcare.title"),
      description: t("industries.healthcare.description"),
      href: "/industry/healthcare",
    },
    {
      icon: <Factory className="h-8 w-8 text-viana-orange" />,
      title: t("industries.manufacturing.title"),
      description: t("industries.manufacturing.description"),
      href: "/industry/manufacturing",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-viana-orange" />,
      title: t("industries.retail.title"),
      description: t("industries.retail.description"),
      href: "/industry/retail",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {t("industries.title")}
          </Badge>
          <h2 className="text-4xl font-bold mb-4">{t("industries.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-kurale">
            {t("industries.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 border-0 relative ${
                isVisible ? "fireworks-card" : ""
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-viana-orange transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-kurale">{industry.description}</p>
                <Link href={industry.href}>
                  <Button
                    variant="outline"
                    className="group-hover:bg-viana-orange group-hover:text-white transition-colors bg-transparent"
                  >
                    Explorar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>

              {/* Fireworks particles */}
              {isVisible && (
                <>
                  <div className="firework-particle particle-1"></div>
                  <div className="firework-particle particle-2"></div>
                  <div className="firework-particle particle-3"></div>
                  <div className="firework-particle particle-4"></div>
                  <div className="firework-particle particle-5"></div>
                  <div className="firework-particle particle-6"></div>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fireworks-card {
          animation: cardPulse 2s ease-in-out;
        }

        @keyframes cardPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.7); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255, 165, 0, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 165, 0, 0); }
        }

        .firework-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #ff6b35;
          border-radius: 50%;
          pointer-events: none;
        }

        .particle-1 {
          top: 20%;
          left: 20%;
          animation: firework1 1.5s ease-out;
        }

        .particle-2 {
          top: 30%;
          right: 20%;
          animation: firework2 1.8s ease-out;
        }

        .particle-3 {
          bottom: 30%;
          left: 30%;
          animation: firework3 1.6s ease-out;
        }

        .particle-4 {
          bottom: 20%;
          right: 30%;
          animation: firework4 1.7s ease-out;
        }

        .particle-5 {
          top: 50%;
          left: 10%;
          animation: firework5 1.4s ease-out;
        }

        .particle-6 {
          top: 50%;
          right: 10%;
          animation: firework6 1.9s ease-out;
        }

        @keyframes firework1 {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          50% { transform: translate(-30px, -40px) scale(1); opacity: 1; }
          100% { transform: translate(-60px, -80px) scale(0); opacity: 0; }
        }

        @keyframes firework2 {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          50% { transform: translate(40px, -30px) scale(1); opacity: 1; }
          100% { transform: translate(80px, -60px) scale(0); opacity: 0; }
        }

        @keyframes firework3 {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          50% { transform: translate(-25px, 35px) scale(1); opacity: 1; }
          100% { transform: translate(-50px, 70px) scale(0); opacity: 0; }
        }

        @keyframes firework4 {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          50% { transform: translate(35px, 25px) scale(1); opacity: 1; }
          100% { transform: translate(70px, 50px) scale(0); opacity: 0; }
        }

        @keyframes firework5 {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          50% { transform: translate(-45px, 0) scale(1); opacity: 1; }
          100% { transform: translate(-90px, 0) scale(0); opacity: 0; }
        }

        @keyframes firework6 {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          50% { transform: translate(45px, 0) scale(1); opacity: 1; }
          100% { transform: translate(90px, 0) scale(0); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
