"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'

const dummyTranscript = `
Agent: Hello, thank you for calling. How may I assist you today?
Client: Hi, I'm having trouble with my recent order.
Agent: I'm sorry to hear that. Can you please provide me with your order number?
Client: Sure, it's ORDER123456.
Agent: Thank you. I see your order here. What seems to be the problem?
Client: I received the wrong item in my package.
Agent: I apologize for the inconvenience. Let me help you resolve this issue...
`

export default function TranscriptionPlayback() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlayPause = () => setIsPlaying(!isPlaying)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transcription Playback</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 h-40 overflow-y-auto">
          <pre className="whitespace-pre-wrap">{dummyTranscript}</pre>
        </div>
        <div className="space-y-2">
          <Slider
            value={[progress]}
            max={100}
            step={1}
            onValueChange={(value) => setProgress(value[0])}
          />
          <div className="flex justify-center space-x-2">
            <Button variant="outline" size="icon">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button onClick={togglePlayPause}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="icon">
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

