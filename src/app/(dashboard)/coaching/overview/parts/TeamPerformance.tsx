import { Progress } from '@/components/ui/progress';

const TeamPerformance = () => {
	return (
		<div className="mt-[23px]">
			<p className="text-[#2A2828] text-[16px] font-medium">Team Performance</p>
			<div className="flex gap-[24px] mt-5 flex-col lg:flex-row">
				<div className="bg-white flex flex-col gap-2 px-5 py-6 flex-1 rounded-[10px]">
					<div className="flex justify-between items-center">
						<p className="text-[#2A2828] text-[12px] font-medium">
							Team Call Acceptance
						</p>
						<sup className="text-[#848484] text-[12px] font-medium">82%</sup>
					</div>
					<Progress value={82} className="w-full" />
				</div>
				<div className="bg-white flex flex-col gap-2 px-5 py-6 flex-1 rounded-[10px]">
					<div className="flex justify-between items-center">
						<p className="text-[#2A2828] text-[12px] font-medium">
							Avg. Resolution Rate
						</p>
						<sup className="text-[#848484] text-[12px] font-medium">68%</sup>
					</div>
					<Progress value={68} className="w-full" />
				</div>
				<div className="bg-white flex flex-col gap-2 px-5 py-6 flex-1 rounded-[10px]">
					<div className="flex justify-between items-center">
						<p className="text-[#2A2828] text-[12px] font-medium">
							Training Completion
						</p>
						<sup className="text-[#848484] text-[12px] font-medium">91%</sup>
					</div>
					<Progress value={91} className="w-full" />
				</div>
			</div>
		</div>
	);
};

export default TeamPerformance;
