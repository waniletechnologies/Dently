"use client"

import { useState } from "react"
import { campaignDetails, performanceData, impressionsData } from "@/lib/db"
import Header from "./components/Header"
import DateAndCampaignSelector from "./components/DateAndCampaignSelector"
import MetricsGrid from "./components/MetricsGrid"
import PerformanceTrends from "./components/PerformanceTrends"
import CampaignDetails from "./components/CampaignDetails"
import DataEntryModal from "./components/DataEntryModal"

const AdPerformancePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="space-y-6 p-4">
      <Header onAddData={() => setIsModalOpen(true)} />
      <DateAndCampaignSelector />
      <MetricsGrid />
      <PerformanceTrends data={performanceData} />
      <CampaignDetails 
        campaignDetails={campaignDetails}
        impressionsData={impressionsData}
      />
      <DataEntryModal 
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  )
}

export default AdPerformancePage
