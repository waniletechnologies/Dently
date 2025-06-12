'use client';

import { campaignDetails, impressionsData, performanceData } from '@/lib/db';
import { useState } from 'react';
import CampaignDetails from './components/CampaignDetails';
import DataEntryModal from './components/DataEntryModal';
import DateAndCampaignSelector from './components/DateAndCampaignSelector';
import Header from './components/Header';
import MetricsGrid from './components/MetricsGrid';
import PerformanceTrends from './components/PerformanceTrends';

const AdPerformancePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className="space-y-6 p-4">
			<Header onAddData={() => setIsModalOpen(true)} />
			<DateAndCampaignSelector />
			<MetricsGrid />
			<PerformanceTrends data={performanceData} />
			<CampaignDetails
				campaignDetails={campaignDetails}
				impressionsData={impressionsData}
			/>
			<DataEntryModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
		</div>
	);
};

export default AdPerformancePage;
