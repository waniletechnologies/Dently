import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"

const DailyEngagement = ({ data }) => {
  return (
    <div className="bg-white rounded-lg p-6 space-y-4">
      <h2 className="text-lg font-medium">Daily Engagement</h2>
      <div className="h-[300px]">
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
            <Legend 
              iconType="circle"
              wrapperStyle={{ fontSize: 12 }}
            />
            <Bar dataKey="likes" name="Likes" fill="#f97316" radius={[4, 4, 0, 0]} />
            <Bar dataKey="comments" name="Comments" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="shares" name="Shares" fill="#22c55e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DailyEngagement 