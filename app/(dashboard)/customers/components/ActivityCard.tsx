import RecentActivityTable from '@/components/tables/RecentActivityTable'
import React from 'react'

const ActivityCard = ({data} : {data: any}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-medium text-gray-900 font-sans">Customer Activity</h3>
      <RecentActivityTable data={data} />
    </div>
  )
}

export default ActivityCard
