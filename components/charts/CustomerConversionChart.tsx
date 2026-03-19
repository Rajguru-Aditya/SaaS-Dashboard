import { DonutChart } from "./DonutChart"
import { Card, CardContent } from "@/components/ui/card"

export function CustomerConversionChart({ data }: { data?: any }) {

  const bySourceData = data?.bySource?.map((item: any) => ({
    name: item.source,
    value: item.conversions,
  })) || []

  const breakdownData = data?.breakdown?.map((item: any) => ({
    name: item.source,
    value: item.customers,
  })) || []

  return (
    <div className="bg-transparent shadow-none border-0">
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* 🔵 Conversions */}
        <DonutChart
          data={bySourceData}
          label="Conversions"
        />

        {/* 🟣 Breakdown */}
        <DonutChart
          data={breakdownData}
          label="Customers"
        />

      </CardContent>
    </div>
  )
}