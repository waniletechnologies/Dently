'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { clientManagementData } from '@/lib/db';
import { useState } from 'react';

export function AddLeadModal({ isOpen, onClose, onAddLead }) {
	const [formData, setFormData] = useState({
		fullName: '',
		phoneNumber: '',
		email: '',
		source: '',
		notes: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSourceChange = (value) => {
		setFormData((prev) => ({ ...prev, source: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddLead(formData);
		onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-[#171717]">
						Add New Lead
					</DialogTitle>
					<p className="text-sm text-[#848484]">
						Enter the lead information, fields marked with * are required.
					</p>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-4 pt-4">
					<div className="space-y-2">
						<Label htmlFor="fullName" className="text-[#171717]">
							Full Name <span className="text-[#dc2626]">*</span>
						</Label>
						<Input
							id="fullName"
							name="fullName"
							placeholder="Enter lead name"
							value={formData.fullName}
							onChange={handleChange}
							required
							className="bg-white"
						/>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="phoneNumber" className="text-[#171717]">
								Phone Number
							</Label>
							<Input
								id="phoneNumber"
								name="phoneNumber"
								placeholder="+44 7123 456789"
								value={formData.phoneNumber}
								onChange={handleChange}
								className="bg-white"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email" className="text-[#171717]">
								Email
							</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="lead@example.com"
								value={formData.email}
								onChange={handleChange}
								className="bg-white"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="source" className="text-[#171717]">
							Lead Source <span className="text-[#dc2626]">*</span>
						</Label>
						<Select required onValueChange={handleSourceChange}>
							<SelectTrigger className="bg-white">
								<SelectValue placeholder="Select source" />
							</SelectTrigger>
							<SelectContent>
								{clientManagementData.filterOptions.sources
									.filter((source) => source.value !== 'all')
									.map((source) => (
										<SelectItem key={source.value} value={source.value}>
											{source.label}
										</SelectItem>
									))}
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="notes" className="text-[#171717]">
							Notes
						</Label>
						<Textarea
							id="notes"
							name="notes"
							placeholder="Any additional information about this lead"
							value={formData.notes}
							onChange={handleChange}
							className="min-h-[100px] bg-white"
						/>
					</div>

					<Button
						type="submit"
						className="w-full bg-[#ffa048] hover:bg-[#f68a15] text-white"
					>
						Add Lead
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
