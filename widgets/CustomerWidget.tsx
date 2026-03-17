import MetricsCard from "@/components/ui/MetricsCard"
import { dashboardData } from "@/lib/mockData"

const CustomerWidget = () => {
  return (
    <div>
        <MetricsCard
          title="Customers"
          value={dashboardData.metrics.customers.value}
          percentage={dashboardData.metrics.customers.change}
          icon={<img src="https://img.icons8.com/tiny-glyph/100/group.png" alt="Customers" className="w-6 h-6"/>}
        />
    </div>
  )
}

export default CustomerWidget