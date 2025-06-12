import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const PerformanceTrends = ({ data }) => {
	return (
		<div className="bg-white rounded-lg p-4 sm:p-6 space-y-4">
			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
				<h2 className="text-lg font-medium">Performance Trends</h2>
				<div className="flex flex-wrap items-center gap-4 text-sm">
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 rounded-full bg-[#DC2626]" />
						<span>Conversions</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 rounded-full bg-[#1D90FF]" />
						<span>Clicks</span>
					</div>
				</div>
			</div>
			<div className="h-[250px] sm:h-[300px]">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						data={data}
						margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
					>
						<CartesianGrid
							strokeDasharray="3 3"
							stroke="#f0f0f0"
							vertical={false}
						/>
						<XAxis
							dataKey="date"
							axisLine={false}
							tickLine={false}
							tick={{ fontSize: 11, fill: '#666' }}
							padding={{ left: 20, right: 20 }}
						/>
						<YAxis
							axisLine={false}
							tickLine={false}
							tick={{ fontSize: 11, fill: '#666' }}
							domain={[0, 600]}
							ticks={[0, 150, 300, 450, 600]}
						/>
						<Tooltip />
						<Line
							type="monotone"
							dataKey="conversions"
							stroke="#ef4444"
							strokeWidth={2}
							dot={false}
							activeDot={{ r: 6 }}
						/>
						<Line
							type="monotone"
							dataKey="clicks"
							stroke="#3b82f6"
							strokeWidth={2}
							dot={false}
							activeDot={{ r: 6 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default PerformanceTrends;
