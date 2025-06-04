"use client"

import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"


export function AppointmentsHeader({ onAddAppointment }) {
  return (
    <div className="flex sm:items-center justify-between sm:flex-row flex-col gap-3 p-4 ">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
      </div>

      <Button onClick={onAddAppointment} className="bg-primary cursor-pointer max-w-[200px] hover:bg-primary/80 text-white px-6">
        + Add Appointment
      </Button>
    </div>
  )
}
