'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const callVolumeData = [
  { day: 'Mon', calls: 20 },
  { day: 'Tue', calls: 25 },
  { day: 'Wed', calls: 30 },
  { day: 'Thu', calls: 22 },
  { day: 'Fri', calls: 28 },
]

const sentimentData = [
  { day: 'Mon', score: 7.5 },
  { day: 'Tue', score: 8.0 },
  { day: 'Wed', score: 7.8 },
  { day: 'Thu', score: 8.2 },
  { day: 'Fri', score: 8.5 },
]

export default function PerformanceCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Charts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Call Volume</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={callVolumeData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="calls" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Sentiment Trends</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={sentimentData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

