import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Banknote, CheckSquare, CreditCard } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const data = [
  {
    id: 1,
    referrer: { name: "Sarah Johnson", email: "sarah@example.com" },
    patient: "John Smith",
    date: "Apr 10, 2025",
    amount: 32.5,
    status: "Paid",
    paymentMethod: "-",
    processed: false,
  },
  {
    id: 2,
    referrer: { name: "Jane Anderson", email: "jane@example.com" },
    patient: "Emma Wilson",
    date: "May 5, 2025",
    amount: 45.5,
    status: "Pending",
    paymentMethod: "Bank",
    processed: true,
  },
  {
    id: 3,
    referrer: { name: "Emma Wilson", email: "emma@example.com" },
    patient: "John Smith",
    date: "May 1, 2025",
    amount: 25.5,
    status: "Applied",
    paymentMethod: "Credit",
    processed: true,
  },
];

const statusBadge = {
  Paid: <Badge className="bg-green-100 text-green-700 border-none">Paid</Badge>,
  Pending: <Badge className="bg-yellow-100 text-yellow-700 border-none">Pending</Badge>,
  Applied: <Badge className="bg-blue-100 text-blue-700 border-none">Applied</Badge>,
} as const;

type Status = keyof typeof statusBadge;

export default function CommissionPayment() {
  return (
    <div className="bg-white rounded-xl p-4 w-full overflow-x-auto font-sans">
      <Table className="shadow-none border-none">
        <TableHeader>
          <TableRow>
            <TableHead>Referrer</TableHead>
            <TableHead>Referred Patient</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium text-[15px] text-[#222]">{row.referrer.name}</span>
                  <span className="text-xs text-gray-400">{row.referrer.email}</span>
                </div>
              </TableCell>
              <TableCell className="font-medium text-[15px] text-[#222]">{row.patient}</TableCell>
              <TableCell className="text-[15px] text-[#222]">{row.date}</TableCell>
              <TableCell className="text-[15px] text-[#222]">£{row.amount.toFixed(2)}</TableCell>
              <TableCell>{statusBadge[row.status as Status]}</TableCell>
              <TableCell className="text-[15px] text-[#222]">
                {row.paymentMethod}
                {row.processed && <span className="ml-2 text-xs text-gray-400">Processed</span>}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button type="button" className="p-1 rounded hover:bg-gray-100">
                      <MoreHorizontal className="w-5 h-5 text-gray-500" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-[180px] bg-[#F8FAFB] border-none shadow-lg">
                    <DropdownMenuItem className="flex items-center justify-between text-[#2A4B6A] font-medium focus:bg-gray-100">
                      Bank Transfer <Banknote className="w-4 h-4 ml-2 text-gray-500" />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center justify-between text-[#2A4B6A] font-medium focus:bg-gray-100">
                      Issue Check <CheckSquare className="w-4 h-4 ml-2 text-gray-500" />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center justify-between text-[#2A4B6A] font-medium focus:bg-gray-100">
                      Apply as Credit <CreditCard className="w-4 h-4 ml-2 text-gray-500" />
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