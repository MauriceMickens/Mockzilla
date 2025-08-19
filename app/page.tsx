"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: any
  }
}

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const XMarkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const trackEvent = (eventName: string, data?: any) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", eventName, data)
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Track lead event
      trackEvent("Lead", { email })

      // Submit to both MailerLite and Zapier
      const promises = [
        // MailerLite submission
        fetch("YOUR_MAILERLITE_FORM_ACTION", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            groups: ["GROUP_ID"],
            fields: {
              source: "landing_page",
              campaign: "starter_pack",
            },
          }),
        }),

        // Zapier webhook
        fetch("YOUR_ZAPIER_WEBHOOK_URL", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            source: "mockzilla_landing",
            timestamp: new Date().toISOString(),
            variant: "starter-pack",
          }),
        }),
      ]

      await Promise.all(promises)

      window.location.href = "/thanks"
    } catch (error) {
      console.error("Error submitting email:", error)
      // Still redirect to thanks page even if there's an error
      window.location.href = "/thanks"
    } finally {
      setIsSubmitting(false)
    }
  }

  const faqs = [
    {
      question: "What roles are supported?",
      answer:
        "We support Software Engineering, Data Science/Analytics, Product Management, and Finance roles with specialized question banks for each.",
    },
    {
      question: "How is feedback generated?",
      answer:
        "Our AI analyzes your responses using GPT-4o, evaluating technical accuracy, communication clarity, and industry best practices to provide actionable insights.",
    },
    {
      question: "Can my coach see my sessions?",
      answer:
        "Only if you explicitly share them. All sessions are private by default, but you can export reports to share with mentors or coaches.",
    },
    {
      question: "Is my data private?",
      answer:
        "Absolutely. We use enterprise-grade encryption and never share your interview data. You can delete your account and all data at any time.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee for paid plans. If you're not satisfied, we'll refund your subscription in full.",
    },
  ]

  return (
    <div className={`${inter.className} ${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition-colors duration-300">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1307223167660720&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Sticky Navigation */}
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#121212]/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-2xl text-[#32D06D]">Mockzilla</div>
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="#features"
                  className="text-[#475569] dark:text-gray-300 hover:text-[#32D06D] transition-colors"
                  onClick={() => trackEvent("ViewContent", { content_name: "features" })}
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="text-[#475569] dark:text-gray-300 hover:text-[#32D06D] transition-colors"
                  onClick={() => trackEvent("ViewContent", { content_name: "pricing" })}
                >
                  Pricing
                </Link>
                <Link
                  href="#faq"
                  className="text-[#475569] dark:text-gray-300 hover:text-[#32D06D] transition-colors"
                  onClick={() => trackEvent("ViewContent", { content_name: "faq" })}
                >
                  FAQ
                </Link>
                <Link
                  href="#lead-form"
                  className="bg-[#32D06D] text-white px-4 py-2 rounded-lg hover:bg-[#2AB85A] transition-all duration-200 hover:scale-105"
                  onClick={() => trackEvent("InitiateCheckout")}
                >
                  Get Started
                </Link>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? "☀️" : "🌙"}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Crush your next interview with <span className="text-[#32D06D]">Mockzilla</span>
                </h1>
                <p className="text-xl text-[#475569] dark:text-gray-300">
                  Realistic role-specific questions, instant AI feedback, all in 15 minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    id="cta-hero"
                    onClick={() => {
                      trackEvent("InitiateCheckout", { source: "hero" })
                      document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="bg-[#32D06D] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2AB85A] transition-all duration-200 hover:scale-105"
                  >
                    Get the free 5-question starter pack
                  </button>
                  <button
                    className="text-[#32D06D] hover:text-[#2AB85A] transition-colors underline"
                    onClick={() => trackEvent("ViewContent", { content_name: "demo" })}
                  >
                    Watch 30-sec demo
                  </button>
                </div>
              </div>
              <div className="flex justify-center animate-fade">
                <img
                  src="/images/mockzilla-mascot.png"
                  alt="Mockzilla mascot - friendly green dinosaur with headset ready to help with interview practice"
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade">
              <h2 className="text-4xl font-bold mb-4">Why choose Mockzilla?</h2>
              <p className="text-xl text-[#475569] dark:text-gray-300">
                Everything you need to ace your next interview
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow animate-fade">
                <div className="w-16 h-16 bg-[#32D06D] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Role-specific drills</h3>
                <p className="text-[#475569] dark:text-gray-300">
                  SWE, Data, PM, Finance - tailored questions for your field
                </p>
              </div>
              <div className="text-center p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow animate-fade">
                <div className="w-16 h-16 bg-[#32D06D] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Instant actionable feedback</h3>
                <p className="text-[#475569] dark:text-gray-300">Scores & tips powered by AI, no fluff</p>
              </div>
              <div className="text-center p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow animate-fade">
                <div className="w-16 h-16 bg-[#32D06D] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Cheaper than a human coach</h3>
                <p className="text-[#475569] dark:text-gray-300">Unlimited practice {"<"} cost of 1 latte/week</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Strip */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto animate-fade">
            <h2 className="text-3xl font-bold text-center mb-12">Human coach vs Mockzilla</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6">Human Interview Coach</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <XMarkIcon className="w-5 h-5 text-red-500 mr-3" />
                    $100-200 per session
                  </li>
                  <li className="flex items-center">
                    <XMarkIcon className="w-5 h-5 text-red-500 mr-3" />
                    Schedule around their availability
                  </li>
                  <li className="flex items-center">
                    <XMarkIcon className="w-5 h-5 text-red-500 mr-3" />
                    2-4 sessions per month max
                  </li>
                  <li className="flex items-center">
                    <XMarkIcon className="w-5 h-5 text-red-500 mr-3" />
                    Generic feedback
                  </li>
                </ul>
              </div>
              <div className="bg-[#32D06D] text-white p-8 rounded-xl transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-6">Mockzilla</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-3" />
                    $20/month unlimited
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-3" />
                    Practice anytime, 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-3" />
                    Unlimited sessions
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-3" />
                    AI-powered insights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto animate-fade">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
              <p className="text-xl text-[#475569] dark:text-gray-300">Choose the plan that fits your needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl text-center border border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold mb-4">FREE</div>
                <p className="text-[#475569] dark:text-gray-300 mb-6">1 practice session</p>
                <button
                  className="w-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                  onClick={() => trackEvent("InitiateCheckout", { plan: "starter" })}
                >
                  Start for Free
                </button>
              </div>
              <div className="bg-[#32D06D] text-white p-8 rounded-xl text-center transform hover:scale-105 transition-transform border-2 border-[#32D06D]">
                <h3 className="text-2xl font-bold mb-4">Unlimited</h3>
                <div className="text-4xl font-bold mb-4">
                  $20<span className="text-lg">/mo</span>
                </div>
                <p className="mb-6">Unlimited practice sessions</p>
                <button
                  className="w-full bg-white text-[#32D06D] py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                  onClick={() => trackEvent("InitiateCheckout", { plan: "unlimited" })}
                >
                  Start for Free
                </button>
              </div>
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl text-center border border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-bold mb-4">Bootcamp Plan</h3>
                <div className="text-4xl font-bold mb-4">
                  $500<span className="text-lg">/mo</span>
                </div>
                <p className="text-[#475569] dark:text-gray-300 mb-6">50 student seats</p>
                <button
                  className="w-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                  onClick={() => trackEvent("InitiateCheckout", { plan: "bootcamp" })}
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Email Capture Form */}
        <section id="lead-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#32D06D]">
          <div className="max-w-2xl mx-auto text-center animate-fade">
            <div className="bg-white dark:bg-gray-800 p-12 rounded-2xl shadow-2xl">
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-[#32D06D] focus:border-transparent text-gray-900"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#32D06D] text-white py-3 rounded-lg hover:bg-[#2AB85A] transition-all duration-200 hover:scale-105 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Get My Free Starter Pack"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenFaq(openFaq === index ? null : index)
                      trackEvent("ViewContent", { content_name: `faq_${index}` })
                    }}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <ChevronDownIcon
                      className={`w-5 h-5 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-[#475569] dark:text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="font-bold text-xl text-[#32D06D]">Mockzilla</div>
                <span className="text-[#475569] dark:text-gray-400">© {new Date().getFullYear()} Mockzilla.io</span>
              </div>
              <div className="flex items-center space-x-6">
                <Link href="#" className="text-[#475569] dark:text-gray-400 hover:text-[#32D06D] transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="text-[#475569] dark:text-gray-400 hover:text-[#32D06D] transition-colors">
                  Terms
                </Link>
                <Link
                  href="mailto:support@mockzilla.io"
                  className="text-[#475569] dark:text-gray-400 hover:text-[#32D06D] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">Powered by GPT-4o</div>
          </div>
        </footer>
      </div>
    </div>
  )
}
