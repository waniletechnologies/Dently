"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  Phone,
  Mail,
  Eye,
  MoreHorizontal,
  Edit,
  Trash2,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  ExternalLink,
} from "lucide-react"
import { patientManagementData } from "@/lib/db"
import Link from "next/link"

export function PatientDetails({ patientId }) {
  const patient = patientManagementData.patientDetails[patientId ]

  if (!patient) {
    return <div>Patient not found</div>
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "Scheduled":
        return <Badge className="bg-[#e0f2fe] text-[#0369a1] hover:bg-[#e0f2fe]">{status}</Badge>
      case "Cancelled":
        return <Badge className="bg-[#fef2f2] text-[#dc2626] hover:bg-[#fef2f2]">{status}</Badge>
      case "Completed":
        return <Badge className="bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]">{status}</Badge>
      case "Paid":
        return <Badge className="bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]">{status}</Badge>
      case "Not Booked":
        return <Badge className="bg-[#fef2f2] text-[#dc2626] hover:bg-[#fef2f2]">✗ {status}</Badge>
      case "Pending":
        return <Badge className="bg-[#fef3cd] text-[#92400e] hover:bg-[#fef3cd]">⚠ {status}</Badge>
      default:
        return <Badge className="bg-[#f0f0f0] text-[#848484] hover:bg-[#f0f0f0]">{status}</Badge>
    }
  }

  const getDirectionIcon = (direction) => {
    return direction === "Outbound" ? (
      <TrendingUp className="h-4 w-4 text-[#10b981]" />
    ) : (
      <TrendingDown className="h-4 w-4 text-[#3b82f6]" />
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/client-management/patients">
            <Button variant="ghost" className="flex items-center gap-2 text-[#848484] hover:text-[#171717]">
              <ArrowLeft className="h-4 w-4" />
              Back to Patients list
            </Button>
          </Link>
        </div>
        <Button className="bg-[#ffa048] hover:bg-[#f68a15] text-white">Book Appointment</Button>
      </div>

      {/* Patient Info Header */}
      <div className="bg-white rounded-lg border border-[#e1e1e1] p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-semibold text-[#171717]">Patient Details</h1>
            <p className="text-sm text-[#848484]">
              Viewing details for {patient.name} (ID: {patient.dentallyId})
            </p>
          </div>
          <Button variant="outline" className="text-[#171717]">
            Edit Profile
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-[#f8f9fa]">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="medical">Medical</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="calls">Calls</TabsTrigger>
            <TabsTrigger value="gold-card">Dentist Gold Card</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-medium text-[#171717] mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#ffa048]" />
                    <div>
                      <p className="text-sm text-[#848484]">Phone</p>
                      <p className="text-[#171717] font-medium">{patient.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#ffa048]" />
                    <div>
                      <p className="text-sm text-[#848484]">Email</p>
                      <p className="text-[#171717] font-medium">{patient.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-[#ffa048]" />
                    <div>
                      <p className="text-sm text-[#848484]">View Financial Data</p>
                      <Button
                        variant="outline"
                        className="mt-1 text-[#ffa048] border-[#ffa048] hover:bg-[#ffa048] hover:text-white"
                      >
                        View →
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#848484] mb-2">Enrolled in Dentist Gold Card?</p>
                    <Select defaultValue="yes">
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#171717] mb-4">Dentally Integration</h3>
              <div className="bg-[#f8f9fa] rounded-lg p-4">
                <Badge className="bg-[#ffa048] text-white mb-2">Synced</Badge>
                <p className="text-sm text-[#848484] mb-1">Dentally ID: {patient.dentallyId}</p>
                <p className="text-sm text-[#848484]">Last synced: {patient.lastSync}</p>
              </div>
            </div>
          </TabsContent>

          {/* Medical Tab */}
          <TabsContent value="medical" className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-medium text-[#171717] mb-4">Medical History</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    Add Notes
                  </Button>
                  <Button className="bg-[#ffa048] hover:bg-[#f68a15] text-white flex items-center gap-2">
                    Add Prescription
                  </Button>
                </div>
                <Button className="bg-[#ffa048] hover:bg-[#f68a15] text-white">Submit</Button>
              </div>
            </div>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6 mt-6">
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
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-medium text-[#171717] mb-4">Billing History</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patient.billingHistory.map((bill) => (
                    <TableRow key={bill.id}>
                      <TableCell>{bill.date}</TableCell>
                      <TableCell>{bill.description}</TableCell>
                      <TableCell>{bill.amount}</TableCell>
                      <TableCell>{getStatusBadge(bill.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Calls Tab */}
          <TabsContent value="calls" className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-medium text-[#171717] mb-4">Calls History</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Direction</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Booking</TableHead>
                    <TableHead>Follow-up</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patient.callsHistory.map((call) => (
                    <TableRow key={call.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getDirectionIcon(call.direction)}
                          <span className={call.direction === "Outbound" ? "text-[#10b981]" : "text-[#3b82f6]"}>
                            {call.direction}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{call.dateTime}</TableCell>
                      <TableCell>{call.duration}</TableCell>
                      <TableCell>{getStatusBadge(call.booking)}</TableCell>
                      <TableCell>{getStatusBadge(call.followUp)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Dentist Gold Card Tab */}
          <TabsContent value="gold-card" className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-medium text-[#171717] mb-4">Dentist Gold Card</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Refer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Commission</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patient.goldCardReferrals.map((referral) => (
                    <TableRow key={referral.id}>
                      <TableCell>{referral.refer}</TableCell>
                      <TableCell>{referral.date}</TableCell>
                      <TableCell>{referral.commission}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
