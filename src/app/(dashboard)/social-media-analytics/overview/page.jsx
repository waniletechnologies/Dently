"use client"

import AnalyticsCard from "../components/AnalyticsCard"
import MetricCard from "../components/MetricCard"
import ConversionsChart from "../components/ConversionsChart"
import DailySpendChart from "../components/DailySpendChart"
import CampaignTabs from "../components/CampaignTabs"
import { Button } from "@/components/ui/button"
import { conversionsData, spendData, campaignData } from "@/lib/db"
import { usePathname } from "next/navigation"
import { Calendar, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

const OverviewPage = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-6 sm:p-6 p-3 ">
      <div className="flex sm:items-center sm:flex-row flex-col gap-4">
        <div className="flex items-center gap-2 text-sm font-medium bg-white p-2 rounded-md shadow-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          Apr 1, 2025 - Apr 25, 2025
        </div>
        <div className="relative ">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search Campaigns" className="pl-10 w-64" />
        </div>
        {pathname.includes("ad-performance") && (
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select Campaign" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Campaigns</SelectItem>
              <SelectItem value="new-patient">New Patient Promo</SelectItem>
              <SelectItem value="teeth-whitening">Teeth Whitening</SelectItem>
            </SelectContent>
          </Select>
        )}
        {pathname.includes("ad-performance") && (
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">+ Add Data</Button>
        )}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Conversions" value="487" change="12%" trend="up" />
        <MetricCard title="Return on Ad Spend" value="3.8x" change="8%" trend="up" />
        <MetricCard title="Total Spend" value="£5,243" change="15%" trend="up" />
        <MetricCard title="Total Clicks" value="12,456" change="23%" trend="up" />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsCard title="Conversions and Clicks">
          <ConversionsChart data={conversionsData} />
        </AnalyticsCard>

        <AnalyticsCard title="Daily Ad Spend">
          <DailySpendChart data={spendData} />
        </AnalyticsCard>
      </div>

      {/* Campaign Tabs */}
      <AnalyticsCard title="Top Campaigns">
        <CampaignTabs data={campaignData} />
      </AnalyticsCard>
    </div>
  )
}

export default OverviewPage;
