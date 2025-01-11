import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Metrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Calls Today</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24 / 30</div>
          <p className="text-xs text-muted-foreground">
            AI-handled / Human-handled
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Follow-ups</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">
            Scheduled tasks
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Sentiment Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8.5</div>
          <p className="text-xs text-muted-foreground">
            Overall client sentiment
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

