"use client"
import { useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { appointmentTypes, appointmentCategories, providers, timeSlots } from "@/lib/db"

export function AddAppointmentModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    patient: "",
    time: "",
    date: "15 May, 2025",
    provider: "",
    category: "",
    type: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.patient && formData.time && formData.provider && formData.category && formData.type) {
      onSubmit(formData)
      setFormData({
        patient: "",
        time: "",
        date: "15 May, 2025",
        provider: "",
        category: "",
        type: "",
      })
    }
  }

  const availableTypes = formData.category
    ? appointmentTypes[formData.category] || []
    : []

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Add Appointments</DialogTitle>
          <p className="text-sm text-gray-600">Create a new appointment for a patient</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="patient" className="text-sm font-medium text-gray-700">
              Patient
            </Label>
            <Select value={formData.patient} onValueChange={(value) => setFormData({ ...formData, patient: value })}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select patient" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="John Doe">John Doe</SelectItem>
                <SelectItem value="Jane Smith">Jane Smith</SelectItem>
                <SelectItem value="Robert Fox">Robert Fox</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="time" className="text-sm font-medium text-gray-700">
                Time
              </Label>
              <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                Date
              </Label>
              <div className="relative mt-1">
                <Input
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="provider" className="text-sm font-medium text-gray-700">
              Provider
            </Label>
            <Select value={formData.provider} onValueChange={(value) => setFormData({ ...formData, provider: value })}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select Provider" />
              </SelectTrigger>
              <SelectContent>
                {providers.map((provider) => (
                  <SelectItem key={provider} value={provider}>
                    {provider}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                Category
              </Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value, type: "" })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {appointmentCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="type" className="text-sm font-medium text-gray-700">
                Type
              </Label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value })}
                disabled={!formData.category}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  {availableTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary cursor-pointer hover:bg-primary/80 text-white py-3">
            Create Appointment
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
