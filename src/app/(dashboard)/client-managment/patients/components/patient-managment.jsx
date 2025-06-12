'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { patientManagementData } from '@/lib/db';
import { Edit, Eye, MoreHorizontal, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function PatientsTable({
	onViewPatient,
	onEditPatient,
	onDeletePatient,
}) {
	const [patients] = useState(patientManagementData.patients);

	const getStatusBadge = (status) => {
		switch (status) {
			case 'Active':
				return (
					<Badge className="bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]">
						{status}
					</Badge>
				);
			case 'In Active':
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
					<TableHead className="text-[#848484] font-medium">Phone</TableHead>
					<TableHead className="text-[#848484] font-medium">Email</TableHead>
					<TableHead className="text-[#848484] font-medium">
						Last Visit
					</TableHead>
					<TableHead className="text-[#848484] font-medium">Status</TableHead>
					<TableHead className="text-[#848484] font-medium text-right">
						Action
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{patients.map((patient) => (
					<TableRow
						key={patient.id}
						className="border-b border-[#f0f0f0] hover:bg-[#f8f9fa]"
					>
						<TableCell className="font-medium text-[#171717]">
							<Link
								href={`/client-management/patients/${patient.id}`}
								className="hover:text-[#ffa048]"
							>
								{patient.name}
							</Link>
						</TableCell>
						<TableCell className="text-[#171717]">{patient.phone}</TableCell>
						<TableCell className="text-[#171717]">{patient.email}</TableCell>
						<TableCell className="text-[#171717]">
							{patient.lastVisit}
						</TableCell>
						<TableCell>{getStatusBadge(patient.status)}</TableCell>
						<TableCell className="text-right">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" className="h-8 w-8 p-0">
										<MoreHorizontal className="h-4 w-4" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end" className="w-[160px]">
									<DropdownMenuItem
										onClick={() => onViewPatient(patient.id)}
										className="flex items-center gap-2"
									>
										<Eye className="h-4 w-4" />
										View
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => onEditPatient(patient.id)}
										className="flex items-center gap-2"
									>
										<Edit className="h-4 w-4" />
										Edit
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => onDeletePatient(patient.id)}
										className="flex items-center gap-2 text-[#dc2626]"
									>
										<Trash2 className="h-4 w-4" />
										Delete
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
