import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Eye, CheckCircle, Clock, Trash } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

const data = [
  {
    id: 1,
    patient: "Sarah Johnson",
    referrer: "John Smith",
    date: "Apr 10, 2025",
    appointment: "Apr 15, 2025",
    commission: "£32.50",
    status: "Completed",
  },
  {
    id: 2,
    patient: "Michael Brown",
    referrer: "Emma Wilson",
    date: "May 5, 2025",
    appointment: "May 1, 2025",
    commission: "-",
    status: "Scheduled",
  },
  {
    id: 3,
    patient: "Emma Davis",
    referrer: "John Smith",
    date: "May 1, 2025",
    appointment: "-",
    commission: "-",
    status: "New",
  },
];

const statusBadge = {
  Completed: <Badge className="bg-green-100 text-green-700 border-none">Completed</Badge>,
  Scheduled: <Badge className="bg-yellow-100 text-yellow-700 border-none">Scheduled</Badge>,
  New: <Badge className="bg-blue-100 text-blue-700 border-none">New</Badge>,
} as const;

type Status = keyof typeof statusBadge;

export default function ReferralsManagement() {
  return (
    <div className="bg-white rounded-xl p-4 w-full overflow-x-auto">
      <Table className="shadow-none border-none">
        <TableHeader>
          <TableRow>
            <TableHead>Patient Name</TableHead>
            <TableHead>Reffer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Appointment</TableHead>
            <TableHead>Commission</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium text-[15px] text-[#222]">{row.patient}</TableCell>
              <TableCell className="font-medium text-[15px] text-[#222]">{row.referrer}</TableCell>
              <TableCell className="text-[15px] text-[#222]">{row.date}</TableCell>
              <TableCell className="text-[15px] text-[#222]">{row.appointment}</TableCell>
              <TableCell className="text-[15px] text-[#222]">{row.commission}</TableCell>
              <TableCell>{statusBadge[row.status as Status]}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button type="button" className="p-1 rounded hover:bg-gray-100">
                      <MoreHorizontal className="w-5 h-5 text-gray-500" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-[200px] bg-[#F8FAFB] border-none shadow-lg">
                    <DropdownMenuItem className="flex items-center justify-between text-[#2A4B6A] font-medium focus:bg-gray-100">
                      View Details <Eye className="w-4 h-4 ml-2 text-gray-500" />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center justify-between text-green-700 font-medium focus:bg-green-50">
                      Mark as Completed <CheckCircle className="w-4 h-4 ml-2 text-green-500" />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center justify-between text-yellow-700 font-medium focus:bg-yellow-50">
                      Mark as Scheduled <Clock className="w-4 h-4 ml-2 text-yellow-500" />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center justify-between text-red-600 font-medium focus:bg-red-50" variant="destructive">
                      Cancel Referral <Trash className="w-4 h-4 ml-2 text-red-500" />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}