"use client"
import { MoreHorizontal, Edit, Trash2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AppointmentsTable({
  appointments,
  onCancelAppointment,
  onCompleteAppointment,
}) {
  const getStatusBadge = (status )=> {
    switch (status) {
      case "Completed":
        return <Badge className="bg-[#EFFAF6] text-[#114439] hover:bg-[#effaf6]">Completed</Badge>
      case "Scheduled":
        return <Badge className="bg-[#e4f9ff] text-[#0B92B8] hover:bg-[#e0f2fe]">Scheduled</Badge>
      case "Cancelled":
        return <Badge className="bg-[#FFE5E6] text-[#DC2626] hover:bg-[#fef2f2]">Cancelled</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200">
            <TableHead className="font-medium text-gray-900 py-4">Patient</TableHead>
            <TableHead className="font-medium text-gray-900">Date</TableHead>
            <TableHead className="font-medium text-gray-900">Time</TableHead>
            <TableHead className="font-medium text-gray-900">Provider</TableHead>
            <TableHead className="font-medium text-gray-900">Type</TableHead>
            <TableHead className="font-medium text-gray-900">Status</TableHead>
            <TableHead className="font-medium text-gray-900">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id} className="border-b border-gray-100 hover:bg-gray-50">
              <TableCell className="font-medium text-gray-900 py-4">{appointment.patient}</TableCell>
              <TableCell className="text-gray-600">{appointment.date}</TableCell>
              <TableCell className="text-gray-600">{appointment.time}</TableCell>
              <TableCell className="text-gray-600">{appointment.provider}</TableCell>
              <TableCell className="text-gray-600">{appointment.type}</TableCell>
              <TableCell>{getStatusBadge(appointment.status)}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0 ">
                      <MoreHorizontal className="h-4 w-4 cursor-pointer" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                      <Edit className="h-4 w-4 " />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex items-center gap-2 text-red-600 cursor-pointer"
                      onClick={() => onCancelAppointment(appointment.id, appointment.patient)}
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                    {appointment.status !== "Completed" && (
                      <DropdownMenuItem
                        className="flex items-center gap-2 text-green-600"
                        onClick={() => onCompleteAppointment(appointment.id)}
                      >
                        <CheckCircle className="h-4 w-4" />
                        Mark as Completed
                      </DropdownMenuItem>
                    )}
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
