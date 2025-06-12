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
import { financialData } from '@/lib/db';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';

export function AddFinancialData({ isOpen, onClose, onAddFinance }) {
	const [formData, setFormData] = useState({
		date: new Date(),
		patient: '',
		description: '',
		amount: '',
		method: '',
		status: '',
		notes: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleDateChange = (date) => {
		setFormData((prev) => ({ ...prev, date }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddFinance(formData);
		onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[500px] max-h-[95vh] bg-[#FAFAFA] overflow-x-auto">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold text-[#171717]">
						Add Financial Data
					</DialogTitle>
					<p className="text-sm text-[#848484]">
						Enter the financial data. Field marked with * are required.
					</p>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-4 pt-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="date" className="text-[#171717]">
								Date <span className="text-[#dc2626]">*</span>
							</Label>
							<div className="relative">
								<DatePicker
									selected={formData.date}
									onChange={handleDateChange}
									dateFormat="dd/MM/yyyy"
									className="w-full px-2 py-1 border rounded-md bg-white"
									required
								/>
								<Calendar className="absolute right-2 top-2 h-5 w-5 text-gray-500" />
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="patient" className="text-[#171717]">
								Patient <span className="text-[#dc2626]">*</span>
							</Label>
							<Select
								required
								onValueChange={(value) =>
									setFormData((prev) => ({ ...prev, patient: value }))
								}
							>
								<SelectTrigger className="bg-white w-full">
									<SelectValue placeholder="Select Patient" />
								</SelectTrigger>
								<SelectContent>
									{financialData.filterOptions.method
										.filter((method) => method.value !== 'all')
										.map((method) => (
											<SelectItem key={method.value} value={method.value}>
												{method.label}
											</SelectItem>
										))}
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="description" className="text-[#171717]">
							Description <span className="text-[#dc2626]">*</span>
						</Label>
						<Input
							id="description"
							name="description"
							placeholder="Service or billing description"
							value={formData.description}
							onChange={handleChange}
							required
							className="bg-white"
						/>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="amount" className="text-[#171717]">
								Amount <span className="text-[#dc2626]">*</span>
							</Label>
							<Input
								id="amount"
								name="amount"
								placeholder="Amount"
								value={formData.amount}
								onChange={handleChange}
								required
								className="bg-white"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="method" className="text-[#171717]">
								Payment Method <span className="text-[#dc2626]">*</span>
							</Label>
							<Select
								required
								onValueChange={(value) =>
									setFormData((prev) => ({ ...prev, method: value }))
								}
							>
								<SelectTrigger className="bg-white w-full">
									<SelectValue placeholder="Select Payment Method" />
								</SelectTrigger>
								<SelectContent>
									{financialData.filterOptions.method
										.filter((method) => method.value !== 'all')
										.map((method) => (
											<SelectItem key={method.value} value={method.value}>
												{method.label}
											</SelectItem>
										))}
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="status" className="text-[#171717]">
							Status <span className="text-[#dc2626]">*</span>
						</Label>
						<Select
							required
							onValueChange={(value) =>
								setFormData((prev) => ({ ...prev, status: value }))
							}
						>
							<SelectTrigger className="bg-white w-full">
								<SelectValue placeholder="Select Status" />
							</SelectTrigger>
							<SelectContent>
								{financialData.filterOptions.statuses
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
						<Label htmlFor="notes" className="text-[#171717]">
							Notes
						</Label>
						<Textarea
							id="notes"
							name="notes"
							placeholder="Any additional information"
							value={formData.notes}
							onChange={handleChange}
							className="min-h-[100px] bg-white"
						/>
					</div>

					<Button
						type="submit"
						className="w-full bg-[#ffa048] hover:bg-[#f68a15] text-white"
					>
						Save
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
