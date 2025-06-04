"use client"

import { Button } from "@/components/ui/button"
import { MdChevronRight } from "react-icons/md"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import { useSidebar } from "@/contexts/SidebarContext"

interface NavItemProps {
  title: string
  icon: React.ElementType
  path: string
  active: boolean
  hasSubmenu?: boolean
  submenuItems?: { title: string; path: string }[]
}

export function NavItem({ title, icon: Icon, path, active, hasSubmenu, submenuItems }: NavItemProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { close } = useSidebar()
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  const isActive = active || pathname === path || 
    (hasSubmenu && submenuItems?.some(item => pathname === item.path))

  const handleClick = () => {
    if (hasSubmenu) {
      setIsSubmenuOpen(!isSubmenuOpen)
    } else {
      router.push(path)
      close() // Close sidebar on mobile when navigating
    }
  }

  return (
    <div className="min-w-0">
      <Button
        variant="ghost"
        onClick={handleClick}
        className={`w-full justify-start cursor-pointer truncate ${
          isActive
            ? "bg-primary text-white hover:bg-primary/70 hover:text-white"
            : "text-[#848484] hover:text-[#171717] hover:bg-gray-50"
        }`}
      >
        <Icon className="mr-3 h-4 w-4 shrink-0" />
        <span className="truncate">{title}</span>
        {hasSubmenu && (
          <MdChevronRight 
            className={`ml-auto h-4 w-4 shrink-0 transition-transform ${isSubmenuOpen ? 'rotate-90' : ''}`} 
          />
        )}
      </Button>
      
      {hasSubmenu && isSubmenuOpen && (
        <div className="pl-4 mt-1 space-y-1 overflow-hidden">
          {submenuItems?.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              onClick={() => {
                router.push(item.path)
                close() // Close sidebar on mobile when navigating
              }}
              className={`w-full justify-start pl-7 cursor-pointer truncate ${
                pathname === item.path
                  ? "bg-primary text-white hover:bg-primary/70 hover:text-white"
                  : "text-[#848484] hover:text-[#171717] hover:bg-gray-50"
              }`}
            >
              <span className="truncate">{item.title}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  )
} 