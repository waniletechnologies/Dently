import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Calendar } from 'lucide-react';

const DateAndCampaignSelector = () => {
	return (
		<div className="flex sm:items-center sm:flex-row flex-col gap-4">
			<div className="flex items-center gap-2 text-sm text-gray-600">
				<Calendar className="w-4 h-4" />
				<span>Apr 1, 2025 - Apr 25, 2025</span>
			</div>
			<div className="flex-1 max-w-xs">
				<Input
					type="text"
					placeholder="Search Campaigns"
					className="bg-white"
				/>
			</div>
			<Select>
				<SelectTrigger className="w-[200px] bg-white">
					<SelectValue placeholder="Select Campaign" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">All Campaigns</SelectItem>
					<SelectItem value="active">Active Campaigns</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default DateAndCampaignSelector;
