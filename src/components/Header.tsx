"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdNotifications } from "react-icons/md"
import { FiSidebar } from "react-icons/fi"
import { TbSmartHome } from "react-icons/tb"
import { profile } from "../../public/images"
import { useSidebar } from "@/contexts/SidebarContext"
import { Button } from "./ui/button"

export function Header() {
  const { toggle } = useSidebar()

  return (
    <header className="bg-white border-b border-[#e1e1e1] text-[var(--black-color)] px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggle}
            className="md:hidden"
          >
            <FiSidebar className="h-5 w-5" />
          </Button>
          <span className="h-5 w-[1px] bg-[#e1e1e1] md:hidden"/>
          <div className="flex items-center gap-2 text-sm">
            <TbSmartHome className="h-5 w-5" />
            <span className="hidden xs:inline">Dashboard</span>
            <span className="hidden xs:inline">/</span>
            <span className="hidden xs:inline">Overview</span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <MdNotifications className="h-5 w-5" />
          <Avatar className="h-8 w-8">
            <AvatarImage src={profile.src} alt="profile" />
            <AvatarFallback className="bg-[#f4f5f7] text-[#171717]">JM</AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline text-sm font-medium text-[#171717]">John Miles</span>
        </div>
      </div>
    </header>
  )
}
