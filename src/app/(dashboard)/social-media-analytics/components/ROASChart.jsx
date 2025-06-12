import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from 'recharts';

const ROASChart = ({ data }) => {
	const campaignData = [
		{ name: 'New Patient Promo', value: 450 },
		{ name: 'Teeth Whitening', value: 350 },
		{ name: 'Invisalign Offer', value: 280 },
		{ name: 'Family Dentistry', value: 220 },
		{ name: 'Emergency Care', value: 150 },
	];

	return (
		<div className="h-[400px] w-full">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={campaignData}
					margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
				>
					<CartesianGrid
						strokeDasharray="3 3"
						horizontal={true}
						vertical={false}
					/>
					<XAxis
						dataKey="name"
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: 12, fill: '#666' }}
					/>
					<YAxis
						axisLine={false}
						tickLine={false}
						domain={[0, 600]}
						ticks={[0, 150, 300, 450, 600]}
					/>
					<Bar
						dataKey="value"
						fill="#f97316"
						radius={[4, 4, 0, 0]}
						barSize={80}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ROASChart;
