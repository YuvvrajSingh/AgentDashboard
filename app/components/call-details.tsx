import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CallDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Call Details</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-2">
          <dt className="font-semibold">Date and Time:</dt>
          <dd>2023-07-15 14:30</dd>
          <dt className="font-semibold">Duration:</dt>
          <dd>00:45:23</dd>
          <dt className="font-semibold">Agent Name:</dt>
          <dd>John Doe</dd>
          <dt className="font-semibold">Client Name:</dt>
          <dd>Jane Smith</dd>
        </dl>
      </CardContent>
    </Card>
  )
}

