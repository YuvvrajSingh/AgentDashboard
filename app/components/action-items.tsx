"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type ActionItem = {
  id: number
  task: string
  assignedTo: string
  dueDate: string
}

export default function ActionItems() {
  const [actionItems, setActionItems] = useState<ActionItem[]>([
    { id: 1, task: "Follow up on order status", assignedTo: "John Doe", dueDate: "2023-07-20" },
    { id: 2, task: "Send replacement item", assignedTo: "Jane Smith", dueDate: "2023-07-18" },
  ])

  const [newTask, setNewTask] = useState("")
  const [newAssignee, setNewAssignee] = useState("")
  const [newDueDate, setNewDueDate] = useState("")

  const addActionItem = () => {
    if (newTask && newAssignee && newDueDate) {
      setActionItems([...actionItems, {
        id: actionItems.length + 1,
        task: newTask,
        assignedTo: newAssignee,
        dueDate: newDueDate
      }])
      setNewTask("")
      setNewAssignee("")
      setNewDueDate("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Action Items</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {actionItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <span>{item.task}</span>
              <span className="text-sm text-muted-foreground">
                {item.assignedTo} - Due: {item.dueDate}
              </span>
            </li>
          ))}
        </ul>
        <div className="space-y-2">
          <Label htmlFor="task">New Task</Label>
          <Input
            id="task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
          />
          <Label htmlFor="assignee">Assigned To</Label>
          <Input
            id="assignee"
            value={newAssignee}
            onChange={(e) => setNewAssignee(e.target.value)}
            placeholder="Enter assignee"
          />
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            id="dueDate"
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <Button onClick={addActionItem}>Add Action Item</Button>
        </div>
      </CardContent>
    </Card>
  )
}

