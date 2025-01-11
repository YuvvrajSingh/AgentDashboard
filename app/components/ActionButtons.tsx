import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ListTodo, AlertTriangle } from 'lucide-react'

export default function ActionButtons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Button><Calendar className="mr-2 h-4 w-4" /> Schedule Follow-up</Button>
        <Button><ListTodo className="mr-2 h-4 w-4" /> Create Task</Button>
        <Button variant="destructive"><AlertTriangle className="mr-2 h-4 w-4" /> Escalate Issue</Button>
      </CardContent>
    </Card>
  )
}

