import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { Progress } from "@/components/ui/progress";

interface TeamMember {
  name: string;
  requiredCourses: number;
  completed: number;
  progress: number;
  priceObjections: number;
  timeObjections: number;
  valueObjections: number;
  effectiveCallClosing: number;
  askingBetterQuestions: number;
  status: "Completed" | "In progress" | "Behind";
}

interface SidePanelProps {
  selectedRow: TeamMember | null;
  onClose: () => void;
  styles: any;
}

const BackArrowIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L6.41421 12L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z"
        fill="#71717A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
        fill="#71717A"
      />
    </svg>
  );
};

const SidePanel: FC<SidePanelProps> = ({ selectedRow, onClose, styles }) => {
  if (!selectedRow) return null;

  const { statusColor } = styles(selectedRow.status);

  return (
    <div className="fixed inset-y-0 right-0 max-w-[570px] bg-white z-50 p-[35px] overflow-y-auto">
      <div className="flex gap-2 items-center">
        <Button
          variant="ghost"
          onClick={onClose}
          className="-ml-3 cursor-pointer"
        >
          <BackArrowIcon />
        </Button>
        <h2 className="text-[16px] font-semibold text-[#151515]">
          {selectedRow.name}
        </h2>
      </div>
      <div className="border-t border-r-[#00000014] mt-5 mb-6" />
      <div className="flex items-center">
        <div className="border-r border-r-[#00000014] pr-4 md:pr-12">
          <p className="font-medium text-[12px] text-[#2A2828]">
            Assigned Courses
          </p>
          <p className="font-medium text-[12px] text-[#595858]">
            {selectedRow.requiredCourses}
          </p>
        </div>
        <div className="border-r border-r-[#00000014] px-4 md:px-12">
          <p className="font-medium text-[12px] text-[#2A2828]">Completed</p>
          <p className="font-medium text-[12px] text-[#595858]">
            {selectedRow.completed}
          </p>
        </div>
        <div className="px-4 md:px-12">
          <p className="font-medium text-[12px] text-[#2A2828]">Status</p>
          <p
            className={`text-[12px] rounded-[6px] px-3 py-[5px] font-[400] ${statusColor}`}
          >
            {selectedRow.status}
          </p>
        </div>
      </div>
      <h2 className="text-[12px] font-semibold text-[#151515] mt-[45px] mb-[15px]">
        Assigned Courses and progress
      </h2>
      <div className="bg-[#F4F5F7]  py-[36px] px-[25px] rounded-[10px]">
        <div className="flex flex-col gap-2 px-5 py-6 flex-1 rounded-[10px]">
          <div className="flex justify-between items-center">
            <p className="text-[#2A2828] text-[12px] font-medium">
              Handling Price Objections
            </p>
            <sup className="text-[#848484] text-[12px] font-medium">
              {selectedRow.priceObjections} %
            </sup>
          </div>
          <Progress
            value={selectedRow.priceObjections}
            className="w-full h-2 bg-[#D9D9D9] [&>div]:bg-[#09924F]"
          />
        </div>
        <div className="flex flex-col gap-2 px-5 py-6 flex-1 rounded-[10px]">
          <div className="flex justify-between items-center">
            <p className="text-[#2A2828] text-[12px] font-medium">
              Time Handling Objections
            </p>
            <sup className="text-[#848484] text-[12px] font-medium">
              {selectedRow.timeObjections}%
            </sup>
          </div>
          <Progress
            value={selectedRow.timeObjections}
            className="w-full h-2 bg-[#D9D9D9] [&>div]:bg-[#09924F]"
          />
        </div>
        <div className="flex flex-col gap-2 px-5 py-6 flex-1 rounded-[10px]">
          <div className="flex justify-between items-center">
            <p className="text-[#2A2828] text-[12px] font-medium">
              Value Handling Objections
            </p>
            <sup className="text-[#848484] text-[12px] font-medium">
              {selectedRow.valueObjections}%
            </sup>
          </div>
          <Progress
            value={selectedRow.valueObjections}
            className="w-full h-2 bg-[#D9D9D9]"
          />
        </div>
        <div className="flex flex-col gap-2 px-5 py-6 flex-1 rounded-[10px]">
          <div className="flex justify-between items-center">
            <p className="text-[#2A2828] text-[12px] font-medium">
              Effective Call Closing
            </p>
            <sup className="text-[#848484] text-[12px] font-medium">
              {selectedRow.effectiveCallClosing}%
            </sup>
          </div>
          <Progress
            value={selectedRow.effectiveCallClosing}
            className="w-full h-2 bg-[#D9D9D9]"
          />
        </div>
        <div className="flex flex-col gap-2 px-5 py-6 flex-1 rounded-[10px]">
          <div className="flex justify-between items-center">
            <p className="text-[#2A2828] text-[12px] font-medium">
              Asking Better Questions
            </p>
            <sup className="text-[#848484] text-[12px] font-medium">
              {selectedRow.askingBetterQuestions}%
            </sup>
          </div>
          <Progress
            value={selectedRow.askingBetterQuestions}
            className="w-full h-2 bg-[#D9D9D9]"
          />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
