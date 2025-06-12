'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { dashboardData } from '@/lib/db';

export function CampaignPerformance() {
	return (
		<Card className="bg-white border-[#e1e1e1]">
			<CardHeader>
				<CardTitle className="text-[#171717]">Campaign Performance</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow className="border-b border-[#e1e1e1]">
							<TableHead className="text-[#848484] font-medium">
								Ad Name
							</TableHead>
							<TableHead className="text-[#848484] font-medium">
								Impressions
							</TableHead>
							<TableHead className="text-[#848484] font-medium">
								Conversions
							</TableHead>
							<TableHead className="text-[#848484] font-medium">
								Clicks
							</TableHead>
							<TableHead className="text-[#848484] font-medium">CTR</TableHead>
							<TableHead className="text-[#848484] font-medium">
								Status
							</TableHead>
							<TableHead className="text-[#848484] font-medium">ROAS</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{dashboardData.campaignData.map((campaign, index) => (
							<TableRow key={index} className="border-b border-[#f0f0f0]">
								<TableCell className="text-[#171717] font-medium py-4">
									{campaign.name}
								</TableCell>
								<TableCell className="text-[#171717] py-4">
									{campaign.impressions}
								</TableCell>
								<TableCell className="text-[#171717] py-4">
									{campaign.conversions}
								</TableCell>
								<TableCell className="text-[#171717] py-4">
									{campaign.clicks}
								</TableCell>
								<TableCell className="text-[#171717] py-4">
									{campaign.ctr}
								</TableCell>
								<TableCell className="py-4">
									<Badge className="bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]">
										{campaign.status}
									</Badge>
								</TableCell>
								<TableCell className="text-[#171717] py-4">
									{campaign.roas}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
