import MetricsCard from "@/components/ui/MetricsCard"
import { dashboardMetrics } from "@/lib/mockData"

const RevenueWidget = () => {
  return (
    <div>
        <MetricsCard
          title="Revenue"
          value={dashboardMetrics.revenue.value}
          percentage={dashboardMetrics.revenue.change}
          icon={<img src="https://img.icons8.com/material-outlined/96/stocks-growth.png" alt="Revenue Growth" className="w-6 h-6"/>}
        />
    </div>
  )
}

export default RevenueWidget