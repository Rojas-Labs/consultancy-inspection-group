import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rojas Consultancy & Inspections Group",
  description: "Professional consultancy and inspection services",
  icons: {
    icon: [
      { url: '/logo-tr-black-bg.png', sizes: '512x512', type: 'image/png' },
      { url: '/logo-tr-black-bg.png', sizes: '1024x1024', type: 'image/png' }
    ],
    shortcut: '/logo-tr-black-bg.png',
    apple: [
      { url: '/logo-tr-black-bg.png', sizes: '512x512', type: 'image/png' }
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
