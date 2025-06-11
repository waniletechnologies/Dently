import MetricCard from "../../components/MetricCard"

const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard title="Total Followers" value="15,671" change="0.8%" trend="up" />
      <MetricCard title="Engagement Rate" value="5.2%" change="3%" trend="up" />
      <MetricCard title="New Followers" value="380" change="2%" trend="up" />
      <MetricCard title="Total Posts" value="20" change="8.3%" trend="up" />
    </div>
  )
}

export default MetricsGrid 