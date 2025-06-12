'use client';

import { Card, CardContent } from '@/components/ui/card';
import { dashboardData } from '@/lib/db';
import Image from 'next/image';
import {
	appointments,
	call,
	revenue,
	show,
} from '../../../../../public/images';
const iconMap = {
	chart: revenue,
	calendar: appointments,
	userX: show,
	phone: call,
};

export function MetricsCards() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{dashboardData.metrics.map((metric, index) => {
				const Icon = iconMap[metric.icon as keyof typeof iconMap];
				return (
					<Card key={index} className="bg-white border-[#e1e1e1]">
						<CardContent className="py-2 px-4">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm text-[#848484] mb-1">{metric.title}</p>
									<p className="text-2xl font-semibold text-[#171717]">
										{metric.value}
									</p>
									<p
										className={`text-xs mt-1 ${metric.changeType === 'positive' ? 'text-[#83ad7d]' : 'text-[#ff7d7d]'}`}
									>
										{metric.change}
									</p>
								</div>
								<div className=" flex items-center justify-center">
									<Image
										src={Icon}
										alt={metric.title}
										width={100}
										height={100}
										className="object-cover"
									/>
								</div>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
