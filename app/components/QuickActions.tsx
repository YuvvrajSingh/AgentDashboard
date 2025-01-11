import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PhoneCall, CalendarRange } from 'lucide-react'

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4">
        <Button className="flex-1">
          <PhoneCall className="mr-2 h-4 w-4" /> Start Call
        </Button>
        <Button className="flex-1" variant="outline">
          <CalendarRange className="mr-2 h-4 w-4" /> Reschedule
        </Button>
      </CardContent>
    </Card>
  )
}

