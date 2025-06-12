import { Button } from '@/components/ui/button';
import React from 'react';

const Learnings = [
	{
		Heading: 'Selling As A Dentist',
		time: '45 min',
		modules: '11 modules',
		description:
			'Learn ethical, patient-centered sales techniques to confidently present treatment plans.',
	},
	{
		Heading: 'Selling Aligners Via Online Consultations',
		time: '45 min',
		modules: '4 modules',
		description:
			'Master virtual consultation strategies to effectively educate and convert patients into clients remotely',
	},
	{
		Heading: 'Front of House Excellence',
		time: '45 min',
		modules: '7 modules',
		description:
			'Enhance patient experience with standout communication, scheduling, and front-desk service.',
	},
];

export const ClockIcon = () => {
	return (
		<svg width="16" height="15" viewBox="0 0 16 15" fill="none">
			<path
				d="M7.99992 3.4987V7.4987M14.6666 7.4987C14.6666 11.1806 11.6818 14.1654 7.99992 14.1654C4.31802 14.1654 1.33325 11.1806 1.33325 7.4987C1.33325 3.8168 4.31802 0.832031 7.99992 0.832031C11.6818 0.832031 14.6666 3.8168 14.6666 7.4987Z"
				stroke="#848484"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
export const BookIcon = () => {
	return (
		<svg width="16" height="15" viewBox="0 0 16 15" fill="none">
			<path
				d="M7.99992 4.16667C7.99992 3.45942 7.71897 2.78115 7.21887 2.28105C6.71877 1.78095 6.0405 1.5 5.33325 1.5H1.33325V11.5H5.99992C6.53035 11.5 7.03906 11.7107 7.41413 12.0858C7.7892 12.4609 7.99992 12.9696 7.99992 13.5M7.99992 4.16667V13.5M7.99992 4.16667C7.99992 3.45942 8.28087 2.78115 8.78097 2.28105C9.28106 1.78095 9.95934 1.5 10.6666 1.5H14.6666V11.5H9.99992C9.46949 11.5 8.96078 11.7107 8.5857 12.0858C8.21063 12.4609 7.99992 12.9696 7.99992 13.5"
				stroke="#848484"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
const RecommendedLearning = () => {
	return (
		<div className="mt-[32px]">
			<p className="text-[#2A2828] mb-[24px] text-[16px] font-medium">
				Recommended Learning
			</p>
			<div className="flex flex-row flex-wrap gap-[24px]">
				{Learnings.map((learning, index) => {
					return (
						<div
							className="bg-white flex-1 flex flex-col rounded-[10px] p-6"
							key={index}
						>
							<p className="text-[#2A2828] text-[14px] font-medium">
								{learning.Heading}
							</p>
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
							<p className="text-[#2A2828] text-[12px] font-normal mt-3">
								{learning.description}
							</p>
							<div className="flex gap-2.5 mt-[18px] items-center">
								<Button
									variant="ghost"
									className="bg-[#F1F5F9] cursor-pointer text-[#2A2828] text-[12px] font-normal px-3 py-[5px] rounded-[6px]"
								>
									Objections
								</Button>
								<Button
									variant="ghost"
									className="bg-[#F1F5F9] cursor-pointer text-[#2A2828] text-[12px] font-normal px-3 py-[5px] rounded-[6px]"
								>
									Pricing
								</Button>
							</div>
							<Button className="mt-[23px] cursor-pointer text-[14px] font-normal">
								Assign
							</Button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RecommendedLearning;
