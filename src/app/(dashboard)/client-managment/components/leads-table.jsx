'use client';

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
import { clientManagementData } from '@/lib/db';
import { useState } from 'react';

export function LeadsTable({ onViewLead }) {
	const [leads] = useState(clientManagementData.leads);

	const getStatusBadge = (status) => {
		switch (status) {
			case 'New':
				return (
					<Badge className="bg-[#fef3cd] text-[#92400e] hover:bg-[#fef3cd]">
						{status}
					</Badge>
				);
			case 'Contacted':
				return (
					<Badge className="bg-[#e0f2fe] text-[#0369a1] hover:bg-[#e0f2fe]">
						{status}
					</Badge>
				);
			case 'Converted':
				return (
					<Badge className="bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]">
						{status}
					</Badge>
				);
			case 'Lost':
				return (
					<Badge className="bg-[#fef2f2] text-[#dc2626] hover:bg-[#fef2f2]">
						{status}
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

	return (
		<Table>
			<TableHeader>
				<TableRow className="border-b border-[#e1e1e1]">
					<TableHead className="text-[#848484] font-medium">Name</TableHead>
					<TableHead className="text-[#848484] font-medium">Contact</TableHead>
					<TableHead className="text-[#848484] font-medium">Email</TableHead>
					<TableHead className="text-[#848484] font-medium">Source</TableHead>
					<TableHead className="text-[#848484] font-medium">Status</TableHead>
					<TableHead className="text-[#848484] font-medium">
						Created Date
					</TableHead>
					<TableHead className="text-[#848484] font-medium">Notes</TableHead>
					<TableHead className="text-[#848484] font-medium text-right">
						Actions
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{leads.map((lead) => (
					<TableRow
						key={lead.id}
						className="border-b border-[#f0f0f0] hover:bg-[#f8f9fa]"
					>
						<TableCell className="font-medium text-[#171717]">
							{lead.name}
						</TableCell>
						<TableCell className="text-[#171717]">{lead.contact}</TableCell>
						<TableCell className="text-[#171717]">{lead.email}</TableCell>
						<TableCell className="text-[#171717]">{lead.source}</TableCell>
						<TableCell>{getStatusBadge(lead.status)}</TableCell>
						<TableCell className="text-[#171717]">{lead.createdDate}</TableCell>
						<TableCell className="text-[#171717] max-w-[200px] truncate">
							{lead.notes}
						</TableCell>
						<TableCell className="text-right">
							<Button
								variant="ghost"
								className="text-[#ffa048] hover:text-[#f68a15] hover:bg-transparent"
								onClick={() => onViewLead(lead.id)}
							>
								View
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
