'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import FilterOptions from './filter-options'

type Notification = {
  id: number
  message: string
  timestamp: string
  read: boolean
  type: 'Task Update' | 'System Alert' | 'Message'
}

const initialNotifications: Notification[] = [
  { id: 1, message: "New task assigned: Complete project report", timestamp: "2023-06-10 09:30", read: false, type: "Task Update" },
  { id: 2, message: "System maintenance scheduled for tonight", timestamp: "2023-06-09 18:45", read: true, type: "System Alert" },
  { id: 3, message: "New message from John: Hey, can we discuss the project?", timestamp: "2023-06-09 14:20", read: false, type: "Message" },
  // Add more notifications as needed
]

export default function NotificationList() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [filter, setFilter] = useState<string | null>(null)

  const filteredNotifications = filter
    ? notifications.filter(notification => notification.type === filter)
    : notifications

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Notifications</h3>
        <Button onClick={markAllAsRead} variant="outline">Mark All as Read</Button>
      </div>
      <FilterOptions setFilter={setFilter} />
      <ScrollArea className="h-[400px]">
        {filteredNotifications.map((notification) => (
          <Card key={notification.id} className="mb-4">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-sm">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={notification.read ? "secondary" : "default"}>
                    {notification.read ? "Read" : "Unread"}
                  </Badge>
                  <Badge>{notification.type}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
      <div className="text-center">
        <Button variant="link">View All Notifications</Button>
      </div>
    </div>
  )
}

