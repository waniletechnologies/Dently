'use client';

import { CallDetail } from '../components/call-details';

// Define the expected props shape using an interface. This is the standard practice.
interface CallDetailPageProps {
  params: {
    id: string;
  };
}

// Use the interface to type your component's props.
export default function CallDetailPage({ params }: CallDetailPageProps) {
	return (
		<main className="sm:p-6 p-3 bg-[#f9f8fa]">
			<CallDetail callId={params.id} />
		</main>
	);
}