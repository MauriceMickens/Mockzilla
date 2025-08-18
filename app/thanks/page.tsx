"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: any
  }
}

export default function ThanksPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    // Fire Lead tracking event immediately when page loads
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead")
      console.log("[v0] Lead event fired on thanks page")
    }

    // Start countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Thank you!</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Your starter pack is on its way to your inbox.
          </p>
          <div className="bg-[#32D06D] text-white px-6 py-3 rounded-lg inline-block">
            <p className="text-sm">
              Redirecting to home in <span className="font-bold">{countdown}</span> seconds...
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
          <p>Check your email for 5 practice questions tailored to your role.</p>
          <p>Ready to unlock unlimited practice? Upgrade anytime!</p>
        </div>
      </div>
    </div>
  )
}
