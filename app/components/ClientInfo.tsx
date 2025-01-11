import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ClientInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Information</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Account:</strong> #12345</p>
        <p><strong>Last Interaction:</strong> 2023-05-15</p>
      </CardContent>
    </Card>
  )
}

