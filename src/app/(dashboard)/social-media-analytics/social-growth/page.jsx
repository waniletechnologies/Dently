'use client';

import { engagementData, followersData } from '@/lib/db';
import DailyEngagement from './components/DailyEngagement';
import DateAndSearch from './components/DateAndSearch';
import FollowersGrowth from './components/FollowersGrowth';
import Header from './components/Header';
import MetricsGrid from './components/MetricsGrid';
import TopPerformingPost from './components/TopPerformingPost';

const SocialGrowthPage = () => {
	return (
		<div className="space-y-6 p-4">
			<Header />
			<DateAndSearch />
			<MetricsGrid />
			<FollowersGrowth data={followersData} />
			<div className="flex gap-4 lg:flex-row flex-col w-full">
				<div className="lg:w-[60%]">
					<DailyEngagement data={engagementData} />
				</div>
				<div className="lg:w-[40%]">
					<TopPerformingPost />
				</div>
			</div>
		</div>
	);
};

export default SocialGrowthPage;
