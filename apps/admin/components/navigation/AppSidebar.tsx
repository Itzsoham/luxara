"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar"
import { cn } from "@workspace/ui/lib/utils"
import {
  Copy,
  LayoutDashboard,
  LogOut,
  Package,
  Palette,
  PanelLeft,
  ReceiptText,
  Ruler,
  Settings,
  Tv2,
} from "lucide-react"

// import Loading from "../Loading"

const AppSidebar = () => {
  //   const { user, isLoaded } = useUser()
  //   const { signOut } = useClerk()
  const pathname = usePathname()
  const { toggleSidebar } = useSidebar()

  const navLinks = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Tv2, label: "Billboards", href: "/billboard" },
    { icon: Copy, label: "Categories", href: "/category" },
    { icon: Ruler, label: "Sizes", href: "/size" },
    { icon: Palette, label: "Colors", href: "/color" },
    { icon: Package, label: "Products", href: "/product" },
    { icon: ReceiptText, label: "Orders", href: "/order" },
    { icon: Settings, label: "Settings", href: "/setting" },
  ]

  return (
    <Sidebar
      collapsible="icon"
      style={{ height: "100vh" }}
      className="border-none bg-customgreys-primarybg shadow-lg"
    >
      <SidebarHeader>
        <SidebarMenu className="">
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              onClick={() => toggleSidebar()}
              className="group hover:bg-customgreys-secondarybg"
            >
              <div className="flex justify-between items-center gap-5  pr-1 h-10 w-full group-data-[collapsible=icon]:ml-1 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:px-0 group">
                <div className="flex items-center gap-3">
                  <Image
                    src="/icon.png"
                    alt="logo"
                    width={25}
                    height={20}
                    className="transition duration-200 group-data-[collapsible=icon]:group-hover:brightness-75   w-auto"
                  />
                  <p className="text-lg font-bold group-data-[collapsible=icon]:hidden">
                    Luxara
                  </p>
                </div>
                <PanelLeft className=" text-gray-400 w-5 h-5 group-data-[collapsible=icon]:hidden" />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="mt-0 gap-0">
          {navLinks.map(link => {
            const isActive = pathname.startsWith(link.href)
            return (
              <SidebarMenuItem
                key={link.href}
                className={cn(
                  "group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:py-2 hover:bg-customgreys-secondarybg",
                  isActive && "dark:bg-gray-800 bg-gray-300",
                )}
              >
                <SidebarMenuButton
                  asChild
                  size="lg"
                  className={cn(
                    "pl-6 hover:bg-customgreys-secondarybg group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center",
                    !isActive && "text-customgreys-dirtyGrey ",
                  )}
                >
                  <Link
                    href={link.href}
                    className="relative flex items-center"
                    scroll={false}
                  >
                    <link.icon
                      className={
                        isActive ? "dark:text-white-50" : "dark:text-gray-500"
                      }
                    />
                    <span
                      className={cn(
                        " font-medium text-md ml-4 group-data-[collapsible=icon]:hidden",
                        isActive ? "dark:text-white-50" : "dark:text-gray-500",
                      )}
                    >
                      {link.label}
                    </span>
                  </Link>
                </SidebarMenuButton>
                {isActive && (
                  <div className="absolute right-0 top-0 h-full w-[4px] bg-primary-750" />
                )}
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button
                // onClick={() => signOut()}
                className="text-primary-700 pl-8"
              >
                <LogOut className="mr-2 size-6" />
                <span>Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
