import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mockzilla – Crush your next interview",
  description:
    "AI-powered mock interviews with instant feedback. Practice role-specific questions for SWE, Data, PM & Finance. Get hired faster with Mockzilla.",
  keywords:
    "mock interview, AI interview practice, job interview prep, tech interviews, data science interviews, product management interviews, finance interviews",
  authors: [{ name: "Mockzilla" }],
  creator: "Mockzilla",
  publisher: "Mockzilla",
  openGraph: {
    title: "Mockzilla – Crush your next interview",
    description:
      "AI-powered mock interviews with instant feedback. Practice role-specific questions for SWE, Data, PM & Finance.",
    url: "https://mockzilla.io",
    siteName: "Mockzilla",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mockzilla - AI Mock Interview Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mockzilla – Crush your next interview",
    description:
      "AI-powered mock interviews with instant feedback. Practice role-specific questions for SWE, Data, PM & Finance.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
