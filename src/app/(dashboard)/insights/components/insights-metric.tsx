import { Card, CardContent } from "@/components/ui/card"
import { InsightsData } from "@/lib/db"
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi"

export default function InsightsMetric(){
    return(
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {InsightsData.metrics.map((metric) => {
        return (
          <Card key={metric.title} className="bg-white h-full p-0 border-[#e1e1e1]">
            <CardContent className="p-5">
              <div className="flex w-full h-20 flex-col justify-between">
                <div className="flex items-center  w-full justify-between">
                  <p className="font-normal text-[13.26px] leading-[18.94px] tracking-[0] text-[#000000]">{metric.title}</p>
                </div>
                <div className="flex items-center gap-3">
                <p className="text-2xl font-semibold">{metric.value}</p>
                <div className="flex items-center gap-1">
                  {metric.change.startsWith("+") ? <FiTrendingUp className="text-[#22C55E]" /> : <FiTrendingDown className="text-[#D43A3A]" />}
                <span
                  className={`text-sm font-medium ${
                    metric.change.startsWith("+")
                      ? "text-[#22C55E]"
                      : "text-[#D43A3A]"
                  }`}
                >
                  {metric.change}
                </span>
                </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
    )
}