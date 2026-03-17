"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { dashboardData } from "@/lib/mockData"

const chartConfig = {
    customers: {
        label: "Customers",
        color: "#111",
    },
} satisfies ChartConfig

const RevenueGrowthChart = ({ data }: { data: any }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
        <h3 className="text-lg font-medium text-gray-900 font-sans">Revenue Growth</h3>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="revenue"
              type="natural"
              stroke="#111"
              strokeWidth={2}
              dot={{
                fill: "#111",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
    </div>
  )
}

export default RevenueGrowthChart