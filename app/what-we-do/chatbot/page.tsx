"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bot,
  MessageCircle,
  Clock,
  Users,
  BarChart,
  Zap,
  Headphones,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from "@/components/translation-context";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { motion } from "framer-motion";

export default function ChatbotPage() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: MessageCircle,
      title: t("chatbot.features.conversations.title"),
      description: t("chatbot.features.conversations.description"),
    },
    {
      icon: Clock,
      title: t("chatbot.features.availability.title"),
      description: t("chatbot.features.availability.description"),
    },
    {
      icon: Users,
      title: t("chatbot.features.channels.title"),
      description: t("chatbot.features.channels.description"),
    },
    {
      icon: BarChart,
      title: t("chatbot.features.analytics.title"),
      description: t("chatbot.features.analytics.description"),
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: t("chatbot.benefits.response.title"),
      description: t("chatbot.benefits.response.description"),
    },
    {
      icon: Headphones,
      title: t("chatbot.benefits.costs.title"),
      description: t("chatbot.benefits.costs.description"),
    },
    {
      icon: Users,
      title: t("chatbot.benefits.satisfaction.title"),
      description: t("chatbot.benefits.satisfaction.description"),
    },
    {
      icon: CheckCircle,
      title: t("chatbot.benefits.scalability.title"),
      description: t("chatbot.benefits.scalability.description"),
    },
  ];

  interface CardProps {
    service: {
      icon: React.ComponentType<any>;
      title: string;
      description: string;
    };
    index: number;
  }

  function BenefitsCard({ service, index }: CardProps) {
    const Icon = service.icon;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          delay: index * 0.15,
          duration: 0.8,
          type: "spring",
          stiffness: 120,
        }}
        className="h-full"
      >
        <Card className="text-center bg-orange-400 hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <Icon className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-gray-900 text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-md mt-auto">{service.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  function FeaturesCard({ service, index }: CardProps) {
    const Icon = service.icon;
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }} // começa 100px à esquerda
        whileInView={{ opacity: 1, x: 0 }} // desliza para a posição normal
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          delay: index * 0.15, // animação em cascata
          duration: 0.8,
          type: "spring",
          stiffness: 120,
        }}
        className="h-full"
      >
        <Card className="text-center hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <Icon className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-orange-500 text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-md mt-auto">{service.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-0 pb-0 h-[600px]"
        style={{
          backgroundImage: "url(/pages/hero-chatbot.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center bg-black/50 backdrop-blur-sm rounded-lg p-6">
            <h1 className="text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <Bot
                className=" w-12 h-12 lg:w-16 lg:h-16"
                style={{ color: "#DB2777" }}
              />
              &nbsp;{t("chatbot.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto ">
              {t("chatbot.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="block text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("chatbot.benefits.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("chatbot.benefits.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {benefits.map((service, index) => (
              <BenefitsCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <div
        className="relative h-[500px] overflow-hidden"
        style={{
          backgroundImage: "url('/pages/parallax-chatbot.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="block text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("chatbot.features.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("chatbot.features.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {benefits.map((service, index) => (
              <FeaturesCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="block text-orange-400 text-3xl md:text-4xl font-bold mb-4">
                {t("chatbot.demo.title")}
              </h2>
              <p className="text-lg text-gray-900 max-w-2xl mx-auto">
                {t("chatbot.demo.subtitle")}
              </p>
            </div>

            <div className="bg-orange-100 rounded-lg p-8">
              <Bot className="h-16 w-16 text-orange-400 mx-auto mb-6" />

              {/* Chat Animation */}
              <div className="bg-white max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
                <div className="bg-orange-400 text-white p-3 text-center font-semibold">
                  Chatbot Demo
                </div>
                <div className="p-4 h-80 overflow-y-auto ">
                  <div className="space-y-3 ">
                    {/* Bot message */}
                    <div
                      className="flex items-start space-x-2 animate-fade-in-up"
                      style={{
                        animationDelay: "0.5s",
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-green" />
                      </div>
                      <div className="bg-gray-500 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          {t("chatbot.chat.bot.greeting")}
                        </p>
                      </div>
                    </div>

                    {/* User message */}
                    <div
                      className="flex items-start space-x-2 justify-end animate-fade-in-up"
                      style={{
                        animationDelay: "1.5s",
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className="bg-orange-400 text-white rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          {t("chatbot.chat.user.order")}
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Bot message */}
                    <div
                      className="flex items-start space-x-2 animate-fade-in-up"
                      style={{
                        animationDelay: "2.5s",
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-500 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          {t("chatbot.chat.bot.options")}
                        </p>
                      </div>
                    </div>

                    {/* User message */}
                    <div
                      className="flex items-start space-x-2 justify-end animate-fade-in-up"
                      style={{
                        animationDelay: "3.5s",
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className="bg-orange-400 text-white rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-white">
                          {t("chatbot.chat.user.choice")}
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Bot message */}
                    <div
                      className="flex items-start space-x-2 animate-fade-in-up"
                      style={{
                        animationDelay: "4.5s",
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-500 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          {t("chatbot.chat.bot.confirm")}
                        </p>
                      </div>
                    </div>

                    {/* User message */}
                    <div
                      className="flex items-start space-x-2 justify-end animate-fade-in-up"
                      style={{
                        animationDelay: "5.5s",
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className="bg-orange-400 text-white rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          {t("chatbot.chat.user.confirm")}
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Bot message */}
                    <div
                      className="flex items-start space-x-2 animate-fade-in-up"
                      style={{
                        animationDelay: "6.5s",
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-500 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          {t("chatbot.chat.bot.success")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <style jsx>{`
                @keyframes fade-in-up {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                .animate-fade-in-up {
                  animation: fade-in-up 0.6s ease-out;
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/90">
        <div className="text-center mb-16">
          <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
            {t("chatbot.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            {t("chatbot.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3"
            onClick={() => router.push("/contact")}
          >
            {t("chatbot.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
