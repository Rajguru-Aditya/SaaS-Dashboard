import { CustomerConversionChart } from '@/components/charts/CustomerConversionChart'
import React from 'react'

const ConversionCard = ({ data }: { data?: any }) => {
  console.log("Conversion: ", data)
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-medium text-gray-900 font-sans">Customer Conversion</h3>
        <div className="mt-4 h-80 bg-gray-100 rounded-lg p-3 pt-2 flex items-center justify-center">
          <CustomerConversionChart data={data} />
        </div>
    </div>
  )
}

export default ConversionCard
