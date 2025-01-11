import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { time: '0:00', sentiment: 0.5 },
  { time: '0:15', sentiment: 0.7 },
  { time: '0:30', sentiment: 0.3 },
  { time: '0:45', sentiment: 0.8 },
]

export default function SentimentAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sentiment Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="font-semibold">Overall Sentiment Score: </span>
          <span>0.65 (Positive)</span>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis domain={[0, 1]} />
            <Tooltip />
            <Line type="monotone" dataKey="sentiment" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

