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
import { useState } from 'react';

export function AddPatientModal({ isOpen, onClose, onAddPatient }) {
	const [formData, setFormData] = useState({
		fullName: '',
		dentallyId: '',
		phoneNumber: '',
		email: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddPatient(formData);
		onClose();
		setFormData({ fullName: '', dentallyId: '', phoneNumber: '', email: '' });
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-[#171717]">
						Add Patient
					</DialogTitle>
					<p className="text-sm text-[#848484]">
						Enter the Patient information, fields marked with * are required.
					</p>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-4 pt-4">
					<div className="grid grid-cols-2 gap-4">
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
						<div className="space-y-2">
							<Label htmlFor="dentallyId" className="text-[#171717]">
								Dentally ID
							</Label>
							<Input
								id="dentallyId"
								name="dentallyId"
								placeholder="Enter Dentally ID"
								value={formData.dentallyId}
								onChange={handleChange}
								className="bg-white"
							/>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="phoneNumber" className="text-[#171717]">
								Phone Number <span className="text-[#dc2626]">*</span>
							</Label>
							<Input
								id="phoneNumber"
								name="phoneNumber"
								placeholder="+44 7123 456789"
								value={formData.phoneNumber}
								onChange={handleChange}
								required
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

					<Button
						type="submit"
						className="w-full bg-[#ffa048] hover:bg-[#f68a15] text-white"
					>
						Add Patient
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
