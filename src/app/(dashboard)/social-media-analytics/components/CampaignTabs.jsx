import { useState } from "react"
import PerformanceTable from "./PerformanceTable"
import ROASChart from "./ROASChart"

const CampaignTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState("performance")

  return (
    <div className="space-y-4 -mt-4">
      <div className="flex justify-end items-center">
        <div className="flex gap-2 bg-white border border-gray-200 rounded-lg p-1 w-fit">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => setActiveTab("performance")}
          className={`px-4 py-2 text-sm cursor-pointer font-medium rounded-md ${
            activeTab === "performance"
              ? "bg-[#F4F4F5] text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          Performance
        </button>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => setActiveTab("roas")}
          className={`px-4 py-2 text-sm font-medium cursor-pointer rounded-md ${
            activeTab === "roas"
              ? "bg-[#F4F4F5] text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          ROAS
        </button>
      </div>
      </div>

        <div className="bg-white rounded-lg p-0">
        {activeTab === "performance" ? (
          <PerformanceTable data={data} />
        ) : (
          <ROASChart data={data} />
        )}
      </div>
    </div>
  )
}

export default CampaignTabs 