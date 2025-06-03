"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Filter, Calendar, X } from "lucide-react"
import { callTrackingData } from "@/lib/db"

interface CallFiltersProps {
  onFiltersChange?: (filters: any) => void
}

export function CallFilters({ onFiltersChange }: CallFiltersProps) {
  const handleReset = () => {
    // Reset all filters
    console.log("Reset filters")
  }

  const handleApplyFilters = () => {
    // Apply current filters
    console.log("Apply filters")
  }

  return (
    <Card className="bg-white border-[#e1e1e1] mb-6">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-4 w-4 text-[#848484]" />
          <span className="text-sm font-medium text-[#171717]">Filter Calls</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium text-[#171717] mb-2 block">Date Range</label>
            <Select defaultValue="apr21-may5">
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#848484]" />
                  <SelectValue placeholder="Select date range" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {callTrackingData.filterOptions.dateRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-[#171717] mb-2 block">Booking Status</label>
            <Select defaultValue="not-booked">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Not Booked" />
              </SelectTrigger>
              <SelectContent>
                {callTrackingData.filterOptions.bookingStatuses.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-[#171717] mb-2 block">Follow up status</label>
            <Select defaultValue="not-booked">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Not Booked" />
              </SelectTrigger>
              <SelectContent>
                {callTrackingData.filterOptions.followUpStatuses.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-[#171717] mb-2 block">Staff Member</label>
            <Select defaultValue="not-booked">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Not Booked" />
              </SelectTrigger>
              <SelectContent>
                {callTrackingData.filterOptions.staffMembers.map((member) => (
                  <SelectItem key={member.value} value={member.value}>
                    {member.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={handleReset} className="flex items-center gap-2">
            <X className="h-4 w-4" />
            Reset
          </Button>
          <Button onClick={handleApplyFilters} className="bg-[#ffa048] hover:bg-[#f68a15] text-white">
            Apply Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
