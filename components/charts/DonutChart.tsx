"use client"

import * as React from "react"
import { Label, Pie, PieChart, ResponsiveContainer } from "recharts"

import {
    ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
]

const chartConfig = {
  value: {
    label: "Value",
  },
} satisfies ChartConfig

export function DonutChart({
  data,
  label,
}: {
  data: { name: string; value: number }[]
  label: string
}) {
  const total = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.value, 0)
  }, [data])

  const chartData = data.map((item, index) => ({
    ...item,
    fill: COLORS[index % COLORS.length],
  }))

  return (
    <div className="flex flex-col gap-2 w-full">

      {/* 🔵 Chart */}
      <ChartContainer config={chartConfig} className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <ChartTooltip content={<ChartTooltipContent hideLabel />} />

            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={45}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-2xl font-bold fill-foreground"
                        >
                          {total}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {label}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>

          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* 🟣 Legend */}
      <div className="space-y-2">
        {chartData.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-sm"
          >
            {/* Left */}
            <div className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.fill }}
              />
              <span className="text-gray-700">{item.name}</span>
            </div>

            {/* Right */}
            <span className="font-medium">{item.value}</span>
          </div>
        ))}
      </div>

    </div>
  )
}