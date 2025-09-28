"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, Phone, MapPin, ReceiptText } from "lucide-react";
import { useTranslation } from "@/components/translation-context";
import { ScrollIndicator } from "@/components/scroll-indicator";
import Cookies from "js-cookie";

export default function TermsPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);
  const [alreadyAccepted, setAlreadyAccepted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cookie = Cookies.get("acceptedTerms");
    if (cookie === "true") {
      setAccepted(true);
      setAlreadyAccepted(true);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[650px] overflow-hidden"
        style={{
          backgroundImage: "url(/pages/hero-terms.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/50 dark:bg-black/50 text-orange-400 rounded-lg p-6 max-w-full overflow-hidden">
            <h1 className="text-orange-400 text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-shadow break-words">
              <ReceiptText className="inline h-10 w-10 sm:h-12 sm:w-12 stroke-white dark:stroke-gray-400 icon-shadow mr-2 align-middle" />
              {t("terms.hero.title")}
            </h1>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t("terms.one.title")}
              </h2>
              <p>{t("terms.one.description")}</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t("terms.two.title")}
              </h2>
              <p>{t("terms.two.description")}</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t("terms.three.title")}
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                {t("terms.three.one.title")}
              </h3>
              <p>{t("terms.three.one.description")}</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                {t("terms.three.two.title")}
              </h3>
              <p>{t("terms.three.two.description")}</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                {t("terms.three.three.title")}
              </h3>
              <p>{t("terms.three.three.description")}</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t("terms.four.title")}
              </h2>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{t("terms.four.check.one")}</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{t("terms.four.check.two")}</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{t("terms.four.check.three")}</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{t("terms.four.check.four")}</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t("terms.five.title")}
              </h2>
              <p>{t("terms.five.description")}</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t("terms.six.title")}
              </h2>
              <p>{t("terms.six.description")}</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t("terms.seven.title")}
              </h2>
              <p>{t("terms.seven.description")}</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t("terms.eight.title")}
              </h2>
              <p>{t("terms.eight.description")}</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t("terms.nine.title")}
              </h2>
              <p>{t("terms.nine.description")}</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {t("terms.ten.title")}
              </h2>
              <p>{t("terms.ten.description")}</p>
              <div className="p-4 grid grid-cols-2 gap-8">
                <Card className="text-center bg-orange-400 hover:scale-105 transition-all duration-300 relative border-none h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <ul className="space-y-2">
                      <li className="lex items-center text-gray-300 text-sm text-white">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 stroke-white" />
                          <span className="ml-2">
                            {t("terms.ten.email.pt")}
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center text-gray-300 text-sm text-white">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 stroke-white" />
                          <span className="ml-2">
                            {t("terms.ten.phone.pt")}
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start text-gray-300 text-sm text-white">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 stroke-white" />
                          <span className="ml-2">
                            {t("terms.ten.address.pt")}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center bg-orange-400 hover:scale-105 transition-all duration-300 relative border-none h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <ul className="space-y-2">
                      <li className="lex items-center text-gray-300 text-sm text-white">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 stroke-white" />
                          <span className="ml-2">
                            {t("terms.ten.email.br")}
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center text-gray-300 text-sm text-white">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 stroke-white" />
                          <span className="ml-2">
                            {t("terms.ten.phone.br")}
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start text-gray-300 text-sm text-white">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 stroke-white" />
                          <span className="ml-2">
                            {t("terms.ten.address.br")}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col gap-4 mt-6">
                {/* Texto + checkbox */}
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    disabled={alreadyAccepted}
                    required
                  />
                  <span>{t("terms.conditions.check")}</span>
                </label>

                {/* Botão de concordar */}
                <Button
                  onClick={() => {
                    if (!accepted) {
                      alert("Você precisa aceitar os termos para continuar.");
                      return;
                    }
                    Cookies.set("acceptedTerms", "true", { expires: 365 });
                    setAlreadyAccepted(true);
                  }}
                  className="bg-orange-500 text-white hover:bg-orange-600"
                  disabled={alreadyAccepted}
                >
                  {t("terms.conditions.button")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
