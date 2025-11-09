"use client"
import { Moon, Sun, Download, Share2 } from "lucide-react"
import { useState, useEffect } from "react"

interface HeaderProps {
  onThemeToggle: () => void
  currentTheme: "light" | "dark"
}

export default function Header({ onThemeToggle, currentTheme }: HeaderProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallButton, setShowInstallButton] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallButton(true)
    }

    window.addEventListener("beforeinstallprompt", handler)
    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstallApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === "accepted") {
        setShowInstallButton(false)
      }
      setDeferredPrompt(null)
    }
  }

  const handleShareApp = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "احصائيات المنهج",
          text: "تطبيق ذكي لتتبع تقدمك الدراسي",
          url: window.location.href,
        })
      } catch (err) {
        console.log("Share failed:", err)
      }
    }
  }

  return (
    <header className="relative z-20 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            📊
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              احصائيات المنهج
            </h1>
            <p className="text-xs text-gray-400">Statistics Dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {showInstallButton && (
            <button
              onClick={handleInstallApp}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 animate-pulse"
            >
              <Download size={18} />
              <span className="hidden sm:inline">تثبيت التطبيق</span>
            </button>
          )}

          <button
            onClick={handleShareApp}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
            aria-label="مشاركة التطبيق"
            title="مشاركة التطبيق"
          >
            <Share2 size={20} />
          </button>

          <button
            onClick={onThemeToggle}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
            aria-label="تبديل المظهر"
            title="تبديل المظهر"
          >
            {currentTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
