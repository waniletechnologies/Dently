"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Phone, Edit } from "lucide-react"
import { callTrackingData } from "@/lib/db"
import Link from "next/link"

export function CallTable() {
  const getStatusBadge = (status: string, type: "booking" | "followup") => {
    const baseClasses = "text-xs font-medium"

    if (type === "booking") {
      switch (status) {
        case "Booked":
          return <Badge className={`${baseClasses} bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]`}>✓ Booked</Badge>
        case "Not Booked":
          return <Badge className={`${baseClasses} bg-[#fef2f2] text-[#dc2626] hover:bg-[#fef2f2]`}>✗ Not Booked</Badge>
        default:
          return <Badge className={`${baseClasses} bg-[#f0f0f0] text-[#848484] hover:bg-[#f0f0f0]`}>{status}</Badge>
      }
    } else {
      switch (status) {
        case "Done":
          return <Badge className={`${baseClasses} bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]`}>✓ Done</Badge>
        case "Pending":
          return <Badge className={`${baseClasses} bg-[#fef3cd] text-[#92400e] hover:bg-[#fef3cd]`}>⚠ Pending</Badge>
        default:
          return <Badge className={`${baseClasses} bg-[#f0f0f0] text-[#848484] hover:bg-[#f0f0f0]`}>{status}</Badge>
      }
    }
  }

  return (
    <Card className="bg-white border-[#e1e1e1] mb-6">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#e1e1e1]">
              <TableHead className="text-[#848484] font-medium px-6 py-4">Caller Name</TableHead>
              <TableHead className="text-[#848484] font-medium">Number</TableHead>
              <TableHead className="text-[#848484] font-medium">Date & Time</TableHead>
              <TableHead className="text-[#848484] font-medium">Duration</TableHead>
              <TableHead className="text-[#848484] font-medium">Booking</TableHead>
              <TableHead className="text-[#848484] font-medium">Follow-up</TableHead>
              <TableHead className="text-[#848484] font-medium">Staff Member</TableHead>
              <TableHead className="text-[#848484] font-medium w-20"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {callTrackingData.calls.map((call) => (
              <TableRow key={call.id} className="border-b border-[#f0f0f0] hover:bg-[#f8f9fa]">
                <TableCell className="px-6 py-4">
                  <Link href={`/call-tracking/${call.id}`} className="text-[#171717] hover:text-[#ffa048]">
                    {call.callerName}
                  </Link>
                </TableCell>
                <TableCell className="text-[#171717]">{call.number}</TableCell>
                <TableCell className="text-[#171717]">{call.dateTime}</TableCell>
                <TableCell className="text-[#171717]">{call.duration}</TableCell>
                <TableCell>{getStatusBadge(call.bookingStatus, "booking")}</TableCell>
                <TableCell>{getStatusBadge(call.followUpStatus, "followup")}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-[#10b981] text-white text-xs">
                        {call.staffMember
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-[#171717] text-sm">{call.staffMember}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-[#ffa048] hover:text-[#f68a15]">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-[#848484] hover:text-[#171717]">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
