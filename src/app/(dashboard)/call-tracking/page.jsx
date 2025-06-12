'use client';

import { CallFilters } from './components/call-filters';
import { CallMetrics } from './components/call-metrics';
import { CallPagination } from './components/call-pagination';
import { CallTable } from './components/call-table';

export default function CallTrackingPage() {
	return (
		<main className="sm:p-6 p-3 bg-[#f9f8fa] ">
			<CallFilters />
			<CallMetrics />
			<CallTable />
			<CallPagination />
		</main>
	);
}
