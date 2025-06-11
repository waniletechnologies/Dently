import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { TooltipProps } from "recharts";
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";


const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const { month, value } = payload[0].payload as { month: string; value: number };
    return (
      <div
        style={{
          backgroundColor: "#FFFFFF",
          color: "#1F1F1F",
          padding: "10px 16px",
          borderRadius: "8px",
          fontSize: "15px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          minWidth: "140px",
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: 4 }}>{month}</div>
        <div style={{ color: "#EE861E", fontWeight: 500 }}>
          Commission: £{value.toLocaleString()}
        </div>
      </div>
    );
  }
  return null;
};

const commissionData = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 20 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 25 },
  { month: "May", value: 35 },
  { month: "Jun", value: 39 },
  { month: "Jul", value: 40 },
  { month: "Aug", value: 60 },
  { month: "Sep", value: 35 },
  { month: "Oct", value: 45 },
  { month: "Nov", value: 40 },
  { month: "Dec", value: 35 },
];

export default function CommissionDistribution(){
    return(
        <Card className="bg-white mt-[36px] border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-[#1F1F1F] text-[16px] font-semibold">
                  Commission Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      width={100}
                      height={100}
                      data={commissionData}
                      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F68A15" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#F68A15" stopOpacity={0} />
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
                        tick={{ fontSize: 11, fill: "#BCBCBC" }}
                      />
                      <YAxis
                        scale="linear"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: "#848484" }}
                        domain={[0, 80]}
                        ticks={[0, 20, 40, 60, 80]}
                        interval={0}
                      />
                      <Tooltip content={<CustomTooltip />} cursor={false} />
                      <Bar
                        type="linear"
                        dataKey="value"
                        fill="#F68A15"
                        radius={[4, 4, 0, 0]} 
                        barSize={20}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
    )
}