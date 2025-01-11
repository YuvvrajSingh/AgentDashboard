import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneCall, PhoneOff, Mic, MicOff, Pause, Play, PhoneForwarded } from 'lucide-react'

export default function CallControls() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Call Controls</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        <Button><PhoneCall className="mr-2 h-4 w-4" /> Answer</Button>
        <Button variant="destructive"><PhoneOff className="mr-2 h-4 w-4" /> Hang Up</Button>
        <Button><Mic className="mr-2 h-4 w-4" /> Mute</Button>
        <Button><Pause className="mr-2 h-4 w-4" /> Hold</Button>
        <Button><PhoneForwarded className="mr-2 h-4 w-4" /> Transfer</Button>
      </CardContent>
    </Card>
  )
}

