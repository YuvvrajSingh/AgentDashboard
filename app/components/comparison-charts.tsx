"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { metric: "Total Calls", agent: 127, team: 115 },
  { metric: "Avg Duration", agent: 332, team: 298 },
  { metric: "FCR Rate", agent: 78, team: 72 },
]

export default function ComparisonCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Agent vs. Team Averages</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            agent: {
              label: "Agent",
              color: "hsl(var(--chart-1))",
            },
            team: {
              label: "Team Average",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="metric" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="agent" fill="var(--color-agent)" />
              <Bar dataKey="team" fill="var(--color-team)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

