import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const tasks = [
  { id: 1, title: 'Call with John Doe', time: '10:00 AM', priority: 'high' },
  { id: 2, title: 'Follow-up with Jane Smith', time: '2:00 PM', priority: 'medium' },
  { id: 3, title: 'Review proposal for XYZ Corp', time: '4:30 PM', priority: 'low' },
]

export default function TaskList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-muted-foreground">{task.time}</p>
              </div>
              <Badge variant={task.priority as 'default' | 'secondary' | 'destructive'}>
                {task.priority}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

