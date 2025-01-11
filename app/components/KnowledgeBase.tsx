import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function KnowledgeBase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Knowledge Base Suggestions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li><Button variant="link">Account Access Troubleshooting</Button></li>
          <li><Button variant="link">Password Reset Guide</Button></li>
          <li><Button variant="link">Common Account Issues</Button></li>
        </ul>
      </CardContent>
    </Card>
  )
}

