'use client';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [
	{ name: 'New Patients', value: 60, color: '#FFA048' },
	{ name: 'Returning Patients', value: 20, color: '#FFD48A' },
	{ name: 'Follow-up Visits', value: 20, color: '#FFCD96' },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const COLORS = data.map((d) => d.color);

function renderCustomLabel({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	index,
}: {
	cx: number;
	cy: number;
	midAngle: number;
	innerRadius: number;
	outerRadius: number;
	index: number;
}) {
	const RADIAN = Math.PI / 180;
	// Position label at the middle of the arc
	const radius = innerRadius + (outerRadius - innerRadius) * 1.15;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<g>
			<rect
				x={x - 18}
				y={y - 12}
				rx={8}
				ry={8}
				width={36}
				height={24}
				fill="#fff"
				stroke="#eee"
				strokeWidth={1}
				filter="url(#shadow)"
			/>
			<text
				x={x}
				y={y}
				textAnchor="middle"
				dominantBaseline="central"
				fontSize={14}
				fontWeight={700}
				fill="#222"
			>
				{`${data[index].value}%`}
			</text>
		</g>
	);
}

export default function PatientsDonutChart() {
	return (
		<div className="bg-white rounded-xl p-6 w-full h-auto">
			<h3 className="font-semibold mb-4 text-[16px] w-full">Your Patients</h3>
			<div className="flex flex-col md:flex-row items-center md:items-center">
				<div className="w-full flex justify-center items-center md:w-auto">
					<ResponsiveContainer width={220} height={220}>
						<PieChart>
							<defs>
								<filter
									id="shadow"
									x="-20%"
									y="-20%"
									width="140%"
									height="140%"
								>
									<feDropShadow
										dx="0"
										dy="1"
										stdDeviation="2"
										floodColor="#000"
										floodOpacity="0.08"
									/>
								</filter>
							</defs>
							<Pie
								data={data}
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={90}
								dataKey="value"
								startAngle={90}
								endAngle={-270}
								label={renderCustomLabel}
								labelLine={false}
								isAnimationActive={false}
							>
								{data.map((entry) => (
									<Cell key={entry.name} fill={entry.color} />
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
				</div>
				<div className="w-full flex flex-col justify-center items-center mt-4 md:mt-0 md:ml-6 md:w-[220px] md:items-start lg:items-end lg:w-[260px]">
					{data.map((d) => (
						<div
							key={d.name}
							className="flex items-center gap-2 text-sm w-full whitespace-nowrap mb-2"
						>
							<span
								className="inline-block w-3 h-3 rounded-full"
								style={{ background: d.color }}
							/>
							<span className="text-[#222]">{d.name}</span>
							<span className="font-bold text-[#222] ml-2">{d.value}%</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
