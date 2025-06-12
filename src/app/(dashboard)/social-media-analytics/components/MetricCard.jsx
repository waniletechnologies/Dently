import { TrendingDown, TrendingUp } from 'lucide-react';

const MetricCard = ({ title, value, change, trend, className = '' }) => {
	return (
		<div
			className={`bg-white rounded-lg border flex flex-col justify-between border-gray-200 p-3 h-[100px]  ${className}`}
		>
			<p className="text-sm text-gray-600 mb-1">{title}</p>
			<div className="flex items-center justify-between">
				<p className="text-2xl font-semibold text-gray-900">{value}</p>
				{change && (
					<div className="flex items-center gap-1">
						{trend === 'up' ? (
							<TrendingUp className="w-4 h-4 text-green-500" />
						) : (
							<TrendingDown className="w-4 h-4 text-red-500" />
						)}
						<span
							className={`text-sm font-medium ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}
						>
							{change}
						</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default MetricCard;
