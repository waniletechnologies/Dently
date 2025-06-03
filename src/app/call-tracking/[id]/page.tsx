"use client"

import { Header } from "@/components/Header"
import { CallDetail } from "../components/call-details"

interface CallDetailPageProps {
  params: {
    id: string
  }
}

export default function CallDetailPage({ params }: CallDetailPageProps) {
  return (
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <CallDetail callId={params.id} />
        </main>
      </div>
  )
}
