import AppSidebar from "@/components/navigation/AppSidebar"
import Topbar from "@/components/navigation/Topbar"
import { SidebarProvider } from "@workspace/ui/components/sidebar"
import React, { ReactNode } from "react"

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <main className="min-h-screen w-full bg-customgreys-primarybg flex">
        <AppSidebar />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-grow min-h-screen transition-all duration-500 ease-in-out overflow-y-auto bg-customgreys-secondarybg;">
            <Topbar />

            <div className="px-8 py-4">{children}</div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default RootLayout
