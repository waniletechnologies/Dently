'use client';

interface InsightTabsProps {
	activeTab: string;
	onTabChange: (tab: string) => void;
}

const tabs = [
	{ id: 'all', label: 'All Insights' },
	{ id: 'budget', label: 'Budget' },
	{ id: 'creative', label: 'Creative' },
	{ id: 'targeting', label: 'Targeting' },
];

export function InsightTabs({ activeTab, onTabChange }: InsightTabsProps) {
	return (
		<div className="border-b border-gray-200">
			<nav className="flex space-x-8">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => onTabChange(tab.id)}
						type="button"
						className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
							activeTab === tab.id
								? 'border-orange-500 text-gray-900'
								: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
						}`}
					>
						{tab.label}
					</button>
				))}
			</nav>
		</div>
	);
}
