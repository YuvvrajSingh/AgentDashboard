import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const activities = [
  { id: 1, action: 'Completed call', client: 'Alice Johnson', time: '5 mins ago' },
  { id: 2, action: 'Sent follow-up email', client: 'Bob Smith', time: '15 mins ago' },
  { id: 3, action: 'Updated client record', client: 'Charlie Brown', time: '1 hour ago' },
]

export default function LiveFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="border-b pb-2 last:border-b-0 last:pb-0">
              <p className="font-medium">{activity.action}</p>
              <p className="text-sm text-muted-foreground">
                {activity.client} - {activity.time}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

