import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { TooltipProps } from "recharts";
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

const commissionData = [
  { month: "Jan", day: 15, value: 20000 },
  { month: "Feb", day: 15, value: 30000 },
  { month: "Mar", day: 15, value: 60000 },
  { month: "Apr", day: 15, value: 40000 },
  { month: "May", day: 15, value: 70000 },
  { month: "Jun", day: 15, value: 35000 },
  { month: "Jul", day: 15, value: 60000 },
  { month: "Aug", day: 15, value: 40000 },
  { month: "Sep", day: 15, value: 40000 },
];

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const { month, day, value } = payload[0].payload as { month: string; day: number; value: number };
    return (
      <div
        style={{
          backgroundColor: "#fff",
          color: "#1F1F1F",
          padding: "16px 24px",
          borderRadius: "12px",
          fontSize: "16px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          minWidth: "160px",
          textAlign: "left",
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: 4 }}>{month} {day}</div>
        <div style={{ color: "#EE861E", fontWeight: 500, fontSize: 17 }}>
          Commission : £{(value / 1000).toLocaleString()}k
        </div>
      </div>
    );
  }
  return null;
};

export default function CommissionDistribution() {
  return (
      <Card className="rounded-2xl mt-[36px] border-none shadow-none bg-white">
        <CardHeader>
          <CardTitle className="text-[#1F1F1F] text-[20px] font-geist font-semibold">
            Commission Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-60 px-0 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={commissionData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
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
                  tick={{ fontSize: 13, fill: "#BCBCBC" }}
                />
                <YAxis
                  scale="linear"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#848484" }}
                  domain={[0, 80000]}
                  ticks={[0, 20000, 40000, 60000, 80000]}
                  interval={0}
                  tickFormatter={v => v === 0 ? '0' : `${v / 1000}k`}
                />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Bar
                  type="linear"
                  dataKey="value"
                  fill="#F68A1E"
                  radius={[10, 10, 0, 0]}
                  barSize={28}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
  );
}