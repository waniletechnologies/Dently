"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

export function LeadsPagination({
  currentPage = 1,
  totalPages = 8,
  totalLeads = 12,
  onPageChange,
}) {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="text-sm text-[#848484]">1 of {totalLeads} leads shows</div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="text-[#848484] hover:text-[#171717]" disabled={currentPage === 1}>
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>

        <div className="flex items-center gap-1">
          <Button
            variant={currentPage === 1 ? "default" : "ghost"}
            size="sm"
            className={
              currentPage === 1 ? "bg-[#ffa048] text-white hover:bg-[#f68a15]" : "text-[#848484] hover:text-[#171717]"
            }
          >
            1
          </Button>
          <Button
            variant={currentPage === 2 ? "default" : "ghost"}
            size="sm"
            className={
              currentPage === 2 ? "bg-[#ffa048] text-white hover:bg-[#f68a15]" : "text-[#848484] hover:text-[#171717]"
            }
          >
            2
          </Button>
          <Button
            variant={currentPage === 3 ? "default" : "ghost"}
            size="sm"
            className={
              currentPage === 3 ? "bg-[#ffa048] text-white hover:bg-[#f68a15]" : "text-[#848484] hover:text-[#171717]"
            }
          >
            3
          </Button>
          <Button variant="ghost" size="sm" className="text-[#848484]">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="text-[#848484] hover:text-[#171717]"
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}
