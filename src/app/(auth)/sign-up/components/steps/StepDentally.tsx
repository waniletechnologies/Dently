import Image from 'next/image';
import type React from 'react';
import { useState } from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import { connect } from '../../../../../../public/images';

export function StepDentally({ onNext }: { onNext: () => void }) {
	const [status, setStatus] = useState<'idle' | 'connecting' | 'success'>(
		'idle',
	);

	const handleConnect = async (e: React.FormEvent) => {
		e.preventDefault();
		if (status === 'success') {
			onNext();
			return;
		}
		setStatus('connecting');
		setTimeout(() => setStatus('success'), 2000);
	};

	return (
		<form
			className="flex flex-col justify-center min-h-screen"
			onSubmit={handleConnect}
		>
			<div className="w-full max-w-md mx-auto flex flex-col items-center">
				<h2 className="font-semibold text-[32px] leading-[40px] tracking-[-0.03em] mb-2 text-center">
					Connect Dentally
				</h2>
				<p className="font-medium text-[20px] leading-[40px] tracking-[-0.03em] text-[#222222B2] mb-8 text-center">
					Sync your patient data for seamless integration.
				</p>
				<Image
					src={connect}
					alt="Dentally USB"
					className="mb-8 w-64 h-32 object-contain bg-[#FAFAFA] rounded"
				/>

				{status === 'success' && (
					<div className="w-full flex flex-col items-center">
						<div className="bg-green-100 text-green-800 rounded-md px-6 py-3 text-center mb-3 text-sm font-medium flex items-center gap-2 justify-center">
							<HiCheckCircle size={18} className="text-green-600" />
							Successfully Connected to Dentally
						</div>
					</div>
				)}

				{status === 'success' && (
					<div className="bg-[#FAF6DC] text-yellow-800 rounded-md px-6 py-3 text-center mb-6 text-sm font-medium">
						Pam will never edit patients&apos; data without your permission.
					</div>
				)}

				{status === 'idle' && (
					<div className="bg-[#FAF6DC] text-[#C29709] rounded-md px-6 py-3 text-center mb-6 text-sm font-medium">
						Pam will never edit patients&apos; data without your permission.
					</div>
				)}

				<button
					type="submit"
					className={`py-2 px-6 rounded font-semibold text-base mt-2 w-full ${
						status === 'success'
							? 'bg-orange-500 text-white'
							: status === 'connecting'
								? 'bg-gray-300 text-gray-500 cursor-not-allowed'
								: 'bg-orange-500 text-white'
					}`}
					disabled={status === 'connecting'}
				>
					{status === 'success'
						? 'Continue to next step'
						: status === 'connecting'
							? 'Connecting...'
							: 'Connect Dentally'}
				</button>
			</div>
		</form>
	);
}
