import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Edit } from 'lucide-react';
import React from 'react';
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { LuClock12 } from 'react-icons/lu';
const getStatusBadge = (status) => {
	switch (status) {
		case 'Scheduled':
			return (
				<Badge className="bg-[#e4f9ff] text-[#0B92B8] hover:bg-[#e0f2fe]">
					{status}
				</Badge>
			);
		case 'Cancelled':
			return (
				<Badge className="bg-[#FFE5E6] text-[#DC2626] hover:bg-[#fef2f2]">
					{status}
				</Badge>
			);
		case 'Completed':
			return (
				<Badge className="bg-[#EFFAF6] text-[#114439] hover:bg-[#effaf6]">
					{status}
				</Badge>
			);
		case 'Paid':
			return (
				<Badge className="bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]">
					{status}
				</Badge>
			);
		case 'Not Booked':
			return (
				<Badge className="bg-[#FFE5E6] text-[#E63E65] hover:bg-[#fef2f2]">
					<IoMdClose /> {status}
				</Badge>
			);
		case 'Pending':
			return (
				<Badge className="bg-[#FEF5E0] text-[#E1B348] hover:bg-[#FEF5E0]">
					<LuClock12 /> {status}
				</Badge>
			);
		default:
			return (
				<Badge className="bg-[#f0f0f0] text-[#848484] hover:bg-[#f0f0f0]">
					{status}
				</Badge>
			);
	}
};

const getDirectionIcon = (direction) => {
	return direction === 'Outbound' ? (
		<FiArrowUpRight className="h-4 w-4 text-[#09924F]" />
	) : (
		<FiArrowDownLeft className="h-4 w-4 text-[#2563EE]" />
	);
};
const Calls = ({ patient }) => {
	return (
		<div>
			<h3 className="text-lg font-medium text-[#171717] mb-4">Calls History</h3>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Direction</TableHead>
						<TableHead>Date & Time</TableHead>
						<TableHead>Duration</TableHead>
						<TableHead>Booking</TableHead>
						<TableHead>Follow-up</TableHead>
						<TableHead className="text-right">Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{patient.callsHistory.map((call) => (
						<TableRow key={call.id}>
							<TableCell>
								<div className="flex items-center gap-2">
									{getDirectionIcon(call.direction)}
									<span
										className={
											call.direction === 'Outbound'
												? 'text-[#10b981]'
												: 'text-[#3b82f6]'
										}
									>
										{call.direction}
									</span>
								</div>
							</TableCell>
							<TableCell>{call.dateTime}</TableCell>
							<TableCell>{call.duration}</TableCell>
							<TableCell>{getStatusBadge(call.booking)}</TableCell>
							<TableCell>{getStatusBadge(call.followUp)}</TableCell>
							<TableCell className="text-right">
								<Button variant="ghost" size="sm">
									<Edit className="h-4 w-4" />
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default Calls;
