"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
    customers: {
        label: "Customers",
        color: "#111",
    },
} satisfies ChartConfig

const GrowthCard = ({data} : {data: any[]}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-medium text-gray-900 font-sans">Customer Growth</h3>
        {/* Line Chart */}
        <div className="mt-4 h-48 bg-gray-100 rounded-lg">
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
                dataKey="customers"
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
    </div>
  )
}

export default GrowthCard
