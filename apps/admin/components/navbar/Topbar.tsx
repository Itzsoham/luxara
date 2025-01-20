"use client"

import { Bell, BookOpen } from "lucide-react"
import Link from "next/link"
import React from "react"

import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { cn } from "@workspace/ui/lib/utils"

const Topbar = () => {
  //   const { user } = useUser();
  //   const userRole = user?.publicMetadata?.userType as "student" | "teacher";

  return (
    <nav className="w-full flex justify-center bg-customgreys-primarybg">
      <div className="flex justify-between items-center w-3/4 py-8">
        <div className="flex justify-between items-center gap-14">
          <div className="md:hidden">
            <SidebarTrigger className="text-customgreys-dirtyGrey hover:text-white-50 transition-colors" />
          </div>

          <div className="flex items-center gap-4">
            <div className="group relative">
              <Link
                href="/search"
                className={cn("dashboard-navbar__search-input", {
                  //   "!bg-customgreys-secondarybg": isCoursePage,
                })}
                scroll={false}
              >
                <span className="hidden sm:inline">Search Courses</span>
                <span className="sm:hidden">Search</span>
              </Link>
              <BookOpen
                className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 text-customgreys-dirtyGrey transition-all duration-300"
                size={18}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="relative w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="absolute top-0 right-0 bg-blue-500 h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full"></span>
            <Bell className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* <UserButton
            appearance={{
              baseTheme: dark,
              elements: {
                userButtonOuterIdentifier: "text-customgreys-dirtyGrey",
                userButtonBox: "scale-90 sm:scale-100",
              },
            }}
            showName={true}
            userProfileMode="navigation"
            userProfileUrl={
              userRole === "teacher" ? "/teacher/profile" : "/user/profile"
            }
          /> */}
        </div>
      </div>
    </nav>
  )
}

export default Topbar
