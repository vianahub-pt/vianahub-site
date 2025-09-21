"use client";

import { Counter } from "@/components/counter";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/components/translation-context";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { useTheme } from "next-themes";

export function HeroSection() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (videoRef.current && !videoError) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
        } catch (error) {
          console.warn(
            "Vídeo não pôde ser reproduzido automaticamente:",
            error
          );
          setVideoError(true);
        }
      };

      // Tentar reproduzir o vídeo após um pequeno delay
      const timer = setTimeout(playVideo, 100);

      return () => clearTimeout(timer);
    }
  }, [videoError]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Vídeo de fundo ou imagem fallback */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-hero-QF1p4zm3ekF8rOyXzcuiTVontRDngQ.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <div className="absolute inset-0 w-full h-full bg-black" />
        )}
      </div>

      {/* Conteúdo - ajustado para começar do topo */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-24 lg:pt-28">
        <div className="max-w-5xl mx-auto text-center">
          <div className="font-kurale space-y-8">
            <div className="bg-white/20 dark:bg-black/60 text-white dark:text-orange-400 border border-white backdrop-blur-sm rounded-lg p-6">
              <p className="text-4xl lg:text-7xl font-bold leading-tight">
                <span className="block text-orange-400 dark:text-orange-400 text-shadow">
                  {t("home.section.hero.title.line1")}
                </span>
                <span className="block text-white dark:text-orange-400 text-shadow">
                  {t("home.section.hero.title.line2")}
                </span>
                <span className="block text-orange-400 dark:text-orange-400">
                  {t("home.section.hero.title.line3")}
                </span>
              </p>
              <p className="py-10 block font-bold text-2xl text-white dark:text-orange-400 text-shadow">
                {t("home.section.hero.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <ScrollIndicator />
              <div className="bg-white/20 dark:bg-black/60 text-orange-400 dark:text-orange-400 border border-white rounded-lg p-6 text-shadow">
                <Counter
                  end={500}
                  suffix="+"
                  className="text-4xl lg:text-5xl font-bold mb-2"
                />
                <div className="text-lg font-bold text-white dark:text-orange-400">
                  {t("home.section.hero.stats.projects")}
                </div>
              </div>
              <div className="bg-white/20 dark:bg-black/60 text-orange-400 dark:text-orange-400 border border-white rounded-lg p-6 text-shadow">
                <Counter
                  end={50}
                  suffix="+"
                  className="text-4xl lg:text-5xl font-bold mb-2"
                />
                <div className="text-lg font-bold text-white dark:text-orange-400">
                  {t("home.section.hero.stats.clients")}
                </div>
              </div>
              <div className="bg-white/20 dark:bg-black/60 text-orange-400 dark:text-orange-400 border border-white rounded-lg p-6 text-shadow">
                <Counter
                  end={5}
                  suffix="+"
                  className="text-4xl lg:text-5xl font-bold mb-2"
                />
                <div className="text-lg font-bold text-white dark:text-orange-400">
                  {t("home.section.hero.stats.years")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
