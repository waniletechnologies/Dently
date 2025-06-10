"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, EllipsisIcon, } from "lucide-react"
import Link from "next/link"
import { financialData } from "@/lib/db"
import { LuClock12 } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import Image from "next/image"

export function FinanceTable({ data, onViewTransaction }) {
  const getStatusBadge = (status) => {
    const baseClasses = "text-xs font-medium"

    switch (status) {
      case "Paid":
        return <Badge className={`${baseClasses} bg-[#EFFAF6] text-[#114439] hover:bg-[#effaf6]`}>Paid</Badge>
      case "Pending":
        return <Badge className={`${baseClasses} bg-[#FFF7E4] text-[#CCAB2B] hover:bg-[#FEF5E0]`}>Pending</Badge>
      case "Overdue":
        return <Badge className={`${baseClasses} bg-[#FFE5E6] text-[#E63E65] hover:bg-[#FEF5E0]`}>Overdue</Badge>
      default:
        return <Badge className={`${baseClasses} bg-[#f0f0f0] text-[#848484] hover:bg-[#f0f0f0]`}>{status}</Badge>
    }
  }

  return (
    <Card className="bg-white border-[#e1e1e1] mb-6">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b text-[#2A2828] font-medium border-[#e1e1e1]">
              <TableHead className="text-[#2A2828]  px-6 py-4">Date</TableHead>
              <TableHead className="text-[#2A2828]">Patient</TableHead>
              <TableHead className="text-[#2A2828]">Description</TableHead>
              <TableHead className="text-[#2A2828]">Amount</TableHead>
              <TableHead className="text-[#2A2828]">Method</TableHead>
              <TableHead className="text-[#2A2828]">Status</TableHead>
              <TableHead className="text-[#2A2828] w-20">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((d) => (
              <TableRow key={d.id}
                onClick={() => onViewTransaction(d.id)}
                className="border-b border-[#f0f0f0] text-[#595858] hover:bg-[#f8f9fa]">
                <TableCell className="px-6 py-4">
                  <Button
                    variant="link"
                    className="text-[#171717] hover:text-primary p-0"
                  >
                    {d.date}
                  </Button>
                </TableCell>
                <TableCell className="text-[#171717]">{d.patient}</TableCell>
                <TableCell className="text-[#171717]">{d.description}</TableCell>
                <TableCell className="text-[#171717]">{d.amount}</TableCell>
                <TableCell className="text-[#171717]">{d.method}</TableCell>
                <TableCell>{getStatusBadge(d.status)}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <EllipsisIcon className="" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
