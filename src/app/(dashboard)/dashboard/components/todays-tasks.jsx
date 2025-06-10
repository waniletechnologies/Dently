"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import { dashboardData } from "@/lib/db"

export function TodaysTasks() {
  const renderTaskList = (tasks) => (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#f8f8f8] rounded-lg gap-3">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-1 h-12 bg-[#ffa048] rounded-full shrink-0"></div>
            <div>
              <p className="font-medium text-[#171717] mb-1">{task.title}</p>
              <div className="flex flex-wrap items-center gap-2 text-sm text-[#848484]">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{task.time}</span>
                </div>
                {task.description && (
                  <>
                    <span className="hidden sm:inline">•</span>
                    <span>{task.description}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <Badge className="self-start sm:self-center bg-[#ffa048] text-white hover:bg-[#f68a15] shrink-0">
            {task.type}
          </Badge>
        </div>
      ))}
    </div>
  )

  return (
    <Card className="bg-white border-[#e1e1e1]">
      <CardHeader className="pb-4">
        <CardTitle className="text-[#171717] text-lg">Today&apos;s Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="today" className="w-full">
          <div className="overflow-x-auto pb-2">
            <TabsList className="w-full flex gap-2 bg-white border border-[#e1e1e1] rounded-lg  min-w-max">
              <TabsTrigger
                value="today"
                className="flex-1 min-w-[120px] text-[#0F172A] text-xs data-[state=active]:bg-[#F4F4F5] whitespace-nowrap"
              >
                Today's Tasks
              </TabsTrigger>
              <TabsTrigger
                value="upcoming"
                className="flex-1 min-w-[120px] text-[#0F172A] text-xs data-[state=active]:bg-[#F4F4F5] whitespace-nowrap"
              >
                Upcoming
              </TabsTrigger>
              <TabsTrigger
                value="overdue"
                className="flex-1 min-w-[120px] text-[#0F172A] text-xs data-[state=active]:bg-[#F4F4F5] whitespace-nowrap"
              >
                Overdue
              </TabsTrigger>
              <TabsTrigger
                value="recommendations"
                className="flex-1 min-w-[150px] text-[#0F172A] text-xs data-[state=active]:bg-[#F4F4F5] whitespace-nowrap"
              >
                Pam's recommendations
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="overflow-x-hidden">
            <TabsContent value="today" className="mt-0">
              {renderTaskList(dashboardData.todaysTasks)}
            </TabsContent>

            <TabsContent value="upcoming" className="mt-0">
              {renderTaskList(dashboardData.upcomingTasks)}
            </TabsContent>

            <TabsContent value="overdue" className="mt-0">
              {renderTaskList(dashboardData.overdueTasks)}
            </TabsContent>

            <TabsContent value="recommendations" className="mt-0">
              <div className="text-center py-8 text-[#848484]">No recommendations available</div>
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
