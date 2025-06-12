'use client';
import { useState } from 'react';
import { SignUpStepper } from './components/SignUpStepper';
import { StepAccount } from './components/steps/StepAccount';
import { StepAircall } from './components/steps/StepAircall';
import { StepCalendly } from './components/steps/StepCalendly';
import { StepDentally } from './components/steps/StepDentally';
import { StepKajabi } from './components/steps/StepKajabi';
import { StepMetaAds } from './components/steps/StepMetaAds';

const steps = [
	StepAccount,
	StepDentally,
	StepAircall,
	StepCalendly,
	StepMetaAds,
	StepKajabi,
];

export default function SignUpPage() {
	const [currentStep, setCurrentStep] = useState(0);

	const StepComponent = steps[currentStep];

	const handleNext = () =>
		setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
	// const handleBack = () => setCurrentStep((s) => Math.max(s - 1, 0));

	return (
		<div className="flex min-h-screen bg-white">
			<div className="w-1/2 bg-gray-50 flex flex-col">
				<SignUpStepper currentStep={currentStep} />
			</div>
			<div className="w-1/2 flex items-center justify-center">
				<div className="w-full max-w-md">
					<StepComponent onNext={handleNext} />
				</div>
			</div>
		</div>
	);
}
