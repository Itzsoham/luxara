import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "@workspace/ui/globals.css"
import { Providers } from "@workspace/ui/main/providers"
import { Toaster } from "@workspace/ui/components/toaster"

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`${outfit.variable} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
