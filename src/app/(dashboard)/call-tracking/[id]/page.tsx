"use client"

import { CallDetail } from "../components/call-details"

interface CallDetailPageProps {
  params: {
    id: string
  }
}

export default function CallDetailPage({ params }: CallDetailPageProps) {
  return (
        <main className="sm:p-6 p-3">
          <CallDetail callId={params.id} />
        </main>
  )
}
