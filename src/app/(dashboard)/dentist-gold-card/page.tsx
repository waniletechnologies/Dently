'use client';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GoldCardData } from '@/lib/db';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import CommissionDistribution from './components/commission-distribution';
import GoldCardMetrics from './components/gold-card-metrics';
import ReferralPerformance from './components/referral-performance';
import ReferralsManagement from './components/referrals-management';

export default function DentistGoldCardPage() {
	const [selectedStatus, setSelectedStatus] = useState('All');

	const handleDateChange = (status: string) => {
		setSelectedStatus(status);
	};
	return (
		<main className="p-3 sm:p-6">
			<div className="flex items-center justify-between mb-6">
				<h1 className="font-semibold text-[20px] leading-[17px] tracking-[-0.03em] text-[#2A2828]">
					Gold Card
				</h1>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="flex items-center gap-2 bg-white"
						>
							{selectedStatus}
							<FiChevronDown className="h-4 w-4 ml-2" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start" className="w-[200px]">
						{GoldCardData.filterOptions.timeFrames.map((option) => (
							<DropdownMenuItem
								key={option.value}
								onSelect={() => handleDateChange(option.label as string)}
							>
								{option.label}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<GoldCardMetrics />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<ReferralPerformance />
				<CommissionDistribution />
			</div>

			<Tabs defaultValue="referrals" className="mt-8">
				<TabsList className="mb-4 border-2 border-dotted">
					<TabsTrigger className="text-[#2A2828]" value="referrals">
						Referrals Management
					</TabsTrigger>
					<TabsTrigger value="commission">Commission Payments</TabsTrigger>
				</TabsList>
				<TabsContent value="referrals">
					<ReferralsManagement />
				</TabsContent>
			</Tabs>
		</main>
	);
}
