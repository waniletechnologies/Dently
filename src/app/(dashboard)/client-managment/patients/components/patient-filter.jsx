"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, ChevronDown, Search } from "lucide-react"
import { patientManagementData } from "@/lib/db"


export function PatientsFilter({ onAddPatient, onFilterChange }) {
  const [timeFrame, setTimeFrame] = useState("All")
  const [status, setStatus] = useState("Status")
  const [date, setDate] = useState("Date")
  const [searchQuery, setSearchQuery] = useState("")

  const handleTimeFrameChange = (value) => {
    setTimeFrame(value)
    onFilterChange({ timeFrame: value, status, date, searchQuery })
  }

  const handleStatusChange = (value) => {
    setStatus(value)
    onFilterChange({ timeFrame, status: value, date, searchQuery })
  }

  const handleDateChange = (value) => {
    setDate(value)
    onFilterChange({ timeFrame, status, date: value, searchQuery })
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    onFilterChange({ timeFrame, status, date, searchQuery: e.target.value })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between">
      <div className="flex flex-wrap gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 bg-white text-[#595858]">
              {timeFrame}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            {patientManagementData.filterOptions.dateRanges.map((option) => (
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
            {patientManagementData.filterOptions.statuses.map((option) => (
              <DropdownMenuItem key={option.value} onClick={() => handleStatusChange(option.label)}>
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 bg-white text-[#595858]">
              {date}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            {patientManagementData.filterOptions.dateRanges.map((option) => (
              <DropdownMenuItem key={option.value} onClick={() => handleDateChange(option.label)}>
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#848484]" />
          <Input
            placeholder="Search Patients"
            className="pl-10 bg-white w-[300px]"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <Button className="bg-[#ffa048] hover:bg-[#f68a15] text-white flex items-center gap-2" onClick={onAddPatient}>
        <Plus className="h-4 w-4" />
        Add Patient
      </Button>
    </div>
  )
}
