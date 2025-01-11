import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Transcription() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Real-Time Transcription</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-48 overflow-y-auto bg-gray-100 p-2 rounded">
          <p><strong>Agent:</strong> Hello, thank you for calling. How may I assist you today?</p>
          <p><strong>Client:</strong> Hi, I'm having trouble accessing my account.</p>
          <p><strong>Agent:</strong> I'm sorry to hear that. Can you please provide me with your account number?</p>
          <p><strong>Client:</strong> Sure, it's 12345.</p>
        </div>
      </CardContent>
    </Card>
  )
}

