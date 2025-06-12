import { Badge } from '@/components/ui/badge';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
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

const BillingHistory = ({ patient }) => {
	return (
		<div>
			<h3 className="text-lg font-medium text-[#171717] mb-4">
				Billing History
			</h3>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Date</TableHead>
						<TableHead>Description</TableHead>
						<TableHead>Amount</TableHead>
						<TableHead>Status</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{patient.billingHistory.map((bill) => (
						<TableRow key={bill.id}>
							<TableCell>{bill.date}</TableCell>
							<TableCell>{bill.description}</TableCell>
							<TableCell>{bill.amount}</TableCell>
							<TableCell>{getStatusBadge(bill.status)}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};
export default BillingHistory;
