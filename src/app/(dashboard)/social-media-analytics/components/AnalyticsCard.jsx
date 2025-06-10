import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const AnalyticsCard = ({ title, children, className = "", headerActions }) => {
  return (
    <Card className={`bg-white border border-gray-200 ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
          {headerActions}
        </div>
      </CardHeader>
      <CardContent className="pt-0">{children}</CardContent>
    </Card>
  )
}

export default AnalyticsCard;
