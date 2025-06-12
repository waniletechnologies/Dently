import React from 'react';
import Header from './parts/Header';
import RecommendedLearning from './parts/RecommendedLearning';

const page = () => {
	return (
		<div className="bg-[#F4F5F7] text-black pt-[50px] pb-[37px] px-[23px] min-h-screen">
			<Header />
			<RecommendedLearning />
		</div>
	);
};

export default page;
