"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ArrowDown } from "../../../../../../public/images";

const options = ["Last 30 Days", "Last 7 Days"];

export const ProgressArrow = () => {
  return (
    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
      <path
        d="M7.71786 1.11719H10.7039V5.11046"
        stroke="#22C55E"
        strokeWidth="1.03825"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7047 1.11719L6.4869 6.75768C6.41712 6.84914 6.32332 6.90037 6.22562 6.90037C6.12792 6.90037 6.03411 6.84914 5.96434 6.75768L4.24735 4.46155C4.17757 4.37009 4.08377 4.31886 3.98607 4.31886C3.88837 4.31886 3.79456 4.37009 3.72479 4.46155L1 8.10541"
        stroke="#22C55E"
        strokeWidth="1.03825"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Header = () => {
  const [selected, setSelected] = useState("Last 30 Days");

  return (
    <>
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="font-medium text-[20px]">Coaching</h2>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-[27px]">
        <div className="bg-white p-[20px] rounded-[10px]">
          <p className="text-[13px]">Total Calls</p>
          <div className="flex justify-between items-center">
            <p className="text-[22px] font-semibold">127</p>
            <div className="flex items-center gap-[3px] text-[9px] font-medium text-[#22C55E]">
              <ProgressArrow /> 12.8%
            </div>
          </div>
        </div>
        <div className="bg-white p-[20px] rounded-[10px]">
          <p className="text-[13px]">Avg. Call Duration</p>
          <div className="flex justify-between items-center">
            <p className="text-[22px] font-semibold">
              5:32{" "}
              <span className="text-[#848484] text-[14px] font-semibold">
                min
              </span>
            </p>
            <div className="flex items-center gap-[3px] text-[9px] font-medium text-[#22C55E]">
              <ProgressArrow /> 3.8%
            </div>
          </div>
        </div>
        <div className="bg-white p-[20px] rounded-[10px]">
          <p className="text-[13px]">Objections Handled</p>
          <div className="flex justify-between items-center">
            <p className="text-[22px] font-semibold">78</p>
            <div className="flex items-center gap-[3px] text-[9px] font-medium text-[#22C55E]">
              <ProgressArrow /> 2.1%
            </div>
          </div>
        </div>
        <div className="bg-white p-[20px] rounded-[10px]">
          <p className="text-[13px]">Overall Score</p>
          <div className="flex justify-between items-center">
            <p className="text-[22px] font-semibold">82%</p>
            <div className="flex items-center gap-[3px] text-[9px] font-medium text-[#22C55E]">
              <ProgressArrow /> 8.3%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
