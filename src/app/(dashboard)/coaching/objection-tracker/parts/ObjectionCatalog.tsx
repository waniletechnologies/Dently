'use client';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import React, { useState } from 'react';
import { ArrowDown } from '../../../../../../public/images';
import { BookIcon, ClockIcon } from '../../insights/parts/RecommendedLearning';

const options = ['All Categories'];

const Learnings = [
	{
		Heading: 'Selling As A Dentist',
		time: '45 min',
		modules: '11 modules',
		tag: 'Price',
		examples: '“I’ll think about it and get back to you.”',
		response:
			'Absolutely, I want you to feel confident in your decision. Would it help if I walked you through the benefits again or showed you similar successful cases?',
	},
	{
		Heading: 'Selling Aligners Via Online Consultations',
		time: '45 min',
		tag: 'Time',
		modules: '4 modules',
		examples: '“How do I know aligners will really work for me?”',
		response:
			"Great question! Based on your photos and goals, aligners are a great fit. I can show you a quick digital preview if you'd like!",
	},
	{
		Heading: 'Front of House Excellence',
		time: '45 min',
		tag: 'Value',
		modules: '7 modules',
		examples: '“I’m stuck in traffic—will I still be seen?”',
		response:
			'Thanks for letting us know! I’ll inform the team—if there’s a small delay, we’ll do our best to fit you in without too much wait.',
	},
];

const ObjectionCatalog = () => {
	const [selected, setSelected] = useState('All Categories');
	return (
		<>
			<div className="flex pt-[28px] pb-[30px] justify-between items-center flex-wrap">
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
			<div className="flex flex-row flex-wrap gap-[24px]">
				{Learnings.map((learning, index) => {
					return (
						<div
							className="bg-white flex-1 flex flex-col rounded-[10px] p-6"
							key={index}
						>
							<div className="flex justify-between">
								<p className="text-[#2A2828] text-[14px] font-medium">
									{learning.Heading}
								</p>
								<p
									className={`text-[12px] font-medium px-[10px] py-[2px] rounded-[20px] ${
										learning.tag === 'Price'
											? 'text-[#9E6430] bg-[#FEF3C7]'
											: learning.tag === 'Time'
												? 'text-[#742EAE] bg-[#F3E8FF]'
												: learning.tag === 'Value'
													? 'text-[#34816A] bg-[#D1FAE5]'
													: ''
									} px-2 py-1 rounded`}
								>
									{learning.tag}
								</p>{' '}
							</div>
							<div className="flex mt-[13px] gap-3 items-center">
								<div className="flex gap-[6px] items-center">
									<ClockIcon />
									<p className="text-[#848484] text-[12px] font-medium">
										{learning.time}
									</p>
								</div>
								<div className="flex gap-[6px] items-center">
									<BookIcon />
									<p className="text-[#848484] text-[12px] font-medium">
										{learning.modules}
									</p>
								</div>
							</div>
							<p className="text-[#848484] text-[12px] font-normal mt-3">
								EXAMPLES:
							</p>
							<p className="text-[#2A2828] mt-[6px] text-[12px] font-normal">
								{learning.examples}
							</p>
							<p className="text-[#848484] text-[12px] font-normal mt-3">
								Recommended Responses:
							</p>
							<p className="text-[#2A2828] text-[12px] font-normal mt-[6px]">
								{learning.response}
							</p>
							<Button className="mt-[23px] cursor-pointer text-[14px] font-normal">
								Assign
							</Button>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ObjectionCatalog;
