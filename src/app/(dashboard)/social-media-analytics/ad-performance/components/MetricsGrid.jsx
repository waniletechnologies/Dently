import MetricCard from '../../components/MetricCard';

const MetricsGrid = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<MetricCard title="Conversions" value="264" change="12.8%" trend="up" />
			<MetricCard
				title="Return on Ad Spend"
				value="4.2x"
				change="3%"
				trend="up"
			/>
			<MetricCard
				title="Conversion Rate"
				value="6.2%"
				change="3.1%"
				trend="up"
			/>
			<MetricCard
				title="Cost per Acquisition"
				value="£12.54"
				change="8.3%"
				trend="up"
			/>
		</div>
	);
};

export default MetricsGrid;
