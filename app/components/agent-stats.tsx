import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AgentStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Individual Agent Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Total Calls Handled</h3>
          <p className="text-2xl">127</p>
        </div>
        <div>
          <h3 className="font-semibold">Average Call Duration</h3>
          <p className="text-2xl">5m 32s</p>
        </div>
        <div>
          <h3 className="font-semibold">First Call Resolution Rate</h3>
          <p className="text-2xl">78%</p>
        </div>
      </CardContent>
    </Card>
  )
}

