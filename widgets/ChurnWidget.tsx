import MetricsCard from '@/components/ui/MetricsCard'
import { dashboardMetrics } from '@/lib/mockData'

const ChurnWidget = () => {
  return (
    <div>
        <MetricsCard
          title="Churn"
          value={dashboardMetrics.churn.value}
          percentage={dashboardMetrics.churn.change}
          icon={<img src="https://img.icons8.com/ios-glyphs/100/reducing-churn.png"alt="Churn" className="w-6 h-6"/>}
        />
    </div>
  )
}

export default ChurnWidget