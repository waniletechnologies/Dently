"use client"

import { CallFilters } from "./components/call-filters"
import { CallMetrics } from "./components/call-metrics"
import { CallTable } from "./components/call-table"
import { CallPagination } from "./components/call-pagination"

export default function CallTrackingPage() {
  return (
        <main className="flex-1 p-6">
          <CallFilters />
          <CallMetrics />
          <CallTable />
          <CallPagination />
        </main>
  )
}
