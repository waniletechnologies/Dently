'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import type { TooltipProps } from 'recharts';

const data = [
	{ month: 'Jan', value: 20000 },
	{ month: 'Feb', value: 40000 },
	{ month: 'Mar', value: 30000 },
	{ month: 'Apr', value: 45000 },
	{ month: 'May', value: 35000 },
	{ month: 'Jun', value: 70000 },
	{ month: 'Jul', value: 30000 },
	{ month: 'Aug', value: 42000 },
	{ month: 'Sep', value: 35000 },
	{ month: 'Oct', value: 40000 },
	{ month: 'Nov', value: 45000 },
	{ month: 'Dec', value: 50000 },
];

const CustomTooltip = ({
	active,
	payload,
	label,
}: TooltipProps<number, string>) => {
	if (active && payload && payload.length) {
		return (
			<div
				style={{
					backgroundColor: '#FFA048',
					color: 'white',
					padding: '8px 12px',
					borderRadius: '6px',
					fontSize: '14px',
					whiteSpace: 'nowrap',
				}}
			>
				{`${payload[0].value?.toLocaleString()} ${label}`}
			</div>
		);
	}
	return null;
};

export default function RevenueTrendsChart() {
	return (
		<Card className="bg-white rounded-xl w-full h-[320px] border-none">
			<CardContent className="p-0 pt-6 px-6">
				<h3 className="font-semibold mb-4 text-[16px]">Revenue Trends</h3>
				<div className="h-56 w-full">
					<ResponsiveContainer width="100%" height="100%">
						<AreaChart data={data}>
							<defs>
								<linearGradient id="revenueColor" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#FFA048" stopOpacity={0.3} />
									<stop offset="95%" stopColor="#FFA048" stopOpacity={0} />
								</linearGradient>
							</defs>
							<CartesianGrid
								strokeDasharray="3 3"
								horizontal
								vertical={false}
								stroke="#e5e5e5"
							/>
							<XAxis
								dataKey="month"
								axisLine={false}
								tickLine={false}
								tick={{ fontSize: 12, fill: '#848484' }}
							/>
							<YAxis
								axisLine={false}
								tickLine={false}
								tick={{ fontSize: 12, fill: '#848484' }}
								tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
							/>
							<Tooltip content={<CustomTooltip />} cursor={false} />
							<Area
								type="monotone"
								dataKey="value"
								stroke="#FFA048"
								fill="url(#revenueColor)"
								strokeWidth={2}
								dot={false}
								activeDot={{ r: 6, fill: '#FFA048' }}
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
}
