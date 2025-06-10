"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { XAxis, YAxis, ResponsiveContainer, AreaChart, Area, CartesianGrid, Tooltip, type TooltipProps } from "recharts"
import { dashboardData } from "@/lib/db"
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"

const CustomTooltip = ({ 
  active, 
  payload, 
  label 
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#F68A15",
          color: "white",
          padding: "8px 12px",
          borderRadius: "6px",
          fontSize: "14px",
          whiteSpace: "nowrap"
        }}
      >
        {`${payload[0].value} ${label} 2025`}
      </div>
    );
  }
  return null;
};

export function OverallRatingChart() {
  return (
    <Card className="bg-white border-[#e1e1e1]">
      <CardHeader>
        <CardTitle className="text-[#171717]">Overall Rating</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={100} height={100} data={dashboardData.overallRatingData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F68A15" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#F68A15" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid 
                strokeDasharray="3 3" 
                horizontal={true} 
                vertical={false} 
                stroke="#e5e5e5"
              />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: "#848484" }} 
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#848484" }}
                domain={[0, 5]}
                ticks={[20, 40, 50, 60, 70, 80, 90, 100]}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={false}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#F68A15" 
                fill="url(#colorValue)" 
                strokeWidth={2} 
                dot={false}
                activeDot={{ r: 6, fill: "#F68A15" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
