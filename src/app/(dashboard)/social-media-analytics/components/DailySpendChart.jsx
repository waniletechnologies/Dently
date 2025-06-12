import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const DailySpendChart = ({ data }) => {
	return (
		<div className="h-60">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
					<XAxis
						dataKey="date"
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: 12, fill: '#666' }}
					/>
					<YAxis
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: 12, fill: '#666' }}
					/>
					<Tooltip
						contentStyle={{
							backgroundColor: 'white',
							border: '1px solid #f0f0f0',
							borderRadius: '8px',
							padding: '10px',
						}}
					/>
					<Bar
						dataKey="spend"
						fill="#f97316"
						radius={[4, 4, 0, 0]}
						barSize={20}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default DailySpendChart;
