'use client';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import React, { useState } from 'react';
import { ArrowDown } from '../../../../../../public/images';
import { ProgressArrow } from '../../overview/parts/Header';

const options = ['Last 30 Days', 'Last 7 Days'];

const Header = () => {
	const [selected, setSelected] = useState('Last 30 Days');
	return (
		<>
			<div className="flex justify-between items-center flex-wrap">
				<h2 className="font-medium text-[20px]">Objection Tracker</h2>
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
					<p className="text-[13px]">Total Objections</p>
					<div className="flex mt-[15px] justify-between items-center">
						<p className="text-[22px] font-semibold">124</p>
						<div className="flex items-center gap-[3px] text-[9px] font-medium text-[#22C55E]">
							<ProgressArrow /> 12.8%
						</div>
					</div>
				</div>
				<div className="bg-white p-[20px] rounded-[10px]">
					<p className="text-[13px]">Resolution Rate</p>
					<div className="flex mt-[15px] justify-between items-center">
						<p className="text-[22px] font-semibold">
							73%
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
					<p className="text-[13px]">Avg. Handle Time</p>
					<div className="flex mt-[15px] justify-between items-center">
						<p className="text-[22px] font-semibold">1:42</p>
						<div className="flex items-center gap-[3px] text-[9px] font-medium text-[#22C55E]">
							<ProgressArrow /> 2.1%
						</div>
					</div>
				</div>
				<div className="bg-white p-[20px] rounded-[10px]">
					<p className="text-[13px]">Top Objection</p>
					<p className="text-[16px] mt-[15px] font-semibold">
						Price Concerns{' '}
						<span className="text-[#848484]">(32 occurrences)</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default Header;
