"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function AgentNotes() {
  const [notes, setNotes] = useState("Client reported receiving the wrong item. Promised to send a replacement and expedite shipping.")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Agent Notes</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter agent notes here"
          className="min-h-[150px] mb-2"
        />
        <Button>Save Notes</Button>
      </CardContent>
    </Card>
  )
}

