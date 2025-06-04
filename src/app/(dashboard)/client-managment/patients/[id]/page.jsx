"use client"
import { PatientDetails } from "../components/patient-details"

export default function PatientDetailPage({ params }) {
  return (
        <main className="sm:p-6 p-3 bg-[#f9f8fa] ">
          <PatientDetails patientId={params.id} />
        </main>
  )
}
