"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import enTranslations from "./translations/en.json"
import zhTranslations from "./translations/zh.json"
import ruTranslations from "./translations/ru.json"

type Language = "en" | "zh" | "ru"

type Translations = {
  [key in Language]: {
    [key: string]: any
  }
}

const translations: Translations = {
  en: enTranslations,
  zh: zhTranslations,
  ru: ruTranslations,
}

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en")

  useEffect(() => {
    // Auto-detect system language
    const detectLanguage = () => {
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "zh") return "zh"
      if (browserLang === "ru") return "ru"
      return "en" // Default to English
    }

    setCurrentLanguage(detectLanguage())
  }, [])

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[currentLanguage]

    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }

    return value || key
  }

  return <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
