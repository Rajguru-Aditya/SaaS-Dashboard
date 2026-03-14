import MetricsCard from "@/components/ui/MetricsCard"

const RevenueWidget = () => {
  return (
    <div>
        <MetricsCard title="Revenue" value="100,000" percentage={10} icon={<img src="https://img.icons8.com/material-outlined/96/stocks-growth.png" alt="Revenue Growth" className="w-6 h-6"/>} />
    </div>
  )
}

export default RevenueWidget