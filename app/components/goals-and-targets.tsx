import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function GoalsAndTargets() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Goals and Targets</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">Customer Satisfaction</h3>
          <Progress value={85} className="w-full" />
          <p className="text-sm text-muted-foreground mt-1">85% / 90% Target</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Call Quality Score</h3>
          <Progress value={92} className="w-full" />
          <p className="text-sm text-muted-foreground mt-1">92% / 85% Target</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Achievement Badges</h3>
          <div className="flex gap-2">
            <Badge variant="secondary">Top Performer</Badge>
            <Badge variant="secondary">Quality Expert</Badge>
            <Badge variant="secondary">Team Player</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

