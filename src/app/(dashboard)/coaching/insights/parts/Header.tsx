"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ArrowDown } from "../../../../../../public/images";
import SalesRadarChart from "./SalesRadarChart";
const options = ["Last 30 Days", "Last 7 Days"];
const Header = () => {
  const [selected, setSelected] = useState("Last 30 Days");

  const CheckIcon = () => {
    return (
      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
        <path
          d="M12.2731 1L4.52285 8.75026L1 5.22741"
          stroke="#52884B"
          strokeWidth="1.91327"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const Tips = [
    {
      Heading: "Use open-ended questions",
      Description: `Your call transcripts show you're using closed questions 68% of the time. Try asking more "how" and "what" questions to understand patient needs better.`,
    },
    {
      Heading: "Improve price objection handling",
      Description: `When discussing costs, focus more on the value and benefits rather than just the numbers. Try the "feel, felt, found" technique.`,
    },
    {
      Heading: "Stronger call-to-action needed",
      Description: `Your calls often end without a clear next step. Practice direct appointment requests or follow-up scheduling.`,
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="font-medium text-[20px]">Training Recommendations</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="px-[25px] flex gap-[11px] items-center py-[10px] bg-white text-[#595858] font-medium text-[14px] rounded-[5px]">
            {selected}
            <Image
              src={ArrowDown}
              alt="Arrow Down Icon"
              height={11}
              width={11}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {options.map((option) => (
              <DropdownMenuItem
                key={option}
                className="text-[#595858] font-medium text-[14px]"
                onSelect={() => setSelected(option)}
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="mt-7 flex flex-col lg:flex-row gap-6 h-full">
        <div className="flex-[1.8] flex flex-col rounded-lg bg-white p-6">
          <p className="text-[#1C2024] text-[16px] font-semibold">
            Call Summary
          </p>
          <p className="text-[#60646C] text-[14px] fomt-normal mt-4">
            May 7, 2025 • Call #CL-34567 • 8 min 24 sec
          </p>

          <main>
            <SalesRadarChart />
          </main>
          <div className="flex justify-between">
            <p className="text-[#1C2024] text-[14px] mt-3 font-normal">
              Efficiency
            </p>
            <div className="flex-1 border-b border-[#00000014]  mx-2" />
            <p className="text-[#F68A1E] text-[20px] mt-1 font-normal">74%</p>
          </div>
        </div>

        <div className="flex flex-2 flex-col rounded-lg bg-[#EFF6FF] p-6">
          <p className="text-base font-medium mb-[11px] text-[#1C2024]">
            AI Insights
          </p>
          <p className="text-[#60646C] text-[14px] mb-[26px] font-[400]">
            Personalized Coaching Tips
          </p>
          <div className="flex flex-col gap-4 flex-1">
            {Tips.map((tip, index) => {
              return (
                <div className="bg-white p-4 rounded" key={index}>
                  <div className="flex items-start gap-3">
                    <div className="mt-[5px]">
                      <CheckIcon />
                    </div>
                    <div>
                      <p className="text-[#423F3F] text-[13px] font-semibold">
                        {tip.Heading}
                      </p>
                      <p className="text-[#676767] text-xs mt-2 font-normal">
                        {tip.Description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
