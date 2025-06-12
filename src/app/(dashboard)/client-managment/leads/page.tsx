'use client';

import { useState } from 'react';
import { AddLeadModal } from '../components/add-lead-modal';
import { LeadDetailsModal } from '../components/lead-details-modal';
import { LeadsFilter } from '../components/leads-filter';
import { LeadsPagination } from '../components/leads-pagination';
import { LeadsTable } from '../components/leads-table';

export default function LeadsPage() {
	const [isAddLeadModalOpen, setIsAddLeadModalOpen] = useState(false);
	const [isLeadDetailsModalOpen, setIsLeadDetailsModalOpen] = useState(false);
	const [selectedLeadId, setSelectedLeadId] = useState<number | null>(null);
	const [currentPage, setCurrentPage] = useState(1);

	const handleAddLead = () => {
		setIsAddLeadModalOpen(true);
	};

	const handleViewLead = (leadId: number) => {
		setSelectedLeadId(leadId);
		setIsLeadDetailsModalOpen(true);
	};

	const handleFilterChange = (filters: []) => {
		console.log('Filters changed:', filters);
		// Apply filters to data
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleAddLeadSubmit = (leadData: []) => {
		console.log('New lead data:', leadData);
		// Add lead to database
	};

	return (
		<main className=" p-3 bg-[#f9f8fa]  sm:p-6">
			<h1 className="text-2xl font-semibold text-[#171717] mb-6">Leads</h1>

			<LeadsFilter
				onAddLead={handleAddLead}
				onFilterChange={handleFilterChange}
			/>

			<div className="bg-white rounded-md border border-[#e1e1e1] overflow-hidden">
				<LeadsTable onViewLead={handleViewLead} />
				<div className="p-4 border-t border-[#e1e1e1]">
					<LeadsPagination
						currentPage={currentPage}
						totalPages={8}
						totalLeads={12}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>

			<AddLeadModal
				isOpen={isAddLeadModalOpen}
				onClose={() => setIsAddLeadModalOpen(false)}
				onAddLead={handleAddLeadSubmit}
			/>

			<LeadDetailsModal
				isOpen={isLeadDetailsModalOpen}
				onClose={() => setIsLeadDetailsModalOpen(false)}
				leadId={selectedLeadId}
			/>
		</main>
	);
}
