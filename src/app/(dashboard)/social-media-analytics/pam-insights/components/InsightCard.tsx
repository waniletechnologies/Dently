'use client';

import { Badge } from '@/components/ui/badge';
import { impactColors } from '@/lib/db';

interface Insight {
	id: number;
	title: string;
	description: string;
	impact: string;
	metrics: Record<string, string>;
	suggestedCaption?: string;
	suggestedHashtags?: string[];
}

interface InsightCardProps {
	insight: Insight;
	showCreativeElements?: boolean;
}

export function InsightCard({
	insight,
	showCreativeElements = false,
}: InsightCardProps) {
	const impactStyle =
		impactColors[insight.impact as keyof typeof impactColors] ||
		impactColors['Medium Impact'];

	return (
		<div className="bg-white rounded-lg border border-gray-200 p-6">
			<div className="flex items-start justify-between mb-4">
				<div className="flex-1">
					<div className="flex items-center gap-3 mb-2">
						<h3 className="text-lg font-semibold text-gray-900">
							{insight.title}
						</h3>
						<Badge
							className={`${impactStyle.bg} ${impactStyle.text} hover:${impactStyle.bg} border-0`}
						>
							{insight.impact}
						</Badge>
					</div>
					<p className="text-gray-600 text-sm leading-relaxed">
						{insight.description}
					</p>
				</div>
			</div>

			{/* Metrics */}
			<div className="flex flex-wrap gap-6 mb-4">
				{Object.entries(insight.metrics).map(([key, value]) => (
					<div key={key} className="text-sm">
						<span className="font-medium text-gray-900 capitalize">
							{key
								.replace(/([A-Z])/g, ' $1')
								.replace(/^./, (str) => str.toUpperCase())}
							:
						</span>
						<span className="ml-1 text-gray-600">{value}</span>
					</div>
				))}
			</div>

			{/* Creative Elements */}
			{showCreativeElements && insight.suggestedCaption && (
				<div className="space-y-4 pt-4 border-t border-gray-100">
					<div>
						<h4 className="text-sm font-medium text-gray-900 mb-2">
							Suggested Ad Caption
						</h4>
						<div className="bg-gray-50 rounded-lg p-4">
							<p className="text-sm text-gray-700 leading-relaxed">
								{insight.suggestedCaption}
							</p>
						</div>
					</div>

					{insight.suggestedHashtags && (
						<div>
							<h4 className="text-sm font-medium text-gray-900 mb-2">
								Suggested Hashtags
							</h4>
							<div className="flex flex-wrap gap-2">
								{insight.suggestedHashtags.map((hashtag, index) => (
									<span
										key={index}
										className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
									>
										{hashtag}
									</span>
								))}
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
