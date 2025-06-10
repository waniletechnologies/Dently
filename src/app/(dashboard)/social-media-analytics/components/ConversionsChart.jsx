import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts"

const ConversionsChart = ({ data }) => {
  return (
    <div className="h-60 p-0">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white',
              border: '1px solid #f0f0f0',
              borderRadius: '8px',
              padding: '10px'
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="conversions"
            stroke="#DC2626"
            strokeWidth={2}
            dot={false}
            name="Conversions"
          />
          <Line
            type="monotone"
            dataKey="clicks"
            stroke="#1D90FF"
            strokeWidth={2}
            dot={false}
            name="Clicks"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ConversionsChart 