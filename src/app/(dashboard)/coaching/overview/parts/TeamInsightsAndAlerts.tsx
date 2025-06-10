import { Button } from "@/components/ui/button";
import React from "react";

const TeamInsightsAndAlerts = () => {
  return (
    <div className="mt-6 flex flex-col lg:flex-row gap-6 h-full">
      <div className="flex-2 flex flex-col rounded-lg bg-white">
        <p className="bg-[#F69739] py-2.5 pl-6 rounded-t-lg text-sm text-white font-medium">
          Team Insights
        </p>
        <div className="px-6 py-5 flex-1 flex flex-col">
          <p className="text-[#2A2828] text-sm font-medium">
            Top Team Challenge:
          </p>
          <p className="text-[#848484] mt-1 text-xs font-normal">
            Based on this week&apos;s calls, 63% of team members are struggling
            with handling objections related to insurance coverage.
          </p>
          <p className="text-[#2A2828] text-sm mt-5 font-medium">
            Pam&apos;s Recommendation:
          </p>
          <p className="text-[#848484] mt-1 text-xs font-normal">
            Schedule a team training session on insurance objection handling and
            assign the &quot;Dental Insurance Basics&quot; course module.
          </p>
          <div>
            <Button className="mt-5">Scheduled Team Training</Button>
          </div>
        </div>
      </div>

      <div className="flex-[1.3] flex flex-col rounded-lg bg-white p-6">
        <p className="text-base font-medium mb-5 text-[#2A2828]">Team Alerts</p>
        <div className="flex flex-col gap-4 flex-1">
          <div className="bg-[#FFFBEB] p-4 rounded">
            <p className="text-[#F68A15] text-sm font-medium">
              Objection Spike Alert
            </p>
            <p className="text-[#F68A15] text-xs mt-2 font-normal">
              25% increase in &quot;Competing Quote&quot; objections today
            </p>
          </div>
          <div className="bg-[#ECFDF5] p-4 rounded">
            <p className="text-[#09924F] text-sm font-medium">
              Performance Achievement
            </p>
            <p className="text-[#09924F] text-xs mt-2 font-normal">
              Sarah Johnson exceeded call targets by 15% this week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInsightsAndAlerts;
