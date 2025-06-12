'use client';

import { CallDetail } from '../components/call-details';

export default function CallDetailPage() {
	return (
		<main className="sm:p-6 p-3 bg-[#f9f8fa]">
			<CallDetail callId={'234'} />
		</main>
	);
}
