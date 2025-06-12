'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { dashboardData } from '@/lib/db';
import { useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const RADIAN = Math.PI / 180;

// Custom label component to render the percentage
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
}: {
	cx: number;
	cy: number;
	midAngle: number;
	innerRadius: number;
	outerRadius: number;
	percent: number;
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);
	const percentValue = `${(percent * 100).toFixed(0)}%`;

	return (
		<g>
			{/* White background */}
			<rect
				x={x - 20}
				y={y - 12}
				width={40}
				height={24}
				rx={12}
				ry={12}
				fill="white"
				className="drop-shadow-sm"
			/>
			{/* Percentage text */}
			<text
				x={x}
				y={y}
				fill="#171717"
				textAnchor="middle"
				dominantBaseline="middle"
				className="text-sm font-medium"
			>
				{percentValue}
			</text>
		</g>
	);
};

export function SocialMediaAnalytics() {
	const [activeIndex, setActiveIndex] = useState(0);

	const onPieEnter = (_: unknown, index: number) => {
		setActiveIndex(index);
	};

	return (
		<Card className="bg-white border-[#e1e1e1] h-full">
			<CardHeader>
				<CardTitle className="text-[#171717]">Social Media Analytics</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex items-center justify-between sm:flex-row flex-col gap-3">
					<div className="h-50 w-50 relative">
						{/* Background circle */}
						<div className="absolute inset-0 rounded-full bg-primary/10 " />
						<ResponsiveContainer width="100%" height="100%">
							<PieChart>
								<Pie
									data={dashboardData.socialMediaData}
									cx="50%"
									cy="50%"
									innerRadius={60}
									outerRadius={80}
									dataKey="value"
									onMouseEnter={onPieEnter}
									labelLine={false}
									label={renderCustomizedLabel}
								>
									{dashboardData.socialMediaData.map((entry, index) => (
										<Cell
											key={entry.name}
											fill={entry.color}
											className={activeIndex === index ? 'stroke-2' : ''}
										/>
									))}
								</Pie>
							</PieChart>
						</ResponsiveContainer>
					</div>
					<div className="space-y-6">
						{dashboardData.socialMediaData.map((item, index) => (
							<div
								key={item.name}
								className="cursor-pointer"
								onMouseEnter={() => setActiveIndex(index)}
							>
								<div className="flex items-center gap-2 mb-1">
									<div
										className="w-3 h-3 rounded-full"
										style={{ backgroundColor: item.color }}
									/>
									<span className="text-sm text-[#848484]">{item.name}</span>
								</div>
								<p className="text-lg font-semibold text-[#171717]">
									{item.count}
								</p>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
