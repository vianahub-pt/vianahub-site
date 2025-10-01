"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { useTranslation } from "@/components/translation-context";

export default function CookieBanner() {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  // Função para ler cookies
  const getCookie = (name: string) => {
    if (typeof document === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
  };

  // Função para salvar cookie
  const setCookie = (name: string, value: string, days: number) => {
    if (typeof document === "undefined") return;
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  useEffect(() => {
    const consent = getCookie("cookieConsent");
    if (consent === "accepted") {
      setShowBanner(false); // já aceitou → não mostra
    } else {
      setShowBanner(true); // nunca aceitou → mostra
    }
  }, []);

  const acceptCookies = () => {
    setCookie("cookieConsent", "accepted", 365); // válido por 1 ano
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div className="text-sm text-gray-700">
              <p className="mb-2">
                <strong>{t("cookie.title")}</strong>
              </p>
              <p>{t("cookie.description")}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
            <Button
              size="sm"
              onClick={acceptCookies}
              className="bg-orange-600 hover:bg-orange-700 text-white"
              aria-label={t("cookie.button") || "Accept Cookies"}
            >
              {t("cookie.button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
