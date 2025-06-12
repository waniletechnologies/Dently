import { Badge } from '@/components/ui/badge';

const PerformanceTable = ({ data }) => {
	return (
		<div className="overflow-x-auto">
			<table className="w-full">
				<thead>
					<tr className="border-b border-gray-200">
						<th className="text-left py-3 text-sm font-medium text-gray-600">
							Campaign Name
						</th>
						<th className="text-left py-3 text-sm font-medium text-gray-600">
							Spend (£)
						</th>
						<th className="text-left py-3 text-sm font-medium text-gray-600">
							Conversions
						</th>
						<th className="text-left py-3 text-sm font-medium text-gray-600">
							Clicks
						</th>
						<th className="text-left py-3 text-sm font-medium text-gray-600">
							Status
						</th>
						<th className="text-left py-3 text-sm font-medium text-gray-600">
							ROAS
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((campaign, index) => (
						<tr key={index} className="border-b border-gray-100">
							<td className="py-4 text-sm text-gray-900">{campaign.name}</td>
							<td className="py-4 text-sm text-gray-600">{campaign.spend}</td>
							<td className="py-4 text-sm text-gray-600">
								{campaign.conversions}
							</td>
							<td className="py-4 text-sm text-gray-600">{campaign.clicks}</td>
							<td className="py-4">
								<Badge className="bg-green-100 text-green-800 hover:bg-green-100">
									{campaign.status}
								</Badge>
							</td>
							<td className="py-4 text-sm text-gray-600">{campaign.roas}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PerformanceTable;
