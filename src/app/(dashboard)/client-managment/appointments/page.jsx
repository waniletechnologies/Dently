"use client"

import { useState } from "react"
import { AppointmentsHeader } from "./components/AppointmentHeader"
import { AppointmentsFilters } from "./components/AppointmentFilter"
import { AppointmentsTable } from "./components/AppointmetsTable"
import { AddAppointmentModal } from "./components/AddAppointment"
import { ConfirmationModal } from "./components/ConfirmationModal"
import { SuccessModal } from "./components/SuccessModal"
import { mockAppointments } from "@/lib/db"


export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState(mockAppointments)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [confirmAction, setConfirmAction] = useState(() => {})
  const [confirmMessage, setConfirmMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [dateFilter, setDateFilter] = useState("All")

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || appointment.status === statusFilter
    const matchesDate = dateFilter === "All" || appointment.date === dateFilter

    return matchesSearch && matchesStatus && matchesDate
  })

  const handleAddAppointment = (appointmentData) => {
    const newAppointment = {
      id: Date.now().toString(),
      patient: appointmentData.patient,
      date: appointmentData.date,
      time: appointmentData.time,
      provider: appointmentData.provider,
      type: appointmentData.type,
      status: "Scheduled",
    }

    setAppointments([...appointments, newAppointment])
    setIsAddModalOpen(false)
    setSuccessMessage(`${appointmentData.patient} appointment has been created successfully!`)
    setIsSuccessModalOpen(true)
  }

  const handleCancelAppointment = (appointmentId, patientName) => {
    setConfirmMessage(`Do you really want to cancel ${patientName}'s appointment?`)
    setConfirmAction(() => () => {
      setAppointments(
        appointments.map((apt) => (apt.id === appointmentId ? { ...apt, status: "Cancelled" } : apt)),
      )
      setIsConfirmModalOpen(false)
      setSuccessMessage(`${patientName} appointment has been cancelled successfully!`)
      setIsSuccessModalOpen(true)
    })
    setIsConfirmModalOpen(true)
  }

  const handleCompleteAppointment = (appointmentId) => {
    setAppointments(
      appointments.map((apt) => (apt.id === appointmentId ? { ...apt, status: "Completed" } : apt)),
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="">
        <AppointmentsHeader onAddAppointment={() => setIsAddModalOpen(true)} />
        <AppointmentsFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          dateFilter={dateFilter}
          onDateChange={setDateFilter}
        />
      </div>

      <div className="p-6">
        <AppointmentsTable
          appointments={filteredAppointments}
          onCancelAppointment={handleCancelAppointment}
          onCompleteAppointment={handleCompleteAppointment}
        />
      </div>

      <AddAppointmentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddAppointment}
      />

      <ConfirmationModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={confirmAction}
        message={confirmMessage}
      />

      <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} message={successMessage} />
    </div>
  )
}
