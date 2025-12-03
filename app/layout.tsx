import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Haamro Views Nepal – Breaking Nepal News, Live Updates & Trending Stories",
  description:
    "Haamro Views Nepal provides real-time breaking news from Nepal. Stay updated with live Nepal news, politics, technology, business, sports, entertainment, economy and national headlines.",
  keywords: [
    "Nepal news",
    "Nepali live news",
    "Breaking news Nepal",
    "Nepal trending news",
    "Nepal latest updates",
    "Nepal politics news",
    "Nepal technology news",
    "Kathmandu news",
    "Haamro Views Nepal",
    "Nepal headlines",
    "Nepali journalism"
  ],
  authors: [{ name: "Haamro Views Nepal" }],
  creator: "Hari Singh Joshi",
  publisher: "Haamro Views Nepal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },

  openGraph: {
    title: "Haamro Views Nepal – Nepal Latest News & Live Updates",
    description:
      "Trusted Nepali news platform delivering breaking news, trending stories, and in-depth analysis. Stay informed with real-time updates from across Nepal.",
    url: "https://www.haamroviewsnepal.com",
    siteName: "Haamro Views Nepal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Haamro Views Nepal – Latest Nepal News",
      }
    ],
    locale: "en_NP",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Haamro Views Nepal – Breaking Nepal News",
    description:
      "Live Nepali news updates and top stories across politics, business, sports, tech, lifestyle, and the nation.",
    images: ["/og-image.png"]
  },

 icons: {
  icon: [
    { url: "/logo.png", type: "image/png", sizes: "32x32" },
    { url: "/logo.png", type: "image/png", sizes: "16x16" }
  ],
  shortcut: "/icon.png",
  apple: "/icon.png"
},

}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" />
      </head>
      <body className={`${_geist.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
