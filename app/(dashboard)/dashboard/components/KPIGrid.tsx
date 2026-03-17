import CustomerGrowthChart from '@/components/charts/CustomerGrowthChart'
import RevenueGrowthChart from '@/components/charts/RevenueGrowthChart'
import ChurnWidget from '@/widgets/ChurnWidget'
import CustomerWidget from '@/widgets/CustomerWidget'
import RevenueWidget from '@/widgets/RevenueWidget'

const KPIGrid = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <RevenueWidget data={data?.metrics?.revenue} />
        <CustomerWidget data={data?.metrics?.customers} />
        <ChurnWidget data={data?.metrics?.churn} />
        <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <CustomerGrowthChart data={data?.charts?.customerGrowth} />
          <RevenueGrowthChart data={data?.charts?.revenueGrowth} />
        </div>
    </div>
  )
}

export default KPIGrid