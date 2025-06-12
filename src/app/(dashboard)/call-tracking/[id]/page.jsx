'use client';

import { CallDetail } from '../components/call-details';

export default function CallDetailPage({ params }) {
	return (
		<main className="sm:p-6 p-3 bg-[#f9f8fa] ">
			<CallDetail callId={params.id} />
		</main>
	);
}
