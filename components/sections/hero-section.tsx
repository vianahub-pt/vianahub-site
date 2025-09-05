"use client";

import { Counter } from "@/components/counter";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/components/translation-context";
import { ScrollIndicator } from "@/components/scroll-indicator";

export function HeroSection() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

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

      {/* Overlay para melhorar o contraste */}

      {/* Conteúdo - ajustado para começar do topo */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-24 lg:pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="font-kurale text-4xl lg:text-7xl font-bold text-viana-white leading-tight drop-shadow-2xl">
                <span className="block text-viana-white">
                  {t("home.section.hero.title.line1")}
                </span>
                <span className="block text-orange-400">
                  {t("home.section.hero.title.line2")}
                </span>
                <span className="block text-viana-white">
                  {t("home.section.hero.title.line3")}
                </span>
              </p>
            </div>
            <p className="font-kurale text-xl text-center bg-black/30 backdrop-blur-sm rounded-lg p-6 shadow-xl">
              {t("home.section.hero.subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                <Counter
                  end={500}
                  suffix="+"
                  className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2 drop-shadow-lg"
                />
                <div className="text-viana-white/90 text-lg drop-shadow-lg font-kurale">
                  {t("home.section.hero.stats.projects")}
                </div>
              </div>
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                <Counter
                  end={50}
                  suffix="+"
                  className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2 drop-shadow-lg"
                />
                <div className="text-viana-white/90 text-lg drop-shadow-lg font-kurale">
                  {t("home.section.hero.stats.clients")}
                </div>
              </div>
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                <Counter
                  end={5}
                  suffix="+"
                  className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2 drop-shadow-lg"
                />
                <div className="text-viana-white/90 text-lg drop-shadow-lg font-kurale">
                  {t("home.section.hero.stats.years")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
