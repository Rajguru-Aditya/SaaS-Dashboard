import MetricsCard from '@/components/ui/MetricsCard'
import { dashboardData } from '@/lib/mockData'

const ChurnWidget = ({ data }: { data: any }) => {
  return (
    <div>
        <MetricsCard
          title="Churn"
          value={data?.value}
          percentage={data?.change}
          icon={<img src="https://img.icons8.com/ios-glyphs/100/reducing-churn.png"alt="Churn" className="w-6 h-6"/>}
        />
    </div>
  )
}

export default ChurnWidget