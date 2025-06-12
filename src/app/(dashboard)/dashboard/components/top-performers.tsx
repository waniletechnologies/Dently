'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const performersData = [
	{
		rank: '01',
		medal: '🏆',
		name: 'David Hales',
		totalCalls: 150,
		conversionRate: '72%',
	},
	{
		rank: '02',
		medal: '🥈',
		name: 'David Hales',
		totalCalls: 160,
		conversionRate: '60%',
	},
	{
		rank: '03',
		medal: '🥉',
		name: 'David Hales',
		totalCalls: 120,
		conversionRate: '42%',
	},
	{
		rank: '04',
		medal: '',
		name: 'David Hales',
		totalCalls: 100,
		conversionRate: '22%',
	},
];

export function TopPerformers() {
	return (
		<Card className="bg-white border-[#e1e1e1]">
			<CardHeader>
				<CardTitle className="text-[#171717] text-xl font-semibold">
					Top Performers
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="rounded-lg ">
					<div className="grid grid-cols-4 px-4 py-3 text-[12px] bg-primary/5 text-[#6B7280]">
						<div>Rank</div>
						<div>Name</div>
						<div>Total Calls</div>
						<div>Conversion Rate</div>
					</div>
					<div className="divide-y divide-[#F3F4F6]">
						{performersData.map((performer, index) => (
							<div
								key={performer.rank}
								className={`grid grid-cols-4 px-4 py-3 text-sm ${
									index === 0
										? 'border-l-4 border-primary/80'
										: index === 1
											? 'border-l-4 border-primary'
											: index === 2
												? 'border-l-4 border-primary/20'
												: ''
								}`}
							>
								<div className="flex items-center gap-2">
									<span>{performer.rank}</span>
									{performer.medal && <span>{performer.medal}</span>}
								</div>
								<div className="text-[#171717] font-medium">
									{performer.name}
								</div>
								<div>{performer.totalCalls}</div>
								<div>{performer.conversionRate}</div>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
