'use client';

import {
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	//   PolarRadiusAxis,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ skill: 'Rapport', value: 60 },
	{ skill: 'Discovery', value: 80 },
	{ skill: 'Presentation', value: 90 },
	{ skill: 'Objection Handling', value: 65 },
	{ skill: 'Closing', value: 70 },
];

export default function SalesRadarChart() {
	return (
		<div className="w-full h-[400px]">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="skill" />
					{/* <PolarRadiusAxis angle={30} domain={[0, 100]} /> */}
					<Radar
						name="Score"
						dataKey="value"
						stroke="#ff7300"
						fill="#ff7300"
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
}
