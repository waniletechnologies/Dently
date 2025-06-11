import { Card, CardContent } from "@/components/ui/card"
import { GoldCardData } from "@/lib/db"

export default function GoldCardMetrics(){
    return(
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {GoldCardData.metrics.map((metric) => {
            return (
              <Card key={metric.title} className="bg-white shadow-none border-none p-0 border-[#e1e1e1]">
                <CardContent className="p-5">
                  <div className="flex w-full gap-[12px] flex-col">
                    <div className="flex items-center w-full">
                      <p className="font-normal text-[13.26px] leading-[18.94px] tracking-[0] text-[#000000]">{metric.title}</p>
                    </div>
                    <div className="flex items-center gap-3">
                    <p className="text-2xl font-semibold">{metric.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        )
}