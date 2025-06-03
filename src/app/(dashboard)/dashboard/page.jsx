"use client"

import { MetricsCards, OverallRatingChart, TopPerformers, SocialMediaAnalytics, TodaysTasks, CampaignPerformance } from "./components"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Dashboard() {
  return (
    <div className="sm:p-6 p-3 space-y-6">
      {/* Welcome Section */}
      <div>
        <div className="flex sm:items-center gap-3 justify-between sm:flex-row flex-col">
          <div>
            <p className="text-[#848484] mb-2">Good Morning 🌤️ </p>
            <h1 className="sm:text-2xl text-lg font-semibold text-[#171717]">Welcome Back, Dr. John</h1>
          </div>
          <div>
            <Select defaultValue="Daily">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                {["Daily", "Weekly", "Monthly", "Yearly"].map((timeFrame) => (
                  <SelectItem key={timeFrame} value={timeFrame}>
                    {timeFrame}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div>
        <MetricsCards />
      </div>

      {/* Charts and Tables Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <OverallRatingChart />
        <TopPerformers />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SocialMediaAnalytics />
        <TodaysTasks />
      </div>

      {/* Campaign Performance */}
      <div>
        <CampaignPerformance />
      </div>
    </div>
  )
}
