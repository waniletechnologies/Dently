'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { callTrackingData } from '@/lib/db';
import { Edit } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { LuClock12 } from 'react-icons/lu';
import { callIcon } from '../../../../../public/images';

export function CallTable() {
	const router = useRouter();
	const getStatusBadge = (status: string, type: 'booking' | 'followup') => {
		const baseClasses = 'text-xs font-medium';

		if (type === 'booking') {
			switch (status) {
				case 'Booked':
					return (
						<Badge
							className={`${baseClasses} bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]`}
						>
							✓ Booked
						</Badge>
					);
				case 'Not Booked':
					return (
						<Badge
							className={`${baseClasses} bg-[#FFE5E6] text-[#E63E65] hover:bg-[#fef2f2]`}
						>
							<IoMdClose /> Not Booked
						</Badge>
					);
				default:
					return (
						<Badge
							className={`${baseClasses} bg-[#f0f0f0] text-[#848484] hover:bg-[#f0f0f0]`}
						>
							{status}
						</Badge>
					);
			}
		}

		switch (status) {
			case 'Done':
				return (
					<Badge
						className={`${baseClasses} bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]`}
					>
						✓ Done
					</Badge>
				);
			case 'Pending':
				return (
					<Badge
						className={`${baseClasses} bg-[#FEF5E0] text-[#E1B348] hover:bg-[#FEF5E0]`}
					>
						<LuClock12 /> Pending
					</Badge>
				);
			default:
				return (
					<Badge
						className={`${baseClasses} bg-[#f0f0f0] text-[#848484] hover:bg-[#f0f0f0]`}
					>
						{status}
					</Badge>
				);
		}
	};

	return (
		<Card className="bg-white border-[#e1e1e1] mb-6">
			<CardContent className="p-0">
				<Table>
					<TableHeader>
						<TableRow className="border-b text-[#2A2828] font-medium border-[#e1e1e1]">
							<TableHead className="px-6 text-[#2A2828] py-4">
								Caller Name
							</TableHead>
							<TableHead className=" text-[#2A2828]">Number</TableHead>
							<TableHead className=" text-[#2A2828]">Date & Time</TableHead>
							<TableHead className=" text-[#2A2828]">Duration</TableHead>
							<TableHead className=" text-[#2A2828]">Booking</TableHead>
							<TableHead className=" text-[#2A2828]">Follow-up</TableHead>
							<TableHead className=" text-[#2A2828]">Staff Member</TableHead>
							<TableHead className=" w-20" />
						</TableRow>
					</TableHeader>
					<TableBody>
						{callTrackingData.calls.map((call: any) => (
							<TableRow
								key={call.id}
								className="border-b border-[#f0f0f0] text-[#595858] hover:bg-[#f8f9fa]"
							>
								<TableCell className="px-6 py-4">
									<Link
										href={`/call-tracking/${call.id}`}
										className="text-[#171717] hover:text-primary"
									>
										{call.callerName}
									</Link>
								</TableCell>
								<TableCell className="text-[#171717]">{call.number}</TableCell>
								<TableCell className="text-[#171717]">
									{call.dateTime}
								</TableCell>
								<TableCell className="text-[#171717]">
									{call.duration}
								</TableCell>
								<TableCell>
									{getStatusBadge(call.bookingStatus, 'booking')}
								</TableCell>
								<TableCell>
									{getStatusBadge(call.followUpStatus, 'followup')}
								</TableCell>
								<TableCell>
									<span className="text-[#171717] text-sm">
										{call.staffMember}
									</span>
								</TableCell>
								<TableCell>
									<div className="flex items-center gap-1">
										<Image
											src={callIcon}
											alt="call"
											className="cursor-pointer"
										/>
										<Button
											onClick={() => router.push(`/call-tracking/${call.id}`)}
											variant="ghost"
											size="sm"
											className="h-8 w-8 p-0 cursor-pointer text-[#595858] hover:text-[#171717]"
										>
											<Edit className="h-4 w-4" />
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
