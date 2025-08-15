"use client";

import { TranslationProvider } from "@/components/translation-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  // Se quiser, detecte locale via cookies/headers e passe como prop
  return (
    <TranslationProvider /* initialLocale="pt" */>
      {children}
    </TranslationProvider>
  );
}
