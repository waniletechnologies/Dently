
"use client"

import { useState } from "react"
import { PatientsFilter } from "./components/patient-filter"
import { PatientsTable } from "./components/patient-managment"
// import { PatientsPagination } from "./components/patient-pagination"
import { AddPatientModal } from "./components/add-patient-modal"

export default function PatientsPage() {
  const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const handleAddPatient = () => {
    setIsAddPatientModalOpen(true)
  }

  const handleViewPatient = (patientId) => {
    // Navigate to patient details page
    window.location.href = `/client-managment/patients/${patientId}`
  }

  const handleEditPatient = (patientId) => {
    console.log("Edit patient:", patientId)
    // Implement edit functionality
  }

  const handleDeletePatient = (patientId) => {
    console.log("Delete patient:", patientId)
    // Implement delete functionality
  }

  const handleFilterChange = (filters) => {
    console.log("Filters changed:", filters)
    // Apply filters to data
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleAddPatientSubmit = (patientData) => {
    console.log("New patient data:", patientData)
    // Add patient to database
  }

  return (
        <main className="sm:p-6 p-3 bg-[#f9f8fa] ">
          <h1 className="text-2xl font-semibold text-[#171717] mb-6">Patients</h1>

          <PatientsFilter onAddPatient={handleAddPatient} onFilterChange={handleFilterChange} />

          <div className="bg-white rounded-md border border-[#e1e1e1] overflow-hidden">
            <PatientsTable
              onViewPatient={handleViewPatient}
              onEditPatient={handleEditPatient}
              onDeletePatient={handleDeletePatient}
            />
            {/* <div className="p-4 border-t border-[#e1e1e1]">
              <PatientsPagination
                currentPage={currentPage}
                totalPages={8}
                totalPatients={12}
                onPageChange={handlePageChange}
              />
            </div> */}
          </div>

          <AddPatientModal
            isOpen={isAddPatientModalOpen}
            onClose={() => setIsAddPatientModalOpen(false)}
            onAddPatient={handleAddPatientSubmit}
          />
        </main>
  )
}
