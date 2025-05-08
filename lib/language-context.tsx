"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "zh" | "ru"

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    home: "Home",
    team: "Our Team",
    machinery: "Machinery",
    philosophy: "Philosophy",
    contact: "Contact",
    hero_title: "Complete Consultancy and Inspections Services",
    hero_subtitle: "",
    hero_cta: "Learn More",
    team_title: "Our Team",
    team_subtitle: "Meet the experts behind our success",
    machinery_title: "Our Machinery",
    machinery_subtitle: "State-of-the-art equipment for optimal results",
    philosophy_title: "Our Philosophy",
    philosophy_subtitle: "The principles that guide our work",
    contact_title: "Get in Touch",
    contact_subtitle: "We'd love to hear from you",
    navigation: "Navigation",
    legal: "Legal",
    privacy_policy: "Privacy Policy",
    terms_of_service: "Terms of Service",
    cookie_policy: "Cookie Policy",
    all_rights_reserved: "All Rights Reserved",
    "footer.description":
      "We are dedicated to providing the best services with cutting-edge technology and expert team.",
    send_message: "Send Message",
    your_name: "Your Name",
    your_email: "Your Email",
    your_message: "Your Message",
  },
  zh: {
    home: "首页",
    team: "我们的团队",
    machinery: "机械设备",
    philosophy: "公司理念",
    contact: "联系我们",
    hero_title: "Complete Consultancy and Inspections Services",
    hero_subtitle: "",
    hero_cta: "了解更多",
    team_title: "我们的团队",
    team_subtitle: "认识我们成功背后的专家",
    machinery_title: "我们的机械设备",
    machinery_subtitle: "最先进的设备，最佳的结果",
    philosophy_title: "我们的理念",
    philosophy_subtitle: "指导我们工作的原则",
    contact_title: "联系我们",
    contact_subtitle: "我们很乐意听取您的意见",
    navigation: "导航",
    legal: "法律信息",
    privacy_policy: "隐私政策",
    terms_of_service: "服务条款",
    cookie_policy: "Cookie 政策",
    all_rights_reserved: "版权所有",
    "footer.description": "我们致力于提供最好的服务，拥有尖端技术和专业团队。",
    send_message: "发送消息",
    your_name: "您的姓名",
    your_email: "您的邮箱",
    your_message: "您的留言",
  },
  ru: {
    home: "Главная",
    team: "Наша Команда",
    machinery: "Оборудование",
    philosophy: "Философия",
    contact: "Контакты",
    hero_title: "Complete Consultancy and Inspections Services",
    hero_subtitle: "",
    hero_cta: "Узнать больше",
    team_title: "Наша Команда",
    team_subtitle: "Познакомьтесь с экспертами, стоящими за нашим успехом",
    machinery_title: "Наше Оборудование",
    machinery_subtitle: "Современное оборудование для оптимальных результатов",
    philosophy_title: "Наша Философия",
    philosophy_subtitle: "Принципы, которыми мы руководствуемся в работе",
    contact_title: "Свяжитесь с нами",
    contact_subtitle: "Мы будем рады услышать вас",
    navigation: "Навигация",
    legal: "Юридическая информация",
    privacy_policy: "Политика конфиденциальности",
    terms_of_service: "Условия использования",
    cookie_policy: "Политика использования файлов cookie",
    all_rights_reserved: "Все права защищены",
    "footer.description":
      "Мы стремимся предоставлять лучшие услуги с использованием передовых технологий и команды экспертов.",
    send_message: "Отправить сообщение",
    your_name: "Ваше имя",
    your_email: "Ваш email",
    your_message: "Ваше сообщение",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Auto-detect system language
    const detectLanguage = () => {
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "zh") return "zh"
      if (browserLang === "ru") return "ru"
      return "en" // Default to English
    }

    setLanguage(detectLanguage())
  }, [])

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
