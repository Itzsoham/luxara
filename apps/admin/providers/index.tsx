"use client"

import StoreProvider from "@/state/redux"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import * as React from "react"
import ModalProvider from "./ModalProvider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <StoreProvider>
        <ModalProvider />
        {children}
      </StoreProvider>
    </NextThemesProvider>
  )
}
0
