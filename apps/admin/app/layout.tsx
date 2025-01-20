import type { Metadata } from "next"
import localFont from "next/font/local"
import "@workspace/ui/globals.css"

import { Providers } from "@workspace/ui/main/providers"
import { Toaster } from "@workspace/ui/components/toaster"

const opensans = localFont({
  src: "./fonts/OpenSansVF.ttf",
  variable: "--font-opensans",
  weight: "100 200 300 400 500 600 700 800 900",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Luxara Admin",
  description:
    "Luxara is E-commerce platform. This is the admin panel for Luxara.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${opensans.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
