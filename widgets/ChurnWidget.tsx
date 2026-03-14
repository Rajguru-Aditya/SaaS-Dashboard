import MetricsCard from '@/components/ui/MetricsCard'

const ChurnWidget = () => {
  return (
    <div>
        <MetricsCard title="Churn" value="3.2%" percentage={3.2} icon={<img src="https://img.icons8.com/ios-glyphs/100/reducing-churn.png" alt="Churn" className="w-6 h-6"/>} />
    </div>
  )
}

export default ChurnWidget