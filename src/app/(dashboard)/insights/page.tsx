/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InsightsData } from '@/lib/db';
import {
	type JSXElementConstructor,
	type Key,
	type ReactElement,
	type ReactNode,
	type ReactPortal,
	useState,
} from 'react';
import { FiChevronDown } from 'react-icons/fi';
import InsightCard from './components/insight-card';
import InsightsMetric from './components/insights-metric';
import PatientsDonutChart from './components/patients-donut-chart';
import RevenueTrendsChart from './components/revenue-chart';

const insightCards = [
	{
		id: '1',
		title: 'Improve Hygiene Upsell Rates',
		bullets: [
			'Patients are often declining fluoride. Consider offering a bundled package or positioning it earlier in conversation.',
			'Use value-based language instead of focusing on cost when introducing add-ons.',
		],
		tags: ['Low Acceptance', 'Hygiene', 'Call Objection'],
		subtext: 'Based on last 30 days of call and case acceptance data',
	},
	{
		id: '2',
		title: 'Offer Earlier Appointments',
		bullets: [
			'Patients frequently drop off at scheduling stage when not offered convenient appointment times.',
			'Try offering the earliest available slot first before suggesting alternatives.',
		],
		tags: ['Scheduling', 'Drop-off'],
		subtext: 'Based on call analysis from April 3-17',
	},
	{
		id: '3',
		title: 'Use Patient Names More Often',
		bullets: [
			'Call analysis shows low personalization rate compared to successful conversions.',
			"Using a patient's name at least 3 times per call correlates with 24% higher conversion.",
		],
		tags: ['Personalization', 'Conversion Rate'],
		subtext: 'Based on sentiment analysis of last 120 calls',
	},
];

export default function PamsInsights() {
	const [selectedStatus, setSelectedStatus] = useState('All');

	const handleDateChange = (status: string) => {
		setSelectedStatus(status);
	};

	return (
		<main className="p-3 sm:p-6">
			<div className="flex items-center justify-between mb-6">
				<h1 className="font-semibold text-[20px] leading-[17px] tracking-[-0.03em] text-[#2A2828]">
					Pam&apos;s Insights
				</h1>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="flex items-center gap-2 bg-white"
						>
							{selectedStatus}
							<FiChevronDown className="h-4 w-4 ml-2" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start" className="w-[200px]">
						{InsightsData.filterOptions.timeFrames.map(
							(option: {
								value: Key | null | undefined;
								label:
									| string
									| number
									| bigint
									| boolean
									| ReactElement<unknown, string | JSXElementConstructor<any>>
									| Iterable<ReactNode>
									| ReactPortal
									| Promise<
											| string
											| number
											| bigint
											| boolean
											| ReactPortal
											| ReactElement<
													unknown,
													string | JSXElementConstructor<any>
											  >
											| Iterable<ReactNode>
											| null
											| undefined
									  >
									| null
									| undefined;
							}) => (
								<DropdownMenuItem
									key={option.value}
									onSelect={() => handleDateChange(option.label as string)}
								>
									{option.label}
								</DropdownMenuItem>
							),
						)}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<InsightsMetric status={selectedStatus} />
			<Tabs defaultValue="insights" className="mt-8">
				<TabsList className="mb-4 border-2 border-dotted">
					<TabsTrigger className="text-[#2A2828]" value="insights">
						Pam&apos;s Insights
					</TabsTrigger>
					<TabsTrigger value="trends">Performance Trends</TabsTrigger>
				</TabsList>
				<TabsContent value="insights">
					{insightCards.map((card) => (
						<InsightCard key={card.id} {...card} />
					))}
				</TabsContent>
				<TabsContent value="trends">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<RevenueTrendsChart />
						<PatientsDonutChart />
					</div>
				</TabsContent>
			</Tabs>
		</main>
	);
}
