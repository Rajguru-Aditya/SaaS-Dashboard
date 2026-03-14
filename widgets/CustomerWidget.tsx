import MetricsCard from "@/components/ui/MetricsCard"

const CustomerWidget = () => {
  return (
    <div>
        <MetricsCard title="Customers" value="190" percentage={0} icon={<img src="https://img.icons8.com/tiny-glyph/100/group.png" alt="Customers" className="w-6 h-6"/>} />
    </div>
  )
}

export default CustomerWidget