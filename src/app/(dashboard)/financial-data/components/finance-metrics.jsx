'use client';

import { Card, CardContent } from '@/components/ui/card';
import { financialData } from '@/lib/db';

export function FinanceMetrics() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{financialData.metrics.map((metric, index) => {
				return (
					<Card key={index} className="bg-white h-full p-0 border-[#e1e1e1]">
						<CardContent className="px-4 py-2">
							<div className="flex w-full   h-20 flex-col justify-between">
								<div className="flex items-center  w-full justify-between">
									<p className="text-sm text-[#848484] mb-1">{metric.title}</p>
								</div>
								<p className="text-2xl font-semibold text-[#171717]">
									{metric.value}
								</p>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
