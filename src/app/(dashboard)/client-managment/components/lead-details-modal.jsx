'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { clientManagementData } from '@/lib/db';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

export function LeadDetailsModal({ isOpen, onClose, leadId }) {
	const lead = clientManagementData.leads.find((l) => l.id === leadId);
	const [status, setStatus] = useState(lead?.status || 'New');
	const [notes, setNotes] = useState(lead?.notes || '');

	if (!lead) {
		return null;
	}

	const handleStatusChange = (value) => {
		setStatus(value);
	};

	const handleNotesChange = (e) => {
		setNotes(e.target.value);
	};

	const handleSaveChanges = () => {
		// Save changes logic here
		onClose();
	};

	const handleConvertToPatient = () => {
		// Convert to patient logic here
		onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-[#171717]">
						Lead Details
					</DialogTitle>
					<p className="text-sm text-[#848484]">
						Viewing details for {lead.name}
					</p>
				</DialogHeader>

				<div className="space-y-6 pt-4">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<p className="text-sm text-[#848484] mb-1">Contact</p>
							<p className="text-[#171717] font-medium">{lead.contact}</p>
						</div>
						<div>
							<p className="text-sm text-[#848484] mb-1">Source</p>
							<p className="text-[#171717] font-medium">{lead.source}</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div>
							<p className="text-sm text-[#848484] mb-1">Status</p>
							<Badge
								className={`${
									lead.status === 'New'
										? 'bg-[#fef3cd] text-[#92400e]'
										: lead.status === 'Contacted'
											? 'bg-[#e0f2fe] text-[#0369a1]'
											: lead.status === 'Converted'
												? 'bg-[#effaf6] text-[#114439]'
												: 'bg-[#fef2f2] text-[#dc2626]'
								} hover:bg-opacity-90`}
							>
								{lead.status}
							</Badge>
						</div>
						<div>
							<p className="text-sm text-[#848484] mb-1">Created Date</p>
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4 text-[#848484]" />
								<p className="text-[#171717]">{lead.createdDate}</p>
							</div>
						</div>
					</div>

					<div>
						<p className="text-sm text-[#848484] mb-1">Notes</p>
						<p className="text-[#171717]">{lead.notes}</p>
					</div>

					<div className="space-y-2">
						<p className="text-sm text-[#848484] mb-1">Updated Status</p>
						<Select
							defaultValue={lead.status.toLowerCase()}
							onValueChange={handleStatusChange}
						>
							<SelectTrigger className="bg-white">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{clientManagementData.filterOptions.statuses
									.filter((status) => status.value !== 'all')
									.map((status) => (
										<SelectItem key={status.value} value={status.value}>
											{status.label}
										</SelectItem>
									))}
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<p className="text-sm text-[#848484] mb-1">Add Note</p>
						<Textarea
							placeholder="Add a new note"
							value={notes}
							onChange={handleNotesChange}
							className="min-h-[80px] bg-white"
						/>
					</div>

					<div className="flex items-center justify-between pt-2">
						<Button
							variant="outline"
							className="text-[#171717] border-[#e1e1e1] hover:bg-[#f8f9fa] hover:text-[#171717]"
							onClick={handleConvertToPatient}
						>
							+ Convert to patient
						</Button>
						<Button
							className="bg-[#ffa048] hover:bg-[#f68a15] text-white"
							onClick={handleSaveChanges}
						>
							Save Changes
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
