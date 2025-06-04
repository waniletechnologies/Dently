import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MoreHorizontal, Edit, Trash2, CheckCircle } from 'lucide-react'
import { IoMdClose } from 'react-icons/io'
import { LuClock12 } from 'react-icons/lu'
const getStatusBadge = (status) => {
    switch (status) {
      case "Scheduled":
        return <Badge className="bg-[#e4f9ff] text-[#0B92B8] hover:bg-[#e0f2fe]">{status}</Badge>
      case "Cancelled":
        return <Badge className="bg-[#FFE5E6] text-[#DC2626] hover:bg-[#fef2f2]">{status}</Badge>
      case "Completed":
        return <Badge className="bg-[#EFFAF6] text-[#114439] hover:bg-[#effaf6]">{status}</Badge>
      case "Paid":
        return <Badge className="bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]">{status}</Badge>
      case "Not Booked":
        return <Badge className="bg-[#FFE5E6] text-[#E63E65] hover:bg-[#fef2f2]"><IoMdClose/> {status}</Badge>
      case "Pending":
        return <Badge className="bg-[#FEF5E0] text-[#E1B348] hover:bg-[#FEF5E0]"><LuClock12/> {status}</Badge>
      default:
        return <Badge className="bg-[#f0f0f0] text-[#848484] hover:bg-[#f0f0f0]">{status}</Badge>
    }
  }

const Appointments = ({patient}) => {
  return (
    <div>
    <h3 className="text-lg font-medium text-[#171717] mb-4">Appointment History</h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Provider</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {patient.appointments.map((appointment) => (
          <TableRow key={appointment.id}>
            <TableCell>{appointment.date}</TableCell>
            <TableCell>{appointment.provider}</TableCell>
            <TableCell>{appointment.type}</TableCell>
            <TableCell>{getStatusBadge(appointment.status)}</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Edit className="h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 text-[#dc2626]">
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 text-[#10b981]">
                    <CheckCircle className="h-4 w-4" />
                    Mark as Completed
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default Appointments