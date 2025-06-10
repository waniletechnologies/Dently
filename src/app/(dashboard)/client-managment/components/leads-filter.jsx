"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, ChevronDown, Search } from "lucide-react"
import { clientManagementData } from "@/lib/db"

export function LeadsFilter({ onAddLead, onFilterChange }) {
  const [timeFrame, setTimeFrame] = useState("All")
  const [status, setStatus] = useState("Status")
  const [source, setSource] = useState("Source")
  const [searchQuery, setSearchQuery] = useState("")

  const handleTimeFrameChange = (value) => {
    setTimeFrame(value)
    onFilterChange({ timeFrame: value, status, source, searchQuery })
  }

  const handleStatusChange = (value) => {
    setStatus(value)
    onFilterChange({ timeFrame, status: value, source, searchQuery })
  }

  const handleSourceChange = (value) => {
    setSource(value)
    onFilterChange({ timeFrame, status, source: value, searchQuery })
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    onFilterChange({ timeFrame, status, source, searchQuery: e.target.value })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between">
      <div className="flex flex-wrap gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 bg-white text-[#595858]">
              <Plus className="h-4 w-4" />
              {timeFrame}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            {clientManagementData.filterOptions.timeFrames.map((option) => (
              <DropdownMenuItem key={option.value} onClick={() => handleTimeFrameChange(option.label)}>
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 bg-white text-[#595858]">
              {status}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            {clientManagementData.filterOptions.statuses.map((option) => (
              <DropdownMenuItem key={option.value} onClick={() => handleStatusChange(option.label)}>
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 bg-white text-[#595858]">
              {source}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            {clientManagementData.filterOptions.sources.map((option) => (
              <DropdownMenuItem key={option.value} onClick={() => handleSourceChange(option.label)}>
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#848484]" />
          <Input
            placeholder="Search Leads"
            className="pl-10 bg-white w-[300px]"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <Button className="bg-[#ffa048] hover:bg-[#f68a15] text-white flex items-center gap-2" onClick={onAddLead}>
        <Plus className="h-4 w-4" />
        Add Lead
      </Button>
    </div>
  )
}
