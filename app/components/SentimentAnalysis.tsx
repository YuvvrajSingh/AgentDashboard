import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SentimentAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sentiment Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span>😊</span>
          <span>😐</span>
          <span>😟</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
        </div>
        <p className="text-center mt-2">Sentiment Score: 45%</p>
      </CardContent>
    </Card>
  )
}

