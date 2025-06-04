"use client"

import { CallFilters } from "./components/call-filters"
import { CallMetrics } from "./components/call-metrics"
import { CallTable } from "./components/call-table"
import { CallPagination } from "./components/call-pagination"

export default function CallTrackingPage() {
  return (
        <main className="sm:p-6 p-3 bg-[#f9f8fa] ">
          <CallFilters />
          <CallMetrics />
          <CallTable />
          <CallPagination />
        </main>
  )
}
