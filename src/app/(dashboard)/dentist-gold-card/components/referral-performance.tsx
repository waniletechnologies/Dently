import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import type {
	NameType,
	ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

const CustomTooltip = ({
	active,
	payload,
}: TooltipProps<ValueType, NameType>) => {
	if (active && payload && payload.length) {
		return (
			<div
				style={{
					backgroundColor: '#F68A15',
					color: 'white',
					padding: '8px 12px',
					borderRadius: '6px',
					fontSize: '14px',
					whiteSpace: 'nowrap',
				}}
			>
				{`People Referral : ${payload[0].value}`}
			</div>
		);
	}
	return null;
};

const referralData = [
	{ month: 'Jan', value: 20 },
	{ month: 'Feb', value: 20 },
	{ month: 'Mar', value: 45 },
	{ month: 'Apr', value: 25 },
	{ month: 'May', value: 35 },
	{ month: 'Jun', value: 39 },
	{ month: 'Jul', value: 40 },
	{ month: 'Aug', value: 60 },
	{ month: 'Sep', value: 35 },
	{ month: 'Oct', value: 45 },
	{ month: 'Nov', value: 40 },
	{ month: 'Dec', value: 35 },
];

export default function ReferralPerformance() {
	return (
		<Card className="bg-white mt-[36px] border-none shadow-none">
			<CardHeader>
				<CardTitle className="text-[#1F1F1F] text-[16px] font-semibold">
					Referral Performance
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-60 w-full">
					<ResponsiveContainer width="100%" height="100%">
						<AreaChart
							width={100}
							height={100}
							data={referralData}
							margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
						>
							<defs>
								<linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#F68A15" stopOpacity={0.3} />
									<stop offset="95%" stopColor="#F68A15" stopOpacity={0} />
								</linearGradient>
							</defs>
							<CartesianGrid
								strokeDasharray="3 3"
								horizontal={true}
								vertical={false}
								stroke="#e5e5e5"
							/>
							<XAxis
								dataKey="month"
								axisLine={false}
								tickLine={false}
								tick={{ fontSize: 11, fill: '#BCBCBC' }}
							/>
							<YAxis
								scale="linear"
								axisLine={false}
								tickLine={false}
								tick={{ fontSize: 10, fill: '#848484' }}
								domain={[0, 16]}
								ticks={[0, 20, 40, 60, 80]}
								interval={0}
							/>
							<Tooltip content={<CustomTooltip />} cursor={false} />
							<Area
								type="linear"
								dataKey="value"
								stroke="#F68A15"
								fill="url(#colorValue)"
								strokeWidth={2}
								dot={false}
								activeDot={{ r: 6, fill: '#F68A15' }}
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
}
