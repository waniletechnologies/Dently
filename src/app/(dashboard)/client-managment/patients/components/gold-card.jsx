import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import React from 'react';
const GoldCard = ({ patient }) => {
	return (
		<div>
			<h3 className="text-lg font-medium text-[#171717] mb-4">
				Dentist Gold Card
			</h3>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Refer</TableHead>
						<TableHead>Date</TableHead>
						<TableHead>Commission</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{patient.goldCardReferrals.map((referral) => (
						<TableRow key={referral.id}>
							<TableCell>{referral.refer}</TableCell>
							<TableCell>{referral.date}</TableCell>
							<TableCell>{referral.commission}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default GoldCard;
