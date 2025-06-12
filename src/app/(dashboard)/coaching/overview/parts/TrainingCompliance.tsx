'use client';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import * as Progress from '@radix-ui/react-progress';
import React, { useState } from 'react';
import SidePanel from './SidePanel';

export const teamData = [
	{
		name: 'Sarah Johnson',
		requiredCourses: 5,
		completed: 5,
		progress: 100,
		status: 'Completed',
		priceObjections: 40,
		timeObjections: 50,
		valueObjections: 89,
		effectiveCallClosing: 50,
		askingBetterQuestions: 70,
	},
	{
		name: 'Muhammad Ali',
		requiredCourses: 5,
		completed: 3,
		progress: 60,
		status: 'In progress',
		priceObjections: 40,
		timeObjections: 50,
		valueObjections: 89,
		effectiveCallClosing: 50,
		askingBetterQuestions: 70,
	},
	{
		name: 'Sanwal',
		requiredCourses: 5,
		completed: 4,
		progress: 80,
		status: 'Behind',
		priceObjections: 40,
		timeObjections: 50,
		valueObjections: 89,
		effectiveCallClosing: 50,
		askingBetterQuestions: 70,
	},
];

const TableHeadStyles = 'text-[#2A2828] font-medium text-[12px]';
const TableCellStyles = 'text-[#595858] font-medium text-[12px]';

const getStatusStyles = (status: string) => {
	switch (status) {
		case 'Completed':
			return {
				statusColor: 'bg-[#EFFAF6] text-[#114439]',
				progressColor: 'bg-[#09924F]',
			};
		case 'In progress':
			return {
				statusColor: 'bg-[#FFFBEB] text-[#F68A15]',
				progressColor: 'bg-[#F68A15]',
			};
		case 'Behind':
			return {
				statusColor: 'bg-[#FFEDED] text-[#DC2626]',
				progressColor: 'bg-[#DC2626]',
			};
		default:
			return {
				statusColor: '',
				progressColor: '',
			};
	}
};

const TrainingCompliance = () => {
	const [selectedRow, setSelectedRow] = useState(null);
	const [isPanelOpen, setIsPanelOpen] = useState(false);

	const handleRowClick = (rowData: any) => {
		setSelectedRow(rowData);
		setIsPanelOpen(true);
	};

	const closePanel = () => {
		setIsPanelOpen(false);
		setSelectedRow(null);
	};

	return (
		<>
			<div className="mt-[24px]">
				<p className="text-[16px] font-semibold text-[#151515] mb-5">
					Training Compliance
				</p>
				<div className="overflow-x-auto">
					<Table className="w-full min-w-[1077px] bg-white rounded-[10px] py-4">
						<TableHeader>
							<TableRow>
								<TableHead className={`${TableHeadStyles} pl-[40px]`}>
									Team Member
								</TableHead>
								<TableHead className={TableHeadStyles}>
									Required Courses
								</TableHead>
								<TableHead className={TableHeadStyles}>Completed</TableHead>
								<TableHead className={TableHeadStyles}>Progress</TableHead>
								<TableHead className={TableHeadStyles}>Status</TableHead>
								<TableHead className={TableHeadStyles}>Action</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{teamData.map((item, idx) => {
								const { statusColor, progressColor } = getStatusStyles(
									item.status,
								);
								return (
									<TableRow key={idx}>
										<TableCell className={`${TableCellStyles} pl-[40px]`}>
											{item.name}
										</TableCell>
										<TableCell className={TableCellStyles}>
											{item.requiredCourses}
										</TableCell>
										<TableCell className={TableCellStyles}>
											{item.completed}
										</TableCell>
										<TableCell className={TableCellStyles}>
											<Progress.Root
												value={item.progress}
												className="relative h-2 overflow-hidden rounded-full w-[135px] bg-gray-200"
											>
												<div
													className={`h-full rounded-full ${progressColor}`}
													style={{
														width: `${item.progress}%`,
													}}
												/>
											</Progress.Root>
										</TableCell>
										<TableCell>
											<span
												className={`text-[12px] rounded-[6px] px-3 py-[5px] font-[400] ${statusColor}`}
											>
												{item.status}
											</span>
										</TableCell>
										<TableCell
											onClick={() => handleRowClick(item)}
											className="text-[#F68A1E]  text-[12px] font-medium cursor-pointer"
										>
											View
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
			</div>
			{isPanelOpen && (
				<>
					<div
						className="fixed inset-0 bg-transparent bg-opacity-50 z-40"
						onClick={closePanel}
						onKeyDown={(event) => {
							if (event.key === 'Enter' || event.key === ' ') {
								closePanel();
							}
						}}
						role="button"
						tabIndex={0}
					/>
					<SidePanel
						selectedRow={selectedRow}
						onClose={closePanel}
						styles={getStatusStyles}
					/>
				</>
			)}
		</>
	);
};

export default TrainingCompliance;
