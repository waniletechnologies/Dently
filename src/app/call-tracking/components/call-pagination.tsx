"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

interface CallPaginationProps {
  currentPage?: number
  totalPages?: number
  totalCalls?: number
  onPageChange?: (page: number) => void
}

export function CallPagination({ currentPage = 1, totalPages = 8, totalCalls = 8, onPageChange }: CallPaginationProps) {
  const handlePageChange = (page: number) => {
    onPageChange?.(page)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-sm text-[#848484] order-2 sm:order-1">1 of {totalCalls} calls shows</div>

      <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto justify-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-[#848484] hover:text-[#171717] hidden sm:flex" 
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>

        <Button 
          variant="ghost" 
          size="icon" 
          className="text-[#848484] hover:text-[#171717] sm:hidden" 
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-1">
          <Button
            variant={currentPage === 1 ? "default" : "ghost"}
            size="sm"
            className={
              currentPage === 1 ? "bg-[#ffa048] text-white hover:bg-[#f68a15]" : "text-[#848484] hover:text-[#171717]"
            }
            onClick={() => handlePageChange(1)}
          >
            1
          </Button>
          <Button
            variant={currentPage === 2 ? "default" : "ghost"}
            size="sm"
            className={
              currentPage === 2 ? "bg-[#ffa048] text-white hover:bg-[#f68a15]" : "text-[#848484] hover:text-[#171717]"
            }
            onClick={() => handlePageChange(2)}
          >
            2
          </Button>
          <Button
            variant={currentPage === 3 ? "default" : "ghost"}
            size="sm"
            className={
              currentPage === 3 ? "bg-[#ffa048] text-white hover:bg-[#f68a15]" : "text-[#848484] hover:text-[#171717]"
            }
            onClick={() => handlePageChange(3)}
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
          className="text-[#848484] hover:text-[#171717] hidden sm:flex" 
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>

        <Button 
          variant="ghost" 
          size="icon" 
          className="text-[#848484] hover:text-[#171717] sm:hidden" 
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
