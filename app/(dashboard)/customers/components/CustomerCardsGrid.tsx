import GrowthCard from './GrowthCard'
import ConversionCard from './ConversionCard'
import RetentionCard from './RetentionCard'
import ActivityCard from './ActivityCard'

const CustomerCardsGrid = ({ data}: { data: any }) => {
  console.log("Data customer: ", data)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <GrowthCard data={data.growth} />
      <ConversionCard data={data.acquisition}/>
      <RetentionCard />
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <ActivityCard />
      </div>
    </div>
  )
}

export default CustomerCardsGrid
