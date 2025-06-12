'use client';
import { financialData } from '@/lib/db';
import { useState } from 'react';
import { AddFinancialData } from './components/add-financial-data';
import { FinanceFilter } from './components/finance-filter';
import { FinanceMetrics } from './components/finance-metrics';
import { FinancePaginantion } from './components/finance-pagination';
import { FinanceTable } from './components/finance-table';
import { TransactionDetail } from './components/transaction-detail';

export default function FinancialData() {
	const [isAddFinancialData, setIsAddFinancialData] = useState(false);
	const [isTransactionDetailOpen, setIsTransactionDetailOpen] = useState(false);
	const [selectedTransactionId, setSelectedTransactionId] = useState<
		number | null
	>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;
	const totalItems = financialData.data.length;
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	const paginatedData = financialData.data.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	const handleViewTransaction = (leadId: number) => {
		setSelectedTransactionId(leadId);
		setIsTransactionDetailOpen(true);
	};

	const handleAddFinance = () => {
		setIsAddFinancialData(true);
	};

	return (
		<main className=" p-3 sm:p-6">
			<h1 className="text-2xl font-semibold text-[#171717] mb-6">Finances</h1>

			<FinanceFilter
				onAddFinance={handleAddFinance}
				onFilterChange={() => {}}
			/>
			<div className="my-3">
				<FinanceMetrics />
			</div>
			<FinanceTable
				data={paginatedData}
				onViewTransaction={handleViewTransaction}
			/>
			<div className="px-6 py-4 flex items-center justify-between">
				<span className="text-sm text-[#848484] whitespace-nowrap">
					{paginatedData.length > 0
						? `${(currentPage - 1) * itemsPerPage + 1}-${(currentPage - 1) * itemsPerPage + paginatedData.length} of ${totalItems} transaction${totalItems > 1 ? 's' : ''} shown`
						: 'No transactions to show'}
				</span>
				<div>
					<FinancePaginantion
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={setCurrentPage}
					/>
				</div>

				<AddFinancialData
					isOpen={isAddFinancialData}
					onClose={() => setIsAddFinancialData(false)}
					onAddFinance={handleAddFinance}
				/>

				<TransactionDetail
					isOpen={isTransactionDetailOpen}
					onClose={() => setIsTransactionDetailOpen(false)}
					transactionId={selectedTransactionId}
				/>
			</div>
		</main>
	);
}
