import React from 'react';
import { MdCheck, MdChevronLeft, MdChevronRight } from 'react-icons/md';

const StepDentally = () => {
	return (
		<>
			<div className="flex items-center gap-2">
				<MdCheck className="h-4 w-4 text-green-500" />
				<span className="text-sm text-green-500">Connected</span>
			</div>

			<div className="flex items-center gap-2">
				<span className="text-sm text-red-500">Not Connected</span>
			</div>

			<MdChevronLeft className="h-4 w-4" />
			<span>Back</span>

			<span>Next</span>
			<MdChevronRight className="h-4 w-4" />
		</>
	);
};

export default StepDentally;
