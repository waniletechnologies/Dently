'use client';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
export function AppointmentsFilters({
	searchTerm,
	onSearchChange,
	statusFilter,
	onStatusChange,
	dateFilter,
	onDateChange,
}) {
	return (
		<div className="flex md:items-center gap-4 md:flex-row flex-col px-6 py-4 ">
			<div className="flex items-center gap-4 ">
				<Select value={statusFilter} onValueChange={onStatusChange}>
					<SelectTrigger className="w-24 bg-white text-[#595858]">
						<SelectValue placeholder="All" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="All">All</SelectItem>
						<SelectItem value="Completed">Completed</SelectItem>
						<SelectItem value="Scheduled">Scheduled</SelectItem>
						<SelectItem value="Cancelled">Cancelled</SelectItem>
					</SelectContent>
				</Select>

				<Select value={statusFilter} onValueChange={onStatusChange}>
					<SelectTrigger className="w-28 bg-white text-[#595858]">
						<SelectValue placeholder="Status" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="All">All</SelectItem>
						<SelectItem value="Completed">Completed</SelectItem>
						<SelectItem value="Scheduled">Scheduled</SelectItem>
						<SelectItem value="Cancelled">Cancelled</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex items-center gap-4 ">
				<Select value={dateFilter} onValueChange={onDateChange}>
					<SelectTrigger className="w-24 bg-white text-[#595858]">
						<SelectValue placeholder="Date" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="All">All</SelectItem>
						<SelectItem value="Jun 15, 1990">Jun 15, 1990</SelectItem>
					</SelectContent>
				</Select>

				<div className="relative flex-1 max-w-[260px]">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 sm:w-4 sm:h-4 w-3 h-3 text-gray-400" />
					<Input
						placeholder="Search Appointment"
						value={searchTerm}
						onChange={(e) => onSearchChange(e.target.value)}
						className="pl-10 sm:text-sm text-[12px]"
					/>
				</div>
			</div>
		</div>
	);
}
