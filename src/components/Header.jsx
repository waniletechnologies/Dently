"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell } from "lucide-react"
import { FiSidebar } from "react-icons/fi"
import { TbSmartHome } from "react-icons/tb"
import { profile } from "../../public/images"
import { useSidebar } from "@/contexts/SidebarContext"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import { Phone, Users, DollarSign, TrendingUp, Settings, BarChart3, TvMinimalPlay } from "lucide-react"
import { dashboardData } from "@/lib/db"

export function Header() {
  const { toggle } = useSidebar()
  const pathname = usePathname()

  // Import navigation items from db
  const { navigationItems } = dashboardData

  // Function to find the current navigation item and its parent
  const findCurrentNavItem = (path) => {
    // First check for exact match
    const mainItem = navigationItems.find(item => item.path === path)
    if (mainItem) return [mainItem]

    // Then check submenu items
    for (const item of navigationItems) {
      if (item.hasSubmenu && item.submenuItems) {
        const subItem = item.submenuItems.find(sub => sub.path === path)
        if (subItem) return [item, subItem]
      }
    }

    // If path starts with a nav item path (for dynamic routes)
    for (const item of navigationItems) {
      if (path.startsWith(item.path)) return [item]
      if (item.hasSubmenu && item.submenuItems) {
        for (const subItem of item.submenuItems) {
          if (path.startsWith(subItem.path)) return [item, subItem]
        }
      }
    }

    return [navigationItems[0]] // Default to Dashboard if no match found
  }

  // Generate breadcrumbs based on current path
  const currentNavItems = findCurrentNavItem(pathname)
  const breadcrumbs = currentNavItems.map(item => ({
    title: item.title,
    icon: item.icon || currentNavItems[0].icon // Use parent icon if submenu item
  }))

  // Add "Overview" as the last breadcrumb if not already present
  if (!breadcrumbs[breadcrumbs.length - 1].title.includes("Overview")) {
    breadcrumbs.push({ title: "Overview", icon: null })
  }

  const iconMap = {
    TbSmartHome,
    Phone,
    Users,
    DollarSign,
    TrendingUp,
    Settings,
    BarChart3,
    TvMinimalPlay,
  }

  return (
    <header className="bg-white border-b border-[#e1e1e1] text-[var(--black-color)] px-4 sm:px-6 py-4">
      <div className="flex sm:items-center items-start justify-between">
        <div className="flex sm:items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggle}
            className="md:hidden"
          >
            <FiSidebar className="h-5 w-5" />
          </Button>
          <span className="h-5 w-[1px] bg-[#e1e1e1] md:hidden"/>
          <div className="flex sm:items-center gap-2">
            <div className="flex items-center gap-2 text-sm text-[#848484] flex-wrap">
              {breadcrumbs.map((breadcrumb, index) => {
                const Icon = breadcrumb.icon ? iconMap[breadcrumb.icon] : null
                return (
                  <div key={breadcrumb.title} className="flex items-center gap-2">
                    {Icon && <Icon className="h-4 w-4 text-[#848484]" />}
                    <span>{breadcrumb.title}</span>
                    {index < breadcrumbs.length - 1 && (
                      <span className="text-[#e1e1e1]">/</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Bell className="h-5 w-5" />
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
