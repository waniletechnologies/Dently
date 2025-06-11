"use client"

import { useState } from "react"
import { InsightTabs } from "./components/InsightTabs"
import { InsightCard } from "./components/InsightCard"
import { recommendationsData } from "@/lib/db"

const InsightsPage = () => {
  const [activeTab, setActiveTab] = useState("all")

  const getInsights = () => {
    switch (activeTab) {
      case "budget":
        return recommendationsData.budgetRecommendations
      case "creative":
        return recommendationsData.creativeRecommendations
      case "targeting":
        return recommendationsData.targetingRecommendations
      default:
        return recommendationsData.allRecommendations
    }
  }

  const insights = getInsights()

  return (
    <div className="space-y-6 sm:p-6 p-3">
      < InsightTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="space-y-4">
        {insights.map((insight) => (
          <InsightCard
            key={insight.id}
            insight={insight}
            showCreativeElements={activeTab === "creative"}
          />
        ))}
      </div>
    </div>
  )
}
export default InsightsPage