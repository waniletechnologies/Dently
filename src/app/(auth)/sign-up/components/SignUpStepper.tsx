import Image from 'next/image';
import { HiCheck } from 'react-icons/hi';
import { logo } from '../../../../../public/images';

const steps = [
	{
		label: 'Create Your Account',
		description: 'Set up your profile and start your journey.',
	},
	{
		label: 'Connect Dentally',
		description: 'Sync your patient data for seamless integration.',
	},
	{
		label: 'Connect Aircall',
		description: 'Link your call system for smarter communication.',
	},
	{
		label: 'Connect Calendly',
		description: 'Manage your appointments and bookings in one platform.',
	},
	{
		label: 'Connect Meta Ads',
		description: 'Boost your reach with smart ad automation.',
	},
	{
		label: 'Connect Kajabi',
		description: 'Grow with smart course & funnel automation',
	},
];

export function SignUpStepper({ currentStep }: { currentStep: number }) {
	return (
		<div className="flex flex-col h-full px-16 py-10">
			<Image src={logo} alt="Logo" className="w-36 mb-10" />
			<ol className="flex-1 space-y-6">
				{steps.map((step, idx) => {
					const isCompleted = idx < currentStep;
					const isCurrent = idx === currentStep;
					return (
						<li key={step.label} className="flex items-start gap-2">
							<span
								className={
									isCompleted
										? 'w-5 h-5 rounded-full flex items-center justify-center bg-[#09924F] text-white'
										: isCurrent
											? 'w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#09924F] text-[#09924F] bg-white'
											: 'w-5 h-5 rounded-full flex items-center justify-center border-2 border-gray-300 text-gray-300 bg-white'
								}
							>
								<HiCheck size={12} />
							</span>
							<div>
								<div
									className={`font-medium text-[13px] leading-[20px] tracking-[-0.03em] ${
										isCurrent ? 'text-[#000000]' : 'text-gray-700'
									}`}
								>
									{step.label}
								</div>
								<div className="font-normal text-xs leading-[20px] tracking-[-0.03em] text-gray-400">
									{step.description}
								</div>
							</div>
						</li>
					);
				})}
			</ol>
			<div className="mt-8">
				<div className="w-full h-4 bg-gray-200 rounded-full">
					<div
						className="h-4 bg-orange-500 rounded-full"
						style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
					/>
				</div>
				<div className="text-xs text-gray-500 mt-2">
					Step {currentStep + 1}/{steps.length} – {steps[currentStep].label}
				</div>
			</div>
		</div>
	);
}
