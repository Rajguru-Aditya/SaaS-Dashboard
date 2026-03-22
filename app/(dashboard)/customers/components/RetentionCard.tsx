"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartConfig = {
  retention: {
    label: "Retention",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const RetentionCard = ({ data }: { data: any[] }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      
      <h3 className="text-lg font-medium text-gray-900 font-sans">
        Customer Retention
      </h3>

      <div className="mt-4 h-56">
        <ChartContainer config={chartConfig} className="h-full w-full">
          
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>

              <CartesianGrid vertical={false} />

              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />

              <ChartTooltip
                content={<ChartTooltipContent />}
              />

              <Bar
                dataKey="retention"
                fill="var(--chart-1)"
                radius={[6, 6, 0, 0]}
              />

            </BarChart>
          </ResponsiveContainer>

        </ChartContainer>
      </div>

    </div>
  )
}

export default RetentionCard