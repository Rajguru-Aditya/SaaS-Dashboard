import ChurnWidget from '@/widgets/ChurnWidget'
import CustomerWidget from '@/widgets/CustomerWidget'
import RevenueWidget from '@/widgets/RevenueWidget'

const KPIGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <RevenueWidget />
        <CustomerWidget />
        <ChurnWidget />
    </div>
  )
}

export default KPIGrid