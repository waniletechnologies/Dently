import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"

const DailyEngagement = ({ data }) => {
  return (
    <div className="bg-white rounded-lg p-6 space-y-4">
      <div className="flex sm:items-center items-start sm:flex-row flex-col justify-between">
        <h2 className="text-lg font-medium">Daily Engagement</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F68A1E]" />
            <span>Likes</span> 
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#67A9FA]" />
            <span>Comments</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
            <span>Shares</span>
          </div>
        </div>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
            />
            <Bar dataKey="likes" name="Likes" fill="#F68A1E" radius={[4, 4, 0, 0]} />
            <Bar dataKey="comments" name="Comments" fill="#67A9FA" radius={[4, 4, 0, 0]} />
            <Bar dataKey="shares" name="Shares" fill="#22C55E" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DailyEngagement 