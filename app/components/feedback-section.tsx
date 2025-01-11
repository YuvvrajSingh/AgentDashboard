import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeedbackSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Section</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Positive Feedback Received</h3>
          <ul className="list-disc list-inside">
            <li>Excellent problem-solving skills</li>
            <li>Clear and concise communication</li>
            <li>Patience with difficult customers</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Areas for Improvement</h3>
          <ul className="list-disc list-inside">
            <li>Reduce average handle time</li>
            <li>Increase product knowledge</li>
            <li>Improve multi-tasking abilities</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

