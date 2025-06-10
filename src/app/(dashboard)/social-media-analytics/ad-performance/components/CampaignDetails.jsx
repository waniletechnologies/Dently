import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

const CampaignDetails = ({ campaignDetails, impressionsData }) => {
  const [activeTab, setActiveTab] = useState("Performance")

  return (
    <div className="bg-white rounded-lg p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <h2 className="text-lg font-medium">Campaign Details</h2>
        <div className="flex gap-2 flex-wrap items-center  ">
          <Button
            variant={activeTab === "Performance" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("Performance")}
            className={activeTab === "Performance" ? "bg-orange-500 hover:bg-orange-600" : ""}
          >
            Add Performance
          </Button>
          <Button
            variant={activeTab === "Impressions" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("Impressions")}
            className={activeTab === "Impressions" ? "bg-orange-500 hover:bg-orange-600" : ""}
          >
            Impressions
          </Button>
        </div>
      </div>

      {activeTab === "Performance" && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 text-sm font-medium text-gray-600">Ad Name</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Impressions</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Conversions</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Clicks</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">CTR</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">ROAS</th>
              </tr>
            </thead>
            <tbody>
              {campaignDetails.map((campaign) => (
                <tr key={campaign.name} className="border-b border-gray-100">
                  <td className="py-4 text-sm text-gray-900">{campaign.name}</td>
                  <td className="py-4 text-sm text-gray-600">{campaign.impressions}</td>
                  <td className="py-4 text-sm text-gray-600">{campaign.conversions}</td>
                  <td className="py-4 text-sm text-gray-600">{campaign.clicks}</td>
                  <td className="py-4 text-sm text-gray-600">{campaign.ctr}</td>
                  <td className="py-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      {campaign.status}
                    </Badge>
                  </td>
                  <td className="py-4 text-sm text-gray-600">{campaign.roas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "Impressions" && (
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={impressionsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: "#666" }}
                padding={{ left: 20, right: 20 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: "#666" }}
                domain={[0, 'auto']}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="impressions"
                stroke="#f97316"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

export default CampaignDetails 