"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, Calendar } from "lucide-react"
import { callTrackingData } from "@/lib/db"

const iconMap = {
  phone: Phone,
  clock: Clock,
  calendar: Calendar,
}

export function CallMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {callTrackingData.metrics.map((metric, index) => {
        const Icon = iconMap[metric.icon as keyof typeof iconMap] || Phone
        return (
          <Card key={index} className="bg-white border-[#e1e1e1]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#848484] mb-1">{metric.title}</p>
                  <p className="text-2xl font-semibold text-[#171717]">{metric.value}</p>
                </div>
                <div className="w-12 h-12 bg-[#f0f0f0] rounded-lg flex items-center justify-center">
                  <Icon className="h-6 w-6" style={{ color: metric.color }} />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
